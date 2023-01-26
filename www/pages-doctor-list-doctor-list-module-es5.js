(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doctor-list-doctor-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-list/doctor-list.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-list/doctor-list.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDoctorListDoctorListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-select value=\"General Doctor\" style=\"padding: 0px;\">\n            <ion-select-option value=\"{{item}}\" *ngFor=\"let item of doctors\">\n                {{item}}\n            </ion-select-option>\n        </ion-select>\n        <ion-button slot=\"end\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"locate\"></ion-icon>\n            Bhavnagar\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"extra_header\">\n        <div class=\"opt_btn\">\n            <ion-icon name=\"options\"></ion-icon>\n        </div>\n    </div>\n    <div class=\"main_content_div\">\n        <ion-label class=\"title_lbl\">Results showing General Doctors</ion-label>\n        \n        <div class=\"card_div\" *ngFor=\"let item of [1,2,3,4,5]\">\n\n            <div class=\"user_flex\">\n\n                <div class=\"user_back\" [style.backgroundImage]=\"'url(assets/imgs/user1.jpg)'\"></div>  \n                <div class=\"user_detail\">\n                    <ion-label class=\"name\">Dr. Jonh Doe</ion-label>\n                    <ion-label class=\"sub_lbl\">General Physician</ion-label>\n                    <ion-label class=\"grey_lbl\">Lorem ipsum dolor sit amet</ion-label>\n                    <ion-icon name=\"share-social\" class=\"share_icn\"></ion-icon>\n\n                    <div class=\"flex_div\">\n                        <ion-label>₹ 60.00</ion-label>\n                        <ion-label>10 yrs of exp.</ion-label>\n                        <div class=\"like_flex\">\n                            <ion-icon name=\"heart\"></ion-icon>\n                            <ion-label>130</ion-label>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n\n            <ion-label class=\"view_lbl\">VIEW PROFILE</ion-label>\n            <ion-row>\n                <ion-col size=\"6\" style=\"padding-left: 0px;\">\n                    <ion-button expand=\"block\" fill=\"outline\" shape=\"round\" class=\"call_btn\">\n                      Call\n                    </ion-button>\n                </ion-col>\n                <ion-col size=\"6\" style=\"padding-right: 0px;\">\n                    <ion-button expand=\"block\" shape=\"round\" class=\"book_btn\" (click)=\"goToDoctorDetail()\">\n                      Book\n                    </ion-button>\n                </ion-col>\n            </ion-row>\n\n        </div>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/doctor-list/doctor-list-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/doctor-list/doctor-list-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: DoctorListPageRoutingModule */

    /***/
    function srcAppPagesDoctorListDoctorListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorListPageRoutingModule", function () {
        return DoctorListPageRoutingModule;
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


      var _doctor_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doctor-list.page */
      "./src/app/pages/doctor-list/doctor-list.page.ts");

      var routes = [{
        path: '',
        component: _doctor_list_page__WEBPACK_IMPORTED_MODULE_3__["DoctorListPage"]
      }];

      var DoctorListPageRoutingModule = function DoctorListPageRoutingModule() {
        _classCallCheck(this, DoctorListPageRoutingModule);
      };

      DoctorListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DoctorListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/doctor-list/doctor-list.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/doctor-list/doctor-list.module.ts ***!
      \*********************************************************/

    /*! exports provided: DoctorListPageModule */

    /***/
    function srcAppPagesDoctorListDoctorListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorListPageModule", function () {
        return DoctorListPageModule;
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


      var _doctor_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doctor-list-routing.module */
      "./src/app/pages/doctor-list/doctor-list-routing.module.ts");
      /* harmony import */


      var _doctor_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doctor-list.page */
      "./src/app/pages/doctor-list/doctor-list.page.ts");

      var DoctorListPageModule = function DoctorListPageModule() {
        _classCallCheck(this, DoctorListPageModule);
      };

      DoctorListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doctor_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["DoctorListPageRoutingModule"]],
        declarations: [_doctor_list_page__WEBPACK_IMPORTED_MODULE_6__["DoctorListPage"]]
      })], DoctorListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/doctor-list/doctor-list.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/doctor-list/doctor-list.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDoctorListDoctorListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".extra_header {\n  background: var(--ion-color-app-light);\n  padding: 16px;\n}\n.extra_header .opt_btn {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background: linear-gradient(to right, #28AD9C, #18655D);\n  position: absolute;\n  right: 16px;\n  top: 7px;\n}\n.extra_header .opt_btn ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 24px;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .title_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-bottom: 16px;\n  font-size: 15px;\n}\n.main_content_div .card_div {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.main_content_div .card_div .user_flex {\n  display: flex;\n}\n.main_content_div .card_div .user_flex .user_back {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 50%;\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.main_content_div .card_div .user_flex .user_detail {\n  padding-left: 10px;\n  width: 100%;\n  position: relative;\n}\n.main_content_div .card_div .user_flex .user_detail .share_icn {\n  position: absolute;\n  top: 0;\n  right: 0;\n  color: var(--ion-color-primary);\n  font-size: 20px;\n}\n.main_content_div .card_div .user_flex .user_detail .name {\n  font-size: 18px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .card_div .user_flex .user_detail .sub_lbl {\n  font-size: 13px;\n  font-family: \"medium\";\n  color: gray;\n  line-height: 10px;\n}\n.main_content_div .card_div .user_flex .user_detail .grey_lbl {\n  font-size: 13px;\n  color: lightgrey;\n}\n.main_content_div .card_div .user_flex .user_detail .flex_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.main_content_div .card_div .user_flex .user_detail .flex_div ion-label {\n  font-family: \"bold\";\n  font-size: 14px;\n}\n.main_content_div .card_div .user_flex .user_detail .flex_div .like_flex {\n  display: flex;\n  align-items: center;\n}\n.main_content_div .card_div .user_flex .user_detail .flex_div .like_flex ion-icon {\n  color: red;\n  margin-right: 5px;\n}\n.main_content_div .card_div .view_lbl {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\";\n  text-align: center;\n  font-size: 12px;\n  letter-spacing: 1px;\n}\n.main_content_div .card_div ion-button {\n  height: 40px;\n  letter-spacing: 1px;\n}\n.main_content_div .card_div .call_btn {\n  --background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdG9yLWxpc3QvZG9jdG9yLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCQTtFQUNJLHNDQUFBO0VBQ0EsYUFBQTtBQXpCSjtBQTJCSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFFBQUE7QUF6QlI7QUEyQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQXpCWjtBQThCQTtFQUNJLGFBQUE7QUEzQko7QUE2Qkk7RUFDSSxjQUFBO0FBM0JSO0FBOEJJO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQTVCUjtBQStCSTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBN0JSO0FBK0JRO0VBQ0ksYUFBQTtBQTdCWjtBQStCWTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBN0JoQjtBQStCWTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBN0JoQjtBQStCZ0I7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBN0JwQjtBQWdDZ0I7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUE5QnBCO0FBZ0NnQjtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQTlCcEI7QUFnQ2dCO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBOUJwQjtBQWlDZ0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQS9CcEI7QUFpQ29CO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBL0J4QjtBQWtDb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFoQ3hCO0FBa0N3QjtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQWhDNUI7QUF1Q1E7RUFDSSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFyQ1o7QUF3Q1E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUF0Q1o7QUF5Q1E7RUFDSSxtQkFBQTtBQXZDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvY3Rvci1saXN0L2RvY3Rvci1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuIFxuLy8gICAgIGlvbi10aXRsZSB7XG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJyAhaW1wb3J0YW50O1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgfVxuXG4vLyAgICAgaW9uLXNlbGVjdCB7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuLy8gICAgIH1cbiAgICBcbi8vICAgICBpb24tYnV0dG9ue1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcblxuLy8gICAgICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cblxuLmV4dHJhX2hlYWRlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5vcHRfYnRuIHtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyOEFEOUMsICMxODY1NUQpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDdweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnRpdGxlX2xibCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIC5jYXJkX2RpdiB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICAgICAgICAudXNlcl9mbGV4IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgIC51c2VyX2JhY2sge1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudXNlcl9kZXRhaWwge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgICAgICAuc2hhcmVfaWNuIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnN1Yl9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZ3JleV9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBsaWdodGdyZXk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcblxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdib2xkJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5saWtlX2ZsZXgge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnZpZXdfbGJsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhbGxfYnRuIHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/doctor-list/doctor-list.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/doctor-list/doctor-list.page.ts ***!
      \*******************************************************/

    /*! exports provided: DoctorListPage */

    /***/
    function srcAppPagesDoctorListDoctorListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DoctorListPage", function () {
        return DoctorListPage;
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

      var DoctorListPage = /*#__PURE__*/function () {
        function DoctorListPage(route, navCtrl) {
          _classCallCheck(this, DoctorListPage);

          this.route = route;
          this.navCtrl = navCtrl;
          this.doctors = ['General Doctor', 'Skin & Hair', 'Child Care', 'Women\'s Health', 'Dentists', 'ENT', 'Audiologist', 'Psychiatrists', 'Radiologist', 'Neurologist'];
        }

        _createClass(DoctorListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToDoctorDetail",
          value: function goToDoctorDetail() {
            this.route.navigate(['/doctor-detail']);
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return DoctorListPage;
      }();

      DoctorListPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      DoctorListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-doctor-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doctor-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doctor-list/doctor-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doctor-list.page.scss */
        "./src/app/pages/doctor-list/doctor-list.page.scss"))["default"]]
      })], DoctorListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-doctor-list-doctor-list-module-es5.js.map