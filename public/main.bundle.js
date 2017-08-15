webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/home/home-routing.module": [
		"../../../../../src/app/components/home/home-routing.module.ts"
	],
	"./components/products/products.module": [
		"../../../../../src/app/components/products/products.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_products_management_products_management_component__ = __webpack_require__("../../../../../src/app/components/products-management/products-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_users_management_register_register_component__ = __webpack_require__("../../../../../src/app/components/users-management/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_users_management_login_login_component__ = __webpack_require__("../../../../../src/app/components/users-management/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_users_management_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_users_management_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_shared_page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: 'home',
        loadChildren: './components/home/home-routing.module#HomeRoutingModule'
    },
    { path: 'products',
        loadChildren: './components/products/products.module#ProductsModule'
    },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_3__components_users_management_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_users_management_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__components_users_management_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'product-management', component: __WEBPACK_IMPORTED_MODULE_2__components_products_management_products_management_component__["a" /* ProductsManagementComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_6__components_users_management_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_8__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__components_shared_page404_page404_component__["a" /* Page404Component */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <flash-messages></flash-messages>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return config; });
var config = {
    serverUrl: '/',
};
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_products_products_module__ = __webpack_require__("../../../../../src/app/components/products/products.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_module__ = __webpack_require__("../../../../../src/app/components/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_users_management_users_management_module__ = __webpack_require__("../../../../../src/app/components/users-management/users-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_products_management_products_management_module__ = __webpack_require__("../../../../../src/app/components/products-management/products-management.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_url_serializer_service__ = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_navbar_navbar_component__["a" /* NavbarComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            // FormsModule,
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_8__components_products_products_module__["ProductsModule"],
            __WEBPACK_IMPORTED_MODULE_12__components_products_management_products_management_module__["a" /* ProductsManagementModule */],
            __WEBPACK_IMPORTED_MODULE_9__components_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_users_management_users_management_module__["a" /* UsersManagementModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_flash_messages__["FlashMessagesModule"],
        ],
        exports: [
            // HomeModule,
            __WEBPACK_IMPORTED_MODULE_10__components_shared_shared_module__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_url_serializer_service__["a" /* MyUrlSerializer */],
            __WEBPACK_IMPORTED_MODULE_14__services_product_resolver_service__["a" /* ResolverService */],
            __WEBPACK_IMPORTED_MODULE_15__services_product_service__["a" /* ProductService */]
            // ValidateService,
            // AuthService,
            // AuthGuard,
            // ProductService
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__ = __webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var homeRoutes = [
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__["a" /* HomeSectionComponent */],
                resolve: { products: __WEBPACK_IMPORTED_MODULE_5__services_product_resolver_service__["a" /* ResolverService */] }
            },
            {
                path: '',
                outlet: 'sidemenu',
                component: __WEBPACK_IMPORTED_MODULE_3__side_menu_side_menu_component__["a" /* SideMenuComponent */]
            },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__["a" /* HomeSectionComponent */]
            },
            {
                path: '**',
                outlet: 'sidemenu',
                component: __WEBPACK_IMPORTED_MODULE_3__side_menu_side_menu_component__["a" /* SideMenuComponent */]
            }
        ]
    }
];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(homeRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home-section/home-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home-section/home-section.component.html":
/***/ (function(module, exports) {

module.exports = "\n<p>\n  home-section works!\n</p>\n\n<div class=\"row\">\n  <div *ngFor=\"let product of products\" class=\"col-md-4 col-6\">\n    <app-item [product]=\"product\"></app-item>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home-section/home-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeSectionComponent = (function () {
    function HomeSectionComponent(productService, flashMessage, route) {
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.route = route;
    }
    HomeSectionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.products = data.products;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
        // this.productService.getProducts()
        //   .subscribe(
        //     (products) => {
        //       this.products = products;
        //     },
        //     (error) => {
        //       this.flashMessage.show(
        //         error,
        //         {
        //           cssClass: 'alert-danger',
        //           timeout: 3000
        //         });
        //       return false;
        //     })
    };
    return HomeSectionComponent;
}());
HomeSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home-section',
        template: __webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object])
], HomeSectionComponent);

