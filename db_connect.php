<?php
// 設定台灣的時區
date_default_timezone_set('Asia/Taipei');

// 共用
$server_name="localhost";
$user_name="admin";
$db_name = "fundodo";

//* 泓宣 宏榮
$password="12345";
// $db_name="db_test";

//* 李柔
$password = "12345";
// $db_name = "pet_hotel_db";

//* 之恩
$password = "dgyy";

//* 陳致
$password = ".glWcQbgMsmuL2rB";
// $password = "44444";

//* 晨宇
// $db_name="db-products";

$conn=new mysqli($server_name,$user_name,$password,$db_name);

if ($conn->connect_error) {
    die("連線失敗: " . $conn->connect_error);
}