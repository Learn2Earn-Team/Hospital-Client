(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-doc-list-doc-list-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doc-list/doc-list.page.html":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doc-list/doc-list.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDocListDocListPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n  <ion-toolbar>\n      <ion-button (click)=\"goBack()\" fill=\"clear\" size=\"small\" slot=\"start\">\n        <ion-icon name=\"chevron-back\" style=\"font-size: 24px;\"></ion-icon>\n      </ion-button>\n      <ion-title style=\"padding: 0px;\">Documents List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n      <div class=\"item_div\" *ngFor=\"let item of [1,2,3,4,5]; let i = index\">\n          <div class=\"flex_div\">\n              <div class=\"light_div\">\n                  <ion-icon name=\"document-text\"></ion-icon>\n              </div>\n              <div class=\"tab_detail\">\n                  <ion-label class=\"bold_lbl\">Document {{i+1}}</ion-label>\n                  <ion-label class=\"grey_lbl\">2nd June 2020</ion-label>\n              </div>\n              <ion-label class=\"remove_lbl\">Remove</ion-label>\n          </div>\n      </div>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/doc-list/doc-list-routing.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/doc-list/doc-list-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: DocListPageRoutingModule */

    /***/
    function srcAppPagesDocListDocListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocListPageRoutingModule", function () {
        return DocListPageRoutingModule;
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


      var _doc_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./doc-list.page */
      "./src/app/pages/doc-list/doc-list.page.ts");

      var routes = [{
        path: '',
        component: _doc_list_page__WEBPACK_IMPORTED_MODULE_3__["DocListPage"]
      }];

      var DocListPageRoutingModule = function DocListPageRoutingModule() {
        _classCallCheck(this, DocListPageRoutingModule);
      };

      DocListPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DocListPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/doc-list/doc-list.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/doc-list/doc-list.module.ts ***!
      \***************************************************/

    /*! exports provided: DocListPageModule */

    /***/
    function srcAppPagesDocListDocListModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocListPageModule", function () {
        return DocListPageModule;
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


      var _doc_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./doc-list-routing.module */
      "./src/app/pages/doc-list/doc-list-routing.module.ts");
      /* harmony import */


      var _doc_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./doc-list.page */
      "./src/app/pages/doc-list/doc-list.page.ts");

      var DocListPageModule = function DocListPageModule() {
        _classCallCheck(this, DocListPageModule);
      };

      DocListPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _doc_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocListPageRoutingModule"]],
        declarations: [_doc_list_page__WEBPACK_IMPORTED_MODULE_6__["DocListPage"]]
      })], DocListPageModule);
      /***/
    },

    /***/
    "./src/app/pages/doc-list/doc-list.page.scss":
    /*!***************************************************!*\
      !*** ./src/app/pages/doc-list/doc-list.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDocListDocListPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div {\n  padding: 16px;\n}\n.main_content_div .item_div {\n  border-bottom: 1px solid lightgrey;\n  padding-top: 16px;\n  padding-bottom: 16px;\n}\n.main_content_div .item_div .flex_div {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.main_content_div .item_div .flex_div .light_div {\n  height: 40px;\n  width: 40px;\n  border-radius: 3px;\n  background: var(--ion-color-app-light);\n  position: relative;\n}\n.main_content_div .item_div .flex_div .light_div ion-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  color: var(--ion-color-primary);\n}\n.main_content_div .item_div .flex_div .tab_detail {\n  padding-left: 16px;\n}\n.main_content_div .item_div .flex_div .tab_detail .bold_lbl {\n  font-family: \"medium\";\n  margin-bottom: 3px;\n}\n.main_content_div .item_div .flex_div .tab_detail .grey_lbl {\n  font-size: 12px;\n  color: grey;\n}\n.main_content_div .item_div .flex_div .remove_lbl {\n  font-family: \"semi-bold\";\n  position: absolute;\n  right: 0;\n  font-size: 14px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jLWxpc3QvZG9jLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKO0FBQ0k7RUFDSSxrQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUFDaEI7QUFDZ0I7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQUNwQjtBQUVZO0VBQ0ksa0JBQUE7QUFBaEI7QUFFZ0I7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBQXBCO0FBRWdCO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUFBcEI7QUFHWTtFQUNJLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBRGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jLWxpc3QvZG9jLWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5fY29udGVudF9kaXYge1xuICAgIHBhZGRpbmc6IDE2cHg7XG5cbiAgICAuaXRlbV9kaXYge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG5cbiAgICAgICAgLmZsZXhfZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAubGlnaHRfZGl2IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1hcHAtbGlnaHQpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50YWJfZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG5cbiAgICAgICAgICAgICAgICAuYm9sZF9sYmwge1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ21lZGl1bSc7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmdyZXlfbGJsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogZ3JleTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucmVtb3ZlX2xibCB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdzZW1pLWJvbGQnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/doc-list/doc-list.page.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/doc-list/doc-list.page.ts ***!
      \*************************************************/

    /*! exports provided: DocListPage */

    /***/
    function srcAppPagesDocListDocListPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocListPage", function () {
        return DocListPage;
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

      var DocListPage = /*#__PURE__*/function () {
        function DocListPage(navCtrl) {
          _classCallCheck(this, DocListPage);

          this.navCtrl = navCtrl;
        }

        _createClass(DocListPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.back();
          }
        }]);

        return DocListPage;
      }();

      DocListPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"]
        }];
      };

      DocListPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-doc-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./doc-list.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/doc-list/doc-list.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./doc-list.page.scss */
        "./src/app/pages/doc-list/doc-list.page.scss"))["default"]]
      })], DocListPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-doc-list-doc-list-module-es5.js.map