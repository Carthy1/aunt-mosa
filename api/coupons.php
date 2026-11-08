<?php
/**
 * Mena's Nest Group - Promotions & Discount Codes API
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

$dataFile = dirname(__DIR__) . '/data/coupons.json';

// Ensure data directory exists
if (!is_dir(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// GET Request: Retrieve all coupons
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit;
}

// POST Request: Create, update, toggle or delete coupon
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid request payload']);
        exit;
    }

    $coupons = [];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $coupons = json_decode($json, true) ?: [];
    }

    $action = $payload['action'] ?? 'save';

    // 1. SAVE / CREATE / UPDATE COUPON
    if ($action === 'save') {
        $coupon = $payload['coupon'] ?? null;
        if (!$coupon || empty($coupon['code'])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Promo code is required']);
            exit;
        }

        $code = strtoupper(trim($coupon['code']));
        $coupon['code'] = $code;
        $coupon['active'] = isset($coupon['active']) ? (bool)$coupon['active'] : true;
        $coupon['val'] = floatval($coupon['val'] ?? 0);
        $coupon['minOrder'] = floatval($coupon['minOrder'] ?? 0);

        $foundIndex = -1;
        foreach ($coupons as $idx => $c) {
            if (strtoupper($c['code'] ?? '') === $code) {
                $foundIndex = $idx;
                break;
            }
        }

        if ($foundIndex >= 0) {
            $coupons[$foundIndex] = array_merge($coupons[$foundIndex], $coupon);
        } else {
            $coupons[] = $coupon;
        }

        file_put_contents($dataFile, json_encode($coupons, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => "Coupon '{$code}' saved successfully", 'coupon' => $coupon, 'coupons' => $coupons]);
        exit;
    }

    // 2. TOGGLE ACTIVE STATUS
    if ($action === 'toggle') {
        $code = strtoupper(trim($payload['code'] ?? ''));
        foreach ($coupons as &$c) {
            if (strtoupper($c['code'] ?? '') === $code) {
                $c['active'] = !($c['active'] ?? true);
                break;
            }
        }
        unset($c);

        file_put_contents($dataFile, json_encode($coupons, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Coupon status updated', 'coupons' => $coupons]);
        exit;
    }

    // 3. DELETE COUPON
    if ($action === 'delete') {
        $code = strtoupper(trim($payload['code'] ?? ''));
        $coupons = array_values(array_filter($coupons, function($c) use ($code) {
            return strtoupper($c['code'] ?? '') !== $code;
        }));

        file_put_contents($dataFile, json_encode($coupons, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => "Coupon '{$code}' deleted", 'coupons' => $coupons]);
        exit;
    }

    // 4. SAVE ALL (Bulk sync)
    if ($action === 'save_all') {
        $list = $payload['coupons'] ?? [];
        file_put_contents($dataFile, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'All coupons synchronized successfully', 'coupons' => $list]);
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown action']);
    exit;
}
