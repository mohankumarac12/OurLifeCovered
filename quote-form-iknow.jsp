<head>
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
	<%@include file="header.jsp"%>
	
	<script type="text/javascript">
		sessionStorage.setItem('src',"${src}");
	</script>
    <div id="quote_form" class="background-wrap">
        <section class="quote-header text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>FAST FACTS ABOUT YOU</h1>
                        <p>To create your customized term life insurance quote, please answer a few quick questions.</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="quote-tabs">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                       <!--  <a href="quote-form.do" class="tab active">Quick Facts</a>
                        <a href="calculator.do" class="tab">Full Calculator</a> -->
                        <a href="quick-iknow-form.do" class="tab active">Quick Facts</a> 
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
                                <input required="" class=" " type="text" id="calc-last-name" name="last-name" maxlength="25">
                                <label class=" " for="calc-last-name">Last Name</label>
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
                            <!-- <div class="inline-text required">
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
                                        <option value="F" selected>Female</option>
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
							<c:choose>
								<c:when test="${isMultiCarrier eq 'true' }">				
								<div class="inline-select required complete multiple">
                                        <label for="calc-coverage1">Coverage</label>
                                        <span class="select-wrapper  small">
                                           <select required="" name="coverage" id="calc-coverage" class="small" onchange="selectedValue(this)" onload="selectedValue(this)">
                                                <option value="25000" selected>$25,000</option>
                                                <option value="50000">$50,000</option>
                                                <option value="75000">$75,000</option>
                                                <option value="100000">$100,000</option>
                                                <option value="150000">$150,000</option>
                                                <option value="250000">$250,000</option>
                                                <option value="500000">$500,000</option>
                                                <option value="1000000">$1,000,000</option> 
                                            </select>
                                        </span>
                            </div>
								</c:when>
								<c:otherwise>
			 					  <div class="inline-select required complete single">
                                        <label for="calc-coverage1">Coverage</label>
                                        <span class="select-wrapper  small">
                                           <select required="" name="coverage" id="calc-coverage" class="small" onchange="selectedValue(this)" onload="selectedValue(this)">
                                                <option value="25000" selected>$25,000</option>
                                                <option value="50000">$50,000</option>
                                                <option value="75000">$75,000</option>
                                                <option value="100000">$100,000</option>
                                                <option value="150000">$150,000</option>
                                                <option value="250000">$250,000</option>
                                                <option value="500000">$500,000</option>
                                                <option value="1000000">$1,000,000</option> 
                                                <!-- <option value="1500000">$1,500,000</option>
                                                <option value="2000000">$2,000,000</option>  -->
                                            </select>
                                        </span>
                            </div>
								</c:otherwise>
							</c:choose>
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
                                <label for="calc-us_citizen">I am a U.S. Citizen.</label>
                            </div>
                            <div class="inline-checkbox">
                                <input type="checkbox" name="policy_owner" id="calc-policy_owner" checked="">
                                <label for="calc-policy_owner">I, or my spouse, will be the policy owner.</label>
                            </div>
                            <div class="inline-checkbox">
                                <input type="checkbox" name="not_replacing" id="calc-not_replacing" checked="">
                                <label for="calc-not_replacing">I am not replacing an existing policy.</label>
                            </div>
                            <div class="inline-checkbox">
                                <input type="checkbox" name="allow_marketing" id="calc-allow_marketing" checked="">
                                <label for="calc-allow_marketing">By providing your contact information above, you agree to this website's Privacy Policy, and you consent to receive offers and marketing communications at the email address or telephone numbers you provided, including autodialed, pre-recorded calls, SMS or MMS messages.</label>
                            </div>
                            <div class="text-center">
                               <!--  <input type="button" class="btn btn-primary" value="See Your Quote" id="quote-form-submit" wpvalue="next" onclick="validateQuote('iknowwhatiwant')"> -->
                            <input type="button" class="btn btn-primary"
									value="See Your Quote" id="quote-form-submit" wpvalue="next"
									onclick="validateQuote('iknowwhatiwant')">
                            </div>
                            <input type="hidden" id="calc-requested_coverage" name="requested_coverage">
                            <input type="hidden" id="calc-policy_term" name="policy_term">
                            <input type="hidden" id="calc-path_selected" name="path_selected" value="2">
                        </form>
                        <div id="disclaimers" class="col-md-4 col-md-offset-1">
                              <h4 class="text-center margin-bottom-s">Disclaimer</h4>
                              <p class="disclaimers-content">The quotes that will be provided are based on your selection of age, gender and smoking status. These quotes were produced automatically.</p>
                              <p class="disclaimers-content">Final rates are always subject to underwriting approval by the insurance company. <a href="policyForms.do">Click here</a> to better understand the underwriting criteria. You have an option of continuing with Two Rivers Agency and apply online, or having our call center partner contact you shortly to gather additional information and to further assure that your customized quote is accurate. After speaking with you, our call center partner will send your customized quote via email. It will weigh responses to health and lifestyle questions to more accurately estimate your rate. Please read through our <a href="legalInformation.do">legal policy</a> to better understand the processing and information being made available. <a href="policyForms.do">Click here</a> for policy forms and descriptions of available plans.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

<%@include file="footer.jsp"%>
</body>
</html>