var _a, _b, _c;
//# sourceMappingURL=home-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.red {*/\r\n    /*background-color: red;*/\r\n    /*height: 100px;*/\r\n/*}*/\r\n\r\n/*.blue {*/\r\n    /*background-color: blue;*/\r\n    /*height: 100px;*/\r\n/*}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-9\">\r\n    <h1>Main</h1>\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  <div class=\"col-sm-3\">\r\n    <h2>Side menu</h2>\r\n    <router-outlet name=\"sidemenu\"></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    // products: Object;
    //
    // constructor(
    //   private productService: ProductService,
    //   private flashMessage: FlashMessagesService
    // ) { }
    //
    HomeComponent.prototype.ngOnInit = function () {
        //   this.productService.getProducts()
        //     .subscribe(
        //       (products) => {
        //         this.products = products;
        //       },
        //       (error) => {
        //         this.flashMessage.show(
        //           error,
        //           {
        //             cssClass: 'alert-danger',
        //             timeout: 3000
        //           });
        //         return false;
        //       })
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__ = __webpack_require__("../../../../../src/app/components/home/home-section/home-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__side_menu_side_menu_component__ = __webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_routing_module__ = __webpack_require__("../../../../../src/app/components/home/home-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__home_section_home_section_component__["a" /* HomeSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_4__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5__side_menu_side_menu_component__["a" /* SideMenuComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__home_routing_module__["HomeRoutingModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__shared_shared_module__["a" /* SharedModule */]
        ],
        exports: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/side-menu/side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/side-menu/side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  side-menu works!\r\n</p>\r\n<div class=\"jumbotron\">\r\n  <h3>Hello, world!</h3>\r\n  <p>...</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/home/side-menu/side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SideMenuComponent = (function () {
    function SideMenuComponent(router, route) {
        this.router = router;
        this.route = route;
        route.params.subscribe(function (params) { return console.log("side menu id parameter", params['id']); });
    }
    SideMenuComponent.prototype.navigate = function (path) {
        console.log('path', path);
        console.log('this route ', this.route);
        this.router.navigate([{ outlets: { primary: path, sidemenu: path } }], { relativeTo: this.route });
    };
    SideMenuComponent.prototype.ngOnInit = function () {
    };
    return SideMenuComponent;
}());
SideMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-menu',
        template: __webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/side-menu/side-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], SideMenuComponent);

