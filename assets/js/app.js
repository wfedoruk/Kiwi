/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function() {

eval("\r\n\r\n\r\n    // $('.menuNav__item').click(function(e)  {\r\n    //     e.preventDefault();\r\n    //     $('.menuDropdown').toggle();\r\n        \r\n        \r\n    // });\r\n\r\n    // $(document).on('click', function(e) {\r\n    //     if (!$(e.target).closest(\".menu\").length) {\r\n    //         $('.menuDropdown').hide();\r\n        \r\n    //     }\r\n        \r\n    // });\r\n\r\n    /* ================popUp=============== */\r\n\t\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function() {

eval(" $(function() {\r\n      $(\".reviewBlock__slider\").slick({\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          arrows: false,\r\n          fade: false,\r\n          button: true,\r\n          infinite: true,\r\n          dots: false,\r\n      \r\n      \r\n      });\r\n\r\n      $('.arrowLeft').on('click', function() {\r\n          $(\".reviewBlock__slider\").slick('slickPrev');\r\n        });\r\n\r\n      $('.arrowRight').on('click', function() {\r\n          $(\".reviewBlock__slider\").slick('slickNext');\r\n        });\r\n    });\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/validate.js":
/*!***********************************!*\
  !*** ./src/assets/js/validate.js ***!
  \***********************************/
/***/ (function() {

eval("\r\n$.validator.methods.mail = function( value, element ) {\r\n    return this.optional( element ) || /[a-z]+@[a-z]+\\.[a-z]+/.test( value );\r\n  };\r\n\r\nconst $form = $(this);\r\n\r\n$(\"form\").validate({\r\n  \r\n    rules:{\r\n        email:{\r\n         required: true,\r\n         mail: true,\r\n         minlength: 10,\r\n         maxlength: 25,\r\n         \r\n        },\r\n    },\r\n    messages:{\r\n        email:{\r\n        required: \"Your e-mail?\",\r\n        mail: \"Is that Your e-mail?\",\r\n        minlength: \"That's all?\",\r\n        maxlength: \"To much\",\r\n      },\r\n    \r\n    },\r\n    \r\n      submitHandler: function() {\r\n        \r\n        $.ajax({\r\n          type: $form.attr('method'),\r\n          url: $form.attr('action'),\r\n          data: $form.serialize()\r\n        }).done(function() {\r\n          console.log('success');\r\n          $('form').trigger(\"reset\");\r\n          $(\".popUp\").slideToggle(\"slow\" );  \r\n        }).fail(function() {\r\n          console.log('fail');\r\n        });\r\n      \r\n    },\r\n\r\n    errorPlacement: function ($error, $element) {\r\n    //   var name = $element.attr(\"name\");\r\n      \r\n      $(\"#error\").append($error);\r\n      \r\n    }\r\n});\r\n\r\n// $(\".button_moveToRight\").click(function(e){\t\r\n//   e.preventDefault();\r\n//   $(\".popUp\").slideToggle(\"slow\" );  \r\n// });\t\r\n\r\n\r\n  $(\".button_toClose\").click(function(e){\t\r\n  e.preventDefault();\r\n  $(\".popUp\").css(\"display\", \"none\");  \r\n});\t\r\n\r\n\n\n//# sourceURL=webpack://brainscloud/./src/assets/js/validate.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/app.js"]();
/******/ 	__webpack_modules__["./src/assets/js/slider.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/validate.js"]();
/******/ 	
/******/ })()
;