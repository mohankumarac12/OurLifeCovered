var hostName = window.location.pathname.split("/")[1];
/**The below code will work as disable a filed with class name just add the class 'disableWithSerialize' to make disable */
disableFields();
function disableFields() {
    var y = document.getElementsByClassName("disableWithSerialize");
    for (var i = 0; i < y.length; i++) {
        y[i].disabled=true;
    }
}
function enableFields() {
	 var y = document.getElementsByClassName("disableWithSerialize");
	    for (var i = 0; i < y.length; i++) {
	        y[i].disabled=false;
	    }
}
$("#basics .row .learn-basics p").hide();
$("#basics .row .learn-basics a").click(function(e){
    e.preventDefault();
    if( $(this).prev("p").css('display') == 'none' ){
        $(this).prev("p").slideDown();
        $(this).text("Read Less");
    }else{
        $(this).prev("p").slideUp();
        $(this).text("Read More");
    }
});

$("#misconceptions .icon-misconception p").hide();
$("#misconceptions .icon-misconception a").click(function(e){
    e.preventDefault();
    if( $(this).prev("p").css('display') == 'none' ){
        $(this).prev("p").slideDown();
        $(this).text("Read Less");
    }else{
        $(this).prev("p").slideUp();
        $(this).text("Read More");
    }
});

function setCookie(c_name, value) {
    var exdate = new Date();
    exdate.setMinutes(exdate.getMinutes() + 525600), document.cookie = c_name + "=" + escape(value) + ";expires=" + exdate.toUTCString();
}

function getCookie(c_name) {
    return document.cookie.length > 0 && (c_start = document.cookie.indexOf(c_name + "="), 
    -1 != c_start) ? (c_start = c_start + c_name.length + 1, c_end = document.cookie.indexOf(";", c_start), 
    -1 == c_end && (c_end = document.cookie.length), unescape(document.cookie.substring(c_start, c_end))) : "";
}

function saveCookies(cookieName, formObj) {
    for (var form = formObj, json = [], i = 0; i < form.length; i++) if (form.elements[i].name && (form.elements[i].checked || /select|textarea/i.test(form.elements[i].nodeName) || /text|password/i.test(form.elements[i].type))) {
        var entry = {};
        entry[form.elements[i].name] = form.elements[i].value, json.push(entry);
    }
    setCookie(cookieName, JSON.stringify(json));
}

function loadDependentFromCookie(index) {
    $child = [ '<div class="child" style="display:none;">', "                  <p><span>Child " + index + "<strong>: Level of College Funding</strong></span>", '                  <div class="select-wrapper"><select name="children[' + index + '].schoolType" id="children[' + index + '].schoolType" class="small">', '                          <option value="private">Private University</option>', '                          <option value="public">Public University</option>', "                  </select></div></p>", "              </div>" ].join("\n"), 
    $("#children").append($child), $("#children .child").show();
}

function loadCookies(cookieName, formObj) {
    var cookie = getCookie(cookieName);
    if (cookie.length > 10) for (var retval = JSON.parse(cookie), i = 0; i < retval.length; i++) {
        var obj = retval[i];
        for (var key in obj) if (key.indexOf("children") == 0) {
            var index = key.split("[")[1].split("]")[0];
            loadDependentFromCookie(index), formObj.elements[key].value = obj[key];
        } else {
        	if(sessionStorage.getItem('src') == "iknowwhatiwant") {
        		if(key != "annual-income" & key != "rec-coverage" & formObj.elements[key]!=undefined)
            		formObj.elements[key].value = obj[key];
        	} else if(sessionStorage.getItem('src') == "affordability") {
        		if(cookieName != "mainAffordableFormCookie") {
        			if(key != "coverage" & key != "annual-income" & key != "gender"  & key != "rec-coverage" & key != "first-name" & key != "email-address" & key != "smoker" & formObj.elements[key]!=undefined)
        				formObj.elements[key].value = obj[key];
        		}else{
        			if(key != "coverage" & key != "annual-income" & key != "gender"  & key != "rec-coverage" & formObj.elements[key]!=undefined)
            			formObj.elements[key].value = obj[key];
        		}
        	} else if(sessionStorage.getItem('src') == "calculateneed") {
        		if(key != "annual-income" & formObj.elements[key]!=undefined)
        			formObj.elements[key].value = obj[key];
        	} else {
        		formObj.elements[key].value = obj[key];
        	}
        } //else formObj.elements[key].value = obj[key];
    }
}

if (document.needsCalculatorForm != null) {
	loadCookies("needsCalculatorFormCookie", document.needsCalculatorForm);	
}
if (document.needsCalculatorDemographicsForm != null) {	
	loadCookies("needsCalculatorDemographicsFormCookie", document.needsCalculatorDemographicsForm);
}

if (document.mainAffordableForm != null) {	
	loadCookies("mainAffordableFormCookie", document.mainAffordableForm);
}


$("#needs-calculator-form").on("keyup change", function() {
    return saveCookies("needsCalculatorFormCookie", document.needsCalculatorForm);
}), $("#needs-calculator-demographics-form").on("keyup change", function() {
    return saveCookies("needsCalculatorDemographicsFormCookie", document.needsCalculatorDemographicsForm);
}), $("#main-affordable-form").on("keyup change", function() {
    return saveCookies("mainAffordableFormCookie", document.mainAffordableForm);
});

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        //return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    	return true;
    }
    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return true;
    }
    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
    	return true;
    }
    // other browser
    return false;
}

