<?php include('server.php') ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration System</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="header">
        <h2>Register</h2>
    </div>
    <form action="register_db.php" method="post">
        <?php include('errors.php'); ?>
        <div class="input-group">
            <label for="username">Username</label>
            <input type="text" name="username">
        </div>
        <div class="input-group">
            <label for="email">Email</label>
            <input type="email" name="email">
        </div>
        <div class="input-group">
            <label for="password_1" name="password_1">Password</label>
            <input type="password" name="password_1">
        </div>       
        <div class="input-group">
            <label for="password_2" name="password_2">Confirm Password</label>
            <input type="password" name="password_2">
        </div>
        <div class="input-group">
            <button type="submit" name="reg_user" class="btn">Register</button>
        </div>
        <p>Already a member? <a href="login.php">Sign in</a></p>
    </form>
</body>
</html>
