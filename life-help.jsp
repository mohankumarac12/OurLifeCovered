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
sessionStorage.setItem('src', "calculateneed");
</script>
<div id="life_help" class="background-wrap child-landing life-landing">
	<section id="life_help_hero" class="cover text-center">
        <div class="overlay"></div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>YOU COULD SAVE UP TO <br>5O% ON YOUR PREMIUM.</h1>
                    <p>Life insurance can often be significantly less expensive for healthy and fit people. Do you measure up?</p>
                </div>
            </div>
            <div class="row">
            	<div class="col-md-12">
            		<div class="form-wrapper">
            			<div class="primary-container" id="main_determine_amount">
            				<h4>Help me determine <br>my coverage</h4>
            				<p>We recommened 8-10x your salary for optimal coverage.</p>
            				<p>See our full <a href="calculator.do">Calculator</a>.</p>
            				<div class="error-text" id="lifehelp-error"></div>
            				<form action="calculatorForMain.do" id="main-determine-coverage-form" name="mainDetermineCoverageForm" method="POST">
            					<input type="text" pattern="[0-9,]*" id="annualIncomeId" name="annualIncome" placeholder="Annual Income" >
            					<!-- <input type="submit" value="Go"> -->
            					<input id="calculate-need-submit" type="button"
									onclick="return validateMainNeeds()" class="btn btn-primary life-help-calculate"
									value="Go" wpvalue="calculate_need">
            				</form>
            			</div>
            			<a href="life-need.do" class="secondary-container">
            				<h5>I Know How Much <br>I Need</h5>
            			</a>
            			<a href="life-afford.do" class="secondary-container">
            				<h5>I Know What <br>I Can Afford</h5>
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