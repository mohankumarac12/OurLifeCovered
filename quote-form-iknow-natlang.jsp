<%@include file="header.jsp" %>

    <div id="quote_form_natlang" class="background-wrap">
        <section class="quote-header text-center">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>FAST FACTS ABOUT YOU</h1>
                        <p>To create your customized term life insurance quote please fiÅll in the blanks and answer the questions below.</p>
                    </div>
                </div>
            </div>
        </section>
        <section id="calculator-report" class="quote">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <form action="" id="needs-calculator-demographics-form" name="needsCalculatorDemographicsForm">
                            <span id="tell-story">Tell us your story:</span>
                            <div class="error-text">
                            </div>
                            <div class="inline-text required">
                                <label class=" " for="calc-first-name">Hi, my name is</label>
                                <input required="" class=" " type="text" id="calc-first-name" name="first-name" maxlength="25" placeholder="your first and last name">
                            </div>
                            <!-- <div class="inline-text required">
                                <input type=hidden  type="text"  value="xyz" id="calc-last-name" name="last-name" maxlength="25">
                                <label class=" " for="calc-last-name">Last Name</label>
                            </div> -->
                            <div class="inline-text required">
                                <label class=" " for="calc-date-of-birth">and I was born on</label>
                                <input required="" class=" " type="text" pattern="[0-9]*" id="calc-date-of-birth" name="date-of-birth" placeholder="your birthdate">.
                            </div>
                            <!--  <div class="inline-text required">
                                <input type ="hidden"   value="1234567891" pattern="[0-9]*" id="calc-form-phone" name="calc-form-phone">
                                
                            </div> -->
                            <div class="inline-select required complete">
                                <label for="calc-gender">I'm a</label>
                                <span class="select-wrapper  small">
                                    <select required="" name="gender" id="calc-gender" class="small">
                                        <option value="M">male</option>
                                        <option value="F">female</option>
                                    </select>
                                </span>
                                <label for="calc-state">living in</label>
                                <span class="select-wrapper  small">
                                    <select required="" name="state" id="calc-state" class="small">
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
                            <div class="inline-select required complete">
                                <label for="calc-smoker">I'm a</label>
                                <span class="select-wrapper small">
                                    <select required="" name="smoker" id="calc-smoker" class="small">
                                        <option value="2">non-smoker</option>
                                        <option value="1">smoker</option>
                                    </select>
                                </span>,
                                <label class="inline-select required complete" for="calc-annual-income">and I want coverage amount as </label>
                                <!-- <input required="" class=" " type="text" id="calc-annual-income" name="annual-income" maxlength="25" placeholder="$50,000"> -->
                               <c:choose>
								<c:when test="${isMultiCarrier eq 'true' }">
                                 	<span class="select-wrapper  small">
                                           <select required="" name="coverage" id="calc-coverage" class="small" onchange="selectedValue(this)" onload="selectedValue(this)">
                                                <option value="25000" selected="">$25,000</option>
                                                <option value="50000">$50,000</option>
                                                <option value="75000">$75,000</option>
                                                <option value="100000">$100,000</option>
                                                <option value="150000">$150,000</option>
                                                <option value="250000">$250,000</option>
                                                <option value="500000">$500,000</option>
                                                <option value="1000000">$1,000,000</option> 
                                            </select>
                                        </span>
                               	</c:when>
								<c:otherwise>
									<span class="select-wrapper  small">
                                           <select required="" name="coverage" id="calc-coverage" class="small" onchange="selectedValue(this)" onload="selectedValue(this)">
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
								</c:otherwise>
							</c:choose>
                                         <!-- <label>annually.</label> -->
                            </div>
                           <div class="inline-select required complete">
                                <label for="calc-premium">I am looking for a policy that costs about</label>
                                <span class="select-wrapper  small">
                                    <select required name="rec-premium" id="calc-premium" class="small">
                                        <option value="20">$20</option>
                                        <option value="25" selected>$25</option>
                                        <option value="30">$30</option>
                                        <option value="35">$35</option>
                                        <option value="40">$40</option>
                                        <option value="45">$45</option>
                                        <option value="50">$50</option>
                                        <option value="60">$60</option>
                                        <option value="70">$70</option>
                                        <option value="80">$80</option>
                                        <option value="90">$90</option>
                                        <option value="100">$100</option>
                                    </select>
                                </span>
                                <label>per month.</label>
                            </div>
                            <div class="inline-select required ">
                                <label for="rec-coverage" class="adj"> I require number of years to maintain coverage is </label>
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
                            <div class="inline-text required email">
                                <label class=" " for="calc-email-address">Provide your email address:</label>
                                <input required="" class="  " type="text" id="calc-email-address" name="email-address" maxlength="100">
                            </div>
                            <p id="check-all">Please check all that apply:</p>
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
                                <input type="button" class="btn btn-primary" value="Get Your Quote" id="quote-form-submit" wpvalue="next" onclick="validateQuote('iknowwhatiwant,natlang')">
                            </div>
                            <input type="hidden" id="calc-requested_coverage" name="requested_coverage">
                            <input type="hidden" id="calc-policy_term" name="policy_term">
                            <input type="hidden" id="calc-path_selected" name="path_selected" value="2">
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
<%@include file="footer.jsp" %>