var _a, _b;
//# sourceMappingURL=side-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Brand</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\r\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a></li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/products', {outlets: {primary: 'start/toys/main',\r\n           productsSubmenu: 'category/toys/main'}}]\">Toys</a></li>\r\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/products', {outlets: {primary: 'start/flowers/main',\r\n           productsSubmenu: 'category/flowers/main'}}]\">Flowers</a></li>\r\n\r\n    </ul>\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/product-management']\">Product Management</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/profile']\">Profile</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a></li>\r\n      <li class=\"nav-item\" *ngIf=\"authService.loggedIn()\">\r\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>\r\n\r\n      <!--<li class=\"nav-item active\">-->\r\n        <!--<a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link\" href=\"#\">Link</a>-->\r\n      <!--</li>-->\r\n      <!--<li class=\"nav-item\">-->\r\n        <!--<a class=\"nav-link disabled\" href=\"#\">Disabled</a>-->\r\n      <!--</li>-->\r\n    </ul>\r\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\r\n      <!--<input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">-->\r\n      <!--<button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->\r\n    <!--</form>-->\r\n  </div>\r\n</nav>\r\n\r\n<!--<nav class=\"navbar navbar-default\">-->\r\n  <!--<div class=\"container\">-->\r\n    <!--<div class=\"navbar-header\">-->\r\n      <!--<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\"-->\r\n              <!--aria-expanded=\"false\" aria-controls=\"navbar\">-->\r\n        <!--<span class=\"sr-only\">Toggle navigation</span>-->\r\n        <!--<span class=\"icon-bar\"></span>-->\r\n        <!--<span class=\"icon-bar\"></span>-->\r\n        <!--<span class=\"icon-bar\"></span>-->\r\n      <!--</button>-->\r\n      <!--<a class=\"navbar-brand\" href=\"#\">Brand</a>-->\r\n    <!--</div>-->\r\n    <!--<div id=\"navbar\" class=\"collapse navbar-collapse\">-->\r\n      <!--<ul class=\"nav navbar-nav navbar-left\">-->\r\n        <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/']\">Home</a></li>-->\r\n        <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/products', {outlets: {primary: 'category/toys/main',-->\r\n           <!--productsSubmenu: 'category/toys/main'}}]\">Toys</a></li>-->\r\n        <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/products', {outlets: {primary: 'category/flowers/main',-->\r\n           <!--productsSubmenu: 'category/flowers/main'}}]\">Flowers</a></li>-->\r\n\r\n        <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/products', {outlets: {primary: 'toys', productsSubmenu: 'toys'}}]\">TToys</a></li>-->\r\n        <!--<li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/products', {outlets: {primary: 'flowers', productsSubmenu: 'flowers'}}]\">FFlowers</a></li>-->\r\n      <!--</ul>-->\r\n      <!--<ul class=\"nav navbar-nav navbar-right\">-->\r\n        <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/dashboard']\">Dashboard</a></li>-->\r\n        <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/product-management']\">Product Management</a></li>-->\r\n        <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/profile']\">Profile</a></li>-->\r\n        <!--<li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/login']\">Login</a></li>-->\r\n        <!--<li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">-->\r\n          <!--<a [routerLink]=\"['/register']\">Register</a></li>-->\r\n        <!--<li *ngIf=\"authService.loggedIn()\"><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>-->\r\n      <!--</ul>-->\r\n    <!--</div>&lt;!&ndash;/.nav-collapse &ndash;&gt;-->\r\n  <!--</div>-->\r\n<!--</nav>-->\r\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Logged out', {
            cssClass: 'alert-success',
            timeout: 3000
        });
        this.router.navigate(['/login']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/add-product/add-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/add-product/add-product.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h2 class=\"page-header\">Add product</h2>-->\n<!--<form (submit)=\"onAddProductSubmit(); addProductForm.reset()\" #addProductForm>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"category\">Category</label>-->\n    <!--<input type=\"text\" [(ngModel)]=\"category\" name=\"category\" class=\"form-control\" id=\"category\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"subCategory\">Sub Category</label>-->\n    <!--<input type=\"text\" [(ngModel)]=\"subCategory\" name=\"subCategory\" class=\"form-control\" id=\"subCategory\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"itemNumber\">Item number</label>-->\n    <!--<input type=\"text\" [(ngModel)]=\"itemNumber\" name=\"itemNumber\" class=\"form-control\" id=\"itemNumber\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"name\">Name</label>-->\n    <!--<input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"price\">Price</label>-->\n    <!--<input type=\"text\" [(ngModel)]=\"price\" name=\"price\" class=\"form-control\" id=\"price\">-->\n  <!--</div>-->\n  <!--<div class=\"form-group\">-->\n    <!--<label for=\"mainImgSrc\">Image source</label>-->\n    <!--<input type=\"text\" [(ngModel)]=\"mainImgSrc\" name=\"mainImgSrc\" class=\"form-control\" id=\"mainImgSrc\">-->\n  <!--</div>-->\n  <!--<input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">-->\n<!--</form>-->\n\n\n<h2 class=\"page-header\">Add product</h2>\n<form (ngSubmit)=\"onAddProductSubmit(addProductForm); addProductForm.reset()\" #addProductForm=\"ngForm\">\n\n  <div class=\"form-group\">\n    <label for=\"category0\">Category</label>\n    <input name=\"category0\" ngModel #category0=\"ngModel\" class=\"form-control\" id=\"category0\">\n  </div>\n    <div class=\"form-group\">\n    <label for=\"category1\">SubCategory</label>\n    <input name=\"category1\" ngModel #category1=\"ngModel\" class=\"form-control\" id=\"category1\">\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"itemNumber\">Item number</label>\n    <input type=\"text\" ngModel name=\"itemNumber\" class=\"form-control\" id=\"itemNumber\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\" ngModel name=\"name\" class=\"form-control\" id=\"name\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"price\">Price</label>\n    <input type=\"text\" ngModel name=\"price\" class=\"form-control\" id=\"price\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"mainImgSrc\">Image source</label>\n    <input type=\"text\" ngModel name=\"mainImgSrc\" class=\"form-control\" id=\"mainImgSrc\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Add\">\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/products-management/add-product/add-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddProductComponent = (function () {
    function AddProductComponent(authService, validateService, productService, flashMessage, router) {
        this.authService = authService;
        this.validateService = validateService;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.router = router;
        // itemNumber: String;
        // name: String;
        // price: Number;
        // mainImgSrc: String;
        this.updateProducts = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddProductComponent.prototype.ngOnInit = function () {
    };
    AddProductComponent.prototype.onAddProductSubmit = function (form) {
        var _this = this;
        var product = {
            catalog: {
                category0: form.value.category0,
                category1: form.value.category1
            },
            itemNumber: form.value.itemNumber,
            name: form.value.name,
            price: form.value.price,
            mainImgSrc: form.value.mainImgSrc,
        };
        console.log(product);
        this.productService.addProduct(product)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Added successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.updateProducts.emit();
                // this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('Adding failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return AddProductComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], AddProductComponent.prototype, "updateProducts", void 0);
AddProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-product',
        template: __webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _e || Object])
], AddProductComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=add-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/edit-product/edit-product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".active {\r\n    background-color: rgba(18, 52, 86, 0.5);\r\n    color: white;\r\n}\r\n\r\n.hide {\r\n  display: none;\r\n}\r\n\r\n.edit-product-table-first-cell {\r\n    width: 60px;\r\n    text-align: center;\r\n}\r\n\r\n.edit-product-table-last-cell {\r\n    width: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.edit-product-table-cells {\r\n    /*width: 90%;*/\r\n    /*height: 90%;*/\r\n    padding: 3px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/edit-product/edit-product.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Edit product</h2>\r\n<table *ngIf=\"products\"  class=\"table table-sm\">\r\n  <form *ngFor=\"let product of products; let i = index\" (submit)=\"onEditProductSubmit(product, i)\"\r\n        #editProductForm=\"ngForm\">\r\n    <thead *ngIf=\"product === products[0]\">\r\n      <tr>\r\n        <th class=\"edit-product-table-first-cell\">\r\n        </th>\r\n        <th>Category</th>\r\n        <th>Sub Category</th>\r\n        <th>Item Number</th>\r\n        <th>Name</th>\r\n        <th>Price</th>\r\n        <th>Img source</th>\r\n        <th></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr [class.active]=\"i === selectedRow\" >\r\n          <td class=\"edit-product-table-first-cell\">\r\n\r\n            <button type=\"button\" (click)=\"onClickEditBtn(i, product._id)\" class=\"btn btn-secondary btn-sm\"\r\n                    [class.hide]=\"!isEditBtnShow\">\r\n              <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\r\n            </button>\r\n            <div class=\"btn-group\" role=\"group\" aria-label=\"Edit\">\r\n              <button type=\"submit\" class=\"btn btn-secondary btn-sm\" [class.hide]=\"!(i === selectedRow)\">\r\n                <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\r\n              </button>\r\n\r\n              <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"onClickCancelEditBtn(i, product._id)\"\r\n                      [class.hide]=\"!(i === selectedRow)\">\r\n                <i class=\"fa fa-ban\" aria-hidden=\"true\"></i>\r\n              </button>\r\n            </div>\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.catalog.category0\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category0\" #category0=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.catalog.category1\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"category1\" #category1=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.itemNumber\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"itemNumber\" #itemNumber=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.name\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"name\" #name=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.price\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"price\" #price=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-cells\">\r\n            <input type=\"text\" [(ngModel)]=\"product.mainImgSrc\" [disabled]=\"!(i===selectedRow)\"\r\n                   name=\"mainImgSrc\" #mainImgSrc=\"ngModel\" class=\"form-control form-control-sm\">\r\n          </td>\r\n          <td class=\"edit-product-table-last-cell\">\r\n\r\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"onClickDelBtn(i, product._id)\"\r\n                    [class.hidden]=\"!(i === selectedRow)\">\r\n              <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\r\n            </button>\r\n\r\n          </td>\r\n        </tr>\r\n    </tbody>\r\n  </form>\r\n</table>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products-management/edit-product/edit-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditProductComponent = (function () {
    // showAddProduct: Boolean = false;
    function EditProductComponent(productService, flashMessage, router) {
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.router = router;
        this.isActive = false;
        this.isEditBtnShow = true;
    }
    EditProductComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    EditProductComponent.prototype.onUpdateProducts = function () {
        this.getProducts();
    };
    EditProductComponent.prototype.getProducts = function () {
        var _this = this;
        this.productService.getProducts()
            .subscribe(function (products) {
            _this.products = products;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
    };
    // addProductBtn() {
    //   this.addProduct = true;
    // }
    //
    // onClickCancelAddBtn(i, _id) {
    //   this.addProduct = false;
    //   // this.selectedRow = null;
    //   // this.isEditBtnShow = true;
    //   // this.getProducts();
    // }
    EditProductComponent.prototype.onClickEditBtn = function (i, _id) {
        this.selectedRow = i;
        this.isEditBtnShow = false;
        // this.addProduct = false;
    };
    EditProductComponent.prototype.onClickCancelEditBtn = function (i, _id) {
        this.selectedRow = null;
        this.isEditBtnShow = true;
        this.getProducts();
    };
    EditProductComponent.prototype.onClickDelBtn = function (i, _id) {
        var _this = this;
        this.selectedRow = null;
        this.isEditBtnShow = true;
        this.productService.deleteProduct(_id)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Delete successfully, Number Of Deleted Elements ' + data.numberOfDeletedElements.n, {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.getProducts();
                // this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('Delete failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    EditProductComponent.prototype.onEditProductSubmit = function (product, i) {
        var _this = this;
        this.selectedRow = null;
        this.isEditBtnShow = true;
        this.productService.editProduct(product)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Edited successfully', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show('Adding failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                // this.router.navigate(['/profile']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return EditProductComponent;
}());
EditProductComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-product',
        template: __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.html"),
        // providers: [ProductService],
        styles: [__webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], EditProductComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-product.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.component.html":
/***/ (function(module, exports) {

module.exports = "<app-edit-product></app-edit-product>\r\n<!--<app-edit-product (updateProducts)=\"onUpdateProducts()\"></app-edit-product>-->\r\n<app-add-product (updateProducts)=\"onUpdateProducts()\"></app-add-product>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsManagementComponent = (function () {
    function ProductsManagementComponent() {
    }
    ProductsManagementComponent.prototype.ngOnInit = function () {
    };
    ProductsManagementComponent.prototype.onUpdateProducts = function () {
        this.editProductComponent.onUpdateProducts();
    };
    return ProductsManagementComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__["a" /* EditProductComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__["a" /* EditProductComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__edit_product_edit_product_component__["a" /* EditProductComponent */]) === "function" && _a || Object)
], ProductsManagementComponent.prototype, "editProductComponent", void 0);
ProductsManagementComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-management',
        template: __webpack_require__("../../../../../src/app/components/products-management/products-management.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products-management/products-management.component.css")],
    }),
    __metadata("design:paramtypes", [])
], ProductsManagementComponent);

