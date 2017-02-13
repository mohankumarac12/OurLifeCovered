<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bootstrap - Prebuilt Layout</title>

<!-- Bootstrap -->
<link href="css/bootstrap.css" rel="stylesheet">

<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,400i,700,800" rel="stylesheet">

<script>
	var currentPage;
	currentPage = 1;
</script>
<!-- Bing Ads Code -->
<script>(function(w,d,t,r,u){var f,n,i;w[u]=w[u]||[],f=function(){var o={ti:"5538524"};o.q=w[u],w[u]=new UET(o),w[u].push("pageLoad")},n=d.createElement(t),n.src=r,n.async=1,n.onload=n.onreadystatechange=function(){var s=this.readyState;s&&s!=="loaded"&&s!=="complete"||(f(),n.onload=n.onreadystatechange=null)},i=d.getElementsByTagName(t)[0],i.parentNode.insertBefore(n,i)})(window,document,"script","//bat.bing.com/bat.js","uetq");</script><noscript><img src="//bat.bing.com/action/0?ti=5538524&Ver=2" height="0" width="0" style="display:none; visibility: hidden;" /></noscript>
<!-- End Bing Ads Code -->
<!-- FACEBOOK REMARKETING CODE -->
<!-- Place Between <head> and </head> -->

<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '365200520508834'); // Insert your pixel ID here.
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=365200520508834&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->
</head>
<body>
<div class="max-width">
<nav class="navbar navbar-default">
  <div class="container-fluid"> 
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#defaultNavbar1"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button>
      <a class="navbar-brand" href="olc.html"></a></div>
    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="defaultNavbar1">
     
      
      <ul class="nav navbar-nav navbar-right">
        <li><a href="olc.html">Home</a></li>
        <li><a href="quote-form.html">Insurance 101</a></li>
        <li><a href="quote-form.html">Get a Quote</a></li>
        
      </ul>
    </div>
    <!-- /.navbar-collapse --> 
  </div>
  <!-- /.container-fluid --> 
</nav>
<div class="container-fluid">
<div id="hero">
    <div id="heroCarousel" class = " carousel slide">
        
        <ol class = "carousel-indicators ">
            <li data-target = "#heroCarousel" data-slide-to = "0" class="active"></li>
            <li data-target = "#heroCarousel" data-slide-to = "1"></li>
            <li data-target = "heroCarousel" data-slide-to ="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="item active">
                <img src = "images/hero1.jpg">
                <div class="carousel-caption">
                    <h4 class="hero-caption">Unlike the perfect selfies people share,</h4>
                    <h4 class="hero-caption-bold">Life. Isn't. Always. Pretty.</h4>
                    <p>
                    Our Life Covered can help you find affordable life insurance on your terms, protecting your family from the unexpected.
                    </p>
                </div>
            </div>
            <div class="item">
                <img src = "images/hero2.jpg">
                <div class="carousel-caption">
                    <h4 class="hero-caption">First time parents? Twins? No worries. </h4>
                    <h4 class="hero-caption-bold">You totally got this.</h4>
                    <p>
                    Our Life Covered can get you covered with the life insurance your family needs in as little as 15 minutes.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="cta-container">
        <div class="row">
            <div class="col-sm-12">
            <h3>Find the right life insurance policy, fast.</h3>
            </div>
        </div>
        <div class="row"><form action="quote-form.html" method="get">
            <div class="col-sm-8">
                <select class="form-control" name="preference">
                    <option>
                        Select the option that sounds most like you...
                    </option>
                    <option value="1">I know what I can afford</option>
                    <option value="2">I know how much I need</option>
                    <option value="3">I'm not sure how much I need</option>
                </select>
            </div>
            <div class="col-sm-4">
            <input class="btn btn-primary" type="submit" value="Let's Go!">
        </div></form>
        </div>
    </div>
    <div class="scrollprompt">
    	
        <div class="row">
            <div class="col-sm-12">
                Not really sure if you need life insurance?
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <button type="button" class="btn btn-outline-info">Scroll Down</button>
            </div>
        </div>
   
    </div>


  

