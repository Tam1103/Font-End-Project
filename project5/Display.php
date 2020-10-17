<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>

	<style type="text/css">
		@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap');

		*{
			font-family: 'Nunito', sans-serif;
		}
	</style>
</head>
<body>
	Chào mừng bạn <?php echo $_POST["name"]; ?>
	<br>
	Bạn có công ty: <?php echo $_POST["company"]; ?>
	<br>
	Email của bạn:  <?php echo $_POST["email"]; ?>
	<br>
	Phone: <?php echo $_POST["phone"]; ?>
</body>
</body>
</html>