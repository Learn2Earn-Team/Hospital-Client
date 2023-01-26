(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-chat-detail-chat-detail-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-detail/chat-detail.page.html":
    /*!***********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-detail/chat-detail.page.html ***!
      \***********************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesChatDetailChatDetailPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n            <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n        </ion-button>\n        <ion-title>Dr. Jonh Doe</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <span *ngFor=\"let item of messages\">\n            <div class=\"left_div\" *ngIf=\"item.side == 'left'\">\n                <div class=\"inner_div\">\n                    <div class=\"round_user\">\n                        <ion-icon name=\"person\"></ion-icon>\n                    </div>\n                    <div class=\"msg_div\">\n                        <ion-label>{{item.msg}}</ion-label>\n                    </div>\n                </div>\n            </div>\n            <div class=\"right_div\" *ngIf=\"item.side == 'right'\">\n                <div class=\"inner_div\">\n                    <div class=\"msg_div\">\n                        <ion-label>{{item.msg}}</ion-label>\n                    </div>\n                    <div class=\"right_user_flex\">\n                        <div class=\"round_user\">\n                            <ion-icon name=\"person\"></ion-icon>\n                        </div>\n                        <ion-icon name=\"checkmark-circle\" class=\"check_icn\"></ion-icon>\n                    </div>\n                </div>\n            </div>\n        </span>\n    </div>\n</ion-content>\n\n<ion-footer style=\"background: white;\">\n    <div class=\"footer_div\">\n        <ion-input type=\"text\" placeholder=\"Type Something...\"></ion-input>\n        <div class=\"send_div\">\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </div>\n    </div>\n</ion-footer>";
      /***/
    },

    /***/
    "./src/app/pages/chat-detail/chat-detail-routing.module.ts":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/chat-detail/chat-detail-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: ChatDetailPageRoutingModule */

    /***/
    function srcAppPagesChatDetailChatDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatDetailPageRoutingModule", function () {
        return ChatDetailPageRoutingModule;
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


      var _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./chat-detail.page */
      "./src/app/pages/chat-detail/chat-detail.page.ts");

      var routes = [{
        path: '',
        component: _chat_detail_page__WEBPACK_IMPORTED_MODULE_3__["ChatDetailPage"]
      }];

      var ChatDetailPageRoutingModule = function ChatDetailPageRoutingModule() {
        _classCallCheck(this, ChatDetailPageRoutingModule);
      };

      ChatDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ChatDetailPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/chat-detail/chat-detail.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/chat-detail/chat-detail.module.ts ***!
      \*********************************************************/

    /*! exports provided: ChatDetailPageModule */

    /***/
    function srcAppPagesChatDetailChatDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatDetailPageModule", function () {
        return ChatDetailPageModule;
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


      var _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./chat-detail-routing.module */
      "./src/app/pages/chat-detail/chat-detail-routing.module.ts");
      /* harmony import */


      var _chat_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./chat-detail.page */
      "./src/app/pages/chat-detail/chat-detail.page.ts");

      var ChatDetailPageModule = function ChatDetailPageModule() {
        _classCallCheck(this, ChatDetailPageModule);
      };

      ChatDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _chat_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChatDetailPageRoutingModule"]],
        declarations: [_chat_detail_page__WEBPACK_IMPORTED_MODULE_6__["ChatDetailPage"]]
      })], ChatDetailPageModule);
      /***/
    },

    /***/
    "./src/app/pages/chat-detail/chat-detail.page.scss":
    /*!*********************************************************!*\
      !*** ./src/app/pages/chat-detail/chat-detail.page.scss ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesChatDetailChatDetailPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-toolbar {\n  --background: var(--ion-color-app-light);\n}\nion-toolbar ion-title {\n  color: var(--ion-color-primary);\n  font-family: \"semi-bold\" !important;\n  font-size: 14px;\n}\n.main_content_div {\n  padding: 16px;\n}\n.main_content_div .left_div {\n  width: 100%;\n  margin-bottom: 15px;\n}\n.main_content_div .left_div .inner_div {\n  width: 70%;\n  display: flex;\n}\n.main_content_div .left_div .round_user {\n  height: 26px;\n  width: 26px;\n  min-width: 26px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  position: relative;\n  margin-right: 10px;\n}\n.main_content_div .left_div .round_user ion-icon {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 13px;\n}\n.main_content_div .left_div .msg_div {\n  background: var(--ion-color-app-light);\n  padding: 15px;\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.main_content_div .left_div .msg_div ion-label {\n  color: var(--ion-color-primary);\n}\n.main_content_div .right_div {\n  display: flex;\n  width: 100%;\n  margin-bottom: 15px;\n  justify-content: flex-end;\n}\n.main_content_div .right_div .inner_div {\n  width: 70%;\n  display: flex;\n  justify-content: flex-end;\n}\n.main_content_div .right_div .round_user {\n  height: 26px;\n  width: 26px;\n  min-width: 26px;\n  border-radius: 50%;\n  background: var(--ion-color-primary);\n  position: relative;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n.main_content_div .right_div .round_user ion-icon {\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 13px;\n}\n.main_content_div .right_div .msg_div {\n  background: var(--ion-color-primary);\n  padding: 15px;\n  border-radius: 5px;\n  color: white;\n}\n.main_content_div .right_div .msg_div ion-label {\n  color: white;\n}\n.main_content_div .right_div .right_user_flex {\n  margin-left: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.main_content_div .right_div .right_user_flex .check_icn {\n  color: #4bb14f;\n  font-size: 25px;\n}\n.footer_div {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 10px 16px;\n}\n.footer_div ion-input {\n  border-radius: 5px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-family: \"regular\";\n  border-radius: 25px;\n  border: 1px solid lightgray;\n}\n.footer_div .send_div {\n  height: 50px;\n  width: 50px;\n  border-radius: 50%;\n  background: var(--ion-color-app-light);\n  position: relative;\n  margin-left: 16px;\n}\n.footer_div .send_div ion-icon {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hhdC1kZXRhaWwvY2hhdC1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUFDSjtBQUNJO0VBQ0ksK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFDUjtBQUdBO0VBQ0ksYUFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUVRO0VBQ0ksVUFBQTtFQUNBLGFBQUE7QUFBWjtBQUdRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFEWjtBQUVZO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFBaEI7QUFJUTtFQUNJLHNDQUFBO0VBRUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0FBSFo7QUFLWTtFQUNJLCtCQUFBO0FBSGhCO0FBT0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFMUjtBQU9RO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQUxaO0FBUVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTlo7QUFPWTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0FBTGhCO0FBU1E7RUFDSSxvQ0FBQTtFQUVBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFSWjtBQVVZO0VBQ0ksWUFBQTtBQVJoQjtBQVdRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQVRaO0FBV1k7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVRoQjtBQWNBO0VBR0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQWJKO0FBZUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBYlI7QUFnQkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBZFI7QUFnQlE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUFkWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoYXQtZGV0YWlsL2NoYXQtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuIFxuICAgIGlvbi10aXRsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJyAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxufVxuXG4ubWFpbl9jb250ZW50X2RpdiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5sZWZ0X2RpdntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLmlubmVyX2RpdntcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdW5kX3VzZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubXNnX2RpdntcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpOztcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmlnaHRfZGl2e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAuaW5uZXJfZGl2e1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJvdW5kX3VzZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1zZ19kaXZ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAvLyBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAucmlnaHRfdXNlcl9mbGV4IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgIC5jaGVja19pY24ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNGJiMTRmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi5mb290ZXJfZGl2IHtcbiAgICAvLyBiYWNrZ3JvdW5kOiAjRUFFOEZFO1xuICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTBweCAxNnB4O1xuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAgICAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIH1cblxuICAgIC5zZW5kX2RpdiB7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWFwcC1saWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufSJdfQ== */";
      /***/
    },

    /***/
    "./src/app/pages/chat-detail/chat-detail.page.ts":
    /*!*******************************************************!*\
      !*** ./src/app/pages/chat-detail/chat-detail.page.ts ***!
      \*******************************************************/

    /*! exports provided: ChatDetailPage */

    /***/
    function srcAppPagesChatDetailChatDetailPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ChatDetailPage", function () {
        return ChatDetailPage;
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

      var ChatDetailPage = /*#__PURE__*/function () {
        function ChatDetailPage(navCtrl) {
          _classCallCheck(this, ChatDetailPage);

          this.navCtrl = navCtrl;
          this.messages = [{
            side: 'left',
            msg: 'Hello'
          }, {
            side: 'right',
            msg: 'Hii'
          }, {
            side: 'left',
            msg: 'Are you nearby ?'
          }, {
            side: 'right',
            msg: 'I will be there in few mins'
          }, {
            side: 'left',
            msg: 'Ok, I am waiting at vinmark Store'
          }, {
            side: 'right',
            msg: 'Sorry I am stuck in traffic. Please give me a moment.'
          }, {
            side: 'left',
            msg: 'Hello'
          }, {
            side: 'right',
            msg: 'Hii'
          }, {
            side: 'left',
            msg: 'Are you nearby ?'
          }, {
            side: 'right',
            msg: 'I will be there in few mins'
          }, {
            side: 'left',
            msg: 'Ok, I am waiting at vinmark Store'
          }, {
            side: 'right',
            msg: 'Sorry I am stuck in traffic. Please give me a moment.'
          }];
        }

        _createClass(ChatDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return ChatDetailPage;
      }();

      ChatDetailPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      ChatDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-chat-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./chat-detail.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/chat-detail/chat-detail.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./chat-detail.page.scss */
        "./src/app/pages/chat-detail/chat-detail.page.scss"))["default"]]
      })], ChatDetailPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-chat-detail-chat-detail-module-es5.js.map