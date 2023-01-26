(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pharmacy-pharmacy-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pharmacy/pharmacy.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pharmacy/pharmacy.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesPharmacyPharmacyPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title style=\"padding: 0px;\">Pharmacy</ion-title>\n        <ion-button fill=\"clear\" slot=\"end\" (click)=\"goToCart()\">\n            <ion-icon name=\"cart-outline\"></ion-icon>\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"extra_header\">\n        <ion-input type=\"text\" placeholder=\"What are you looking to buy ?\" [(ngModel)]=\"searchTerm\" (ionChange)=\"onSearch($event)\"></ion-input>\n    </div>\n    <div class=\"main_content_div\">\n\n        <div *ngIf=\"searchTerm == ''\">\n            <img src=\"assets/imgs/pills.png\" class=\"doc\">\n            <ion-label class=\"bold_lbl\">Search Medicine</ion-label>\n            <ion-label class=\"small_lbl\">\n              Search for the medicines that you want from the list of thousands of medicines available in pharmacies near you.\n            </ion-label>\n        </div>\n        \n        <div class=\"card_div\" *ngFor=\"let item of medicines\">\n          <div class=\"flex_div\">\n              <div class=\"light_div\">\n                <img src=\"assets/imgs/pills.png\">\n              </div>\n              <div class=\"tab_detail\">\n                  <ion-label class=\"grey_lbl\">Glexo Smithkline Consumer HC</ion-label>\n                  <ion-label class=\"name_lbl\">{{item.name}}</ion-label>\n                  <ion-label class=\"grey_lbl\">15 tablets in stripe</ion-label>\n                  <div class=\"price_flex\">\n                      <ion-label class=\"price\">₹ {{item.price}}</ion-label>\n                      <ion-label class=\"cart_lbl\">Add to Cart</ion-label>\n                  </div>\n              </div>\n          </div>\n        </div>\n\n    </div>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/pharmacy/pharmacy-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/pharmacy/pharmacy-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: PharmacyPageRoutingModule */

    /***/
    function srcAppPagesPharmacyPharmacyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PharmacyPageRoutingModule", function () {
        return PharmacyPageRoutingModule;
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


      var _pharmacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pharmacy.page */
      "./src/app/pages/pharmacy/pharmacy.page.ts");

      var routes = [{
        path: '',
        component: _pharmacy_page__WEBPACK_IMPORTED_MODULE_3__["PharmacyPage"]
      }];

      var PharmacyPageRoutingModule = function PharmacyPageRoutingModule() {
        _classCallCheck(this, PharmacyPageRoutingModule);
      };

      PharmacyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PharmacyPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/pharmacy/pharmacy.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/pharmacy/pharmacy.module.ts ***!
      \***************************************************/

    /*! exports provided: PharmacyPageModule */

    /***/
    function srcAppPagesPharmacyPharmacyModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PharmacyPageModule", function () {
        return PharmacyPageModule;
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


      var _pharmacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pharmacy-routing.module */
      "./src/app/pages/pharmacy/pharmacy-routing.module.ts");
      /* harmony import */


      var _pharmacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pharmacy.page */
      "./src/app/pages/pharmacy/pharmacy.page.ts");

      var PharmacyPageModule = function PharmacyPageModule() {
        _classCallCheck(this, PharmacyPageModule);
      };

      PharmacyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pharmacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PharmacyPageRoutingModule"]],
        declarations: [_pharmacy_page__WEBPACK_IMPORTED_MODULE_6__["PharmacyPage"]]
      })], PharmacyPageModule);
      /***/
    },

    /***/
    "./src/app/pages/pharmacy/pharmacy.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/pharmacy/pharmacy.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesPharmacyPharmacyPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".extra_header {\n  background: var(--ion-color-app-light);\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n  padding-top: 25px !important;\n  position: relative;\n}\n.extra_header ion-input {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  background: white;\n  position: absolute;\n  width: 90%;\n  height: 50px;\n  top: 0%;\n}\n.main_content_div {\n  padding: 16px;\n  margin-top: 40px;\n}\n.main_content_div .doc {\n  width: 70px;\n  display: block;\n  margin: auto;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n.main_content_div .bold_lbl {\n  font-family: \"bold\";\n  text-align: center;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.main_content_div .small_lbl {\n  font-size: 14px;\n  text-align: center;\n}\n.main_content_div .card_div {\n  padding: 10px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n}\n.main_content_div .card_div .flex_div {\n  display: flex;\n  position: relative;\n}\n.main_content_div .card_div .flex_div .light_div {\n  height: 40px;\n  width: 40px;\n  min-width: 40px;\n  border-radius: 50%;\n  background: var(--ion-color-app-light);\n  position: relative;\n}\n.main_content_div .card_div .flex_div .light_div img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 18px;\n}\n.main_content_div .card_div .flex_div .tab_detail {\n  padding-left: 16px;\n  width: 100%;\n}\n.main_content_div .card_div .flex_div .tab_detail .name_lbl {\n  font-size: 18px;\n  font-family: \"medium\";\n}\n.main_content_div .card_div .flex_div .tab_detail .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .card_div .flex_div .tab_detail .price_flex {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n.main_content_div .card_div .flex_div .tab_detail .price_flex .price {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n.main_content_div .card_div .flex_div .tab_detail .price_flex .cart_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGhhcm1hY3kvcGhhcm1hY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCQTtFQUNJLHNDQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0Esa0JBQUE7QUFwQko7QUFzQkk7RUFDSSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7QUFwQlI7QUF3QkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFyQko7QUF1Qkk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBckJSO0FBd0JJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUF0QlI7QUF3Qkk7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUF0QlI7QUF5Qkk7RUFDSSxhQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtBQXZCUjtBQXlCUTtFQUNJLGFBQUE7RUFDQSxrQkFBQTtBQXZCWjtBQXlCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQXZCaEI7QUF5QmdCO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtBQXZCcEI7QUEwQlk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUF4QmhCO0FBMEJnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtBQXhCcEI7QUEwQmdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUF4QnBCO0FBMkJnQjtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBekJwQjtBQTJCb0I7RUFDSSx3QkFBQTtFQUNBLGVBQUE7QUF6QnhCO0FBMkJvQjtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBekJ4QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BoYXJtYWN5L3BoYXJtYWN5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuIFxuLy8gICAgICBpb24tdGl0bGUge1xuLy8gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJyAhaW1wb3J0YW50O1xuLy8gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuLy8gICAgICB9XG4gXG4vLyAgICAgIGlvbi1idXR0b257XG4vLyAgICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuLy8gICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgXG4gXG4vLyAgICAgICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4vLyAgICAgICAgICB9XG4vLyAgICAgIH1cbi8vIH1cblxuLmV4dHJhX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1yaWdodDogMTZweCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctdG9wOiAyNXB4ICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCA2cHggcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgdG9wOiAwJTtcbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG5cbiAgICAuZG9jIHtcbiAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgfVxuICAgIC5zbWFsbF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2FyZF9kaXYge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5saWdodF9kaXYge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRhYl9kZXRhaWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgICAgICAgIC5uYW1lX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JleV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5wcmljZV9mbGV4IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmNhcnRfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/pharmacy/pharmacy.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/pharmacy/pharmacy.page.ts ***!
      \*************************************************/

    /*! exports provided: PharmacyPage */

    /***/
    function srcAppPagesPharmacyPharmacyPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PharmacyPage", function () {
        return PharmacyPage;
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

      var PharmacyPage = /*#__PURE__*/function () {
        function PharmacyPage(route, navCtrl) {
          _classCallCheck(this, PharmacyPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.searchTerm = '';
          this.allMedicines = [{
            name: 'Crocin Pain Relief',
            price: '45.80'
          }, {
            name: 'Crocin Advance',
            price: '22.50'
          }, {
            name: 'Crocin Cold $ Flu max',
            price: '70.20'
          }, {
            name: 'Crocin Mixed Fruit Flavour',
            price: '52.40'
          }];
          this.medicines = [];
        }

        _createClass(PharmacyPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToCart",
          value: function goToCart() {
            this.route.navigate(['/cart']);
          }
        }, {
          key: "onSearch",
          value: function onSearch(eve) {
            console.log(eve.detail.value);

            if (this.searchTerm === '') {
              this.medicines = [];
              return;
            }

            this.medicines = this.allMedicines.filter(function (item) {
              // console.log(item, this.searchTerm);
              return item.name.toLowerCase().indexOf(eve.detail.value.toLowerCase()) > -1;
            });
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return PharmacyPage;
      }();

      PharmacyPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      PharmacyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pharmacy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pharmacy.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pharmacy/pharmacy.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pharmacy.page.scss */
        "./src/app/pages/pharmacy/pharmacy.page.scss"))["default"]]
      })], PharmacyPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-pharmacy-pharmacy-module-es5.js.map