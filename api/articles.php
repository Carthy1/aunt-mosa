<?php
/**
 * Mena's Nest Group - Wellness Articles & Homecoming Guides API
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

$dataFile = dirname(__DIR__) . '/data/articles.json';

// Ensure data directory exists
if (!is_dir(dirname($dataFile))) {
    mkdir(dirname($dataFile), 0755, true);
}

// GET Request: Retrieve all articles
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (file_exists($dataFile)) {
        $content = file_get_contents($dataFile);
        echo $content;
    } else {
        echo json_encode([]);
    }
    exit;
}

// POST Request: Create, update, or delete article
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $raw = file_get_contents('php://input');
    $payload = json_decode($raw, true);

    if (!$payload) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => 'Invalid request payload']);
        exit;
    }

    $articles = [];
    if (file_exists($dataFile)) {
        $json = file_get_contents($dataFile);
        $articles = json_decode($json, true) ?: [];
    }

    $action = $payload['action'] ?? 'save';

    // 1. SAVE / CREATE / UPDATE ARTICLE
    if ($action === 'save') {
        $art = $payload['article'] ?? null;
        if (!$art || empty($art['title'])) {
            http_response_code(400);
            echo json_encode(['success' => false, 'message' => 'Article title is required']);
            exit;
        }

        if (empty($art['id'])) {
            $art['id'] = 'art-' . strtolower(preg_replace('/[^a-zA-Z0-9]+/', '-', substr($art['title'], 0, 30))) . '-' . rand(100, 999);
        }

        if (empty($art['categoryLabel'])) {
            $art['categoryLabel'] = ucfirst($art['category'] ?? 'Wellness Guide');
        }

        if (empty($art['readTime'])) {
            $art['readTime'] = '5 min read';
        }

        $foundIndex = -1;
        foreach ($articles as $idx => $existing) {
            if ($existing['id'] === $art['id']) {
                $foundIndex = $idx;
                break;
            }
        }

        if ($foundIndex >= 0) {
            $articles[$foundIndex] = array_merge($articles[$foundIndex], $art);
        } else {
            array_unshift($articles, $art);
        }

        file_put_contents($dataFile, json_encode($articles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Article saved successfully', 'article' => $art, 'articles' => $articles]);
        exit;
    }

    // 2. DELETE ARTICLE
    if ($action === 'delete') {
        $artId = $payload['id'] ?? '';
        $articles = array_values(array_filter($articles, function($a) use ($artId) {
            return ($a['id'] ?? '') !== $artId;
        }));

        file_put_contents($dataFile, json_encode($articles, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'Article deleted successfully', 'articles' => $articles]);
        exit;
    }

    // 3. SAVE ALL (Bulk sync)
    if ($action === 'save_all') {
        $list = $payload['articles'] ?? [];
        file_put_contents($dataFile, json_encode($list, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
        echo json_encode(['success' => true, 'message' => 'All articles synchronized', 'articles' => $list]);
        exit;
    }

    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Unknown action']);
    exit;
}

