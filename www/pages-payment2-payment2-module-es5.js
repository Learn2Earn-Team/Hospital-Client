(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment2-payment2-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment2/payment2.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment2/payment2.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPayment2Payment2PageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n    <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n        <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n    </ion-button>\n      <ion-title style=\"padding: 0px;\">Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n      <div class=\"stepper_div\">\n          <div class=\"round_div\" [class.completed]=\" tabID >=1 \" ></div>\n          <div class=\"line_div\"></div>\n          <div class=\"round_div\" [class.completed]=\" tabID >=2 \"></div>\n          <div class=\"line_div\"></div>\n          <div class=\"round_div\" [class.completed]=\" tabID >=3 \"></div>\n      </div>\n      <!-- <div>\n          <ion-label>SHIPPING</ion-label>\n          <ion-label>PAYMENT</ion-label>\n          <ion-label>CONFORMATION</ion-label>\n      </div> -->\n\n      <div *ngIf=\"tabID == 1\">\n\n          <div class=\"card_div\">\n              <div class=\"upper_div\">\n                  <ion-label class=\"green_lbl\">Delivery Address</ion-label>\n                  <ion-label class=\"username_lbl\">Jonh Doe</ion-label>\n                  <ion-label class=\"addr_lbl\">1234, Eva surbhi complex, Aksharwadi Road, Bhavnagar - 364001</ion-label>\n              </div>\n              <div class=\"lower_div\">\n                  <div style=\"border-right: 1px solid lightgrey;\" (click)=\"goToAddAddress('edit')\">\n                      <ion-label>Edit Address</ion-label>\n                  </div>\n                  <div (click)=\"goToAddAddress('add')\">\n                      <ion-label>Add Address</ion-label>\n                  </div>\n              </div>\n          </div>\n\n          <ion-label class=\"price_lbl\" style=\"color: var(--ion-color-app-font);\">2 Items<span style=\"color: var(--ion-color-primary);font-size: 14px;\">View Detail</span></ion-label>\n          <ion-label class=\"price_lbl\">Subtotal<span>₹120.00</span></ion-label>\n          <ion-label class=\"price_lbl\">Shipping<span>₹40.00</span></ion-label>\n\n          <div class=\"flex_price\">\n              <ion-label>Total</ion-label>\n              <ion-label>₹160.00</ion-label>\n          </div>\n  \n          <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 2\">\n            Proceed to checkout\n          </ion-button>\n      </div>\n\n      <div *ngIf=\"tabID == 2\">\n\n          <ion-label class=\"price_btn\">₹ 200.00</ion-label>\n\n          <ion-row>\n              <ion-col size=\"9\" style=\"padding: 0\">\n                  <ion-label class=\"green_name\">CARD NUMBER</ion-label>\n                  <ion-input type=\"text\" placeholder=\"XXXX-XXXX-XXXX-4242\"></ion-input>\n              </ion-col>\n              <ion-col size=\"3\">\n                  <div class=\"card_box\">\n                      <img src=\"assets/imgs/visa.png\">\n                  </div>\n              </ion-col>\n              <ion-col size=\"12\" style=\"padding: 0\">\n                  <ion-label class=\"green_name\">CARDHOLDER NAME</ion-label>\n                  <ion-input type=\"text\" placeholder=\"Your Name\"></ion-input>\n              </ion-col>\n              <ion-col size=\"6\" style=\"padding-left: 0\">\n                  <ion-label class=\"green_name\">EXPIRE DATE</ion-label>\n                  <ion-datetime display-format=\"MM/YYYY\" placeholder=\"MM/YYYY\"></ion-datetime>\n              </ion-col>\n              <ion-col size=\"6\" style=\"padding-right: 0\">\n                <ion-label class=\"green_name\">CVV</ion-label>\n                <ion-input type=\"text\" placeholder=\"***\"></ion-input>\n              </ion-col>\n          </ion-row>\n\n          <div class=\"check_flex\">\n              <ion-checkbox mode=\"md\"></ion-checkbox>\n              <ion-label>SAVE CARD</ion-label>\n          </div>\n\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 3\">\n            Pay Securely\n          </ion-button>\n      </div>\n\n      <div *ngIf=\"tabID == 3\" class=\"app_detail\">\n\n          <div class=\"card_box\">\n              <ion-icon name=\"pencil-sharp\"></ion-icon>\n              <ion-label class=\"green_lbl\">Shipping To</ion-label>\n              <ion-label class=\"bold_lbl\">Jonh Doe</ion-label>\n              <ion-label class=\"simple_lbl\">1234, Eva surbhi complex, Aksharwadi Road, Bhavnagar - 364001</ion-label>\n          </div>\n\n          <div class=\"card_box\">\n              <ion-icon name=\"pencil-sharp\"></ion-icon>\n              <ion-label class=\"green_lbl\">Payment Detail</ion-label>\n              <ion-label class=\"bold_lbl\">XXXX-XXXX-XXXX-4242</ion-label>\n          </div>\n\n          <div class=\"card_box\">\n              <ion-icon name=\"pencil-sharp\"></ion-icon>\n              <ion-label class=\"green_lbl\">Order</ion-label>\n              <ion-label class=\"bold_lbl\">2 Items</ion-label>\n              <ion-label class=\"simple_lbl\">1. Crocin Pain Relief</ion-label>\n              <ion-label class=\"simple_lbl\">1. Crocin Advance</ion-label>\n              <div class=\"flex_div\" style=\"margin-top: 10px\">\n                  <ion-label class=\"bold_lbl\">Total</ion-label>\n                  <ion-label class=\"bold_lbl\">128.60</ion-label>\n              </div>\n          </div>\n\n          <div class=\"card_box\">\n              <ion-icon name=\"pencil-sharp\"></ion-icon>\n              <ion-label class=\"green_lbl\">Delivery</ion-label>\n              <div class=\"flex_div\">\n                  <ion-label class=\"simple_lbl\">Delivered by</ion-label>\n                  <ion-label class=\"bold_lbl\">12 Feb 2019</ion-label>\n              </div>\n          </div>\n\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"goToHome()\" style=\"width: 100%;\">\n                go To Home\n          </ion-button>\n      </div>\n\n      \n  </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/payment2/payment2-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/payment2/payment2-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: Payment2PageRoutingModule */

    /***/
    function srcAppPagesPayment2Payment2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Payment2PageRoutingModule", function () {
        return Payment2PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _payment2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./payment2.page */
      "./src/app/pages/payment2/payment2.page.ts");

      var routes = [{
        path: '',
        component: _payment2_page__WEBPACK_IMPORTED_MODULE_3__["Payment2Page"]
      }];

      var Payment2PageRoutingModule = function Payment2PageRoutingModule() {
        _classCallCheck(this, Payment2PageRoutingModule);
      };

      Payment2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Payment2PageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/payment2/payment2.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/payment2/payment2.module.ts ***!
      \***************************************************/

    /*! exports provided: Payment2PageModule */

    /***/
    function srcAppPagesPayment2Payment2ModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Payment2PageModule", function () {
        return Payment2PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _payment2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./payment2-routing.module */
      "./src/app/pages/payment2/payment2-routing.module.ts");
      /* harmony import */


      var _payment2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./payment2.page */
      "./src/app/pages/payment2/payment2.page.ts");

      var Payment2PageModule = function Payment2PageModule() {
        _classCallCheck(this, Payment2PageModule);
      };

      Payment2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Payment2PageRoutingModule"]],
        declarations: [_payment2_page__WEBPACK_IMPORTED_MODULE_6__["Payment2Page"]]
      })], Payment2PageModule);
      /***/
    },

    /***/
    "./src/app/pages/payment2/payment2.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/payment2/payment2.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPayment2Payment2PageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .stepper_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n}\n.main_content_div .stepper_div .round_div {\n  height: 15px;\n  width: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-primary);\n}\n.main_content_div .stepper_div .completed {\n  background: var(--ion-color-primary);\n}\n.main_content_div .stepper_div .line_div {\n  height: 3px;\n  width: 100%;\n  background: var(--ion-color-app-light);\n}\n.main_content_div .card_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  margin-top: 20px;\n  margin-bottom: 40px;\n}\n.main_content_div .card_div .upper_div {\n  border-bottom: 1px solid lightgrey;\n  padding: 16px;\n}\n.main_content_div .card_div .upper_div .green_lbl {\n  color: var(--ion-color-primary);\n  margin-bottom: 10px;\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .card_div .upper_div .username_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main_content_div .card_div .upper_div .addr_lbl {\n  font-size: 14px;\n}\n.main_content_div .card_div .lower_div {\n  display: flex;\n  justify-content: center;\n}\n.main_content_div .card_div .lower_div div {\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 50%;\n}\n.main_content_div .card_div .lower_div div ion-label {\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-size: 13px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .price_lbl {\n  color: grey;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n.main_content_div .price_lbl span {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-app-font);\n  font-size: 16px;\n}\n.main_content_div .flex_price {\n  border-top: 1px solid lightgrey;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n  padding-top: 16px;\n  margin-bottom: 40px;\n}\n.main_content_div .flex_price ion-label {\n  font-family: \"semi-bold\";\n}\n.main_content_div .green_name {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  font-size: 12px;\n  margin-bottom: 5px;\n}\n.main_content_div ion-input, .main_content_div ion-datetime {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  margin-bottom: 16px;\n  height: 50px;\n}\n.main_content_div .price_btn {\n  text-align: center;\n  font-size: 24px;\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .check_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n.main_content_div .check_flex ion-checkbox {\n  --border-color: lightgrey;\n  --border-width: 2px;\n}\n.main_content_div .check_flex ion-label {\n  margin-left: 10px;\n  color: var(--ion-color-primary);\n  font-size: 12px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .app_detail {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 100%;\n}\n.main_content_div .app_detail .card_box {\n  padding: 16px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  position: relative;\n  margin-bottom: 16px;\n  width: 100%;\n}\n.main_content_div .app_detail .card_box ion-icon {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n.main_content_div .app_detail .card_box .green_lbl {\n  color: var(--ion-color-primary);\n  margin-bottom: 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .app_detail .card_box .bold_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .app_detail .card_box .simple_lbl {\n  font-size: 14px;\n}\n.main_content_div .app_detail .card_box .flex_div {\n  display: flex;\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudDIvcGF5bWVudDIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBO0VBQ0ksYUFBQTtBQVRKO0FBV0k7RUFDSSxjQUFBO0FBVFI7QUFZSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQVZSO0FBV1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDBDQUFBO0FBVFo7QUFXUTtFQUNJLG9DQUFBO0FBVFo7QUFXUTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0NBQUE7QUFUWjtBQWFJO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBWFI7QUFhUTtFQUNJLGtDQUFBO0VBQ0EsYUFBQTtBQVhaO0FBYVk7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBWGhCO0FBYVk7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVhoQjtBQWFZO0VBQ0ksZUFBQTtBQVhoQjtBQWNRO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBWlo7QUFjWTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBWmhCO0FBY2dCO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQVpwQjtBQWtCSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQWhCUjtBQWtCUTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBaEJaO0FBb0JJO0VBQ0ksK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWxCUjtBQW1CUTtFQUNJLHdCQUFBO0FBakJaO0FBcUJJO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQW5CUjtBQXFCSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBbkJSO0FBc0JJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFwQlI7QUF1Q0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFyQ1I7QUF1Q1E7RUFDSSx5QkFBQTtFQUNBLG1CQUFBO0FBckNaO0FBd0NRO0VBQ0ksaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQXRDWjtBQTBDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQXhDUjtBQTBDUTtFQUNJLGFBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBeENaO0FBMENZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtBQXhDaEI7QUEyQ1k7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUF6Q2hCO0FBMkNZO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBekNoQjtBQTJDWTtFQUNJLGVBQUE7QUF6Q2hCO0FBMkNZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBekNoQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQyL3BheW1lbnQyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuIFxuLy8gICAgIGlvbi10aXRsZSB7XG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJyAhaW1wb3J0YW50O1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgfVxuLy8gfVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIGlvbi1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zdGVwcGVyX2RpdiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgLnJvdW5kX2RpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XG4gICAgICAgICAgICB3aWR0aDogMTVweDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTVweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICAuY29tcGxldGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgICAgICAubGluZV9kaXYge1xuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNhcmRfZGl2IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuXG4gICAgICAgIC51cHBlcl9kaXYge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgICAgIC5ncmVlbl9sYmwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnVzZXJuYW1lX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYWRkcl9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubG93ZXJfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpY2VfbGJsIHtcbiAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG5cbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWFwcC1mb250KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mbGV4X3ByaWNlIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmVlbl9uYW1lIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICB9XG4gICAgaW9uLWlucHV0LCBpb24tZGF0ZXRpbWUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cblxuICAgIC5wcmljZV9idG4ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC8vIC5jYXJkX2JveCB7XG4gICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAvLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIC8vICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gICAgIGhlaWdodDogNDVweDtcbiAgICAvLyAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogMjNweDtcblxuICAgIC8vICAgICBpbWcge1xuICAgIC8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vICAgICAgICAgdG9wOiA1MCU7XG4gICAgLy8gICAgICAgICBsZWZ0OiA1MCU7XG4gICAgLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgIC8vICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLmNoZWNrX2ZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgaW9uLWNoZWNrYm94e1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3IgOiBsaWdodGdyZXk7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hcHBfZGV0YWlsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgLmNhcmRfYm94IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiAxNnB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZ3JlZW5fbGJsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNpbXBsZV9sYmwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mbGV4X2RpdiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/payment2/payment2.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/payment2/payment2.page.ts ***!
      \*************************************************/

    /*! exports provided: Payment2Page */

    /***/
    function srcAppPagesPayment2Payment2PageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Payment2Page", function () {
        return Payment2Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var Payment2Page = /*#__PURE__*/function () {
        function Payment2Page(router, navCtrl) {
          _classCallCheck(this, Payment2Page);

          this.router = router;
          this.navCtrl = navCtrl;
          this.tabID = 1;
        }

        _createClass(Payment2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToHome",
          value: function goToHome() {
            this.router.navigate(['/tabs/home']);
          }
        }, {
          key: "goToAddAddress",
          value: function goToAddAddress(val) {
            var navData = {
              queryParams: {
                value: val
              }
            };
            this.router.navigate(['/add-address'], navData);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return Payment2Page;
      }();

      Payment2Page.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      Payment2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./payment2.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment2/payment2.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./payment2.page.scss */
        "./src/app/pages/payment2/payment2.page.scss"))["default"]]
      })], Payment2Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-payment2-payment2-module-es5.js.map