</div>
<div class="container quiz">
   	<div class="row quiz-header">
        <div id ="quiz quiz-header" class="col-md-12">
          <div class="row">
            <div class="col-md-12">
              <h1 class="text-center"><span>Do I Need Insurance?</span></h1>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h2 class="text-center">Take the quiz.</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-12">
              <h3 class="text-center">These three questions can help you decide.</h3>
            </div>
          </div>
        </div>
    </div>
    <div id="quiz-inner">
    <div class="row quiz-content text-center" id="quiz-content-1">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4>Question 1:</h4>
            <h5>What is your marital status?</h5>
            <p>(click on your answer)</p>
            <div class="row quiz-btn-row">
            	<div class="col-xs-4"><button type="button" id="btn-single" class="btn quiz"><span>Single</span></button></div>
                <div class="col-xs-4"><button type="button" id="btn-hitched" class="btn quiz"><span>Hitched</span></button></div>
                <div class="col-xs-4"><button type="button" id="btn-joined" class="btn quiz"><span>Civilly Joined</span></button></div>
                
                
            </div>
            
		</div>
        
        
    </div>
    <div class="row quiz-content text-center hide-item" id="quiz-content-3">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer">Congrats, you love birds! Let’s talk...
</h4>
            <p class="answer">Here’s a hard truth: a lasagna fundraiser after the funeral is probably not going to be enough to pay the bills if something were to happen to you or your spouse. Protecting the person you’ve shared your life with is a great reason to consider life insurance.</p>
            <a class="btn quiz-cta" href="quote-form.html">Lock in Your Rate</a>
            <div class="row quiz-btn-row">
                
                
            </div>
		<div class="btn goback"><span>Previous</span></div>
        <div class="btn goforward"><span>Next</span></div></div>
        
        
    </div>
    <div class="row quiz-content text-center hide-item" id="quiz-content-2">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer">Protect your future self...
</h4>
            <p class="answer">Even if you’re still single, getting coverage now could be a good idea. Typically, younger people in good health can qualify for the best prices on life insurance and lock in their rate for up to 20 years.</p>
            <a class="btn quiz-cta" href="quote-form.html">Lock in Your Rate</a>
            <div class="row quiz-btn-row">
                
                
            </div>
		<div class="btn goback"><span>Previous</span></div>
        <div class="btn goforward"><span>Next</span></div></div>
        
        
    </div>
    <div class="row quiz-content text-center hide-item" id="quiz-content-4">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4>Question 2:</h4>
            <h5>Do you have any children?</h5>
            <p>(click on your answer)</p>
            <div class="row quiz-btn-row">
            	<div class="col-xs-4 col-xs-offset-2"><button type="button" id="btn-kids" class="btn quiz"><span>Yes</span></button></div>
                <div class="col-xs-4 "><button type="button" id="btn-no-kids" class="btn quiz"><span>No</span></button></div>
               
                
                
            </div>
       </div>
        </div>
        <div class="row quiz-content text-center hide-item" id="quiz-content-5">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer">Leave them with more than just memories and old holiday decorations...
</h4>
            <p class="answer">For many parents, having life insurance is an important way to make sure their children can afford the best education possible, or a solid inheritance with which to start their own life.</p>
            <a class="btn quiz-cta" href="quote-form.html">Compare Rates</a>
            <div class="row quiz-btn-row">
                
                
            </div>
		<div class="btn goback"><span>Previous</span></div>
        <div class="btn goforward"><span>Next</span></div></div>
        
        
    </div>
    <div class="row quiz-content text-center hide-item" id="quiz-content-6">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer">It doesn’t take kids to be a family.
