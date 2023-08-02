<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Sweet Alert</title>
	<link href="bootstrap5.1/bootstrap.min.css" rel="stylesheet">
</head>
<body>
	<arcticle>
		<section>
			<div class="container">
				<div class="text-center">
					<h1 class="title-section mb-3">Contact Form Sweet Alert</h1>
				</div>
				<div class="row justify-content-center mt-5">
					<div class="col-lg-8">
						<form id="contact-form" action="https://www.ibclng.co.th/sendmail" method="POST" class="form-contact">
							<div class="row">
								<div class="col-sm-6 py-2">
									<label for="name" class="fg-grey">Name</label>
									<input type="text" class="form-control" required id="name" name="name" placeholder="Enter name...">
								</div>
								<div class="col-sm-6 py-2">
									<label for="email" class="fg-grey">Email</label>
									<input type="text" class="form-control" required id="email" name="email" placeholder="Email Address name...">
								</div>
								<div class="col-sm-12 py-2">
									<label for="subject" class="fg-grey">Subject</label>
									<input type="text" class="form-control" required id="subject" name="subject" placeholder="Subject...">
								</div>
								<div class="col-sm-12 py-2">
									<label for="message" class="fg-grey">Message</label>
									<textarea id="message" rows="8" required class="form-control" name="message" placeholder="Enter message..."></textarea>
								</div>
								<div class="col-sm-12 mt-3">
									<button tyle="submit" name="sendmail" class="btn btn-primary px-5">Submit</button>
								</div>	
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</arcticle>
	<script src="bootstrap5.1/bootstrap.bundle.min.js"></script>

</body>
</html>