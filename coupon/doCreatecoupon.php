<?php

require_once("../db_connect.php");
session_start();
//================================
if (
    !isset($_POST["name"]) || !isset($_POST["code"]) || !isset($_POST["value"]) || !isset($_POST["min_limit"]) ||
    !isset($_POST["description"]) || !isset($_POST["start_date"]) || !isset($_POST["end_date"])
) {
    $_SESSION["errorMsg"] = "請循正常管道進入";
    header("location:create-coupon.php");
    exit;
}
//================================

$name = $_POST["name"];
$code = $_POST["code"];
$value = $_POST["value"];
$min_limit = $_POST["min_limit"];
$description = $_POST["description"];
$start_date = $_POST["start_date"];
$end_date = $_POST["end_date"];
$now = date('Y-m-d H:i:s');

$errorMsg = [];

if (empty($name)) {
    $errorMsg['name'] = "請輸入優惠券名稱。<br>";
}
if (empty($code)) {
    $errorMsg['code'] = "請輸入優惠券代碼。<br>";
}
//================================
if (!isset($_POST["category"])) {
    $errorMsg['category'] = "請選擇使用範圍。<br>";
}
if (!isset($_POST["coupontype"])) {
    $errorMsg['coupontype'] = "請選擇優惠券折扣單位。<br>";
}
//================================
if (empty($value)) {
    $errorMsg['value'] = "請輸入百分比或金額。<br>";
}
if (empty($min_limit)) {
    $errorMsg['min_limit'] = "請輸入限制低消金額。<br>";
}
if (empty($description)) {
    $errorMsg['description'] = "請輸入優惠券說明。<br>";
}
if (empty($start_date)) {
    $errorMsg['start_date'] = "請輸入開始日期。<br>";
}
if (empty($end_date)) {
    $errorMsg['end_date'] = "請輸入截止日期。<br>";
}

if (!empty($errorMsg)) {
    $_SESSION["formData"] = $_POST;
    $_SESSION["errorMsg"] = $errorMsg;
    header("location:create-coupon.php");
    exit;
}

//================================
$category = $_POST["category"];
$coupontype = $_POST["coupontype"];

$sql = "INSERT INTO coupons (name, code, category, coupontype, value, min_limit, description, start_date, end_date, created_at)
VALUES ('$name', '$code', '$category', '$coupontype', '$value', '$min_limit', '$description', '$start_date', '$end_date', '$now')";

if ($conn->query($sql) === TRUE) {
    unset($_SESSION["formData"]);
    echo "優惠券建立成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header("Location: coupons.php");
exit;