$(document).ready(function(){
	$('#report-pdf').click(function(event){
		event.preventDefault();
		//changeSection("#calculator-report");
		  $.ajax({
		        url: 'downloadPdf.do',
		        contentType: "application/pdf",
		        dataType: 'native',
		        xhrFields:{
		        	responseType: 'blob'
		        },
		        success: function(blob) {
		        	if(detectIE()){
		        		window.navigator.msSaveBlob(blob, 'InsuranceNeeds.pdf'); // The user only has the option of clicking the Save button.
		        	}else{
		        	var link=document.createElement('a');
		          	link.href=window.URL.createObjectURL(blob);
		            link.download="InsuranceNeeds"+".pdf";
		            link.click();
		        	}
		            //changeSection("#calculator-report");
		        }
		    });
		  return true;
	});
});
//Input mask - start
if (!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    function s(a) {
        var b = !!a && "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    function z(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (y.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return h.call(b, a) > -1 !== c;
        });
    }
    function F(a, b) {
        for (;(a = a[b]) && 1 !== a.nodeType; ) ;
        return a;
    }
    function H(a) {
        var b = {};
        return n.each(a.match(G) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function J() {
        d.removeEventListener("DOMContentLoaded", J), a.removeEventListener("load", J), 
        n.ready();
    }
    function M() {
        this.expando = n.expando + M.uid++;
    }
    function R(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Q, "-$&").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : P.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            O.set(a, b, c);
        } else c = void 0;
        return c;
    }
    function W(a, b, c, d) {
        var e, f = 1, g = 20, h = d ? function() {
            return d.cur();
        } : function() {
            return n.css(a, b, "");
        }, i = h(), j = c && c[3] || (n.cssNumber[b] ? "" : "px"), k = (n.cssNumber[b] || "px" !== j && +i) && T.exec(n.css(a, b));
        if (k && k[3] !== j) {
            j = j || k[3], c = c || [], k = +i || 1;
            do f = f || ".5", k /= f, n.style(a, b, k + j); while (f !== (f = h() / i) && 1 !== f && --g);
        }
        return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, 
        d.start = k, d.end = e)), e;
    }
    function _(a, b) {
        var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function aa(a, b) {
        for (var c = 0, d = a.length; d > c; c++) N.set(a[c], "globalEval", !b || N.get(b[c], "globalEval"));
    }
    function ca(a, b, c, d, e) {
        for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], o = 0, p = a.length; p > o; o++) if (f = a[o], 
        f || 0 === f) if ("object" === n.type(f)) n.merge(m, f.nodeType ? [ f ] : f); else if (ba.test(f)) {
            for (g = g || l.appendChild(b.createElement("div")), h = (Y.exec(f) || [ "", "" ])[1].toLowerCase(), 
            i = $[h] || $._default, g.innerHTML = i[1] + n.htmlPrefilter(f) + i[2], k = i[0]; k--; ) g = g.lastChild;
            n.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
        } else m.push(b.createTextNode(f));
        for (l.textContent = "", o = 0; f = m[o++]; ) if (d && n.inArray(f, d) > -1) e && e.push(f); else if (j = n.contains(f.ownerDocument, f), 
        g = _(l.appendChild(f), "script"), j && aa(g), c) for (k = 0; f = g[k++]; ) Z.test(f.type || "") && c.push(f);
        return l;
    }
    function ga() {
        return !0;
    }
    function ha() {
        return !1;
    }
    function ia() {
        try {
            return d.activeElement;
        } catch (a) {}
    }
    function ja(a, b, c, d, e, f) {
        var g, h;
        if ("object" == typeof b) {
            "string" != typeof c && (d = d || c, c = void 0);
            for (h in b) ja(a, h, c, d, b[h], f);
            return a;
        }
        if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, 
        d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ha; else if (!e) return a;
        return 1 === f && (g = e, e = function(a) {
            return n().off(a), g.apply(this, arguments);
        }, e.guid = g.guid || (g.guid = n.guid++)), a.each(function() {
            n.event.add(this, b, e, d, c);
        });
    }
    function pa(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function qa(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function ra(a) {
        var b = na.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function sa(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (N.hasData(a) && (f = N.access(a), g = N.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            O.hasData(a) && (h = O.access(a), i = n.extend({}, h), O.set(b, i));
        }
    }
    function ta(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && X.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
    }
    function ua(a, b, c, d) {
        b = f.apply([], b);
        var e, g, h, i, j, k, m = 0, o = a.length, p = o - 1, q = b[0], r = n.isFunction(q);
        if (r || o > 1 && "string" == typeof q && !l.checkClone && ma.test(q)) return a.each(function(e) {
            var f = a.eq(e);
            r && (b[0] = q.call(this, e, f.html())), ua(f, b, c, d);
        });
        if (o && (e = ca(b, a[0].ownerDocument, !1, a, d), g = e.firstChild, 1 === e.childNodes.length && (e = g), 
        g || d)) {
            for (h = n.map(_(e, "script"), qa), i = h.length; o > m; m++) j = e, m !== p && (j = n.clone(j, !0, !0), 
            i && n.merge(h, _(j, "script"))), c.call(a[m], j, m);
            if (i) for (k = h[h.length - 1].ownerDocument, n.map(h, ra), m = 0; i > m; m++) j = h[m], 
            Z.test(j.type || "") && !N.access(j, "globalEval") && n.contains(k, j) && (j.src ? n._evalUrl && n._evalUrl(j.src) : n.globalEval(j.textContent.replace(oa, "")));
        }
        return a;
    }
    function va(a, b, c) {
        for (var d, e = b ? n.filter(b, a) : a, f = 0; null != (d = e[f]); f++) c || 1 !== d.nodeType || n.cleanData(_(d)), 
        d.parentNode && (c && n.contains(d.ownerDocument, d) && aa(_(d, "script")), d.parentNode.removeChild(d));
        return a;
    }
    function ya(a, b) {
        var c = n(b.createElement(a)).appendTo(b.body), d = n.css(c[0], "display");
        return c.detach(), d;
    }
    function za(a) {
        var b = d, c = xa[a];
        return c || (c = ya(a, b), "none" !== c && c || (wa = (wa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = wa[0].contentDocument, b.write(), b.close(), c = ya(a, b), wa.detach()), xa[a] = c), 
        c;
    }
    function Fa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || Ca(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, "" !== g && void 0 !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        c && !l.pixelMarginRight() && Ba.test(g) && Aa.test(b) && (d = h.width, e = h.minWidth, 
        f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, 
        h.minWidth = e, h.maxWidth = f), void 0 !== g ? g + "" : g;
    }
    function Ga(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    function Ma(a) {
        if (a in La) return a;
        for (var b = a[0].toUpperCase() + a.slice(1), c = Ka.length; c--; ) if (a = Ka[c] + b, 
        a in La) return a;
    }
    function Na(a, b, c) {
        var d = T.exec(b);
        return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
    }
    function Oa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + U[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + U[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + U[f] + "Width", !0, e))) : (g += n.css(a, "padding" + U[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + U[f] + "Width", !0, e)));
        return g;
    }
    function Pa(b, c, e) {
        var f = !0, g = "width" === c ? b.offsetWidth : b.offsetHeight, h = Ca(b), i = "border-box" === n.css(b, "boxSizing", !1, h);
        if (d.msFullscreenElement && a.top !== a && b.getClientRects().length && (g = Math.round(100 * b.getBoundingClientRect()[c])), 
        0 >= g || null == g) {
            if (g = Fa(b, c, h), (0 > g || null == g) && (g = b.style[c]), Ba.test(g)) return g;
            f = i && (l.boxSizingReliable() || g === b.style[c]), g = parseFloat(g) || 0;
        }
        return g + Oa(b, c, e || (i ? "border" : "content"), f, h) + "px";
    }
    function Qa(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = N.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && V(d) && (f[g] = N.access(d, "olddisplay", za(d.nodeName)))) : (e = V(d), 
        "none" === c && e || N.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function Ra(a, b, c, d, e) {
        return new Ra.prototype.init(a, b, c, d, e);
    }
    function Wa() {
        return a.setTimeout(function() {
            Sa = void 0;
        }), Sa = n.now();
    }
    function Xa(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = U[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ya(a, b, c) {
        for (var d, e = (_a.tweeners[b] || []).concat(_a.tweeners["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Za(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && V(a), q = N.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? N.get(a, "olddisplay") || za(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Ua.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? za(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = N.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                N.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ya(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function $a(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function _a(a, b, c) {
        var d, e, f = 0, g = _a.prefilters.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = Sa || Wa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {},
                easing: n.easing._default
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Sa || Wa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? (h.notifyWith(a, [ j, 1, 0 ]), h.resolveWith(a, [ j, b ])) : h.rejectWith(a, [ j, b ]), 
                this;
            }
        }), k = j.props;
        for ($a(k, j.opts.specialEasing); g > f; f++) if (d = _a.prefilters[f].call(j, a, k, j.opts)) return n.isFunction(d.stop) && (n._queueHooks(j.elem, j.opts.queue).stop = n.proxy(d.stop, d)), 
        d;
        return n.map(k, Ya, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function fb(a) {
        return a.getAttribute && a.getAttribute("class") || "";
    }
    function wb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(G) || [];
            if (n.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function xb(a, b, c, d) {
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        var e = {}, f = a === tb;
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function yb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function zb(a, b, c) {
        for (var d, e, f, g, h = a.contents, i = a.dataTypes; "*" === i[0]; ) i.shift(), 
        void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function Ab(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function Gb(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || Cb.test(a) ? d(a, e) : Gb(a + "[" + ("object" == typeof e && null != e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Gb(a + "[" + e + "]", b[e], c, d);
    }
    function Mb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    var c = [], d = a.document, e = c.slice, f = c.concat, g = c.push, h = c.indexOf, i = {}, j = i.toString, k = i.hasOwnProperty, l = {}, m = "2.2.3", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return e.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : e.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a) {
            return n.each(this, a);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(e.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: g,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            var b = a && a.toString();
            return !n.isArray(a) && b - parseFloat(b) + 1 >= 0;
        },
        isPlainObject: function(a) {
            var b;
            if ("object" !== n.type(a) || a.nodeType || n.isWindow(a)) return !1;
            if (a.constructor && !k.call(a, "constructor") && !k.call(a.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (b in a) ;
            return void 0 === b || k.call(a, b);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? i[j.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = d.createElement("script"), 
            b.text = a, d.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b) {
            var c, d = 0;
            if (s(a)) for (c = a.length; c > d && b.call(a[d], d, a[d]) !== !1; d++) ; else for (d in a) if (b.call(a[d], d, a[d]) === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : g.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : h.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, e, g = 0, h = [];
            if (s(a)) for (d = a.length; d > g; g++) e = b(a[g], g, c), null != e && h.push(e); else for (g in a) e = b(a[g], g, c), 
            null != e && h.push(e);
            return f.apply([], h);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, d, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (d = e.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, d.concat(e.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: l
    }), "function" == typeof Symbol && (n.fn[Symbol.iterator] = c[Symbol.iterator]), 
    n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(a, b) {
        i["[object " + b + "]"] = b.toLowerCase();
    });
    var t = function(a) {
        function fa(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w = b && b.ownerDocument, x = b ? b.nodeType : 9;
            if (d = d || [], "string" != typeof a || !a || 1 !== x && 9 !== x && 11 !== x) return d;
            if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
                if (11 !== x && (o = $.exec(a))) if (f = o[1]) {
                    if (9 === x) {
                        if (!(j = b.getElementById(f))) return d;
                        if (j.id === f) return d.push(j), d;
                    } else if (w && (j = w.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), 
                    d;
                } else {
                    if (o[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((f = o[3]) && c.getElementsByClassName && b.getElementsByClassName) return H.apply(d, b.getElementsByClassName(f)), 
                    d;
                }
                if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
                    if (1 !== x) w = b, s = a; else if ("object" !== b.nodeName.toLowerCase()) {
                        for ((k = b.getAttribute("id")) ? k = k.replace(aa, "\\$&") : b.setAttribute("id", k = u), 
                        r = g(a), h = r.length, l = V.test(k) ? "#" + k : "[id='" + k + "']"; h--; ) r[h] = l + " " + qa(r[h]);
                        s = r.join(","), w = _.test(a) && oa(b.parentNode) || b;
                    }
                    if (s) try {
                        return H.apply(d, w.querySelectorAll(s)), d;
                    } catch (y) {} finally {
                        k === u && b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(Q, "$1"), b, d, e);
        }
        function ga() {
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            var a = [];
            return b;
        }
        function ha(a) {
            return a[u] = !0, a;
        }
        function ia(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ja(a, b) {
            for (var c = a.split("|"), e = c.length; e--; ) d.attrHandle[c[e]] = b;
        }
        function ka(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function la(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function na(a) {
            return ha(function(b) {
                return b = +b, ha(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function oa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        function pa() {}
        function qa(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function ra(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = [ w, f ];
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) {
                    if (j = b[u] || (b[u] = {}), i = j[b.uniqueID] || (j[b.uniqueID] = {}), (h = i[d]) && h[0] === w && h[1] === f) return k[2] = h[2];
                    if (i[d] = k, k[2] = a(b, c, g)) return !0;
                }
            };
        }
        function sa(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ta(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) fa(a, b[d], c);
            return c;
        }
        function ua(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (c && !c(f, d, e) || (g.push(f), 
            j && b.push(h)));
            return g;
        }
        function va(a, b, c, d, e, f) {
            return d && !d[u] && (d = va(d)), e && !e[u] && (e = va(e, f)), ha(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ta(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : ua(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) for (j = ua(r, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                if (f) {
                    if (e || a) {
                        if (e) {
                            for (j = [], k = r.length; k--; ) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        for (k = r.length; k--; ) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = ua(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function wa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ra(function(a) {
                return a === b;
            }, h, !0), l = ra(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ ra(sa(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e && !d.relative[a[e].type]; e++) ;
                    return va(i > 1 && sa(m), i > 1 && qa(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(Q, "$1"), c, e > i && wa(a.slice(i, e)), f > e && wa(a = a.slice(e)), f > e && qa(a));
                }
                m.push(c);
            }
            return sa(m);
        }
        function xa(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, o, q, r = 0, s = "0", t = f && [], u = [], v = j, x = f || e && d.find.TAG("*", k), y = w += null == v ? 1 : Math.random() || .1, z = x.length;
                for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
                    if (e && l) {
                        for (o = 0, g || l.ownerDocument === n || (m(l), h = !p); q = a[o++]; ) if (q(l, g || n, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = y);
                    }
                    c && ((l = !q && l) && r--, f && t.push(l));
                }
                if (r += s, c && s !== r) {
                    for (o = 0; q = b[o++]; ) q(t, u, g, h);
                    if (f) {
                        if (r > 0) for (;s--; ) t[s] || u[s] || (u[s] = F.call(i));
                        u = ua(u);
                    }
                    H.apply(i, u), k && !f && u.length > 0 && r + b.length > 1 && fa.uniqueSort(i);
                }
                return k && (w = y, j = v), t;
            };
            return c ? ha(f) : f;
        }
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ga(), z = ga(), A = ga(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + L + "*\\]", O = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + N + ")*)|.*)\\)|)", P = new RegExp(L + "+", "g"), Q = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), R = new RegExp("^" + L + "*," + L + "*"), S = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), T = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), U = new RegExp(O), V = new RegExp("^" + M + "$"), W = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + N),
            PSEUDO: new RegExp("^" + O),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, X = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, $ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _ = /[+~]/, aa = /'|\\/g, ba = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), ca = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, da = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (ea) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        c = fa.support = {}, f = fa.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = fa.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, 
            p = !f(n), (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), 
            c.attributes = ia(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ia(function(a) {
                return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = Z.test(n.getElementsByClassName), c.getById = ia(function(a) {
                return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ba, ca);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = Z.test(n.querySelectorAll)) && (ia(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ia(function(a) {
                var b = n.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = Z.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ia(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", O);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = Z.test(o.compareDocumentPosition), t = b || Z.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, g = [ a ], h = [ b ];
                if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return ka(a, b);
                for (c = a; c = c.parentNode; ) g.unshift(c);
                for (c = b; c = c.parentNode; ) h.unshift(c);
                for (;g[d] === h[d]; ) d++;
                return d ? ka(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
            }, n) : n;
        }, fa.matches = function(a, b) {
            return fa(a, null, null, b);
        }, fa.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(T, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return fa(b, n, null, [ a ]).length > 0;
        }, fa.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, fa.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, fa.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, fa.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                for (;b = a[f++]; ) b === a[f] && (e = d.push(f));
                for (;e--; ) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = fa.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else for (;b = a[d++]; ) c += e(b);
            return c;
        }, d = fa.selectors = {
            cacheLength: 50,
            createPseudo: ha,
            match: W,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ba, ca), a[3] = (a[3] || a[4] || a[5] || "").replace(ba, ca), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fa.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fa.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return W.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && U.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ba, ca).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = fa.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(P, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h, t = !1;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (m = b; m = m[p]; ) if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                                j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n]; m = ++n && m && m[p] || (t = n = 0) || o.pop(); ) if (1 === m.nodeType && ++t && m === b) {
                                    k[a] = [ w, n, t ];
                                    break;
                                }
                            } else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), 
                            j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) for (;(m = ++n && m && m[p] || (t = n = 0) || o.pop()) && ((h ? m.nodeName.toLowerCase() !== r : 1 !== m.nodeType) || !++t || (s && (l = m[u] || (m[u] = {}), 
                            k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [ w, t ]), m !== b)); ) ;
                            return t -= e, t === d || t % d === 0 && t / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fa.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ha(function(a, c) {
                        for (var d, f = e(a, b), g = f.length; g--; ) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ha(function(a) {
                    var b = [], c = [], d = h(a.replace(Q, "$1"));
                    return d[u] ? ha(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ha(function(a) {
                    return function(b) {
                        return fa(a, b).length > 0;
                    };
                }),
                contains: ha(function(a) {
                    return a = a.replace(ba, ca), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ha(function(a) {
                    return V.test(a || "") || fa.error("unsupported lang: " + a), a = a.replace(ba, ca).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Y.test(a.nodeName);
                },
                input: function(a) {
                    return X.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: na(function() {
                    return [ 0 ];
                }),
                last: na(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: na(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: na(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: na(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: na(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = la(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = ma(b);
        return pa.prototype = d.filters = d.pseudos, d.setFilters = new pa(), g = fa.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = d.preFilter; h; ) {
                c && !(e = R.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = S.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(Q, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = W[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? fa.error(a) : z(a, i).slice(0);
        }, h = fa.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                for (b || (b = g(a)), c = b.length; c--; ) f = wa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xa(e, d)), f.selector = a;
            }
            return f;
        }, i = fa.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ba, ca), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                for (i = W.needsContext.test(a) ? 0 : j.length; i-- && (k = j[i], !d.relative[l = k.type]); ) if ((m = d.find[l]) && (f = m(k.matches[0].replace(ba, ca), _.test(j[0].type) && oa(b.parentNode) || b))) {
                    if (j.splice(i, 1), a = f.length && qa(j), !a) return H.apply(e, f), e;
                    break;
                }
            }
            return (n || h(a, o))(f, b, !p, e, !b || _.test(a) && oa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ia(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ia(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ja("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ia(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ja("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ia(function(a) {
            return null == a.getAttribute("disabled");
        }) || ja(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), fa;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.uniqueSort = n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = function(a, b, c) {
        for (var d = [], e = void 0 !== c; (a = a[b]) && 9 !== a.nodeType; ) if (1 === a.nodeType) {
            if (e && n(a).is(c)) break;
            d.push(a);
        }
        return d;
    }, v = function(a, b) {
        for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
        return c;
    }, w = n.expr.match.needsContext, x = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, y = /^.[^:#\[\.,]*$/;
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(z(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(z(this, a || [], !0));
        },
        is: function(a) {
            return !!z(this, "string" == typeof a && w.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var A, B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, C = n.fn.init = function(a, b, c) {
        var e, f;
        if (!a) return this;
        if (c = c || A, "string" == typeof a) {
            if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : B.exec(a), 
            !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);
            if (e[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), 
                x.test(e[1]) && n.isPlainObject(b)) for (e in b) n.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
                return this;
            }
            return f = d.getElementById(e[2]), f && f.parentNode && (this.length = 1, this[0] = f), 
            this.context = d, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    C.prototype = n.fn, A = n(d);
    var D = /^(?:parents|prev(?:Until|All))/, E = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = w.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.uniqueSort(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? h.call(n(a), this[0]) : h.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.uniqueSort(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return u(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return u(a, "parentNode", c);
        },
        next: function(a) {
            return F(a, "nextSibling");
        },
        prev: function(a) {
            return F(a, "previousSibling");
        },
        nextAll: function(a) {
            return u(a, "nextSibling");
        },
        prevAll: function(a) {
            return u(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return u(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return u(a, "previousSibling", c);
        },
        siblings: function(a) {
            return v((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return v(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (E[a] || n.uniqueSort(e), D.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var G = /\S+/g;
    n.Callbacks = function(a) {
        a = "string" == typeof a ? H(a) : n.extend({}, a);
        var b, c, d, e, f = [], g = [], h = -1, i = function() {
            for (e = a.once, d = b = !0; g.length; h = -1) for (c = g.shift(); ++h < f.length; ) f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, 
            c = !1);
            a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
        }, j = {
            add: function() {
                return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
                    n.each(b, function(b, c) {
                        n.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== n.type(c) && d(c);
                    });
                }(arguments), c && !b && i()), this;
            },
            remove: function() {
                return n.each(arguments, function(a, b) {
                    for (var c; (c = n.inArray(b, f, c)) > -1; ) f.splice(c, 1), h >= c && h--;
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, f) > -1 : f.length > 0;
            },
            empty: function() {
                return f && (f = []), this;
            },
            disable: function() {
                return e = g = [], f = c = "", this;
            },
            disabled: function() {
                return !f;
            },
            lock: function() {
                return e = g = [], c || (f = c = ""), this;
            },
            locked: function() {
                return !!e;
            },
            fireWith: function(a, c) {
                return e || (c = c || [], c = [ a, c.slice ? c.slice() : c ], g.push(c), b || i()), 
                this;
            },
            fire: function() {
                return j.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!d;
            }
        };
        return j;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().progress(c.notify).done(c.resolve).fail(c.reject) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var i, j, k, b = 0, c = e.call(arguments), d = c.length, f = 1 !== d || a && n.isFunction(a.promise) ? d : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(d) {
                    b[a] = this, c[a] = arguments.length > 1 ? e.call(arguments) : d, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            };
            if (d > 1) for (i = new Array(d), j = new Array(d), k = new Array(d); d > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().progress(h(b, j, i)).done(h(b, k, c)).fail(g.reject) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var I;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (I.resolveWith(d, [ n ]), 
            n.fn.triggerHandler && (n(d).triggerHandler("ready"), n(d).off("ready"))));
        }
    }), n.ready.promise = function(b) {
        return I || (I = n.Deferred(), "complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(n.ready) : (d.addEventListener("DOMContentLoaded", J), 
        a.addEventListener("load", J))), I.promise(b);
    }, n.ready.promise();
    var K = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) K(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    }, L = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    M.uid = 1, M.prototype = {
        register: function(a, b) {
            var c = b || {};
            return a.nodeType ? a[this.expando] = c : Object.defineProperty(a, this.expando, {
                value: c,
                writable: !0,
                configurable: !0
            }), a[this.expando];
        },
        cache: function(a) {
            if (!L(a)) return {};
            var b = a[this.expando];
            return b || (b = {}, L(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, {
                value: b,
                configurable: !0
            }))), b;
        },
        set: function(a, b, c) {
            var d, e = this.cache(a);
            if ("string" == typeof b) e[b] = c; else for (d in b) e[d] = b[d];
            return e;
        },
        get: function(a, b) {
            return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = a[this.expando];
            if (void 0 !== f) {
                if (void 0 === b) this.register(a); else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in f ? d = [ b, e ] : (d = e, 
                    d = d in f ? [ d ] : d.match(G) || [])), c = d.length;
                    for (;c--; ) delete f[d[c]];
                }
                (void 0 === b || n.isEmptyObject(f)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
            }
        },
        hasData: function(a) {
            var b = a[this.expando];
            return void 0 !== b && !n.isEmptyObject(b);
        }
    };
    var N = new M(), O = new M(), P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Q = /[A-Z]/g;
    n.extend({
        hasData: function(a) {
            return O.hasData(a) || N.hasData(a);
        },
        data: function(a, b, c) {
            return O.access(a, b, c);
        },
        removeData: function(a, b) {
            O.remove(a, b);
        },
        _data: function(a, b, c) {
            return N.access(a, b, c);
        },
        _removeData: function(a, b) {
            N.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = O.get(f), 1 === f.nodeType && !N.get(f, "hasDataAttrs"))) {
                    for (c = g.length; c--; ) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    R(f, d, e[d])));
                    N.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                O.set(this, a);
            }) : K(this, function(b) {
                var c, d;
                if (f && void 0 === b) {
                    if (c = O.get(f, a) || O.get(f, a.replace(Q, "-$&").toLowerCase()), void 0 !== c) return c;
                    if (d = n.camelCase(a), c = O.get(f, d), void 0 !== c) return c;
                    if (c = R(f, d, void 0), void 0 !== c) return c;
                } else d = n.camelCase(a), this.each(function() {
                    var c = O.get(this, d);
                    O.set(this, d, b), a.indexOf("-") > -1 && void 0 !== c && O.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                O.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = N.get(a, b), c && (!d || n.isArray(c) ? d = N.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return N.get(a, c) || N.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    N.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--; ) c = N.get(f[g], a + "queueHooks"), 
            c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), U = [ "Top", "Right", "Bottom", "Left" ], V = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, X = /^(?:checkbox|radio)$/i, Y = /<([\w:-]+)/, Z = /^$|\/(?:java|ecma)script/i, $ = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    $.optgroup = $.option, $.tbody = $.tfoot = $.colgroup = $.caption = $.thead, $.th = $.td;
    var ba = /<|&#?\w+;/;
    !function() {
        var a = d.createDocumentFragment(), b = a.appendChild(d.createElement("div")), c = d.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var da = /^key/, ea = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, fa = /^([^.]*)(?:\.(.+)|)/;
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.get(a);
            if (r) for (c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
            (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                return "undefined" != typeof n && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
            }), b = (b || "").match(G) || [ "" ], j = b.length; j--; ) h = fa.exec(b[j]) || [], 
            o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, 
            o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                type: o,
                origType: q,
                data: d,
                handler: c,
                guid: c.guid,
                selector: e,
                needsContext: e && n.expr.match.needsContext.test(e),
                namespace: p.join(".")
            }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g)), 
            l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
            n.event.global[o] = !0);
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = N.hasData(a) && N.get(a);
            if (r && (i = r.events)) {
                for (b = (b || "").match(G) || [ "" ], j = b.length; j--; ) if (h = fa.exec(b[j]) || [], 
                o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    for (l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length; f--; ) k = m[f], 
                    !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && N.remove(a, "handle events");
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, d, f, g, h = [], i = e.call(arguments), j = (N.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = n.event.handlers.call(this, a, j), b = 0; (f = h[b++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                c = 0; (g = f.handlers[c++]) && !a.isImmediatePropagationStopped(); ) a.rnamespace && !a.rnamespace.test(g.namespace) || (a.handleObj = g, 
                a.data = g.data, d = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                void 0 !== d && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (;i !== this; i = i.parentNode || this) if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) > -1 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, e, f, g = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || d, 
                e = c.documentElement, f = c.body, a.pageX = b.clientX + (e && e.scrollLeft || f && f.scrollLeft || 0) - (e && e.clientLeft || f && f.clientLeft || 0), 
                a.pageY = b.clientY + (e && e.scrollTop || f && f.scrollTop || 0) - (e && e.clientTop || f && f.clientTop || 0)), 
                a.which || void 0 === g || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, e, f = a.type, g = a, h = this.fixHooks[f];
            for (h || (this.fixHooks[f] = h = ea.test(f) ? this.mouseHooks : da.test(f) ? this.keyHooks : {}), 
            e = h.props ? this.props.concat(h.props) : this.props, a = new n.Event(g), b = e.length; b--; ) c = e[b], 
            a[c] = g[c];
            return a.target || (a.target = d), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            h.filter ? h.filter(a, g) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== ia() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === ia() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ga : ha) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        constructor: n.Event,
        isDefaultPrevented: ha,
        isPropagationStopped: ha,
        isImmediatePropagationStopped: ha,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ga, a && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ga, a && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ga, a && a.stopImmediatePropagation(), this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return e && (e === d || n.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d) {
            return ja(this, a, b, c, d);
        },
        one: function(a, b, c, d) {
            return ja(this, a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ha), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        }
    });
    var ka = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, la = /<script|<style|<link/i, ma = /checked\s*(?:[^=]|=\s*.checked.)/i, na = /^true\/(.*)/, oa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    n.extend({
        htmlPrefilter: function(a) {
            return a.replace(ka, "<$1></$2>");
        },
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = _(h), 
            f = _(a), d = 0, e = f.length; e > d; d++) ta(f[d], g[d]);
            if (b) if (c) for (f = f || _(a), g = g || _(h), d = 0, e = f.length; e > d; d++) sa(f[d], g[d]); else sa(a, h);
            return g = _(h, "script"), g.length > 0 && aa(g, !i && _(a, "script")), h;
        },
        cleanData: function(a) {
            for (var b, c, d, e = n.event.special, f = 0; void 0 !== (c = a[f]); f++) if (L(c)) {
                if (b = c[N.expando]) {
                    if (b.events) for (d in b.events) e[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    c[N.expando] = void 0;
                }
                c[O.expando] && (c[O.expando] = void 0);
            }
        }
    }), n.fn.extend({
        domManip: ua,
        detach: function(a) {
            return va(this, a, !0);
        },
        remove: function(a) {
            return va(this, a);
        },
        text: function(a) {
            return K(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return ua(this, arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = pa(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return ua(this, arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(_(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return K(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !la.test(a) && !$[(Y.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = n.htmlPrefilter(a);
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(_(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = [];
            return ua(this, arguments, function(b) {
                var c = this.parentNode;
                n.inArray(this, a) < 0 && (n.cleanData(_(this)), c && c.replaceChild(b, this));
            }, a);
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), f = e.length - 1, h = 0; f >= h; h++) c = h === f ? this : this.clone(!0), 
            n(e[h])[b](c), g.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var wa, xa = {
        HTML: "block",
        BODY: "block"
    }, Aa = /^margin/, Ba = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ca = function(b) {
        var c = b.ownerDocument.defaultView;
        return c && c.opener || (c = a), c.getComputedStyle(b);
    }, Da = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    }, Ea = d.documentElement;
    !function() {
        function i() {
            h.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
            h.innerHTML = "", Ea.appendChild(g);
            var d = a.getComputedStyle(h);
            b = "1%" !== d.top, f = "2px" === d.marginLeft, c = "4px" === d.width, h.style.marginRight = "50%", 
            e = "4px" === d.marginRight, Ea.removeChild(g);
        }
        var b, c, e, f, g = d.createElement("div"), h = d.createElement("div");
        h.style && (h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", 
        l.clearCloneStyle = "content-box" === h.style.backgroundClip, g.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        g.appendChild(h), n.extend(l, {
            pixelPosition: function() {
                return i(), b;
            },
            boxSizingReliable: function() {
                return null == c && i(), c;
            },
            pixelMarginRight: function() {
                return null == c && i(), e;
            },
            reliableMarginLeft: function() {
                return null == c && i(), f;
            },
            reliableMarginRight: function() {
                var b, c = h.appendChild(d.createElement("div"));
                return c.style.cssText = h.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                c.style.marginRight = c.style.width = "0", h.style.width = "1px", Ea.appendChild(g), 
                b = !parseFloat(a.getComputedStyle(c).marginRight), Ea.removeChild(g), h.removeChild(c), 
                b;
            }
        }));
    }();
    var Ha = /^(none|table(?!-c[ea]).+)/, Ia = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ja = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ka = [ "Webkit", "O", "Moz", "ms" ], La = d.createElement("div").style;
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = Fa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = T.exec(c)) && e[1] && (c = W(a, b, e), f = "number"), void (null != c && c === c && ("number" === f && (c += e && e[3] || (n.cssNumber[h] ? "" : "px")), 
                l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c))));
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Ma(h) || h), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Fa(a, b, d)), "normal" === e && b in Ja && (e = Ja[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? Ha.test(n.css(a, "display")) && 0 === a.offsetWidth ? Da(a, Ia, function() {
                    return Pa(a, b, d);
                }) : Pa(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e, f = d && Ca(a), g = d && Oa(a, b, d, "border-box" === n.css(a, "boxSizing", !1, f), f);
                return g && (e = T.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = n.css(a, b)), 
                Na(a, c, g);
            }
        };
    }), n.cssHooks.marginLeft = Ga(l.reliableMarginLeft, function(a, b) {
        return b ? (parseFloat(Fa(a, "marginLeft")) || a.getBoundingClientRect().left - Da(a, {
            marginLeft: 0
        }, function() {
            return a.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), n.cssHooks.marginRight = Ga(l.reliableMarginRight, function(a, b) {
        return b ? Da(a, {
            display: "inline-block"
        }, Fa, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + U[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, Aa.test(a) || (n.cssHooks[a + b].set = Na);
    }), n.fn.extend({
        css: function(a, b) {
            return K(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = Ca(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Qa(this, !0);
        },
        hide: function() {
            return Qa(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                V(this) ? n(this).show() : n(this).hide();
            });
        }
    }), n.Tween = Ra, Ra.prototype = {
        constructor: Ra,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || n.easing._default, this.options = b, 
            this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Ra.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ra.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Ra.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Ra.propHooks._default.set(this), this;
        }
    }, Ra.prototype.init.prototype = Ra.prototype, Ra.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0);
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[n.cssProps[a.prop]] && !n.cssHooks[a.prop] ? a.elem[a.prop] = a.now : n.style(a.elem, a.prop, a.now + a.unit);
            }
        }
    }, Ra.propHooks.scrollTop = Ra.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        },
        _default: "swing"
    }, n.fx = Ra.prototype.init, n.fx.step = {};
    var Sa, Ta, Ua = /^(?:toggle|show|hide)$/, Va = /queueHooks$/;
    n.Animation = n.extend(_a, {
        tweeners: {
            "*": [ function(a, b) {
                var c = this.createTween(a, b);
                return W(c.elem, a, T.exec(b), c), c;
            } ]
        },
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.match(G);
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], _a.tweeners[c] = _a.tweeners[c] || [], 
            _a.tweeners[c].unshift(b);
        },
        prefilters: [ Za ],
        prefilter: function(a, b) {
            b ? _a.prefilters.unshift(a) : _a.prefilters.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        null != d.queue && d.queue !== !0 || (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = _a(this, n.extend({}, a), f);
                (e || N.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = N.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Va.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                !b && c || n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = N.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Xa(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Xa("show"),
        slideUp: Xa("hide"),
        slideToggle: Xa("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (Sa = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Sa = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Ta || (Ta = a.setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        a.clearInterval(Ta), Ta = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(b, c) {
        return b = n.fx ? n.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function(c, d) {
            var e = a.setTimeout(c, b);
            d.stop = function() {
                a.clearTimeout(e);
            };
        });
    }, function() {
        var a = d.createElement("input"), b = d.createElement("select"), c = b.appendChild(d.createElement("option"));
        a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, 
        l.optDisabled = !c.disabled, a = d.createElement("input"), a.value = "t", a.type = "radio", 
        l.radioValue = "t" === a.value;
    }();
    var ab, bb = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return K(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? "undefined" == typeof a.getAttribute ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            e = n.attrHooks[b] || (n.expr.match.bool.test(b) ? ab : void 0)), void 0 !== c ? null === c ? void n.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), 
            c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = n.find.attr(a, b), 
            null == d ? void 0 : d)) : void 0;
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(G);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        }
    }), ab = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = bb[b] || n.find.attr;
        bb[b] = function(a, b, d) {
            var e, f;
            return d || (f = bb[b], bb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            bb[b] = f), e;
        };
    });
    var cb = /^(?:input|select|textarea|button)$/i, db = /^(?:a|area)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return K(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        prop: function(a, b, c) {
            var d, e, f = a.nodeType;
            return 3 !== f && 8 !== f && 2 !== f ? (1 === f && n.isXMLDoc(a) || (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = n.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : cb.test(a.nodeName) || db.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), l.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        },
        set: function(a) {
            var b = a.parentNode;
            b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var eb = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, fb(this)));
            });
            if ("string" == typeof a && a) for (b = a.match(G) || []; c = this[i++]; ) if (e = fb(c), 
            d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                for (g = 0; f = b[g++]; ) d.indexOf(" " + f + " ") < 0 && (d += f + " ");
                h = n.trim(d), e !== h && c.setAttribute("class", h);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h, i = 0;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, fb(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof a && a) for (b = a.match(G) || []; c = this[i++]; ) if (e = fb(c), 
            d = 1 === c.nodeType && (" " + e + " ").replace(eb, " ")) {
                for (g = 0; f = b[g++]; ) for (;d.indexOf(" " + f + " ") > -1; ) d = d.replace(" " + f + " ", " ");
                h = n.trim(d), e !== h && c.setAttribute("class", h);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : n.isFunction(a) ? this.each(function(c) {
                n(this).toggleClass(a.call(this, c, fb(this), b), b);
            }) : this.each(function() {
                var b, d, e, f;
                if ("string" === c) for (d = 0, e = n(this), f = a.match(G) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else void 0 !== a && "boolean" !== c || (b = fb(this), 
                b && N.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : N.get(this, "__className__") || ""));
            });
        },
        hasClass: function(a) {
            var b, c, d = 0;
            for (b = " " + a + " "; c = this[d++]; ) if (1 === c.nodeType && (" " + fb(c) + " ").replace(eb, " ").indexOf(b) > -1) return !0;
            return !1;
        }
    });
    var gb = /\r/g, hb = /[\x20\t\r\n\f]+/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            return arguments.length ? (d = n.isFunction(a), this.each(function(c) {
                var e;
                1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                    return null == a ? "" : a + "";
                })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
            })) : e ? (b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
            "string" == typeof c ? c.replace(gb, "") : null == c ? "" : c)) : void 0;
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a)).replace(hb, " ");
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    (c.selected || i === e) && (l.optDisabled ? !c.disabled : null === c.getAttribute("disabled")) && (!c.parentNode.disabled || !n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = n.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = n.inArray(n.valHooks.option.get(d), f) > -1) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) > -1 : void 0;
            }
        }, l.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var ib = /^(?:focusinfocus|focusoutblur)$/;
    n.extend(n.event, {
        trigger: function(b, c, e, f) {
            var g, h, i, j, l, m, o, p = [ e || d ], q = k.call(b, "type") ? b.type : b, r = k.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !ib.test(q + n.event.triggered) && (q.indexOf(".") > -1 && (r = q.split("."), 
            q = r.shift(), r.sort()), l = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = f ? 2 : 3, b.namespace = r.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = e), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, f || !o.trigger || o.trigger.apply(e, c) !== !1)) {
                if (!f && !o.noBubble && !n.isWindow(e)) {
                    for (j = o.delegateType || q, ib.test(j + q) || (h = h.parentNode); h; h = h.parentNode) p.push(h), 
                    i = h;
                    i === (e.ownerDocument || d) && p.push(i.defaultView || i.parentWindow || a);
                }
                for (g = 0; (h = p[g++]) && !b.isPropagationStopped(); ) b.type = g > 1 ? j : o.bindType || q, 
                m = (N.get(h, "events") || {})[b.type] && N.get(h, "handle"), m && m.apply(h, c), 
                m = l && h[l], m && m.apply && L(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
                return b.type = q, f || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !L(e) || l && n.isFunction(e[q]) && !n.isWindow(e) && (i = e[l], 
                i && (e[l] = null), n.event.triggered = q, e[q](), n.event.triggered = void 0, i && (e[l] = i)), 
                b.result;
            }
        },
        simulate: function(a, b, c) {
            var d = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0
            });
            n.event.trigger(d, null, b), d.isDefaultPrevented() && c.preventDefault();
        }
    }), n.fn.extend({
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        }
    }), l.focusin = "onfocusin" in a, l.focusin || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a));
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = N.access(d, b);
                e || d.addEventListener(a, c, !0), N.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = N.access(d, b) - 1;
                e ? N.access(d, b, e) : (d.removeEventListener(a, c, !0), N.remove(d, b));
            }
        };
    });
    var jb = a.location, kb = n.now(), lb = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(b) {
        var c;
        if (!b || "string" != typeof b) return null;
        try {
            c = new a.DOMParser().parseFromString(b, "text/xml");
        } catch (d) {
            c = void 0;
        }
        return c && !c.getElementsByTagName("parsererror").length || n.error("Invalid XML: " + b), 
        c;
    };
    var mb = /#.*$/, nb = /([?&])_=[^&]*/, ob = /^(.*?):[ \t]*([^\r\n]*)$/gm, pb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qb = /^(?:GET|HEAD)$/, rb = /^\/\//, sb = {}, tb = {}, ub = "*/".concat("*"), vb = d.createElement("a");
    vb.href = jb.href, n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: jb.href,
            type: "GET",
            isLocal: pb.test(jb.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ub,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? yb(yb(a, n.ajaxSettings), b) : yb(n.ajaxSettings, a);
        },
        ajaxPrefilter: wb(sb),
        ajaxTransport: wb(tb),
        ajax: function(b, c) {
            function z(b, c, d, h) {
                var j, l, t, u, w, y = c;
                2 !== v && (v = 2, i && a.clearTimeout(i), e = void 0, g = h || "", x.readyState = b > 0 ? 4 : 0, 
                j = b >= 200 && 300 > b || 304 === b, d && (u = zb(m, x, d)), u = Ab(m, u, x, j), 
                j ? (m.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (n.lastModified[f] = w), 
                w = x.getResponseHeader("etag"), w && (n.etag[f] = w)), 204 === b || "HEAD" === m.type ? y = "nocontent" : 304 === b ? y = "notmodified" : (y = u.state, 
                l = u.data, t = u.error, j = !t)) : (t = y, !b && y || (y = "error", 0 > b && (b = 0))), 
                x.status = b, x.statusText = (c || y) + "", j ? q.resolveWith(o, [ l, y, x ]) : q.rejectWith(o, [ x, y, t ]), 
                x.statusCode(s), s = void 0, k && p.trigger(j ? "ajaxSuccess" : "ajaxError", [ x, m, j ? l : t ]), 
                r.fireWith(o, [ x, y ]), k && (p.trigger("ajaxComplete", [ x, m ]), --n.active || n.event.trigger("ajaxStop")));
            }
            "object" == typeof b && (c = b, b = void 0), c = c || {};
            var e, f, g, h, i, j, k, l, m = n.ajaxSetup({}, c), o = m.context || m, p = m.context && (o.nodeType || o.jquery) ? n(o) : n.event, q = n.Deferred(), r = n.Callbacks("once memory"), s = m.statusCode || {}, t = {}, u = {}, v = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === v) {
                        if (!h) for (h = {}; b = ob.exec(g); ) h[b[1].toLowerCase()] = b[2];
                        b = h[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === v ? g : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return v || (a = u[c] = u[c] || a, t[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return v || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > v) for (b in a) s[b] = [ s[b], a[b] ]; else x.always(a[x.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || w;
                    return e && e.abort(b), z(0, b), this;
                }
            };
            if (q.promise(x).complete = r.add, x.success = x.done, x.error = x.fail, m.url = ((b || m.url || jb.href) + "").replace(mb, "").replace(rb, jb.protocol + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = n.trim(m.dataType || "*").toLowerCase().match(G) || [ "" ], 
            null == m.crossDomain) {
                j = d.createElement("a");
                try {
                    j.href = m.url, j.href = j.href, m.crossDomain = vb.protocol + "//" + vb.host != j.protocol + "//" + j.host;
                } catch (y) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = n.param(m.data, m.traditional)), 
            xb(sb, m, c, x), 2 === v) return x;
            k = n.event && m.global, k && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !qb.test(m.type), f = m.url, m.hasContent || (m.data && (f = m.url += (lb.test(f) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = nb.test(f) ? f.replace(nb, "$1_=" + kb++) : f + (lb.test(f) ? "&" : "?") + "_=" + kb++)), 
            m.ifModified && (n.lastModified[f] && x.setRequestHeader("If-Modified-Since", n.lastModified[f]), 
            n.etag[f] && x.setRequestHeader("If-None-Match", n.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && x.setRequestHeader("Content-Type", m.contentType), 
            x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + ub + "; q=0.01" : "") : m.accepts["*"]);
            for (l in m.headers) x.setRequestHeader(l, m.headers[l]);
            if (m.beforeSend && (m.beforeSend.call(o, x, m) === !1 || 2 === v)) return x.abort();
            w = "abort";
            for (l in {
                success: 1,
                error: 1,
                complete: 1
            }) x[l](m[l]);
            if (e = xb(tb, m, c, x)) {
                if (x.readyState = 1, k && p.trigger("ajaxSend", [ x, m ]), 2 === v) return x;
                m.async && m.timeout > 0 && (i = a.setTimeout(function() {
                    x.abort("timeout");
                }, m.timeout));
                try {
                    v = 1, e.send(t, z);
                } catch (y) {
                    if (!(2 > v)) throw y;
                    z(-1, y);
                }
            } else z(-1, "No Transport");
            return x;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax(n.extend({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            }, n.isPlainObject(a) && a));
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                for (var a = this; a.firstElementChild; ) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return !n.expr.filters.visible(a);
    }, n.expr.filters.visible = function(a) {
        return a.offsetWidth > 0 || a.offsetHeight > 0 || a.getClientRects().length > 0;
    };
    var Bb = /%20/g, Cb = /\[\]$/, Db = /\r?\n/g, Eb = /^(?:submit|button|image|reset|file)$/i, Fb = /^(?:input|select|textarea|keygen)/i;
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Gb(c, a[c], b, e);
        return d.join("&").replace(Bb, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Fb.test(this.nodeName) && !Eb.test(a) && (this.checked || !X.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Db, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Db, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    };
    var Hb = {
        0: 200,
        1223: 204
    }, Ib = n.ajaxSettings.xhr();
    l.cors = !!Ib && "withCredentials" in Ib, l.ajax = Ib = !!Ib, n.ajaxTransport(function(b) {
        var c, d;
        return l.cors || Ib && !b.crossDomain ? {
            send: function(e, f) {
                var g, h = b.xhr();
                if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) h[g] = b.xhrFields[g];
                b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (g in e) h.setRequestHeader(g, e[g]);
                c = function(a) {
                    return function() {
                        c && (c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Hb[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? {
                            binary: h.response
                        } : {
                            text: h.responseText
                        }, h.getAllResponseHeaders()));
                    };
                }, h.onload = c(), d = h.onerror = c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function() {
                    4 === h.readyState && a.setTimeout(function() {
                        c && d();
                    });
                }, c = c("abort");
                try {
                    h.send(b.hasContent && b.data || null);
                } catch (i) {
                    if (c) throw i;
                }
            },
            abort: function() {
                c && c();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(e, f) {
                    b = n("<script>").prop({
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && f("error" === a.type ? 404 : 200, a.type);
                    }), d.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Jb = [], Kb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Jb.pop() || n.expando + "_" + kb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Kb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Kb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Kb, "$1" + e) : b.jsonp !== !1 && (b.url += (lb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            void 0 === f ? n(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, 
            Jb.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || d;
        var e = x.exec(a), f = !c && [];
        return e ? [ b.createElement(e[1]) ] : (e = ca([ a ], b, f), f && f.length && n(f).remove(), 
        n.merge([], e.childNodes));
    };
    var Lb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Lb) return Lb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h > -1 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e || "GET",
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).always(c && function(a, b) {
            g.each(function() {
                c.apply(this, f || [ a.responseText, b, a ]);
            });
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    }, n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, n.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            return f ? (b = f.documentElement, n.contains(b, d) ? (e = d.getBoundingClientRect(), 
            c = Mb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e) : void 0;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent; a && "static" === n.css(a, "position"); ) a = a.offsetParent;
                return a || Ea;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, b) {
        var c = "pageYOffset" === b;
        n.fn[a] = function(d) {
            return K(this, function(a, d, e) {
                var f = Mb(a);
                return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
            }, a, d, arguments.length);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = Ga(l.pixelPosition, function(a, c) {
            return c ? (c = Fa(a, b), Ba.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return K(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.extend({
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        },
        size: function() {
            return this.length;
        }
    }), n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Nb = a.jQuery, Ob = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Ob), b && a.jQuery === n && (a.jQuery = Nb), n;
    }, b || (a.jQuery = a.$ = n), n;
}), !function(a) {
    function b(c, d) {
        return this instanceof b ? (a.isPlainObject(c) ? d = c : (d = d || {}, d.alias = c), 
        this.el = void 0, this.opts = a.extend(!0, {}, this.defaults, d), this.noMasksCache = d && void 0 !== d.definitions, 
        this.userOptions = d || {}, this.events = {}, void e(this.opts.alias, d, this.opts)) : new b(c, d);
    }
    function c(a) {
        var b = document.createElement("input"), c = "on" + a, d = c in b;
        return d || (b.setAttribute(c, "return;"), d = "function" == typeof b[c]), b = null, 
        d;
    }
    function d(b, c) {
        var d = b.getAttribute("type"), e = "INPUT" === b.tagName && -1 !== a.inArray(d, c.supportsInputType) || b.isContentEditable || "TEXTAREA" === b.tagName;
        if (!e && "INPUT" === b.tagName) {
            var f = document.createElement("input");
            f.setAttribute("type", d), e = "text" === f.type, f = null;
        }
        return e;
    }
    function e(b, c, d) {
        var f = d.aliases[b];
        return f ? (f.alias && e(f.alias, void 0, d), a.extend(!0, d, f), a.extend(!0, d, c), 
        !0) : (null === d.mask && (d.mask = b), !1);
    }
    function f(b, c, d) {
        function f(a, c) {
            c = void 0 !== c ? c : b.getAttribute("data-inputmask-" + a), null !== c && ("string" == typeof c && (0 === a.indexOf("on") ? c = window[c] : "false" === c ? c = !1 : "true" === c && (c = !0)), 
            d[a] = c);
        }
        var g, h, i, j, k = b.getAttribute("data-inputmask");
        if (k && "" !== k && (k = k.replace(new RegExp("'", "g"), '"'), h = JSON.parse("{" + k + "}")), 
        h) {
            i = void 0;
            for (j in h) if ("alias" === j.toLowerCase()) {
                i = h[j];
                break;
            }
        }
        f("alias", i), d.alias && e(d.alias, d, c);
        for (g in c) {
            if (h) {
                i = void 0;
                for (j in h) if (j.toLowerCase() === g.toLowerCase()) {
                    i = h[j];
                    break;
                }
            }
            f(g, i);
        }
        return a.extend(!0, c, d), c;
    }
    function g(c, d) {
        function e(b) {
            function d(a, b, c, d) {
                this.matches = [], this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, 
                this.isAlternator = d || !1, this.quantifier = {
                    min: 1,
                    max: 1
                };
            }
            function e(b, d, e) {
                var f = c.definitions[d];
                e = void 0 !== e ? e : b.matches.length;
                var g = b.matches[e - 1];
                if (f && !r) {
                    f.placeholder = a.isFunction(f.placeholder) ? f.placeholder(c) : f.placeholder;
                    for (var h = f.prevalidator, i = h ? h.length : 0, j = 1; j < f.cardinality; j++) {
                        var k = i >= j ? h[j - 1] : [], l = k.validator, m = k.cardinality;
                        b.matches.splice(e++, 0, {
                            fn: l ? "string" == typeof l ? new RegExp(l) : new function() {
                                this.test = l;
                            }() : new RegExp("."),
                            cardinality: m ? m : 1,
                            optionality: b.isOptional,
                            newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d),
                            casing: f.casing,
                            def: f.definitionSymbol || d,
                            placeholder: f.placeholder,
                            mask: d
                        }), g = b.matches[e - 1];
                    }
                    b.matches.splice(e++, 0, {
                        fn: f.validator ? "string" == typeof f.validator ? new RegExp(f.validator) : new function() {
                            this.test = f.validator;
                        }() : new RegExp("."),
                        cardinality: f.cardinality,
                        optionality: b.isOptional,
                        newBlockMarker: void 0 === g || g.def !== (f.definitionSymbol || d),
                        casing: f.casing,
                        def: f.definitionSymbol || d,
                        placeholder: f.placeholder,
                        mask: d
                    });
                } else b.matches.splice(e++, 0, {
                    fn: null,
                    cardinality: 0,
                    optionality: b.isOptional,
                    newBlockMarker: void 0 === g || g.def !== d,
                    casing: null,
                    def: c.staticDefinitionSymbol || d,
                    placeholder: void 0 !== c.staticDefinitionSymbol ? d : void 0,
                    mask: d
                }), r = !1;
            }
            function f(a, b) {
                a.isGroup && (a.isGroup = !1, e(a, c.groupmarker.start, 0), b !== !0 && e(a, c.groupmarker.end));
            }
            function g(a, b, c, d) {
                b.matches.length > 0 && (void 0 === d || d) && (c = b.matches[b.matches.length - 1], 
                f(c)), e(b, a);
            }
            function h() {
                if (t.length > 0) {
                    if (m = t[t.length - 1], g(k, m, o, !m.isAlternator), m.isAlternator) {
                        n = t.pop();
                        for (var a = 0; a < n.matches.length; a++) n.matches[a].isGroup = !1;
                        t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n);
                    }
                } else g(k, s, o);
            }
            function i(a) {
                function b(a) {
                    return a === c.optionalmarker.start ? a = c.optionalmarker.end : a === c.optionalmarker.end ? a = c.optionalmarker.start : a === c.groupmarker.start ? a = c.groupmarker.end : a === c.groupmarker.end && (a = c.groupmarker.start), 
                    a;
                }
                a.matches = a.matches.reverse();
                for (var d in a.matches) {
                    var e = parseInt(d);
                    if (a.matches[d].isQuantifier && a.matches[e + 1] && a.matches[e + 1].isGroup) {
                        var f = a.matches[d];
                        a.matches.splice(d, 1), a.matches.splice(e + 1, 0, f);
                    }
                    void 0 !== a.matches[d].matches ? a.matches[d] = i(a.matches[d]) : a.matches[d] = b(a.matches[d]);
                }
                return a;
            }
            for (var j, k, l, m, n, o, p, q = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g, r = !1, s = new d(), t = [], u = []; j = q.exec(b); ) if (k = j[0], 
            r) h(); else switch (k.charAt(0)) {
              case c.escapeChar:
                r = !0;
                break;

              case c.optionalmarker.end:
              case c.groupmarker.end:
                if (l = t.pop(), void 0 !== l) if (t.length > 0) {
                    if (m = t[t.length - 1], m.matches.push(l), m.isAlternator) {
                        n = t.pop();
                        for (var v = 0; v < n.matches.length; v++) n.matches[v].isGroup = !1;
                        t.length > 0 ? (m = t[t.length - 1], m.matches.push(n)) : s.matches.push(n);
                    }
                } else s.matches.push(l); else h();
                break;

              case c.optionalmarker.start:
                t.push(new d(!1, !0));
                break;

              case c.groupmarker.start:
                t.push(new d(!0));
                break;

              case c.quantifiermarker.start:
                var w = new d(!1, !1, !0);
                k = k.replace(/[{}]/g, "");
                var x = k.split(","), y = isNaN(x[0]) ? x[0] : parseInt(x[0]), z = 1 === x.length ? y : isNaN(x[1]) ? x[1] : parseInt(x[1]);
                if (("*" === z || "+" === z) && (y = "*" === z ? 0 : 1), w.quantifier = {
                    min: y,
                    max: z
                }, t.length > 0) {
                    var A = t[t.length - 1].matches;
                    j = A.pop(), j.isGroup || (p = new d(!0), p.matches.push(j), j = p), A.push(j), 
                    A.push(w);
                } else j = s.matches.pop(), j.isGroup || (p = new d(!0), p.matches.push(j), j = p), 
                s.matches.push(j), s.matches.push(w);
                break;

              case c.alternatormarker:
                t.length > 0 ? (m = t[t.length - 1], o = m.matches.pop()) : o = s.matches.pop(), 
                o.isAlternator ? t.push(o) : (n = new d(!1, !1, !1, !0), n.matches.push(o), t.push(n));
                break;

              default:
                h();
            }
            for (;t.length > 0; ) l = t.pop(), f(l, !0), s.matches.push(l);
            return s.matches.length > 0 && (o = s.matches[s.matches.length - 1], f(o), u.push(s)), 
            c.numericInput && i(u[0]), u;
        }
        function f(f, g) {
            if (null !== f && "" !== f) {
                if (1 === f.length && c.greedy === !1 && 0 !== c.repeat && (c.placeholder = ""), 
                c.repeat > 0 || "*" === c.repeat || "+" === c.repeat) {
                    var h = "*" === c.repeat ? 0 : "+" === c.repeat ? 1 : c.repeat;
                    f = c.groupmarker.start + f + c.groupmarker.end + c.quantifiermarker.start + h + "," + c.repeat + c.quantifiermarker.end;
                }
                var i;
                return void 0 === b.prototype.masksCache[f] || d === !0 ? (i = {
                    mask: f,
                    maskToken: e(f),
                    validPositions: {},
                    _buffer: void 0,
                    buffer: void 0,
                    tests: {},
                    metadata: g
                }, d !== !0 && (b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f] = i, 
                i = a.extend(!0, {}, b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f]))) : i = a.extend(!0, {}, b.prototype.masksCache[c.numericInput ? f.split("").reverse().join("") : f]), 
                i;
            }
        }
        function g(a) {
            return a = a.toString();
        }
        var h;
        if (a.isFunction(c.mask) && (c.mask = c.mask(c)), a.isArray(c.mask)) {
            if (c.mask.length > 1) {
                c.keepStatic = null === c.keepStatic ? !0 : c.keepStatic;
                var i = "(";
                return a.each(c.numericInput ? c.mask.reverse() : c.mask, function(b, c) {
                    i.length > 1 && (i += ")|("), i += g(void 0 === c.mask || a.isFunction(c.mask) ? c : c.mask);
                }), i += ")", f(i, c.mask);
            }
            c.mask = c.mask.pop();
        }
        return c.mask && (h = void 0 === c.mask.mask || a.isFunction(c.mask.mask) ? f(g(c.mask), c.mask) : f(g(c.mask.mask), c.mask)), 
        h;
    }
    function h(e, f, g) {
        function i(a, b, c) {
            b = b || 0;
            var d, e, f, h = [], i = 0, j = o();
            do {
                if (a === !0 && m().validPositions[i]) {
                    var k = m().validPositions[i];
                    e = k.match, d = k.locator.slice(), h.push(c === !0 ? k.input : I(i, e));
                } else f = r(i, d, i - 1), e = f.match, d = f.locator.slice(), (g.jitMasking === !1 || j > i || isFinite(g.jitMasking) && g.jitMasking > i) && h.push(I(i, e));
                i++;
            } while ((void 0 === ha || ha > i - 1) && null !== e.fn || null === e.fn && "" !== e.def || b >= i);
            return "" === h[h.length - 1] && h.pop(), h;
        }
        function m() {
            return f;
        }
        function n(a) {
            var b = m();
            b.buffer = void 0, a !== !0 && (b.tests = {}, b._buffer = void 0, b.validPositions = {}, 
            b.p = 0);
        }
        function o(a, b) {
            var c = -1, d = -1, e = m().validPositions;
            void 0 === a && (a = -1);
            for (var f in e) {
                var g = parseInt(f);
                e[g] && (b || null !== e[g].match.fn) && (a >= g && (c = g), g >= a && (d = g));
            }
            return -1 !== c && a - c > 1 || a > d ? c : d;
        }
        function p(b, c, d, e) {
            if (e || g.insertMode && void 0 !== m().validPositions[b] && void 0 === d) {
                var f, h = a.extend(!0, {}, m().validPositions), i = o();
                for (f = b; i >= f; f++) delete m().validPositions[f];
                m().validPositions[b] = c;
                var j, k = !0, l = m().validPositions, p = !1;
                for (f = j = b; i >= f; f++) {
                    var q = h[f];
                    if (void 0 !== q) for (var r = j, s = -1; r < D() && (null == q.match.fn && l[f] && (l[f].match.optionalQuantifier === !0 || l[f].match.optionality === !0) || null != q.match.fn); ) {
                        if (null === q.match.fn || !g.keepStatic && l[f] && (void 0 !== l[f + 1] && v(f + 1, l[f].locator.slice(), f).length > 1 || void 0 !== l[f].alternation) ? r++ : r = E(j), 
                        p === !1 && h[r] && h[r].match.def === q.match.def) {
                            m().validPositions[r] = a.extend(!0, {}, h[r]), m().validPositions[r].input = q.input, 
                            j = r, k = !0;
                            break;
                        }
                        if (t(r, q.match.def)) {
                            var u = B(r, q.input, !0, !0);
                            if (k = u !== !1, j = u.caret || u.insert ? o() : r, p = !0, k) break;
                        } else {
                            if (k = null == q.match.fn, s === r) break;
                            s = r;
                        }
                    }
                    if (!k) break;
                }
                if (!k) return m().validPositions = a.extend(!0, {}, h), n(!0), !1;
            } else m().validPositions[b] = c;
            return n(!0), !0;
        }
        function q(b, c, d, e) {
            function f(a) {
                var b = m().validPositions[a];
                if (void 0 !== b && null === b.match.fn) {
                    var c = m().validPositions[a - 1], d = m().validPositions[a + 1];
                    return void 0 !== c && void 0 !== d;
                }
                return !1;
            }
            var h, i = b, j = a.extend(!0, {}, m().validPositions), k = !1;
            for (m().p = b, h = c - 1; h >= i; h--) void 0 !== m().validPositions[h] && (d === !0 || !f(h) && g.canClearPosition(m(), h, o(), e, g) !== !1) && delete m().validPositions[h];
            for (n(!0), h = i + 1; h <= o(); ) {
                for (;void 0 !== m().validPositions[i]; ) i++;
                var l = m().validPositions[i];
                if (i > h && (h = i + 1), void 0 === m().validPositions[h] && C(h) || void 0 !== l) h++; else {
                    var p = r(h);
                    k === !1 && j[i] && j[i].match.def === p.match.def ? (m().validPositions[i] = a.extend(!0, {}, j[i]), 
                    m().validPositions[i].input = p.input, delete m().validPositions[h], h++) : t(i, p.match.def) ? B(i, p.input || I(h), !0) !== !1 && (delete m().validPositions[h], 
                    h++, k = !0) : C(h) || (h++, i--), i++;
                }
            }
            n(!0);
        }
        function r(a, b, c) {
            var d = m().validPositions[a];
            if (void 0 === d) for (var e = v(a, b, c), f = o(), h = m().validPositions[f] || v(0)[0], i = void 0 !== h.alternation ? h.locator[h.alternation].toString().split(",") : [], j = 0; j < e.length && (d = e[j], 
            !(d.match && (g.greedy && d.match.optionalQuantifier !== !0 || (d.match.optionality === !1 || d.match.newBlockMarker === !1) && d.match.optionalQuantifier !== !0) && (void 0 === h.alternation || h.alternation !== d.alternation || void 0 !== d.locator[h.alternation] && A(d.locator[h.alternation].toString().split(","), i)))); j++) ;
            return d;
        }
        function s(a) {
            return m().validPositions[a] ? m().validPositions[a].match : v(a)[0].match;
        }
        function t(a, b) {
            for (var c = !1, d = v(a), e = 0; e < d.length; e++) if (d[e].match && d[e].match.def === b) {
                c = !0;
                break;
            }
            return c;
        }
        function u(b, c) {
            var d, e;
            return (m().tests[b] || m().validPositions[b]) && a.each(m().tests[b] || [ m().validPositions[b] ], function(a, b) {
                var f = b.alternation ? b.locator[b.alternation].toString().indexOf(c) : -1;
                (void 0 === e || e > f) && -1 !== f && (d = b, e = f);
            }), d;
        }
        function v(b, c, d) {
            function e(c, d, f, h) {
                function j(f, h, o) {
                    function p(b, c) {
                        var d = 0 === a.inArray(b, c.matches);
                        return d || a.each(c.matches, function(a, e) {
                            return e.isQuantifier === !0 && (d = p(b, c.matches[a - 1])) ? !1 : void 0;
                        }), d;
                    }
                    function q(a, b) {
                        var c = u(a, b);
                        return c ? c.locator.slice(c.alternation + 1) : [];
                    }
                    if (i > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + m().mask;
                    if (i === b && void 0 === f.matches) return k.push({
                        match: f,
                        locator: h.reverse(),
                        cd: n
                    }), !0;
                    if (void 0 !== f.matches) {
                        if (f.isGroup && o !== f) {
                            if (f = j(c.matches[a.inArray(f, c.matches) + 1], h)) return !0;
                        } else if (f.isOptional) {
                            var r = f;
                            if (f = e(f, d, h, o)) {
                                if (g = k[k.length - 1].match, !p(g, r)) return !0;
                                l = !0, i = b;
                            }
                        } else if (f.isAlternator) {
                            var s, t = f, v = [], w = k.slice(), x = h.length, y = d.length > 0 ? d.shift() : -1;
                            if (-1 === y || "string" == typeof y) {
                                var z, A = i, B = d.slice(), C = [];
                                if ("string" == typeof y) C = y.split(","); else for (z = 0; z < t.matches.length; z++) C.push(z);
                                for (var D = 0; D < C.length; D++) {
                                    if (z = parseInt(C[D]), k = [], d = q(i, z), f = j(t.matches[z] || c.matches[z], [ z ].concat(h), o) || f, 
                                    f !== !0 && void 0 !== f && C[C.length - 1] < t.matches.length) {
                                        var E = a.inArray(f, c.matches) + 1;
                                        c.matches.length > E && (f = j(c.matches[E], [ E ].concat(h.slice(1, h.length)), o), 
                                        f && (C.push(E.toString()), a.each(k, function(a, b) {
                                            b.alternation = h.length - 1;
                                        })));
                                    }
                                    s = k.slice(), i = A, k = [];
                                    for (var F = 0; F < B.length; F++) d[F] = B[F];
                                    for (var G = 0; G < s.length; G++) {
                                        var H = s[G];
                                        H.alternation = H.alternation || x;
                                        for (var I = 0; I < v.length; I++) {
                                            var J = v[I];
                                            if (H.match.def === J.match.def && ("string" != typeof y || -1 !== a.inArray(H.locator[H.alternation].toString(), C))) {
                                                H.match.mask === J.match.mask && (s.splice(G, 1), G--), -1 === J.locator[H.alternation].toString().indexOf(H.locator[H.alternation]) && (J.locator[H.alternation] = J.locator[H.alternation] + "," + H.locator[H.alternation], 
                                                J.alternation = H.alternation);
                                                break;
                                            }
                                        }
                                    }
                                    v = v.concat(s);
                                }
                                "string" == typeof y && (v = a.map(v, function(b, c) {
                                    if (isFinite(c)) {
                                        var d, e = b.alternation, f = b.locator[e].toString().split(",");
                                        b.locator[e] = void 0, b.alternation = void 0;
                                        for (var g = 0; g < f.length; g++) d = -1 !== a.inArray(f[g], C), d && (void 0 !== b.locator[e] ? (b.locator[e] += ",", 
                                        b.locator[e] += f[g]) : b.locator[e] = parseInt(f[g]), b.alternation = e);
                                        if (void 0 !== b.locator[e]) return b;
                                    }
                                })), k = w.concat(v), i = b, l = k.length > 0;
                            } else f = j(t.matches[y] || c.matches[y], [ y ].concat(h), o);
                            if (f) return !0;
                        } else if (f.isQuantifier && o !== c.matches[a.inArray(f, c.matches) - 1]) for (var K = f, L = d.length > 0 ? d.shift() : 0; L < (isNaN(K.quantifier.max) ? L + 1 : K.quantifier.max) && b >= i; L++) {
                            var M = c.matches[a.inArray(K, c.matches) - 1];
                            if (f = j(M, [ L ].concat(h), M)) {
                                if (g = k[k.length - 1].match, g.optionalQuantifier = L > K.quantifier.min - 1, 
                                p(g, M)) {
                                    if (L > K.quantifier.min - 1) {
                                        l = !0, i = b;
                                        break;
                                    }
                                    return !0;
                                }
                                return !0;
                            }
                        } else if (f = e(f, d, h, o)) return !0;
                    } else i++;
                }
                for (var o = d.length > 0 ? d.shift() : 0; o < c.matches.length; o++) if (c.matches[o].isQuantifier !== !0) {
                    var p = j(c.matches[o], [ o ].concat(f), h);
                    if (p && i === b) return p;
                    if (i > b) break;
                }
            }
            function f(b) {
                var c = [];
                return a.isArray(b) || (b = [ b ]), void 0 === b[0].alternation ? c = b[0].locator.slice() : a.each(b, function(a, b) {
                    if ("" !== b.def) if (0 === c.length) c = b.locator.slice(); else for (var d = 0; d < c.length; d++) b.locator[d] && -1 === c[d].toString().indexOf(b.locator[d]) && (c[d] += "," + b.locator[d]);
                }), c;
            }
            var g, h = m().maskToken, i = c ? d : 0, j = c || [ 0 ], k = [], l = !1, n = c ? c.join("") : "";
            if (b > -1) {
                if (void 0 === c) {
                    for (var o, p = b - 1; void 0 === (o = m().validPositions[p] || m().tests[p]) && p > -1; ) p--;
                    void 0 !== o && p > -1 && (j = f(o), n = j.join(""), i = p);
                }
                if (m().tests[b] && m().tests[b][0].cd === n) return m().tests[b];
                for (var q = j.shift(); q < h.length; q++) {
                    var r = e(h[q], j, [ q ]);
                    if (r && i === b || i > b) break;
                }
            }
            return (0 === k.length || l) && k.push({
                match: {
                    fn: null,
                    cardinality: 0,
                    optionality: !0,
                    casing: null,
                    def: ""
                },
                locator: []
            }), m().tests[b] = a.extend(!0, [], k), m().tests[b];
        }
        function w() {
            return void 0 === m()._buffer && (m()._buffer = i(!1, 1)), m()._buffer;
        }
        function x(a) {
            if (void 0 === m().buffer || a === !0) {
                if (a === !0) for (var b in m().tests) void 0 === m().validPositions[b] && delete m().tests[b];
                m().buffer = i(!0, o(), !0);
            }
            return m().buffer;
        }
        function y(a, b, c) {
            var d;
            if (c = c, a === !0) n(), a = 0, b = c.length; else for (d = a; b > d; d++) delete m().validPositions[d], 
            delete m().tests[d];
            for (d = a; b > d; d++) n(!0), c[d] !== g.skipOptionalPartCharacter && B(d, c[d], !0, !0);
        }
        function z(a, b) {
            switch (b.casing) {
              case "upper":
                a = a.toUpperCase();
                break;

              case "lower":
                a = a.toLowerCase();
            }
            return a;
        }
        function A(b, c) {
            for (var d = g.greedy ? c : c.slice(0, 1), e = !1, f = 0; f < b.length; f++) if (-1 !== a.inArray(b[f], d)) {
                e = !0;
                break;
            }
            return e;
        }
        function B(c, d, e, f) {
            function h(a) {
                return ja ? a.begin - a.end > 1 || a.begin - a.end === 1 && g.insertMode : a.end - a.begin > 1 || a.end - a.begin === 1 && g.insertMode;
            }
            function i(b, d, e, f) {
                var i = !1;
                return a.each(v(b), function(j, k) {
                    for (var l = k.match, r = d ? 1 : 0, s = "", t = l.cardinality; t > r; t--) s += G(b - (t - 1));
                    if (d && (s += d), x(!0), i = null != l.fn ? l.fn.test(s, m(), b, e, g, h(c)) : d !== l.def && d !== g.skipOptionalPartCharacter || "" === l.def ? !1 : {
                        c: l.placeholder || l.def,
                        pos: b
                    }, i !== !1) {
                        var u = void 0 !== i.c ? i.c : d;
                        u = u === g.skipOptionalPartCharacter && null === l.fn ? l.placeholder || l.def : u;
                        var v = b, w = x();
                        if (void 0 !== i.remove && (a.isArray(i.remove) || (i.remove = [ i.remove ]), a.each(i.remove.sort(function(a, b) {
                            return b - a;
                        }), function(a, b) {
                            q(b, b + 1, !0);
                        })), void 0 !== i.insert && (a.isArray(i.insert) || (i.insert = [ i.insert ]), a.each(i.insert.sort(function(a, b) {
                            return a - b;
                        }), function(a, b) {
                            B(b.pos, b.c, !1, f);
                        })), i.refreshFromBuffer) {
                            var A = i.refreshFromBuffer;
                            if (e = !0, y(A === !0 ? A : A.start, A.end, w), void 0 === i.pos && void 0 === i.c) return i.pos = o(), 
                            !1;
                            if (v = void 0 !== i.pos ? i.pos : b, v !== b) return i = a.extend(i, B(v, u, !0, f)), 
                            !1;
                        } else if (i !== !0 && void 0 !== i.pos && i.pos !== b && (v = i.pos, y(b, v, x().slice()), 
                        v !== b)) return i = a.extend(i, B(v, u, !0)), !1;
                        return i !== !0 && void 0 === i.pos && void 0 === i.c ? !1 : (j > 0 && n(!0), p(v, a.extend({}, k, {
                            input: z(u, l)
                        }), f, h(c)) || (i = !1), !1);
                    }
                }), i;
            }
            function j(b, c, d, e) {
                for (var f, h, i, j, k, l, p = a.extend(!0, {}, m().validPositions), q = a.extend(!0, {}, m().tests), s = o(); s >= 0 && (j = m().validPositions[s], 
                !j || void 0 === j.alternation || (f = s, h = m().validPositions[f].alternation, 
                r(f).locator[j.alternation] === j.locator[j.alternation])); s--) ;
                if (void 0 !== h) {
                    f = parseInt(f);
                    for (var t in m().validPositions) if (t = parseInt(t), j = m().validPositions[t], 
                    t >= f && void 0 !== j.alternation) {
                        var v;
                        0 === f ? (v = [], a.each(m().tests[f], function(a, b) {
                            void 0 !== b.locator[h] && (v = v.concat(b.locator[h].toString().split(",")));
                        })) : v = m().validPositions[f].locator[h].toString().split(",");
                        var w = void 0 !== j.locator[h] ? j.locator[h] : v[0];
                        w.length > 0 && (w = w.split(",")[0]);
                        for (var x = 0; x < v.length; x++) {
                            var y = [], z = 0, A = 0;
                            if (w < v[x]) {
                                for (var C, D, E = t; E >= 0; E--) if (C = m().validPositions[E], void 0 !== C) {
                                    var F = u(E, v[x]);
                                    m().validPositions[E].match.def !== F.match.def && (y.push(m().validPositions[E].input), 
                                    m().validPositions[E] = F, m().validPositions[E].input = I(E), null === m().validPositions[E].match.fn && A++, 
                                    C = F), D = C.locator[h], C.locator[h] = parseInt(v[x]);
                                    break;
                                }
                                if (w !== C.locator[h]) {
                                    for (k = t + 1; k < o(void 0, !0) + 1; k++) l = m().validPositions[k], l && null != l.match.fn ? y.push(l.input) : b > k && z++, 
                                    delete m().validPositions[k], delete m().tests[k];
                                    for (n(!0), g.keepStatic = !g.keepStatic, i = !0; y.length > 0; ) {
                                        var G = y.shift();
                                        if (G !== g.skipOptionalPartCharacter && !(i = B(o(void 0, !0) + 1, G, !1, e))) break;
                                    }
                                    if (C.alternation = h, C.locator[h] = D, i) {
                                        var H = o(b) + 1;
                                        for (k = t + 1; k < o() + 1; k++) l = m().validPositions[k], (void 0 === l || null == l.match.fn) && b > k && A++;
                                        b += A - z, i = B(b > H ? H : b, c, d, e);
                                    }
                                    if (g.keepStatic = !g.keepStatic, i) return i;
                                    n(), m().validPositions = a.extend(!0, {}, p), m().tests = a.extend(!0, {}, q);
                                }
                            }
                        }
                        break;
                    }
                }
                return !1;
            }
            function k(b, c) {
                for (var d = m().validPositions[c], e = d.locator, f = e.length, g = b; c > g; g++) if (void 0 === m().validPositions[g] && !C(g, !0)) {
                    var h = v(g), i = h[0], j = -1;
                    a.each(h, function(a, b) {
                        for (var c = 0; f > c && void 0 !== b.locator[c] && A(b.locator[c].toString().split(","), e[c].toString().split(",")); c++) c > j && (j = c, 
                        i = b);
                    }), p(g, a.extend({}, i, {
                        input: i.match.placeholder || i.match.def
                    }), !0);
                }
            }
            e = e === !0;
            var l = c;
            void 0 !== c.begin && (l = ja && !h(c) ? c.end : c.begin);
            for (var s = !1, t = a.extend(!0, {}, m().validPositions), w = l - 1; w > -1 && !m().validPositions[w]; w--) ;
            var F;
            for (w++; l > w; w++) void 0 === m().validPositions[w] && (g.jitMasking === !1 || g.jitMasking > w) && ((F = r(w)).match.def === g.radixPointDefinitionSymbol || !C(w, !0) || a.inArray(g.radixPoint, x()) < w && F.match.fn && F.match.fn.test(I(w), m(), w, !1, g)) && i(o(w, !0) + 1, F.match.placeholder || (null == F.match.fn ? F.match.def : "" !== I(w) ? I(w) : x()[w]), !0, f);
            if (h(c) && (Q(void 0, b.keyCode.DELETE, c), l = m().p), l < D() && (s = i(l, d, e, f), 
            (!e || f === !0) && s === !1)) {
                var H = m().validPositions[l];
                if (!H || null !== H.match.fn || H.match.def !== d && d !== g.skipOptionalPartCharacter) {
                    if ((g.insertMode || void 0 === m().validPositions[E(l)]) && !C(l, !0)) {
                        var J = r(l).match;
                        J = J.placeholder || J.def, i(l, J, e, f);
                        for (var K = l + 1, L = E(l); L >= K; K++) if (s = i(K, d, e, f), s !== !1) {
                            k(l, K), l = K;
                            break;
                        }
                    }
                } else s = {
                    caret: E(l)
                };
            }
            return s === !1 && g.keepStatic && (s = j(l, d, e, f)), s === !0 && (s = {
                pos: l
            }), a.isFunction(g.postValidation) && s !== !1 && !e && f !== !0 && (s = g.postValidation(x(!0), s, g) ? s : !1), 
            void 0 === s.pos && (s.pos = l), s === !1 && (n(!0), m().validPositions = a.extend(!0, {}, t)), 
            s;
        }
        function C(a, b) {
            var c;
            if (b ? (c = r(a).match, "" === c.def && (c = s(a))) : c = s(a), null != c.fn) return c.fn;
            if (b !== !0 && a > -1 && !g.keepStatic && void 0 === m().validPositions[a]) {
                var d = v(a);
                return d.length > 2;
            }
            return !1;
        }
        function D() {
            var a;
            ha = void 0 !== fa ? fa.maxLength : void 0, -1 === ha && (ha = void 0);
            var b, c = o(), d = m().validPositions[c], e = void 0 !== d ? d.locator.slice() : void 0;
            for (b = c + 1; void 0 === d || null !== d.match.fn || null === d.match.fn && "" !== d.match.def; b++) d = r(b, e, b - 1), 
            e = d.locator.slice();
            var f = s(b - 1);
            return a = "" !== f.def ? b : b - 1, void 0 === ha || ha > a ? a : ha;
        }
        function E(a, b) {
            var c = D();
            if (a >= c) return c;
            for (var d = a; ++d < c && (b === !0 && (s(d).newBlockMarker !== !0 || !C(d)) || b !== !0 && !C(d) && (g.nojumps !== !0 || g.nojumpsThreshold > d)); ) ;
            return d;
        }
        function F(a, b) {
            var c = a;
            if (0 >= c) return 0;
            for (;--c > 0 && (b === !0 && s(c).newBlockMarker !== !0 || b !== !0 && !C(c)); ) ;
            return c;
        }
        function G(a) {
            return void 0 === m().validPositions[a] ? I(a) : m().validPositions[a].input;
        }
        function H(b, c, d, e, f) {
            if (e && a.isFunction(g.onBeforeWrite)) {
                var h = g.onBeforeWrite(e, c, d, g);
                if (h) {
                    if (h.refreshFromBuffer) {
                        var i = h.refreshFromBuffer;
                        y(i === !0 ? i : i.start, i.end, h.buffer || c), c = x(!0);
                    }
                    void 0 !== d && (d = void 0 !== h.caret ? h.caret : d);
                }
            }
            b.inputmask._valueSet(c.join("")), void 0 === d || void 0 !== e && "blur" === e.type || L(b, d), 
            f === !0 && (la = !0, a(b).trigger("input"));
        }
        function I(a, b) {
            if (b = b || s(a), void 0 !== b.placeholder) return b.placeholder;
            if (null === b.fn) {
                if (a > -1 && !g.keepStatic && void 0 === m().validPositions[a]) {
                    var c, d = v(a), e = [];
                    if (d.length > 2) for (var f = 0; f < d.length; f++) if (d[f].match.optionality !== !0 && d[f].match.optionalQuantifier !== !0 && (null === d[f].match.fn || void 0 === c || d[f].match.fn.test(c.match.def, m(), a, !0, g) !== !1) && (e.push(d[f]), 
                    null === d[f].match.fn && (c = d[f]), e.length > 1)) return g.placeholder.charAt(a % g.placeholder.length);
                }
                return b.def;
            }
            return g.placeholder.charAt(a % g.placeholder.length);
        }
        function J(c, d, e, f) {
            function h() {
                var a = !1, b = w().slice(l, E(l)).join("").indexOf(k);
                if (-1 !== b && !C(l)) {
                    a = !0;
                    for (var c = w().slice(l, l + b), d = 0; d < c.length; d++) if (" " !== c[d]) {
                        a = !1;
                        break;
                    }
                }
                return a;
            }
            var i, j = f.slice(), k = "", l = 0;
            if (n(), m().p = E(-1), !e) if (g.autoUnmask !== !0) {
                var p = w().slice(0, E(-1)).join(""), q = j.join("").match(new RegExp("^" + b.escapeRegex(p), "g"));
                q && q.length > 0 && (j.splice(0, q.length * p.length), l = E(l));
            } else l = E(l);
            a.each(j, function(b, d) {
                if (void 0 !== d) {
                    var f = new a.Event("keypress");
                    f.which = d.charCodeAt(0), k += d;
                    var j = o(void 0, !0), p = m().validPositions[j], q = r(j + 1, p ? p.locator.slice() : void 0, j);
                    if (!h() || e || g.autoUnmask) {
                        var s = e ? b : null == q.match.fn && q.match.optionality && j + 1 < m().p ? j + 1 : m().p;
                        i = S.call(c, f, !0, !1, e, s), l = s + 1, k = "";
                    } else i = S.call(c, f, !0, !1, !0, j + 1);
                    if (!e && a.isFunction(g.onBeforeWrite) && (i = g.onBeforeWrite(f, x(), i.forwardPosition, g), 
                    i && i.refreshFromBuffer)) {
                        var t = i.refreshFromBuffer;
                        y(t === !0 ? t : t.start, t.end, i.buffer), n(!0), i.caret && (m().p = i.caret);
                    }
                }
            }), d && H(c, x(), document.activeElement === c ? E(o(0)) : void 0, new a.Event("checkval"));
        }
        function K(b) {
            if (b && void 0 === b.inputmask) return b.value;
            var c = [], d = m().validPositions;
            for (var e in d) d[e].match && null != d[e].match.fn && c.push(d[e].input);
            var f = 0 === c.length ? null : (ja ? c.reverse() : c).join("");
            if (null !== f) {
                var h = (ja ? x().slice().reverse() : x()).join("");
                a.isFunction(g.onUnMask) && (f = g.onUnMask(h, f, g) || f);
            }
            return f;
        }
        function L(a, b, c, d) {
            function e(a) {
                if (d !== !0 && ja && "number" == typeof a && (!g.greedy || "" !== g.placeholder)) {
                    var b = x().join("").length;
                    a = b - a;
                }
                return a;
            }
            var f;
            if ("number" != typeof b) return a.setSelectionRange ? (b = a.selectionStart, c = a.selectionEnd) : window.getSelection ? (f = window.getSelection().getRangeAt(0), 
            (f.commonAncestorContainer.parentNode === a || f.commonAncestorContainer === a) && (b = f.startOffset, 
            c = f.endOffset)) : document.selection && document.selection.createRange && (f = document.selection.createRange(), 
            b = 0 - f.duplicate().moveStart("character", -a.inputmask._valueGet().length), c = b + f.text.length), 
            {
                begin: e(b),
                end: e(c)
            };
            b = e(b), c = e(c), c = "number" == typeof c ? c : b;
            var h = parseInt(((a.ownerDocument.defaultView || window).getComputedStyle ? (a.ownerDocument.defaultView || window).getComputedStyle(a, null) : a.currentStyle).fontSize) * c;
            if (a.scrollLeft = h > a.scrollWidth ? h : 0, j || g.insertMode !== !1 || b !== c || c++, 
            a.setSelectionRange) a.selectionStart = b, a.selectionEnd = c; else if (window.getSelection) {
                if (f = document.createRange(), void 0 === a.firstChild || null === a.firstChild) {
                    var i = document.createTextNode("");
                    a.appendChild(i);
                }
                f.setStart(a.firstChild, b < a.inputmask._valueGet().length ? b : a.inputmask._valueGet().length), 
                f.setEnd(a.firstChild, c < a.inputmask._valueGet().length ? c : a.inputmask._valueGet().length), 
                f.collapse(!0);
                var k = window.getSelection();
                k.removeAllRanges(), k.addRange(f);
            } else a.createTextRange && (f = a.createTextRange(), f.collapse(!0), f.moveEnd("character", c), 
            f.moveStart("character", b), f.select());
        }
        function M(b) {
            var c, d, e = x(), f = e.length, g = o(), h = {}, i = m().validPositions[g], j = void 0 !== i ? i.locator.slice() : void 0;
            for (c = g + 1; c < e.length; c++) d = r(c, j, c - 1), j = d.locator.slice(), h[c] = a.extend(!0, {}, d);
            var k = i && void 0 !== i.alternation ? i.locator[i.alternation] : void 0;
            for (c = f - 1; c > g && (d = h[c], (d.match.optionality || d.match.optionalQuantifier || k && (k !== h[c].locator[i.alternation] && null != d.match.fn || null === d.match.fn && d.locator[i.alternation] && A(d.locator[i.alternation].toString().split(","), k.toString().split(",")) && "" !== v(c)[0].def)) && e[c] === I(c, d.match)); c--) f--;
            return b ? {
                l: f,
                def: h[f] ? h[f].match : void 0
            } : f;
        }
        function N(a) {
            for (var b = M(), c = a.length - 1; c > b && !C(c); c--) ;
            return a.splice(b, c + 1 - b), a;
        }
        function O(b) {
            if (a.isFunction(g.isComplete)) return g.isComplete(b, g);
            if ("*" !== g.repeat) {
                var c = !1, d = M(!0), e = F(d.l);
                if (void 0 === d.def || d.def.newBlockMarker || d.def.optionality || d.def.optionalQuantifier) {
                    c = !0;
                    for (var f = 0; e >= f; f++) {
                        var h = r(f).match;
                        if (null !== h.fn && void 0 === m().validPositions[f] && h.optionality !== !0 && h.optionalQuantifier !== !0 || null === h.fn && b[f] !== I(f, h)) {
                            c = !1;
                            break;
                        }
                    }
                }
                return c;
            }
        }
        function P(b) {
            function c(b) {
                if (a.valHooks && (void 0 === a.valHooks[b] || a.valHooks[b].inputmaskpatch !== !0)) {
                    var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function(a) {
                        return a.value;
                    }, d = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function(a, b) {
                        return a.value = b, a;
                    };
                    a.valHooks[b] = {
                        get: function(a) {
                            if (a.inputmask) {
                                if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();
                                var b = c(a);
                                return -1 !== o() || g.nullable !== !0 ? b : "";
                            }
                            return c(a);
                        },
                        set: function(b, c) {
                            var e, f = a(b);
                            return e = d(b, c), b.inputmask && f.trigger("setvalue"), e;
                        },
                        inputmaskpatch: !0
                    };
                }
            }
            function d() {
                return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== o() || g.nullable !== !0 ? document.activeElement === this && g.clearMaskOnLostFocus ? (ja ? N(x().slice()).reverse() : N(x().slice())).join("") : h.call(this) : "" : h.call(this);
            }
            function e(b) {
                i.call(this, b), this.inputmask && a(this).trigger("setvalue");
            }
            function f(b) {
                oa.on(b, "mouseenter", function(b) {
                    var c = a(this), d = this, e = d.inputmask._valueGet();
                    e !== x().join("") && c.trigger("setvalue");
                });
            }
            var h, i;
            if (!b.inputmask.__valueGet) {
                if (Object.getOwnPropertyDescriptor) {
                    "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == typeof "test".__proto__ ? function(a) {
                        return a.__proto__;
                    } : function(a) {
                        return a.constructor.prototype;
                    });
                    var j = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") : void 0;
                    j && j.get && j.set ? (h = j.get, i = j.set, Object.defineProperty(b, "value", {
                        get: d,
                        set: e,
                        configurable: !0
                    })) : "INPUT" !== b.tagName && (h = function() {
                        return this.textContent;
                    }, i = function(a) {
                        this.textContent = a;
                    }, Object.defineProperty(b, "value", {
                        get: d,
                        set: e,
                        configurable: !0
                    }));
                } else document.__lookupGetter__ && b.__lookupGetter__("value") && (h = b.__lookupGetter__("value"), 
                i = b.__lookupSetter__("value"), b.__defineGetter__("value", d), b.__defineSetter__("value", e));
                b.inputmask.__valueGet = h, b.inputmask._valueGet = function(a) {
                    return ja && a !== !0 ? h.call(this.el).split("").reverse().join("") : h.call(this.el);
                }, b.inputmask.__valueSet = i, b.inputmask._valueSet = function(a, b) {
                    i.call(this.el, null === a || void 0 === a ? "" : b !== !0 && ja ? a.split("").reverse().join("") : a);
                }, void 0 === h && (h = function() {
                    return this.value;
                }, i = function(a) {
                    this.value = a;
                }, c(b.type), f(b));
            }
        }
        function Q(c, d, e, f) {
            function h() {
                if (g.keepStatic) {
                    n(!0);
                    var b, d = [], e = a.extend(!0, {}, m().validPositions);
                    for (b = o(); b >= 0; b--) {
                        var f = m().validPositions[b];
                        if (f && (null != f.match.fn && d.push(f.input), delete m().validPositions[b], void 0 !== f.alternation && f.locator[f.alternation] === r(b).locator[f.alternation])) break;
                    }
                    if (b > -1) for (;d.length > 0; ) {
                        m().p = E(o());
                        var h = new a.Event("keypress");
                        h.which = d.pop().charCodeAt(0), S.call(c, h, !0, !1, !1, m().p);
                    } else m().validPositions = a.extend(!0, {}, e);
                }
            }
            if ((g.numericInput || ja) && (d === b.keyCode.BACKSPACE ? d = b.keyCode.DELETE : d === b.keyCode.DELETE && (d = b.keyCode.BACKSPACE), 
            ja)) {
                var i = e.end;
                e.end = e.begin, e.begin = i;
            }
            d === b.keyCode.BACKSPACE && (e.end - e.begin < 1 || g.insertMode === !1) ? (e.begin = F(e.begin), 
            void 0 === m().validPositions[e.begin] || m().validPositions[e.begin].input !== g.groupSeparator && m().validPositions[e.begin].input !== g.radixPoint || e.begin--) : d === b.keyCode.DELETE && e.begin === e.end && (e.end = C(e.end) ? e.end + 1 : E(e.end) + 1, 
            void 0 === m().validPositions[e.begin] || m().validPositions[e.begin].input !== g.groupSeparator && m().validPositions[e.begin].input !== g.radixPoint || e.end++), 
            q(e.begin, e.end, !1, f), f !== !0 && h();
            var j = o(e.begin);
            j < e.begin ? (-1 === j && n(), m().p = E(j)) : f !== !0 && (m().p = e.begin);
        }
        function R(d) {
            var e = this, f = a(e), h = d.keyCode, i = L(e);
            if (h === b.keyCode.BACKSPACE || h === b.keyCode.DELETE || l && h === b.keyCode.BACKSPACE_SAFARI || d.ctrlKey && h === b.keyCode.X && !c("cut")) d.preventDefault(), 
            Q(e, h, i), H(e, x(), m().p, d, ea !== x().join("")), e.inputmask._valueGet() === w().join("") ? f.trigger("cleared") : O(x()) === !0 && f.trigger("complete"), 
            g.showTooltip && (e.title = g.tooltip || m().mask); else if (h === b.keyCode.END || h === b.keyCode.PAGE_DOWN) {
                d.preventDefault();
                var j = E(o());
                g.insertMode || j !== D() || d.shiftKey || j--, L(e, d.shiftKey ? i.begin : j, j, !0);
            } else h === b.keyCode.HOME && !d.shiftKey || h === b.keyCode.PAGE_UP ? (d.preventDefault(), 
            L(e, 0, d.shiftKey ? i.begin : 0, !0)) : (g.undoOnEscape && h === b.keyCode.ESCAPE || 90 === h && d.ctrlKey) && d.altKey !== !0 ? (J(e, !0, !1, ea.split("")), 
            f.trigger("click")) : h !== b.keyCode.INSERT || d.shiftKey || d.ctrlKey ? g.tabThrough === !0 && h === b.keyCode.TAB ? (d.shiftKey === !0 ? (null === s(i.begin).fn && (i.begin = E(i.begin)), 
            i.end = F(i.begin, !0), i.begin = F(i.end, !0)) : (i.begin = E(i.begin, !0), i.end = E(i.begin, !0), 
            i.end < D() && i.end--), i.begin < D() && (d.preventDefault(), L(e, i.begin, i.end))) : g.insertMode !== !1 || d.shiftKey || (h === b.keyCode.RIGHT ? setTimeout(function() {
                var a = L(e);
                L(e, a.begin);
            }, 0) : h === b.keyCode.LEFT && setTimeout(function() {
                var a = L(e);
                L(e, ja ? a.begin + 1 : a.begin - 1);
            }, 0)) : (g.insertMode = !g.insertMode, L(e, g.insertMode || i.begin !== D() ? i.begin : i.begin - 1));
            g.onKeyDown.call(this, d, x(), L(e).begin, g), ma = -1 !== a.inArray(h, g.ignorables);
        }
        function S(c, d, e, f, h) {
            var i = this, j = a(i), k = c.which || c.charCode || c.keyCode;
            if (!(d === !0 || c.ctrlKey && c.altKey) && (c.ctrlKey || c.metaKey || ma)) return k === b.keyCode.ENTER && ea !== x().join("") && (ea = x().join(""), 
            setTimeout(function() {
                j.trigger("change");
            }, 0)), !0;
            if (k) {
                46 === k && c.shiftKey === !1 && "," === g.radixPoint && (k = 44);
                var l, o = d ? {
                    begin: h,
                    end: h
                } : L(i), p = String.fromCharCode(k);
                m().writeOutBuffer = !0;
                var q = B(o, p, f);
                if (q !== !1) {
                    var r = q.pos;
                    if (n(!0), void 0 !== q.caret) l = q.caret; else {
                        var s = m().validPositions;
                        l = !g.keepStatic && (void 0 !== s[r + 1] && v(r + 1, s[r].locator.slice(), r).length > 1 || void 0 !== s[r].alternation) ? r + 1 : E(r);
                    }
                    m().p = l;
                }
                if (e !== !1) {
                    var t = this;
                    if (setTimeout(function() {
                        g.onKeyValidation.call(t, k, q, g);
                    }, 0), m().writeOutBuffer && q !== !1) {
                        var u = x();
                        H(i, u, g.numericInput && void 0 === q.caret ? F(l) : l, c, d !== !0), d !== !0 && setTimeout(function() {
                            O(u) === !0 && j.trigger("complete");
                        }, 0);
                    }
                }
                if (g.showTooltip && (i.title = g.tooltip || m().mask), c.preventDefault(), d) return q.forwardPosition = l, 
                q;
            }
        }
        function T(b) {
            var c, d = this, e = b.originalEvent || b, f = a(d), h = d.inputmask._valueGet(!0), i = L(d);
            ja && (c = i.end, i.end = i.begin, i.begin = c);
            var j = h.substr(0, i.begin), k = h.substr(i.end, h.length);
            j === (ja ? w().reverse() : w()).slice(0, i.begin).join("") && (j = ""), k === (ja ? w().reverse() : w()).slice(i.end).join("") && (k = ""), 
            ja && (c = j, j = k, k = c), window.clipboardData && window.clipboardData.getData ? h = j + window.clipboardData.getData("Text") + k : e.clipboardData && e.clipboardData.getData && (h = j + e.clipboardData.getData("text/plain") + k);
            var l = h;
            if (a.isFunction(g.onBeforePaste)) {
                if (l = g.onBeforePaste(h, g), l === !1) return b.preventDefault();
                l || (l = h);
            }
            return J(d, !1, !1, ja ? l.split("").reverse() : l.toString().split("")), H(d, x(), E(o()), b, !0), 
            O(x()) === !0 && f.trigger("complete"), b.preventDefault();
        }
        function U(c) {
            var d = this, e = d.inputmask._valueGet();
            if (x().join("") !== e) {
                var f = L(d);
                if (e = e.replace(new RegExp("(" + b.escapeRegex(w().join("")) + ")*"), ""), k) {
                    var g = e.replace(x().join(""), "");
                    if (1 === g.length) {
                        var h = new a.Event("keypress");
                        return h.which = g.charCodeAt(0), S.call(d, h, !0, !0, !1, m().validPositions[f.begin - 1] ? f.begin : f.begin - 1), 
                        !1;
                    }
                }
                if (f.begin > e.length && (L(d, e.length), f = L(d)), x().length - e.length !== 1 || e.charAt(f.begin) === x()[f.begin] || e.charAt(f.begin + 1) === x()[f.begin] || C(f.begin)) {
                    for (var i = o() + 1, j = x().slice(i).join(""); null === e.match(b.escapeRegex(j) + "$"); ) j = j.slice(1);
                    e = e.replace(j, ""), e = e.split(""), J(d, !0, !1, e), O(x()) === !0 && a(d).trigger("complete");
                } else c.keyCode = b.keyCode.BACKSPACE, R.call(d, c);
                c.preventDefault();
            }
        }
        function V(b) {
            var c = this, d = c.inputmask._valueGet();
            J(c, !0, !1, (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(d, g) || d : d).split("")), 
            ea = x().join(""), (g.clearMaskOnLostFocus || g.clearIncomplete) && c.inputmask._valueGet() === w().join("") && c.inputmask._valueSet("");
        }
        function W(a) {
            var b = this, c = b.inputmask._valueGet();
            g.showMaskOnFocus && (!g.showMaskOnHover || g.showMaskOnHover && "" === c) ? b.inputmask._valueGet() !== x().join("") && H(b, x(), E(o())) : na === !1 && L(b, E(o())), 
            g.positionCaretOnTab === !0 && setTimeout(function() {
                L(b, E(o()));
            }, 0), ea = x().join("");
        }
        function X(a) {
            var b = this;
            if (na = !1, g.clearMaskOnLostFocus && document.activeElement !== b) {
                var c = x().slice(), d = b.inputmask._valueGet();
                d !== b.getAttribute("placeholder") && "" !== d && (-1 === o() && d === w().join("") ? c = [] : N(c), 
                H(b, c));
            }
        }
        function Y(b) {
            function c(b) {
                if (g.radixFocus && "" !== g.radixPoint) {
                    var c = m().validPositions;
                    if (void 0 === c[b] || c[b].input === I(b)) {
                        if (b < E(-1)) return !0;
                        var d = a.inArray(g.radixPoint, x());
                        if (-1 !== d) {
                            for (var e in c) if (e > d && c[e].input !== I(e)) return !1;
                            return !0;
                        }
                    }
                }
                return !1;
            }
            var d = this;
            setTimeout(function() {
                if (document.activeElement === d) {
                    var b = L(d);
                    if (b.begin === b.end) if (c(b.begin)) L(d, g.numericInput ? E(a.inArray(g.radixPoint, x())) : a.inArray(g.radixPoint, x())); else {
                        var e = b.begin, f = o(e, !0), h = E(f);
                        if (h > e) L(d, C(e) || C(e - 1) ? e : E(e)); else {
                            var i = I(h);
                            ("" !== i && x()[h] !== i || !C(h, !0) && s(h).def === i) && (h = E(h)), L(d, h);
                        }
                    }
                }
            }, 0);
        }
        function Z(a) {
            var b = this;
            setTimeout(function() {
                L(b, 0, E(o()));
            }, 0);
        }
        function $(c) {
            var d = this, e = a(d), f = L(d), h = c.originalEvent || c, i = window.clipboardData || h.clipboardData, j = ja ? x().slice(f.end, f.begin) : x().slice(f.begin, f.end);
            i.setData("text", ja ? j.reverse().join("") : j.join("")), document.execCommand && document.execCommand("copy"), 
            Q(d, b.keyCode.DELETE, f), H(d, x(), m().p, c, ea !== x().join("")), d.inputmask._valueGet() === w().join("") && e.trigger("cleared"), 
            g.showTooltip && (d.title = g.tooltip || m().mask);
        }
        function _(b) {
            var c = a(this), d = this;
            if (d.inputmask) {
                var e = d.inputmask._valueGet(), f = x().slice();
                ea !== f.join("") && setTimeout(function() {
                    c.trigger("change"), ea = f.join("");
                }, 0), "" !== e && (g.clearMaskOnLostFocus && (-1 === o() && e === w().join("") ? f = [] : N(f)), 
                O(f) === !1 && (setTimeout(function() {
                    c.trigger("incomplete");
                }, 0), g.clearIncomplete && (n(), f = g.clearMaskOnLostFocus ? [] : w().slice())), 
                H(d, f, void 0, b));
            }
        }
        function aa(a) {
            var b = this;
            na = !0, document.activeElement !== b && g.showMaskOnHover && b.inputmask._valueGet() !== x().join("") && H(b, x());
        }
        function ba(a) {
            ea !== x().join("") && ga.trigger("change"), g.clearMaskOnLostFocus && -1 === o() && fa.inputmask._valueGet && fa.inputmask._valueGet() === w().join("") && fa.inputmask._valueSet(""), 
            g.removeMaskOnSubmit && (fa.inputmask._valueSet(fa.inputmask.unmaskedvalue(), !0), 
            setTimeout(function() {
                H(fa, x());
            }, 0));
        }
        function ca(a) {
            setTimeout(function() {
                ga.trigger("setvalue");
            }, 0);
        }
        function da(b) {
            if (fa = b, ga = a(fa), g.showTooltip && (fa.title = g.tooltip || m().mask), ("rtl" === fa.dir || g.rightAlign) && (fa.style.textAlign = "right"), 
            ("rtl" === fa.dir || g.numericInput) && (fa.dir = "ltr", fa.removeAttribute("dir"), 
            fa.inputmask.isRTL = !0, ja = !0), oa.off(fa), P(fa), d(fa, g) && (oa.on(fa, "submit", ba), 
            oa.on(fa, "reset", ca), oa.on(fa, "mouseenter", aa), oa.on(fa, "blur", _), oa.on(fa, "focus", W), 
            oa.on(fa, "mouseleave", X), oa.on(fa, "click", Y), oa.on(fa, "dblclick", Z), oa.on(fa, "paste", T), 
            oa.on(fa, "dragdrop", T), oa.on(fa, "drop", T), oa.on(fa, "cut", $), oa.on(fa, "complete", g.oncomplete), 
            oa.on(fa, "incomplete", g.onincomplete), oa.on(fa, "cleared", g.oncleared), oa.on(fa, "keydown", R), 
            oa.on(fa, "keypress", S), oa.on(fa, "input", U)), oa.on(fa, "setvalue", V), "" !== fa.inputmask._valueGet() || g.clearMaskOnLostFocus === !1 || document.activeElement === fa) {
                var c = a.isFunction(g.onBeforeMask) ? g.onBeforeMask(fa.inputmask._valueGet(), g) || fa.inputmask._valueGet() : fa.inputmask._valueGet();
                J(fa, !0, !1, c.split(""));
                var e = x().slice();
                ea = e.join(""), O(e) === !1 && g.clearIncomplete && n(), g.clearMaskOnLostFocus && document.activeElement !== fa && (-1 === o() ? e = [] : N(e)), 
                H(fa, e), document.activeElement === fa && L(fa, E(o()));
            }
        }
        var ea, fa, ga, ha, ia, ja = !1, ka = !1, la = !1, ma = !1, na = !0, oa = {
            on: function(c, d, e) {
                var f = function(c) {
                    if (void 0 === this.inputmask && "FORM" !== this.nodeName) {
                        var d = a.data(this, "_inputmask_opts");
                        d ? new b(d).mask(this) : oa.off(this);
                    } else {
                        if ("setvalue" === c.type || !(this.disabled || this.readOnly && !("keydown" === c.type && c.ctrlKey && 67 === c.keyCode || g.tabThrough === !1 && c.keyCode === b.keyCode.TAB))) {
                            switch (c.type) {
                              case "input":
                                if (la === !0) return la = !1, c.preventDefault();
                                break;

                              case "keydown":
                                ka = !1, la = !1;
                                break;

                              case "keypress":
                                if (ka === !0) return c.preventDefault();
                                ka = !0;
                                break;

                              case "click":
                                if (k) {
                                    var f = this;
                                    return setTimeout(function() {
                                        e.apply(f, arguments);
                                    }, 0), !1;
                                }
                            }
                            var h = e.apply(this, arguments);
                            return h === !1 && (c.preventDefault(), c.stopPropagation()), h;
                        }
                        c.preventDefault();
                    }
                };
                c.inputmask.events[d] = c.inputmask.events[d] || [], c.inputmask.events[d].push(f), 
                -1 !== a.inArray(d, [ "submit", "reset" ]) ? null != c.form && a(c.form).on(d, f) : a(c).on(d, f);
            },
            off: function(b, c) {
                if (b.inputmask && b.inputmask.events) {
                    var d;
                    c ? (d = [], d[c] = b.inputmask.events[c]) : d = b.inputmask.events, a.each(d, function(c, d) {
                        for (;d.length > 0; ) {
                            var e = d.pop();
                            -1 !== a.inArray(c, [ "submit", "reset" ]) ? null != b.form && a(b.form).off(c, e) : a(b).off(c, e);
                        }
                        delete b.inputmask.events[c];
                    });
                }
            }
        };
        if (void 0 !== e) switch (e.action) {
          case "isComplete":
            return fa = e.el, O(x());

          case "unmaskedvalue":
            return fa = e.el, void 0 !== fa && void 0 !== fa.inputmask ? (f = fa.inputmask.maskset, 
            g = fa.inputmask.opts, ja = fa.inputmask.isRTL) : (ia = e.value, g.numericInput && (ja = !0), 
            ia = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(ia, g) || ia : ia).split(""), 
            J(void 0, !1, !1, ja ? ia.reverse() : ia), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, x(), 0, g)), 
            K(fa);

          case "mask":
            fa = e.el, f = fa.inputmask.maskset, g = fa.inputmask.opts, ja = fa.inputmask.isRTL, 
            ea = x().join(""), da(fa);
            break;

          case "format":
            return g.numericInput && (ja = !0), ia = (a.isFunction(g.onBeforeMask) ? g.onBeforeMask(e.value, g) || e.value : e.value).split(""), 
            J(void 0, !1, !1, ja ? ia.reverse() : ia), a.isFunction(g.onBeforeWrite) && g.onBeforeWrite(void 0, x(), 0, g), 
            e.metadata ? {
                value: ja ? x().slice().reverse().join("") : x().join(""),
                metadata: h({
                    action: "getmetadata"
                }, f, g)
            } : ja ? x().slice().reverse().join("") : x().join("");

          case "isValid":
            g.numericInput && (ja = !0), e.value ? (ia = e.value.split(""), J(void 0, !1, !0, ja ? ia.reverse() : ia)) : e.value = x().join("");
            for (var pa = x(), qa = M(), ra = pa.length - 1; ra > qa && !C(ra); ra--) ;
            return pa.splice(qa, ra + 1 - qa), O(pa) && e.value === x().join("");

          case "getemptymask":
            return w().join("");

          case "remove":
            fa = e.el, ga = a(fa), f = fa.inputmask.maskset, g = fa.inputmask.opts, fa.inputmask._valueSet(K(fa)), 
            oa.off(fa);
            var sa;
            Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? (sa = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(fa), "value"), 
            sa && fa.inputmask.__valueGet && Object.defineProperty(fa, "value", {
                get: fa.inputmask.__valueGet,
                set: fa.inputmask.__valueSet,
                configurable: !0
            })) : document.__lookupGetter__ && fa.__lookupGetter__("value") && fa.inputmask.__valueGet && (fa.__defineGetter__("value", fa.inputmask.__valueGet), 
            fa.__defineSetter__("value", fa.inputmask.__valueSet)), fa.inputmask = void 0;
            break;

          case "getmetadata":
            if (a.isArray(f.metadata)) {
                for (var ta, ua = o(void 0, !0), va = ua; va >= 0; va--) if (m().validPositions[va] && void 0 !== m().validPositions[va].alternation) {
                    ta = m().validPositions[va].alternation;
                    break;
                }
                return void 0 !== ta ? f.metadata[m().validPositions[va].locator[ta]] : [];
            }
            return f.metadata;
        }
    }
    b.prototype = {
        defaults: {
            placeholder: "_",
            optionalmarker: {
                start: "[",
                end: "]"
            },
            quantifiermarker: {
                start: "{",
                end: "}"
            },
            groupmarker: {
                start: "(",
                end: ")"
            },
            alternatormarker: "|",
            escapeChar: "\\",
            mask: null,
            oncomplete: a.noop,
            onincomplete: a.noop,
            oncleared: a.noop,
            repeat: 0,
            greedy: !0,
            autoUnmask: !1,
            removeMaskOnSubmit: !1,
            clearMaskOnLostFocus: !0,
            insertMode: !0,
            clearIncomplete: !1,
            aliases: {},
            alias: null,
            onKeyDown: a.noop,
            onBeforeMask: null,
            onBeforePaste: function(b, c) {
                return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b;
            },
            onBeforeWrite: null,
            onUnMask: null,
            showMaskOnFocus: !0,
            showMaskOnHover: !0,
            onKeyValidation: a.noop,
            skipOptionalPartCharacter: " ",
            showTooltip: !1,
            tooltip: void 0,
            numericInput: !1,
            rightAlign: !1,
            undoOnEscape: !0,
            radixPoint: "",
            radixPointDefinitionSymbol: void 0,
            groupSeparator: "",
            radixFocus: !1,
            nojumps: !1,
            nojumpsThreshold: 0,
            keepStatic: null,
            positionCaretOnTab: !1,
            tabThrough: !1,
            supportsInputType: [ "text", "tel", "password" ],
            definitions: {
                9: {
                    validator: "[0-9]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                a: {
                    validator: "[A-Za-zÃƒï¿½Ã¯Â¿Â½-Ãƒâ€˜Ã¯Â¿Â½Ãƒï¿½Ã¯Â¿Â½Ãƒâ€˜Ã¢â‚¬ËœÃƒÆ’Ã¢â€šÂ¬-ÃƒÆ’Ã‚Â¿Ãƒâ€šÃ‚Âµ]",
                    cardinality: 1,
                    definitionSymbol: "*"
                },
                "*": {
                    validator: "[0-9A-Za-zÃƒï¿½Ã¯Â¿Â½-Ãƒâ€˜Ã¯Â¿Â½Ãƒï¿½Ã¯Â¿Â½Ãƒâ€˜Ã¢â‚¬ËœÃƒÆ’Ã¢â€šÂ¬-ÃƒÆ’Ã‚Â¿Ãƒâ€šÃ‚Âµ]",
                    cardinality: 1
                }
            },
            ignorables: [ 8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123 ],
            isComplete: null,
            canClearPosition: a.noop,
            postValidation: null,
            staticDefinitionSymbol: void 0,
            jitMasking: !1,
            nullable: !0
        },
        masksCache: {},
        mask: function(c) {
            var d = this;
            return "string" == typeof c && (c = document.getElementById(c) || document.querySelectorAll(c)), 
            c = c.nodeName ? [ c ] : c, a.each(c, function(c, e) {
                var i = a.extend(!0, {}, d.opts);
                f(e, i, a.extend(!0, {}, d.userOptions));
                var j = g(i, d.noMasksCache);
                void 0 !== j && (void 0 !== e.inputmask && e.inputmask.remove(), e.inputmask = new b(), 
                e.inputmask.opts = i, e.inputmask.noMasksCache = d.noMasksCache, e.inputmask.userOptions = a.extend(!0, {}, d.userOptions), 
                e.inputmask.el = e, e.inputmask.maskset = j, e.inputmask.isRTL = !1, a.data(e, "_inputmask_opts", i), 
                h({
                    action: "mask",
                    el: e
                }));
            }), c && c[0] ? c[0].inputmask || this : this;
        },
        option: function(b, c) {
            return "string" == typeof b ? this.opts[b] : "object" == typeof b ? (a.extend(this.userOptions, b), 
            this.el && c !== !0 && this.mask(this.el), this) : void 0;
        },
        unmaskedvalue: function(a) {
            return h({
                action: "unmaskedvalue",
                el: this.el,
                value: a
            }, this.el && this.el.inputmask ? this.el.inputmask.maskset : g(this.opts, this.noMasksCache), this.opts);
        },
        remove: function() {
            return this.el ? (h({
                action: "remove",
                el: this.el
            }), this.el.inputmask = void 0, this.el) : void 0;
        },
        getemptymask: function() {
            return h({
                action: "getemptymask"
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        },
        hasMaskedValue: function() {
            return !this.opts.autoUnmask;
        },
        isComplete: function() {
            return h({
                action: "isComplete",
                el: this.el
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        },
        getmetadata: function() {
            return h({
                action: "getmetadata"
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        },
        isValid: function(a) {
            return h({
                action: "isValid",
                value: a
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        },
        format: function(a, b) {
            return h({
                action: "format",
                value: a,
                metadata: b
            }, this.maskset || g(this.opts, this.noMasksCache), this.opts);
        }
    }, b.extendDefaults = function(c) {
        a.extend(!0, b.prototype.defaults, c);
    }, b.extendDefinitions = function(c) {
        a.extend(!0, b.prototype.defaults.definitions, c);
    }, b.extendAliases = function(c) {
        a.extend(!0, b.prototype.defaults.aliases, c);
    }, b.format = function(a, c, d) {
        return b(c).format(a, d);
    }, b.unmask = function(a, c) {
        return b(c).unmaskedvalue(a);
    }, b.isValid = function(a, c) {
        return b(c).isValid(a);
    }, b.remove = function(b) {
        a.each(b, function(a, b) {
            b.inputmask && b.inputmask.remove();
        });
    }, b.escapeRegex = function(a) {
        var b = [ "/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^" ];
        return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1");
    }, b.keyCode = {
        ALT: 18,
        BACKSPACE: 8,
        BACKSPACE_SAFARI: 127,
        CAPS_LOCK: 20,
        COMMA: 188,
        COMMAND: 91,
        COMMAND_LEFT: 91,
        COMMAND_RIGHT: 93,
        CONTROL: 17,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        INSERT: 45,
        LEFT: 37,
        MENU: 93,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SHIFT: 16,
        SPACE: 32,
        TAB: 9,
        UP: 38,
        WINDOWS: 91,
        X: 88
    };
    var i = navigator.userAgent, j = /mobile/i.test(i), k = /iemobile/i.test(i), l = /iphone/i.test(i) && !k;
    return /android.*safari.*/i.test(i) && !k, window.Inputmask = b, b;
}(jQuery), function(a, b) {
    return void 0 === a.fn.inputmask && (a.fn.inputmask = function(c, d) {
        var e, f = this[0];
        if (void 0 === d && (d = {}), "string" == typeof c) switch (c) {
          case "unmaskedvalue":
            return f && f.inputmask ? f.inputmask.unmaskedvalue() : a(f).val();

          case "remove":
            return this.each(function() {
                this.inputmask && this.inputmask.remove();
            });

          case "getemptymask":
            return f && f.inputmask ? f.inputmask.getemptymask() : "";

          case "hasMaskedValue":
            return f && f.inputmask ? f.inputmask.hasMaskedValue() : !1;

          case "isComplete":
            return f && f.inputmask ? f.inputmask.isComplete() : !0;

          case "getmetadata":
            return f && f.inputmask ? f.inputmask.getmetadata() : void 0;

          case "setvalue":
            a(f).val(d), f && void 0 !== f.inputmask && a(f).triggerHandler("setvalue");
            break;

          case "option":
            if ("string" != typeof d) return this.each(function() {
                return void 0 !== this.inputmask ? this.inputmask.option(d) : void 0;
            });
            if (f && void 0 !== f.inputmask) return f.inputmask.option(d);
            break;

          default:
            return d.alias = c, e = new b(d), this.each(function() {
                e.mask(this);
            });
        } else {
            if ("object" == typeof c) return e = new b(c), void 0 === c.mask && void 0 === c.alias ? this.each(function() {
                return void 0 !== this.inputmask ? this.inputmask.option(c) : void e.mask(this);
            }) : this.each(function() {
                e.mask(this);
            });
            if (void 0 === c) return this.each(function() {
                e = new b(d), e.mask(this);
            });
        }
    }), a.fn.inputmask;
}(jQuery, Inputmask), function(a, b) {
    return b.extendDefinitions({
        h: {
            validator: "[01][0-9]|2[0-3]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[0-2]",
                cardinality: 1
            } ]
        },
        s: {
            validator: "[0-5][0-9]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[0-5]",
                cardinality: 1
            } ]
        },
        d: {
            validator: "0[1-9]|[12][0-9]|3[01]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[0-3]",
                cardinality: 1
            } ]
        },
        m: {
            validator: "0[1-9]|1[012]",
            cardinality: 2,
            prevalidator: [ {
                validator: "[01]",
                cardinality: 1
            } ]
        },
        y: {
            validator: "(19|20)\\d{2}",
            cardinality: 4,
            prevalidator: [ {
                validator: "[12]",
                cardinality: 1
            }, {
                validator: "(19|20)",
                cardinality: 2
            }, {
                validator: "(19|20)\\d",
                cardinality: 3
            } ]
        }
    }), b.extendAliases({
        "dd/mm/yyyy": {
            mask: "1/2/y",
            placeholder: "dd/mm/yyyy",
            regex: {
                val1pre: new RegExp("[0-3]"),
                val1: new RegExp("0[1-9]|[12][0-9]|3[01]"),
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9]|3[01])" + c + "[01])");
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|[12][0-9])" + c + "(0[1-9]|1[012]))|(30" + c + "(0[13-9]|1[012]))|(31" + c + "(0[13578]|1[02]))");
                }
            },
            leapday: "29/02/",
            separator: "/",
            yearrange: {
                minyear: 1900,
                maxyear: 2099
            },
            isInYearRange: function(a, b, c) {
                if (isNaN(a)) return !1;
                var d = parseInt(a.concat(b.toString().slice(a.length))), e = parseInt(a.concat(c.toString().slice(a.length)));
                return (isNaN(d) ? !1 : d >= b && c >= d) || (isNaN(e) ? !1 : e >= b && c >= e);
            },
            determinebaseyear: function(a, b, c) {
                var d = new Date().getFullYear();
                if (a > d) return a;
                if (d > b) {
                    for (var e = b.toString().slice(0, 2), f = b.toString().slice(2, 4); e + c > b; ) e--;
                    var g = e + f;
                    return a > g ? a : g;
                }
                if (d >= a && b >= d) {
                    for (var h = d.toString().slice(0, 2); h + c > b; ) h--;
                    var i = h + c;
                    return a > i ? a : i;
                }
                return d;
            },
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();
                    g.val(h.getDate().toString() + (h.getMonth() + 1).toString() + h.getFullYear().toString()), 
                    g.trigger("setvalue");
                }
            },
            getFrontValue: function(a, b, c) {
                for (var d = 0, e = 0, f = 0; f < a.length && "2" !== a.charAt(f); f++) {
                    var g = c.definitions[a.charAt(f)];
                    g ? (d += e, e = g.cardinality) : e++;
                }
                return b.join("").substr(d, e);
            },
            definitions: {
                1: {
                    validator: function(a, b, c, d, e) {
                        var f = e.regex.val1.test(a);
                        return d || f || a.charAt(1) !== e.separator && -1 === "-./".indexOf(a.charAt(1)) || !(f = e.regex.val1.test("0" + a.charAt(0))) ? f : (b.buffer[c - 1] = "0", 
                        {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        });
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(a, b, c, d, e) {
                            var f = a;
                            isNaN(b.buffer[c + 1]) || (f += b.buffer[c + 1]);
                            var g = 1 === f.length ? e.regex.val1pre.test(f) : e.regex.val1.test(f);
                            if (!d && !g) {
                                if (g = e.regex.val1.test(a + "0")) return b.buffer[c] = a, b.buffer[++c] = "0", 
                                {
                                    pos: c,
                                    c: "0"
                                };
                                if (g = e.regex.val1.test("0" + a)) return b.buffer[c] = "0", c++, {
                                    pos: c
                                };
                            }
                            return g;
                        },
                        cardinality: 1
                    } ]
                },
                2: {
                    validator: function(a, b, c, d, e) {
                        var f = e.getFrontValue(b.mask, b.buffer, e);
                        -1 !== f.indexOf(e.placeholder[0]) && (f = "01" + e.separator);
                        var g = e.regex.val2(e.separator).test(f + a);
                        if (!d && !g && (a.charAt(1) === e.separator || -1 !== "-./".indexOf(a.charAt(1))) && (g = e.regex.val2(e.separator).test(f + "0" + a.charAt(0)))) return b.buffer[c - 1] = "0", 
                        {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            pos: c,
                            c: a.charAt(0)
                        };
                        if (e.mask.indexOf("2") === e.mask.length - 1 && g) {
                            var h = b.buffer.join("").substr(4, 4) + a;
                            if (h !== e.leapday) return !0;
                            var i = parseInt(b.buffer.join("").substr(0, 4), 10);
                            return i % 4 === 0 ? i % 100 === 0 ? i % 400 === 0 : !0 : !1;
                        }
                        return g;
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(a, b, c, d, e) {
                            isNaN(b.buffer[c + 1]) || (a += b.buffer[c + 1]);
                            var f = e.getFrontValue(b.mask, b.buffer, e);
                            -1 !== f.indexOf(e.placeholder[0]) && (f = "01" + e.separator);
                            var g = 1 === a.length ? e.regex.val2pre(e.separator).test(f + a) : e.regex.val2(e.separator).test(f + a);
                            return d || g || !(g = e.regex.val2(e.separator).test(f + "0" + a)) ? g : (b.buffer[c] = "0", 
                            c++, {
                                pos: c
                            });
                        },
                        cardinality: 1
                    } ]
                },
                y: {
                    validator: function(a, b, c, d, e) {
                        if (e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear)) {
                            var f = b.buffer.join("").substr(0, 6);
                            if (f !== e.leapday) return !0;
                            var g = parseInt(a, 10);
                            return g % 4 === 0 ? g % 100 === 0 ? g % 400 === 0 : !0 : !1;
                        }
                        return !1;
                    },
                    cardinality: 4,
                    prevalidator: [ {
                        validator: function(a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 1);
                                if (f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), 
                                {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a + "0").toString().slice(0, 2), 
                                f = e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(0), 
                                b.buffer[c++] = g.charAt(1), {
                                    pos: c
                                };
                            }
                            return f;
                        },
                        cardinality: 1
                    }, {
                        validator: function(a, b, c, d, e) {
                            var f = e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                            if (!d && !f) {
                                var g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2);
                                if (f = e.isInYearRange(a[0] + g[1] + a[1], e.yearrange.minyear, e.yearrange.maxyear)) return b.buffer[c++] = g.charAt(1), 
                                {
                                    pos: c
                                };
                                if (g = e.determinebaseyear(e.yearrange.minyear, e.yearrange.maxyear, a).toString().slice(0, 2), 
                                e.isInYearRange(g + a, e.yearrange.minyear, e.yearrange.maxyear)) {
                                    var h = b.buffer.join("").substr(0, 6);
                                    if (h !== e.leapday) f = !0; else {
                                        var i = parseInt(a, 10);
                                        f = i % 4 === 0 ? i % 100 === 0 ? i % 400 === 0 : !0 : !1;
                                    }
                                } else f = !1;
                                if (f) return b.buffer[c - 1] = g.charAt(0), b.buffer[c++] = g.charAt(1), b.buffer[c++] = a.charAt(0), 
                                {
                                    refreshFromBuffer: {
                                        start: c - 3,
                                        end: c
                                    },
                                    pos: c
                                };
                            }
                            return f;
                        },
                        cardinality: 2
                    }, {
                        validator: function(a, b, c, d, e) {
                            return e.isInYearRange(a, e.yearrange.minyear, e.yearrange.maxyear);
                        },
                        cardinality: 3
                    } ]
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        "mm/dd/yyyy": {
            placeholder: "mm/dd/yyyy",
            alias: "dd/mm/yyyy",
            regex: {
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])");
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), 
                    g.trigger("setvalue");
                }
            }
        },
        "yyyy/mm/dd": {
            mask: "y/1/2",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            leapday: "/02/29",
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();
                    g.val(h.getFullYear().toString() + (h.getMonth() + 1).toString() + h.getDate().toString()), 
                    g.trigger("setvalue");
                }
            }
        },
        "dd.mm.yyyy": {
            mask: "1.2.y",
            placeholder: "dd.mm.yyyy",
            leapday: "29.02.",
            separator: ".",
            alias: "dd/mm/yyyy"
        },
        "dd-mm-yyyy": {
            mask: "1-2-y",
            placeholder: "dd-mm-yyyy",
            leapday: "29-02-",
            separator: "-",
            alias: "dd/mm/yyyy"
        },
        "mm.dd.yyyy": {
            mask: "1.2.y",
            placeholder: "mm.dd.yyyy",
            leapday: "02.29.",
            separator: ".",
            alias: "mm/dd/yyyy"
        },
        "mm-dd-yyyy": {
            mask: "1-2-y",
            placeholder: "mm-dd-yyyy",
            leapday: "02-29-",
            separator: "-",
            alias: "mm/dd/yyyy"
        },
        "yyyy.mm.dd": {
            mask: "y.1.2",
            placeholder: "yyyy.mm.dd",
            leapday: ".02.29",
            separator: ".",
            alias: "yyyy/mm/dd"
        },
        "yyyy-mm-dd": {
            mask: "y-1-2",
            placeholder: "yyyy-mm-dd",
            leapday: "-02-29",
            separator: "-",
            alias: "yyyy/mm/dd"
        },
        datetime: {
            mask: "1/2/y h:s",
            placeholder: "dd/mm/yyyy hh:mm",
            alias: "dd/mm/yyyy",
            regex: {
                hrspre: new RegExp("[012]"),
                hrs24: new RegExp("2[0-4]|1[3-9]"),
                hrs: new RegExp("[01][0-9]|2[0-4]"),
                ampm: new RegExp("^[a|p|A|P][m|M]"),
                mspre: new RegExp("[0-5]"),
                ms: new RegExp("[0-5][0-9]")
            },
            timeseparator: ":",
            hourFormat: "24",
            definitions: {
                h: {
                    validator: function(a, b, c, d, e) {
                        if ("24" === e.hourFormat && 24 === parseInt(a, 10)) return b.buffer[c - 1] = "0", 
                        b.buffer[c] = "0", {
                            refreshFromBuffer: {
                                start: c - 1,
                                end: c
                            },
                            c: "0"
                        };
                        var f = e.regex.hrs.test(a);
                        if (!d && !f && (a.charAt(1) === e.timeseparator || -1 !== "-.:".indexOf(a.charAt(1))) && (f = e.regex.hrs.test("0" + a.charAt(0)))) return b.buffer[c - 1] = "0", 
                        b.buffer[c] = a.charAt(0), c++, {
                            refreshFromBuffer: {
                                start: c - 2,
                                end: c
                            },
                            pos: c,
                            c: e.timeseparator
                        };
                        if (f && "24" !== e.hourFormat && e.regex.hrs24.test(a)) {
                            var g = parseInt(a, 10);
                            return 24 === g ? (b.buffer[c + 5] = "a", b.buffer[c + 6] = "m") : (b.buffer[c + 5] = "p", 
                            b.buffer[c + 6] = "m"), g -= 12, 10 > g ? (b.buffer[c] = g.toString(), b.buffer[c - 1] = "0") : (b.buffer[c] = g.toString().charAt(1), 
                            b.buffer[c - 1] = g.toString().charAt(0)), {
                                refreshFromBuffer: {
                                    start: c - 1,
                                    end: c + 6
                                },
                                c: b.buffer[c]
                            };
                        }
                        return f;
                    },
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(a, b, c, d, e) {
                            var f = e.regex.hrspre.test(a);
                            return d || f || !(f = e.regex.hrs.test("0" + a)) ? f : (b.buffer[c] = "0", c++, 
                            {
                                pos: c
                            });
                        },
                        cardinality: 1
                    } ]
                },
                s: {
                    validator: "[0-5][0-9]",
                    cardinality: 2,
                    prevalidator: [ {
                        validator: function(a, b, c, d, e) {
                            var f = e.regex.mspre.test(a);
                            return d || f || !(f = e.regex.ms.test("0" + a)) ? f : (b.buffer[c] = "0", c++, 
                            {
                                pos: c
                            });
                        },
                        cardinality: 1
                    } ]
                },
                t: {
                    validator: function(a, b, c, d, e) {
                        return e.regex.ampm.test(a + "m");
                    },
                    casing: "lower",
                    cardinality: 1
                }
            },
            insertMode: !1,
            autoUnmask: !1
        },
        datetime12: {
            mask: "1/2/y h:s t\\m",
            placeholder: "dd/mm/yyyy hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "mm/dd/yyyy hh:mm xm": {
            mask: "1/2/y h:s t\\m",
            placeholder: "mm/dd/yyyy hh:mm xm",
            alias: "datetime12",
            regex: {
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[13-9]|1[012])" + c + "[0-3])|(02" + c + "[0-2])");
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[13-9]|1[012])" + c + "30)|((0[13578]|1[02])" + c + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            leapday: "02/29/",
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey && c.keyCode === b.keyCode.RIGHT) {
                    var h = new Date();
                    g.val((h.getMonth() + 1).toString() + h.getDate().toString() + h.getFullYear().toString()), 
                    g.trigger("setvalue");
                }
            }
        },
        "hh:mm t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "h:s t": {
            mask: "h:s t\\m",
            placeholder: "hh:mm xm",
            alias: "datetime",
            hourFormat: "12"
        },
        "hh:mm:ss": {
            mask: "h:s:s",
            placeholder: "hh:mm:ss",
            alias: "datetime",
            autoUnmask: !1
        },
        "hh:mm": {
            mask: "h:s",
            placeholder: "hh:mm",
            alias: "datetime",
            autoUnmask: !1
        },
        date: {
            alias: "dd/mm/yyyy"
        },
        "mm/yyyy": {
            mask: "1/y",
            placeholder: "mm/yyyy",
            leapday: "donotuse",
            separator: "/",
            alias: "mm/dd/yyyy"
        },
        shamsi: {
            regex: {
                val2pre: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "[0-3])");
                },
                val2: function(a) {
                    var c = b.escapeRegex.call(this, a);
                    return new RegExp("((0[1-9]|1[012])" + c + "(0[1-9]|[12][0-9]))|((0[1-9]|1[012])" + c + "30)|((0[1-6])" + c + "31)");
                },
                val1pre: new RegExp("[01]"),
                val1: new RegExp("0[1-9]|1[012]")
            },
            yearrange: {
                minyear: 1300,
                maxyear: 1499
            },
            mask: "y/1/2",
            leapday: "/12/30",
            placeholder: "yyyy/mm/dd",
            alias: "mm/dd/yyyy",
            clearIncomplete: !0
        }
    }), b;
}(jQuery, Inputmask), function(a, b) {
    return b.extendDefinitions({
        A: {
            validator: "[A-Za-zÃƒï¿½Ã¯Â¿Â½-Ãƒâ€˜Ã¯Â¿Â½Ãƒï¿½Ã¯Â¿Â½Ãƒâ€˜Ã¢â‚¬ËœÃƒÆ’Ã¢â€šÂ¬-ÃƒÆ’Ã‚Â¿Ãƒâ€šÃ‚Âµ]",
            cardinality: 1,
            casing: "upper"
        },
        "&": {
            validator: "[0-9A-Za-zÃƒï¿½Ã¯Â¿Â½-Ãƒâ€˜Ã¯Â¿Â½Ãƒï¿½Ã¯Â¿Â½Ãƒâ€˜Ã¢â‚¬ËœÃƒÆ’Ã¢â€šÂ¬-ÃƒÆ’Ã‚Â¿Ãƒâ€šÃ‚Âµ]",
            cardinality: 1,
            casing: "upper"
        },
        "#": {
            validator: "[0-9A-Fa-f]",
            cardinality: 1,
            casing: "upper"
        }
    }), b.extendAliases({
        url: {
            definitions: {
                i: {
                    validator: ".",
                    cardinality: 1
                }
            },
            mask: "(\\http://)|(\\http\\s://)|(ftp://)|(ftp\\s://)i{+}",
            insertMode: !1,
            autoUnmask: !1
        },
        ip: {
            mask: "i[i[i]].i[i[i]].i[i[i]].i[i[i]]",
            definitions: {
                i: {
                    validator: function(a, b, c, d, e) {
                        return c - 1 > -1 && "." !== b.buffer[c - 1] ? (a = b.buffer[c - 1] + a, a = c - 2 > -1 && "." !== b.buffer[c - 2] ? b.buffer[c - 2] + a : "0" + a) : a = "00" + a, 
                        new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]").test(a);
                    },
                    cardinality: 1
                }
            },
            onUnMask: function(a, b, c) {
                return a;
            }
        },
        email: {
            mask: "*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",
            greedy: !1,
            onBeforePaste: function(a, b) {
                return a = a.toLowerCase(), a.replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~-]",
                    cardinality: 1,
                    casing: "lower"
                },
                "-": {
                    validator: "[0-9A-Za-z-]",
                    cardinality: 1,
                    casing: "lower"
                }
            },
            onUnMask: function(a, b, c) {
                return a;
            }
        },
        mac: {
            mask: "##:##:##:##:##:##"
        },
        vin: {
            mask: "V{13}9{4}",
            definitions: {
                V: {
                    validator: "[A-HJ-NPR-Za-hj-npr-z\\d]",
                    cardinality: 1,
                    casing: "upper"
                }
            },
            clearIncomplete: !0,
            autoUnmask: !0
        }
    }), b;
}(jQuery, Inputmask), function(a, b) {
    return b.extendAliases({
        numeric: {
            mask: function(a) {
                function c(b) {
                    for (var c = "", d = 0; d < b.length; d++) c += a.definitions[b.charAt(d)] || a.optionalmarker.start === b.charAt(d) || a.optionalmarker.end === b.charAt(d) || a.quantifiermarker.start === b.charAt(d) || a.quantifiermarker.end === b.charAt(d) || a.groupmarker.start === b.charAt(d) || a.groupmarker.end === b.charAt(d) || a.alternatormarker === b.charAt(d) ? "\\" + b.charAt(d) : b.charAt(d);
                    return c;
                }
                if (0 !== a.repeat && isNaN(a.integerDigits) && (a.integerDigits = a.repeat), a.repeat = 0, 
                a.groupSeparator === a.radixPoint && ("." === a.radixPoint ? a.groupSeparator = "," : "," === a.radixPoint ? a.groupSeparator = "." : a.groupSeparator = ""), 
                " " === a.groupSeparator && (a.skipOptionalPartCharacter = void 0), a.autoGroup = a.autoGroup && "" !== a.groupSeparator, 
                a.autoGroup && ("string" == typeof a.groupSize && isFinite(a.groupSize) && (a.groupSize = parseInt(a.groupSize)), 
                isFinite(a.integerDigits))) {
                    var d = Math.floor(a.integerDigits / a.groupSize), e = a.integerDigits % a.groupSize;
                    a.integerDigits = parseInt(a.integerDigits) + (0 === e ? d - 1 : d), a.integerDigits < 1 && (a.integerDigits = "*");
                }
                a.placeholder.length > 1 && (a.placeholder = a.placeholder.charAt(0)), a.radixFocus = a.radixFocus && "" !== a.placeholder && a.integerOptional === !0, 
                a.definitions[";"] = a.definitions["~"], a.definitions[";"].definitionSymbol = "~", 
                a.numericInput === !0 && (a.radixFocus = !1, a.digitsOptional = !1, isNaN(a.digits) && (a.digits = 2), 
                a.decimalProtect = !1);
                var f = c(a.prefix);
                return f += "[+]", f += a.integerOptional === !0 ? "~{1," + a.integerDigits + "}" : "~{" + a.integerDigits + "}", 
                void 0 !== a.digits && (isNaN(a.digits) || parseInt(a.digits) > 0) && (a.decimalProtect && (a.radixPointDefinitionSymbol = ":"), 
                f += a.digitsOptional ? "[" + (a.decimalProtect ? ":" : a.radixPoint) + ";{1," + a.digits + "}]" : (a.decimalProtect ? ":" : a.radixPoint) + ";{" + a.digits + "}"), 
                f += "[-]", f += c(a.suffix), a.greedy = !1, null !== a.min && (a.min = a.min.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), 
                "," === a.radixPoint && (a.min = a.min.replace(a.radixPoint, "."))), null !== a.max && (a.max = a.max.toString().replace(new RegExp(b.escapeRegex(a.groupSeparator), "g"), ""), 
                "," === a.radixPoint && (a.max = a.max.replace(a.radixPoint, "."))), f;
            },
            placeholder: "",
            greedy: !1,
            digits: "*",
            digitsOptional: !0,
            radixPoint: ".",
            radixFocus: !0,
            groupSize: 3,
            groupSeparator: "",
            autoGroup: !1,
            allowPlus: !0,
            allowMinus: !0,
            negationSymbol: {
                front: "-",
                back: ""
            },
            integerDigits: "+",
            integerOptional: !0,
            prefix: "",
            suffix: "",
            rightAlign: !0,
            decimalProtect: !0,
            min: null,
            max: null,
            step: 1,
            insertMode: !0,
            autoUnmask: !1,
            unmaskAsNumber: !1,
            postFormat: function(c, d, e) {
                e.numericInput === !0 && (c = c.reverse(), isFinite(d) && (d = c.join("").length - d - 1));
                var f, g, h = !1;
                c.length >= e.suffix.length && c.join("").indexOf(e.suffix) === c.length - e.suffix.length && (c.length = c.length - e.suffix.length, 
                h = !0), d = d >= c.length ? c.length - 1 : d < e.prefix.length ? e.prefix.length : d;
                var i = !1, j = c[d], k = c.slice();
                j === e.groupSeparator && (k.splice(d--, 1), j = k[d]), j !== e.radixPoint && j !== e.negationSymbol.front && j !== e.negationSymbol.back && (k[d] = "?");
                var l = k.join(""), m = l;
                if (l.length > 0 && e.autoGroup || -1 !== l.indexOf(e.groupSeparator)) {
                    var n = b.escapeRegex(e.groupSeparator);
                    i = 0 === l.indexOf(e.groupSeparator), l = l.replace(new RegExp(n, "g"), "");
                    var o = l.split(e.radixPoint);
                    if (l = "" === e.radixPoint ? l : o[0], l !== e.prefix + "?0" && l.length >= e.groupSize + e.prefix.length) for (var p = new RegExp("([-+]?[\\d?]+)([\\d?]{" + e.groupSize + "})"); p.test(l) && "" !== e.groupSeparator; ) l = l.replace(p, "$1" + e.groupSeparator + "$2"), 
                    l = l.replace(e.groupSeparator + e.groupSeparator, e.groupSeparator);
                    "" !== e.radixPoint && o.length > 1 && (l += e.radixPoint + o[1]);
                }
                for (i = m !== l, c.length = l.length, f = 0, g = l.length; g > f; f++) c[f] = l.charAt(f);
                var q = a.inArray("?", c);
                if (-1 === q && (q = a.inArray(j, c)), c[q] = j, !i && h) for (f = 0, g = e.suffix.length; g > f; f++) c.push(e.suffix.charAt(f));
                return q = e.numericInput && isFinite(d) ? c.join("").length - q - 1 : q, e.numericInput && (c = c.reverse(), 
                a.inArray(e.radixPoint, c) < q && c.join("").length - e.suffix.length !== q && (q -= 1)), 
                {
                    pos: q,
                    refreshFromBuffer: i,
                    buffer: c
                };
            },
            onBeforeWrite: function(c, d, e, f) {
                var g;
                if (c && ("blur" === c.type || "checkval" === c.type || "keydown" === c.type)) {
                    var h = f.numericInput ? d.slice().reverse().join("") : d.join(""), i = h.replace(f.prefix, "");
                    i = i.replace(f.suffix, ""), i = i.replace(new RegExp(b.escapeRegex(f.groupSeparator), "g"), ""), 
                    "," === f.radixPoint && (i = i.replace(f.radixPoint, "."));
                    var j = i.match(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"));
                    if (j = null !== j && 1 === j.length, i = i.replace(new RegExp("[-" + b.escapeRegex(f.negationSymbol.front) + "]", "g"), ""), 
                    i = i.replace(new RegExp(b.escapeRegex(f.negationSymbol.back) + "$"), ""), isNaN(f.placeholder) && (i = i.replace(new RegExp(b.escapeRegex(f.placeholder), "g"), "")), 
                    i = i === f.negationSymbol.front ? i + "0" : i, "" !== i && isFinite(i)) {
                        var k = parseFloat(i), l = j ? -1 * k : k;
                        if (null !== f.min && isFinite(f.min) && l < parseFloat(f.min) ? (k = Math.abs(f.min), 
                        j = f.min < 0, h = void 0) : null !== f.max && isFinite(f.max) && l > parseFloat(f.max) && (k = Math.abs(f.max), 
                        j = f.max < 0, h = void 0), i = k.toString().replace(".", f.radixPoint).split(""), 
                        isFinite(f.digits)) {
                            var m = a.inArray(f.radixPoint, i), n = a.inArray(f.radixPoint, h);
                            -1 === m && (i.push(f.radixPoint), m = i.length - 1);
                            for (var o = 1; o <= f.digits; o++) f.digitsOptional || void 0 !== i[m + o] && i[m + o] !== f.placeholder.charAt(0) ? -1 !== n && void 0 !== h[n + o] && (i[m + o] = i[m + o] || h[n + o]) : i[m + o] = "0";
                            i[i.length - 1] === f.radixPoint && delete i[i.length - 1];
                        }
                        if (k.toString() !== i && k.toString() + "." !== i || j) return !j || 0 === k && "blur" === c.type || (i.unshift(f.negationSymbol.front), 
                        i.push(f.negationSymbol.back)), i = (f.prefix + i.join("")).split(""), f.numericInput && (i = i.reverse()), 
                        g = f.postFormat(i, f.numericInput ? e : e - 1, f), g.buffer && (g.refreshFromBuffer = g.buffer.join("") !== d.join("")), 
                        g;
                    }
                }
                return f.autoGroup ? (g = f.postFormat(d, f.numericInput ? e : e - 1, f), g.caret = e <= f.prefix.length ? g.pos : g.pos + 1, 
                g) : void 0;
            },
            regex: {
                integerPart: function(a) {
                    return new RegExp("[" + b.escapeRegex(a.negationSymbol.front) + "+]?\\d+");
                },
                integerNPart: function(a) {
                    return new RegExp("[\\d" + b.escapeRegex(a.groupSeparator) + b.escapeRegex(a.placeholder.charAt(0)) + "]+");
                }
            },
            signHandler: function(a, b, c, d, e) {
                if (!d && e.allowMinus && "-" === a || e.allowPlus && "+" === a) {
                    var f = b.buffer.join("").match(e.regex.integerPart(e));
                    if (f && f[0].length > 0) return b.buffer[f.index] === ("-" === a ? "+" : e.negationSymbol.front) ? "-" === a ? "" !== e.negationSymbol.back ? {
                        pos: f.index,
                        c: e.negationSymbol.front,
                        remove: f.index,
                        caret: c,
                        insert: {
                            pos: b.buffer.length - e.suffix.length - 1,
                            c: e.negationSymbol.back
                        }
                    } : {
                        pos: f.index,
                        c: e.negationSymbol.front,
                        remove: f.index,
                        caret: c
                    } : "" !== e.negationSymbol.back ? {
                        pos: f.index,
                        c: "+",
                        remove: [ f.index, b.buffer.length - e.suffix.length - 1 ],
                        caret: c
                    } : {
                        pos: f.index,
                        c: "+",
                        remove: f.index,
                        caret: c
                    } : b.buffer[f.index] === ("-" === a ? e.negationSymbol.front : "+") ? "-" === a && "" !== e.negationSymbol.back ? {
                        remove: [ f.index, b.buffer.length - e.suffix.length - 1 ],
                        caret: c - 1
                    } : {
                        remove: f.index,
                        caret: c - 1
                    } : "-" === a ? "" !== e.negationSymbol.back ? {
                        pos: f.index,
                        c: e.negationSymbol.front,
                        caret: c + 1,
                        insert: {
                            pos: b.buffer.length - e.suffix.length,
                            c: e.negationSymbol.back
                        }
                    } : {
                        pos: f.index,
                        c: e.negationSymbol.front,
                        caret: c + 1
                    } : {
                        pos: f.index,
                        c: a,
                        caret: c + 1
                    };
                }
                return !1;
            },
            radixHandler: function(b, c, d, e, f) {
                if (!e && f.numericInput !== !0 && b === f.radixPoint && void 0 !== f.digits && (isNaN(f.digits) || parseInt(f.digits) > 0)) {
                    var g = a.inArray(f.radixPoint, c.buffer), h = c.buffer.join("").match(f.regex.integerPart(f));
                    if (-1 !== g && c.validPositions[g]) return c.validPositions[g - 1] ? {
                        caret: g + 1
                    } : {
                        pos: h.index,
                        c: h[0],
                        caret: g + 1
                    };
                    if (!h || "0" === h[0] && h.index + 1 !== d) return c.buffer[h ? h.index : d] = "0", 
                    {
                        pos: (h ? h.index : d) + 1,
                        c: f.radixPoint
                    };
                }
                return !1;
            },
            leadingZeroHandler: function(b, c, d, e, f, g) {
                if (!e) if (f.numericInput === !0) {
                    var h = c.buffer.slice("").reverse(), i = h[f.prefix.length];
                    if ("0" === i && void 0 === c.validPositions[d - 1]) return {
                        pos: d,
                        remove: h.length - f.prefix.length - 1
                    };
                } else {
                    var j = a.inArray(f.radixPoint, c.buffer), k = c.buffer.slice(0, -1 !== j ? j : void 0).join("").match(f.regex.integerNPart(f));
                    if (k && (-1 === j || j >= d)) {
                        var l = -1 === j ? 0 : parseInt(c.buffer.slice(j + 1).join(""));
                        if (0 === k[0].indexOf("" !== f.placeholder ? f.placeholder.charAt(0) : "0") && (k.index + 1 === d || g !== !0 && 0 === l)) return c.buffer.splice(k.index, 1), 
                        {
                            pos: k.index,
                            remove: k.index
                        };
                        if ("0" === b && d <= k.index && k[0] !== f.groupSeparator) return !1;
                    }
                }
                return !0;
            },
            definitions: {
                "~": {
                    validator: function(c, d, e, f, g, h) {
                        var i = g.signHandler(c, d, e, f, g);
                        if (!i && (i = g.radixHandler(c, d, e, f, g), !i && (i = f ? new RegExp("[0-9" + b.escapeRegex(g.groupSeparator) + "]").test(c) : new RegExp("[0-9]").test(c), 
                        i === !0 && (i = g.leadingZeroHandler(c, d, e, f, g, h), i === !0)))) {
                            var j = a.inArray(g.radixPoint, d.buffer);
                            i = -1 !== j && (g.digitsOptional === !1 || d.validPositions[e]) && g.numericInput !== !0 && e > j && !f ? {
                                pos: e,
                                remove: e
                            } : {
                                pos: e
                            };
                        }
                        return i;
                    },
                    cardinality: 1
                },
                "+": {
                    validator: function(a, b, c, d, e) {
                        var f = e.signHandler(a, b, c, d, e);
                        return !f && (d && e.allowMinus && a === e.negationSymbol.front || e.allowMinus && "-" === a || e.allowPlus && "+" === a) && (f = d || "-" !== a ? !0 : "" !== e.negationSymbol.back ? {
                            pos: c,
                            c: "-" === a ? e.negationSymbol.front : "+",
                            caret: c + 1,
                            insert: {
                                pos: b.buffer.length,
                                c: e.negationSymbol.back
                            }
                        } : {
                            pos: c,
                            c: "-" === a ? e.negationSymbol.front : "+",
                            caret: c + 1
                        }), f;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                "-": {
                    validator: function(a, b, c, d, e) {
                        var f = e.signHandler(a, b, c, d, e);
                        return !f && d && e.allowMinus && a === e.negationSymbol.back && (f = !0), f;
                    },
                    cardinality: 1,
                    placeholder: ""
                },
                ":": {
                    validator: function(a, c, d, e, f) {
                        var g = f.signHandler(a, c, d, e, f);
                        if (!g) {
                            var h = "[" + b.escapeRegex(f.radixPoint) + "]";
                            g = new RegExp(h).test(a), g && c.validPositions[d] && c.validPositions[d].match.placeholder === f.radixPoint && (g = {
                                caret: d + 1
                            });
                        }
                        return g ? {
                            c: f.radixPoint
                        } : g;
                    },
                    cardinality: 1,
                    placeholder: function(a) {
                        return a.radixPoint;
                    }
                }
            },
            onUnMask: function(a, c, d) {
                var e = a.replace(d.prefix, "");
                return e = e.replace(d.suffix, ""), e = e.replace(new RegExp(b.escapeRegex(d.groupSeparator), "g"), ""), 
                d.unmaskAsNumber ? ("" !== d.radixPoint && -1 !== e.indexOf(d.radixPoint) && (e = e.replace(b.escapeRegex.call(this, d.radixPoint), ".")), 
                Number(e)) : e;
            },
            isComplete: function(a, c) {
                var d = a.join(""), e = a.slice();
                if (c.postFormat(e, 0, c), e.join("") !== d) return !1;
                var f = d.replace(c.prefix, "");
                return f = f.replace(c.suffix, ""), f = f.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), ""), 
                "," === c.radixPoint && (f = f.replace(b.escapeRegex(c.radixPoint), ".")), isFinite(f);
            },
            onBeforeMask: function(a, c) {
                if ("" !== c.radixPoint && isFinite(a)) a = a.toString().replace(".", c.radixPoint); else {
                    var d = a.match(/,/g), e = a.match(/\./g);
                    e && d ? e.length > d.length ? (a = a.replace(/\./g, ""), a = a.replace(",", c.radixPoint)) : d.length > e.length ? (a = a.replace(/,/g, ""), 
                    a = a.replace(".", c.radixPoint)) : a = a.indexOf(".") < a.indexOf(",") ? a.replace(/\./g, "") : a = a.replace(/,/g, "") : a = a.replace(new RegExp(b.escapeRegex(c.groupSeparator), "g"), "");
                }
                if (0 === c.digits && (-1 !== a.indexOf(".") ? a = a.substring(0, a.indexOf(".")) : -1 !== a.indexOf(",") && (a = a.substring(0, a.indexOf(",")))), 
                "" !== c.radixPoint && isFinite(c.digits) && -1 !== a.indexOf(c.radixPoint)) {
                    var f = a.split(c.radixPoint), g = f[1].match(new RegExp("\\d*"))[0];
                    if (parseInt(c.digits) < g.toString().length) {
                        var h = Math.pow(10, parseInt(c.digits));
                        a = a.replace(b.escapeRegex(c.radixPoint), "."), a = Math.round(parseFloat(a) * h) / h, 
                        a = a.toString().replace(".", c.radixPoint);
                    }
                }
                return a.toString();
            },
            canClearPosition: function(a, b, c, d, e) {
                var f = a.validPositions[b].input, g = f !== e.radixPoint || null !== a.validPositions[b].match.fn && e.decimalProtect === !1 || isFinite(f) || b === c || f === e.groupSeparator || f === e.negationSymbol.front || f === e.negationSymbol.back;
                return g;
            },
            onKeyDown: function(c, d, e, f) {
                var g = a(this);
                if (c.ctrlKey) switch (c.keyCode) {
                  case b.keyCode.UP:
                    g.val(parseFloat(this.inputmask.unmaskedvalue()) + parseInt(f.step)), g.trigger("setvalue");
                    break;

                  case b.keyCode.DOWN:
                    g.val(parseFloat(this.inputmask.unmaskedvalue()) - parseInt(f.step)), g.trigger("setvalue");
                }
            }
        },
        currency: {
            prefix: "$ ",
            groupSeparator: ",",
            alias: "numeric",
            placeholder: "0",
            autoGroup: !0,
            digits: 2,
            digitsOptional: !1,
            clearMaskOnLostFocus: !1
        },
        decimal: {
            alias: "numeric"
        },
        integer: {
            alias: "numeric",
            digits: 0,
            radixPoint: ""
        },
        percentage: {
            alias: "numeric",
            digits: 2,
            radixPoint: ".",
            placeholder: "0",
            autoGroup: !1,
            min: 0,
            max: 100,
            suffix: " %",
            allowPlus: !1,
            allowMinus: !1
        }
    }), b;
}(jQuery, Inputmask), function(a, b) {
    return b.extendAliases({
        phone: {
            url: "phone-codes/phone-codes.js",
            countrycode: "",
            phoneCodeCache: {},
            mask: function(b) {
                if (void 0 === b.phoneCodeCache[b.url]) {
                    var c = [];
                    b.definitions["#"] = b.definitions[9], a.ajax({
                        url: b.url,
                        async: !1,
                        type: "get",
                        dataType: "json",
                        success: function(a) {
                            c = a;
                        },
                        error: function(a, c, d) {
                            alert(d + " - " + b.url);
                        }
                    }), b.phoneCodeCache[b.url] = c.sort(function(a, b) {
                        return (a.mask || a) < (b.mask || b) ? -1 : 1;
                    });
                }
                return b.phoneCodeCache[b.url];
            },
            keepStatic: !1,
            nojumps: !0,
            nojumpsThreshold: 1,
            onBeforeMask: function(a, b) {
                var c = a.replace(/^0{1,2}/, "").replace(/[\s]/g, "");
                return (c.indexOf(b.countrycode) > 1 || -1 === c.indexOf(b.countrycode)) && (c = "+" + b.countrycode + c), 
                c;
            }
        },
        phonebe: {
            alias: "phone",
            url: "phone-codes/phone-be.js",
            countrycode: "32",
            nojumpsThreshold: 4
        }
    }), b;
}(jQuery, Inputmask), function(a, b) {
    return b.extendAliases({
        Regex: {
            mask: "r",
            greedy: !1,
            repeat: "*",
            regex: null,
            regexTokens: null,
            tokenizer: /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
            quantifierFilter: /[0-9]+[^,]/,
            isComplete: function(a, b) {
                return new RegExp(b.regex).test(a.join(""));
            },
            definitions: {
                r: {
                    validator: function(b, c, d, e, f) {
                        function g(a, b) {
                            this.matches = [], this.isGroup = a || !1, this.isQuantifier = b || !1, this.quantifier = {
                                min: 1,
                                max: 1
                            }, this.repeaterPart = void 0;
                        }
                        function h() {
                            var a, b, c = new g(), d = [];
                            for (f.regexTokens = []; a = f.tokenizer.exec(f.regex); ) switch (b = a[0], b.charAt(0)) {
                              case "(":
                                d.push(new g(!0));
                                break;

                              case ")":
                                k = d.pop(), d.length > 0 ? d[d.length - 1].matches.push(k) : c.matches.push(k);
                                break;

                              case "{":
                              case "+":
                              case "*":
                                var e = new g(!1, !0);
                                b = b.replace(/[{}]/g, "");
                                var h = b.split(","), i = isNaN(h[0]) ? h[0] : parseInt(h[0]), j = 1 === h.length ? i : isNaN(h[1]) ? h[1] : parseInt(h[1]);
                                if (e.quantifier = {
                                    min: i,
                                    max: j
                                }, d.length > 0) {
                                    var l = d[d.length - 1].matches;
                                    a = l.pop(), a.isGroup || (k = new g(!0), k.matches.push(a), a = k), l.push(a), 
                                    l.push(e);
                                } else a = c.matches.pop(), a.isGroup || (k = new g(!0), k.matches.push(a), a = k), 
                                c.matches.push(a), c.matches.push(e);
                                break;

                              default:
                                d.length > 0 ? d[d.length - 1].matches.push(b) : c.matches.push(b);
                            }
                            c.matches.length > 0 && f.regexTokens.push(c);
                        }
                        function i(b, c) {
                            var d = !1;
                            c && (m += "(", o++);
                            for (var e = 0; e < b.matches.length; e++) {
                                var f = b.matches[e];
                                if (f.isGroup === !0) d = i(f, !0); else if (f.isQuantifier === !0) {
                                    var g = a.inArray(f, b.matches), h = b.matches[g - 1], k = m;
                                    if (isNaN(f.quantifier.max)) {
                                        for (;f.repeaterPart && f.repeaterPart !== m && f.repeaterPart.length > m.length && !(d = i(h, !0)); ) ;
                                        d = d || i(h, !0), d && (f.repeaterPart = m), m = k + f.quantifier.max;
                                    } else {
                                        for (var l = 0, n = f.quantifier.max - 1; n > l && !(d = i(h, !0)); l++) ;
                                        m = k + "{" + f.quantifier.min + "," + f.quantifier.max + "}";
                                    }
                                } else if (void 0 !== f.matches) for (var p = 0; p < f.length && !(d = i(f[p], c)); p++) ; else {
                                    var q;
                                    if ("[" == f.charAt(0)) {
                                        q = m, q += f;
                                        for (var r = 0; o > r; r++) q += ")";
                                        var s = new RegExp("^(" + q + ")$");
                                        d = s.test(j);
                                    } else for (var t = 0, u = f.length; u > t; t++) if ("\\" !== f.charAt(t)) {
                                        q = m, q += f.substr(0, t + 1), q = q.replace(/\|$/, "");
                                        for (var r = 0; o > r; r++) q += ")";
                                        var s = new RegExp("^(" + q + ")$");
                                        if (d = s.test(j)) break;
                                    }
                                    m += f;
                                }
                                if (d) break;
                            }
                            return c && (m += ")", o--), d;
                        }
                        var j, k, l = c.buffer.slice(), m = "", n = !1, o = 0;
                        null === f.regexTokens && h(), l.splice(d, 0, b), j = l.join("");
                        for (var p = 0; p < f.regexTokens.length; p++) {
                            var q = f.regexTokens[p];
                            if (n = i(q, q.isGroup)) break;
                        }
                        return n;
                    },
                    cardinality: 1
                }
            }
        }
    }), b;
}(jQuery, Inputmask), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");


//Input mask - end


function showOverlay(overlayId, loading) {
        if (loading) {
            $("#" + overlayId + ", #" + loading).css({
                display: "block"
            });
            // $("#" + loading).css("top", centreScreenCalFn(loading));
        } else {
            $("#" + overlayId).css("display", "block");
        }
        $("#" + overlayId).css("height", this.getDocHeight().height + "px");
    }
	 
    function hideOverlay(overlayId, loading) {
        $("#" + overlayId + ", #" + loading).css("display", "none");
        $("body").removeClass("modelPop");
    }

function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
}

function numberWithCommas(x) {
    return (x != null) ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "";
}
function removeCommas(x) {
	var x = (x != null) ? x.toString().replace("$", "") : "";
    return (x != null) ? x.toString().replace(/\,/g, "") : "";
}
$("#retirementSavings").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#otherSavings").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#annualIncome").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#yearsIncomeProvided").inputmask({
	alias: "integer",
    integerDigits: "2",
    suffix: " Years",
    placeholder: " ",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#existingLifeInsurance").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#finalExpenses").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#outstandingMortgage").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#otherOutstandingDebt").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#otherSavings").inputmask({
    alias: "integer",
    integerDigits: "8",
    autoGroup: !0,
    groupSeparator: ",",
    prefix: "$",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#estimatedInflationRate").inputmask({
	alias: "integer",
    integerDigits: "1",
    suffix: "%",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#estimatedInvestmentReturn").inputmask({
	alias: "integer",
    integerDigits: "1",
    suffix: "%",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#childCount").inputmask({
    alias: "integer",
    integerDigits: "1",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}), $("#calc-date-of-birth").inputmask({
    alias: "mm/dd/yyyy",
    autoUnmask: !0,
    clearMaskOnLostFocus: !1
}),$("#calc-form-phone").inputmask("(999) 999-9999");

