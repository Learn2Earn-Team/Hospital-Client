(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title style=\"padding: 0px;\">Payment</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"stepper_div\">\n            <div class=\"round_div\" [class.completed]=\" tabID >=1 \"></div>\n            <div class=\"line_div\"></div>\n            <div class=\"round_div\" [class.completed]=\" tabID >=2 \"></div>\n            <div class=\"line_div\"></div>\n            <div class=\"round_div\" [class.completed]=\" tabID >=3 \"></div>\n        </div>\n        <!-- <div>\n            <ion-label>SHIPPING</ion-label>\n            <ion-label>PAYMENT</ion-label>\n            <ion-label>CONFORMATION</ion-label>\n        </div> -->\n\n        <div *ngIf=\"tabID == 1\">\n            <ion-label class=\"name_lbl\">Dr. Jonh Doe</ion-label>\n            <ion-label class=\"spec_lbl\">General Physician</ion-label>\n            <ion-label class=\"spec_lbl\">HSR layout, Bangalore</ion-label>\n    \n            <div class=\"border_div\">\n                <ion-label class=\"date_lbl\">4th Feb 2020, 11.30 am</ion-label>\n            </div>\n    \n            <ion-label class=\"green_name\">Your Name</ion-label>\n            <ion-input type=\"text\" placeholder=\"Your Name\"></ion-input>\n            <ion-label class=\"green_name\">Reason for Visit</ion-label>\n            <ion-input type=\"text\" placeholder=\"Reason for Visit\"></ion-input>\n            <ion-label class=\"green_name\">Patient Name</ion-label>\n            <ion-input type=\"text\" placeholder=\"Patient Name\"></ion-input>\n    \n            <div class=\"check_flex\">\n                <ion-checkbox mode=\"md\"></ion-checkbox>\n                <ion-label>I have visited this Doctor before</ion-label>\n            </div>\n    \n            <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 2\">\n              Next\n            </ion-button>\n        </div>\n\n        <div *ngIf=\"tabID == 2\">\n\n            <ion-label class=\"price_btn\">₹ 200.00</ion-label>\n\n            <ion-row>\n                <ion-col size=\"9\" style=\"padding: 0\">\n                    <ion-label class=\"green_name\">CARD NUMBER</ion-label>\n                    <ion-input type=\"text\" placeholder=\"XXXX-XXXX-XXXX-4242\"></ion-input>\n                </ion-col>\n                <ion-col size=\"3\">\n                    <div class=\"card_box\">\n                        <img src=\"assets/imgs/visa.png\">\n                    </div>\n                </ion-col>\n                <ion-col size=\"12\" style=\"padding: 0\">\n                    <ion-label class=\"green_name\">CARDHOLDER NAME</ion-label>\n                    <ion-input type=\"text\" placeholder=\"Your Name\"></ion-input>\n                </ion-col>\n                <ion-col size=\"6\" style=\"padding-left: 0\">\n                    <ion-label class=\"green_name\">EXPIRE DATE</ion-label>\n                    <ion-datetime display-format=\"MM/YYYY\" placeholder=\"MM/YYYY\"></ion-datetime>\n                </ion-col>\n                <ion-col size=\"6\" style=\"padding-right: 0\">\n                  <ion-label class=\"green_name\">CVV</ion-label>\n                  <ion-input type=\"text\" placeholder=\"***\"></ion-input>\n                </ion-col>\n            </ion-row>\n\n            <div class=\"check_flex\">\n                <ion-checkbox mode=\"md\"></ion-checkbox>\n                <ion-label>SAVE CARD</ion-label>\n            </div>\n\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"tabID = 3\">\n              Pay Securely\n            </ion-button>\n        </div>\n\n        <div *ngIf=\"tabID == 3\" class=\"app_detail\">\n            <img src=\"assets/imgs/secure.png\">\n            <ion-label class=\"bold_lbl\">APPOINTMENT CONFIRM</ion-label>\n            <ion-label class=\"grey_lbl\">Your appointment with Dr. Jonh Doe on 4th February 2019 at 11:30 AM is confirm.</ion-label>\n\n            <div class=\"border_div2\">\n                <ion-label class=\"grey_lbl\">Time left before appoinment.</ion-label>\n                <ion-label class=\"bold_lbl\">2 Days 4 hours</ion-label>\n            </div>\n            \n\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"goToTabs()\">\n                Set Reminder\n            </ion-button>\n        </div>\n\n        \n    </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/payment/payment-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "./src/app/pages/payment/payment-routing.module.ts");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "./src/app/pages/payment/payment.page.ts");







let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "./src/app/pages/payment/payment.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main_content_div {\n  padding: 16px;\n}\n.main_content_div ion-label {\n  display: block;\n}\n.main_content_div .stepper_div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n}\n.main_content_div .stepper_div .round_div {\n  height: 15px;\n  width: 15px;\n  min-width: 15px;\n  border-radius: 50%;\n  border: 1px solid var(--ion-color-primary);\n}\n.main_content_div .stepper_div .completed {\n  background: var(--ion-color-primary);\n}\n.main_content_div .stepper_div .line_div {\n  height: 3px;\n  width: 100%;\n  background: var(--ion-color-app-light);\n}\n.main_content_div .name_lbl {\n  font-size: 16px;\n  text-align: center;\n  font-family: \"semi-bold\";\n}\n.main_content_div .spec_lbl {\n  font-size: 14px;\n  color: grey;\n  font-family: \"medium\";\n  text-align: center;\n}\n.main_content_div .border_div {\n  border-top: 1px solid lightgrey;\n  width: 200px;\n  margin: auto;\n  margin-top: 10px;\n  padding-top: 10px;\n  margin-bottom: 20px;\n}\n.main_content_div .date_lbl {\n  font-size: 14px;\n  text-align: center;\n}\n.main_content_div .green_name {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main_content_div ion-input, .main_content_div ion-datetime {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  margin-bottom: 16px;\n  height: 50px;\n}\n.main_content_div .price_btn {\n  text-align: center;\n  font-size: 24px;\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .card_box {\n  border: 1px solid lightgrey;\n  border-radius: 5px;\n  position: relative;\n  height: 45px;\n  margin-bottom: 16px;\n  margin-top: 23px;\n}\n.main_content_div .card_box img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 50px;\n}\n.main_content_div .check_flex {\n  display: flex;\n  align-items: center;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n.main_content_div .check_flex ion-checkbox {\n  --border-color: lightgrey;\n  --border-width: 2px;\n}\n.main_content_div .check_flex ion-label {\n  margin-left: 10px;\n  color: var(--ion-color-primary);\n  font-size: 12px;\n  font-family: \"semi-bold\";\n}\n.main_content_div .app_detail {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.main_content_div .app_detail img {\n  width: 100px;\n  margin-top: 50px;\n  margin-bottom: 50px;\n}\n.main_content_div .app_detail .bold_lbl {\n  font-family: \"bold\";\n  font-size: 14px;\n}\n.main_content_div .app_detail .grey_lbl {\n  color: gray;\n  font-size: 14px;\n  text-align: center;\n}\n.main_content_div .app_detail .border_div2 {\n  width: 300px;\n  border-top: 1px solid lightgrey;\n  margin-top: 20px;\n  padding-top: 20px;\n  margin-bottom: 20px;\n}\n.main_content_div .app_detail .border_div2 .grey_lbl {\n  color: gray;\n  font-size: 14px;\n  text-align: center !important;\n}\n.main_content_div .app_detail .border_div2 .bold_lbl {\n  font-family: \"semi-bold\";\n  font-size: 14px;\n  text-align: center !important;\n}\n.main_content_div .app_detail ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLGFBQUE7QUFUSjtBQVdJO0VBQ0ksY0FBQTtBQVRSO0FBWUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUFWUjtBQVdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtBQVRaO0FBV1E7RUFDSSxvQ0FBQTtBQVRaO0FBV1E7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0FBVFo7QUFhSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0FBWFI7QUFhSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtBQVhSO0FBY0k7RUFDSSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBWlI7QUFjSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQVpSO0FBZUk7RUFDSSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBYlI7QUFlSTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBYlI7QUFnQkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQWRSO0FBaUJJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFmUjtBQWlCUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7QUFmWjtBQWtCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWhCUjtBQWtCUTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7QUFoQlo7QUFtQlE7RUFDSSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FBakJaO0FBcUJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFuQlI7QUFxQlE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQW5CWjtBQXFCUTtFQUNJLG1CQUFBO0VBQ0EsZUFBQTtBQW5CWjtBQXFCUTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFuQlo7QUFxQlE7RUFDSSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFuQlo7QUFxQlk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBbkJoQjtBQXFCWTtFQUNJLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0FBbkJoQjtBQXVCUTtFQUNJLFdBQUE7QUFyQloiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLXRvb2xiYXIge1xuLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gXG4vLyAgICAgaW9uLXRpdGxlIHtcbi8vICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbi8vICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbi8vICAgICB9XG4vLyB9XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLnN0ZXBwZXJfZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICAucm91bmRfZGl2IHtcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIC5jb21wbGV0ZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB9XG4gICAgICAgIC5saW5lX2RpdiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubmFtZV9sYmwge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgIH1cbiAgICAuc3BlY19sYmwge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYm9yZGVyX2RpdiB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmRhdGVfbGJse1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuZ3JlZW5fbmFtZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dCwgaW9uLWRhdGV0aW1lIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICB9XG5cbiAgICAucHJpY2VfYnRuIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuY2FyZF9ib3gge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDIzcHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jaGVja19mbGV4IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIGlvbi1jaGVja2JveHtcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yIDogbGlnaHRncmV5O1xuICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYXBwX2RldGFpbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ib2xkX2xibCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ2JvbGQnO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICB9XG4gICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICAuYm9yZGVyX2RpdjIge1xuICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAgICAgICAgIC5ncmV5X2xibCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmJvbGRfbGJsIHtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ3NlbWktYm9sZCc7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/payment/payment.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let PaymentPage = class PaymentPage {
    constructor(route, navCtrl) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.tabID = 1;
    }
    ngOnInit() {
    }
    goToTabs() {
        this.route.navigate(['/tabs']);
    }
    goBack() {
        this.navCtrl.back();
    }
};
PaymentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"] }
];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./payment.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./payment.page.scss */ "./src/app/pages/payment/payment.page.scss")).default]
    })
], PaymentPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-payment-module-es2015.js.map