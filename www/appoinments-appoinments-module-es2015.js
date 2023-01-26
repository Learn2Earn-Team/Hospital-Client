(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["appoinments-appoinments-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinments/appoinments.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinments/appoinments.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title style=\"padding: 0px;\">My Appoinments</ion-title>\n        <ion-button slot=\"end\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"locate\"></ion-icon>\n            Bhavnagar\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <ion-segment value=\"All\" (ionChange)=\"segmentChanged($event)\" mode=\"md\">\n            <ion-segment-button value=\"All\">\n              <ion-label>All</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"Upcoming\">\n              <ion-label>Upcoming</ion-label>\n            </ion-segment-button>\n        </ion-segment>\n\n        <div class=\"content_div\">\n            <div class=\"app_div\" *ngFor=\"let item of [1,2,3]\">\n                <ion-icon name=\"notifications\" class=\"bell_icn\"></ion-icon>\n                <div class=\"noti_div\">\n                    <ion-label class=\"title_lbl\">4th Feb, at 11:00 am</ion-label>\n                    <ion-label class=\"light_lbl\">\n                        Upcoming appt for fever with Dr. Jonh Doe\n                    </ion-label>\n                </div>\n                <ion-icon name=\"checkmark-circle\" class=\"check_icn\"></ion-icon>\n            </div>\n\n            <ion-label class=\"head_lbl\">January</ion-label>\n\n            <div class=\"app_div\" *ngFor=\"let item of [1,2]\">\n                <ion-icon name=\"notifications\" class=\"bell_icn\"></ion-icon>\n                <div class=\"noti_div\">\n                    <ion-label class=\"title_lbl\">4th Feb, at 11:00 am</ion-label>\n                    <ion-label class=\"light_lbl\">\n                        Upcoming appt for fever with Dr. Jonh Doe\n                    </ion-label>\n                </div>\n                <ion-icon name=\"checkmark-circle\" class=\"check_icn\"></ion-icon>\n            </div>\n\n        </div>\n\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/appoinments/appoinments-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/appoinments/appoinments-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: AppoinmentsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentsPageRoutingModule", function() { return AppoinmentsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _appoinments_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appoinments.page */ "./src/app/pages/appoinments/appoinments.page.ts");




const routes = [
    {
        path: '',
        component: _appoinments_page__WEBPACK_IMPORTED_MODULE_3__["AppoinmentsPage"]
    }
];
let AppoinmentsPageRoutingModule = class AppoinmentsPageRoutingModule {
};
AppoinmentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppoinmentsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/appoinments/appoinments.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/appoinments/appoinments.module.ts ***!
  \*********************************************************/
/*! exports provided: AppoinmentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentsPageModule", function() { return AppoinmentsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _appoinments_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appoinments-routing.module */ "./src/app/pages/appoinments/appoinments-routing.module.ts");
/* harmony import */ var _appoinments_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appoinments.page */ "./src/app/pages/appoinments/appoinments.page.ts");







let AppoinmentsPageModule = class AppoinmentsPageModule {
};
AppoinmentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _appoinments_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppoinmentsPageRoutingModule"]
        ],
        declarations: [_appoinments_page__WEBPACK_IMPORTED_MODULE_6__["AppoinmentsPage"]]
    })
], AppoinmentsPageModule);



/***/ }),

/***/ "./src/app/pages/appoinments/appoinments.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/appoinments/appoinments.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--ion-color-app-light);\n}\nion-toolbar ion-title {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\" !important;\n  font-size: 14px;\n}\nion-toolbar ion-button {\n  margin: 0;\n  --background: transparent;\n  font-family: \"semi-bold\";\n}\nion-toolbar ion-button ion-icon {\n  margin-right: 5px;\n}\n.main_content_div ion-segment ion-label {\n  font-family: \"semi-bold\";\n  text-transform: capitalize;\n}\n.main_content_div .content_div {\n  padding: 16px;\n}\n.main_content_div .content_div .head_lbl {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-top: 16px;\n}\n.main_content_div .content_div .app_div {\n  border-bottom: 1px solid lightgrey;\n  padding-top: 16px;\n  padding-bottom: 16px;\n  display: flex;\n  align-items: flex-start;\n}\n.main_content_div .content_div .app_div .bell_icn {\n  color: lightgray;\n  font-size: 20px;\n}\n.main_content_div .content_div .app_div .noti_div {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.main_content_div .content_div .app_div .noti_div .title_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .content_div .app_div .noti_div .light_lbl {\n  font-size: 14px;\n}\n.main_content_div .content_div .app_div .check_icn {\n  color: #4bb14f;\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXBwb2lubWVudHMvYXBwb2lubWVudHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0csd0NBQUE7QUFDSDtBQUNJO0VBQ0ksK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFDUjtBQUVJO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7QUFBUjtBQUVRO0VBQ0ksaUJBQUE7QUFBWjtBQU1RO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBQUhaO0FBT0k7RUFDSSxhQUFBO0FBTFI7QUFPUTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtBQUxaO0FBUVE7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFOWjtBQVFZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBTmhCO0FBUVk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBTmhCO0FBT2dCO0VBQ0ksd0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFMcEI7QUFPZ0I7RUFDSSxlQUFBO0FBTHBCO0FBUVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQU5oQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcG9pbm1lbnRzL2FwcG9pbm1lbnRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG5cbiAgICBpb24tdGl0bGUge1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCcgIWltcG9ydGFudDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIGlvbi1idXR0b257XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuXG4gICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbnRlbnRfZGl2IHtcbiAgICAgICAgcGFkZGluZzogMTZweDtcblxuICAgICAgICAuaGVhZF9sYmwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXBwX2RpdiB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcblxuICAgICAgICAgICAgLmJlbGxfaWNuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmF5O1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ub3RpX2RpdiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICAgICAgLnRpdGxlX2xibCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGlnaHRfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jaGVja19pY24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGJiMTRmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/appoinments/appoinments.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/appoinments/appoinments.page.ts ***!
  \*******************************************************/
/*! exports provided: AppoinmentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppoinmentsPage", function() { return AppoinmentsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AppoinmentsPage = class AppoinmentsPage {
    constructor() { }
    ngOnInit() {
    }
    segmentChanged(event) {
    }
};
AppoinmentsPage.ctorParameters = () => [];
AppoinmentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appoinments',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./appoinments.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/appoinments/appoinments.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./appoinments.page.scss */ "./src/app/pages/appoinments/appoinments.page.scss")).default]
    })
], AppoinmentsPage);



/***/ })

}]);
//# sourceMappingURL=appoinments-appoinments-module-es2015.js.map