(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-location-map-location-map-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location-map/location-map.page.html":
    /*!*************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location-map/location-map.page.html ***!
      \*************************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesLocationMapLocationMapPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"abs_div\">\n            <div class=\"input_div\">\n              <ion-input type=\"text\" placeholder=\"Type your location\"></ion-input>\n              <ion-icon name=\"locate-outline\"></ion-icon>\n            </div>\n\n            <ion-button expand=\"block\" shape=\"round\" class=\"gredient_btn\" (click)=\"goToTabs()\">\n                Continue\n            </ion-button>\n        </div>\n        \n        <div #map id=\"map\" class=\"map\"></div>\n\n    </div>\n</ion-content>\n";
      /***/
    },

    /***/
    "./src/app/pages/location-map/location-map-routing.module.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/location-map/location-map-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: LocationMapPageRoutingModule */

    /***/
    function srcAppPagesLocationMapLocationMapRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationMapPageRoutingModule", function () {
        return LocationMapPageRoutingModule;
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


      var _location_map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./location-map.page */
      "./src/app/pages/location-map/location-map.page.ts");

      var routes = [{
        path: '',
        component: _location_map_page__WEBPACK_IMPORTED_MODULE_3__["LocationMapPage"]
      }];

      var LocationMapPageRoutingModule = function LocationMapPageRoutingModule() {
        _classCallCheck(this, LocationMapPageRoutingModule);
      };

      LocationMapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LocationMapPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/location-map/location-map.module.ts":
    /*!***********************************************************!*\
      !*** ./src/app/pages/location-map/location-map.module.ts ***!
      \***********************************************************/

    /*! exports provided: LocationMapPageModule */

    /***/
    function srcAppPagesLocationMapLocationMapModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationMapPageModule", function () {
        return LocationMapPageModule;
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


      var _location_map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./location-map-routing.module */
      "./src/app/pages/location-map/location-map-routing.module.ts");
      /* harmony import */


      var _location_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./location-map.page */
      "./src/app/pages/location-map/location-map.page.ts");

      var LocationMapPageModule = function LocationMapPageModule() {
        _classCallCheck(this, LocationMapPageModule);
      };

      LocationMapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _location_map_routing_module__WEBPACK_IMPORTED_MODULE_5__["LocationMapPageRoutingModule"]],
        declarations: [_location_map_page__WEBPACK_IMPORTED_MODULE_6__["LocationMapPage"]]
      })], LocationMapPageModule);
      /***/
    },

    /***/
    "./src/app/pages/location-map/location-map.page.scss":
    /*!***********************************************************!*\
      !*** ./src/app/pages/location-map/location-map.page.scss ***!
      \***********************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesLocationMapLocationMapPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: #F9F9FC;\n}\n\n.main_content_div {\n  height: 100%;\n  width: 100%;\n}\n\n.main_content_div #map {\n  width: 100%;\n  height: 100%;\n}\n\n.main_content_div .abs_div {\n  padding: 40px 16px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 999;\n}\n\n.main_content_div .input_div {\n  background: white;\n  border-radius: 5px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-radius: 25px;\n  border: 1px solid lightgrey;\n  height: 50px;\n}\n\n.main_content_div .input_div ion-input {\n  border-radius: 5px;\n  height: 50px;\n  --padding-start: 16px;\n  --padding-end: 16px;\n  font-family: \"regular\";\n}\n\n.main_content_div .input_div ion-icon {\n  color: var(--ion-color-primary);\n  margin-right: 16px;\n  font-size: 18px;\n}\n\n.main_content_div .gredient_btn {\n  width: 100%;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9jYXRpb24tbWFwL2xvY2F0aW9uLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBRUk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUFSOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7QUFEUjs7QUFHUTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURaOztBQUlRO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGWjs7QUFNSTtFQUNJLFdBQUE7RUFDQSxTQUFBO0FBSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2NhdGlvbi1tYXAvbG9jYXRpb24tbWFwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICNGOUY5RkM7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAjbWFwe1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cblxuICAgIC5hYnNfZGl2IHtcbiAgICAgICAgcGFkZGluZzogNDBweCAxNnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgfVxuXG4gICAgLmlucHV0X2RpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgXG4gICAgICAgIGlvbi1pbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZ3JlZGllbnRfYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG59Il19 */";
      /***/
    },

    /***/
    "./src/app/pages/location-map/location-map.page.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/location-map/location-map.page.ts ***!
      \*********************************************************/

    /*! exports provided: LocationMapPage */

    /***/
    function srcAppPagesLocationMapLocationMapPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocationMapPage", function () {
        return LocationMapPage;
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

      var LocationMapPage = /*#__PURE__*/function () {
        function LocationMapPage(route) {
          _classCallCheck(this, LocationMapPage);

          this.route = route;
        }

        _createClass(LocationMapPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.loadMap();
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
            var latLng = new google.maps.LatLng(-34.9290, 138.6010);
            var mapOptions = {
              center: latLng,
              zoom: 15,
              disableDefaultUI: true,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
          }
        }, {
          key: "goToTabs",
          value: function goToTabs() {
            this.route.navigate(['/tabs']);
          }
        }]);

        return LocationMapPage;
      }();

      LocationMapPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      };

      LocationMapPage.propDecorators = {
        mapElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }]
      };
      LocationMapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-location-map',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./location-map.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/location-map/location-map.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./location-map.page.scss */
        "./src/app/pages/location-map/location-map.page.scss"))["default"]]
      })], LocationMapPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-location-map-location-map-module-es5.js.map