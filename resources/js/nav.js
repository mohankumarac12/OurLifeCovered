$(document).ready(function() {
    $('#open_menu').on('click', function(e) {
        e.preventDefault();
        $('ul#top_nav_menu').addClass('open');
        $('a#close_menu').addClass('open');
    });
    $('#close_menu').on('click', function(e) {
        e.preventDefault();
        $('ul#top_nav_menu').removeClass('open');
        $('a#close_menu').removeClass('open');
    });
});

// New code for recommended multicarrier sliders below

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
        val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}



$("document").ready(function() {
    $(".slider_one").rangeslider_one();
    $(".slider_two").rangeslider_two();
});



$.fn.rangeslider_one = function(options) {
    var obj = this;
    var defautValue = obj.attr("value");
    obj.wrap("<span class='range-slider'></span>");
    obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'></span></span>");
    obj.attr("oninput", "updateSlider_one(this)");
    updateSlider_one(this);
    return obj;
};
$.fn.rangeslider_two = function(options) {
    var obj = this;
    var defautValue = obj.attr("value");
    obj.wrap("<span class='range-slider'></span>");
    obj.after("<span class='slider-container'><span class='bar'><span></span></span><span class='bar-btn'></span></span>");
    obj.attr("oninput", "updateSlider_two(this)");
    updateSlider_two(this);
    return obj;
};



function updateSlider_one(passObj) {
    var obj = $(passObj);
    var value = obj.val();
    var min = obj.attr("min");
    var max = obj.attr("max");
    var range = Math.round(max - min);
    var percentage = Math.round((value - min) * 100 / range);
    var nextObj = obj.next();
    nextObj.find("span.bar-btn").css("left", percentage + "%");
    nextObj.find("span.bar > span").css("width", percentage + "%");
    $(".coverage-amount").text('$'+commaSeparateNumber(value));
};
function updateSlider_two(passObj) {
    var obj = $(passObj);
    var value = obj.val();
    var min = obj.attr("min");
    var max = obj.attr("max");
    var range = Math.round(max - min);
    var percentage = Math.round((value - min) * 100 / range);
    var nextObj = obj.next();
    nextObj.find("span.bar-btn").css("left", percentage + "%");
nextObj.find("span.bar > span").css("width", percentage + "%");
    $(".coverage-term").text(commaSeparateNumber(value)+' years');
};