$(".incrementer a").on("click", function(e) {
    e.preventDefault();
    var $input = $(this).closest(".incrementer").find("input"), val = $(this).closest(".incrementer").find("input").val(), index = +val + 1, remove = +val - 1;
    "plus" == $(this).data("direction") ? 9 > val && ($input.get(0).value++, $child = [ '<div class="child" style="display:none;">', "                  <p><span>Child " + index + "<strong>: Level of College Funding</strong></span>", '                  <div class="select-wrapper"><select name="children[' + index + '].schoolType" id="children[' + index + '].schoolType" class="small">', '                          <option value="private">Private University</option>', '                          <option value="public">Public University</option>', "                  </select></div></p>", "              </div>" ].join("\n"), 
    $("#children").append($child), $("#children .child").slideDown(), saveCookies("needsCalculatorFormCookie", document.needsCalculatorForm)) : val > 0 && ($input.get(0).value--, 
    $("#children .child").slice(remove).remove(), saveCookies("needsCalculatorFormCookie", document.needsCalculatorForm));
});

$.fn.serializeObject = function() {
    var o = {}, a = this.serializeArray();
    return $.each(a, function() {
        void 0 !== o[this.name] ? (o[this.name].push || (o[this.name] = [ o[this.name] ]), 
        o[this.name].push(this.value || "")) : o[this.name] = this.value || "";
    }), o;
};

