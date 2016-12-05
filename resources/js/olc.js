$(document).ready(function() {

    // open and close the mobile menu
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

    // activate tabs on Insurance 101 page
    $('div.toggle-tabs a.tab').on('click', function(e) {
        e.preventDefault();
        var sectionID = $(this).attr('href');
        $('a.tab').removeClass('active');
        $(this).addClass('active');
        $('div.page').removeClass('visible');
        $('div#' + sectionID).addClass('visible');
    });

    // build array for Affordability path
    var tempTableFor20Term = {
        twentyfive: {
            twentyfive: {
                male: {
                    premium: 25,
                    age: 25,
                    gender: 1,
                    standard: 44,
                    savings: 19,
                    coverage: 550000
                },
                female: {
                    premium: 25,
                    age: 25,
                    gender: 2,
                    standard: 40,
                    savings: 15,
                    coverage: 650000
                }
            },
            thirty: {
                male: {
                    premium: 25,
                    age: 30,
                    gender: 1,
                    standard: 44,
                    savings: 19,
                    coverage: 535000
                },
                female: {
                    premium: 25,
                    age: 30,
                    gender: 2,
                    standard: 42,
                    savings: 17,
                    coverage: 650000
                }
            },
            thirtyfive: {
                male: {
                    premium: 25,
                    age: 35,
                    gender: 1,
                    standard: 46,
                    savings: 21,
                    coverage: 525000
                },
                female: {
                    premium: 25,
                    age: 35,
                    gender: 2,
                    standard: 51,
                    savings: 26,
                    coverage: 650000
                }
            },
            forty: {
                male: {
                    premium: 25,
                    age: 40,
                    gender: 1,
                    standard: 50,
                    savings: 25,
                    coverage: 350000
                },
                female: {
                    premium: 25,
                    age: 40,
                    gender: 2,
                    standard: 51,
                    savings: 26,
                    coverage: 450000
                }
            },
            fortyfive: {
                male: {
                    premium: 25,
                    age: 45,
                    gender: 1,
                    standard: 50,
                    savings: 26,
                    coverage: 195000
                },
                female: {
                    premium: 25,
                    age: 45,
                    gender: 2,
                    standard: 41,
                    savings: 16,
                    coverage: 275000
                }
            },
            fifty: {
                male: {
                    premium: 25,
                    age: 50,
                    gender: 1,
                    standard: 37,
                    savings: 12,
                    coverage: 105000
                },
                female: {
                    premium: 25,
                    age: 50,
                    gender: 2,
                    standard: 50,
                    savings: 25,
                    coverage: 170000
                }
            }
        },
        fifty: {
            twentyfive: {
                male: {
                    premium: 50,
                    age: 25,
                    gender: 1,
                    standard: 84,
                    savings: 34,
                    coverage: 1250000
                },
                female: {
                    premium: 50,
                    age: 25,
                    gender: 2,
                    standard: 82,
                    savings: 32,
                    coverage: 1650000
                }
            },
            thirty: {
                male: {
                    premium: 50,
                    age: 30,
                    gender: 1,
                    standard: 89,
                    savings: 39,
                    coverage: 1250000
                },
                female: {
                    premium: 50,
                    age: 30,
                    gender: 2,
                    standard: 88,
                    savings: 38,
                    coverage: 1565000
                }
            },
            thirtyfive: {
                male: {
                    premium: 50,
                    age: 35,
                    gender: 1,
                    standard: 102,
                    savings: 52,
                    coverage: 1200000
                },
                female: {
                    premium: 50,
                    age: 35,
                    gender: 2,
                    standard: 107,
                    savings: 57,
                    coverage: 1450000
                }
            },
            forty: {
                male: {
                    premium: 50,
                    age: 40,
                    gender: 1,
                    standard: 95,
                    savings: 45,
                    coverage: 775000
                },
                female: {
                    premium: 50,
                    age: 40,
                    gender: 2,
                    standard: 93,
                    savings: 43,
                    coverage: 985000
                }
            },
            fortyfive: {
                male: {
                    premium: 50,
                    age: 45,
                    gender: 1,
                    standard: 81,
                    savings: 31,
                    coverage: 420000
                },
                female: {
                    premium: 50,
                    age: 45,
                    gender: 2,
                    standard: 90,
                    savings: 40,
                    coverage: 590000
                }
            },
            fifty: {
                male: {
                    premium: 50,
                    age: 50,
                    gender: 1,
                    standard: 77,
                    savings: 27,
                    coverage: 235000
                },
                female: {
                    premium: 50,
                    age: 50,
                    gender: 2,
                    standard: 92,
                    savings: 42,
                    coverage: 390000
                }
            }
        },
        onehundred: {
            twentyfive: {
                male: {
                    premium: 100,
                    age: 25,
                    gender: 1,
                    standard: 167,
                    savings: 67,
                    coverage: 2500000
                },
                female: {
                    premium: 100,
                    age: 25,
                    gender: 2,
                    standard: 162,
                    savings: 62,
                    coverage: 3350000
                }
            },
            thirty: {
                male: {
                    premium: 100,
                    age: 30,
                    gender: 1,
                    standard: 175,
                    savings: 75,
                    coverage: 2500000
                },
                female: {
                    premium: 100,
                    age: 30,
                    gender: 2,
                    standard: 175,
                    savings: 75,
                    coverage: 3300000
                }
            },
            thirtyfive: {
                male: {
                    premium: 100,
                    age: 35,
                    gender: 1,
                    standard: 205,
                    savings: 105,
                    coverage: 2550000
                },
                female: {
                    premium: 100,
                    age: 35,
                    gender: 2,
                    standard: 215,
                    savings: 115,
                    coverage: 3250000
                }
            },
            forty: {
                male: {
                    premium: 100,
                    age: 40,
                    gender: 1,
                    standard: 207,
                    savings: 107,
                    coverage: 1750000
                },
                female: {
                    premium: 100,
                    age: 40,
                    gender: 2,
                    standard: 194,
                    savings: 94,
                    coverage: 2125000
                }
            },
            fortyfive: {
                male: {
                    premium: 100,
                    age: 45,
                    gender: 1,
                    standard: 173,
                    savings: 73,
                    coverage: 875000
                },
                female: {
                    premium: 100,
                    age: 45,
                    gender: 2,
                    standard: 175,
                    savings: 75,
                    coverage: 1300000
                }
            },
            fifty: {
                male: {
                    premium: 100,
                    age: 50,
                    gender: 1,
                    standard: 162,
                    savings: 62,
                    coverage: 535000
                },
                female: {
                    premium: 100,
                    age: 50,
                    gender: 2,
                    standard: 175,
                    savings: 75,
                    coverage: 845000
                }
            }
        },
    };

  //for 10 years term array.
    var tempTable = {
            twentyfive: {
                twentyfive: {
                    male: {
                        premium: 25,
                        age: 25,
                        gender: 1,
                        standard: 44,
                        savings: 19,
                        coverage: 750000 
                    },
                    female: {
                        premium: 25,
                        age: 25,
                        gender: 2,
                        standard: 40,
                        savings: 15,
                        coverage: 1200000 
                    }
                },
                thirty: {
                    male: {
                        premium: 25,
                        age: 30,
                        gender: 1,
                        standard: 44,
                        savings: 19,
                        coverage: 725000 
                    },
                    female: {
                        premium: 25,
                        age: 30,
                        gender: 2,
                        standard: 42,
                        savings: 17,
                        coverage: 1100000 
                    }
                },
                thirtyfive: {
                    male: {
                        premium: 25,
                        age: 35,
                        gender: 1,
                        standard: 46,
                        savings: 21,
                        coverage: 625000 
                    },
                    female: {
                        premium: 25,
                        age: 35,
                        gender: 2,
                        standard: 51,
                        savings: 26,
                        coverage: 850000 
                    }
                },
                forty: {
                    male: {
                        premium: 25,
                        age: 40,
                        gender: 1,
                        standard: 50,
                        savings: 25,
                        coverage: 425000
                    },
                    female: {
                        premium: 25,
                        age: 40,
                        gender: 2,
                        standard: 51,
                        savings: 26,
                        coverage: 575000
                    }
                },
                fortyfive: {
                    male: {
                        premium: 25,
                        age: 45,
                        gender: 1,
                        standard: 50,
                        savings: 26,
                        coverage: 262500
                    },
                    female: {
                        premium: 25,
                        age: 45,
                        gender: 2,
                        standard: 41,
                        savings: 16,
                        coverage: 350000
                    }
                },
                fifty: {
                    male: {
                        premium: 25,
                        age: 50,
                        gender: 1,
                        standard: 37,
                        savings: 12,
                        coverage: 150000 
                    },
                    female: {
                        premium: 25,
                        age: 50,
                        gender: 2,
                        standard: 50,
                        savings: 25,
                        coverage: 175000 
                    }
                }
            },
    		forty: {
                twentyfive: {
                    male: {
                        premium: 100,
                        age: 25,
                        gender: 1,
                        standard: 167,
                        savings: 45,
                        coverage: 1800000
                    },
                    female: {
                        premium: 100,
                        age: 25,
                        gender: 2,
                        standard: 162,
                        savings: 45,
                        coverage: 2000000
                    }
                },
                thirty: {
                    male: {
                        premium: 100,
                        age: 30,
                        gender: 1,
                        standard: 175,
                        savings: 40,
                        coverage: 1500000
                    },
                    female: {
                        premium: 100,
                        age: 30,
                        gender: 2,
                        standard: 175,
                        savings: 45,
                        coverage: 2000000
                    }
                },
                thirtyfive: {
                    male: {
                        premium: 100,
                        age: 35,
                        gender: 1,
                        standard: 205,
                        savings: 60,
                        coverage: 1325000
                    },
                    female: {
                        premium: 100,
                        age: 35,
                        gender: 2,
                        standard: 215,
                        savings: 52,
                        coverage: 1700000
                    }
                },
                forty: {
                    male: {
                        premium: 100,
                        age: 40,
                        gender: 1,
                        standard: 207,
                        savings: 65,
                        coverage: 1000000
                    },
                    female: {
                        premium: 100,
                        age: 40,
                        gender: 2,
                        standard: 194,
                        savings: 41,
                        coverage: 1150000
                    }
                },
                fortyfive: {
                    male: {
                        premium: 100,
                        age: 45,
                        gender: 1,
                        standard: 173,
                        savings: 59,
                        coverage: 575000
                    },
                    female: {
                        premium: 100,
                        age: 45,
                        gender: 2,
                        standard: 175,
                        savings: 55,
                        coverage: 675000
                    }
                },
                fifty: {
                    male: {
                        premium: 100,
                        age: 50,
                        gender: 1,
                        standard: 162,
                        savings: 25,
                        coverage: 325000
                    },
                    female: {
                        premium: 100,
                        age: 50,
                        gender: 2,
                        standard: 175,
                        savings: 36,
                        coverage: 425000
                    }
                }
            },
            fifty: {
                twentyfive: {
                    male: {
                        premium: 50,
                        age: 25,
                        gender: 1,
                        standard: 84,
                        savings: 34,
                        coverage: 1800000
                    },
                    female: {
                        premium: 50,
                        age: 25,
                        gender: 2,
                        standard: 82,
                        savings: 32,
                        coverage: 2000000
                    }
                },
                thirty: {
                    male: {
                        premium: 50,
                        age: 30,
                        gender: 1,
                        standard: 89,
                        savings: 39,
                        coverage: 1700000
                    },
                    female: {
                        premium: 50,
                        age: 30,
                        gender: 2,
                        standard: 88,
                        savings: 38,
                        coverage: 2000000
                    }
                },
                thirtyfive: {
                    male: {
                        premium: 50,
                        age: 35,
                        gender: 1,
                        standard: 102,
                        savings: 52,
                        coverage: 1400000
                    },
                    female: {
                        premium: 50,
                        age: 35,
                        gender: 2,
                        standard: 107,
                        savings: 57,
                        coverage: 1800000
                    }
                },
                forty: {
                    male: {
                        premium: 50,
                        age: 40,
                        gender: 1,
                        standard: 95,
                        savings: 45,
                        coverage: 1100000
                    },
                    female: {
                        premium: 50,
                        age: 40,
                        gender: 2,
                        standard: 93,
                        savings: 43,
                        coverage: 1300000
                    }
                },
                fortyfive: {
                    male: {
                        premium: 50,
                        age: 45,
                        gender: 1,
                        standard: 81,
                        savings: 31,
                        coverage: 825000
                    },
                    female: {
                        premium: 50,
                        age: 45,
                        gender: 2,
                        standard: 90,
                        savings: 40,
                        coverage: 925000
                    }
                },
                fifty: {
                    male: {
                        premium: 50,
                        age: 50,
                        gender: 1,
                        standard: 77,
                        savings: 27,
                        coverage: 450000
                    },
                    female: {
                        premium: 50,
                        age: 50,
                        gender: 2,
                        standard: 92,
                        savings: 42,
                        coverage: 550000
                    }
                }
            },        
        };
    // populate the two values on the Affordability
    // path when the dropdowns are changed
    var affordDropdown = $('select.afford-dropdown');

    var premium = 0;
    var age = 0;
    var gender = 0;
    var savings = 19;
    var coverage = 550000;

    function getCoverage() {
        premium = $("#affordablePremium").val();
        age = $("#affordableAge").val();
        gender = $("#affordableGender").val();
        var coverageObj = tempTable[premium][age][gender];

        coverage = coverageObj.coverage;
        /*This block of code for restricting the coverage maximum to 2M. by venkat*/
        if(coverage>2e6)
        	coverage = 2000000;
        
        var coverageAsDollar = '$' + coverage.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        savings = coverageObj.savings;
        var savingsAsDollar = '$' + savings.toFixed(0).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");

        var totalCoverage = $('span#totalCoverage');
        var totalSavings = $('span#totalSavings');

        totalCoverage.html(coverageAsDollar);
        totalSavings.html(savingsAsDollar);
        $("#hiddenCoverage").val(coverageAsDollar);
    }

    affordDropdown.on("change", function() {
        getCoverage();
    });

    $('#heroCarousel').carousel({ interval: 12000 });
    $('#footerCarousel').carousel({ interval: 10000 });

    var currentPage;
    currentPage = 1;

    $(".btn.goforward").click(function() {
        var nextPage;

        switch (currentPage) {
            case 2:
                {
                    nextPage = 4;
                    break;
                }
            case 3:
                {
                    nextPage = 4;
                    break;
                }
            case 4:
                {
                    nextPage = 5;
                    break;
                }
            case 5:
                {
                    nextPage = 7;
                    break;
                }
            case 6:
                {
                    nextPage = 7;
                    break;
                }
            case 7:
                {
                    nextPage = 8;
                    break;
                }
            case 8:
                {
                    nextPage = 10;
                    break;
                }
            case 9:
                {
                    nextPage = 10;
                    break;
                }
        }

        $("#quiz-content-" + currentPage).hide();
        $("#quiz-content-" + nextPage).fadeIn();

        currentPage = nextPage;

    });

    $(".btn.goback").click(function() {
        var nextPage;

        switch (currentPage) {
            case 2:
                {
                    nextPage = 1;
                    break;
                }
            case 3:
                {
                    nextPage = 1;
                    break;
                }
            case 4:
                {
                    nextPage = 1;
                    break;
                }
            case 5:
                {
                    nextPage = 4;
                    break;
                }
            case 6:
                {
                    nextPage = 4;
                    break;
                }
            case 7:
                {
                    nextPage = 4;
                    break;
                }
            case 8:
                {
                    nextPage = 7;
                    break;
                }
            case 9:
                {
                    nextPage = 7;
                    break;
                }
        }

        $("#quiz-content-" + currentPage).hide();
        $("#quiz-content-" + nextPage).fadeIn();

        currentPage = nextPage;

    });

    $(".btn.quiz").click(function() {

        $("div.quiz-header h1").hide();
        $("div.quiz-header h3").hide();

        var clickedLink = this.id;
        var nextPage;

        switch (clickedLink) {
            case "btn-single":
                {
                    nextPage = 2;
                    break;
                }
            case "btn-hitched":
                {
                    nextPage = 3;
                    break;
                }
            case "btn-joined":
                {
                    nextPage = 3;
                    break;
                }
            case "btn-kids":
                {
                    nextPage = 5;
                    break;
                }
            case "btn-no-kids":
                {
                    nextPage = 6;
                    break;
                }
            case "btn-mortgage":
                {
                    nextPage = 8;
                    break;
                }
            case "btn-no-mortgage":
                {
                    nextPage = 9;
                    break;
                }
        }

        $("#quiz-content-" + currentPage).hide();
        $("#quiz-content-" + nextPage).fadeIn();

        currentPage = nextPage;

    });
});

// make the sliders stick to the bottom
// of the page on Multicarrier quote
function checkOffset() {
    var rangeSliders = $('#range_sliders');
    if (rangeSliders.length) {
        if (rangeSliders.offset().top + rangeSliders.height() >= $('footer').offset().top - 10) {
            rangeSliders.addClass('unfix');
        }
        if ($(document).scrollTop() + window.innerHeight < $('footer').offset().top) {
            rangeSliders.removeClass('unfix');
        }
    }
}
$(document).scroll(function() {
    checkOffset();
});