var _a;
//# sourceMappingURL=products-management.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products-management/products-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_management_component__ = __webpack_require__("../../../../../src/app/components/products-management/products-management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/add-product/add-product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__ = __webpack_require__("../../../../../src/app/components/products-management/edit-product/edit-product.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsManagementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import {ProductService} from '../../services/product.service';



var ProductsManagementModule = (function () {
    function ProductsManagementModule() {
    }
    return ProductsManagementModule;
}());
ProductsManagementModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__products_management_component__["a" /* ProductsManagementComponent */],
            __WEBPACK_IMPORTED_MODULE_4__add_product_add_product_component__["a" /* AddProductComponent */],
            __WEBPACK_IMPORTED_MODULE_5__edit_product_edit_product_component__["a" /* EditProductComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [],
        providers: []
    })
], ProductsManagementModule);

//# sourceMappingURL=products-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-detail/products-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-detail/products-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products-detail works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-detail/products-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsDetailComponent = (function () {
    function ProductsDetailComponent() {
    }
    ProductsDetailComponent.prototype.ngOnInit = function () {
    };
    return ProductsDetailComponent;
}());
ProductsDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-detail',
        template: __webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsDetailComponent);

//# sourceMappingURL=products-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  products-list works!\r\n</p>\r\n<div class=\"row\">\r\n  <div  class=\"col-lg-3 col-md-4 col-6\" *ngFor=\"let submenuItem of submenuList\">\r\n    <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n       [routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + submenuItem,\r\n      productsSubmenu:  'category/' + category0 + '/' + submenuItem}}]\">Show {{submenuItem}}</a>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/products/products-list/products-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_catalog__ = __webpack_require__("../../../../../src/app/data/catalog.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsListComponent = (function () {
    function ProductsListComponent(route, router, productService, flashMessage) {
        this.route = route;
        this.router = router;
        this.productService = productService;
        this.flashMessage = flashMessage;
        this.submenuList = [];
    }
    ProductsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalog = __WEBPACK_IMPORTED_MODULE_4__data_catalog__["a" /* catalog */];
        this.route.params.subscribe(function (params) {
            _this.category0 = params.category0;
            _this.category1 = params.category1;
            // this.category1 = params.category1;
            _this.catalog.forEach(function (value) {
                if (params.category0 === value.category0) {
                    _this.submenuList = value.category1;
                }
            });
        });
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-list',
        template: __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_product_service__["a" /* ProductService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], ProductsListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=products-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_section_products_section_component__ = __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_submenu_products_submenu_component__ = __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_resolver_service__ = __webpack_require__("../../../../../src/app/services/product-resolver.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var productsRoutes = [
    {
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */],
        children: [
            {
                path: 'start/:category0/:category1',
                component: __WEBPACK_IMPORTED_MODULE_4__products_list_products_list_component__["a" /* ProductsListComponent */],
                resolve: { products: __WEBPACK_IMPORTED_MODULE_7__services_product_resolver_service__["a" /* ResolverService */] }
            },
            {
                path: 'category/:category0/:category1',
                component: __WEBPACK_IMPORTED_MODULE_3__products_section_products_section_component__["a" /* ProductsSectionComponent */],
                resolve: { products: __WEBPACK_IMPORTED_MODULE_7__services_product_resolver_service__["a" /* ResolverService */] }
            },
            {
                path: 'category/:category0/:category1',
                outlet: 'productsSubmenu',
                component: __WEBPACK_IMPORTED_MODULE_6__products_submenu_products_submenu_component__["a" /* ProductsSubmenuComponent */],
            },
            // {
            //   path: ':category0',
            //   component: ProductsListComponent,
            // },
            // {
            //   path: ':category0',
            //   outlet: 'productsSubmenu',
            //   component: ProductsSideMenuComponent,
            // },
            // {
            //   path: ':category0/:category1',
            //   component: ProductsListComponent
            // },
            // {
            //   path: ':category0/:category1',
            //   outlet: 'productsSubmenu',
            //   component: ProductsSideMenuComponent
            // },
            {
                path: '**',
                component: __WEBPACK_IMPORTED_MODULE_5__shared_page404_page404_component__["a" /* Page404Component */]
            },
        ],
    },
];
var ProductsRoutingModule = (function () {
    function ProductsRoutingModule() {
    }
    return ProductsRoutingModule;
}());
ProductsRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(productsRoutes)
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
    })
], ProductsRoutingModule);

