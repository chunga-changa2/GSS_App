/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/test.js */ "./src/js/modules/test.js");
/* harmony import */ var _modules_test_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_test_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_jquery_arcticmodal_0_3_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/jquery.arcticmodal-0.3.min.js */ "./src/js/modules/jquery.arcticmodal-0.3.min.js");
/* harmony import */ var _modules_jquery_arcticmodal_0_3_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_jquery_arcticmodal_0_3_min_js__WEBPACK_IMPORTED_MODULE_1__);
// include jQuery
// import './modules/code.jquery.com_jquery-3.7.1.min.js';



// the code startes here js/jQuery
// console.log('Ok, here my code. eeeeE');

/***/ }),

/***/ "./src/js/modules/jquery.arcticmodal-0.3.min.js":
/*!******************************************************!*\
  !*** ./src/js/modules/jquery.arcticmodal-0.3.min.js ***!
  \******************************************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/*

 arcticModal — jQuery plugin
 Version: 0.3
 Author: Sergey Predvoditelev (sergey.predvoditelev@gmail.com)
 Company: Arctic Laboratory (http://arcticlab.ru/)

 Docs & Examples: http://arcticlab.ru/arcticmodal/

 */
(function (d) {
  var g = {
      type: "html",
      content: "",
      url: "",
      ajax: {},
      ajax_request: null,
      closeOnEsc: !0,
      closeOnOverlayClick: !0,
      clone: !1,
      overlay: {
        block: void 0,
        tpl: '<div class="arcticmodal-overlay"></div>',
        css: {
          backgroundColor: "#000",
          opacity: 0.6
        }
      },
      container: {
        block: void 0,
        tpl: '<div class="arcticmodal-container"><table class="arcticmodal-container_i"><tr><td class="arcticmodal-container_i2"></td></tr></table></div>'
      },
      wrap: void 0,
      body: void 0,
      errors: {
        tpl: '<div class="arcticmodal-error arcticmodal-close"></div>',
        autoclose_delay: 2E3,
        ajax_unsuccessful_load: "Error"
      },
      openEffect: {
        type: "fade",
        speed: 400
      },
      closeEffect: {
        type: "fade",
        speed: 400
      },
      beforeOpen: d.noop,
      afterOpen: d.noop,
      beforeClose: d.noop,
      afterClose: d.noop,
      afterLoading: d.noop,
      afterLoadingOnShow: d.noop,
      errorLoading: d.noop
    },
    j = 0,
    e = d([]),
    m = {
      isEventOut: function isEventOut(a, b) {
        var c = !0;
        d(a).each(function () {
          d(b.target).get(0) == d(this).get(0) && (c = !1);
          0 == d(b.target).closest("HTML", d(this).get(0)).length && (c = !1);
        });
        return c;
      }
    },
    f = {
      getParentEl: function getParentEl(a) {
        var b = d(a);
        return b.data("arcticmodal") ? b : (b = d(a).closest(".arcticmodal-container").data("arcticmodalParentEl")) ? b : !1;
      },
      transition: function transition(a, b, c, e) {
        e = void 0 == e ? d.noop : e;
        switch (c.type) {
          case "fade":
            "show" == b ? a.fadeIn(c.speed, e) : a.fadeOut(c.speed, e);
            break;
          case "none":
            "show" == b ? a.show() : a.hide(), e();
        }
      },
      prepare_body: function prepare_body(a, b) {
        d(".arcticmodal-close", a.body).unbind("click.arcticmodal").bind("click.arcticmodal", function () {
          b.arcticmodal("close");
          return !1;
        });
      },
      init_el: function init_el(a, b) {
        var c = a.data("arcticmodal");
        if (!c) {
          c = b;
          j++;
          c.modalID = j;
          c.overlay.block = d(c.overlay.tpl);
          c.overlay.block.css(c.overlay.css);
          c.container.block = d(c.container.tpl);
          c.body = d(".arcticmodal-container_i2", c.container.block);
          b.clone ? c.body.html(a.clone(!0)) : (a.before('<div id="arcticmodalReserve' + c.modalID + '" style="display: none" />'), c.body.html(a));
          f.prepare_body(c, a);
          c.closeOnOverlayClick && c.overlay.block.add(c.container.block).click(function (b) {
            m.isEventOut(d(">*", c.body), b) && a.arcticmodal("close");
          });
          c.container.block.data("arcticmodalParentEl", a);
          a.data("arcticmodal", c);
          e = d.merge(e, a);
          d.proxy(h.show, a)();
          if ("html" == c.type) return a;
          if (void 0 != c.ajax.beforeSend) {
            var k = c.ajax.beforeSend;
            delete c.ajax.beforeSend;
          }
          if (void 0 != c.ajax.success) {
            var g = c.ajax.success;
            delete c.ajax.success;
          }
          if (void 0 != c.ajax.error) {
            var l = c.ajax.error;
            delete c.ajax.error;
          }
          var n = d.extend(!0, {
            url: c.url,
            beforeSend: function beforeSend() {
              void 0 == k ? c.body.html('<div class="arcticmodal-loading" />') : k(c, a);
            },
            success: function success(b) {
              a.trigger("afterLoading");
              c.afterLoading(c, a, b);
              void 0 == g ? c.body.html(b) : g(c, a, b);
              f.prepare_body(c, a);
              a.trigger("afterLoadingOnShow");
              c.afterLoadingOnShow(c, a, b);
            },
            error: function error() {
              a.trigger("errorLoading");
              c.errorLoading(c, a);
              void 0 == l ? (c.body.html(c.errors.tpl), d(".arcticmodal-error", c.body).html(c.errors.ajax_unsuccessful_load), d(".arcticmodal-close", c.body).click(function () {
                a.arcticmodal("close");
                return !1;
              }), c.errors.autoclose_delay && setTimeout(function () {
                a.arcticmodal("close");
              }, c.errors.autoclose_delay)) : l(c, a);
            }
          }, c.ajax);
          c.ajax_request = d.ajax(n);
          a.data("arcticmodal", c);
        }
      },
      init: function init(a) {
        a = d.extend(!0, {}, g, a);
        if (d.isFunction(this)) {
          if (void 0 == a) d.error("jquery.arcticmodal: Uncorrect parameters");else if ("" == a.type) d.error('jquery.arcticmodal: Don\'t set parameter "type"');else switch (a.type) {
            case "html":
              if ("" == a.content) {
                d.error('jquery.arcticmodal: Don\'t set parameter "content"');
                break;
              }
              var b = a.content;
              a.content = "";
              return f.init_el(d(b), a);
            case "ajax":
              if ("" == a.url) {
                d.error('jquery.arcticmodal: Don\'t set parameter "url"');
                break;
              }
              return f.init_el(d("<div />"), a);
          }
        } else return this.each(function () {
          f.init_el(d(this), d.extend(!0, {}, a));
        });
      }
    },
    h = {
      show: function show() {
        var a = f.getParentEl(this);
        if (!1 === a) d.error("jquery.arcticmodal: Uncorrect call");else {
          var b = a.data("arcticmodal");
          b.overlay.block.hide();
          b.container.block.hide();
          d("BODY").append(b.overlay.block);
          d("BODY").append(b.container.block);
          b.beforeOpen(b, a);
          a.trigger("beforeOpen");
          if ("hidden" != b.wrap.css("overflow")) {
            b.wrap.data("arcticmodalOverflow", b.wrap.css("overflow"));
            var c = b.wrap.outerWidth(!0);
            b.wrap.css("overflow", "hidden");
            var g = b.wrap.outerWidth(!0);
            g != c && b.wrap.css("marginRight", g - c + "px");
          }
          e.not(a).each(function () {
            d(this).data("arcticmodal").overlay.block.hide();
          });
          f.transition(b.overlay.block, "show", 1 < e.length ? {
            type: "none"
          } : b.openEffect);
          f.transition(b.container.block, "show", 1 < e.length ? {
            type: "none"
          } : b.openEffect, function () {
            b.afterOpen(b, a);
            a.trigger("afterOpen");
          });
          return a;
        }
      },
      close: function close() {
        if (d.isFunction(this)) e.each(function () {
          d(this).arcticmodal("close");
        });else return this.each(function () {
          var a = f.getParentEl(this);
          if (!1 === a) d.error("jquery.arcticmodal: Uncorrect call");else {
            var b = a.data("arcticmodal");
            !1 !== b.beforeClose(b, a) && (a.trigger("beforeClose"), e.not(a).last().each(function () {
              d(this).data("arcticmodal").overlay.block.show();
            }), f.transition(b.overlay.block, "hide", 1 < e.length ? {
              type: "none"
            } : b.closeEffect), f.transition(b.container.block, "hide", 1 < e.length ? {
              type: "none"
            } : b.closeEffect, function () {
              b.afterClose(b, a);
              a.trigger("afterClose");
              b.clone || d("#arcticmodalReserve" + b.modalID).replaceWith(b.body.find(">*"));
              b.overlay.block.remove();
              b.container.block.remove();
              a.data("arcticmodal", null);
              d(".arcticmodal-container").length || (b.wrap.data("arcticmodalOverflow") && b.wrap.css("overflow", b.wrap.data("arcticmodalOverflow")), b.wrap.css("marginRight", 0));
            }), "ajax" == b.type && b.ajax_request.abort(), e = e.not(a));
          }
        });
      },
      setDefault: function setDefault(a) {
        d.extend(!0, g, a);
      }
    };
  d(function () {
    g.wrap = d(document.all && !document.querySelector ? "html" : "body");
  });
  d(document).bind("keyup.arcticmodal", function (a) {
    var b = e.last();
    b.length && b.data("arcticmodal").closeOnEsc && 27 === a.keyCode && b.arcticmodal("close");
  });
  d.arcticmodal = d.fn.arcticmodal = function (a) {
    if (h[a]) return h[a].apply(this, Array.prototype.slice.call(arguments, 1));
    if ("object" === _typeof(a) || !a) return f.init.apply(this, arguments);
    d.error("jquery.arcticmodal: Method " + a + " does not exist");
  };
})(jQuery);

