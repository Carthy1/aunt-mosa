<?php
/**
 * Mena's Nest Group - Production File Upload API Handler
 * Compatible with Hostinger Premium & Shared Web Hosting (LiteSpeed / Apache PHP)
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

// Handle preflight CORS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed. Use POST to upload files.'
    ]);
    exit;
}

// Check if a file was uploaded
if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
    $errorCode = isset($_FILES['file']) ? $_FILES['file']['error'] : UPLOAD_ERR_NO_FILE;
    $errorMessage = 'No file was uploaded.';

    switch ($errorCode) {
        case UPLOAD_ERR_INI_SIZE:
        case UPLOAD_ERR_FORM_SIZE:
            $errorMessage = 'File exceeds server maximum upload size limit.';
            break;
        case UPLOAD_ERR_PARTIAL:
            $errorMessage = 'File was only partially uploaded.';
            break;
        case UPLOAD_ERR_NO_FILE:
            $errorMessage = 'No file was attached to the request.';
            break;
        case UPLOAD_ERR_NO_TMP_DIR:
            $errorMessage = 'Missing temporary folder on server.';
            break;
        case UPLOAD_ERR_CANT_WRITE:
            $errorMessage = 'Failed to write file to disk.';
            break;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => $errorMessage]);
    exit;
}

$file = $_FILES['file'];

// Target storage directory (in public root /uploads/)
$uploadDir = dirname(__DIR__) . '/uploads/';

if (!is_dir($uploadDir)) {
    if (!mkdir($uploadDir, 0755, true)) {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Unable to create uploads directory on server.'
        ]);
        exit;
    }
}

// Security: Validate file extension & MIME type
$allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'pdf'];
$allowedMimeTypes = [
    'image/jpeg',
    'image/png',
    'image/webp',
    'application/pdf'
];

$fileExtension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
$fileMimeType = '';

if (function_exists('finfo_open')) {
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $fileMimeType = finfo_file($finfo, $file['tmp_name']);
    finfo_close($finfo);
} else {
    $fileMimeType = $file['type'];
}

if (!in_array($fileExtension, $allowedExtensions) || !in_array($fileMimeType, $allowedMimeTypes)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Invalid file type. Only JPG, PNG, WEBP, and PDF files are permitted.'
    ]);
    exit;
}

// Validate file size (max 8MB)
$maxSizeBytes = 8 * 1024 * 1024;
if ($file['size'] > $maxSizeBytes) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'File size exceeds 8MB limit.'
    ]);
    exit;
}

// Create unique, sanitized filename
$sanitizedBaseName = preg_replace('/[^a-zA-Z0-9_-]/', '_', pathinfo($file['name'], PATHINFO_FILENAME));
$uniqueSuffix = time() . '_' . bin2hex(random_bytes(4));
$newFileName = $sanitizedBaseName . '_' . $uniqueSuffix . '.' . $fileExtension;
$destinationPath = $uploadDir . $newFileName;

// Move temporary uploaded file to persistent uploads directory
if (move_uploaded_file($file['tmp_name'], $destinationPath)) {
    // Generate public relative URL
    $publicUrl = 'uploads/' . $newFileName;

    echo json_encode([
        'success' => true,
        'message' => 'File uploaded successfully.',
        'file' => [
            'originalName' => $file['name'],
            'filename'     => $newFileName,
            'url'          => $publicUrl,
            'size'         => $file['size'],
            'mimeType'     => $fileMimeType
        ]
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Failed to save uploaded file. Check folder permissions.'
    ]);
}
