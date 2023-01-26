(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doctors-doctors-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/doctors.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/doctors.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorsDoctorsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title style=\"padding: 0px;\">Doctors</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"extra_header\">\n        <ion-input type=\"text\" placeholder=\"Search for doctors, specialist, clinics, hospitals..\"></ion-input>\n    </div>\n    <div class=\"main_content_div\">\n        <img src=\"assets/imgs/stethoscope.png\" class=\"doc\">\n        <ion-label class=\"bold_lbl\">Search Doctors</ion-label>\n        <ion-label class=\"small_lbl\">\n          Search by directly typing the doctors name, speciality, symptopms, clinics, hospital, etc. \n          You can also search by health concerns listed below\n        </ion-label>\n\n        <ion-grid fixed>\n            <ion-row>\n                <ion-col size=\"6\" *ngFor=\"let item of doctors\" (click)=\"goToDoctorList()\">\n                    <div class=\"light_div\">\n                        <ion-label>{{item}}</ion-label>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/doctors/doctors-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/doctors/doctors-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: DoctorsPageRoutingModule */

    /***/
    function srcAppPagesDoctorsDoctorsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsPageRoutingModule", function () {
        return DoctorsPageRoutingModule;
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


      var _doctors_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doctors.page */
      "./src/app/pages/doctors/doctors.page.ts");

      var routes = [{
        path: '',
        component: _doctors_page__WEBPACK_IMPORTED_MODULE_3__["DoctorsPage"]
      }];

      var DoctorsPageRoutingModule = function DoctorsPageRoutingModule() {
        _classCallCheck(this, DoctorsPageRoutingModule);
      };

      DoctorsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoctorsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/doctors/doctors.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/doctors/doctors.module.ts ***!
      \*************************************************/

    /*! exports provided: DoctorsPageModule */

    /***/
    function srcAppPagesDoctorsDoctorsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsPageModule", function () {
        return DoctorsPageModule;
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


      var _doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctors-routing.module */
      "./src/app/pages/doctors/doctors-routing.module.ts");
      /* harmony import */


      var _doctors_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doctors.page */
      "./src/app/pages/doctors/doctors.page.ts");

      var DoctorsPageModule = function DoctorsPageModule() {
        _classCallCheck(this, DoctorsPageModule);
      };

      DoctorsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doctors_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorsPageRoutingModule"]],
        declarations: [_doctors_page__WEBPACK_IMPORTED_MODULE_6__["DoctorsPage"]]
      })], DoctorsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/doctors/doctors.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/doctors/doctors.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDoctorsDoctorsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".extra_header {\n  background: var(--ion-color-app-light);\n  padding-left: 16px !important;\n  padding-right: 16px !important;\n  padding-top: 25px !important;\n  position: relative;\n}\n.extra_header ion-input {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  background: white;\n  position: absolute;\n  width: 90%;\n  height: 50px;\n  top: 0%;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div .doc {\n  width: 50px;\n  display: block;\n  margin: auto;\n  margin-top: 40px;\n  margin-bottom: 20px;\n}\n.main_content_div .bold_lbl {\n  font-family: \"semi-bold\";\n  text-align: center;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n}\n.main_content_div .small_lbl {\n  font-size: 14px;\n  text-align: center;\n}\n.main_content_div .light_div {\n  background: var(--ion-color-app-light);\n  border-radius: 5px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n.main_content_div .light_div ion-label {\n  text-align: center;\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\";\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9ycy9kb2N0b3JzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQkE7RUFDSSxzQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0FBbkJKO0FBcUJJO0VBQ0ksMENBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FBbkJSO0FBdUJBO0VBQ0ksYUFBQTtBQXBCSjtBQXNCSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFwQlI7QUF1Qkk7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQXJCUjtBQXVCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQXJCUjtBQXdCSTtFQUNJLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBdEJSO0FBdUJRO0VBQ0ksa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtBQXJCWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3RvcnMvZG9jdG9ycy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiBcbi8vICAgICAgaW9uLXRpdGxlIHtcbi8vICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCcgIWltcG9ydGFudDtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgfVxuIFxuLy8gICAgICBpb24tYnV0dG9ue1xuLy8gICAgICAgICAgbWFyZ2luOiAwO1xuLy8gICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiBcbi8vICAgICAgICAgIGlvbi1pY29uIHtcbi8vICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgICAgICAgIH1cbi8vICAgICAgfVxuLy8gfVxuXG4uZXh0cmFfaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDE2cHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggM3B4IDZweCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB0b3A6IDAlO1xuICAgIH1cbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuZG9jIHtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLmJvbGRfbGJsIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG4gICAgLnNtYWxsX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5saWdodF9kaXYge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/doctors/doctors.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/doctors/doctors.page.ts ***!
      \***********************************************/

    /*! exports provided: DoctorsPage */

    /***/
    function srcAppPagesDoctorsDoctorsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorsPage", function () {
        return DoctorsPage;
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

      var DoctorsPage = /*#__PURE__*/function () {
        function DoctorsPage(route, navCtrl) {
          _classCallCheck(this, DoctorsPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health', 'Dentists', 'ENT', 'Audiologist', 'Psychiatrists', 'Radiologist', 'Neurologist'];
        }

        _createClass(DoctorsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToDoctorList",
          value: function goToDoctorList() {
            this.route.navigate(['/doctor-list']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return DoctorsPage;
      }();

      DoctorsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      DoctorsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-doctors',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doctors.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctors/doctors.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doctors.page.scss */
        "./src/app/pages/doctors/doctors.page.scss"))["default"]]
      })], DoctorsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-doctors-doctors-module-es5.js.map