<%@include file="header.jsp" %>
<div class="container-fluid">
    <div id="hero">
        <div id="heroCarousel" class = " carousel slide">
            <!-- <ol class = "carousel-indicators ">
                <li data-target = "#heroCarousel" data-slide-to = "0" class="active"></li>
                <li data-target = "#heroCarousel" data-slide-to = "1"></li>
            </ol> -->
            <div class="carousel-inner">
                <div class="item active">
                    <img src="resources/images/hero-mom.jpg">
                    <div class="carousel-caption">
                        <h4 class="hero-caption">Unlike the perfect selfies people share,</h4>
                        <h4 class="hero-caption-bold">Life. Isn't. Always. Pretty.</h4>
                        <p>
                        Our Life Covered can help you find affordable life insurance on your terms, protecting your family from the unexpected.
                        </p>
                    </div>
                </div>
                <!-- <div class="item">
                    <img src = "resources/images/hero2.jpg">
                    <div class="carousel-caption">
                        <h4 class="hero-caption">First time parents? Twins? No worries. </h4>
                        <h4 class="hero-caption-bold">You totally got this.</h4>
                        <p>
                        Our Life Covered can get you covered with the life insurance your family needs in as little as 15 minutes.
                        </p>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="cta-container">
            <div class="row">
                <div class="col-sm-12">
                <h3>Find the right life insurance policy, fast.</h3>
                </div>
            </div>
            <div class="row" id="home-page">
            <div class="error-text"></div>
            	<form action="selectedWorkFlow.do" method="POST" id="home-form">
                	<div class="col-sm-8">
                   		<select class="form-control" name="preference" id="preference">
                        <option value="">
                            Select the option that sounds most like you...
                        </option>
                        <option value="affordability">I know what I can afford</option>
                        <option value="iknowwhatiwant">I know how much I need</option>
                        <option value="calculateneed">I'm not sure how much I need</option>
                    </select>
                </div>
               	 <div class="col-sm-4">
                	<input class="btn btn-primary" type="button" value="Let's Go!" onclick="return validateOLCWorkFlow()">
            	</div>
            </form>
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
                    <h4 class="answer">Congrats, you love birds! Let’s talk...</h4>
                    <p class="answer">Here’s a hard truth: a lasagna fundraiser after the funeral is probably not going to be enough to pay the bills if something were to happen to you or your spouse. Protecting the person you share your life with is a great reason to consider life insurance.</p>
                    <a class="btn quiz-cta" href="quizQuestionOne-form.do">Lock in Your Rate</a>
                    <div class="row quiz-btn-row"></div>
        		<div class="btn goback"><span>Previous</span></div>
                <div class="btn goforward"><span>Next</span></div></div>
            </div>
            <div class="row quiz-content text-center hide-item" id="quiz-content-2">
            	<div class="col-xs-8 col-xs-offset-2">
                    <h4 class="answer">Protect your future self...</h4>
                    <p class="answer">Even if you’re still single, getting coverage now could be a good idea. Typically, younger people in good health can qualify for the best prices on life insurance and lock in their rate for up to 20 years.</p>
                    <a class="btn quiz-cta" href="quizQuestionOne-form.do">Lock in Your Rate</a>
                    <div class="row quiz-btn-row"></div>
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
                    <h4 class="answer">Leave them with more than just memories and old holiday decorations...</h4>
                    <p class="answer">For many parents, having life insurance is an important way to make sure their children can afford the best education possible, or a solid inheritance with which to start their own life.</p>
                    <a class="btn quiz-cta" href="quizQuestionTwo-form.do">Compare Rates</a>
                    <div class="row quiz-btn-row"></div>
        		<div class="btn goback"><span>Previous</span></div>
                <div class="btn goforward"><span>Next</span></div></div>
            </div>
            <div class="row quiz-content text-center hide-item" id="quiz-content-6">
            	<div class="col-xs-8 col-xs-offset-2">
                    <h4 class="answer">It doesn’t take kids to be a family.</h4>
                    <p class="answer">You may not have little ones, but there are probably others in your life that you want to care for after you’re gone. Most policies allow you to select whomever you want as beneficiaries.</p>
                    <a class="btn quiz-cta" href="quizQuestionTwo-form.do">Compare Rates</a>
                    <div class="row quiz-btn-row"></div>
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
                    <a class="btn quiz-cta" href="quizQuestionThree-form.do">Calculate What You Need</a>
                    <div class="row quiz-btn-row"></div>
        		<div class="btn goback"><span>Previous</span></div>
                <div class="btn goforward"><span>Next</span></div></div>
            </div>
            <div class="row quiz-content text-center hide-item" id="quiz-content-9">
            	<div class="col-xs-8 col-xs-offset-2">
                    <h4 class="answer">Hey, someone has to pay the rent.</h4>
                    <p class="answer">Did you know that in some states, renting a home can cost over 50% more per month than owning. Regardless of whether you own or rent, your family will likely need help keeping up with payments.</p>
                    <a class="btn quiz-cta" href="quizQuestionThree-form.do">Calculate What You Need</a>
                    <div class="row quiz-btn-row"></div>
        		<div class="btn goback"><span>Previous</span></div>
                <div class="btn goforward"><span>Next</span></div></div>
            </div>
            <div class="row quiz-content text-center hide-item" id="quiz-content-10">
            	<div class="col-xs-8 col-xs-offset-2">
                    <h4 class="answer" >So what’s the verdict?</h4>
                    <h5>Are you ready to create a safety net for your loved ones?</h5>
                    <div class="row quiz-btn-row">
                    	<div class="col-xs-8 col-xs-offset-2"> <a class="btn quiz-cta" href="getQuote-form.do">Get a Quote</a><br><a href="home.do?phoneNo=${phoneNumber}&src=${srcHome}">Restart Quiz</a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="home-divider">
        <div class="container">
            <div class="col-md-6 col-md-offset-3">
                <h2>“I love shopping for life insurance,”</h2>
                <h3>said absolutely no one ever. Let us shop for you.</h3>
            </div>
        </div>
    </div>
    <div class="container value-statement text-center">
     	<div class="row">
            <div class="col-md-12">
            	<h1>Get covered in minutes.</h1><h2>Our Life Covered makes it easy to find the right plan and apply.</h2>
            </div>
        </div>
        <div class="row product-features">
        	<div class="col-xs-4">
                <img src="resources/images/calculator-icon.png" class="center-block"  alt=""/>
                <span>Calculate your coverage amount</span>
            </div>
            <div class="col-xs-4">
                <img src="resources/images/list-icon.png" class="center-block"  alt=""/>
                <span>See Your Quote</span>
            </div>
            <div class="col-xs-4">
                <img src="resources/images/quote-icon.png" class="center-block"  alt=""/>
                <span>Apply and get coverage right away*</span>
            </div>
        </div>
    </div>
   	
    <div id="footer-carousel">
    <p id="astrik-home">*Individual cases may vary due to dependencies on specific underwriting criteria in the application process.</p>
        <div id="footerCarousel" class = "carousel slide">
            <ol class = "carousel-indicators ">
                <li data-target = "#footerCarousel" data-slide-to = "0" class="active"></li>
                <li data-target = "#footerCarousel" data-slide-to = "1"></li>
                <li data-target = "#footerCarousel" data-slide-to ="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="item active">
                    <img src = "resources/images/carousel-1.jpg">
                    <div class="carousel-caption">
                        <h4 class="hero-caption">We do the leg work.</h4>
                        <p>Tell us a bit about your lifestyle, and we’ll search from hundreds of policies to find the right match for you. Get your quote, apply, and get covered. Fast and simple.</p>
                        <a class="btn" href="calculator.do">Find the Right Fit</a>
                    </div>
                </div>
                <div class="item">
                    <img src = "resources/images/carousel-2.jpg">
                    <div class="carousel-caption">
                        <h4 class="hero-caption">A little could do a lot.</h4>
                        <p>Even with a policy for as low as $25 per month, you could leave your family with a lot more than just memories, and help protect them against future expenses.</p>
                        <a class="btn" href="affordability.do">See what $25 can do</a>
                    </div>
                </div>
                <div class="item">
                    <img src = "resources/images/carousel-3.jpg">
                    <div class="carousel-caption">
                        <h4 class="hero-caption">Already know your number?</h4>
                        <p>If you already have a good idea about how much coverage you need to protect your family, enter it here and we’ll get your quote started.</p>
                        <a class="btn" href="getQuote-form.do">Get a Quote</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<%@include file="footer.jsp" %>