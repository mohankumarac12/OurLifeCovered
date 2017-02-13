<html class="no-js" lang="">
<%@page import="org.springframework.context.annotation.Import"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<head>
	<meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>OUR LIFE COVERED<sup>SM</sup></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="resources/images/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="resources/css/jquery-ui.css">
    <link rel="stylesheet" href="resources/css/myLifeCoveredRGility.css">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="resources/css/mylifecovered-metcon.min.css">
    <link rel="stylesheet" href="resources/css/xperience.css">
    <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <!--[if IE 9]>
    <link rel="stylesheet" href="resources/css/ie9.css">
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <script src="https://use.typekit.net/yty8keo.js"></script>
    <script>
  	//Woopra Domanin name
    var domainName = 'ourlifecovered.com';
    sessionStorage.setItem('src', "${src}");
    try {
        Typekit.load({
            async: false
        });
    } catch (e) {}
    </script>
    <script>
	    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
	    ga('create', 'UA-79521976-1', 'auto');
	    ga('send', 'pageview');
    </script>
	    
    <style type="text/css">
    	form#needs-calculator-form {
    		font-size: 100%;
		}
		textarea {
    		background: none;
    		border: 2px rgba(255, 255, 255, 0.54) dotted;
    		padding: 10px 14px;
    		color: #fff;
    		width: 100%;
		}
		html{
        background:#212427;
    }
    .wf-loading{
        visibility: hidden;
    }
    </style>

    <script>
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','https://connect.facebook.net/en_US/fbevents.js');
		
		fbq('init', '1064726673573667');
		fbq('track', "PageView");</script>
		<noscript><img height="1" width="1" style="display:none"
		src="https://www.facebook.com/tr?id=1064726673573667&ev=PageView&noscript=1"
		/></noscript>
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