function isValidInputAmount(inputValue) {
	if (inputValue == "") {
		return 1;
	} else if (inputValue < 0) {
		return 2;
	}
	return 0;
}

function displayErrorText(message, selector) {
	$(selector).find(".success-text").hide(), $(selector).find(".error-text")
			.hide(), $(selector).find(".error-text").html(message), $(selector)
			.find(".error-text").slideDown(), $("body, html").animate({
		scrollTop : $(selector).offset().top
	}, 1000);
}

function validateNeeds(obj) {
	$("#needsCalculatorErrorMsgId").find(".error-text").hide();
	if (isValidInputAmount($("#retirementSavings").val()) == 1) {
		return void displayErrorText("Please enter your retirement savings.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#retirementSavings").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for retirement savings.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#otherSavings").val()) == 1) {
		return void displayErrorText("Please enter your other savings.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#otherSavings").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for other savings.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#annualIncome").val()) == 1) {
		return void displayErrorText("Please enter your annual income.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#annualIncome").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for annual income.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#yearsIncomeProvided").val()) == 1) {
		return void displayErrorText(
				"Please enter your years of income needed for beneficiaries.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#yearsIncomeProvided").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for years of income needed for beneficiaries.",
				"#needsCalculatorErrorMsgId");
	} else if ($("#yearsIncomeProvided").val() > 30) {
		return void displayErrorText(
				"Please enter values between 0 to 30 for years of income needed for beneficiaries.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#existingLifeInsurance").val()) == 1) {
		return void displayErrorText(
				"Please enter your existing life insurance coverage.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#existingLifeInsurance").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for existing life insurance coverage.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#finalExpenses").val()) == 1) {
		return void displayErrorText("Please enter your funeral expenses.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#finalExpenses").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for funeral expenses.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#outstandingMortgage").val()) == 1) {
		return void displayErrorText("Please enter your outstanding mortgage.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#outstandingMortgage").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for outstanding mortgage.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#otherOutstandingDebt").val()) == 1) {
		return void displayErrorText(
				"Please enter your other outstanding debt.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#otherOutstandingDebt").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for outstanding debt.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#estimatedInflationRate").val()) == 1) {
		return void displayErrorText(
				"Please enter your estimated inflation rate.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#estimatedInflationRate").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for estimated inflation rate.",
				"#needsCalculatorErrorMsgId");

	} else if (isValidInputAmount($("#estimatedInvestmentReturn").val()) == 1) {
		return void displayErrorText(
				"Please enter your estimated investment return.",
				"#needsCalculatorErrorMsgId");
	} else if (isValidInputAmount($("#estimatedInvestmentReturn").val()) == 2) {
		return void displayErrorText(
				"Please enter only positive values for estimated investment return.",
				"#needsCalculatorErrorMsgId");
	} else {
		var formData = $(document.needsCalculatorForm).serializeObject(); 
		$.ajax({
	        url: "insuranceNeeds.do",
	        type: "POST",
	        data: formData,
	        success: function(data, textStatus, jqXHR) {
	        	calculatorSuccess(data,obj);
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	        	calculatorFailure(data);
	        }
	    });
	}
}