//# sourceMappingURL=products-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-section/products-section.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-section/products-section.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  products-section works!\n</p>\n<div class=\"row\">\n  <div *ngFor=\"let product of products\" class=\"col-lg-3 col-md-4 col-6\">\n    <app-item [product]=\"product\"></app-item>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-section/products-section.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductsSectionComponent = (function () {
    // searchQuery: object;
    function ProductsSectionComponent(route, 
        // private productService: ProductService,
        flashMessage) {
        this.route = route;
        this.flashMessage = flashMessage;
    }
    ProductsSectionComponent.prototype.ngOnInit = function () {
        // this.route.params.subscribe(params => {
        //   this.searchQuery = {
        //         'catalog.category0': params.category0,
        //         'catalog.category1': params.category1 === 'main' ? {$exists: true} : params.category1,
        //       };
        //   this.onChangeRoute(this.searchQuery);
        // });
        var _this = this;
        this.route.data
            .subscribe(function (data) {
            _this.products = data.products;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
    };
    return ProductsSectionComponent;
}());
ProductsSectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-section',
        template: __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], ProductsSectionComponent);

var _a, _b;
//# sourceMappingURL=products-section.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-side-menu/products-side-menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clicked {\r\n    color: brown;\r\n    font-weight: bold;\r\n}\r\n\r\nli {\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-side-menu/products-side-menu.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n  <li> <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n          [routerLink]=\"['']\">Home</a> <span class=\"divider\">></span>  </li>\r\n  <li> <a  (click)=\"navigate(category0, null)\">Back to {{category0}}</a> <span class=\"divider\">></span></li>\r\n  <li *ngFor=\"let submenuItem of submenuList; let i = index\" >\r\n    <a [ngClass]=\"{clicked: currentCategory1 === i}\" (click)=\"navigate(null ,submenuItem, i)\">{{submenuItem}}</a></li>\r\n</ol>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-side-menu/products-side-menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_catalog__ = __webpack_require__("../../../../../src/app/data/catalog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_url_serializer_service__ = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSideMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsSideMenuComponent = (function () {
    function ProductsSideMenuComponent(router, route, customUrlSerializer) {
        this.router = router;
        this.route = route;
        this.customUrlSerializer = customUrlSerializer;
        this.prop1 = true;
        this.prop2 = true;
        this.submenuList = [];
    }
    ProductsSideMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.catalog = __WEBPACK_IMPORTED_MODULE_2__data_catalog__["a" /* catalog */];
        console.log('url', this.router.url);
        this.route.params.subscribe(function (params) {
            _this.category0 = params.category0;
            _this.category1 = params.category1;
            _this.catalog.forEach(function (value) {
                if (params.category0 === value.category0) {
                    _this.submenuList = value.category1;
                }
            });
        });
    };
    ProductsSideMenuComponent.prototype.navigate = function (category0, category1, i) {
        this.currentCategory1 = i;
        console.log('category0', this.category0);
        console.log('category1', category1);
        if (category0) {
            this.router.navigate(['/products', { outlets: { primary: category0, productsSubmenu: category0 } }]);
        }
        else {
            this.router.navigate(['/products', { outlets: { primary: this.category0 + '/' + category1,
                        productsSubmenu: this.category0 + '/' + category1 } }]);
        }
    };
    ProductsSideMenuComponent.prototype.setClasses = function () {
        var classes = { clicked: this.prop1, b: this.prop2 };
        return classes;
    };
    return ProductsSideMenuComponent;
}());
ProductsSideMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-side-menu',
        template: __webpack_require__("../../../../../src/app/components/products/products-side-menu/products-side-menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-side-menu/products-side-menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_url_serializer_service__["a" /* MyUrlSerializer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_url_serializer_service__["a" /* MyUrlSerializer */]) === "function" && _c || Object])
], ProductsSideMenuComponent);