</h4>
            <p class="answer">You may not have little ones, but there are probably others in your life that you want to care for after you’re gone. Most policies allow you to select other family members as beneficiaries.</p>
            <a class="btn quiz-cta" href="quote-form.html">Compare Rates</a>
            <div class="row quiz-btn-row">
                
                
            </div>
		<div class="btn goback"><span>Previous</span></div>
        <div class="btn goforward"><span>Next</span></div></div>
        
        
    </div>
         <div class="row quiz-content text-center hide-item" id="quiz-content-7">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4>Question 3:</h4>
            <h5>Are you paying off a home mortgage?</h5>
            <p>(click on your answer)</p>
            <div class="row quiz-btn-row">
            	<div class="col-xs-4 col-xs-offset-2"><button type="button" id="btn-mortgage" class="btn quiz"><span>Yes</span></button></div>
                <div class="col-xs-4 "><button type="button" id="btn-no-mortgage" class="btn quiz"><span>No</span></button></div>
               
                
                
            </div>
            
		</div>
        </div>
        <div class="row quiz-content text-center hide-item" id="quiz-content-8">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer">Home is even sweeter when it’s paid off.</h4>
            <p class="answer">One of the most common reasons people buy life insurance is to make sure that their loved ones are able to keep up with mortgage payments and keep a roof over their heads.</p>
            <a class="btn quiz-cta" href="quote-form.html">Calculate What You Need</a>
            <div class="row quiz-btn-row">
                
                
            </div>
		<div class="btn goback"><span>Previous</span></div>
        <div class="btn goforward"><span>Next</span></div></div>
        
        
    </div>
    <div class="row quiz-content text-center hide-item" id="quiz-content-9">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer">Hey, someone has to pay the rent.</h4>
            <p class="answer">Did you know that in some states, renting a home can cost over 50% more per month than owning. Regardless of whether you own or rent, your family will likely need help keeping up with payments.</p>
            <a class="btn quiz-cta" href="quote-form.html">Calculate What You Need</a>
            <div class="row quiz-btn-row">
                
                
            </div>
		<div class="btn goback"><span>Previous</span></div>
        <div class="btn goforward"><span>Next</span></div></div>
        
        
    </div>
    <div class="row quiz-content text-center hide-item" id="quiz-content-10">
    	<div class="col-xs-8 col-xs-offset-2">
            <h4 class="answer" >So what’s the verdict?</h4>
            <h5>Are you ready to create a safety net for your loved ones?</h5>

            <div class="row quiz-btn-row">
            	<div class="col-xs-8 col-xs-offset-2"> <a class="btn quiz-cta" href="quote-form.html">Get a Quote</a><br><a href="olc.html">Restart Quiz</a></div>
                
               
                
                
            </div>
            
        </div>
    </div>
    </div>
 </div>
 <div class="home-divider">
 <div class="container">
    	<div class="col-md-6 col-md-offset-3"><h2>“I love shopping for life insurance,”</h2> <h3>said absolutely no one ever. Let us shop for you.</h3></div>
 </div>
 </div>
 <div class="container value-statement text-center">
 		<div class="row">
        <div class="col-md-12">
        	<h1>Get covered in minutes.</h1><h2>Our Life Covered makes it easy to find the right plan and apply.</h2>
        </div>
        </div>
        <div class="row product-features">
        	<div class="col-xs-3"><img src="images/calculator-icon.png" class="center-block"  alt=""/>Calculate your coverage amount</div>
            <div class="col-xs-1"></div>
            <div class="col-xs-3"><img src="images/list-icon.png" class="center-block"  alt=""/>See quotes from multiple providers</div>
            <div class="col-xs-1"></div>
            <div class="col-xs-3"><img src="images/quote-icon.png" class="center-block"  alt=""/>Apply and get coverage right away*</div>
        
        </div>
 </div>

<div id="footer-carousel">
    <div id="footerCarousel" class = "carousel slide">
        
        <ol class = "carousel-indicators ">
            <li data-target = "#footerCarousel" data-slide-to = "0" class="active"></li>
            <li data-target = "#footerCarousel" data-slide-to = "1"></li>
            <li data-target = "#footerCarousel" data-slide-to ="2"></li>
        </ol>
        <div class="carousel-inner">
            <div class="item active">
                <img src = "images/carousel-1.jpg">
                <div class="carousel-caption">
                    <h4 class="hero-caption">We do the leg work.</h4>
                    <p>
                    Tell us a bit about your lifestyle, and we’ll search from hundreds of policies to find the right match for you. Get your quote, apply, and get covered. Fast and simple.
                    </p>
                    <a class="btn" href="#">Find the Right Fit</a>
                </div>
            </div>
            <div class="item">
                <img src = "images/carousel-2.jpg">
                <div class="carousel-caption">
                    <h4 class="hero-caption">A little could do a lot.