function calculatorSuccess(response,obj) {		
	if(obj=="natlang" && (JSON.parse(response).coverage<= 2e6)){		
		document.getElementById('calculator').style.display="none";
		document.getElementById('needs-calculator').style.display="none";
		document.getElementById('quote_form_natlang').style.display="block";
	}else if(obj=="standard" && (JSON.parse(response).coverage<= 2e6)){
		document.getElementById('needs-calculator').style.display="none";
		document.getElementById('calculator-report').style.display="block";
	}else{		
		//No chnages required
	}
	
	var Map = {};
	Map[1] = 'One Child';
	Map[2] = 'Two Children';
	Map[3] = 'Three Children';
	Map[4] = 'Four Children';
	Map[5] = 'Five Children';
	Map[6] = 'Six Children';
	Map[7] = 'Seven Children';
	Map[8] = 'Eight Children';
	Map[9] = 'Nine Children';

	
	response = JSON.parse(response);
	
	if (response.coverage>2e6) {
		window.location.href='/'+hostName+'/twomillioncontact.do';
	}
	
	if (response.coverage == 100000) {
		$("#100KMessage").html("<b>Please note that $100,000 is the smallest coverage amount available through the web, if you feel you may need less coverage, please <a href=\"contactus.do\" id=\"#mylifeCovered-contactUs-msg\"><u>contact us</u></a>.</b><br/>");
	} else {
		$("#100KMessage").html("");
	}
	
	if ($("#childCount").val() == 0) {
		return  (response.coverage <= 0 && $("#calculator-report h2").text("Congratulations!"), 
			    0 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").after("<h3>Looks like you don't need any life insurance.</h3>"), 
			    $("#calculator-report h3").addClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").hide(), 
			    $("#coverage-analysis .tab-heading span").html("Needs Analysis"), $("#calculator-demographics").hide(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-6 col-md-offset-3")), response.coverage > 0 && ($("#calculator-report h2").text("Your Recommended Coverage"), 
			    1 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").next("h3").remove(), 
			    $("#calculator-report h3").removeClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").show(), 
			    $("#coverage-analysis .tab-heading span").html("Recommended Coverage"), $("#calculator-demographics").show(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-5 col-md-offset-1")), $(".calculated-coverage").html("$" + numberWithCommas(response.coverage)), 
			    $("#report-total-income-to-be-provided span").html("$" + numberWithCommas(response.totalIncomeToBeProvided)), 
			    $("#report-total-one-time-needs span").html("$" + numberWithCommas(response.totalOneTimeNeeds)), 
			    $("#report-total-income-needs span").html(response.totalIncomeNeeds < 0 ? "- $" + numberWithCommas(response.totalIncomeNeeds).replace("-","") : "$" + numberWithCommas(response.totalIncomeNeeds)),
			    $("#report-private-college-expenses").html(""),
			    $("#report-public-college-expenses").html(""),
			    $("#report-total-college-expenses").html(""),
			    $("#horizontalLine").hide(),
			    // $("#report-private-college-expenses span").html("$" +
				// numberWithCommas(response.estimatedPrivateCollegeExpenses)),
			    // $("#report-public-college-expenses
				// span").html("+&nbsp;&nbsp;&nbsp;$" +
				// numberWithCommas(response.estimatedPublicCollegeExpenses)),
			    // $("#report-total-college-expenses span").html("$" +
				// numberWithCommas(response.totalCollegeExpenses)),
			    $("#report-annual-income span").html("$" + numberWithCommas($("#annualIncome").val())), 
			    $("#report-years-income-provided span").html("&times;&nbsp;&nbsp;&nbsp;" + $("#yearsIncomeProvided").val()), 
			    $("#report-retirement-savings span").html("+ $" + numberWithCommas($("#retirementSavings").val())), 
			    $("#report-current-savings span").html("$" + numberWithCommas($("#otherSavings").val())), 
			    $("#report-existing-life-insurance span").html("+ $" + numberWithCommas($("#existingLifeInsurance").val())), 
			    $("#report-outstanding-debts span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#otherOutstandingDebt").val())), 
			    $("#report-outstanding-mortgage span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#outstandingMortgage").val())), 
			    $("#report-final-expenses span").html("$" + numberWithCommas($("#finalExpenses").val())),
			    // $("#report-number-of-children-requiring-funding
				// span").html($("#childCount").val()),
			    $("#quote-page .quote-progress").show(),
			    //void changeSection("#calculator-report"),
			    $("#calc-requested_coverage").val(response.coverage), 
			    $("#calc-policy_term").val(response.term),
			    $("#calc-annual-income").val("$" + numberWithCommas($("#annualIncome").val())),
			    $("#calc-coverage").val("$" + numberWithCommas(response.coverage));
	}
	else if (response.estimatedPrivateCollegeExpenses <= 0 && response.estimatedPublicCollegeExpenses > 0) {
		return (response.coverage <= 0 && ($("#calculator-report h2").text("Congratulations!"), 
			    0 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").after("<h3>Looks like you don't need any life insurance.</h3>"), 
			    $("#calculator-report h3").addClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").hide(), 
			    $("#coverage-analysis .tab-heading span").html("Needs Analysis"), $("#calculator-demographics").hide(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-6 col-md-offset-3")), response.coverage > 0 && ($("#calculator-report h2").text("Your Recommended Coverage"), 
			    1 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").next("h3").remove(), 
			    $("#calculator-report h3").removeClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").show(), 
			    $("#coverage-analysis .tab-heading span").html("Recommended Coverage"), $("#calculator-demographics").show(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-5 col-md-offset-1")), $(".calculated-coverage").html("$" + numberWithCommas(response.coverage)), 
			    $("#report-total-income-to-be-provided span").html("$" + numberWithCommas(response.totalIncomeToBeProvided)), 
			    $("#report-total-one-time-needs span").html("$" + numberWithCommas(response.totalOneTimeNeeds)), 
			    $("#report-total-income-needs span").html(response.totalIncomeNeeds < 0 ? "- $" + numberWithCommas(response.totalIncomeNeeds).replace("-","") : "$" + numberWithCommas(response.totalIncomeNeeds)),
			    $("#report-private-college-expenses").html(""),
			    $("#report-public-college-expenses").html(Map[response.publicChildrenCount]+" - Public College Expense" + "<span>$" +numberWithCommas(response.estimatedPublicCollegeExpenses)+"</span>"),
			    $("#horizontalLine").show(),
			    $("#report-total-college-expenses").html("Total College Expense <span>$" + numberWithCommas(response.totalCollegeExpenses)+"</span>"), 
			    $("#report-annual-income span").html("$" + numberWithCommas($("#annualIncome").val())), 
			    $("#report-years-income-provided span").html("&times;&nbsp;&nbsp;&nbsp;" + $("#yearsIncomeProvided").val()), 
			    $("#report-retirement-savings span").html("+ $" + numberWithCommas($("#retirementSavings").val())), 
			    $("#report-current-savings span").html("$" + numberWithCommas($("#otherSavings").val())), 
			    $("#report-existing-life-insurance span").html("+ $" + numberWithCommas($("#existingLifeInsurance").val())), 
			    $("#report-outstanding-debts span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#otherOutstandingDebt").val())), 
			    $("#report-outstanding-mortgage span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#outstandingMortgage").val())), 
			    $("#report-final-expenses span").html("$" + numberWithCommas($("#finalExpenses").val())), 
			    // $("#report-number-of-children-requiring-funding
				// span").html($("#childCount").val()),
			     $("#quote-page .quote-progress").show(),
			    //void changeSection("#calculator-report"),
			    $("#calc-requested_coverage").val(response.coverage), 
			    $("#calc-policy_term").val(response.term)),
			    $("#calc-annual-income").val("$" + numberWithCommas($("#annualIncome").val())),
			    $("#calc-coverage").val("$" + numberWithCommas(response.coverage));
	}
	else if (response.estimatedPublicCollegeExpenses <= 0 && response.estimatedPrivateCollegeExpenses > 0) {
		return (response.coverage <= 0 && ($("#calculator-report h2").text("Congratulations!"), 
			    0 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").after("<h3>Looks like you don't need any life insurance.</h3>"), 
			    $("#calculator-report h3").addClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").hide(), 
			    $("#coverage-analysis .tab-heading span").html("Needs Analysis"), $("#calculator-demographics").hide(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-6 col-md-offset-3")), response.coverage > 0 && ($("#calculator-report h2").text("Your Recommended Coverage"), 
			    1 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").next("h3").remove(), 
			    $("#calculator-report h3").removeClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").show(), 
			    $("#coverage-analysis .tab-heading span").html("Recommended Coverage"), $("#calculator-demographics").show(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-5 col-md-offset-1")), $(".calculated-coverage").html("$" + numberWithCommas(response.coverage)), 
			    $("#report-total-income-to-be-provided span").html("$" + numberWithCommas(response.totalIncomeToBeProvided)), 
			    $("#report-total-one-time-needs span").html("$" + numberWithCommas(response.totalOneTimeNeeds)), 
			    $("#report-total-income-needs span").html(response.totalIncomeNeeds < 0 ? "- $" + numberWithCommas(response.totalIncomeNeeds).replace("-","") : "$" + numberWithCommas(response.totalIncomeNeeds)), 
			    $("#report-private-college-expenses").html(Map[response.privateChildrenCount]+" - Private College Expense" + "<span>$" + numberWithCommas(response.estimatedPrivateCollegeExpenses) + "</span>"),
			    $("#report-public-college-expenses").html(""),
			    $("#horizontalLine").show(),
			    $("#report-total-college-expenses").html("Total College Expense <span>$" + numberWithCommas(response.totalCollegeExpenses)+"</span>"), 
			    $("#report-annual-income span").html("$" + numberWithCommas($("#annualIncome").val())), 
			    $("#report-years-income-provided span").html("&times;&nbsp;&nbsp;&nbsp;" + $("#yearsIncomeProvided").val()), 
			    $("#report-retirement-savings span").html("+ $" + numberWithCommas($("#retirementSavings").val())), 
			    $("#report-current-savings span").html("$" + numberWithCommas($("#otherSavings").val())), 
			    $("#report-existing-life-insurance span").html("+ $" + numberWithCommas($("#existingLifeInsurance").val())), 
			    $("#report-outstanding-debts span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#otherOutstandingDebt").val())), 
			    $("#report-outstanding-mortgage span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#outstandingMortgage").val())), 
			    $("#report-final-expenses span").html("$" + numberWithCommas($("#finalExpenses").val())), 
			    // $("#report-number-of-children-requiring-funding
				// span").html($("#childCount").val()),
			    $("#quote-page .quote-progress").show(),
			    //void changeSection("#calculator-report"),
			    $("#calc-requested_coverage").val(response.coverage), 
			    $("#calc-policy_term").val(response.term)),
			    $("#calc-annual-income").val("$" + numberWithCommas($("#annualIncome").val())),
			    $("#calc-coverage").val("$" + numberWithCommas(response.coverage));
	}
	else if (response.estimatedPrivateCollegeExpenses > 0 && response.estimatedPublicCollegeExpenses > 0) {
		return (response.coverage <= 0 && ($("#calculator-report h2").text("Congratulations!"), 
			    0 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").after("<h3>Looks like you don't need any life insurance.</h3>"), 
			    $("#calculator-report h3").addClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").hide(), 
			    $("#coverage-analysis .tab-heading span").html("Needs Analysis"), $("#calculator-demographics").hide(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-6 col-md-offset-3")), response.coverage > 0 && ($("#calculator-report h2").text("Your Recommended Coverage"), 
			    1 == $("#calculator-report h2").next("h3").length && $("#calculator-report h2").next("h3").remove(), 
			    $("#calculator-report h3").removeClass("margin-bottom-m"), $("#calculator-report .recommended-coverage").show(), 
			    $("#coverage-analysis .tab-heading span").html("Recommended Coverage"), $("#calculator-demographics").show(), 
			    $("#coverage-analysis").removeClass().addClass("col-md-5 col-md-offset-1")), $(".calculated-coverage").html("$" + numberWithCommas(response.coverage)), 
			    $("#report-total-income-to-be-provided span").html("$" + numberWithCommas(response.totalIncomeToBeProvided)), 
			    $("#report-total-one-time-needs span").html("$" + numberWithCommas(response.totalOneTimeNeeds)), 
			    $("#report-total-income-needs span").html(response.totalIncomeNeeds < 0 ? "- $" + numberWithCommas(response.totalIncomeNeeds).replace("-","") : "$" + numberWithCommas(response.totalIncomeNeeds)),
			    $("#report-private-college-expenses").html(Map[response.privateChildrenCount]+" - Private College Expense" + "<span>$" + numberWithCommas(response.estimatedPrivateCollegeExpenses) + "</span>"),
			    $("#report-public-college-expenses").html(Map[response.publicChildrenCount]+" - Public College Expense" + "<span>$" +numberWithCommas(response.estimatedPublicCollegeExpenses)+"</span>"),
			    $("#horizontalLine").show(),
			    $("#report-total-college-expenses").html("Total College Expense<span>$" + numberWithCommas(response.totalCollegeExpenses)+"</span>"), 
			    $("#report-annual-income span").html("$" + numberWithCommas($("#annualIncome").val())), 
			    $("#report-years-income-provided span").html("&times;&nbsp;&nbsp;&nbsp;" + $("#yearsIncomeProvided").val()), 
			    $("#report-retirement-savings span").html("+ $" + numberWithCommas($("#retirementSavings").val())), 
			    $("#report-current-savings span").html("$" + numberWithCommas($("#otherSavings").val())), 
			    $("#report-existing-life-insurance span").html("+ $" + numberWithCommas($("#existingLifeInsurance").val())), 
			    $("#report-outstanding-debts span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#otherOutstandingDebt").val())), 
			    $("#report-outstanding-mortgage span").html("+&nbsp;&nbsp;&nbsp;$" + numberWithCommas($("#outstandingMortgage").val())), 
			    $("#report-final-expenses span").html("$" + numberWithCommas($("#finalExpenses").val())), 
			    // $("#report-number-of-children-requiring-funding
				// span").html($("#childCount").val()),
			    $("#quote-page .quote-progress").show(),
			    //void changeSection("#calculator-report"),
			    $("#calc-requested_coverage").val(response.coverage), 
			    $("#calc-policy_term").val(response.term)),
			    $("#calc-annual-income").val("$" + numberWithCommas($("#annualIncome").val())),
			    $("#calc-coverage").val("$" + numberWithCommas(response.coverage));
	}
}

