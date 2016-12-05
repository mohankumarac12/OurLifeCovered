<html class="no-js" lang="">
<%@include file="header.jsp" %>
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

<script type="text/javascript">
sessionStorage.setItem('src', "affordability");
</script>
<div id="life_afford" class="background-wrap child-landing life-landing">
	<section id="life_afford_hero" class="cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>YOU COULD QUALIFY TO GET SIGNIFICANTLY MORE COVERAGE FOR YOUR PREMIUM DOLLAR. DO YOU QUALIFY?</h1>
                    <p>Fit and healthy people often get more coverage for the same price as standard rated individuals. Find out how much more.</p>
                </div>
            </div>
            <div class="row">
            	<div class="col-md-12">
            		<div class="form-wrapper">
            			<div class="primary-container" id='main_affordable_amount'>
            				<h4>I know how much I can afford</h4>
            				<p>See our full <a href="calculator.do">Calculator</a>.</p>
            				<div class="error-text" id="lifeafford-error"></div>
            				<form action="twentyFiveDollarsToNeedFlow.do" method="POST" name="mainAffordableForm" id="main-affordable-form">
            					<select name="affordablePremium" id="affordablePremium" class="coverageamt-select afford-dropdown">
                                    <!-- <option value="">Amount</option> -->
                                    <option value="twentyfive">$25 per month</option>
                                     <option value="forty">$40 per month</option>
                                    <option value="fifty">$50 per month</option>
                                    <!-- <option value="onehundred">$100 per month</option> -->
                                </select>
            					 <select name="affordableAge" id="affordableAge" class="coverageamt-select afford-dropdown">
                                    <!-- <option value="">Age</option> -->
                                    <option value="twentyfive">25-29 years old</option>
                                    <option value="thirty">30-34 years old</option>
                                    <option value="thirtyfive">35-39 years old</option>
                                    <option value="forty">40-44 years old</option>
                                    <option value="fortyfive">45-49 years old</option>
                                    <option value="fifty">50+ years old</option>
                                </select>
                                <select name="affordableGender" id="affordableGender" class="coverageamt-select afford-dropdown">
                                    <!-- <option value="">Gender</option> -->
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <input type="hidden" id="hiddenCoverage" name="totalCoverage" class="quoted-amount" value="$550,000">
                                <p id="initialQuote">Based on the above, you may qualify for about <span id="totalCoverage" class="quoted-amount">$550,000</span> in 10-year term coverage, and save close to <span id="totalSavings" class="quoted-amount">$19</span> per month over standard premium rates.<sup>*</sup></p>
            					<!-- <input type="submit" onclick="quoteVisiblity('twentyFiveDollars')" value="Go"> -->
            					<input type="button" class="btn btn-primary" value="Start My Quote" id="main-affordable-form" wpvalue="continue" onclick="return validatePremiumMlc();">
            				</form>
            			</div>
            			<a href="life-help.do" class="secondary-container">
            				<h5>Help Me Determine <br>My Coverage</h5>
            			</a>
            			<a href="life-need.do" class="secondary-container">
            				<h5>I Know How <br>Much I Need</h5>
            			</a>
            		</div>
            	</div>
            </div>
        </div>
    </section>
    <section id="life_help_tiles" class="tiles child-tiles">
    	<!-- <div class="container">
    		<div class="row">
    			<div class="col-md-12">
    				<a href="blood.do" id="blood" class="tile">
    					<h3>Athletic Blood Profile</h3>
    				</a>
    				<a href="life-help.do" id="life" class="tile active">
    					<h3>Life Insurance for the Healthy</h3>
    				</a>
    			</div>
    		</div>
    	</div> -->
    	<div class="container">
            <div class="row">
                <div class="col-md-12">
                    <a href="blood.do" id="blood" class="tile">
                        <h3>Athletic <br>Blood Profile</h3>
                    </a>
                    <a href="life-help.do" id="life" class="tile active">
                        <h3>Term Life <br>Insurance</h3>
                    </a>
                    <a href="everplans.do" id="emergency" class="tile">
                        <h3>Life & Legacy <br>Planning</h3>
                    </a>
                </div>
            </div>
        </div>
    </section>
</div>

<%@include file="footer.jsp" %>
</body>
</html>