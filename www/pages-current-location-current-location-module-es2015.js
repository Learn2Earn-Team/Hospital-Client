(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-current-location-current-location-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/current-location/current-location.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/current-location/current-location.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title style=\"padding: 0px;\">Currernt Location</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"main_content_div\">\n\n      <div class=\"abs_div\">\n          <ion-button expand=\"block\" shape=\"round\" class=\"gredient_btn\" (click)=\"goToGetAmbulance()\">\n              confirm\n          </ion-button>\n      </div>\n      \n      <div #map id=\"map\" class=\"map\"></div>\n\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/current-location/current-location-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/current-location/current-location-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CurrentLocationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLocationPageRoutingModule", function() { return CurrentLocationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _current_location_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./current-location.page */ "./src/app/pages/current-location/current-location.page.ts");




const routes = [
    {
        path: '',
        component: _current_location_page__WEBPACK_IMPORTED_MODULE_3__["CurrentLocationPage"]
    }
];
let CurrentLocationPageRoutingModule = class CurrentLocationPageRoutingModule {
};
CurrentLocationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CurrentLocationPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/current-location/current-location.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/current-location/current-location.module.ts ***!
  \*******************************************************************/
/*! exports provided: CurrentLocationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLocationPageModule", function() { return CurrentLocationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _current_location_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./current-location-routing.module */ "./src/app/pages/current-location/current-location-routing.module.ts");
/* harmony import */ var _current_location_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./current-location.page */ "./src/app/pages/current-location/current-location.page.ts");







let CurrentLocationPageModule = class CurrentLocationPageModule {
};
CurrentLocationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _current_location_routing_module__WEBPACK_IMPORTED_MODULE_5__["CurrentLocationPageRoutingModule"]
        ],
        declarations: [_current_location_page__WEBPACK_IMPORTED_MODULE_6__["CurrentLocationPage"]]
    })
], CurrentLocationPageModule);



/***/ }),

/***/ "./src/app/pages/current-location/current-location.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/current-location/current-location.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #F9F9FC;\n}\n\n.main_content_div {\n  height: 100%;\n  width: 100%;\n}\n\n.main_content_div #map {\n  width: 100%;\n  height: 100%;\n}\n\n.main_content_div .abs_div {\n  padding: 40px 16px;\n  position: absolute;\n  bottom: 0px;\n  z-index: 999;\n  width: 100%;\n}\n\n.main_content_div .abs_div ion-button {\n  width: 100%;\n}\n\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3VycmVudC1sb2NhdGlvbi9jdXJyZW50LWxvY2F0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTQTtFQUNJLHFCQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVJKOztBQVVJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFSUjs7QUFXSTtFQUNJLGtCQUFBO0VBUUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFoQlI7O0FBa0JRO0VBQ0ksV0FBQTtBQWhCWjs7QUFvQkk7RUFDSSxXQUFBO0VBQ0EsU0FBQTtBQWxCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2N1cnJlbnQtbG9jYXRpb24vY3VycmVudC1sb2NhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbiBcbi8vICAgICAgaW9uLXRpdGxlIHtcbi8vICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCcgIWltcG9ydGFudDtcbi8vICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICAgfVxuLy8gfVxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI0Y5RjlGQztcbn1cblxuLm1haW5fY29udGVudF9kaXYge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICNtYXB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmFic19kaXYge1xuICAgICAgICBwYWRkaW5nOiA0MHB4IDE2cHg7XG4gICAgICAgIC8vIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8gZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAvLyBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIC8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmVkaWVudF9idG4ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/current-location/current-location.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/current-location/current-location.page.ts ***!
  \*****************************************************************/
/*! exports provided: CurrentLocationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentLocationPage", function() { return CurrentLocationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let CurrentLocationPage = class CurrentLocationPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        // this.loadMap();
    }
    loadMap() {
        let latLng = new google.maps.LatLng(-34.9290, 138.6010);
        let mapOptions = {
            center: latLng,
            zoom: 15,
            disableDefaultUI: true,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    }
    goToGetAmbulance() {
        this.route.navigate(['/get-ambulance']);
    }
    goBack() {
        this.navCtrl.back();
    }
};
CurrentLocationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
CurrentLocationPage.propDecorators = {
    mapElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['map', { static: true },] }]
};
CurrentLocationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-current-location',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./current-location.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/current-location/current-location.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./current-location.page.scss */ "./src/app/pages/current-location/current-location.page.scss")).default]
    })
], CurrentLocationPage);



/***/ })

}]);
//# sourceMappingURL=pages-current-location-current-location-module-es2015.js.map