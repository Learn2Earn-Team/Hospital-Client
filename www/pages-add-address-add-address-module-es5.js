(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-address-add-address-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesAddAddressAddAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title *ngIf=\"isAddEdit == 'add'\" style=\"padding: 0px;\">Add Address</ion-title>\n        <ion-title *ngIf=\"isAddEdit == 'edit'\" style=\"padding: 0px;\">Edit Address</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"map\"></div>\n    <div class=\"main_content_div\">\n        <ion-label class=\"simple_lbl\">Location</ion-label>\n        <ion-input type=\"text\" placeholder=\"Enter Location\"></ion-input>\n\n        <ion-label class=\"simple_lbl\">House No / Flat No</ion-label>\n        <ion-input type=\"text\" placeholder=\"House No / Flat No\"></ion-input>\n\n        <ion-label class=\"simple_lbl\">Landmark</ion-label>\n        <ion-input type=\"text\" placeholder=\"Landmark\"></ion-input>\n\n        <ion-label class=\"simple_lbl\">Pincode</ion-label>\n        <ion-input type=\"text\" placeholder=\"Pincode\"></ion-input>\n\n        <ion-radio-group mode=\"md\">\n            <ion-label class=\"title\">\n                SAVE AS\n            </ion-label>\n\n            <ion-item style=\"margin-top: 20px;\">\n                <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\n                <ion-label>HOME</ion-label>\n                <ion-radio value=\"home\"></ion-radio>\n            </ion-item>\n      \n            <ion-item>\n                <ion-icon name=\"briefcase-outline\" slot=\"start\"></ion-icon>\n                <ion-label>WORK</ion-label>\n                <ion-radio value=\"work\"></ion-radio>\n            </ion-item>\n      \n            <ion-item>\n                <ion-icon name=\"navigate-outline\" slot=\"start\"></ion-icon>\n                <ion-label>OTHER</ion-label>\n                <ion-radio value=\"other\"></ion-radio>\n            </ion-item>\n        </ion-radio-group>\n\n        <ion-button expand=\"block\" shape=\"round\" *ngIf=\"isAddEdit == 'add'\" (click)=\"goBack()\">\n            Add Address\n        </ion-button>\n\n        <ion-button expand=\"block\" shape=\"round\" *ngIf=\"isAddEdit == 'edit'\" (click)=\"goBack()\">\n            Edit Address\n        </ion-button>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/add-address/add-address-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/add-address/add-address-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: AddAddressPageRoutingModule */

    /***/
    function srcAppPagesAddAddressAddAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAddressPageRoutingModule", function () {
        return AddAddressPageRoutingModule;
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


      var _add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-address.page */
      "./src/app/pages/add-address/add-address.page.ts");

      var routes = [{
        path: '',
        component: _add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"]
      }];

      var AddAddressPageRoutingModule = function AddAddressPageRoutingModule() {
        _classCallCheck(this, AddAddressPageRoutingModule);
      };

      AddAddressPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AddAddressPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/add-address/add-address.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-address/add-address.module.ts ***!
      \*********************************************************/

    /*! exports provided: AddAddressPageModule */

    /***/
    function srcAppPagesAddAddressAddAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAddressPageModule", function () {
        return AddAddressPageModule;
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


      var _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-address-routing.module */
      "./src/app/pages/add-address/add-address-routing.module.ts");
      /* harmony import */


      var _add_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./add-address.page */
      "./src/app/pages/add-address/add-address.page.ts");

      var AddAddressPageModule = function AddAddressPageModule() {
        _classCallCheck(this, AddAddressPageModule);
      };

      AddAddressPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddAddressPageRoutingModule"]],
        declarations: [_add_address_page__WEBPACK_IMPORTED_MODULE_6__["AddAddressPage"]]
      })], AddAddressPageModule);
      /***/
    },

    /***/
    "./src/app/pages/add-address/add-address.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/add-address/add-address.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesAddAddressAddAddressPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".map {\n  width: 100%;\n  height: 250px;\n  background: lightgrey;\n}\n\n.main_content_div {\n  width: 100%;\n  padding: 16px;\n}\n\n.main_content_div ion-label {\n  display: block;\n}\n\n.main_content_div .simple_lbl {\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n\n.main_content_div ion-input {\n  border-radius: 25px;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-family: \"regular\";\n  margin-bottom: 16px;\n}\n\n.main_content_div .title {\n  font-family: \"semi-bold\";\n  font-size: 15px;\n}\n\n.main_content_div ion-item {\n  --padding-start: 0px;\n}\n\n.main_content_div ion-button {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLWFkZHJlc3MvYWRkLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtBQUNKOztBQUNBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUFFSjs7QUFBSTtFQUNJLGNBQUE7QUFFUjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNSOztBQUNJO0VBQ0ksbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUNJO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSxvQkFBQTtBQUFSOztBQUdJO0VBQ0ksZ0JBQUE7QUFEUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1hZGRyZXNzL2FkZC1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjUwcHg7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAuc2ltcGxlX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgIH1cbiAgICBpb24taW5wdXQge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbiAgICBpb24taXRlbSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/add-address/add-address.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/add-address/add-address.page.ts ***!
      \*******************************************************/

    /*! exports provided: AddAddressPage */

    /***/
    function srcAppPagesAddAddressAddAddressPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddAddressPage", function () {
        return AddAddressPage;
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AddAddressPage = /*#__PURE__*/function () {
        function AddAddressPage(route, navCtrl) {
          var _this = this;

          _classCallCheck(this, AddAddressPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.route.queryParams.subscribe(function (data) {
            console.log(data);
            _this.isAddEdit = data.value;
          });
        }

        _createClass(AddAddressPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return AddAddressPage;
      }();

      AddAddressPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      AddAddressPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-add-address',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./add-address.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-address/add-address.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./add-address.page.scss */
        "./src/app/pages/add-address/add-address.page.scss"))["default"]]
      })], AddAddressPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-add-address-add-address-module-es5.js.map