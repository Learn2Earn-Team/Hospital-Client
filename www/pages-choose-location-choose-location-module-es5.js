(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-choose-location-choose-location-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-location/choose-location.page.html":
    /*!*******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-location/choose-location.page.html ***!
      \*******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChooseLocationChooseLocationPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n        <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"main_content_div\">\n\n      <img src=\"assets/imgs/capsule.png\" class=\"logo\">\n      <ion-label class=\"logo_text\">MEDI<span>CO</span></ion-label>\n\n      <ion-label class=\"bold_lbl\">LOCATION</ion-label>\n      <ion-label class=\"small_lbl\">Kindly enter your location</ion-label>\n\n      <div class=\"input_div\">\n        <ion-input type=\"text\" placeholder=\"Type your location\"></ion-input>\n        <ion-icon name=\"locate-outline\"></ion-icon>\n      </div>\n\n      <ion-button expand=\"block\" shape=\"round\" class=\"gredient_btn\" (click)=\"goToLocationMap()\">\n          Continue\n      </ion-button>\n\n  </div>\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/choose-location/choose-location-routing.module.ts":
    /*!*************************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location-routing.module.ts ***!
      \*************************************************************************/

    /*! exports provided: ChooseLocationPageRoutingModule */

    /***/
    function srcAppPagesChooseLocationChooseLocationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLocationPageRoutingModule", function () {
        return ChooseLocationPageRoutingModule;
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


      var _choose_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./choose-location.page */
      "./src/app/pages/choose-location/choose-location.page.ts");

      var routes = [{
        path: '',
        component: _choose_location_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLocationPage"]
      }];

      var ChooseLocationPageRoutingModule = function ChooseLocationPageRoutingModule() {
        _classCallCheck(this, ChooseLocationPageRoutingModule);
      };

      ChooseLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChooseLocationPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/choose-location/choose-location.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChooseLocationPageModule */

    /***/
    function srcAppPagesChooseLocationChooseLocationModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLocationPageModule", function () {
        return ChooseLocationPageModule;
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


      var _choose_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./choose-location-routing.module */
      "./src/app/pages/choose-location/choose-location-routing.module.ts");
      /* harmony import */


      var _choose_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./choose-location.page */
      "./src/app/pages/choose-location/choose-location.page.ts");

      var ChooseLocationPageModule = function ChooseLocationPageModule() {
        _classCallCheck(this, ChooseLocationPageModule);
      };

      ChooseLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _choose_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseLocationPageRoutingModule"]],
        declarations: [_choose_location_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLocationPage"]]
      })], ChooseLocationPageModule);
      /***/
    },

    /***/
    "./src/app/pages/choose-location/choose-location.page.scss":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location.page.scss ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChooseLocationChooseLocationPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: var(--ion-color-app-light);\n}\n\n.main_content_div {\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n\n.main_content_div .logo {\n  width: 70px;\n  margin-top: 40px;\n}\n\n.main_content_div .logo_text {\n  font-size: 18px;\n  font-family: \"bold\";\n  margin-top: 5px;\n}\n\n.main_content_div .logo_text span {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n}\n\n.main_content_div .bold_lbl {\n  font-size: 22px;\n  font-family: \"semi-bold\";\n  margin-top: 60px;\n}\n\n.main_content_div .small_lbl {\n  font-size: 14px;\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.main_content_div .input_div {\n  background: white;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  border-radius: 25px;\n  border: 1px solid lightgrey;\n  height: 50px;\n  margin-bottom: 16px;\n}\n\n.main_content_div .input_div ion-input {\n  border-radius: 5px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-family: \"regular\";\n}\n\n.main_content_div .input_div ion-icon {\n  color: var(--ion-color-primary);\n  margin-right: 16px;\n  font-size: 18px;\n}\n\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hvb3NlLWxvY2F0aW9uL2Nob29zZS1sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSx3Q0FBQTtBQUZKOztBQUlBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0k7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBSFI7O0FBS1E7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0FBSFo7O0FBT0k7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtBQUxSOztBQVFJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFOUjs7QUFTSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUFI7O0FBU1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFQWjs7QUFVUTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBUlo7O0FBWUk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQVZSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2hvb3NlLWxvY2F0aW9uL2Nob29zZS1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbi8vIH1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xufVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG5cbiAgICAubG9nb190ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG5cbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9sZF9sYmwge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICB9XG5cbiAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmlucHV0X2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgIFxuICAgICAgICBpb24taW5wdXQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyZWRpZW50X2J0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/choose-location/choose-location.page.ts":
    /*!***************************************************************!*\
      !*** ./src/app/pages/choose-location/choose-location.page.ts ***!
      \***************************************************************/

    /*! exports provided: ChooseLocationPage */

    /***/
    function srcAppPagesChooseLocationChooseLocationPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChooseLocationPage", function () {
        return ChooseLocationPage;
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

      var ChooseLocationPage = /*#__PURE__*/function () {
        function ChooseLocationPage(route, navCtrl) {
          _classCallCheck(this, ChooseLocationPage);

          this.route = route;
          this.navCtrl = navCtrl;
        }

        _createClass(ChooseLocationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToLocationMap",
          value: function goToLocationMap() {
            this.route.navigate(['/location-map']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ChooseLocationPage;
      }();

      ChooseLocationPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      ChooseLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-choose-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./choose-location.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/choose-location/choose-location.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./choose-location.page.scss */
        "./src/app/pages/choose-location/choose-location.page.scss"))["default"]]
      })], ChooseLocationPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-choose-location-choose-location-module-es5.js.map