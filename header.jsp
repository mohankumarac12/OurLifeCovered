<html class="no-js" lang="">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="x" uri="http://java.sun.com/jsp/jstl/xml" %>

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>OUR LIFE COVERED</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="resources/images/favicon.ico" rel="shortcut icon">
    <link rel="stylesheet" href="resources/css/jquery-ui.css">
    <link rel="stylesheet" href="resources/css/myLifeCoveredRGility.css">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="resources/css/bootstrap.css?v=3.0.0">
    <link rel="stylesheet" href="resources/css/olc.css?v=3.0.0">
    <!--[if IE 9]>
        <link rel="stylesheet" href="resources/css/ie9.css">
    <![endif]-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
    <!-- <script src="https://use.typekit.net/qns3hng.js"></script> -->
    <!-- <script src="https://use.typekit.net/flk8jvc.js"></script> -->
 	<script src="https://use.typekit.net/rvb3yyz.js"></script>
	<script>try{Typekit.load({ async: true });}catch(e){}</script>
    <script type="text/javascript">
    
    openHomeLink = function() {
    	var phoneNumber = "";
    	 if("${phoneNumber}" != "")
    	    	phoneNumber = "phoneNo="+"${phoneNumber}"+"&";
    	    	
    	var url = "home.do?"+phoneNumber+"src=${srcHome}";   	
    	location.href = url;
    	}
    
    
   
    </script>
    <script>
    (function(i, s, o, g, r, a, m) {
        i['GoogleAnalyticsObject'] = r;
        i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
        a = s.createElement(o),
            m = s.getElementsByTagName(o)[0];
        a.async = 1;
        a.src = g;
        m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
    ga('create', 'UA-79521976-1', 'auto');
    ga('send', 'pageview');
    </script>
    <!-- Start of Woopra Code -->
    <script>
    (function() {
        var t, i, e, n = window,
            o = document,
            a = arguments,
            s = "script",
            r = ["config", "track", "identify", "visit", "push", "call", "trackForm", "trackClick"],
            c = function() {
                var t, i = this;
                for (i._e = [], t = 0; r.length > t; t++)(function(t) {
                    i[t] = function() {
                        return i._e.push([t].concat(Array.prototype.slice.call(arguments, 0))), i
                    }
                })(r[t])
            };
        for (n._w = n._w || {}, t = 0; a.length > t; t++) n._w[a[t]] = n[a[t]] = n[a[t]] || new c;
        i = o.createElement(s), i.async = 1, i.src = "//static.woopra.com/js/w.js", e = o.getElementsByTagName(s)[0], e.parentNode.insertBefore(i, e)
    })("woopra");
    woopra.config({
        domain: 'devweb01.eastus.cloudapp.azure.com'
    });
    //TRACK COMPLETE SITE
    woopra.track();
    //TRACK THE COVERAGE CALCULATOR FORM
    woopra.trackForm("Coverage", "#needs-calculator-form");
    </script>
    <!-- End of Woopra Code -->
    <script>
    ! function(f, b, e, v, n, t, s) {
        if (f.fbq) return;
        n = f.fbq = function() {
            n.callMethod ?
                n.callMethod.apply(n, arguments) : n.queue.push(arguments)
        };
        if (!f._fbq) f._fbq = n;
        n.push = n;
        n.loaded = !0;
        n.version = '2.0';
        n.queue = [];
        t = b.createElement(e);
        t.async = !0;
        t.src = v;
        s = b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t, s)
    }(window,
        document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1064726673573667');
    fbq('track', "PageView");
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1064726673573667&ev=PageView&noscript=1" /></noscript>
    </script>
</head>

<body>
    <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
    <![endif]-->
    <div id="body_wrapper">
        <div id="loading" class="loading"><img src="resources/images/loading_spinner.svg" width="70" height="70" alt="Loading"></div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    
                        <c:choose>
							<c:when test="${isMultiCarrier eq 'true' }">				
								<a id="#myLifeCoveredHeader" href="javascript:openHomeLink()" class="open-home-page-copy">
									<img class="logo" src="resources/images/logo.svg">
									<span class="logo-phno">${phoneNumber}</span>
								</c:when>
							<c:otherwise>
			 					 <a id="#myLifeCoveredHeader" href="javascript:openHomeLink()" class="open-home-page-copy">
									<img class="logo" src="resources/images/olc-logo-everplans.jpg"/><!-- <sup>SM</sup> -->
									<%-- <span class="logo-phno">${phoneNumber}</span> --%>
								</a>
							</c:otherwise>
						</c:choose>
                        <ul id="top_nav_menu">
                       		<li class="menu-header mobile-only">Navigate</li>
                       		<li>
                       			<a href="javascript:openHomeLink()">Home</a>
                       		</li>
                            <li>
                                <a href="insurance101.do">Insurance 101</a>
                            </li>
                            <li>
                                <a href="getQuote-form.do">Get a Quote</a>
                            </li>
                            <li class="nav-call mobile-only"><b>Have questions?</b><br>Call us at ${phoneNumber}</li>
                        </ul>
                        <a href="#" id="open_menu">
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </a>
                        <a href="#" id="close_menu">
                            <i class="fa fa-times" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
                <div class="header-call-small">Questions? Call us at ${phoneNumber}</div>
            </div>
        </header>
