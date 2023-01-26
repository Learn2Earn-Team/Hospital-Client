(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-emergancy-emergancy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/emergancy/emergancy.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/emergancy/emergancy.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title style=\"padding: 0px;\">Emergancy</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"location_card\">\n            <ion-label class=\"title_lbl\">Your Location</ion-label>\n            <ion-label class=\"addr_lbl\">1234, Hilldrive, Aksharwadi road, Bhavnagar - 364001</ion-label>\n            <ion-button shape=\"round\" (click)=\"goToCurrentLocation()\">\n                Change Location\n            </ion-button>\n        </div>\n\n        <img src=\"assets/imgs/ambulance.png\">\n        <ion-label class=\"bold_lbl\">Call Ambulance</ion-label>\n        <ion-label class=\"small_lbl\">Incase of emergancy just press the call Ambulabce button to alert the nearby Ambulance to arrive at your location</ion-label>\n        <ion-button expand=\"block\" shape=\"round\" class=\"red_btn\" (click)=\"goToGetAmbulance()\">\n            Call Ambulance \n        </ion-button>\n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/emergancy/emergancy-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/emergancy/emergancy-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EmergancyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergancyPageRoutingModule", function() { return EmergancyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _emergancy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emergancy.page */ "./src/app/pages/emergancy/emergancy.page.ts");




const routes = [
    {
        path: '',
        component: _emergancy_page__WEBPACK_IMPORTED_MODULE_3__["EmergancyPage"]
    }
];
let EmergancyPageRoutingModule = class EmergancyPageRoutingModule {
};
EmergancyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EmergancyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/emergancy/emergancy.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/emergancy/emergancy.module.ts ***!
  \*****************************************************/
/*! exports provided: EmergancyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergancyPageModule", function() { return EmergancyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _emergancy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emergancy-routing.module */ "./src/app/pages/emergancy/emergancy-routing.module.ts");
/* harmony import */ var _emergancy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emergancy.page */ "./src/app/pages/emergancy/emergancy.page.ts");







let EmergancyPageModule = class EmergancyPageModule {
};
EmergancyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _emergancy_routing_module__WEBPACK_IMPORTED_MODULE_5__["EmergancyPageRoutingModule"]
        ],
        declarations: [_emergancy_page__WEBPACK_IMPORTED_MODULE_6__["EmergancyPage"]]
    })
], EmergancyPageModule);



/***/ }),

/***/ "./src/app/pages/emergancy/emergancy.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/emergancy/emergancy.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 40px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .location_card {\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);\n  padding: 20px 40px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.main_content_div .location_card .title_lbl {\n  font-family: \"semi-bold\";\n  text-align: center;\n  margin-bottom: 5px;\n}\n.main_content_div .location_card .addr_lbl {\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 5px;\n}\n.main_content_div .location_card ion-button {\n  width: 85%;\n}\n.main_content_div img {\n  width: 90px;\n  margin-top: 40px;\n}\n.main_content_div .bold_lbl {\n  font-family: \"bold\";\n  text-align: center;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  margin-top: 10px;\n  font-size: 18px;\n}\n.main_content_div .small_lbl {\n  font-size: 14px;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.main_content_div .red_btn {\n  --background: linear-gradient(to right, #DB2F45,#A1191D);\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZW1lcmdhbmN5L2VtZXJnYW5jeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVEo7QUFXSTtFQUNJLGNBQUE7QUFUUjtBQVlJO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZUTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZaO0FBWVE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVZaO0FBYVE7RUFDSSxVQUFBO0FBWFo7QUFlSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQWJSO0FBZ0JJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFkUjtBQWdCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBZFI7QUFpQkk7RUFDSSx3REFBQTtFQUNBLFdBQUE7QUFmUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VtZXJnYW5jeS9lbWVyZ2FuY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gXG4vLyAgICAgaW9uLXRpdGxlIHtcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICB9XG4vLyB9XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpb24tbGFiZWwge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubG9jYXRpb25fY2FyZCB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggNnB4IHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC50aXRsZV9sYmwge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5hZGRyX2xibCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIH1cblxuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG5cbiAgICAuYm9sZF9sYmwge1xuICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgIH1cbiAgICAuc21hbGxfbGJsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuXG4gICAgLnJlZF9idG4ge1xuICAgICAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0RCMkY0NSwjQTExOTFEKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/emergancy/emergancy.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/emergancy/emergancy.page.ts ***!
  \***************************************************/
/*! exports provided: EmergancyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmergancyPage", function() { return EmergancyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




let EmergancyPage = class EmergancyPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goToCurrentLocation() {
        this.route.navigate(['/current-location']);
    }
    goToGetAmbulance() {
        this.route.navigate(['/get-ambulance']);
    }
    goBack() {
        this.navCtrl.back();
    }
};
EmergancyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
EmergancyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-emergancy',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./emergancy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/emergancy/emergancy.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./emergancy.page.scss */ "./src/app/pages/emergancy/emergancy.page.scss")).default]
    })
], EmergancyPage);



/***/ })

}]);
//# sourceMappingURL=pages-emergancy-emergancy-module-es2015.js.map