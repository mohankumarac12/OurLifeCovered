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
    <title>MY LIFE COVERED&trade;</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="resources/images/favicon.ico" rel="shortcut icon">
    
	<link rel="stylesheet" href="resources/css/jquery-ui.css">
	<link rel="stylesheet" href="resources/css/myLifeCoveredRGility.css">
    
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="resources/css/mylifecovered-metcon.min.css">
    <!--<link rel="stylesheet" href="resources/css/nav.css">-->
    <!--[if IE 9]>
    <link rel="stylesheet" href="resources/css/ie9.css">
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <script src="resources/js/jquery-1.10.2.js"></script>
     <script src="https://use.typekit.net/yty8keo.js"></script>
    <script>
  	//Woopra Domanin name
    var domainName = '<spring:eval expression="@propertyConfigurer.getProperty('domain.name')" />';
    try {
        Typekit.load({
            async: false
        });
    } catch (e) {}
    
   /*  $(document).ready(function(){

    	var srcValue = "${src}";
    	console.log(srcValue);
    	if(srcValue == "affordability"){
    		 $(".show-hide").hide();
        } else if(srcValue == "mlcmain"){
    		 $(".show-hide").hide();
        } 
    	

		 }); */
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
    
</head>
    <body>
	<!--
	Start of DoubleClick Floodlight Tag: Please do not remove
	Activity name of this tag: EliteFitCovered.com - 12 Common Misconceptions
	URL of the webpage where the tag is expected to be placed: https://www.mylifecovered.net/myLifeCovered/misconceptions.do
	This tag must be placed between the <body> and </body> tags, as close as possible to the opening tag.
	Creation Date: 10/27/2016
	-->
	<script type="text/javascript">
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	document.write('<iframe src="https://6194995.fls.doubleclick.net/activityi;src=6194995;type=conte0;cat="${sesCat}";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=' + a + '?" width="1" height="1" frameborder="0" style="display:none"></iframe>');
	</script>
	<noscript>
	<iframe src="https://6194995.fls.doubleclick.net/activityi;src=6194995;type=conte0;cat=${sesCat};dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1;num=1?" width="1" height="1" frameborder="0" style="display:none"></iframe>
	</noscript>
	<!-- End of DoubleClick Floodlight Tag: Please do not remove -->
     <%@ include file="header.jsp" %>
        <!--[if lt IE 8]>
        <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <div id="wOverlayId" class="whiteOverlay"></div>
        <div id="loading" class="loading"><img src="resources/images/loading_spinner.svg" width="70" height="70" alt="Loading"/></div>
        <div class="remodal-bg">
      <div id="quote_form" class="background-wrap">
        <section class="quote-header text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Tell Us A Few Facts About You</h1>
                        <p>Complete the below to find out the level of coverage you need.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="quote-tabs">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a href="quoteForTwentyFiveDollars.do" class="tab active">Quick Facts</a>
                        <a href="calculator.do" class="tab">Full Calculator</a>
                    </div>
                </div>
            </div>
        </section>
        <section id="calculator-report" class="quote">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <form action="" id="needs-calculator-demographics-form" name="needsCalculatorDemographicsForm">
                            <div class="error-text">
                            </div>
                            <div class="inline-text required">
                                <input required="" class=" " type="text" id="calc-first-name" name="first-name" maxlength="25">
                                <label class=" " for="calc-first-name">First Name</label>
                            </div>
                            <div class="inline-text required">
                                <input required="" class=" " type="text" pattern="[0-9]*" id="calc-date-of-birth" name="date-of-birth">
                                <label class=" " for="calc-date-of-birth">Date of Birth</label>
                            </div>
                            <div class="inline-text required">
                                <input required="" class="  " type="text" id="calc-email-address" name="email-address" maxlength="100">
                                <label class=" " for="calc-email-address">Email Address</label>
                            </div>
                            <div class="inline-text required">
                                <input class=" " type="text" pattern="[0-9]*" id="calc-form-phone" name="calc-form-phone">
                                <label class=" " for="contact-form-phone">Phone Number</label>
                            </div>
                           <!--  <div class="inline-text required show-hide">
                                <input required="" class=" " type="text" id="calc-annual-income" name="annual-income" maxlength="25">
                                <label class=" " for="calc-annual-income">Annual Income</label>
                            </div> -->
                            <div class="inline-select required complete">
                                <label for="calc-smoker">Smoker or Non-smoker</label>
                                <span class="select-wrapper small">
                                    <select required="" name="smoker" id="calc-smoker" class="small">
                                        <option value="2">Non-Smoker</option>
                                        <option value="1">Smoker</option>
                                    </select>
                                </span>
                            </div>
                            <div class="inline-select required complete">
                                <label for="calc-gender">Biological Gender</label>
                                <span class="select-wrapper  small">
                                    <select required="" name="gender" id="calc-gender" class="small">
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                    </select>
                                </span>
                            </div>
                            <div class="inline-select required ">
                                <label for="calc-state">State</label>
                                <span class="select-wrapper  small">
                                    <select required="" name="state" id="calc-state" class="small">
                                        <option value="">- Select a State -</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DE">Delaware</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="IA">Iowa</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="ME">Maine</option>
                                        <option value="MD">Maryland</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MT">Montana</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NY">New York</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VT">Vermont</option>
                                        <option value="VA">Virginia</option>
                                        <option value="WA">Washington</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WY">Wyoming</option>
                                    </select>
                                </span>
                            </div>
                           <div class="inline-select required complete">
										<label for="calc-premium">Monthly Premium</label>
										<span class="select-wrapper  small">
											<select required name="coverage" id="calc-premium" class="small">
												<option value="20" ${affordablePremium eq 20 ? 'selected':''}>$20</option>
												<option value="25" ${affordablePremium eq 25 ? 'selected':''}>$25</option>
												<option value="30" ${affordablePremium eq 30 ? 'selected':''}>$30</option>
												<option value="35" ${affordablePremium eq 35 ? 'selected':''}>$35</option>
												<option value="40" ${affordablePremium eq 40 ? 'selected':''}>$40</option>
												<option value="45" ${affordablePremium eq 45 ? 'selected':''}>$45</option>
												<option value="50" ${affordablePremium eq 50 ? 'selected':''}>$50</option>
												<option value="60" ${affordablePremium eq 60 ? 'selected':''}>$60</option>
												<option value="70" ${affordablePremium eq 70 ? 'selected':''}>$70</option>
												<option value="80" ${affordablePremium eq 80 ? 'selected':''}>$80</option>
												<option value="90" ${affordablePremium eq 90 ? 'selected':''}>$90</option>
												<option value="100" ${affordablePremium eq 100 ? 'selected':''}>$100</option>
											</select>
										</span>
							</div>
                            <div class="inline-select required ">
                                <label for="rec-coverage" class="adj">Number of years to maintain coverage</label>
                                <span class="select-wrapper  small">
                                    <select required="" name="rec-coverage" id="rec-coverage" class="small">
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                    </select>
                                </span>
                            </div>
                            <div class="inline-checkbox margin-top-s">
                                <input type="checkbox" name="us_citizen" id="calc-us_citizen" checked="">
                                <label for="calc-us_citizen"></label>
                                I am a U.S. Citizen.
                            </div>
                            <div class="inline-checkbox">
                                <input type="checkbox" name="policy_owner" id="calc-policy_owner" checked="">
                                <label for="calc-policy_owner"></label>
                                I, or my spouse, will be the policy owner.
                            </div>
                            <div class="inline-checkbox">
                                <input type="checkbox" name="not_replacing" id="calc-not_replacing" checked="">
                                <label for="calc-not_replacing"></label>
                                I am not replacing an existing policy.
                            </div>
                            <div class="inline-checkbox">
                                <input type="checkbox" name="allow_marketing" id="calc-allow_marketing" checked="">
                                <label for="calc-allow_marketing"></label>
                                <span class="last-checkbox">By providing your contact information above, you agree to this website's Privacy Policy, and you consent to receive offers and marketing communications at the email address or telephone numbers you provided, including autodialed, pre-recorded calls, SMS or MMS messages.</span>
                            </div>
                            <div class="text-center">
                                <input type="button" class="btn btn-primary" value="See Your Quote" id="quote-form-submit" wpvalue="next" onclick="validateForPremiumQuote()">
                            </div>
                            <input type="hidden" id="calc-requested_coverage" name="requested_coverage">
                            <input type="hidden" id="calc-policy_term" name="policy_term">
                            <input type="hidden" id="calc-path_selected" name="path_selected" value="4">
                        </form>
                        <div id="disclaimers" class="col-md-4 col-md-offset-1">
                              <h4 class="text-center margin-bottom-s">Disclaimer</h4>
                              <p class="disclaimers-content">The quotes that will be provided reflect the best values available based only on your selection of age, gender and smoking status. These quotes were produced automatically.</p>
                              <!-- <p class="disclaimers-content">Final rates are always subject to underwriting approval by the insurance company. <a href="#">Click here</a> to better understand the underwriting criteria. You have an option of continuing with Two Rivers Agency and apply online, or having Health IQ contact you shortly to gather additional information and to further assure that your customized quote is accurate. After speaking with you, Health IQ will send your customized quote via email. It will weigh responses to health and lifestyle questions to more accurately estimate your rate. Please read through our <a href="#legal-modal">legal policy</a> to better understand the processing and information being made available. <a href="privacypolicy.do">Click here</a> for policy forms and descriptions of available plans.</p> -->
                              <p class="disclaimers-content">Final rates are always subject to underwriting approval by the insurance company. <a href="legalInformation.do">Click here</a> to better understand the underwriting criteria. You have an option of continuing with Two Rivers Agency and apply online, or having Health IQ contact you shortly to gather additional information and to further assure that your customized quote is accurate. After speaking with you, Health IQ will send your customized quote via email. It will weigh responses to health and lifestyle questions to more accurately estimate your rate. Please read through our <a href="legalInformation.do">legal policy</a> to better understand the processing and information being made available. <a href="privacypolicy.do">Click here</a> for policy forms and descriptions of available plans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <div id="quote_recommended" class="background-wrap" style="display:none">
	<section id="quote-page" class="cover main-section" style="display:none">
	    <div class="overlay"></div>
	    <section>
				<div class="row">
					<div class="col-md-12">
						<span class="success-text"></span>
					</div>
				</div>
			</section>
	    <div class="container">
	    	<div id="original-quote" class="column online">
		    	<form action="" id="original-quote-form" name="originalQuoteForm">
		            <h2>Apply Online</h2>
		            <div class="row TransamericaTrendsetterSuper" style="display: none;">
		                <div class="best-class trans-america">
		                    <span class="currency">$</span>
		                    <span class="best-coverage">700,000</span>
		                </div>
		                <div id="class_category">
		                    <span class="rate-name">Preferred Plus Coverage</span>
		                </div>
		                <div class="comparison trans-america">
		                    <h5 class="rate-name">Compare to <br /><span class="currency"></span><span class="standard-coverage">425,000</span> <span class="rate-name">Standard Non-Smoker</span></h5>
		                </div>
		                <div class="row recommended-coverage">
		                    <div class="text-center col-md-6">
	                            <h4>Rate</h4>
	                            <h3><span class="best-premium">$58</span><span class="freq">/mo</span></h3>
	                        </div>
		                    <div class="text-center col-md-6">
	                            <h4>Term Period</h4>
	                            <h3 class="calculated-term">10 Years</h3>
	                        </div>
		                </div>
		                <div id="transamerica_logo">
		                    <img class="transamerica" src="resources/images/icon-transamerica-slider.png" alt="">
		                </div>
		                <div id="apply_button">
		                    <a id="#original-quote-applynow" href="#" class="btn btn-primary apply-now" wpvalue="apply_now">Apply Now</a>
		                </div>
		            </div>
		        </form>
	        </div>
	        <div id="comparison-quote" class="column call">
		        <form action="" id="comparison-quote-form" name="comparisonQuoteForm">
		            <h2>Call To Apply</h2>
		            <div class="row ProtectiveCustomChoice" style="display: none;">
		                <div class="column">
		                    <h6>Protective Life<sup>TM</sup></h6>
		                    <p>Rate: <span class="best-premium">$58</span><span class="freq">/mo</span></p>
		                    <p>Term: <span class="calculated-term">10 years</span></p>
		                    <p>Call <a href="tel:18555433630">${phoneNumber}</a></p>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class protective-life">
		                        <span class="currency">$</span>
			                    <span class="best-coverage">675,000</span>
		                    </div>
		                    <div class="comparison protective-life">
		                        <h5 class="rate-name">Compare to <span class="standard-coverage">$52</span></h5>
		                    </div>
		                </div>
		            </div>
		            <div class="row BannerOPTerm WilliamPennOPTerm" style="display: none;">
		                <div class="column">
		                    <h6>Banner Life<sup>TM</sup></h6>
		                    <p>Rate: <span class="best-premium">$58</span><span class="freq">/mo</span></p>
		                    <p>Term: <span class="calculated-term">10 years</span></p>
		                    <p>Call <a href="tel:18555433630">${phoneNumber}</a></p>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class banner-life">
		                        <span class="currency">$</span>
			                    <span class="best-coverage">715,000</span>
		                    </div>
		                    <div class="comparison banner-life">
		                        <h5 class="rate-name">Compare to <span class="standard-coverage">$52</span></h5>
		                    </div>
		                </div>
		            </div>
		            <div class="row USLifeSelectATerm AGSelectATerm" style="display: none;">
		                <div class="column">
		                    <h6>AIG Life<sup>TM</sup></h6>
		                    <p>Rate: <span class="best-premium">$58</span><span class="freq">/mo</span></p>
		                    <p>Term: <span class="calculated-term">10 years</span></p>
		                    <p>Call <a href="tel:18555433630">${phoneNumber}</a></p>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class aig-life">
		                        <span class="currency">$</span>
			                    <span class="best-coverage">695,000</span>
		                    </div>
		                    <div class="comparison aig-life">
		                        <h5 class="rate-name">Compare to <span class="standard-coverage">$52</span></h5>
		                    </div>
		                </div>
		            </div>
		            <div class="row LincolnTermAcceleTicketOnly" style="display: none;">
		                <div class="column">
		                    <h6>Lincoln Life<sup>TM</sup></h6>
		                    <p>Rate: <span class="best-premium">$58</span><span class="freq">/mo</span></p>
		                    <p>Term: <span class="calculated-term">10 years</span></p>
		                    <p>Call <a href="tel:18555433630">${phoneNumber}</a></p>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class lincoln-life">
		                        <span class="currency">$</span>
			                    <span class="best-coverage">687,000</span>
		                    </div>
		                    <div class="comparison lincoln-life">
		                        <h5 class="rate-name">Compare to <span class="standard-coverage">$52</span></h5>
		                    </div>
		                </div>
		            </div>
		        </form>
		    </div>
		    <div id="legal_policy">
		    	<a href="policyForms.do">Policy Information <i class="fa fa-angle-right" aria-hidden="true"></i></a>
		    </div>
	    </div>
	</section>
	<section id="range_sliders">
	    <div class="sliders">
	        <span class="slider-label">Rate</span>
	        <span class="quote-coverage best-premium">$58</span>
	        <div id="comparison-coverage" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                <div class="ui-slider-range ui-widget-header ui-corner-all ">
                </div>
                <span class="ui-slider-handle ui-state-default ui-corner-all upd-cov-slider-range" tabindex="0" style="left: 0%;"></span>
            </div>
	    </div>
	    <div class="sliders">
	        <span class="slider-label">Number of Years to Maintain Coverage</span>
	        <span class="quote-term calculated-term">10 Years</span>
	        <div id="comparison-term" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
                <div class="ui-slider-range ui-widget-header ui-corner-all ">
                </div>
                <span class="ui-slider-handle ui-state-default ui-corner-all upd-term-slider-range" tabindex="0" style="left: 0%;"></span>
            </div>
	    </div>
	    <input type="hidden" id="comparison-quote-selectedPremium" name="selectedPremium">
        <input type="hidden" id="comparison-quote-selectedPolicyTerm" name="selectedPolicyTerm">
        <input type="hidden" id="comparison-quote_selected" name="path_selected">
	</section>
</div>
   <%@include file="footer.jsp"%>
</body>
</html>