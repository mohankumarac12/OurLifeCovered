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
<%@include file="header.jsp" %>
<script type="text/javascript">
sessionStorage.setItem('src',"${src}");
sessionStorage.setItem('affordableHome',"true");
//alert("${sessionProfile}");
</script>
<body onload="changingFirstName()" class="affordableBody">
	<section id="affordability_hero" class="section-photo cover text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1>See how much term life insurance coverage you can get for as little as $25 per month!</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                         <div class="form-wrapper">
                        <div class="primary-container">
                            <form action="quote-form-affordability.do" method="POST" name="mainAffordableForm" id="main-affordable-form">
                            <div class="error-text"></div>
                                <div class="inline-text required">
                                    <label class=" " for="afford-full-name">First Name</label>
                                    <input required="" class=" " type="text" id="afford-full-name" name="first-name" maxlength="25" oninput="changingFirstName();">
                                </div>
                                <div class="inline-text required">
                                    <label class=" " for="afford-email-address">Email Address</label>
                                    <input required="" class=" " type="text" id="calc-email-address" name="email-address" maxlength="100">
                                </div>
								<small>Your email address will be used to provide you with a copy of your quote and related information. This information will be transmitted securely.</small>
                                <div class="select-wrapper">
                                    <label for="affordablePremium">Preferred Payment</label>
                                    <select name="affordablePremium" id="affordablePremium" class="coverageamt-select afford-dropdown">
                                        <!-- <option value="">Amount</option> -->
                                         <option value="twentyfive">$25 per month</option>
                                 		 <option value="forty">$40 per month</option>
                               		 	 <option value="fifty">$50 per month</option>
                                    </select>
                                </div>
                                <div class="select-wrapper">
                                    <label for="affordableAge">Age Range</label>
                                    <select name="affordableAge" id="affordableAge" class="coverageamt-select afford-dropdown">
                                        <!-- <option value="">Age</option> -->
                                        <option value="twentyfive">25-29</option>
                                        <option value="thirty">30-34</option>
                                        <option value="thirtyfive">35-39</option>
                                        <option value="forty">40-44</option>
                                        <option value="fortyfive">45-49</option>
                                        <option value="fifty">50+</option>
                                    </select>
                                </div>
                                <div class="select-wrapper">
                                    <label for="affordableGender">Gender</label>
                                    <select name="affordableGender" id="affordableGender" class="coverageamt-select afford-dropdown">
                                        <!-- <option value="">Gender</option> -->
                                        <option value="male">Male</option>
                                        <option value="female" selected>Female</option>
                                    </select>
                                </div>
                                <div class="select-wrapper">
                                	<label for="affordableSmoker">Smoker or Non-smoker</label>
                                    	<select required="" name="affordableSmoker" id="affordableSmoker" class="coverageamt-select afford-dropdown">
                                        	<option value="2" selected>Non-Smoker</option>
                                        	<option value="1">Smoker</option>
                                    	</select>
                            	</div>
                               <input type="hidden" id="hiddenCoverage" name="totalCoverage" class="quoted-amount" value="$500,000">
                            </div>
                            <div class="secondary-container">
                                <p id="initialQuote">Great news <span id="affordFirstName"></span>! Based on the above, you may qualify for about <span id="totalCoverage" class="quoted-amount">$500,000</span> in 10-year term coverage.<!-- , and save close to <span id="totalSavings" class="quoted-amount">$15</span> per month over standard premium rates.<sup>*</sup> -->
                            </div>
                            <div class="gobutton-container">
                                <input type="button" class="btn btn-primary" value="Start My Quote" id="main-affordable-form" wpvalue="continue" onclick="return validatePremiumMlc();">
                            </div>
                           </form>
                        </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <small>*Coverage amounts are estimates for the applicable gender and age range. Proceed to "start my quote" for age-specific rates.</small>
                </div>
            </div>
        </div>
    </section>
</body>
<%@include file="footer.jsp" %>