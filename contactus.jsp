<%@include file="header.jsp"%>

	<section id="contact-us" class="main-section">
        <div class="overlay"></div>
        <div class="container">
            <div class="row margin-bottom-m quote-progress">
                <div class="col-md-12">
                    <h2 class="text-center">Contact Us</h2>
                </div>
                <div class="col-md-6 col-md-offset-3 margin-bottom-m">
                   	<p id="contact-us-intro-text" class="text-center"></p> 
                    <p id="contact-us-intro-text" class="text-center">Fill out the form below and we'll be in touch.</p>
                    <p id="contact-us-privacy-text" class="text-center">Our Privacy Policy can be found below.</p>
                </div>
                <div class="col-md-4 col-md-offset-4">                    
                    <form action="" id="contact-form" name="contactForm">
                        <div class="error-text">                                
                        </div>
                        <div class="success-text" style="font-size:145%">                                
                        </div>
                        <span class="hide-contact-fields">
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
                                <textarea id="contact-form-comments" name="contact-form-comments" rows="5" cols="55" maxlength="800"></textarea><grammarly-btn><div style="visibility: hidden; z-index: 2;" class="_9b5ef6-textarea_btn _9b5ef6-not_focused" data-grammarly-reactid=".0"><div class="_9b5ef6-transform_wrap" data-grammarly-reactid=".0.0"><div title="Protected by Grammarly" class="_9b5ef6-status" data-grammarly-reactid=".0.0.0">&nbsp;</div></div></div></grammarly-btn>
                            </div>
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