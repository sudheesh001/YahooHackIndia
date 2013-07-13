(function (d) {
    if (Modernizr.localstorage) {
        if (localStorage.getItem("start.menu_state") === null) {
            localStorage["start.menu_state"] = "sidebar_default";

        }
    } else {}
    d(function () {
        
        d("input:checkbox, input:radio, input:file").uniform();
        d("[rel=tooltip]").tooltip();
        d(".bar_1").sparkline([3, 4, 8, 5, 3, 6, 3, 2, 3, 5], {
            type: "bar",
            barColor: "#fff"
        });
        d(".bar_2").sparkline([5, 3, 9, 6, 5, 9, 7, 3, 5, 2], {
            type: "bar",
            barColor: "#fff"
        });
        d(".bar_3").sparkline([6, 9, 3, 5, 3, 5, 2, 8, 9, 6, 3], {
            type: "bar",
            barColor: "#fff"
        });
        // if (Modernizr.canvas) {
        //     d(".bar1").peity("bar", {
        //         colour: "#fff",
        //         width: 30,
        //         height: 17
        //     }).fadeIn();
        //     d(".bar2").peity("bar", {
        //         colour: "#fff",
        //         width: 30,
        //         height: 17
        //     }).fadeIn();
        //     d(".bar3").peity("bar", {
        //         colour: "#fff",
        //         width: 350,
        //         height: 60
        //     }).fadeIn();
        //     d(".line").peity("line").fadeIn()
        // }
    });
    

    

    //Close The Menu
     var close_the_menu = function () {
        d('html.sidebar_icons #sidebar_menu a.accordion-toggle').parent().removeClass('opened');
        d('html.sidebar_icons #sidebar_menu .collapse.in').collapse('hide');
    };
    //Open The Menu
     var show_the_menu = function () {
        d('html').addClass("active");
    };


    d(".box.paint_hover").append('<a class="change_color_outside"><i class="paint_bucket"></i></a>');
    d(".box.paint").append('<a class="btn change_color_outside"><i class="paint_bucket"></i></a>');
    var a = [];
    for (var c = 0;
    c <= 27;
    c++) {
        a[c] = "color_" + c
    }
    var b = d("a.change_color");
    d("a.change_color_outside").on("click", this, function (f) {
        var h = this;
        current_box = d(this).closest(".box");
        var g = d(this).offset();
        f.stopPropagation();
        d(".background_changer").css({
            left: g.left - d("#colors_pallete ul").outerWidth() + d(this).outerWidth(),
            top: g.top + d(this).outerHeight()
        });
        b.click()
    });
    d(".background_changer li a").on("click", this, function (h) {
        var g = d(this),
            f = g.attr("data-color");
        d(".background_changer li a").removeClass("active");
        g.addClass("active");
        d.each(a, function (j, k) {
            current_box.removeClass(k)
        });
        current_box.addClass(f)
    });
    d(function () {
        d("#sidebar_menu a.accordion-toggle").on("click", function () {
            setTimeout(function () {
                d("#sidebar").tinyscrollbar_update("relative")
            }, 300);
            var i = d(this);
            var h = i.closest("li").hasClass("opened");
            i.closest("ul").find("li.opened").removeClass("opened");
            if (!h) {
                i.closest("li").addClass("opened")
            }
        });
        d("#github").Touchdown();
        d("select1").each(function (l, n) {
            if (!(d(n).data("convert") == "no")) {
                var q = d(n).hide(),
                    p = q.children("option:selected").text(),
                    k = q.children("option:selected").data("icon-color"),
                    t = q.children("option"),
                    j = q.data("labeled"),
                    o = q.attr("class"),
                    h = null;
                var s = d('<div class="btn-group" id="select-group-' + l + '">').insertAfter(q),
                    m = q.val() ? q.val() : "&nbsp;",
                    r = null;
                h = (j) ? '<i class="icon-sign-blank ' + k + '"></i>' : "";
                d('<a class="btn dropdown-toggle ' + o + '" data-toggle="dropdown" href="#">' + h + p + '<span class="icon-sort"></span></a><ul class="dropdown-menu"></ul>').appendTo(s);
                t.each(function (v, u) {
                    var i = d(u).data("icon-color");
                    if (typeof i === "undefined") {
                        i = " color" + (v + 1)
                    } else {
                        i = " " + i
                    }
                    if (j) {
                        h = '<i class="icon-sign-blank ' + i + '"></i>'
                    } else {
                        h = ""
                    }
                    r = d('<li><a tabindex="-1" href="#" " data-value="' + d(u).attr("value") + '">' + h + u.text + "</a></li>");
                    s.find(".dropdown-menu").append(r);
                    if (d(u).attr("selected")) {
                        s.find(".dropdown-menu li:eq(" + v + ")").click()
                    }
                });
                s.find(".dropdown-menu a").click(function (u) {
                    var i = d(this);
                    u.preventDefault();
                    s.find(".btn:eq(0)").html(i.html() + '<span class="icon-sort"></span>');
                    q.find("[selected]").removeAttr("selected");
                    q.find('[value="' + i.data("value") + '"]').attr("selected", "selected");
                    q.change()
                })
            }
        });
        d(".navbar").on("hover", " .dropdown", function () {
            d(this).children(".dropdown-toggle").click()
        });
        d(".fileinput").customFileInput({
            button_position: "right"
        });
        d(".datepicker").datepicker();
        var g = false;
        var f = d(".toggle");
        f.siblings().hide();
        f.show();
        if (f.siblings().find(":checked").val() == "on") {
            f.removeClass("off").addClass("on")
        } else {
            f.removeClass("on").addClass("off")
        }
        d(".content").on("click", ".toggle", function () {
            var h = d(this);
            if (h.hasClass("on")) {
                h.siblings(".off").click();
                h.removeClass("on").addClass("off")
            } else {
                h.siblings(".on").click();
                h.removeClass("off").addClass("on")
            }
        })
    });

    function e() {
        try {
            document.createEvent("TouchEvent");
            return true
        } catch (f) {
            return false
        }
    }
    if (e()) {
        d("#sidebar").css({
            position: "absolute"
        });
        d("html.sidebar_hover.active #sidebar").css("left", "315px");
        d("html.sidebar_icons.active #sidebar").css("left", "315px");
        d("#sidebar .track").remove();
        d("body").swipe({
            swipeLeft: function () {
                d("html").removeClass("active");
                startToggled = false
            },
            swipeRight: function () {
                d("html").addClass("active");
                startToggled = true
            }
        });
    }
    d(window).on("resize", function () {
        d("#loading").remove()
    });
    d("body").css("min-height", d(window).height());

    d(window).load(function () {
        close_the_menu();

        if (d.browser.msie && (parseInt(d.browser.version) <= 9)) {
            d("#loading, .no_ie").remove();
            d("#sidebar").css("position", "absolute");
            d(".menu_states").remove()
        }
    });
    if (d.browser.msie && (parseInt(d.browser.version) < 10)) {
        // IE here :(
        var menu_height = d("#sidebar .overview").height();
        if(menu_height > d("#main").height()) {
              d("body").css("height", menu_height);
        } 
        
    } else {

        enquire.register("screen and (min-width: 769px)", {
            match: function () {
                if (e()) {
                    d(".viewport").height(d(document).height())
                } else {
                    d(".viewport").height(d(window).height());
                    d("#sidebar").height(d(window).height())
                }
                setTimeout(function () {
                    d("#sidebar").tinyscrollbar()
                }, 500);
                d(window).on("resize", function () {
                    d("#sidebar, .viewport").height(d(window).height());
                    d("#sidebar").tinyscrollbar_update("relative")
                });
                var   o = false;
                var f = function () {
                    var l = null,
                        n = 15,
                        h = d("#sidebar").width(),
                        q, m, p = 300,
                        k = 500,
                        i = true,
                        s = true;
                      
                   
                    var r = function () {
                        if (l < n) {
                            d("html").addClass("active");
                            d('html.sidebar_icons #sidebar li.accordion-group.active .collapse').collapse('show');
                            o = true;
                        }
                       
                    };
                    var j = function () {
                        if (l > h) {
                            d("html").removeClass("active");
                            o = false;
                            //Close the accordion menu item
                            close_the_menu();
                        }
                    };
                    

                    d("body").on("mousemove", function (t) {
                        l = t.pageX;
                        
                        if (!o) {
                            if (t.pageX < 15) {
                                q = setTimeout(r, p)
                            } else {
                                clearTimeout(q)
                            }
                        } else {
                            if (t.pageX > 315) {
                                m = setTimeout(j, k)
                            } else {
                                clearTimeout(m)
                            }
                        }
                    });

                    //Open the sidebar
                    d('html.sidebar_icons #sidebar_menu a.accordion-toggle').on("click", function () {
                        // d('html').addClass("active");
                        show_the_menu();
                        o = true;
                    });
                };
                
                var g = ["sidebar_icons", "sidebar_default", "sidebar_hover"];
                d.each(g, function (j, h) {
                    d("html").removeClass(h)
                });
                d(".menu_states button").removeClass("active");
                if (Modernizr.localstorage) {
                    d("html").addClass(localStorage["start.menu_state"]);
                    d('.menu_states button[data-state="' + localStorage["start.menu_state"] + '"]').addClass("active");
                } else {
                    d("html").addClass("state_default")
                }
                d(".menu_states button").on("click", this, function () {
                    d.each(g, function (j, h) {
                        d("html").removeClass(h)
                    });
                    menu_class = d(this).attr("data-state");
                    d("html").addClass(menu_class);
                    d('html.'+menu_class+' #sidebar_menu a.accordion-toggle').on("click", function () {
                        show_the_menu();

                        o = true;
                        console.log(o);
                    });

                    localStorage["start.menu_state"] = menu_class;
                    d(".menu_states button").removeClass("active");
                    d(this).addClass("active");
                });

                f();
            }
        }).register("screen and (min-width: 600px)", {
            match: function () {
                d(document).ready(function () {
                    d("body").fadeIn(500);

                    function f() {
                        window.location = newLocation
                    }
                });
                d(window).load(function () {
                    d("#loading").fadeOut()
                })
            }
        }).register("screen and (max-width: 769px)", {
            match: function () {
                if (e()) {
                    d("#sidebar").css({
                        top: "64px",
                        left: "0px"
                    })
                }
            }
        }).fire()
    }
})(jQuery);