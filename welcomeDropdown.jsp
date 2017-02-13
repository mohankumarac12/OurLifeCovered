﻿<html class="no-js" lang="">
<%@page import="org.springframework.context.annotation.Import"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
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
        <!-- <script src="https://use.typekit.net/cws2ybo.js"></script> -->
       <script>
  	//Woopra Domanin name
    var domainName = 'ourlifecovered.com';
    sessionStorage.setItem('getQuoteVisibility', 'none');
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
    <body onload="renderRedBannerContent()">
    <%@include file="header.jsp" %>
        <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div id="wOverlayId" class="whiteOverlay"></div>
        <div id="loading" class="loading"><img src="resources/images/loading_spinner.svg" width="70" height="70" alt="Loading"/></div>
        <div class="remodal-bg">
            <!-- <section id="top-header">
                <div id="red-banner">
                    <div class="overlay"></div>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <p>Your fit lifestyle could put you first in line for lower insurance rates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section> -->
            <section id="iknowwhatiwant_hero" class="section-photo cover">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12" id='coverage_amount'>
                            <h1>The most affordable rates <br>for the coverage you need.</h1>
                            <p class="heading">How much life insurance coverage do you need to have?</p><br>
                            <p class="heading">Most financial advisors recommend 8-10x income as an<br>
                            appropriate amount of life insurance coverage.</p>  
           					<div class="error-text"></div>
                            <form action="selectedCoverage.do" method="POST" id="select-coverage-form" name="selectcoverageform">
                            <div id='hero_select_wrapper' class="col-md-4 select-coverage margin-top-s">
                                <select name='coverageAmount' id='coverageAmount' class="coverageamt-select">
                                    <option value="">Select coverage amount...</option>
                                   <!--  <option value="50000">$50,000</option> -->
                                    <option value="100000">$100,000</option>
                                    <option value="200000">$200,000</option>
                                    <option value="350000">$350,000</option>
                                    <option value="500000">$500,000</option>
                                    <option value="750000">$750,000</option>
                                    <option value="1000000">$1,000,000</option>
                                    <option value="1500000">$1,500,000</option>
                                    <option value="2000000">$2,000,000</option> 
                                </select>
                            </div>
                            
                            <div class="col-md-4 margin-top-s">
                            <input type="button" class="btn btn-primary" value="Continue" id="selected-coverage-submit" wpvalue="continue" onclick="return validateCoverageAmount();quoteVisiblity('iknowwhatiwant');">
                        	</div>
                        	</form>
                        </div>
                    </div>
                </div>
            </section>
            <section id="home-page-copy" class="cover main-section">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-7 margin-bottom-m" id="home-page-copy-container">
                            <p>I'm Todd Seabaugh, a CrossFit&reg; Affiliate owner and athlete since 2008. While attending the 2016 Reebok CrossFit Games&reg; in Carson, CA, I was blown away by the dedication and discipline I saw in each and every competitor. I decided shortly after to start promoting life insurance to adult athletes and other super-fit individuals to help them take advantage of higher coverage amounts and lower rates that may be available to them based on their individual health.</p>
                            <p>Because of this lifestyle, we are all stronger both physically and mentally. But family members need a recovery plan in case something happens to us. Today, I want to challenge you to get this done. Will you make the commitment to protect the ones you care about the most?</p>
                            <p class='small'><img src='./resources/images/todd_seabaugh.png' style='width:187px;' /><br />Todd Seabaugh, CrossFit&reg; Affiliate Owner</p>
                            <small>All licensed trademarks are the property of their respective owners, who are not affiliated with OUR LIFE COVERED<sup>SM</sup> and do not endorse its product and services.</small>
                        </div>
                        <div class="col-md-5 margin-bottom-m" id="home-page-aside-copy-container">
                            <h2>Need a quick rundown on insurance lingo?</h2>
                            <p>Quotes, rates, applications, blah blah blah.<br> Let us help you <a href="basics.do">learn the basics</a>.</p>
                            <br />
                            <h2>You've got to start somewhere.</h2>
                            <p>Even with a policy as low as $25 per month, you could make a huge difference for your family.<br /><a href='welcome.do?phoneNo=${phoneNumber}&src=affordability'>Find out how huge</a>.</p>
                        </div>
                    </div>
                </div>
            </section>
   <%@include file="footer.jsp" %>        
</html>