var _a, _b, _c;
//# sourceMappingURL=products-side-menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<nav class=\"breadcrumb\">\r\n\r\n  <!--<li class=\"breadcrumb-item\"> <a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"-->\r\n       <!--[routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/main',-->\r\n        <!--productsSubmenu:  'category/' + category0 + '/main'}}]\">{{category0}}</a> <span class=\"divider\">></span> </li>-->\r\n  <!--<li class=\"breadcrumb-item\" *ngFor=\"let submenuItem of submenuList; let i = index\" >-->\r\n    <!--<a [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"-->\r\n       <!--[routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + submenuItem,-->\r\n        <!--productsSubmenu:  'category/' + category0 + '/' + submenuItem}}]\">{{submenuItem}}</a></li>-->\r\n\r\n  <!--<span class=\"divider\">></span>-->\r\n\r\n  <a class=\"breadcrumb-item active\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n     [routerLink]=\"['/products', {outlets: {primary: 'start/' + category0 + '/main',\r\n    productsSubmenu:  'category/' + category0 + '/main'}}]\">{{category0}}></a>\r\n\r\n\r\n  <a class=\"breadcrumb-item\" *ngFor=\"let submenuItem of submenuList; let i = index\"\r\n    [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\"\r\n    [routerLink]=\"['/products', {outlets: {primary: 'category/' + category0 + '/' + submenuItem,\r\n    productsSubmenu:  'category/' + category0 + '/' + submenuItem}}]\">Show {{submenuItem}}</a>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products-submenu/products-submenu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__ = __webpack_require__("../../../../../src/app/services/url-serializer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsSubmenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsSubmenuComponent = (function () {
    function ProductsSubmenuComponent(productService, router, route, customUrlSerializer, flashMessage) {
        this.productService = productService;
        this.router = router;
        this.route = route;
        this.customUrlSerializer = customUrlSerializer;
        this.flashMessage = flashMessage;
        this.prop1 = true;
        this.prop2 = true;
        this.submenuList = [];
    }
    ProductsSubmenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getCatalog()
            .subscribe(function (catalog) {
            _this.catalog = catalog;
            console.log('catalog', _this.catalog);
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
        this.route.params
            .subscribe(function (params) {
            _this.category0 = params.category0;
            _this.category1 = params.category1;
            // this.catalog.forEach((value) => {
            //   if (params.category0 === value.category0) {
            //     this.submenuList = value.category1;
            //   }
            // });
        });
        // this.productService.getCatalog()
        //   .subscribe(
        //     catalog => {
        //       this.catalog = catalog;
        //
        //       console.log('catalog', this.catalog);
        //     },
        //     (error) => {
        //       this.flashMessage.show(
        //         error,
        //         {
        //           cssClass: 'alert-danger',
        //           timeout: 3000
        //         });
        //       return false;
        //     });
        //
        // console.log('url', this.router.url);
        // this.route.params.subscribe(
        //   params => {
        //   this.category0 = params.category0;
        //   this.category1 = params.category1;
        //
        //   this.catalog.forEach((value) => {
        //     if (params.category0 === value.category0) {
        //       this.submenuList = value.category1;
        //     }
        //   });
        // });
    };
    ProductsSubmenuComponent.prototype.go = function (category1, i) {
        this.currentCategory1 = i;
        this.category1 = category1;
    };
    return ProductsSubmenuComponent;
}());
ProductsSubmenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products-submenu',
        template: __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_product_service__["a" /* ProductService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__["a" /* MyUrlSerializer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_url_serializer_service__["a" /* MyUrlSerializer */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _e || Object])
], ProductsSubmenuComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=products-submenu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <router-outlet name=\"productsSubmenu\"></router-outlet>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-12\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-products',
        template: __webpack_require__("../../../../../src/app/components/products/products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/products/products.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/products/products.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_component__ = __webpack_require__("../../../../../src/app/components/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__products_routing_module__ = __webpack_require__("../../../../../src/app/components/products/products-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__products_section_products_section_component__ = __webpack_require__("../../../../../src/app/components/products/products-section/products-section.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_side_menu_products_side_menu_component__ = __webpack_require__("../../../../../src/app/components/products/products-side-menu/products-side-menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__products_list_products_list_component__ = __webpack_require__("../../../../../src/app/components/products/products-list/products-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__products_detail_products_detail_component__ = __webpack_require__("../../../../../src/app/components/products/products-detail/products-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_submenu_products_submenu_component__ = __webpack_require__("../../../../../src/app/components/products/products-submenu/products-submenu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__ = __webpack_require__("../../../../../src/app/components/shared/shared.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ProductsModule = (function () {
    function ProductsModule() {
    }
    return ProductsModule;
}());
ProductsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__products_routing_module__["a" /* ProductsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_9__shared_shared_module__["a" /* SharedModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__products_component__["a" /* ProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_4__products_section_products_section_component__["a" /* ProductsSectionComponent */],
            __WEBPACK_IMPORTED_MODULE_5__products_side_menu_products_side_menu_component__["a" /* ProductsSideMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__products_list_products_list_component__["a" /* ProductsListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__products_detail_products_detail_component__["a" /* ProductsDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__products_submenu_products_submenu_component__["a" /* ProductsSubmenuComponent */],
        ],
        providers: []
    })
], ProductsModule);

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*.item-div {*/\r\n    /*display: inline;*/\r\n    /*!*height: 450px;*!*/\r\n/*}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h2>{{product.catalog.category0}} / {{product.catalog.category1}}</h2>\r\n  <h3>{{product.name}}</h3>\r\n  <p>{{product.itemNumber}}</p>\r\n  <!--<img src=\"http://via.placeholder.com/200x300\">-->\r\n  <img src={{product.mainImgSrc}} class=\"img-fluid img-thumbnail\">\r\n  <!--<img src=\"./assets/samples/200x300.png\" class=\"img-responsive img-thumbnail img200x300\">-->\r\n  <p>{{product.price}} грн</p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/item/item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__ = __webpack_require__("../../../../../src/app/interfaces/i-product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    return ItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__["IProduct"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interfaces_i_product__["IProduct"]) === "function" && _a || Object)
], ItemComponent.prototype, "product", void 0);
ItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-item',
        template: __webpack_require__("../../../../../src/app/components/shared/item/item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/item/item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ItemComponent);

var _a;
//# sourceMappingURL=item.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/page404/page404.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/page404/page404.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  404 page not found!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/page404/page404.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Page404Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Page404Component = (function () {
    function Page404Component() {
    }
    Page404Component.prototype.ngOnInit = function () {
    };
    return Page404Component;
}());
Page404Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-page404',
        template: __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/shared/page404/page404.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Page404Component);

//# sourceMappingURL=page404.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_item_component__ = __webpack_require__("../../../../../src/app/components/shared/item/item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page404_page404_component__ = __webpack_require__("../../../../../src/app/components/shared/page404/page404.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__page404_page404_component__["a" /* Page404Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__item_item_component__["a" /* ItemComponent */],
            __WEBPACK_IMPORTED_MODULE_3__page404_page404_component__["a" /* Page404Component */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Dashboard</h2>\r\n<p>\r\n  Welcome to dashboard!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users-management/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Login</h2>\r\n<form (submit)=\"onLoginSubmit()\">\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\"\r\n           name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\"\r\n           name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/users-management/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authService.authUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.flashMessage.show('Logged in', {
                    cssClass: 'alert-success',
                    timeout: 5000
                });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, {
                    cssClass: 'alert-danger',
                    timeout: 5000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/users-management/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n  <h2 class=\"page-header\">Profile of {{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\">username: {{user.username}}</li>\r\n    <li class=\"list-group-item\">email: {{user.email}}</li>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/users-management/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = (function () {
    function ProfileComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        // підписується на юзера з auth.service
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
        }, function (error) {
            _this.flashMessage.show(error, {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object])
], ProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/users-management/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"page-header\">Register</h2>\r\n<form (submit)=\"onRegisterSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"name\">Name</label>\r\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\" id=\"name\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"username\">UserName</label>\r\n    <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\" id=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\" id=\"email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\" id=\"password\">\r\n  </div>\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/users-management/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, authService, router, flashMessage) {
        this.validateService = validateService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password
        };
        // validateService перевіряє валідність даних
        if (!this.validateService.validateRegister(user)) {
            this.flashMessage.show('fill all fields', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        if (!this.validateService.validateEmail(user.email)) {
            this.flashMessage.show('enter valid email', {
                cssClass: 'alert-danger',
                timeout: 3000
            });
            return false;
        }
        // підписка на authService.registerUser для реєстрації
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Registration successful', {
                    cssClass: 'alert-success',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Registration failed', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/register']);
            }
        }, function (error) {
            if (error.status === 401) {
                _this.flashMessage.show('Please login', {
                    cssClass: 'alert-danger',
                    timeout: 3000
                });
                _this.router.navigate(['/login']);
            }
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/users-management/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/users-management/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/users-management/users-management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/users-management/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/components/users-management/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__ = __webpack_require__("../../../../../src/app/components/users-management/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__register_register_component__ = __webpack_require__("../../../../../src/app/components/users-management/register/register.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersManagementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UsersManagementModule = (function () {
    function UsersManagementModule() {
    }
    return UsersManagementModule;
}());
UsersManagementModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__register_register_component__["a" /* RegisterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
        ],
        exports: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard__["a" /* AuthGuard */],
        ]
    })
], UsersManagementModule);

