(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-set-reminder-set-reminder-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-reminder/set-reminder.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-reminder/set-reminder.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesSetReminderSetReminderPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title style=\"padding: 0px;\" >Set Reminder</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <ion-label class=\"green_name\">Drug Name</ion-label>\n        <ion-input type=\"text\" placeholder=\"Drug Name\"></ion-input>\n\n        <ion-label class=\"green_name\">Concern</ion-label>\n        <ion-input type=\"text\" placeholder=\"Concern\"></ion-input>\n\n        <ion-label class=\"green_name\">Dosage</ion-label>\n        <ion-select value=\"1\" placeholder=\"Dosage\">\n            <ion-select-option value=\"1\">1</ion-select-option>\n            <ion-select-option value=\"2\">2</ion-select-option>\n            <ion-select-option value=\"3\">3</ion-select-option>\n            <ion-select-option value=\"4\">4</ion-select-option>\n        </ion-select>\n\n        <ion-label class=\"green_name\">Doctor</ion-label>\n        <ion-input type=\"text\" placeholder=\"Doctor\"></ion-input>\n\n        <ion-row>\n            <ion-col size=\"6\" style=\"padding-left: 0px;\">\n                <ion-label class=\"green_name\">Start</ion-label>\n                <div class=\"date_div\">\n                    <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"Start\"></ion-datetime>\n                    <ion-icon name=\"calendar-sharp\"></ion-icon>\n                </div>\n            </ion-col>\n            <ion-col size=\"6\" style=\"padding-right: 0px;\">\n                <ion-label class=\"green_name\">End</ion-label>\n                <div class=\"date_div\">\n                    <ion-datetime display-format=\"DD/MM/YYYY\" placeholder=\"End\"></ion-datetime>\n                    <ion-icon name=\"calendar-sharp\"></ion-icon>\n                </div>\n            </ion-col>\n        </ion-row>\n\n        <ion-label class=\"green_name\">Time</ion-label>\n        <div class=\"time_slots\">\n            <ion-datetime display-format=\"hh:mm A\" *ngFor=\"let item of timeSlots\" placeholder=\"Time\"></ion-datetime>\n            <div class=\"add_btn\" (click)=\"addSlot()\">\n                <ion-icon name=\"add\"></ion-icon>\n            </div>\n        </div>\n        \n        <ion-button expand=\"block\" shape=\"round\">\n            Set Reminder\n        </ion-button>\n\n\n        \n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/set-reminder/set-reminder-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/set-reminder/set-reminder-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: SetReminderPageRoutingModule */

    /***/
    function srcAppPagesSetReminderSetReminderRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetReminderPageRoutingModule", function () {
        return SetReminderPageRoutingModule;
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


      var _set_reminder_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./set-reminder.page */
      "./src/app/pages/set-reminder/set-reminder.page.ts");

      var routes = [{
        path: '',
        component: _set_reminder_page__WEBPACK_IMPORTED_MODULE_3__["SetReminderPage"]
      }];

      var SetReminderPageRoutingModule = function SetReminderPageRoutingModule() {
        _classCallCheck(this, SetReminderPageRoutingModule);
      };

      SetReminderPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SetReminderPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/set-reminder/set-reminder.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/set-reminder/set-reminder.module.ts ***!
      \***********************************************************/

    /*! exports provided: SetReminderPageModule */

    /***/
    function srcAppPagesSetReminderSetReminderModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetReminderPageModule", function () {
        return SetReminderPageModule;
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


      var _set_reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./set-reminder-routing.module */
      "./src/app/pages/set-reminder/set-reminder-routing.module.ts");
      /* harmony import */


      var _set_reminder_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./set-reminder.page */
      "./src/app/pages/set-reminder/set-reminder.page.ts");

      var SetReminderPageModule = function SetReminderPageModule() {
        _classCallCheck(this, SetReminderPageModule);
      };

      SetReminderPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _set_reminder_routing_module__WEBPACK_IMPORTED_MODULE_5__["SetReminderPageRoutingModule"]],
        declarations: [_set_reminder_page__WEBPACK_IMPORTED_MODULE_6__["SetReminderPage"]]
      })], SetReminderPageModule);
      /***/
    },

    /***/
    "./src/app/pages/set-reminder/set-reminder.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/set-reminder/set-reminder.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesSetReminderSetReminderPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div .green_name {\n  font-family: \"semi-bold\";\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n.main_content_div ion-input, .main_content_div ion-select {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  margin-bottom: 16px;\n  height: 50px;\n}\n.main_content_div ion-input ion-icon, .main_content_div ion-select ion-icon {\n  margin: 0px;\n}\n.main_content_div .date_div {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  margin-bottom: 16px;\n  height: 50px;\n  display: flex;\n  justify-content: space-between;\n  padding-left: 16px;\n  padding-right: 16px;\n  align-items: center;\n}\n.main_content_div .date_div ion-datetime {\n  padding: 0px;\n}\n.main_content_div .date_div ion-icon {\n  font-size: 20px;\n  color: var(--ion-color-primary);\n}\n.main_content_div .time_slots {\n  display: flex;\n  flex-wrap: wrap;\n}\n.main_content_div .time_slots ion-datetime {\n  border: 1px solid lightgrey;\n  border-radius: 25px;\n  height: 50px;\n  margin-bottom: 16px;\n  margin-right: 10px;\n  padding-left: 16px;\n  padding-right: 16px;\n}\n.main_content_div .time_slots .add_btn {\n  height: 50px;\n  width: 50px;\n  border-radius: 100%;\n  background: linear-gradient(to right, #28AD9C, #18655D);\n  position: relative;\n  margin-right: 16px;\n  margin-bottom: 16px;\n}\n.main_content_div .time_slots .add_btn ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: white;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0LXJlbWluZGVyL3NldC1yZW1pbmRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSxhQUFBO0FBUko7QUFVSTtFQUNJLHdCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFSUjtBQVVJO0VBQ0ksMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFSUjtBQVVRO0VBQ0ksV0FBQTtBQVJaO0FBWUk7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZUTtFQUNJLFlBQUE7QUFWWjtBQWFRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBWFo7QUFlSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FBYlI7QUFlUTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFiWjtBQWdCUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQWRaO0FBZ0JZO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFkaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZXQtcmVtaW5kZXIvc2V0LXJlbWluZGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10b29sYmFyIHtcbi8vICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuIFxuLy8gICAgIGlvbi10aXRsZSB7XG4vLyAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJyAhaW1wb3J0YW50O1xuLy8gICAgICAgICBmb250LXNpemU6IDE0cHg7XG4vLyAgICAgfVxuLy8gfVxuLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuZ3JlZW5fbmFtZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIGlvbi1pbnB1dCwgaW9uLXNlbGVjdHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgIGhlaWdodDogNTBweDtcblxuICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRlX2RpdiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBpb24tZGF0ZXRpbWUge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50aW1lX3Nsb3RzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgIGlvbi1kYXRldGltZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkX2J0biB7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyOEFEOUMsICMxODY1NUQpO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICBcbiAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/set-reminder/set-reminder.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/set-reminder/set-reminder.page.ts ***!
      \*********************************************************/

    /*! exports provided: SetReminderPage */

    /***/
    function srcAppPagesSetReminderSetReminderPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SetReminderPage", function () {
        return SetReminderPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var SetReminderPage = /*#__PURE__*/function () {
        function SetReminderPage() {
          _classCallCheck(this, SetReminderPage);

          this.timeSlots = [];
        }

        _createClass(SetReminderPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addSlot",
          value: function addSlot() {
            this.timeSlots.length = this.timeSlots.length + 1;
          }
        }]);

        return SetReminderPage;
      }();

      SetReminderPage.ctorParameters = function () {
        return [];
      };

      SetReminderPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-set-reminder',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./set-reminder.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/set-reminder/set-reminder.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./set-reminder.page.scss */
        "./src/app/pages/set-reminder/set-reminder.page.scss"))["default"]]
      })], SetReminderPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-set-reminder-set-reminder-module-es5.js.map