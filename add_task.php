<?php
header('Content-Type: application/json');

// Include database connection
require_once "db.php";

// Get JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate task name
if (isset($data['name']) && !empty(trim($data['name']))) {
    $taskName = trim($data['name']);

    // Insert task
    $stmt = $conn->prepare("INSERT INTO tasks (name) VALUES (?)");
    $stmt->bind_param("s", $taskName);

    if ($stmt->execute()) {
        echo json_encode([
            "success" => true,
            "message" => "Task added to database successfully"
        ]);
    } else {
        echo json_encode([
            "success" => false,
            "message" => "Failed to insert task: " . $stmt->error
        ]);
    }

    $stmt->close();
} else {
    echo json_encode([
        "success" => false,
        "message" => "Task name is required"
    ]);
}

$conn->close();
?>