//# sourceMappingURL=users-management.module.js.map

/***/ }),

/***/ "../../../../../src/app/data/catalog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return catalog; });
var catalog = [
    {
        _id: 'x',
        category0: 'toys',
        category1: ['one', 'two'],
        description: 'sdfsdfsdfsdfsdfsdf'
    },
    {
        _id: 'x',
        category0: 'flowers',
        category1: ['first', 'second'],
        description: 'sdfsdfsdfsdfsdfsdf'
    },
];
//# sourceMappingURL=catalog.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/interfaces/i-product.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=i-product.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    // register.component підписується на registerUser
    // юзер з хедером передається на сервер
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/register', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // profile.component підписується на getProfile
    AuthService.prototype.getProfile = function () {
        // береться токен юзера loadToken() з localStorage
        // формується запит який містить в хедері токен
        // якщо токен валідний і є такий юзер то сервер
        // відповідаю даними юзера (розшифровує токен)
        // і цей юзер передається в profile.component
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/profile', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        this.authToken = localStorage.getItem('token');
    };
    AuthService.prototype.loggedIn = function () {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])();
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product-resolver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_service__ = __webpack_require__("../../../../../src/app/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResolverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResolverService = (function () {
    function ResolverService(productService) {
        this.productService = productService;
    }
    ResolverService.prototype.resolve = function (route, state) {
        var category0 = route.params.category0;
        var category1 = route.params.category1;
        this.searchQuery = {
            'catalog.category0': category0,
            'catalog.category1': category1 === 'main' ? { $exists: true } : category1,
        };
        return this.productService.getQueriedProducts(this.searchQuery);
        // .subscribe(
        //   (products) => {
        //     this.products = products;
        //   },
        //   (error) => {
        //     this.flashMessage.show(
        //       error,
        //       {
        //         cssClass: 'alert-danger',
        //         timeout: 3000
        //       });
        //     return false;
        //   });
    };
    return ResolverService;
}());
ResolverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_service__["a" /* ProductService */]) === "function" && _a || Object])
], ResolverService);

