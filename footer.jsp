	</div>
	<footer>
		<div class="container">
		    <div class="row">
		        <div class="col-md-12 sitemap">
		            <ul>
	                    <li>
                      		<c:choose>
								<c:when test="${isMultiCarrier eq 'true' }">				
									<a href="home.do?phoneNo=${phoneNumber}&src=${srcHome}">Home</a>
								</c:when>
								<c:otherwise>
		 					 		<a href="home.do?src=${srcHome}">Home</a>
								</c:otherwise>
						    </c:choose>
                       	</li>
	                    <li><a id="mylifeCoveredaboutUS" href="aboutus.do" wpvalue="about">About Us</a></li>
	                    <li><a id="mylifeCovered-contactUs" href="contactus.do" wpvalue="contact">Contact Us</a></li>
	                    <li><a id="mylifeCovered-privacyPolicy" href="privacypolicy.do" wpvalue="privacy_policy">Privacy Policy</a></li>
	                    <li><a id="mylifeCoveredTerms" href="terms.do" wpvalue="terms">Terms</a></li>
	                    <li><a id="mylifeCoveredLegalInformation" href="legalInformation.do" wpvalue="legalInfromation">Legal Information</a></li>
	                    <li><a id="mylifeCoveredPolicyForms" href="policyForms.do" wpvalue="policyForms">Policy Forms</a></li>
	                    <li><a id="mylifeCoveredFinancialRatings" href="financialRatings.do" wpvalue="financialRatings">Financial Ratings</a></li>
	                </ul>
		        </div>
		        <div class="col-md-12 social-icons">
        	        <a href="#" target="_blank">
        	            <i class="fa fa-facebook" aria-hidden="true"></i>
        	        </a>
        	        <a href="#" target="_blank">
        	            <i class="fa fa-instagram" aria-hidden="true"></i>
        	        </a>
		        </div>
		        <div class="col-md-12 text-right">
		            <c:choose>
						<c:when test="${isMultiCarrier eq 'true' }">				
							<a href="home.do?phoneNo=${phoneNumber}&src=${srcHome}" class="main_logo">
							<img class="logo" src="resources/images/logo.svg">
							</a>
						</c:when>
						<c:otherwise>
							<a href="home.do?src=${srcHome}" class="main_logo">
							<img class="logo" src="resources/images/footer-logo.png">
							</a>
						</c:otherwise>
					</c:choose>
		            <span>Brought to you by <a id="#mylifeCovered-riversAgency" href="http://www.tworiversagency.com" target="_blank" class="secondary">Two Rivers Agency</a>
		            <small>Copyright &copy; <script>document.write(new Date().getFullYear())</script> RGAx. All rights reserved.</small>
		        </div>
		    </div>
		</div>
	</footer>
	<script src="resources/js/jquery-1.10.2.js"></script>
	<script src="resources/js/scripts.minv2.js"></script>
	<script src="resources/js/events.js"></script>
	<script type="text/javascript" src="resources/js/native.js"></script>
	<script type="text/javascript" src="resources/js/jquery-ui.js"></script>
    <script type="text/javascript" src="resources/js/jquery.ui.touch-punch.min.js"></script>
	<script type="text/javascript" src="resources/js/hashtable.js"></script>
	<script type="text/javascript" src="resources/js/jquery.numberformatter-1.2.4.js"></script>
	<script type="text/javascript" src="resources/js/myLifeCoveredRGility.js"></script>
	<script type="text/javascript" src="resources/js/bootstrap.js"></script>
	<script type="text/javascript" src="resources/js/olc.js"></script>
	<!-- <script type="text/javascript" src="resources/js/myLifeCoveredWoopra.js"></script> -->
</body>

</html>