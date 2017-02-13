<html>
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
<body>
<%@include file="header.jsp"%>
<script type="text/javascript">
	sessionStorage.setItem('src',"${src}");
</script>
	<div id="calculator" class="background-wrap">
		<div class="overlay"></div>
		<section class="quote-header text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>Let's Get Started</h1>
						<p style="max-width: 318px;">Complete the below to find out the level of coverage you
							need.</p>
					</div>
				</div>
			</div>
		</section>
		
		<section id="needs-calculator" class="quote">
			<section class="quote-tabs">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<a href="findPath.do" class="tab">Quick Facts</a> <a
								href="calculator.do" class="tab active">Full Calculator</a>
						</div>
					</div>
				</div>
			</section>
			<div class="container">
				<div class="row">
					<div class="col-md-12" id="needsCalculatorErrorMsgId">
						<form action="" id="needs-calculator-form"
							name="needsCalculatorForm">
							<div class="error-text"></div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*"
									id="retirementSavings" name="retirementSavings" value="0"
									style="text-align: right;"> <label class=" "
									for="retirementSavings">Retirement Savings</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*" id="otherSavings"
									name="otherSavings" value="0" style="text-align: right;">
								<label class=" " for="otherSavings">Other Savings</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*" id="annualIncome"
									name="annualIncome" value="0" style="text-align: right;">
								<label class=" " for="annualIncome">Your Annual Income</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*"
									id="yearsIncomeProvided" name="yearsIncomeProvided" value="0"
									style="text-align: right;"> <label class=" "
									for="yearsIncomeProvided">Years of Income Needed for
									Beneficiaries</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*"
									id="existingLifeInsurance" name="existingLifeInsurance"
									value="0" style="text-align: right;"> <label class=" "
									for="existingLifeInsurance">Your Existing Life
									Insurance Coverage</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*" id="finalExpenses"
									name="finalExpenses" value="15000" style="text-align: right;">
								<label class=" " for="finalExpenses">Funeral Expenses</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*"
									id="outstandingMortgage" name="outstandingMortgage" value="0"
									style="text-align: right;"> <label class=" "
									for="outstandingMortgage">Outstanding Mortgage</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*"
									id="otherOutstandingDebt" name="otherOutstandingDebt" value="0"
									style="text-align: right;"> <label class=" "
									for="otherOutstandingDebt">Other Outstanding Debt</label>
							</div>
							<div class="row" style="display: none;">
								<div class="col-md-6">
									<div class="inline-text required">
										<input class=" " type="text" pattern="[1-9]|10"
											id="estimatedInflationRate" name="estimatedInflationRate"
											value="3" style="text-align: right;"> <label
											class=" " for="estimatedInflationRate">Estimated
											Inflation Rate</label>
									</div>
								</div>
								<div class="col-md-6">
									<div class="inline-text required">
										<input class=" " type="text" pattern="[1-9]|10"
											id="estimatedInvestmentReturn"
											name="estimatedInvestmentReturn" value="6"
											style="text-align: right;"> <label class=" "
											for="estimatedInvestmentReturn">Estimated Investment
											Return</label>
									</div>
								</div>
							</div>
							<div class="incrementer margin-bottom-s">
								<span>Number of Children Requiring College Funding</span>
								<div class="text-right">
									<a data-direction="minus" href="#" class="btn btn-primary">-</a>
									<input disabled="" value="0" id="childCount" name="childCount"
										pattern="[0-9]*" type="text" class="naked"> <a
										data-direction="plus" href="#" class="btn btn-primary">+</a>
								</div>
							</div>
							<div id="children"></div>
							<div class="text-center">
								<input id="calculate-need-submit" type="button"
									onclick="validateNeeds('natlang')" class="btn btn-primary"
									value="Calculate Need" wpvalue="calculate_need">
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
		<section id="calculator-report" class="quote" style="display: none">
			<section class="quote-tabs">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<a href="findPath.do" class="tab active">Quick Facts</a> <a
								href="calculator.do" class="tab">Full Calculator</a>
						</div>
					</div>
				</div>
			</section>
		</section>
	</div>


	<div id="quote_form_natlang" class="background-wrap" style="display: none">
   
		<section class="quote-header text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<h1>FAST FACTS ABOUT YOU</h1>
						<p>To create your customized term life insurance quote please
							fill in the blanks and answer the questions below.</p>
					</div>
				</div>
			</div>
		</section>

		<section id="quote_form_natlang" class="quote">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<form action="" id="needs-calculator-demographics-form"
							name="needsCalculatorDemographicsForm">
							<span id="tell-story">Tell us your complete story:</span>
							<div class="error-text"></div>							
							<div class="inline-text">
                                <label class=" " for="calc-first-name">Hi, my name is</label>
                                <input required="" class=" " type="text" style="width: 128px; height: 45px" id="calc-first-name" name="first-name" maxlength="25" placeholder="your first ">
                                <input required="" class=" " type="text" style="width: 140px; height: 45px" id="calc-last-name" name="last-name" maxlength="25" placeholder="and last name">
                            </div>							
							<div class="inline-text">
								<label class=" " for="calc-date-of-birth">and I was born
									on</label> <input required="" class=" " type="text" pattern="[0-9]*"
									id="calc-date-of-birth" name="date-of-birth"
									placeholder="your birthdate">.
							</div>
							 <div class="inline-text">
                                <label class=" " for="contact-form-phone">My phone number is </label>
                                <input class=" " type="text"  id="calc-form-phone"  pattern="[0-9]*" style="width: 152px;" name="calc-form-phone" >.
                             </div> 						
							<div class="inline-select complete">
								<label for="calc-gender">I'm a</label> <span
									class="select-wrapper  small"> <select required=""
									name="gender" id="calc-gender" class="small">
										<option value="M">male</option>
										<option value="F" selected>female</option>
								</select>
								</span> <label for="calc-state">living in</label> <span
									class="select-wrapper  small"> <select required=""
									name="state" id="calc-state" class="small">
										<option value="">select state</option>
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
								</span>.
							</div>
							<div class="inline-select complete">
								<label for="calc-smoker">I'm a</label> <span
									class="select-wrapper small"> <select required=""
									name="smoker" id="calc-smoker" class="small">
										<option value="2">non-smoker</option>
										<option value="1">smoker</option>
								</select>
								</span>, <label for="calc-coverage">and I want a coverage amount of <input
									pattern="[0-9]*" type="text"   id="calc-coverage" name="coverage"
									style="width: 128px; height: 45px"; maxlength="25" disabled value="${coverage}" />.
									</label>
							</div>							
							<div class="inline-select">
								<label for="rec-coverage" class="adj"> I want the number of coverage years to be </label> <span
									class="select-wrapper  small"> <select required=""
									name="rec-coverage" id="rec-coverage" class="small">
										<option value="10">10</option>
										<option value="15">15</option>
										<option value="20">20</option>
										<option value="25">25</option>
										<option value="30">30</option>
								</select>
								</span>
								<label class=" " for="calc-annual-income">and I make</label> <input
									required="" class=" " type="text" id="calc-annual-income"
									name="annual-income" maxlength="25" placeholder="$50,000">
								<label>annually.</label>
							</div>
							<div class="inline-text email">
								<label class=" " for="calc-email-address">Provide your
									email address:</label> <input required="" class="  " type="text"
									id="calc-email-address" name="email-address" maxlength="100">
							</div>
							<p id="check-all">Please check all that apply:</p>
							<div class="inline-checkbox margin-top-s">
								<input type="checkbox" name="us_citizen" id="calc-us_citizen"
									checked=""> <label for="calc-us_citizen">I am a
									U.S. Citizen.</label>
							</div>
							<div class="inline-checkbox">
								<input type="checkbox" name="policy_owner"
									id="calc-policy_owner" checked=""> <label
									for="calc-policy_owner">I, or my spouse, will be the
									policy owner.</label>
							</div>
							<div class="inline-checkbox">
								<input type="checkbox" name="not_replacing"
									id="calc-not_replacing" checked=""> <label
									for="calc-not_replacing">I am not replacing an existing
									policy.</label>
							</div>
							<div class="inline-checkbox">
								<input type="checkbox" name="allow_marketing"
									id="calc-allow_marketing" checked=""> <label
									for="calc-allow_marketing">By providing your contact
									information above, you agree to this website's Privacy Policy,
									and you consent to receive offers and marketing communications
									at the email address or telephone numbers you provided,
									including autodialed, pre-recorded calls, SMS or MMS messages.</label>
							</div>							
							<div class="text-center">
								<input type="button" class="btn btn-primary"
									value="Get Your Quote" id="quote-form-submit" wpvalue="next"
									onclick="validateQuote('calculateneed,natlang')">
							</div>
							<input type="hidden" id="calc-requested_coverage"
								name="requested_coverage"> <input type="hidden"
								id="calc-policy_term" name="policy_term"> <input
								type="hidden" id="calc-path_selected" name="path_selected"
								value="1">
						</form>
						<div id="disclaimers" class="col-md-4 col-md-offset-1">
							<h4 class="text-center margin-bottom-s">Disclaimer</h4>
							<p class="disclaimers-content">The quotes that will be provided are based 
								on your selection of age, gender and smoking status. These quotes were
								produced automatically.</p>
							<p class="disclaimers-content">
								Final rates are always subject to underwriting approval by the
								insurance company. <a href="policyForms.do">Click here</a> to better
								understand the underwriting criteria. You have an option of
								continuing with Two Rivers Agency and apply online, or having
								our call center partner contact you shortly to gather additional information
								and to further assure that your customized quote is accurate.
								After speaking with you, our call center partner will send your customized
								quote via email. It will weigh responses to health and lifestyle
								questions to more accurately estimate your rate. Please read
								through our <a href="legalInformation.do">legal policy</a> to better
								understand the processing and information being made available.
								<a href="policyForms.do">Click here</a> for policy forms and
								descriptions of available plans.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		
	</div>
 </body>
<%@include file="footer.jsp"%>
</html>>
