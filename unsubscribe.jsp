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
	<!-- Header  -->
	<%@include file="header.jsp"%>
		<section id="unsubscribe" class="cover main-section">
			
                <div class="container">
                	<div class="row">
                		<div class="col-md-8 col-md-offset-2 text-center margin-bottom-m">
                            <h3>Unsubscribe</h3>
                        </div>
							<form action="emailUnsubscribe.do" method="POST" name="unsubscribeMail">
								<div>
									<p class="successMsg">${success}${failed}</p>
									<p class="unsubscribe">
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