function calculatorFailure(response) {
	alert("failure");
}

function validateQuote(obj) {	
	var str_array = obj.split(',');	
	$("#needs-calculator-demographics-form").find(".error-text").hide();
	var regExp = new RegExp(/^\(\d{3}\) \d{3}-\d{4}$/);
	/*if (str_array[1] == "natlang") {	
		
		if($("#calc-first-name").val().length < 3)
			return void displayErrorText("Please enter your first name.", "#quote_form_natlang");
		
		var namesArray = $("#calc-first-name").val().split(' ');

		if(namesArray.length < 2)
			return void displayErrorText("Please enter your last name.", "#quote_form_natlang");
		
		if(namesArray[1].length < 3)
			return void displayErrorText("Please enter your last name atleast with 3 characters.", "#quote_form_natlang");
		
	}*/
	if (str_array[1] == undefined && $("#calc-first-name").val().length < 3) {		
		return void displayErrorText("Please enter your first name.", "#quote_form");
	}
	else if ((str_array[1] == "natlang") && $("#calc-first-name").val().length < 3) {		
		return void displayErrorText("Please enter your first name.", "#quote_form_natlang");
	}
	else if (str_array[1] == undefined && ($("#calc-last-name").val().length < 3)) {		
		return void displayErrorText("Please enter your last name.", "#quote_form");
	}
	else if ((str_array[1] == "natlang") && $("#calc-last-name").val().length < 3) {		
		return void displayErrorText("Please enter your last name.", "#quote_form_natlang");
	}
	else if (str_array[1] == undefined && $("#calc-date-of-birth").val().length < 7) {
    	return void displayErrorText("Please enter a valid date of birth.", "#quote_form");
	}	
	else if ((str_array[1] == "natlang") && $("#calc-date-of-birth").val().length < 7) {
    	return void displayErrorText("Please enter a valid date of birth.", "#quote_form_natlang");
	}
	else if (str_array[1] == undefined &&  !isValidEmail($("#calc-email-address").val())) { 
    	return void displayErrorText("Please enter a valid email address.", "#quote_form");
	}
	else if (str_array[1] == "natlang" &&  !isValidEmail($("#calc-email-address").val())) { 
    	return void displayErrorText("Please enter a valid email address.", "#quote_form_natlang");
	}
	else if(str_array[1] == undefined && ($("#calc-form-phone").val()!= undefined && $("#calc-form-phone").val().length == 0) ) {		
		return void displayErrorText("Please enter a phone number.", "#quote_form");
	}
	else if(str_array[1] == undefined && $("#calc-form-phone").val()!= undefined && $("#calc-form-phone").val().length > 0 && !regExp.test($("#calc-form-phone").val()) ) {		
    		return void displayErrorText("Please enter a valid phone number.", "#quote_form");
    }
	else if((str_array[1] == "natlang" && $("#calc-form-phone").val().length == 0) ) {		
		return void displayErrorText("Please enter a phone number.", "#quote_form_natlang");
	}
	else if(str_array[1] == "natlang" &&  $("#calc-form-phone").val().length > 0 && !regExp.test($("#calc-form-phone").val()) ) {		
    		return void displayErrorText("Please enter a valid phone number.", "#quote_form_natlang");
    }
	else if (str_array[1] == undefined && $("#calc-state").val()== '') {
		return void displayErrorText("Please select a state.", "#quote_form");
	}
	else if (str_array[1] == "natlang" && $("#calc-state").val()== '') {
		return void displayErrorText("Please select a state.", "#quote_form_natlang");
	}
	/*else if ($("#calc-state").val() == 'NY') {
		window.location.href='/'+hostName+'/loa dNYContactus.do';
	}*/
	else {
		enableFields();
		var demographicData = $(needsCalculatorDemographicsForm).serializeObject();
		var USCitizen = true, PolicyOwner = true, ReplacementPolicy=true;
		var selectedPath = demographicData['path_selected'];
		var allowMarketing=document.getElementById('calc-allow_marketing').checked;
		var phone=$("#calc-form-phone").val();
		var coverageAmount = 0;

		if(str_array[0]=="calculateneed") {
			coverageAmount = demographicData['requested_coverage'];
		} else if(str_array[0] == "iknowwhatiwant") {			
			coverageAmount = demographicData['coverage'];
		} else if(str_array[0] =="affordability") {
			coverageAmount = $("#calc-coverage").val();
		} else {
			coverageAmount = demographicData['requested_coverage'];
		}
		if(demographicData['us_citizen'] == undefined)
			USCitizen = false;
		if(demographicData['policy_owner'] == undefined)
			PolicyOwner = false;
		if(demographicData['not_replacing'] == undefined)
			ReplacementPolicy = false;
		if(demographicData['rec-coverage'] !== undefined)
			recCoverage = demographicData['rec-coverage'];
		
		if (!USCitizen || !PolicyOwner || !ReplacementPolicy) {
			window.location.href='/'+hostName+'/contactus.do';
		}
		else {			
		showOverlay("wOverlayId", "loading");
	    $.ajax({
	        url: "getQuote.do",
	        type: "POST",
	        data: {
	        	coverageAmount : removeCommas(coverageAmount),//demographicData['requested_coverage'],
				policyTerm : demographicData['policy_term'],
				birthDate : demographicData['date-of-birth'],
				gender : demographicData['gender'],
				smoker : demographicData['smoker'],
				emailAddress : demographicData['email-address'],
				firstName : demographicData['first-name'],
				lastName : demographicData['last-name'],
				state : demographicData['state'],
				USCitizen : USCitizen,
				PolicyOwner : PolicyOwner,
				ReplacementPolicy : ReplacementPolicy,
				noOfYearsToMaintainCoverage : recCoverage,
				selectedPath : selectedPath,
				allowMarketing : allowMarketing,
				quotePhone : phone
	        },
	        success: function(data, textStatus, jqXHR) {
	        	var retdata = JSON.parse(data);
	        	var errorMessage = retdata.errorMessage;
	        	var isMultiCarrier = retdata.isMultiCarrier;
	        	if(errorMessage !== ""){
	        		displayErrorText(errorMessage, "#quote_form");
	        		hideOverlay("wOverlayId", "loading");
	        		return false;
	        	}else{
	        		var profile = JSON.parse(retdata.profileVO);
	        		var isTrans = false;
	        		for(i = 0; i<profile.appliedQuoteVO.productPremiumsCoveragesList.length;i++) {
	        			var productName = profile.appliedQuoteVO.productPremiumsCoveragesList[i].productName;
	        			if(productName == "TransamericaTrendsetterSuper"){
	        				isTrans  = true;
	        			}
	        		}
	        		if(isTrans == false){
	        			window.location.href='/'+hostName+'/noproductsfound.do';
	        			return false;
	        		}
	        		if(profile.appliedQuoteVO.productPremiumsCoveragesList.length<1) {
	        			window.location.href='/'+hostName+'/noproductsfound.do';
	        			return false;
	        		}
	        		if(profile.coverage>2e6 && str_array[0]=="affordability") {
	        			window.location.href='/'+hostName+'/affordabledifference.do';
	        			return false;
	        		}
	        	}
	        	
        		sessionStorage.setItem("quoteData",data);
        		sessionStorage.setItem("isMultiCarrier",isMultiCarrier);
        		hideOverlay("wOverlayId", "loading");
        		
        		if(isMultiCarrier)
        			window.location.href='/'+hostName+'/quote-multicarrier.do';
        		else
        			window.location.href='/'+hostName+'/quote-singlecarrier.do';
        		
	        	/*
	        	var retdata = JSON.parse(data);
	        	var errorMessage = retdata.errorMessage;
	        	if(errorMessage !== ""){
	        		displayErrorText(errorMessage, "#quote_form");
	        	}else{
	        		document.getElementById('calculator-report').style.display="none";
		        	document.getElementById('quote-page').style.display="block";
	        		
	        		var profile = JSON.parse(retdata.profileVO);
	        		sessionStorage.setItem('profile',JSON.stringify(profile));
	        		window.location.href='/'+hostName+'/quote-singlecarrier.do';
	        		var fakeResponseData = {
	    		        bestClassPrice: +parseInt(profile.appliedQuoteVO.bestPremiumPerMonth),
	    		        standardClassPrice: +parseInt(profile.appliedQuoteVO.standardPremiumPerMonth)
	    		    };
	        		$("#original-quote_selected").val(selectedPath);
	        		$("#comparison-quote_selected").val(selectedPath);
	        		
	        		if(obj=="calculateneed") {
	        			successCallback(fakeResponseData);
	        		} else if(obj=="iknowwhatiwant") {
	        			successCallbackForIKnow(fakeResponseData);
	        		} else if(obj=="affordability") {
	        			successCallbackForAffordability(fakeResponseData,profile);
	        		} else {
	        			successCallback(fakeResponseData);
	        		}
	        	}
	        	hideOverlay("wOverlayId", "loading");
	        	$('#quote-page').find('.error-text').html("");
	        	$('#quote-page').find('.success-text').html("");
				$('#quote-page').find('.success-text').css({'display':'none'});*/
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	        	displayErrorText("Please try again.", formId);
	        	hideOverlay("wOverlayId", "loading");
	        }
	    });
	  }//else
	}	
	
}
function loadSingleCarrierWithQuoteData(selectedWorkFlow,selectedPathId){
	var retdata = JSON.parse(sessionStorage.getItem("quoteData"));
	var errorMessage = retdata.errorMessage;
	if(errorMessage !== ""){
		//displayErrorText(errorMessage, "#calculator-demographics");
	}else{
		var profile = JSON.parse(retdata.profileVO);
		var fakeResponseData = {
	        bestClassPrice: +parseInt(profile.appliedQuoteVO.bestPremiumPerMonth),
	        standardClassPrice: +parseInt(profile.appliedQuoteVO.standardPremiumPerMonth)
	    };
		$("#original-quote_selected").val(selectedPathId);
		$("#comparison-quote_selected").val(selectedPathId);
		if(selectedWorkFlow=="calculateneed") {
			successCallback(fakeResponseData,profile);
		} else if(selectedWorkFlow=="iknowwhatiwant") {
			successCallbackForIKnow(fakeResponseData,profile);
		} else if(selectedWorkFlow=="affordability") {
			successCallbackForAffordability(fakeResponseData,profile);
		} else {
			successCallback(fakeResponseData,profile);
		}
	}
	hideOverlay("wOverlayId", "loading");
	$('#quote-page').find('.error-text').html("");
	$('#quote-page').find('.success-text').html("");
	$('#quote-page').find('.success-text').css({'display':'none'});
}

