<%@include file="header.jsp" %>
<script type="text/javascript">
    window.history.forward();
    function noBack() { window.history.forward(); }
</script> 
<body onload='noBack();loadSingleCarrierWithQuoteData("${src}","${sessionProfile.pathId}")' onpageshow="if (event.persisted) noBack();" onunload="">
    <div id="quote_singlecarrier" class="background-wrap">
        <section id="quote-page">
            <div class="container">
                <span class="error-text"></span>
                <span class="success-text"></span>
                <div class="row">
                    <div id="original-quote" class="col-xs-8 col-xs-offset-2 col-sm-6 col-sm-offset-0 col-md-5 quote col-md-offset-1 col-lg-4 quote col-lg-offset-2 ">
                        <div class="box">
                            <form action="" id="original-quote-form" name="originalQuoteForm">
                                <div class="tab-heading">
                                    <span>Recommended Coverage</span>
                                </div>
                                <div class="text-center">
                                    <img class="transamerica" src="resources/images/transamerica.svg" alt="Transamerica Logo">
                                </div>
                                <div class="row margin-top-s margin-bottom-s trans-america">
                                    <div class="standard-class">
                                        <div class="text-center">
                                            <span class="currency">$</span>
                                            <span class="price">56.24</span>
                                            <span class="freq">/mo</span>
                                            <br>
                                        </div>
                                        <div class="text-center">
                                            <span class="rate-name">Standard Non-Smoker</span>
                                        </div>
                                    </div>
                                    <div class="best-class" style="display:none;">
                                        <div class="text-center">
                                        <div class="text-center">
                                                <span class="rate-name">Compare To</span>
                                            </div>
                                            <span class="currency">$</span>
                                            <span class="price">36.64</span>
                                            <span class="freq">/mo</span>
                                            <br>
                                        </div>
                                        <div class="text-center">
                                            <span class="rate-name">Preferred Plus Class</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="sliders margin-bottom-s">
                                    <div>Coverage<span class="quote-coverage calculated-coverage">$300,000</span></div>
                                    <div id="preselected-coverage">
                                        <div class="ui-slider-range ui-widget-header ui-corner-all ">
                                        </div>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all recom-cov-slider-range" tabindex="0" style="left: 0%;"></span>
                                    </div>
                                </div>
                                <div class="sliders margin-bottom-m">
                                    <div>Term<span class="quote-term calculated-term">30 Years</span></div>
                                    <div id="preselected-term">
                                        <div class="ui-slider-range ui-widget-header ui-corner-all ">
                                        </div>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all recom-term-slider-range" tabindex="0" style="left: 0%;"></span>
                                    </div>
                                </div>
                                <div class="row recommended-coverage">
                                    <div class="text-center col-md-6">
                                        <h4>Coverage</h4>
                                        <h3 class="calculated-coverage">$1,030,000</h3>
                                    </div>
                                    <div class="text-center col-md-6">
                                        <h4>Term Period</h4>
                                        <h3 class="calculated-term">30 Years</h3>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <a id="#original-quote-applynow" href="#" class="btn btn-primary apply-now" wpvalue="apply_now">Apply Now</a>
                                </div>
                                <div class="text-center">
                                     <p class="meta">Trendsetter Super, Policy Forms ICC16 TL22, TL22, 1-322 11-107, 1-306 11-107, 1-305 11-107, 1-304 11-107, 1-303 11-107, or 1-334 11-107 are term life insurance policies issued by Transamerica Life Insurance Company, Cedar Rapids IA 52499. Premiums increase annually for Trendsetter Super YRT, and beginning in year 11 for the 10-year policy, in year 16 for the 15-year policy, in year 21 for the 20-year policy, in year 26 for the 25-year policy, and in year 31 for the 30-year policy. Policy form and number may vary, and this policy and the riders with this policy may not be available in all jurisdictions. Insurance eligibility and premiums are subject to underwriting. In most states, in the event of suicide during the first two policy years, death benefits are limited only to the return of premiums paid.</p>
                                     <!--<p class="meta">Offer available in all states except New York.</p> -->
                                     <!-- <p class="meta">As a highly fit person, you may qualify for preferred plus class coverage. However, this is non-binding prior to your application.</p> -->
                                     <p class="meta">No quotes are final until underwriting is completed.  Other underwriting classes, face amounts and payment modes are available.  Premiums will be lower if paid annually.  Rates subject to change without notice.</p>
                                     <p class="meta">The recommended coverage amount is determined by Two Rivers Agency.  Two Rivers Agency is an independent contractor representing Transamerica Life Insurance Company.</p>
                                     <p class="meta">The Two Rivers Agency (Rivers Run Insurance Agency in CA) is a wholly-owned subsidiary of <strong>RGAx</strong>.©2016 RGAx LLC All Rights Reserved.</p>
                                     <p class="meta">AT 1536928 TRWeb 0616</p>
                                </div>
                                <input type="hidden" id="original-quote-originalCoverageAmnt" name="originalCoverageAmnt">
                                <input type="hidden" id="original-quote-originalPolicyTerm" name="originalCoverageAmnt">
                                <input type="hidden" id="original-quote_selected" name="path_selected">
                            </form>
                        </div>
                    </div>
                    <div id="comparison-quote" class="col-xs-8  col-sm-6 col-md-5 quote col-lg-4   quote comparison" style="display:block;">
                        <div class="box">
                            <form action="" id="comparison-quote-form" name="comparisonQuoteForm">
                                <div class="tab-heading comparison">
                                    <span>Enter your own amount &amp; term</span>
                                </div>
                                <div class="text-center">
                                    <img class="transamerica" src="resources/images/transamerica.svg" alt="">
                                </div>
                                <div class="row margin-top-s margin-bottom-s trans-america">
                                    <div class="standard-class">
                                        <div class="text-center">
                                            <span class="currency">$</span>
                                            <span class="price">56.24</span>
                                            <span class="freq">/mo</span>
                                            <br>
                                        </div>
                                        <div class="text-center">
                                            <span class="rate-name">Standard Non-Smoker</span>
                                        </div>
                                    </div>
                                     <div class="best-class" style="display:none;">
                                        <div class="text-center">
                                        <div class="text-center">
                                                <span class="rate-name">Compare To</span>
                                            </div>
                                            <span class="currency">$</span>
                                            <span class="price">36.64</span>
                                            <span class="freq">/mo</span>
                                            <br>
                                        </div>
                                        <div class="text-center">
                                            <span class="rate-name">Preferred Plus Class</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="sliders margin-bottom-s">
                                    <div>Coverage<span class="quote-coverage calculated-coverage">$300,000</span></div>
                                    <div id="comparison-coverage">
                                        <div class="ui-slider-range ui-widget-header ui-corner-all ">
                                        </div>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all upd-cov-slider-range" tabindex="0" style="left: 0%;"></span>
                                    </div>
                                </div>
                                <div class="sliders margin-bottom-m">
                                    <div>Term<span class="quote-term calculated-term">30 Years</span></div>
                                    <div id="comparison-term">
                                        <div class="ui-slider-range ui-widget-header ui-corner-all ">
                                        </div>
                                        <span class="ui-slider-handle ui-state-default ui-corner-all upd-term-slider-range" tabindex="0" style="left: 0%;"></span>
                                    </div>
                                </div>
                                <div class="row recommended-coverage">
                                    <div class="text-center col-md-6">
                                        <h4>Coverage</h4>
                                        <h3 class="calculated-coverage">$1,030,000</h3>
                                    </div>
                                    <div class="text-center col-md-6">
                                        <h4>Term Period</h4>
                                        <h3 class="calculated-term">30 Years</h3>
                                    </div>
                                </div>
                                <div class="text-center">
                                    <a href="#" class="btn btn-primary apply-now" id="#recommended-quote-applynow" wpvalue="apply_now">Apply Now</a>
                                </div>
                                <div class="text-center">
                                     <p class="meta">Trendsetter Super, Policy Forms ICC16 TL22, TL22, 1-322 11-107, 1-306 11-107, 1-305 11-107, 1-304 11-107, 1-303 11-107, or 1-334 11-107 are term life insurance policies issued by Transamerica Life Insurance Company, Cedar Rapids IA 52499. Premiums increase annually for Trendsetter Super YRT, and beginning in year 11 for the 10-year policy, in year 16 for the 15-year policy, in year 21 for the 20-year policy, in year 26 for the 25-year policy, and in year 31 for the 30-year policy. Policy form and number may vary, and this policy and the riders with this policy may not be available in all jurisdictions. Insurance eligibility and premiums are subject to underwriting. In most states, in the event of suicide during the first two policy years, death benefits are limited only to the return of premiums paid.</p>
                                     <!--<p class="meta">Offer available in all states except New York.</p>-->
                                     <!-- <p class="meta">As a highly fit person, you may qualify for preferred plus class coverage. However, this is non-binding prior to your application.</p> -->
                                     <p class="meta">No quotes are final until underwriting is completed.  Other underwriting classes, face amounts and payment modes are available.  Premiums will be lower if paid annually.  Rates subject to change without notice.</p>
                                     <p class="meta">The recommended coverage amount is determined by Two Rivers Agency.  Two Rivers Agency is an independent contractor representing Transamerica Life Insurance Company.</p>
                                     <p class="meta">The Two Rivers Agency (Rivers Run Insurance Agency in CA) is a wholly-owned subsidiary of <strong>RGAx</strong>.©2016 RGAx LLC All Rights Reserved.</p>
                                     <p class="meta">AT 1536928 TRWeb 0616</p>
                                </div>
                                <input type="hidden" id="comparison-quote-selectedCoverageAmnt" name="selectedCoverageAmnt">
                                <input type="hidden" id="comparison-quote-selectedPolicyTerm" name="selectedPolicyTerm">
                                <input type="hidden" id="comparison-quote_selected" name="path_selected">
                            </form>
                        </div>
                    </div>
                </div>
                <div id="legal-code-wrap">
                    <div id="legal_policy">
                        <a href="policyForms.do">Important Policy Information <i class="fa fa-angle-right" aria-hidden="true"></i></a>
                    </div>
                    <div id="ta-code">
                        <small>OLC114117</small>
                    </div>
                </div>
            </div>
        </section>
    </div>
</body>
<%@include file="footer.jsp" %>