/***/ }),

/***/ "./src/js/modules/test.js":
/*!********************************!*\
  !*** ./src/js/modules/test.js ***!
  \********************************/
/***/ (() => {

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
$(document).ready(function () {
  // Betabox
  $('.sample small').after('<span>Beta test</span>');

  // alert("erer111");

  $.mask.definitions['d'] = "[0-9]"; //цифры
  $.mask.definitions['l'] = "[a-z]"; //буквы латинские
  $.mask.definitions['k'] = "[а-я]"; //буквы кирилические

  $('#sample_id').mask('dddd', {
    autoclear: false
  }); // номер партии
  $('.invoice_box input').mask('kk dddddd', {
    autoclear: false
  }); //номер наклодной
  // $('#invoice_id'+i+'').mask('kk dddddd',{autoclear: false}); //номер наклодной
  $('.seal_serial__form_in input[data=id_masck_seal]').mask('ll dddddd', {
    autoclear: false
  }); //номер наклодной
  $('.seal_serial__form_in input[data=massa_brutto]').mask('dddd', {
    autoclear: false
  }); //номер наклодной
  $('#num_wagon_id').mask('dd', {
    autoclear: false
  }); //номер наклодной
  $('#net_weight_sampled_id').mask('dddd,d', {
    autoclear: false
  }); //номер наклодной

  var i = 1;

  // Добавление input для наклодных с кнопкой удаления
  $(".clone_invoice_btn").on("click", function () {
    // i==1;
    i++;

    // input с кнопкой удаления (добавляется по кнопке class="clone_invoice_box")
    $('.clone_invoice_box').append("<div class='invoice_box' id='id_line" + i + "'><input type='text' name='invoice" + i + "' id='invoice_id" + i + "' autocomplete='off' required ></input><label for='invoice_id" + i + "'>Серия и номер</label><div class='remove_button' id='" + i + "'</div><svg width='14' height='14' viewBox='0 0 14 14' xmlns='http://www.w3.org/2000/svg'><path d='M13.53 12.47C13.823 12.763 13.823 13.238 13.53 13.531C13.384 13.677 13.192 13.751 13 13.751C12.808 13.751 12.616 13.678 12.47 13.531L6.99999 8.061L1.52999 13.531C1.38399 13.677 1.19199 13.751 0.999993 13.751C0.807993 13.751 0.615994 13.678 0.469994 13.531C0.176994 13.238 0.176994 12.763 0.469994 12.47L5.94 7.00002L0.469994 1.53005C0.176994 1.23705 0.176994 0.762018 0.469994 0.469018C0.762994 0.176018 1.238 0.176018 1.531 0.469018L7.001 5.93905L12.471 0.469018C12.764 0.176018 13.239 0.176018 13.532 0.469018C13.825 0.762018 13.825 1.23705 13.532 1.53005L8.06199 7.00002L13.53 12.47Z'/></svg></div>");
    $('.invoice_numbers_right').append('<p data="index' + i + '"></p> ');
    $('input[name=invoice' + i + '').keyup(function () {
      var valw = $('input[name=invoice' + i + '').val(); //Получаем данные из input
      $('.invoice_numbers_right p[data=index' + i + ']').text(valw); //Вставляем значение в тег с классом txt
    });

    // Удаление input с номерами наклодных тех что больше одного
    $(document).on('click', '.remove_button', function () {
      var button_id = $(this).attr("id");
      $('#id_line' + button_id + '').remove();
      // i--;
      $('p[data=index' + button_id + ']').remove();
      i--;
    });

    // функция ограничения колличества input'a id="invoice_id"+i+"^
    $(document).on("click", function () {
      if (i == 6) {
        $(".clone_invoice_btn").prop('disabled', true).removeClass("clone_invoice_btn").addClass("clone_invoice_btn_max");
      } else {
        $(".clone_invoice_btn_max").removeAttr("disabled").addClass("clone_invoice_btn").removeClass("clone_invoice_btn_max");
      }
    });
    $('#invoice_id' + i + '').mask('kk dddddd');
    // фокус для input
    $('#invoice_id' + i + '').focus();
  });

  // =========================-Ajax-========================

  // кнопка отправки
  var button = $("input[type=submit]");
  $(button).click(function (event) {
    event.preventDefault(); //предотвращием обычное положение кнопки

    var sample_num = $("input[name=sample_num]").val(); //Номер партии
    var sample_num_l = $("input[data=sample_num]").val().length; //Номер партии колличество символов
    var date_sample = $("input[name=date_sample]").val(); //Дата
    var city = $("#city_id option:selected").val(); //Место отбора проб
    var invoice_box = $(".invoice_box input[name=invoice]").val(); //Номер наклодной
    var invoice_box_hide2 = $(".invoice_box input[name=invoice" + i + "").val(); //Номер наклодной
    // console.log(invoice_box_hide2);

    var sd = $(this).text().replace(/[^0-9]/);
    if (sample_num_l < 4) {
      alert(0);
    } else if (sample_num == sd) {
      alert("_");
    } else if (date_sample == "") {
      alert(1);
    } else if (city == "") {
      alert(2);
    } else if (invoice_box == "") {
      alert(3);
    } else {
      $.ajax({
        type: "POST",
        url: "app.php",
        data: _defineProperty(_defineProperty(_defineProperty(_defineProperty({
          'name': sample_num
        }, "name", date_sample), "name", city), "name", invoice_box), "name", invoice_box_hide2),
        success: function success() {
          $(".sample_id p").text(sample_num);
          $(".date_sample_left span").text(date_sample);
          $(".sampling__id p, .place_sampling_right p").text(city);
          $(".invoice_numbers_right p").text(invoice_box);
          $(".invoice_numbers_right p").text(invoice_box_hide2);
        }
      });
      return true;
      // }
    }
  });

  // номер партии
  $('input#sample_id').keyup(function () {
    var val = $('#sample_id').val(); //Получаем данные из input
    $('.sample_id p, .dox_last_rp p span').text(val); //Вставляем значение
  });

  // Дата
  $(function () {
    $("#datepicker").datepicker({
      showButtonPanel: true,
      changeMonth: true,
      changeYear: true,
      dateFormat: "dd.mm.yy",
      onSelect: function onSelect(d, i) {
        // console.log(d);
        $(".date_sample_left span, .dox_last_date p span").text(d);
      }
    });
  });

  // Место отбора проб
  $("#city_id").on("change", function () {
    var str = "";
    $("#city_id option:selected").each(function () {
      str += $(this).val() + "";
    });
    $(".sampling__id p, .place_sampling_right p, .dox_last_razrez p span, .dox_last_header h1 span").text(str);
  }).trigger("change");

  // номера накладных
  $('#invoice_id').keyup(function () {
    var val = $('#invoice_id').val(); //Получаем данные из input
    $('.invoice_numbers_right p').text(val); //Вставляем значение в тег с классом txt
  });

  // Серия и номер пломбы Р-А
  $('input[data=id_masck_seal]').focus(function () {
    $('input[data=id_masck_seal]').keyup(function () {
      var val = $('input[data=id_masck_seal]').val();
      $('.seal_serial_left span.r_a, .dox_last_seal ul li:eq(0) span:eq(0)').text(val);
    });
  });

  // Серия и номер пломбы Р-1
  $('input[name=seal_serial2]').focus(function () {
    $('input[name=seal_serial2]').keyup(function () {
      var val = $('input[name=seal_serial2]').val();
      $('.seal_serial_left span.r_1, .dox_last_seal ul li:eq(1) span:eq(0)').text(val);
    });
  });

  // Серия и номер пломбы Р-2
  $('input[name=seal_serial3]').focus(function () {
    $('input[name=seal_serial3]').keyup(function () {
      var val = $('input[name=seal_serial3]').val();
      $('.seal_serial_left span.r_2, .dox_last_seal ul li:eq(2) span:eq(0)').text(val);
    });
  });

  // Серия и номер пломбы Контрольная
  $('input[name=seal_serial4]').focus(function () {
    $('input[name=seal_serial4]').keyup(function () {
      var val = $('input[name=seal_serial4]').val();
      $('.seal_serial_left span.k, .dox_last_seal ul li:eq(3) span:eq(0)').text(val);
    });
  });

  // Метод отбора проб
  $("#gost_iso_id").on("change", function () {
    var str = "";
    $("#gost_iso_id option:selected").each(function () {
      str += $(this).text() + " ";
    });
    $(".seal_serial_right span").text(str);
  }).trigger("change");

  // Марка и класс крупности
  $("#brand_and_size").on("change", function () {
    var str = "";
    $("#brand_and_size option:selected").each(function () {
      str += $(this).val() + " ";
    });
    $(".grade_nominal_size_id p, .dox_last_brand_coal p span").text(str);
  }).trigger("change");

  // Имя клиента
  $("#client_id").on("change", function () {
    var str = "";
    $("#client_id option:selected").each(function () {
      str += $(this).val() + " ";
    });
    $(".client_right p, .dox_last_client p span").text(str);
  }).trigger("change");

  // Масса лабораторной пробы Расчетная Арбитражная
  $('input[name=mass_brutto]').focus(function () {
    $('input[name=mass_brutto]').keyup(function () {
      var val = $('input[name=mass_brutto]').val();
      $('.mass_gross_right p.massa_r_a, .dox_last_seal ul li:eq(0) span:eq(1)').text(val);
    });
  });

  // Масса лабораторной пробы Р-1
  $('input[name=mass_brutto2]').focus(function () {
    $('input[name=mass_brutto2]').keyup(function () {
      var val = $('input[name=mass_brutto2]').val();
      $('.mass_gross_right p.mass_r_1, .dox_last_seal ul li:eq(1) span:eq(1)').text(val);
    });
  });

  // Масса лабораторной пробы Р-2
  $('input[name=mass_brutto3]').focus(function () {
    $('input[name=mass_brutto3]').keyup(function () {
      var val = $('input[name=mass_brutto3]').val();
      $('.mass_gross_right p.mass_r_2, .dox_last_seal ul li:eq(2) span:eq(1)').text(val);
    });
  });

  // Масса лабораторной пробы K
  $('input[name=mass_brutto4]').focus(function () {
    $('input[name=mass_brutto4]').keyup(function () {
      var val = $('input[name=mass_brutto4]').val();
      $('.mass_gross_right p.mass_k, .dox_last_seal ul li:eq(3) span:eq(1)').text(val);
    });
  });

  // Колличество вагонов
  $('input[name=num_wagon]').focus(function () {
    $('input[name=num_wagon]').keyup(function () {
      var val = $('input[name=num_wagon]').val();
      $('.wagon_weight_left span, .dox_last_num_wag p span').text(val);
    });
  });

  // Весс партии
  $('input[name=net_weight_sampled]').focus(function () {
    $('input[name=net_weight_sampled]').keyup(function () {
      var val = $('input[name=net_weight_sampled]').val();
      $('.wagon_weight_right span').text(val);
    });
  });

  // Фамилия ответственного лица
  $("#first_name_id").on("change", function () {
    var str = "";
    $("#first_name_id option:selected").each(function () {
      str += $(this).val() + " ";
    });
    $(".sample_prepared_by_left span").text(str);
  }).trigger("change");

  // Настройки приложение

  // Выбрать отдельный лист

  // расчетная
  $('#raschetnay').click(function () {
    if ($(this).is(':checked')) {
      $('div[data="raschetnay"]').show(100);
      $(".blocks:eq(2)").css({
        "border-right": "none"
      });
    } else {
      $('div[data="raschetnay"]').hide(100);
      $(".blocks:eq(2)").css({
        "border-right": "1px dashed #000"
      });
    }
  });

  // Арбитражная
  $('#arbitraj').click(function () {
    if ($(this).is(':checked')) {
      $('div[data="arbitraj"]').show(100);
      $(".blocks:eq(2)").css({
        "border-right": "none"
      });
    } else {
      $('div[data="arbitraj"]').hide(100);
      $(".blocks:eq(2)").css({
        "border-right": "1px dashed #000"
      });
    }
  });

  // Рсчетная - 1
  $('#raschetnay1').click(function () {
    if ($(this).is(':checked')) {
      $('div[data="raschetnay1"]').show(100);
      $(".blocks:eq(2)").css({
        "border-right": "none"
      });
    } else {
      $('div[data="raschetnay1"]').hide(100);
    }
  });

  // Рсчетная - 2
  $('#raschetnay2').click(function () {
    if ($(this).is(':checked')) {
      $('div[data="raschetnay2"]').show(100);
    } else {
      $('div[data="raschetnay2"]').hide(100);
    }
  });

  // Контрольна
  $('#control').click(function () {
    if ($(this).is(':checked')) {
      $('div[data="control"]').show(100);
    } else {
      $('div[data="control"]').hide(100);
    }
  });

  // включить все чекбоксы
  $('.all_checked').click(function () {
    $('input[type=checkbox]').prop('checked', true);
    $('div[data="control"], div[data="raschetnay2"], div[data="raschetnay1"], div[data="arbitraj"], div[data="raschetnay"]').show(100);
    $(".blocks:eq(2)").css({
      "border-right": "none"
    });
  });

  // кнопка настройки
  var speed = 250;
  $("p[data=setting]").on("click", function () {
    $(".setting_app_wrapp").toggle("slide", speed);
  });
  $(".setting_app_wrapp").mouseleave(function () {
    $(".setting_app_wrapp").hide("slide", speed);
  });

  // Пресеты BOX ============================================+++++++++==========================================

  // Переменные Города
  var city_uu_tec_1 = "г.Улан-Удэ ТЭЦ-1"; //
  var city_uu_tec_2 = "г.Улан-Удэ ТЭЦ-2"; //
  var city_petrovskzabay = "г.Петровск-Забайкальский"; //
  // var city_petrovskzabay = "ст.Баляга"; //

  // Переменные с клиентами (Заказчики)
  var client_karbon_pro = 'ООО КарбонПро';
  var client_ao_rp_tugnuy = 'АО "Разрез Тугнуйский"';
  var client_ooo_suek_hakasiy = 'ООО "СУЕК-Хакасия"';

  // Метод отбора проб
  var gost = "ГОСТ";
  var iso = "ISO";

  // Марка угля и класс крупности
  var d_300 = "Д 0-300";
  var d_0_50 = "Д 0-50";
  var d_0_100 = "Д 0-100";
  var dsh_0_13 = "ДСШ 0-13";
  var dsh_300 = "ДСШ 0-300";
  var dmsh_0_25 = "ДМСШ 0-25";
  var dоmsh_0_50 = "ДОМСШ 0-50";

  // Селекторы для города
  var cyti_selector_print = $(".sampling__id p, .place_sampling_right p, .dox_last_razrez p span, .dox_last_header h1 span");

  // Селектгор для клиента
  var client_selector_print = $(".client_right p, .dox_last_client p span");

  // Селектор метода отбора проб
  var method_selector = $(".seal_serial_right span");

  // Селектор марки и класса крупности
  var coal_id_selector = $(".grade_nominal_size_id p, .dox_last_brand_coal p span");

  // Селекторы input'ов каторые активные и не активные в зависимости от условий
  var input_selector_act_dis = $("#brand_and_size, #city_id, #gost_iso_id, #client_id");

  // селектор даты
  var date_selector = $('.date_sample_left span');

  // Текущая дата
  var date_curent = $.datepicker.formatDate('dd.mm.yy', new Date());
  $('#preset').on('change', function () {
    var str = "";
    str = $(this).val();
    preset_input = $('#preset').val();
    if (preset_input == "1") {
      //г.Улан-Удэ ТЭЦ-1/Р-з Тугнуйский/ДСШ 0-13/ГОСТ
      cyti_selector_print.text(city_uu_tec_1);
      method_selector.text(gost);
      client_selector_print.text(client_ao_rp_tugnuy);
      coal_id_selector.text(dsh_0_13);
      input_selector_act_dis.prop('disabled', true);
      date_selector.text(date_curent);
    } else if (preset_input == "2") {
      //г.Улан-Удэ ТЭЦ-1/СУЭК Хакасия/ДСШ 0-300/ГОСТ
      cyti_selector_print.text(city_uu_tec_1);
      method_selector.text(gost);
      client_selector_print.text(client_ooo_suek_hakasiy);
      coal_id_selector.text(d_300);
      input_selector_act_dis.prop('disabled', true);
      date_selector.text(date_curent);
    } else if (preset_input == "3") {
      //г.Петровк-Забайкальский1/ООО "КарбонПро"/Д-50/ISO
      cyti_selector_print.text(city_petrovskzabay);
      method_selector.text(iso);
      client_selector_print.text(client_karbon_pro);
      coal_id_selector.text(d_0_50);
      input_selector_act_dis.prop('disabled', true);
      date_selector.text(date_curent);
    } else {
      cyti_selector_print.text("");
      method_selector.text(gost);
      client_selector_print.text("");
      coal_id_selector.text("");
      input_selector_act_dis.prop('disabled', false);
      date_selector.text("");
    }
  });

  // Пресеты
  $('.presets_right svg').hover(function () {
    $('.presets_assistant').fadeIn('300');
  }, function () {
    $('.presets_assistant').fadeOut('300');
  });

  // test график работы

  var roman = "Роман";
  var alex = "Александр";
  var hour_12 = 12;
  var hour_24 = 24;
  $('#roman').click(function () {
    $('#grafic_in').val($.trim($('#grafic_in').html('<p class="tags_g">' + roman + ' <span></span></p>')));
  });
  $('p.tags_g').click(function () {
    $('.tags_g').hide();
  });
  $('#alex').click(function () {
    $('#grafic_in').val($.trim($('#grafic_in').val() + alex));
  });
  $('#12').click(function () {
    $('#grafic_in').val($.trim($('#grafic_in').val() + hour_12));
  });
  $('#24').click(function () {
    $('#grafic_in').val($.trim($('#grafic_in').val() + hour_24));
  });

  // $(function(){
  //     $('#exampleModal').arcticmodal();
  // });

  $('.about_app_wrapp').on('click', function () {
    $('#exampleModal').arcticmodal({
      // content: c
    });
  });

  // $('.about_app_wrapp').ready(function(){
  //     $('#exampleModal').arcticmodal({
  //         // content: c
  //     });
  // });

  // $(function(){
  //     // $('#exampleModal').arcticmodal();
  // });
});

/***/ }),

/***/ "./src/style/app_style.sass":
/*!**********************************!*\
  !*** ./src/style/app_style.sass ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"style/app_style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunksite_template_laravel_mix"] = self["webpackChunksite_template_laravel_mix"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style/app_style"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style/app_style"], () => (__webpack_require__("./src/style/app_style.sass")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