function loadMultiCarrierWithQuoteData(selectedWorkFlow,selectedPathId){
	var retdata = JSON.parse(sessionStorage.getItem("quoteData"));
	var errorMessage = retdata.errorMessage;
	if(errorMessage !== ""){
		//displayErrorText(errorMessage, "#calculator-demographics");
	}else{
		var profile = JSON.parse(retdata.profileVO);
		var fakeResponseData = {
	        bestClassPrice: +parseInt(profile.appliedQuoteVO.bestPremiumPerMonth),
	        standardClassPrice: +parseInt(profile.appliedQuoteVO.standardPremiumPerMonth)
	    };
		$("#original-quote_selected").val(selectedPathId);
		$("#comparison-quote_selected").val(selectedPathId);
		if(selectedWorkFlow=="calculateneed") {
			successCallbackMultiCarrier(fakeResponseData,profile);
		} else if(selectedWorkFlow=="iknowwhatiwant") {
			successCallbackMultiCarrier(fakeResponseData,profile);
		} else if(selectedWorkFlow=="affordability") {
			successCallbackMultiCarrier(fakeResponseData,profile);
		} else {
			successCallbackMultiCarrier(fakeResponseData,profile);
		}
	}
	hideOverlay("wOverlayId", "loading");
	$('#quote-page').find('.error-text').html("");
	$('#quote-page').find('.success-text').html("");
	$('#quote-page').find('.success-text').css({'display':'none'});
}

