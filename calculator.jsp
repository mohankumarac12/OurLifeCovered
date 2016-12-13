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
					<p>Complete the below to find out the level of coverage you
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
								onclick="validateNeeds()" class="btn btn-primary"
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
			<div id="quote_form" class="container">
				<div class="row">
					<div class="col-md-12">
						<form action="" id="needs-calculator-demographics-form"
							name="needsCalculatorDemographicsForm">
							<div class="error-text"></div>
							<div class="inline-text required">
								<input required="" class=" " type="text" id="calc-first-name"
									name="first-name" maxlength="25"> <label class=" "
									for="calc-first-name">First Name</label>
							</div>
							<div class="inline-text required">
								<input required="" class=" " type="text" id="calc-last-name"
									name="last-name" maxlength="25"> <label class=" "
									for="calc-last-name">Last Name</label>
							</div>
							<div class="inline-text required">
								<input required="" class=" " type="text" pattern="[0-9]*"
									id="calc-date-of-birth" name="date-of-birth"> <label
									class=" " for="calc-date-of-birth">Date of Birth</label>
							</div>
							<div class="inline-text required">
								<input required="" class="  " type="text"
									id="calc-email-address" name="email-address" maxlength="100">
								<label class=" " for="calc-email-address">Email Address</label>
							</div>
							<div class="inline-text required">
								<input class=" " type="text" pattern="[0-9]*"
									id="calc-form-phone" name="calc-form-phone"> <label
									class=" " for="contact-form-phone">Phone Number</label>
							</div>
							<div class="inline-text required">
								<input required="" class=" " pattern="[0-9]*" type="text"
									id="calc-annual-income" name="annual-income" disabled maxlength="25" value="${sessionProfile.annualIncome}">
								<label class=" " for="calc-annual-income">Annual Income</label>
							</div>
							<div class="inline-select required complete">
								<label for="calc-smoker">Smoker or Non-smoker</label> <span
									class="select-wrapper small"> <select required=""
									name="smoker" id="calc-smoker" class="small">
										<option value="2">Non-Smoker</option>
										<option value="1">Smoker</option>
								</select>
								</span>
							</div>
							<div class="inline-select required complete">
								<label for="calc-gender">Biological Gender</label> <span
									class="select-wrapper  small"> <select required=""
									name="gender" id="calc-gender" class="small">
										<option value="M">Male</option>
										<option value="F">Female</option>
								</select>
								</span>
							</div>
							<div class="inline-select required ">
								<label for="calc-state">State</label> <span
									class="select-wrapper  small"> <select required=""
									name="state" id="calc-state" class="small">
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
								<input required="" class=" " pattern="[0-9]*" type="text"
									id="calc-coverage" name="coverage" maxlength="25" disabled value="${sessionProfile.coverage}"> <label
									for="calc-coverage1">Coverage</label>
							</div>
							<!--               <div class="inline-select required complete">
                                        <label for="calc-coverage1">Coverage</label>
                                        <span class="select-wrapper  small">
                                           <select required="" name="coverage" id="calc-coverage" class="small" onchange="selectedValue(this)" onload="selectedValue(this)">
                                                <option value="50000">$50,000</option>
                                                <option value="100000" selected="">$100,000</option>
                                                <option value="200000">$200,000</option>
                                                <option value="350000">$350,000</option>
                                                <option value="500000">$500,000</option>
                                                <option value="750000">$750,000</option>
                                                <option value="1000000">$1,000,000</option>
                                                <option value="1500000">$1,500,000</option>
                                                <option value="2000000">$2,000,000</option> 
                                            </select>
                                        </span>
                                    </div> -->
							<div class="inline-select required ">
								<label for="rec-coverage" class="adj">Number of years to
									maintain coverage</label> <span class="select-wrapper  small"> <select
									required="" name="rec-coverage" id="rec-coverage" class="small">
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
								<input type="button" class="btn btn-primary"
									value="See Your Quote" id="quote-form-submit" wpvalue="next"
									onclick="validateQuote('calculateneed')">
							</div>
							<input type="hidden" id="calc-requested_coverage"
								name="requested_coverage"> <input type="hidden"
								id="calc-policy_term" name="policy_term"> <input
								type="hidden" id="calc-path_selected" name="path_selected"
								value="1">
						</form>
						<div id="disclaimers" class="col-md-4 col-md-offset-1">
							<h4 class="text-center margin-bottom-s">Disclaimer</h4>
							<p class="disclaimers-content">The quotes that will be
								provided reflect the best values available based only on your
								selection of age, gender and smoking status. These quotes were
								produced automatically.</p>
							<p class="disclaimers-content">
								Final rates are always subject to underwriting approval by the
								insurance company. <a href="policyForms.do">Click here</a> to better
								understand the underwriting criteria. You have an option of
								continuing with Two Rivers Agency and apply online, or having
								Health IQ contact you shortly to gather additional information
								and to further assure that your customized quote is accurate.
								After speaking with you, Health IQ will send your customized
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
<%@include file="footer.jsp"%>