</h4>
                    <p>
                    Even with a policy for as low as $25 per month, you could leave your family with a lot more than just memories, and help protect them against future expenses.
                    </p>
                    <a class="btn" href="#">See what $25 can do</a>

                </div>
            </div>
            <div class="item">
                <img src = "images/carousel-3.jpg">
                <div class="carousel-caption">
                    <h4 class="hero-caption">Already know your number?
</h4>
             
                    <p>
                    If you already have a good idea about how much coverage you need to protect your family, Enter it here and we’ll get your quote started.
                    </p>
                    <a class="btn" href="#">Get a Quote</a>
                </div>
            </div>
        </div>
    </div>
   
  
</div>

<div class="container-fluid footer">
  
  <div class="row">
    <div class="text-center col-md-12">
      <h4>Footer </h4>
      <p>Copyright &copy; 2015 &middot; All Rights Reserved &middot; <a href="http://yourwebsite.com/" >My Website</a></p>
    </div>
  </div>
<!-- jQuery (necessary for Bootstrap's JavaScript plugins) --> 
<script src="js/jquery-1.11.2.min.js"></script>

<!-- Include all compiled plugins (below), or include individual files as needed --> 
<script src="js/bootstrap.js"></script>
<script> $('#heroCarousel').carousel({ interval: 12000 }) </script>﻿
<script> $('#footerCarousel').carousel({ interval: 10000 }) </script>﻿
<script>



$(".btn.goforward").click(function(){
	var clickedLink = this.id
	var nextPage
	switch(currentPage) {
  	case 2: {
		nextPage =4;
		break;
	}
	
	case 3: {
		nextPage =4;
		break;
	}
	
	case 4: {
		nextPage =5;
		break;
	}
	
	case 5: {
		nextPage =7;
		break;
	}
	
	case 6: {
		nextPage =7;
		break;
	}
	
	case 7: {
		nextPage =8;
		break;
	}
	
	case 8: {
		nextPage =10;
		break;
	}
	
	case 9: {
		nextPage =10;
		break;
	}

	
};

	
	$("#quiz-content-" + currentPage).hide();

	$("#quiz-content-" + nextPage).fadeIn();
		

	
	currentPage = nextPage;

	});
	
$(".btn.goback").click(function(){
	var clickedLink = this.id
	var nextPage
	switch(currentPage) {
  	case 2: {
		nextPage =1;
		break;
	}
	
	case 3: {
		nextPage =1;
		break;
	}
	
	case 4: {
		nextPage =1;
		break;
	}
	
	case 5: {
		nextPage =4;
		break;
	}
	
	case 6: {
		nextPage =4;
		break;
	}
	
	case 7: {
		nextPage =4;
		break;
	}
	
	case 8: {
		nextPage =7;
		break;
	}
	case 9: {
		nextPage =7;
		break;
	}
	
	

	
};

	
	$("#quiz-content-" + currentPage).hide();

	$("#quiz-content-" + nextPage).fadeIn();
		

	
	currentPage = nextPage;

	});	

$(".btn.quiz").click(function(){
	var clickedLink = this.id
	var nextPage
	switch(clickedLink) {
  	case "btn-single": {
		nextPage =2;
		break;
	}
	
	case "btn-hitched": {
		nextPage =3;
		break;
	}

	case "btn-joined": {
		nextPage =3;
		break;
	}
	
	case "btn-kids": {
		nextPage =5;
		break;
	}
	
	case "btn-no-kids": {
		nextPage =6;
		break;
	}
	
	case "btn-mortgage": {
		nextPage =8;
		break;
	}
	
	case "btn-no-mortgage": {
		nextPage =9;
		break;
	}
};

	

	
	
	
	
	$("#quiz-content-" + currentPage).hide();

	$("#quiz-content-" + nextPage).fadeIn();
		

	
	currentPage = nextPage;

	});
</script>
</div>


</div>


</body>
</html>
