<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get fetch API</title>
</head>
<body>
    <script>
        $api_list = file_get_contents('https://api.coincap.io/v2/assets');    
        $data_list = json_decode($api_list,true);
    </script>
    <?php echo $api_list['data']['0'] ?>
    <div id="app">test</div>  
    <script src="script.js"></script>  
</body>
</html>