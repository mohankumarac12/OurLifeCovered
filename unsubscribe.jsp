<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html class="no-js unsub-main" lang="">
<!-- <head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Unsubscribe</title>
<link rel="stylesheet" href="resources/css/myLifeCoveredRGility.css">
</head> -->
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
<body>
	<!-- Header  -->
	<%@include file="header.jsp"%>
		<section id="unsubscribe" class="cover main-section">
			
                <div class="unsubcontainer">
                	<div class="row">
                		<div class="col-md-8 col-md-offset-2 text-center margin-bottom-m olc-unsubscribe">
                            <h3>Unsubscribe</h3>
                        </div>
							<form action="emailUnsubscribe.do" method="POST" name="unsubscribeMail">
								<div>
									<p class="successMsg">${success}${failed}</p>
									<p class="unsubscribe my-unsub-changes">
										<input required=""  type="text" id="email" name="email" maxlength="25" value=${unsubscribeMail} readonly>
										<input type="submit" class="btn btn-primary unsub-submitbtn" value="Unsubscribe">
										
										<!-- <input type="text" id="email" name="email" size="35"
											value=${unsubscribeMail} readonly> <input type="submit"
											value="Unsubscribe"><br> -->
									</p>
									<!-- <p class="successMsg">${success}${failed}</p> -->
								</div>
							</form>
							
					</div>
				
			</div>		
		</section>
	<%@include file="footer.jsp"%>
</body>
</html>