successCallbackMultiCarrier = function(response,profile) {
	$("#quote-page").find(".calculated-coverage").html('$'+numberWithCommas(profile.coverage)),
	//populateRecommendedCoverageSlider(profile.coverage),
	populateUpdatedCoverageSlider(profile.coverage),	
	coverage=profile.coverage,term = profile.term,
    $(".best-class .price").text(response.bestClassPrice), $(".standard-class .price").text(response.standardClassPrice), 
    $("#comparison-coverage").val(coverage), $("#comparison-term").val(term),$(".calculated-term").html(term + " Years"),
    //populateRecommendedTermSlider(profile.term),
    populateUpdatedTermSlider(profile.term),
    populateRecommendedPremiumValues(profile.appliedQuoteVO.productPremiumsCoveragesList),
    $("#original-quote-originalPolicyTerm").val(profile.term),
    $("#comparison-quote-selectedPolicyTerm").val(profile.term),
    $("#original-quote-originalCoverageAmnt").val(coverage),
    $("#comparison-quote-selectedCoverageAmnt").val(coverage);
};

successCallback = function(response,profile) {
	$("#quote-page").find(".calculated-coverage").html('$'+numberWithCommas(profile.coverage)),
	populateRecommendedCoverageSlider(profile.coverage),
	populateUpdatedCoverageSlider(profile.coverage),	
	coverage=profile.coverage,term = profile.term,
    $(".best-class .price").text(response.bestClassPrice), $(".standard-class .price").text(response.standardClassPrice), 
    $("#preselected-coverage, #comparison-coverage").val(coverage), $("#preselected-term, #comparison-term").val(term),$(".calculated-term").html(term + " Years"),
    populateRecommendedTermSlider(profile.term),
    populateUpdatedTermSlider(profile.term),
    populateRecommendedPremiumValues(profile.appliedQuoteVO.productPremiumsCoveragesList),
    $("#original-quote-originalPolicyTerm").val(profile.term),
    $("#comparison-quote-selectedPolicyTerm").val(profile.term),
    $("#original-quote-originalCoverageAmnt").val(coverage),
    $("#comparison-quote-selectedCoverageAmnt").val(coverage);
};

successCallbackForIKnow = function(response,profile) {
	$("#quote-page").find(".calculated-coverage").html('$'+numberWithCommas(profile.coverage)),
	populateRecommendedCoverageSlider(profile.coverage),
	populateUpdatedCoverageSlider(profile.coverage),	
	coverage=profile.coverage,term = profile.term,
    $(".best-class .price").text(response.bestClassPrice), $(".standard-class .price").text(response.standardClassPrice), 
    $("#preselected-coverage, #comparison-coverage").val(coverage), $("#preselected-term, #comparison-term").val(term),$(".calculated-term").html(term + " Years"),
    populateRecommendedTermSlider(profile.term),
    populateUpdatedTermSlider(profile.term),
    populateRecommendedPremiumValues(profile.appliedQuoteVO.productPremiumsCoveragesList),
    $("#original-quote-originalPolicyTerm").val(profile.term),
    $("#comparison-quote-selectedPolicyTerm").val(profile.term),
    $("#original-quote-originalCoverageAmnt").val(coverage),
    $("#comparison-quote-selectedCoverageAmnt").val(coverage);
};

successCallbackForAffordability = function(response,profile) {
	$("#quote-page").find(".calculated-coverage").html('$'+numberWithCommas(profile.coverage)),
	populateRecommendedCoverageSlider(profile.coverage),
	populateUpdatedCoverageSlider(profile.coverage),	
	coverage=profile.coverage,term = profile.term,
    $(".best-class .price").text(response.bestClassPrice), $(".standard-class .price").text(response.standardClassPrice), 
    $("#preselected-coverage, #comparison-coverage").val(coverage), $("#preselected-term, #comparison-term").val(term),$(".calculated-term").html(term + " Years"),
    populateRecommendedTermSlider(profile.term),
    populateUpdatedTermSlider(profile.term),
    populateRecommendedPremiumValues(profile.appliedQuoteVO.productPremiumsCoveragesList),
    $("#original-quote-originalPolicyTerm").val(profile.term),
    $("#comparison-quote-selectedPolicyTerm").val(profile.term),
    $("#original-quote-originalCoverageAmnt").val(coverage),
    $("#comparison-quote-selectedCoverageAmnt").val(coverage);
};

/*
successCallbackForTwentyFiveDollars = function(response,profile) {
	$("#quote-page").find(".calculated-coverage").html('$'+numberWithCommas(profile.affordablePremium)),
	//populateRecommendedCoverageSlider(profile.appliedQuoteVO.coverage),
	populatePreSelectedPremiumSlider(profile.affordablePremium),
	//populateUpdatedCoverageSlider(profile.appliedQuoteVO.coverage),
	populateUpdatedPremiumSlider(profile.affordablePremium),	
	coverage=profile.affordablePremium,term = $("#rec-coverage").val(),
    $(".best-class .price").text(numberWithCommas(response.recomondedCoverage)), $(".standard-class .price").text(numberWithCommas(response.standardCoverage)), 
    $("#preselected-coverage, #comparison-coverage").val(coverage), $("#preselected-term, #comparison-term").val(term),$(".calculated-term").html(term + " Years"),
    populateRecommendedTermSlider($("#rec-coverage").val()),
    populatePremiumUpdatedTermSlider($("#rec-coverage").val()),
    $("#original-quote-originalPolicyTerm").val($("#rec-coverage").val()),
    $("#comparison-quote-selectedPolicyTerm").val($("#rec-coverage").val()),
    $("#original-quote-originalCoverageAmnt").val(coverage),
    $("#comparison-quote-selectedCoverageAmnt").val(coverage);
};*/

function displaySuccessText(message, selector) {
    $(selector).find(".error-text").hide(), $(selector).find(".success-text").hide(), 
    $(selector).find(".success-text").html(message), $(selector).find(".success-text").slideDown();    
}

$("#contact-form-phone").inputmask("(999) 999-9999"),$("#calc-form-phone").inputmask("(999) 999-9999");

function submitContactInfo(email, phone, bestTimeToCall,comments,name,timeZone) {
		$.ajax({
	        url: "submitContactInfo.do",
	        type: "POST",
	        dataType: "text",
	        data: {
	            email: email,
	            phone: phone,
	            bestTimeToCall: bestTimeToCall,
	            comments: comments,
	            name: name,
	            timeZone: timeZone//,
	            /*captchaResponse: grecaptcha.getResponse()*/
	        },
	        success: function(data, textStatus, jqXHR) {
	        	/*if(data == "captchaFailed"){
	        		$('#contact-form').find('.success-text').html("Wrong captcha or captcha expired!");
	        	} else {
	        		$('#contact-form').find('.success-text').html("Thanks! We will be in touch soon!");
	        	}*/
	        	$('#contact-form').find('.success-text').css({'display':'block'});
	        	$('#contact-form').find('.hide-contact-fields').hide();
	        	$('#contact-form').find('.error-text').hide();
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	           alert("error"+errorThrown);
	        }
	    });
}

function sendContactForm(contactForm) {
	var email = $("#contact-form-email").val(), phone = $("#contact-form-phone").val(), bestTimeToCall = $("#contact-form-best-time").val(), comments = $("#contact-form-comments").val(),name = $("#contact-form-name").val(), timeZone = $("#contact-time-zone").val();
   submitContactInfo(email, phone, bestTimeToCall, comments,name,timeZone);
}

function validateContactus() {    
	$("#contact-form").find(".error-text").hide();
	$("#contact-form").find(".success-text").hide();
	if ($("#contact-form-name").val().length < 3){
		return void displayErrorText("Please enter your name.", "#contact-form");
	}
	
	if(!isValidEmail($("#contact-form-email").val())) {
		return void displayErrorText("Please enter a valid email address.", "#contact-form");
	}
	
	if($("#contact-form-phone").val().length == 0) {
		return void displayErrorText("Please enter a phone number.", "#contact-form");
	}
	
	if($("#contact-form-phone").val().length > 0) {
		var regExp = new RegExp(/^\(\d{3}\) \d{3}-\d{4}$/);
		if(!regExp.test($("#contact-form-phone").val())) {
			return void displayErrorText("Please enter a valid phone number.", "#contact-form");
		}
	}
	
	if ($("#contact-form-best-time").val().length==0) {
		return void displayErrorText("Please enter a best time to call.", "#contact-form");
	}
	
	if($("#contact-time-zone").val() == "" || $("#contact-time-zone").val() == null){
		return void displayErrorText("Please select a time zone.", "#contact-form");
	}
	
	/*if(grecaptcha.getResponse() == null || grecaptcha.getResponse() == ""){
		return void displayErrorText("Are you robot? Please select a captcha if not.", "#contact-form");
	}*/
	
	sendContactForm(document.contactForm);
	
	/*if ($("#contact-form-phone").val().length > 0) {
		if ($("#contact-form-best-time").val().length==0) {
			return void displayErrorText("Please enter a best time to call.", "#contact-form");
		}
	}
	if ($("#contact-form-best-time").val().length > 0) {
		if ($("#contact-form-phone").val().length==0) {
			return void displayErrorText("Please enter a phone number.", "#contact-form");
		}
	}*/
	
}


function renderRedBannerContent() {
	var redBannerTextOptions = new Array(5);
	redBannerTextOptions[0]=  'The Average Joe qualifies for Standard Pricing. The Fit and Healthy will likely qualify for Best Class Pricing.';
	redBannerTextOptions[1] = 'Want the most coverage for the lowest premium? Get a quote here for your Term Life coverage.';
	redBannerTextOptions[2] = 'Fitness + Nutrition + Good Family History = Pricing that is significantly less expensive than that of the average person.';
	redBannerTextOptions[3] = 'Applying for coverage and committing to coverage are not the same thing. The final decision is always yours.';
	redBannerTextOptions[4] = 'Around 20% of the population qualifies for Best Class pricing. Are you in the top 20%?';

	//changeSection("#home-page-div");
	var randomNumber=Math.floor(Math.random()*(redBannerTextOptions.length));
	$('#red-banner p').text(redBannerTextOptions[randomNumber]);
}


function validateForPremiumQuote() {
	$("#needs-calculator-demographics-form").find(".error-text").hide();
	var regExp = new RegExp(/^\(\d{3}\) \d{3}-\d{4}$/);
	if ($("#calc-first-name").val().length < 3) {
		return void displayErrorText("Please enter your first name.", "#calculator-demographics");
	}
	else if ($("#calc-date-of-birth").val().length < 7) {
		alert("validateQuote");
    	return void displayErrorText("Please enter a valid date of birth.", "#calculator-demographics");
	}	
	else if (!isValidEmail($("#calc-email-address").val())) { 
    	return void displayErrorText("Please enter a valid email address.", "#calculator-demographics");
	} 
	else if($("#calc-form-phone").val().length == 0) {
		return void displayErrorText("Please enter a phone number.", "#calculator-demographics");
	}
	else if($("#calc-form-phone").val().length > 0 && !regExp.test($("#calc-form-phone").val())) {
    		return void displayErrorText("Please enter a valid phone number.", "#calculator-demographics");
    }
	else if ($("#calc-state").val()== '') {
		return void displayErrorText("Please select a state.", "#calculator-demographics");
	}
	/*else if ($("#calc-state").val() == 'NY') {
		window.location.href='/'+hostName+'/loadNYContactus.do';
	}*/
	else {
		var demographicData = $(needsCalculatorDemographicsForm).serializeObject();
		var USCitizen = true, PolicyOwner = true, ReplacementPolicy=true;
		var selectedPath = demographicData['path_selected'];
		var allowMarketing=document.getElementById('calc-allow_marketing').checked;
		var phone=$("#calc-form-phone").val();
		var affordablePremium = demographicData['coverage'];
		if(demographicData['us_citizen'] == undefined)
			USCitizen = false;
		if(demographicData['policy_owner'] == undefined)
			PolicyOwner = false;
		if(demographicData['not_replacing'] == undefined)
			ReplacementPolicy = false;
		if(demographicData['rec-coverage'] !== undefined)
			recCoverage = demographicData['rec-coverage'];
		
		if (!USCitizen || !PolicyOwner || !ReplacementPolicy) {
			window.location.href='/'+hostName+'/contactus.do';
		}
		else {
		showOverlay("wOverlayId", "loading");
	    $.ajax({
	        url: "getQuote.do",
	        type: "POST",
	        data: {
	        	coverageAmount : demographicData['requested_coverage'],
				policyTerm : demographicData['policy_term'],
				birthDate : demographicData['date-of-birth'],
				gender : demographicData['gender'],
				smoker : demographicData['smoker'],
				emailAddress : demographicData['email-address'],
				firstName : demographicData['first-name'],
				state : demographicData['state'],
				USCitizen : USCitizen,
				PolicyOwner : PolicyOwner,
				ReplacementPolicy : ReplacementPolicy,
				noOfYearsToMaintainCoverage : recCoverage,
				selectedPath : selectedPath,
				allowMarketing : allowMarketing,
				quotePhone : phone,
				affordablePremium : affordablePremium
	        },
	        success: function(data, textStatus, jqXHR) {
	        	/*if(obj=="calculateneed")
	        	document.getElementById('needs-calculator').style.display="none";*/
	        	var retdata = JSON.parse(data);
	        	var errorMessage = retdata.errorMessage;
	        	if(errorMessage !== ""){
	        		displayErrorText(errorMessage, "#calculator-demographics");
	        	}else{
	        		document.getElementById('calculator-report').style.display="none";
		        	document.getElementById('quote-page').style.display="block";
	        		var profile = JSON.parse(retdata.profileVO);
	        		var fakeResponseData = {
	    		        bestClassPrice: +parseInt(profile.appliedQuoteVO.bestPremiumPerMonth),
	    		        standardClassPrice: +parseInt(profile.appliedQuoteVO.standardPremiumPerMonth),
	    		        recomondedCoverage: +parseInt(profile.appliedQuoteVO.coverage),
	    		        standardCoverage: +parseInt(profile.appliedQuoteVO.standardCoverage)
	    		    };
	        		$("#original-quote_selected").val(selectedPath);
	        		$("#comparison-quote_selected").val(selectedPath);

	        		successCallbackForTwentyFiveDollars(fakeResponseData,profile);
	        	}
	        	hideOverlay("wOverlayId", "loading");
	        	$('#quote-page').find('.error-text').html("");
	        	$('#quote-page').find('.success-text').html("");
				$('#quote-page').find('.success-text').css({'display':'none'});
	        },
	        error: function(jqXHR, textStatus, errorThrown) {
	        	displayErrorText("Please try again.", formId);
	        	hideOverlay("wOverlayId", "loading");
	        }
	    });
	  }//else
	}	
	
}

function validateCoverageAmount(){
	if ($("#coverageAmount").val()== '') {
		return void displayErrorText("Please select coverage amount", "#coverage_amount");
	}else {
		$("#select-coverage-form").submit(function(){
		 return true;
		});
		$("#select-coverage-form").submit();
	}
}

function validateCoverageAmountMlc(){
	if ($("#coverageAmount").val()== '') {
		return void displayErrorText("Please select coverage amount", "#main_coverage_amount");
	}else {
		$("#main-coverage-form").submit(function(){
		 return true;
		});
		$("#main-coverage-form").submit();
	}
}

function validatePremiumMlc(){
	if ($("#affordablePremium").val()== '') {
		return void displayErrorText("Please select affordable amount", "#main-affordable-form");
	} else if($("#afford-full-name").val().length < 3) {
		return void displayErrorText("Please enter your first name.", "#main-affordable-form");
	} else if($("#calc-email-address").val()== '' ||  !isValidEmail($("#calc-email-address").val())) {
		return void displayErrorText("Please enter a valid email address.", "#main-affordable-form");
	} else {
		sessionStorage.setItem('affordableHome',"false");
		$("#main-affordable-form").submit(function(){
		 return true;
		});
		$("#main-affordable-form").submit();
	}
}

function validateMainNeeds(){
	if ($("#annualIncomeId").val()== '') {
		return void displayErrorText("Please enter annual income", "#main_determine_amount");
	}else {
		$("#main-determine-coverage-form").submit(function(){
		 return true;
		});
		$("#main-determine-coverage-form").submit();
	}
}

function validateOLCWorkFlow(){	
	
	if ($("#preference").val()== '' || undefined == $("#preference").val()) {
		return void displayErrorTextHome("Please select the option that sounds most like you.", "#home-page");
	}else {
		$("#home-form").submit(function(){
		 return true;
		});
		$("#home-form").submit();
	}
}

function displayErrorTextHome(message, selector) {
	$(selector).find(".success-text").hide(), $(selector).find(".error-text")
			.hide(), $(selector).find(".error-text").html(message), $(selector)
			.find(".error-text").slideDown(), $("body, html").animate({
		scrollTop : 468
	}, 1000);
}
function changingFirstName() {
	if($("#afford-full-name").val() != '') {
		$("#affordFirstName").text($("#afford-full-name").val());
	}else {
		$("#affordFirstName").text("");
	}
}
