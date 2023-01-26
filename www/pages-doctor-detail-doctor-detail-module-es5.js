(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doctor-detail-doctor-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-detail/doctor-detail.page.html":
    /*!***************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-detail/doctor-detail.page.html ***!
      \***************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorDetailDoctorDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <div class=\"flex_header\">\n            <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n                <ion-icon name=\"chevron-back\" style=\"font-size: 24px;color: white;\"></ion-icon>\n            </ion-button>\n            <ion-button slot=\"end\" size=\"small\" fill=\"clear\" color=\"light\">\n                <ion-icon name=\"locate\"></ion-icon>\n                Bhavnagar\n            </ion-button>\n        </div>\n\n        <div class=\"custom_header\">\n            <div class=\"round_div4\">\n                <div class=\"round_div3\">\n                    <div class=\"round_div2\">\n                        <div class=\"round_div1\">\n                          <div class=\"user_round\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <ion-label class=\"name_lbl\">Dr. Jonh Doe</ion-label>\n            <ion-label class=\"spec_lbl\">General Physician</ion-label>\n\n            <div class=\"call_detail\">\n                <div class=\"round_call\">\n                    <ion-icon name=\"call\"></ion-icon>\n                </div>\n                <div class=\"round_call\">\n                    <ion-icon name=\"chatbox-ellipses\"></ion-icon>\n                </div>\n            </div>\n\n            <div class=\"doc_detail\">\n                <ion-label>₹ 200.00</ion-label>\n                <ion-label>10 yrs of exp</ion-label>\n                <div style=\"display: flex;align-items: center;\">\n                    <ion-icon name=\"heart\" style=\"color: red;margin-right: 5px;\"></ion-icon>\n                    <ion-label>145</ion-label>\n                </div>\n            </div>\n\n        </div>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-segment value=\"doctor\" (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n            <ion-segment-button value=\"doctor\">\n                <ion-label>Doctor's Info</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"clinic\">\n                <ion-label>Clinic's Info</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"feedback\">\n                <ion-label>Feedback</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div class=\"content_div\">\n\n            <div *ngIf=\"tabID == 'doctor'\" class=\"doctor_div\">\n                <ion-label class=\"bold_lbl\">Education</ion-label>\n                <ul>\n                    <li>MD - General Medicine | College name here</li>\n                    <li>MBBS - Nephrology | More info</li>\n                </ul>\n                <ion-label class=\"bold_lbl\">Specialization</ion-label>\n                <ul>\n                    <li>Consultation Physician</li>\n                    <li>Internal Medicine</li>\n                </ul>\n                <ion-label class=\"bold_lbl\">Services Offred</ion-label>\n                <ul>\n                    <li>Peritoneal Dialysis</li>\n                    <li>Kidney Stone treatment</li>\n                </ul>\n                <ion-label class=\"service_lbl\">View all Services</ion-label>\n\n            </div>\n\n            <div *ngIf=\"tabID == 'clinic'\" class=\"clinic_div\">\n                <div class=\"call_info\">\n                    <ion-label class=\"contact_lbl\">9876543212 | 9876543212</ion-label>\n                    <ion-label class=\"addr_lbl\">1234, Eva surbhi complex, Aksharwadi road, bhavnagar - 364001</ion-label>\n                </div>\n                \n                <div class=\"map_div\">\n                  <div #map id=\"map\" class=\"map\"></div>\n                </div>\n\n                <div class=\"clinic_gallery\">\n                    <ion-grid fixed>\n                        <ion-row>\n                            <ion-col size=\"4\" *ngFor=\"let item of images\">\n                                <div class=\"image_div\" [style.backgroundImage]=\"'url('+ item +')'\"></div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </div>\n\n            </div>\n\n            <div *ngIf=\"tabID == 'feedback'\" class=\"feedback_div\">\n                <div class=\"inner_feedback_div\" *ngFor=\"let item of [1,2,3]\">\n                    <ion-label class=\"gray_lbl\">10 Days Ago</ion-label>\n                    <ion-label class=\"name_lbl\">Verified User-{{item}}</ion-label>\n                    <ion-label class=\"feedback_lbl\">\n                      Lorem ipsum dolor sit amet consectetur adipisicing elit. \n                      Ex rerum voluptas vel dolor est, corrupti ipsam facere ratione libero \n                      voluptatem ab beatae cupiditate quisquam sed, illo aspernatur eius unde voluptate.\n                    </ion-label>\n                </div>\n            </div>\n\n            <div class=\"btn_div\" (click)=\"goToBooking()\">\n                <ion-button expand=\"block\" shape=\"round\">\n                  Book Appointment\n                </ion-button>\n            </div>\n\n        </div>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/doctor-detail/doctor-detail-routing.module.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/doctor-detail/doctor-detail-routing.module.ts ***!
      \*********************************************************************/

    /*! exports provided: DoctorDetailPageRoutingModule */

    /***/
    function srcAppPagesDoctorDetailDoctorDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorDetailPageRoutingModule", function () {
        return DoctorDetailPageRoutingModule;
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


      var _doctor_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doctor-detail.page */
      "./src/app/pages/doctor-detail/doctor-detail.page.ts");

      var routes = [{
        path: '',
        component: _doctor_detail_page__WEBPACK_IMPORTED_MODULE_3__["DoctorDetailPage"]
      }];

      var DoctorDetailPageRoutingModule = function DoctorDetailPageRoutingModule() {
        _classCallCheck(this, DoctorDetailPageRoutingModule);
      };

      DoctorDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoctorDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/doctor-detail/doctor-detail.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/doctor-detail/doctor-detail.module.ts ***!
      \*************************************************************/

    /*! exports provided: DoctorDetailPageModule */

    /***/
    function srcAppPagesDoctorDetailDoctorDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorDetailPageModule", function () {
        return DoctorDetailPageModule;
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


      var _doctor_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctor-detail-routing.module */
      "./src/app/pages/doctor-detail/doctor-detail-routing.module.ts");
      /* harmony import */


      var _doctor_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doctor-detail.page */
      "./src/app/pages/doctor-detail/doctor-detail.page.ts");

      var DoctorDetailPageModule = function DoctorDetailPageModule() {
        _classCallCheck(this, DoctorDetailPageModule);
      };

      DoctorDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doctor_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorDetailPageRoutingModule"]],
        declarations: [_doctor_detail_page__WEBPACK_IMPORTED_MODULE_6__["DoctorDetailPage"]]
      })], DoctorDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/doctor-detail/doctor-detail.page.scss":
    /*!*************************************************************!*\
      !*** ./src/app/pages/doctor-detail/doctor-detail.page.scss ***!
      \*************************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDoctorDetailDoctorDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: linear-gradient(to bottom, #28AD9C, #18655D);\n}\nion-toolbar .flex_header {\n  display: flex;\n  justify-content: space-between;\n}\nion-toolbar .flex_header ion-button {\n  margin: 0;\n  --background: transparent;\n  font-family: \"semi-bold\";\n}\nion-toolbar .flex_header ion-button ion-icon {\n  margin-right: 5px;\n}\nion-toolbar .custom_header {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  padding-top: 40px;\n  padding-bottom: 40px;\n}\nion-toolbar .custom_header .round_div4 {\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  height: 180px;\n  min-width: 180px;\n  border-radius: 100%;\n  position: relative;\n}\nion-toolbar .custom_header .round_div3 {\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  height: 160px;\n  width: 160px;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-toolbar .custom_header .round_div2 {\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  height: 140px;\n  width: 140px;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-toolbar .custom_header .round_div1 {\n  border: 2px solid rgba(255, 255, 255, 0.2);\n  height: 120px;\n  width: 120px;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-toolbar .custom_header .user_round {\n  height: 100px;\n  width: 100px;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 100%;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\nion-toolbar .custom_header .call_detail {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n  align-items: center;\n  position: absolute;\n}\nion-toolbar .custom_header .call_detail .round_call {\n  height: 40px;\n  width: 40px;\n  border-radius: 50%;\n  border: 2.5px solid white;\n  position: relative;\n}\nion-toolbar .custom_header .call_detail .round_call ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n}\nion-toolbar .custom_header .doc_detail {\n  display: flex;\n  width: 100%;\n  justify-content: space-evenly;\n  align-items: center;\n  position: absolute;\n  bottom: 5px;\n}\nion-toolbar .custom_header .doc_detail ion-label {\n  color: white;\n  font-family: \"medium\";\n  font-size: 14px;\n}\nion-toolbar .custom_header .name_lbl {\n  font-size: 20px;\n  color: white;\n  position: absolute;\n  top: 50px;\n  font-family: \"medium\";\n}\nion-toolbar .custom_header .spec_lbl {\n  font-size: 14px;\n  color: white;\n  position: absolute;\n  bottom: 50px;\n  font-family: \"semi-bold\";\n}\n.main_content_div ion-segment ion-segment-button ion-label {\n  text-transform: capitalize;\n  font-family: \"medium\";\n}\n.main_content_div .content_div .doctor_div {\n  padding: 16px;\n}\n.main_content_div .content_div .doctor_div .bold_lbl {\n  font-family: \"semi-bold\";\n}\n.main_content_div .content_div .doctor_div ul {\n  padding-left: 16px;\n}\n.main_content_div .content_div .doctor_div ul li {\n  font-size: 14px;\n  color: grey;\n}\n.main_content_div .content_div .doctor_div .service_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  padding-left: 16px;\n}\n.main_content_div .content_div .clinic_div .call_info {\n  padding: 16px;\n}\n.main_content_div .content_div .clinic_div .call_info .contact_lbl {\n  font-family: \"semi-bold\";\n  text-align: center;\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .clinic_div .call_info .addr_lbl {\n  color: grey;\n  font-size: 14px;\n  text-align: center;\n}\n.main_content_div .content_div .clinic_div .map_div {\n  width: 100%;\n  height: 200px;\n  background: lightgrey;\n}\n.main_content_div .content_div .clinic_div .map_div #map {\n  width: 100%;\n  height: 200px;\n}\n.main_content_div .content_div .clinic_div .clinic_gallery {\n  padding: 16px;\n}\n.main_content_div .content_div .clinic_div .clinic_gallery .image_div {\n  width: 100px;\n  height: 100px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .content_div .feedback_div {\n  padding: 20px;\n}\n.main_content_div .content_div .feedback_div .inner_feedback_div {\n  border-bottom: 1px solid lightgrey;\n  padding: 16px 0px;\n}\n.main_content_div .content_div .feedback_div .inner_feedback_div .gray_lbl {\n  font-size: 12px;\n  color: lightgrey;\n  margin-bottom: 3px;\n}\n.main_content_div .content_div .feedback_div .inner_feedback_div .name_lbl {\n  font-family: \"semi-bold\";\n  font-size: 15px;\n  margin-bottom: 5px;\n}\n.main_content_div .content_div .feedback_div .inner_feedback_div .feedback_lbl {\n  color: grey;\n  font-size: 14px;\n}\n.main_content_div .content_div .btn_div {\n  position: fixed;\n  width: 100%;\n  bottom: 10px;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yLWRldGFpbC9kb2N0b3ItZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBEQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNSO0FBQ1E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQUNaO0FBQ1k7RUFDSSxpQkFBQTtBQUNoQjtBQUlJO0VBQ0ksV0FBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFIUjtBQUtRO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFVUTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQVJaO0FBV1E7RUFDSSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFUWjtBQVlRO0VBQ0ksMENBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBVlo7QUFhUTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFYWjtBQWNRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFaWjtBQWNZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFaaEI7QUFjZ0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0FBWnBCO0FBaUJRO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBZlo7QUFpQlk7RUFDSSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBZmhCO0FBbUJRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQWpCWjtBQW1CUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7QUFqQlo7QUF3Qlk7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0FBckJoQjtBQTRCUTtFQUNJLGFBQUE7QUExQlo7QUE0Qlk7RUFDSSx3QkFBQTtBQTFCaEI7QUE0Qlk7RUFDSSxrQkFBQTtBQTFCaEI7QUEyQmdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUF6QnBCO0FBNEJZO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTFCaEI7QUErQlk7RUFDSSxhQUFBO0FBN0JoQjtBQStCZ0I7RUFDSSx3QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBN0JwQjtBQStCZ0I7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBN0JwQjtBQWdDWTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7QUE5QmhCO0FBZ0NnQjtFQUNJLFdBQUE7RUFDQSxhQUFBO0FBOUJwQjtBQWtDWTtFQUNJLGFBQUE7QUFoQ2hCO0FBa0NnQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBaENwQjtBQXFDUTtFQUNJLGFBQUE7QUFuQ1o7QUFvQ1k7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0FBbENoQjtBQW9DZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQWxDcEI7QUFvQ2dCO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFsQ3BCO0FBb0NnQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0FBbENwQjtBQXVDUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFyQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9kb2N0b3ItZGV0YWlsL2RvY3Rvci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzI4QUQ5QywgIzE4NjU1RCk7XG5cbiAgICAuZmxleF9oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9ICAgIFxuXG4gICAgLmN1c3RvbV9oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLy8gaGVpZ2h0OiAyNTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuXG4gICAgICAgIC5yb3VuZF9kaXY0IHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDE4MHB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxODBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAvLyB0b3A6IDUwJTtcbiAgICAgICAgICAgIC8vIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIC8vIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7IFxuICAgICAgICB9XG5cbiAgICAgICAgLnJvdW5kX2RpdjMge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgkY29sb3I6ICNmZmZmZmYsICRhbHBoYTogMC4yKTtcbiAgICAgICAgICAgIGhlaWdodDogMTYwcHg7XG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpOyBcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3VuZF9kaXYyIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xuICAgICAgICAgICAgd2lkdGg6IDE0MHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3VuZF9kaXYxIHtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoJGNvbG9yOiAjZmZmZmZmLCAkYWxwaGE6IDAuMik7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAudXNlcl9yb3VuZCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbGxfZGV0YWlsIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblxuICAgICAgICAgICAgLnJvdW5kX2NhbGwge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAyLjVweCBzb2xpZCB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRvY19kZXRhaWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgYm90dG9tOiA1cHg7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZV9sYmwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdtZWRpdW0nO1xuICAgICAgICB9XG4gICAgICAgIC5zcGVjX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IDUwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgaW9uLXNlZ21lbnQge1xuICAgICAgICBpb24tc2VnbWVudC1idXR0b24ge1xuICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudF9kaXYge1xuXG4gICAgICAgIC5kb2N0b3JfZGl2IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAgICAgICAgIC5ib2xkX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgICAgICBsaSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnNlcnZpY2VfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNsaW5pY19kaXYge1xuICAgICAgICAgICAgLmNhbGxfaW5mbyB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAgICAgICAgIC5jb250YWN0X2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmFkZHJfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tYXBfZGl2IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcblxuICAgICAgICAgICAgICAgICNtYXB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNsaW5pY19nYWxsZXJ5IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgICAgICAgICAgICAgLmltYWdlX2RpdiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5mZWVkYmFja19kaXYge1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICAgIC5pbm5lcl9mZWVkYmFja19kaXYge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweCAwcHg7XG5cbiAgICAgICAgICAgICAgICAuZ3JheV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5hbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmZlZWRiYWNrX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ0bl9kaXYge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/doctor-detail/doctor-detail.page.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/doctor-detail/doctor-detail.page.ts ***!
      \***********************************************************/

    /*! exports provided: DoctorDetailPage */

    /***/
    function srcAppPagesDoctorDetailDoctorDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorDetailPage", function () {
        return DoctorDetailPage;
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

      var DoctorDetailPage = /*#__PURE__*/function () {
        function DoctorDetailPage(route, navCtrl) {
          _classCallCheck(this, DoctorDetailPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.tabID = 'doctor';
          this.images = ['assets/imgs/g1.jpg', 'assets/imgs/g2.jpg', 'assets/imgs/g3.jpg', 'assets/imgs/g4.jpg', 'assets/imgs/g5.jpg', 'assets/imgs/g6.jpg', 'assets/imgs/g7.jpg'];
        }

        _createClass(DoctorDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.loadMap();
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(eve) {
            console.log(eve.detail.value);
            this.tabID = eve.detail.value;
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var latLng = new google.maps.LatLng(-34.9290, 138.6010);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              disableDefaultUI: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          }
        }, {
          key: "goToBooking",
          value: function goToBooking() {
            this.route.navigate(['/booking']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return DoctorDetailPage;
      }();

      DoctorDetailPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      DoctorDetailPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      DoctorDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-doctor-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doctor-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-detail/doctor-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doctor-detail.page.scss */
        "./src/app/pages/doctor-detail/doctor-detail.page.scss"))["default"]]
      })], DoctorDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-doctor-detail-doctor-detail-module-es5.js.map