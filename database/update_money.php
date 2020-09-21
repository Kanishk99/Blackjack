<?php
        session_start();
    $connect = mysqli_connect("localhost", "root", "", "blackjackUD"); # connection to db
            if (isset($_SESSION['username'])) {
                $new_money = $_SESSION['hiddenMoney'];
                $name = $_SESSION['username'];
                $update_money = "UPDATE user_details SET money = money + '$new_money' WHERE user_name = '$name'";
                if (mysqli_query($connect, $update_money)) {
                    echo "
                <script>
                alert('Records were updated successfully.');    
                </script>";
                } else {
                    echo "
                <script>
                alert('ERROR');
                </script>";
                }
            }
?>
