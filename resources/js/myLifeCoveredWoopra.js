
$(function() {
	//alert(domainName);
	init();
	function init() {	
		(function(){
		        var t,i,e,n=window,o=document,a=arguments,s="script",r=["config","track","identify","visit","push","call","trackForm","trackClick"],c=function(){var t,i=this;for(i._e=[],t=0;r.length>t;t++)(function(t){i[t]=function(){return i._e.push([t].concat(Array.prototype.slice.call(arguments,0))),i}})(r[t])};for(n._w=n._w||{},t=0;a.length>t;t++)n._w[a[t]]=n[a[t]]=n[a[t]]||new c;i=o.createElement(s),i.async=1,i.src="//static.woopra.com/js/w.js",e=o.getElementsByTagName(s)[0],e.parentNode.insertBefore(i,e)
		})("woopra");
		
		woopra.config({
			domain: domainName							    
		});
		
		//TRACK COMPLETE SITE
		woopra.track();			
	}
	
	function getWpValue(event) {
		if (event && event.toElement && event.toElement.attributes) {
			return event.toElement.attributes.wpvalue ? event.toElement.attributes.wpvalue.nodeValue : null;
		}
		
		return null;
	}
	
	function track(eventName, siteInfo) {
		if (typeof woopra !== 'undefined') {
			woopra.track(eventName, siteInfo);
		}
		else {
			init();
			woopra.track(eventName, siteInfo);
		}
	}
	
	// footer anchor tags are navigate_to_section events
	$('footer a').on("click", function(e){
		var name = getWpValue(e);
		
		if (name) {
			track("navigate_to_section", {
				url: location,
				title: document.title,
				section_name: name,
				medium: "footer_nav"
			});
		}
	});
	
	// sections with anchor tag mostly incorporates a navigate_to_section except for downloading pdf
	$('section a').on("click", function(e){
		var name = getWpValue(e);
		
		if (name) {
			if (name !== "download_pdf") {
				track("navigate_to_section", {
					url: location,
					title: document.title,
					section_name: name,
					medium: "area_nav"
				});				
			}
			else {
				track("form_submission", {
					url: location,
					title: document.title,
					section_name: name
				});				
			}
		}		
	});
	
	// sections with inputs are form_submission events
	$('section input').on("click", function(e) {
		var name = getWpValue(e);
		
		if (name) {
			track("form_submission", {
				url: location,
				title: document.title,
				section_name: name
			});
		}
	});
});