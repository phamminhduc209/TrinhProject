!function(a){"use strict";a(".stick-header").sticky({topSpacing:0}),a(window).scroll(function(){a(this).scrollTop()>=200?a("#return-to-top").addClass("td-scroll-up-visible"):a("#return-to-top").removeClass("td-scroll-up-visible")}),a("#return-to-top").click(function(){a("body,html").animate({scrollTop:0},"slow")}),a(document).ready(function(){a(".owl-carousel").each(function(b,c){var d=a(this).data();d.navText=['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],d.smartSpeed="800",a(this).hasClass("owl-style2")&&(d.animateOut="fadeOut",d.animateIn="fadeIn"),a(this).hasClass("dotsData")&&(d.dotsData="true"),a(this).owlCarousel(d)})}),a(".header .navbar-toggle").click(function(){a(".header .block-menu .menu").toggle("slow")})}(jQuery);