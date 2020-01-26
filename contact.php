<?php 
	session_start(); 
	
?>
	
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Wes Hightower //Contact</title>
	<link rel="stylesheet" href="style.css" type="text/css">
	<link href='http://fonts.googleapis.com/css?family=Istok+Web|Varela' rel='stylesheet' type='text/css'>
	<link href='https://fonts.googleapis.com/css?family=Roboto:400,700' rel='stylesheet' type='text/css'>
	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="ga.js"></script>
	<script type="text/javascript" src="script.js"></script>
	
</head>

<body>
	<div id="navHolder">
		<div id="navigation">
			<a href="index.html">
				<div id="logo">
				</div> <!-- /#logo -->			
			</a>
			<nav id="mainNav">
				<a href="about.html" id="navAbout" class="navLink">
					About
				</a>
	  			<a href="portfolio.html" id="navPortfolio" class="navLink">
	  				Portfolio
	  			</a>
				<a href="resume.html" id="navResume" class="navLink">
					Resume
				</a>
				<a href="contact.php" id="navContact" class="navLink currentPage">
					Contact
				</a>
			</nav> <!-- /#mainNav -->
		</div> <!-- /#navigation -->
	</div> <!-- /#navHolder -->
	
	<div id="headHolder">
		<div id="header">
			<img src="images/headImage.png" class="homeSlide"/>
			<h1 id="homeHead">
				Contact
			</h1>
		</div> <!-- /#header -->
	</div> <!-- /#headHolder -->
	
	<div id="contentHolder">
		<div id="content">
		<?php
			if (isset($_REQUEST['email']) == true)
			{
				echo "<script>ga('send', 'pageview', '/forms/contactThanks');</script>";
				echo "Thank you for your input!";
				$to = "bundleofstrings@gmail.com";
				$subject = "Comment from kiopah.com";
				$message = $_REQUEST['message'];
				$name = $_REQUEST['name'];
				$email = $_REQUEST['email'];
				//$headers = "From: $from";
				mail($to,"Subject: " . $subject,"From:\t\t" . $email.  "\nName:\t\t" . $name . "\nComment:\t" . $message);

				mail($email,"Subject: Thanks for your input!","Thank you for taking the time to visit and fill out my form. \n\t-Wes Hightower");
			}
			else
			{
			//$_SESSION['USERNAME'] = "yes";
			echo '<form id="contact" method="POST" action="contact.php">
				<div id="nameLabel" class="formLabel">
					Name
				</div>
				
				<div id="nameInput" class="formDiv">
					<input type="text" class="formInput" name="name" required />
				</div>
				
				<div id="emailLabel" class="formLabel">
					E-Mail
				</div>
				
				<div id="emailInput" class="formDiv">
					<input type="email" class="formInput" name="email" required />
				</div>
				
				<div id="messageLabel" class="formLabel">
					Message
				</div>
				
				<div id="messageInput" class="formDiv">
					<textarea id="messageBox" class="formInput" name="message"></textarea>
				</div>
				
				<div class="formDiv">
					<input type="submit" value="Send" id="submitButton"/>
				</div>
			</form>';
			}
			?>
		</div> <!-- /#content -->
	</div> <!-- /#contentHolder -->
	
	<div id="footHolder">
		<div id="footer">
			<span id="copyright">
				&copy; Wes Hightower 2016
			</span>
			
			<ul id="footLinks">
				<li>
					<a href="https://www.linkedin.com/in/wes-hightower-17682562?trk=nav_responsive_tab_profile" target="_blank">
						<img src="images/linkedin.png" alt="Linked In" title="Linked In" />
					</a>
				</li>
				
				<li>
					<a href="https://www.facebook.com/wes.hightower.3" target="_blank">
						<img src="images/fb-art.jpg" alt="Facebook" title="Facebook" />
					</a>
				</li>
				
			</ul> <!-- /#footLinks -->
		</div> <!-- /#footer -->
	</div> <!-- /#footHolder -->
	
</body>
</html>
