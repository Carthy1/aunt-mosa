<?php
/**
 * Mena's Nest Group - Newsletter Subscribers API
 * Hostinger Apache/LiteSpeed PHP compatible
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

$dataFile = dirname(__DIR__) . '/data/subscribers.json';

// Ensure data directory exists
if (!is_dir(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// GET Request: Retrieve all subscribers
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit;
}

// POST Request: Add new subscriber or delete
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid request payload']);
        exit;
    }

    $subscribers = [];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $subscribers = json_decode($json, true) ?: [];
    }

    $action = $payload['action'] ?? 'subscribe';

    // 1. ADD SUBSCRIBER
    if ($action === 'subscribe') {
        $email = trim($payload['email'] ?? '');
        if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Please provide a valid email address']);
            exit;
        }

        // Check if already subscribed
        foreach ($subscribers as $sub) {
            if (strtolower($sub['email'] ?? '') === strtolower($email)) {
                echo json_encode(['success' => true, 'alreadySubscribed' => true, 'message' => 'Email is already subscribed to the Circle!']);
                exit;
            }
        }

        $newEntry = [
            'email' => $email,
            'date' => date('M j, Y, g:i A'),
            'source' => $payload['source'] ?? 'Website Signup'
        ];

        array_unshift($subscribers, $newEntry);
        file_put_contents($dataFile, json_encode($subscribers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

        echo json_encode(['success' => true, 'message' => 'Successfully joined the Wellness Circle!', 'entry' => $newEntry]);
        exit;
    }

    // 2. DELETE SUBSCRIBER
    if ($action === 'delete') {
        $email = trim($payload['email'] ?? '');
        $subscribers = array_values(array_filter($subscribers, function($s) use ($email) {
            return strtolower($s['email'] ?? '') !== strtolower($email);
        }));

        file_put_contents($dataFile, json_encode($subscribers, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Subscriber removed successfully', 'subscribers' => $subscribers]);
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown action']);
    exit;
}

