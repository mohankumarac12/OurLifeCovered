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
	<head>
	<script src='https://www.google.com/recaptcha/api.js'></script>
	</head>
	<section id="contact-us" class="main-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row margin-bottom-m quote-progress">
                <div class="col-md-12">
                    <h2 class="text-center">Contact Us</h2>
                </div>
                <div class="col-md-6 col-md-offset-3 margin-bottom-m">
                   	<p id="contact-us-intro-text" class="text-center">${contactusintrotext}</p> 
                    <p id="contact-us-intro-text" class="text-center">Fill out the form below and we'll be in touch.</p>
                    <p id="contact-us-privacy-text" class="text-center">Our Privacy Policy can be found below.</p>
                </div>
                <div class="col-md-4 col-md-offset-4">                    
                    <form action="" id="contact-form" name="contactForm">
                        <div class="success-text" style="font-size:145%">                                
                        </div>
                        <span class="hide-contact-fields">
                        	<div class="error-text"></div>
                            <div class="inline-text required">
                                <input required="" class=" " type="text" id="contact-form-name" name="contact-form-name" maxlength="25">
                                <label class=" " for="contact-form-name">Name</label>
                            </div>
                            <div class="inline-text required">
                                <input required="" class=" " type="text" id="contact-form-email" name="contact-form-email">
                                <label class=" " for="contact-form-email">Email Address</label>
                            </div>
                            <div class="inline-text required ">
                                <input class=" " type="text" pattern="[0-9]*" id="contact-form-phone" name="contact-form-phone">
                                <label class=" " for="contact-form-phone">Phone Number</label>
                            </div>
                            <div class="inline-text required margin-bottom-s">
                                <input class=" " type="text" id="contact-form-best-time" name="contact-form-best-time" maxlength="25">
                                <label class=" " for="contact-form-best-time">Best Time To Call</label>
                            </div>
							<div class="inline-select required">
								<select name="time-zone" class="small" id="contact-time-zone" required="">
									<option value="">- Select a Time Zone -</option>
								    <option value="PT">Pacific Time</option>
								    <option value="CT">Central Time</option>
								    <option value="ET">Eastern Time</option>
								</select>
							</div>
                            <div class="">
                                <label style="font-size:16px" for="contact-form-comments">Comments</label>
                               <!--  <textarea id="contact-form-comments" name="contact-form-comments" rows="5" cols="55" maxlength="800"></textarea><grammarly-btn><div style="visibility: hidden; z-index: 2;" class="_9b5ef6-textarea_btn _9b5ef6-not_focused" data-grammarly-reactid=".0"><div class="_9b5ef6-transform_wrap" data-grammarly-reactid=".0.0"><div title="Protected by Grammarly" class="_9b5ef6-status" data-grammarly-reactid=".0.0.0">&nbsp;</div></div></div></grammarly-btn> -->
                               <textarea id="contact-form-comments" name="contact-form-comments" rows="5" cols="55" maxlength="800"></textarea>
                            </div>
                            <!-- <div class="g-recaptcha" data-sitekey="6LdK6w4UAAAAANjpS275dBIEfBbY0-4iVGQW6N4n"></div> -->
                            <div class="text-center">
                                <br>
                                <input id="contact-form-submit" type="button" class="btn btn-primary" value="Submit" onclick="validateContactus()" wpvalue="submit">
                            </div>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    </section>
<%@include file="footer.jsp"%>