var _a;
//# sourceMappingURL=product-resolver.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("../../../../../src/app/app.config.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductService = (function () {
    function ProductService(http, authService) {
        this.http = http;
        this.authService = authService;
    }
    ProductService.prototype.getCatalog = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getCatalog')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProducts = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getProducts')
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getDistinctCategories = function (searchQuery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('str', searchQuery);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, params: params });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getDistinctCategories', options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getDistinctProducts = function (searchQuery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set('str', searchQuery);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, params: params });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getDistinctProducts', options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getQueriedProducts = function (searchQuery) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.set('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        // params.set('category', 'Toys');
        params.set('obj', JSON.stringify(searchQuery));
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]({ headers: headers, params: params });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/getQueriedProducts', options)
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.addProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/addProduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.editProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.put(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/editProduct', product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.authService.loadToken();
        headers.append('Authorization', this.authService.authToken);
        headers.append('Content-Type', 'application/json');
        console.log('api/deleteProduct/' + _id);
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* config */].serverUrl + 'api/deleteProduct/' + _id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], ProductService);

var _a, _b;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/url-serializer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyUrlSerializer; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var MyUrlSerializer = (function (_super) {
    __extends(MyUrlSerializer, _super);
    function MyUrlSerializer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyUrlSerializer.prototype.parse = function (url) {
        // url.replace('%20', '-');
        return _super.prototype.parse.call(this, url);
    };
    MyUrlSerializer.prototype.serialize = function (tree) {
        return _super.prototype.serialize.call(this, tree);
        // return super.serialize(tree).replace('%20', '-');
    };
    return MyUrlSerializer;
}(__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* DefaultUrlSerializer */]));

//# sourceMappingURL=url-serializer.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (user) {
        if (user.name === undefined ||
            user.email === undefined ||
            user.username === undefined ||
            user.password === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map