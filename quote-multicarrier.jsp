<%@include file="header.jsp" %>
<script type="text/javascript">
    window.history.forward();
    function noBack() { window.history.forward(); }
</script> 
<body onload='noBack();loadMultiCarrierWithQuoteData("${src}","${sessionProfile.pathId}")' onpageshow="if (event.persisted) noBack();" onunload="">
<div id="loading" class="loading" style="display: block;"><img src="resources/images/loading_spinner.svg" width="70" height="70" alt="Loading"></div>
<div id="quote_multicarrier" class="background-wrap">
	<section id="quote-page" class="cover main-section">
	    <div class="container">
	    	<div id="original-quote" class="column online">
		    	<form action="" id="original-quote-form" name="originalQuoteForm">
		            <h2>Apply Online</h2>
		            <div class="row trans-america">
		                <div id="transamerica_logo">
		                    <img class="transamerica" src="resources/images/transamerica.svg" alt="Transamerica Logo">
		                </div>
		                <div class="best-class">
		                    <span class="currency">$</span>
		                    <span class="price">25</span>
		                    <span class="freq">/mo.</span>
		                </div>
		                 <div class="standard-class" style="display:none;">
		                    <span class="currency">$</span>
		                    <span class="price">25</span>
		                    <span class="freq">/mo.</span>
		                </div>
		                <!-- <div id="class_category">
		                    <span class="rate-name">Preferred Plus Class</span>
		                </div> -->
		                <!-- <div class="comparison">
		                    <h5 class="rate-name">Compare to <span class="currency">$</span><span class="price">52</span><span class="freq">/mo</span> <span class="rate-name">Standard Non-Smoker</span></h5>
		                </div> -->
		                <div class="row recommended-coverage">
		                    <div class="text-center col-md-6">
	                            <h4>Term</h4>
	                            <h3 class="calculated-term">20 Years</h3>
	                        </div>
		                    <div class="text-center col-md-6">
	                            <h4>Coverage</h4>
	                            <h3 class="calculated-coverage">$1,400,000</h3>
	                        </div>
		                </div>
		                <div id="apply_button">
		                    <a id="#original-quote-applynow" href="#" class="btn btn-primary apply-now" wpvalue="apply_now">Apply Now</a>
		                </div>
		            </div>
		            <input type="hidden" id="original-quote-originalCoverageAmnt" name="originalCoverageAmnt">
                    <input type="hidden" id="original-quote-originalPolicyTerm" name="originalCoverageAmnt">
                    <input type="hidden" id="original-quote_selected" name="path_selected">
		        </form>
	        </div>
	        <div id="comparison-quote" class="column call">
		        <form action="" id="comparison-quote-form" name="comparisonQuoteForm">
		            <h2>Call To Learn More</h2>
		            <div class="row protective">
		                <div class="column">
		                    <h6>Protective Life<sup>TM</sup></h6>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class">
		                        <span class="currency">$</span>
			                    <span class="price">27</span>
			                    <span class="freq">/mo</span>
		                    </div>
		                    <!-- <div class="comparison">
		                        <h5 class="rate-name">Compare to <span class="price">$52</span>/mo</h5>
		                    </div> -->
		                </div>
		                <div class="column">
		                	<div class="coverage-term">
			                    <p>Coverage: <span class="calculated-coverage">$1,400,000</span></p>
			                    <p>Term: <span class="term quote-term calculated-term">20 years</span></p>
			                </div>
			                <div class="phone">
		                    	<p>Call to learn more <a href="tel:18888888888">${phoneNumber}</a></p>
		                    </div>
		                </div>
		            </div>
		            <div class="row banner">
		                <div class="column">
		                    <!-- <h6>Vantage Term<sup>TM</sup></h6> -->
		                    <h6>Banner Life<sup>TM</sup></h6>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class">
		                        <span class="currency">$</span>
			                    <span class="price">35</span>
			                    <span class="freq">/mo</span>
		                    </div>
		                    <!-- <div class="comparison">
		                        <h5 class="rate-name">Compare to <span class="price">$52</span>/mo</h5>
		                    </div> -->
		                </div>
		                <div class="column">
		                	<div class="coverage-term">
			                    <p>Coverage: <span class="calculated-coverage">$1,400,000</span></p>
			                    <p>Term: <span class="term quote-term calculated-term">20 years</span></p>
			                </div>
			                <div class="phone">
		                    	<p>Call to learn more <a href="tel:18888888888">${phoneNumber}</a></p>
		                    </div>
		                </div>
		            </div>
		            <div class="row aig">
		                <div class="column">
		                    <h6>AIG Life<sup>TM</sup></h6>
		                </div>
		                <div class="column">
		                    <div class="multicarrier-class">
		                        <span class="currency">$</span>
			                    <span class="price">36</span>
			                    <span class="freq">/mo</span>
		                    </div>
		                    <!-- <div class="comparison">
		                        <h5 class="rate-name">Compare to <span class="price">$52</span>/mo</h5>
		                    </div> -->
		                </div>
		                <div class="column">
		                	<div class="coverage-term">
			                    <p>Coverage: <span class="calculated-coverage">$1,400,000</span></p>
			                    <p>Term: <span class="term quote-term calculated-term">20 years</span></p>
			                </div>
			                <div class="phone">
		                    	<p>Call to learn more <a href="tel:18888888888">${phoneNumber}</a></p>
		                    </div>
		                </div>
		            </div>
		            <input type="hidden" id="comparison-quote-selectedCoverageAmnt" name="selectedCoverageAmnt">
        			<input type="hidden" id="comparison-quote-selectedPolicyTerm" name="selectedPolicyTerm">
        			<input type="hidden" id="comparison-quote_selected" name="path_selected">
		        </form>
		    </div>
		    <div id="legal_policy">
		    	<a href="policyForms.do">Important Policy Information <i class="fa fa-angle-right" aria-hidden="true"></i></a>
		    </div>
		    	<small>OLC116117</small>
		    <div id="ta-code">
		    </div>
		    
	    </div>
	
		<section id="range_sliders">
		    <div class="sliders">
		        <span class="slider-label">Adjust Amount of Coverage</span>
		        <span class="quote-coverage calculated-coverage">$1,400,000</span>
		        <div id="comparison-coverage" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
	                <div class="ui-slider-range ui-widget-header ui-corner-all ">
	                </div>
	                <span class="ui-slider-handle ui-state-default ui-corner-all upd-cov-slider-range" tabindex="0" style="left: 0%;"></span>
	            </div>
		    </div>
		    <div class="sliders">
		        <span class="slider-label">Adjust Years of Coverage</span>
		        <span class="quote-term calculated-term">20 Years</span>
		        <div id="comparison-term" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all">
	                <div class="ui-slider-range ui-widget-header ui-corner-all ">
	                </div>
	                <span class="ui-slider-handle ui-state-default ui-corner-all upd-term-slider-range" tabindex="0" style="left: 0%;"></span>
	            </div>
		    </div>
		</section>
	</section>
</div>
<!-- </body> -->
<%@include file="footer.jsp" %>