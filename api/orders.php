<?php
/**
 * Mena's Nest Group - Orders & Bookings Management API
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

$dataFile = dirname(__DIR__) . '/data/orders.json';

// Ensure data directory exists
if (!is_dir(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// GET Request: Retrieve all orders
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit;
}

// POST Request: Create or update order
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid request payload']);
        exit;
    }

    $orders = [];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $orders = json_decode($json, true) ?: [];
    }

    $action = $payload['action'] ?? 'create';

    // 1. CREATE NEW ORDER (From Storefront Checkout)
    if ($action === 'create') {
        $order = $payload['order'] ?? $payload;
        if (empty($order['orderId'])) {
            $order['orderId'] = '#MN-' . rand(10000, 99999);
        }
        if (empty($order['date'])) {
            $order['date'] = date('M j, Y, g:i A');
        }
        if (empty($order['status'])) {
            $order['status'] = 'New Order Received';
        }

        // Add to front of orders list
        array_unshift($orders, $order);

        file_put_contents($dataFile, json_encode($orders, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Order created successfully', 'order' => $order]);
        exit;
    }

    // 2. UPDATE ORDER STATUS (From Admin Dashboard)
    if ($action === 'update_status') {
        $orderId = $payload['orderId'] ?? null;
        $status = $payload['status'] ?? null;

        if (!$orderId || !$status) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Order ID and status required']);
            exit;
        }

        $updated = false;
        foreach ($orders as &$ord) {
            if ($ord['orderId'] === $orderId) {
                $ord['status'] = $status;
                $updated = true;
                break;
            }
        }

        if ($updated) {
            file_put_contents($dataFile, json_encode($orders, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
            echo json_encode(['success' => true, 'message' => 'Order status updated']);
        } else {
            http_response_code(404);
            echo json_encode(['success' => false, 'message' => 'Order not found']);
        }
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown action']);
    exit;
}

