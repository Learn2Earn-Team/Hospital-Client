(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["documents-documents-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDocumentsDocumentsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\" mode=\"md\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-button slot=\"end\" size=\"small\" fill=\"clear\">\n            <ion-icon name=\"locate\"></ion-icon>\n            Bhavnagar\n        </ion-button>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"main_content_div\">\n        <img src=\"assets/imgs/document.jpg\">\n        <ion-label class=\"bold_lbl\">Medical Documents</ion-label>\n        <ion-label class=\"small_lbl\">Keep all your medical documents in one place and stop worrying about losing them.</ion-label>\n        <div class=\"abs_div\">\n            <ion-button expand=\"block\" shape=\"round\" (click)=\"goToUploadDocuments()\">\n                Upload Documents\n            </ion-button>\n        </div>\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/documents/documents-routing.module.ts":
    /*!*************************************************************!*\
      !*** ./src/app/pages/documents/documents-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: DocumentsPageRoutingModule */

    /***/
    function srcAppPagesDocumentsDocumentsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPageRoutingModule", function () {
        return DocumentsPageRoutingModule;
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


      var _documents_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./documents.page */
      "./src/app/pages/documents/documents.page.ts");

      var routes = [{
        path: '',
        component: _documents_page__WEBPACK_IMPORTED_MODULE_3__["DocumentsPage"]
      }];

      var DocumentsPageRoutingModule = function DocumentsPageRoutingModule() {
        _classCallCheck(this, DocumentsPageRoutingModule);
      };

      DocumentsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DocumentsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/documents/documents.module.ts":
    /*!*****************************************************!*\
      !*** ./src/app/pages/documents/documents.module.ts ***!
      \*****************************************************/

    /*! exports provided: DocumentsPageModule */

    /***/
    function srcAppPagesDocumentsDocumentsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPageModule", function () {
        return DocumentsPageModule;
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


      var _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./documents-routing.module */
      "./src/app/pages/documents/documents-routing.module.ts");
      /* harmony import */


      var _documents_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./documents.page */
      "./src/app/pages/documents/documents.page.ts");

      var DocumentsPageModule = function DocumentsPageModule() {
        _classCallCheck(this, DocumentsPageModule);
      };

      DocumentsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _documents_routing_module__WEBPACK_IMPORTED_MODULE_5__["DocumentsPageRoutingModule"]],
        declarations: [_documents_page__WEBPACK_IMPORTED_MODULE_6__["DocumentsPage"]]
      })], DocumentsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/documents/documents.page.scss":
    /*!*****************************************************!*\
      !*** ./src/app/pages/documents/documents.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDocumentsDocumentsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main_content_div ion-label {\n  display: block;\n}\n.main_content_div img {\n  width: 230px;\n  display: block;\n  margin: auto;\n  margin-bottom: 50px;\n}\n.main_content_div .bold_lbl {\n  font-family: \"bold\";\n  text-align: center;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  padding: 0px 20px;\n}\n.main_content_div .small_lbl {\n  font-size: 14px;\n  text-align: center;\n  padding: 0px 20px;\n}\n.main_content_div .abs_div {\n  width: 100%;\n  position: absolute;\n  padding: 16px;\n  bottom: 20px;\n}\n.main_content_div .abs_div ion-button {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUk7RUFDSSxjQUFBO0FBZFI7QUFpQkk7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQWZSO0FBa0JJO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQWhCUjtBQWtCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBaEJSO0FBa0JJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFoQlI7QUFrQlE7RUFDSSxXQUFBO0FBaEJaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZG9jdW1lbnRzL2RvY3VtZW50cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdG9vbGJhciB7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYXBwLWxpZ2h0KTtcbi8vICAgICBpb24tYnV0dG9ue1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGZvbnQtZmFtaWx5OiAnc2VtaS1ib2xkJztcblxuLy8gICAgICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICAvLyBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICAgIH1cblxuICAgIC5ib2xkX2xibCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnYm9sZCc7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICB9XG4gICAgLnNtYWxsX2xibCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICB9XG4gICAgLmFic19kaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3R0b206IDIwcHg7XG5cbiAgICAgICAgaW9uLWJ1dHRvbiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "./src/app/pages/documents/documents.page.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/documents/documents.page.ts ***!
      \***************************************************/

    /*! exports provided: DocumentsPage */

    /***/
    function srcAppPagesDocumentsDocumentsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocumentsPage", function () {
        return DocumentsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _upload_document_upload_document_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../upload-document/upload-document.page */
      "./src/app/pages/upload-document/upload-document.page.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

      var DocumentsPage = /*#__PURE__*/function () {
        function DocumentsPage(router, modalCtrl, navCtrl) {
          _classCallCheck(this, DocumentsPage);

          this.router = router;
          this.modalCtrl = modalCtrl;
          this.navCtrl = navCtrl;
        }

        _createClass(DocumentsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "goToUploadDocuments",
          value: function goToUploadDocuments() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _upload_document_upload_document_page__WEBPACK_IMPORTED_MODULE_1__["UploadDocumentPage"],
                        cssClass: 'custom-modal'
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      return _context.abrupt("return", _context.sent);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DocumentsPage;
      }();

      DocumentsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      DocumentsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-documents',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./documents.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/documents/documents.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./documents.page.scss */
        "./src/app/pages/documents/documents.page.scss"))["default"]]
      })], DocumentsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=documents-documents-module-es5.js.map