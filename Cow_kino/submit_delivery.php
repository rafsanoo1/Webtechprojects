<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// submit_delivery.php
include('db_connection.php');

// Ensure client cookie exists (same logic as page)
if (!isset($_COOKIE['cowkino_client_id'])) {
  $newId = bin2hex(random_bytes(16));
  setcookie('cowkino_client_id', $newId, time() + (86400 * 365), "/");
  $_COOKIE['cowkino_client_id'] = $newId;
}
$clientId = $_COOKIE['cowkino_client_id'];

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
  header("Location: cow_delivery.php");
  exit();
}

// Collect inputs
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$contact = trim($_POST['contact'] ?? '');
$pickup = trim($_POST['pickup_location'] ?? '');
$dropoff = trim($_POST['dropoff_location'] ?? '');
$distanceKm = (float)($_POST['distance_km'] ?? 0);
$cowCount = (int)($_POST['cow_count'] ?? 0);

// Basic validation
if ($name === '' || $email === '' || $contact === '' || $pickup === '' || $dropoff === '' || $distanceKm <= 0 || $cowCount <= 0) {
  header("Location: cow_delivery.php");
  exit();
}

// SECURITY: Recalculate charge in PHP (never trust readonly input)
$deliveryCharge = $distanceKm * 120 * ($cowCount * 1.5);

// Insert using prepared statement
$stmt = $conn->prepare("INSERT INTO cow_delivery
  (client_id, name, email, contact, pickup_location, dropoff_location, distance_km, cow_count, delivery_charge)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");

$stmt->bind_param(
  "ssssssdid",
  $clientId,
  $name,
  $email,
  $contact,
  $pickup,
  $dropoff,
  $distanceKm,
  $cowCount,
  $deliveryCharge
);

$stmt->execute();
$stmt->close();

header("Location: cow_delivery.php?status=success");
exit();
?>
