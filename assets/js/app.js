!function(){var e={957:function(){window.matchMedia("screen and (max-width: 767px)").matches&&(console.log("Media Query Matched!"),$(".blogBlock__inner").addClass("slickSlider"))},804:function(){function e(){$(".slickSlider").each((function(e){var i="carousel"+e;$(this).slick({arrows:!1,fade:!1,button:!0,infinite:!0,dots:!1,appendDots:$("#"+i),responsive:[{breakpoint:766,settings:{slidesToShow:1,slidesToScroll:1,vertical:!1,dots:!0,appendDots:$("#"+i)}}]}),$(".arrowLeft").on("click",(function(){$(".reviewBlock__slider").slick("slickPrev")})),$(".arrowRight").on("click",(function(){$(".reviewBlock__slider").slick("slickNext")}))}))}window.onorientationchange=function(){e()},e()},966:function(){$.validator.methods.mail=function(e,i){return this.optional(i)||/[a-z]+@[a-z]+\.[a-z]+/.test(e)};const e=$(this);$("form").validate({rules:{email:{required:!0,mail:!0,minlength:10,maxlength:25}},messages:{email:{required:"Your e-mail?",mail:"Is that Your e-mail?",minlength:"That's all?",maxlength:"To much"}},submitHandler:function(){$.ajax({type:e.attr("method"),url:e.attr("action"),data:e.serialize()}).done((function(){console.log("success"),$("form").trigger("reset"),$(".popUp").slideToggle("slow")})).fail((function(){console.log("fail")}))},errorPlacement:function(e,i){$("#error").append(e)}}),$(".button_toClose").click((function(e){e.preventDefault(),$(".popUp").css("display","none")}))}};e[957](),e[804](),e[966]()}();