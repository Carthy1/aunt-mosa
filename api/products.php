<?php
/**
 * Mena's Nest Group - Products & Services Management API
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

$dataFile = dirname(__DIR__) . '/data/products.json';

// Ensure data directory exists
if (!is_dir(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// GET Request: Retrieve all products
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit;
}

// POST Request: Add, update or delete product
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload || !isset($payload['action'])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid request payload']);
        exit;
    }

    $products = [];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $products = json_decode($json, true) ?: [];
    }

    $action = $payload['action'];

    // 1. SAVE / UPDATE PRODUCT
    if ($action === 'save') {
        $item = $payload['product'] ?? null;
        if (!$item || empty($item['name'])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Product details are required']);
            exit;
        }

        // If no ID, generate one
        if (empty($item['id'])) {
            $item['id'] = 'prod-' . time() . '-' . rand(100, 999);
        }

        $foundIndex = -1;
        foreach ($products as $idx => $p) {
            if ($p['id'] === $item['id']) {
                $foundIndex = $idx;
                break;
            }
        }

        if ($foundIndex >= 0) {
            // Update existing
            $products[$foundIndex] = array_merge($products[$foundIndex], $item);
        } else {
            // Add new to front
            array_unshift($products, $item);
        }

        file_put_contents($dataFile, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Product saved successfully', 'product' => $item]);
        exit;
    }

    // 2. DELETE PRODUCT
    if ($action === 'delete') {
        $id = $payload['id'] ?? null;
        if (!$id) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Product ID required for deletion']);
            exit;
        }

        $products = array_values(array_filter($products, function($p) use ($id) {
            return $p['id'] !== $id;
        }));

        file_put_contents($dataFile, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Product deleted successfully']);
        exit;
    }

    // 3. TOGGLE STOCK
    if ($action === 'toggle_stock') {
        $id = $payload['id'] ?? null;
        $inStock = $payload['inStock'] ?? true;

        foreach ($products as &$p) {
            if ($p['id'] === $id) {
                $p['stock'] = $inStock ? 20 : 0;
                break;
            }
        }

        file_put_contents($dataFile, json_encode($products, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Stock updated successfully']);
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown action']);
    exit;
}