<body onload="renderRedBannerContent();">
    <%@include file="header.jsp" %>
    <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div id="wOverlayId" class="whiteOverlay"></div>
	<div id="loading" class="loading"><img src="resources/images/loading_spinner.svg" width="70" height="70" alt="Loading"/></div>
    <section id="calculateneed_hero" class="section-photo cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>Work Hard.<br>Be Rewarded.</h1>
                    <p class="heading">Life insurance is often significantly less expensive<br> for healthy people like you.</p>
                    <a href="calculator.do" id="how_much_do_i_need" class="btn btn-primary margin-top-s" wpvalue="find_your_low_rate" onclick="quoteVisiblity('calculateneed')">How much do I need?</a>
					 <a href="quote.do" id="i_know_what_i_need" class="btn btn-primary margin-top-s"  onclick="quoteVisiblity('iknowwhatiwant')">I know what I need</a>
                </div>
            </div>
            <!--</br>
            <div class="row">
            <div class="col-md-12">
           	 
            </div>
           </div>-->
        </div>
    </section>
    <section id="red-banner">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <p></p>
                </div>
            </div>
        </div>
    </section>
    <%-- <section id="calls-to-action" class="text-center">
        <div class="row no-margin">
            <div class="col-md-6 misconceptions cover">
                <div class="overlay"></div>
                <div class="relative">
                    <h3>LEARN THE BASICS</h3>
                    <p>Need a little life insurance<br/> refresher? We'll coach you.</p>
                    <a href="basics.do" class="btn btn-primary margin-top-s" wpvalue="learn_more">Learn More</a>
                </div>
            </div>
            <div class="col-md-6 get-quote cover">
                <div class="overlay"></div>
                <div class="relative">
                    <h3>12 COMMON MISCONCEPTIONS</h3>
                    <p>Think you're misunderstood? So is<br/> life insurance. Let's clear things up.</p>
                    <a href="misconceptions.do" class="btn btn-primary margin-top-s" wpvalue="know_more">Know More</a>
                </div>
            </div>
            <!-- <div class="col-md-6 get-quote cover">
                <div class="overlay"></div>
                <div class="relative">
                    <h3>I Know How Much I Need</h3>
                    <span class="select-wrapper">
                        <select name="cta-coverage" id="cta-coverage">
                            <option value="100000">$100,000</option>
                            <option value="125000">$125,000</option>
                            <option value="150000">$150,000</option>
                            <option value="175000">$175,000</option>
                            <option value="200000">$200,000</option>
                            <option value="225000">$225,000</option>
                            <option value="250000">$250,000</option>
                            <option value="275000">$275,000</option>
                            <option value="300000">$300,000</option>
                            <option value="325000">$325,000</option>
                            <option value="350000">$350,000</option>
                            <option value="375000">$375,000</option>
                            <option value="400000">$400,000</option>
                            <option value="425000">$425,000</option>
                            <option value="450000">$450,000</option>
                            <option value="475000">$475,000</option>
                            <option selected="selected" value="500000">$500,000</option>
                            <option value="550000">$550,000</option>
                            <option value="600000">$600,000</option>
                            <option value="650000">$650,000</option>
                            <option value="700000">$700,000</option>
                            <option value="750000">$750,000</option>
                            <option value="800000">$800,000</option>
                            <option value="850000">$850,000</option>
                            <option value="900000">$900,000</option>
                            <option value="950000">$950,000</option>
                            <option value="1000000">$1,000,000</option>
                            <option value="1100000">$1,100,000</option>
                            <option value="1200000">$1,200,000</option>
                            <option value="1300000">$1,300,000</option>
                            <option value="1400000">$1,400,000</option>
                            <option value="1500000">$1,500,000</option>
                            <option value="1600000">$1,600,000</option>
                            <option value="1700000">$1,700,000</option>
                            <option value="1800000">$1,800,000</option>
                            <option value="1900000">$1,900,000</option>
                            <option value="2000000">$2,000,000</option>
                        </select>
                    </span>
                    <span class="select-wrapper">
                        <select name="cta-term" id="cta-term">
                            <option value="10">10 Years</option>
                            <option value="15">15 Years</option>
                            <option selected="selected" value="20">20 Years</option>
                            <option value="25">25 Years</option>
                            <option value="30">30 Years</option>
                        </select>
                    </span>
                    <br>
                    <a href="#" id="get_quote_reset" class="btn btn-primary margin-top-s">Get Quote</a>
                </div>
            </div> -->
        </div>
    </section>--%>
    <section id="home-page-copy" class="cover main-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12 text-center margin-bottom-m"   id="home-page-div">
                    <h2>Best of the Best</h2>
                    <h4>You've worked hard to reach your fitness goals. It's time you see a reward for it.</h4>
                </div>
                <!-- <img src="resources/images/push-press.svg" alt=""> -->
                <div class="col-md-5 col-md-offset-1 margin-bottom-m">
                    <h3>Do you fit into the BEST CLASS?</h3>
                    <p>The “Best Class” of coverage actually means the lowest cost of insurance, and consists of individuals with great personal and family health histories. Generally, highly fit and active people qualify in this group or “class”. Your frequent exercise regimen tells us that you may qualify for those premiums. To find out for certain, you must complete a no-obligation application.</p>
                </div>
                <div class="col-md-5  margin-bottom-m">
                    <h3>Would you like the convenience of In-Home HEALTH ANALYSIS?</h3>
                    <p>You will undergo a health analysis as a part of the application process. Lab work will be completed – in the comfort of your own home – that could provide valuable preventative information should health concerns be identified – all with no out-of-pocket cost for you.</p>
                </div>
            </div>
            <div class="row margin-bottom-m">
                <div class="col-md-5 col-md-offset-1  margin-bottom-m">
                    <h3>Do you rate higher than AVERAGE?</h3>
                    <p>Highly fit and active people make up the majority of the 15-20% of individuals who generally qualify for “best class” premiums. Not everyone falls into this category, but your active lifestyle may help you to qualify for these lower premiums. Should you qualify for the “best class”, your premiums could be up to 40% less than those of “average people” your age.</p>
                    <img src="resources/images/bell-curve.svg" alt="">
                </div>
                <div class="col-md-5 margin-bottom-m">
                    <h3>Are you prepared for a LONG DURATION?</h3>
                    <p>Life insurance coverage can be less expensive at younger ages. So, in most cases, it is best to lock in coverage with more affordable rates at a younger age, than to wait and lock in a more expensive rate in the future. And, once you’re covered, your premium will lock in for the duration of the policy; which can range from 10 to 30 years.</p>
                </div>
                 <div class="col-md-5">
                    <h3>Would you like PEACE OF MIND?</h3>
                    <p>As an athlete, you know the four key factors that fuel good performance. Most of us concentrate on <em>Exercise, Nutrition and Recovery</em>, but we ignore the impact of <em>Stress</em>. Life insurance helps reduce that stress; delivering peace of mind by providing coverage to your family should the unexpected ever happen.</p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12 text-center margin-top-l">
                    <div><a href="calculator.do" class="btn btn-primary open-get-started" id="getStartedWithInsuranceNeeds1" wpvalue="get_started">Get Started</a></div>
                    <div class="padding-top-s"><a href="basics.do" class="secondary open-basics">Need a life insurance primer? Learn the basics.</a></div>
                </div>
            </div>
        </div>
    </section>
   <%@include file="footer.jsp" %>	
</body>

</html>