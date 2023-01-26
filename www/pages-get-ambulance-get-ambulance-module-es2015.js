(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-get-ambulance-get-ambulance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/get-ambulance/get-ambulance.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/get-ambulance/get-ambulance.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title style=\"padding: 0px;\">Getting Ambulance</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        \n        <div class=\"abs_div\" *ngIf=\"tabID == 1\">\n            <div class=\"card_div\">\n                <ion-label class=\"loc_lbl\">Government College Ambulance</ion-label>\n                <div class=\"flex_div\">\n                    <ion-label class=\"km_lbl\">2.2 KM Away</ion-label>\n                    <ion-label class=\"time_lbl\">Reach Time : <span>10 MIns</span></ion-label>\n                </div>\n            </div>\n            <ion-button expand=\"block\" shape=\"round\" class=\"gredient_btn\" (click)=\"tabID = 2\">\n                Confirm Ambulance\n            </ion-button>\n        </div>\n\n        <div class=\"abs_div\" *ngIf=\"tabID == 2\">\n            <div class=\"card_div\">\n                <ion-label class=\"loc_lbl\">Government College Ambulance : <span>On the way</span></ion-label>\n                <div class=\"flex_div\">\n                    <ion-label class=\"km_lbl\">2.2 KM Away</ion-label>\n                    <ion-label class=\"time_lbl\">Reach Time : <span>10 MIns</span></ion-label>\n                </div>\n            </div>\n            <ion-button expand=\"block\" shape=\"round\" class=\"gredient_btn\">\n                Call Driver\n            </ion-button>\n        </div>\n\n        <div #map id=\"map\" class=\"map\"></div>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/get-ambulance/get-ambulance-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/get-ambulance/get-ambulance-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: GetAmbulancePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAmbulancePageRoutingModule", function() { return GetAmbulancePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _get_ambulance_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-ambulance.page */ "./src/app/pages/get-ambulance/get-ambulance.page.ts");




const routes = [
    {
        path: '',
        component: _get_ambulance_page__WEBPACK_IMPORTED_MODULE_3__["GetAmbulancePage"]
    }
];
let GetAmbulancePageRoutingModule = class GetAmbulancePageRoutingModule {
};
GetAmbulancePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetAmbulancePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/get-ambulance/get-ambulance.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/get-ambulance/get-ambulance.module.ts ***!
  \*************************************************************/
/*! exports provided: GetAmbulancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAmbulancePageModule", function() { return GetAmbulancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _get_ambulance_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-ambulance-routing.module */ "./src/app/pages/get-ambulance/get-ambulance-routing.module.ts");
/* harmony import */ var _get_ambulance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-ambulance.page */ "./src/app/pages/get-ambulance/get-ambulance.page.ts");







let GetAmbulancePageModule = class GetAmbulancePageModule {
};
GetAmbulancePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_ambulance_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetAmbulancePageRoutingModule"]
        ],
        declarations: [_get_ambulance_page__WEBPACK_IMPORTED_MODULE_6__["GetAmbulancePage"]]
    })
], GetAmbulancePageModule);



/***/ }),

/***/ "./src/app/pages/get-ambulance/get-ambulance.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/get-ambulance/get-ambulance.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: var(--ion-color-app-light);\n}\nion-toolbar ion-title {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\" !important;\n  font-size: 14px;\n}\nion-content {\n  --background: #F9F9FC;\n}\n.main_content_div {\n  height: 100%;\n  width: 100%;\n}\n.main_content_div #map {\n  width: 100%;\n  height: 100%;\n}\n.main_content_div .abs_div {\n  padding: 40px 16px;\n  position: absolute;\n  bottom: 0px;\n  z-index: 999;\n  width: 100%;\n}\n.main_content_div .abs_div .card_div {\n  background: white;\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  margin-bottom: 16px;\n}\n.main_content_div .abs_div .card_div .loc_lbl {\n  font-size: 18px;\n  font-family: \"medium\";\n  width: 80%;\n}\n.main_content_div .abs_div .card_div .loc_lbl span {\n  color: var(--ion-color-primary);\n}\n.main_content_div .abs_div .card_div .flex_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n}\n.main_content_div .abs_div .card_div .flex_div .km_lbl {\n  font-size: 13px;\n  color: lightgrey;\n  font-family: \"semi-bold\";\n}\n.main_content_div .abs_div .card_div .flex_div .time_lbl {\n  font-size: 13px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .abs_div .card_div .flex_div .time_lbl span {\n  color: var(--ion-color-primary);\n}\n.main_content_div .abs_div ion-button {\n  width: 100%;\n}\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2V0LWFtYnVsYW5jZS9nZXQtYW1idWxhbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0FBQ0o7QUFDSztFQUNJLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxlQUFBO0FBQ1Q7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0o7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBUUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFQUjtBQVNRO0VBQ0ksaUJBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVBaO0FBU1k7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBUGhCO0FBU2dCO0VBQ0ksK0JBQUE7QUFQcEI7QUFXWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFUaEI7QUFXZ0I7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQVRwQjtBQVlnQjtFQUNJLGVBQUE7RUFDQSx3QkFBQTtBQVZwQjtBQVlvQjtFQUNJLCtCQUFBO0FBVnhCO0FBZ0JRO0VBQ0ksV0FBQTtBQWRaO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLFNBQUE7QUFoQlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZXQtYW1idWxhbmNlL2dldC1hbWJ1bGFuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gXG4gICAgIGlvbi10aXRsZSB7XG4gICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnICFpbXBvcnRhbnQ7XG4gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgIH1cbn1cbmlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGOUY5RkM7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAjbWFwe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5hYnNfZGl2IHtcbiAgICAgICAgcGFkZGluZzogNDBweCAxNnB4O1xuICAgICAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIC8vIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5jYXJkX2RpdiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgICAgICAgICAubG9jX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnbWVkaXVtJztcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG5cbiAgICAgICAgICAgICAgICAua21fbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRncmV5O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpbWVfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG5cbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmVkaWVudF9idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/get-ambulance/get-ambulance.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/get-ambulance/get-ambulance.page.ts ***!
  \***********************************************************/
/*! exports provided: GetAmbulancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetAmbulancePage", function() { return GetAmbulancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let GetAmbulancePage = class GetAmbulancePage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
        this.tabID = 1;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
GetAmbulancePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
GetAmbulancePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-get-ambulance',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./get-ambulance.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/get-ambulance/get-ambulance.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./get-ambulance.page.scss */ "./src/app/pages/get-ambulance/get-ambulance.page.scss")).default]
    })
], GetAmbulancePage);



/***/ })

}]);
//# sourceMappingURL=pages-get-ambulance-get-ambulance-module-es2015.js.map