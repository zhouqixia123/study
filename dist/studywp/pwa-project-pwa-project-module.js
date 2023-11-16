(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pwa-project-pwa-project-module"],{

/***/ "+JzV":
/*!***************************************************!*\
  !*** ./src/app/pwa-project/pwa-project.module.ts ***!
  \***************************************************/
/*! exports provided: PwaProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaProjectModule", function() { return PwaProjectModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pwa_project_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pwa-project-routing.module */ "3vtn");
/* harmony import */ var _pwa_pwa_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pwa/pwa.component */ "N3oG");





class PwaProjectModule {
}
PwaProjectModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PwaProjectModule });
PwaProjectModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PwaProjectModule_Factory(t) { return new (t || PwaProjectModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pwa_project_routing_module__WEBPACK_IMPORTED_MODULE_2__["PwaProjectRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PwaProjectModule, { declarations: [_pwa_pwa_component__WEBPACK_IMPORTED_MODULE_3__["PwaComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pwa_project_routing_module__WEBPACK_IMPORTED_MODULE_2__["PwaProjectRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwaProjectModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_pwa_pwa_component__WEBPACK_IMPORTED_MODULE_3__["PwaComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pwa_project_routing_module__WEBPACK_IMPORTED_MODULE_2__["PwaProjectRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "3vtn":
/*!***********************************************************!*\
  !*** ./src/app/pwa-project/pwa-project-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PwaProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaProjectRoutingModule", function() { return PwaProjectRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pwa_pwa_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pwa/pwa.component */ "N3oG");





const routes = [
    {
        path: '',
        component: _pwa_pwa_component__WEBPACK_IMPORTED_MODULE_2__["PwaComponent"],
    },
];
class PwaProjectRoutingModule {
}
PwaProjectRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PwaProjectRoutingModule });
PwaProjectRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PwaProjectRoutingModule_Factory(t) { return new (t || PwaProjectRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PwaProjectRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwaProjectRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "N3oG":
/*!**************************************************!*\
  !*** ./src/app/pwa-project/pwa/pwa.component.ts ***!
  \**************************************************/
/*! exports provided: PwaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PwaComponent", function() { return PwaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PwaComponent {
    constructor() { }
    ngOnInit() {
    }
}
PwaComponent.ɵfac = function PwaComponent_Factory(t) { return new (t || PwaComponent)(); };
PwaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PwaComponent, selectors: [["app-pwa"]], decls: 2, vars: 0, template: function PwaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pwa works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B3YS1wcm9qZWN0L3B3YS9wd2EuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PwaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pwa',
                templateUrl: './pwa.component.html',
                styleUrls: ['./pwa.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pwa-project-pwa-project-module.js.map