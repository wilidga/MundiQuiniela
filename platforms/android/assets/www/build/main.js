webpackJsonp([3],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsuarioProvider = /** @class */ (function () {
    function UsuarioProvider() {
        this.usuario = {};
    }
    UsuarioProvider.prototype.cargarUsuario = function (nombre, email, imagen, uid, provider) {
        this.usuario.nombre = nombre;
        this.usuario.email = email;
        this.usuario.imagen = imagen;
        this.usuario.uid = uid;
        this.usuario.provider = provider;
    };
    UsuarioProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], UsuarioProvider);
    return UsuarioProvider;
}());

//# sourceMappingURL=usuario.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CreateTeamPage = /** @class */ (function () {
    function CreateTeamPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ocultar1 = false;
        this.ocultar2 = false;
    }
    CreateTeamPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateTeamPage');
    };
    CreateTeamPage.prototype.updateToDo = function (event) {
        this.ocultar1 = event.checked;
    };
    CreateTeamPage.prototype.updateToDoOne = function (event) {
        this.ocultar2 = event.checked;
    };
    CreateTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-team',template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\create-team\create-team.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Crear Liga</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form>\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating>Nombre de Liga</ion-label>\n                <ion-input type="text" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Liga por diversión</ion-label>\n                <ion-checkbox (ionChange)="updateToDo($event)"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-item>\n                <ion-label>liga de pago</ion-label>\n                <ion-checkbox (ionChange)="updateToDoOne($event)" checked={{!ocultar1}}></ion-checkbox>\n            </ion-item>\n            <ion-item *ngIf="ocultar2">\n                <ion-label floating>Valor de Liga</ion-label>\n                <ion-input type="number" required></ion-input>\n            </ion-item>\n\n            <button ion-button block>Guardar</button>\n\n\n        </ion-list>\n    </form>\n\n</ion-content>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\create-team\create-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CreateTeamPage);
    return CreateTeamPage;
}());

//# sourceMappingURL=create-team.js.map

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 172;

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-team/create-team.module": [
		716,
		2
	],
	"../pages/login/login.module": [
		717,
		1
	],
	"../pages/pagos/pagos.module": [
		718,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 216;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__contact_contact__["a" /* ContactPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" tabTitle="Own Teams" tabIcon="home"></ion-tab>\n\n    <ion-tab [root]="tab2Root" tabTitle="Teams" tabIcon="git-network"></ion-tab>\n\n    <ion-tab [root]="tab3Root" tabTitle="Stadiums" tabIcon="contacts"></ion-tab>\n\n    <ion-tab [root]="tab4Root" tabTitle="User" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__ = __webpack_require__(319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, _sc) {
        this.navCtrl = navCtrl;
        this._sc = _sc;
        this.Teams = [];
    }
    AboutPage.prototype.ngOnInit = function () {
        this.Teams = this._sc.GetTeams();
        console.log(this.Teams);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\about\about.html"*/'<ion-content>\n\n    <ion-header>\n\n        <ion-navbar>\n\n            <ion-title>\n\n                Teams\n\n\n\n            </ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n    <ion-scroll scrollY="true" class="scrollable">\n\n        <ion-list>\n\n            <ion-item *ngFor="let item of Teams">\n\n                <ion-avatar item-start>\n\n                    <img src={{item.flag}}>\n\n                </ion-avatar>\n\n                <h2>{{item.name }}</h2>\n\n                <p>{{item.fifaCode}}</p>\n\n            </ion-item>\n\n        </ion-list>\n\n    </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__["a" /* EquiposProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the EquiposProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var EquiposProvider = /** @class */ (function () {
    function EquiposProvider(http) {
        this.http = http;
        this.Teams = [
            {
                "id": 1,
                "name": "Russia",
                "fifaCode": "RUS",
                "iso2": "ru",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/900px-Flag_of_Russia.png",
                "emoji": "flag-ru",
                "emojiString": "🇷🇺"
            },
            {
                "id": 2,
                "name": "Saudi Arabia",
                "fifaCode": "KSA",
                "iso2": "sa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/750px-Flag_of_Saudi_Arabia.png",
                "emoji": "flag-sa",
                "emojiString": "🇸🇦"
            },
            {
                "id": 3,
                "name": "Egypt",
                "fifaCode": "EGY",
                "iso2": "eg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/900px-Flag_of_Egypt.png",
                "emoji": "flag-eg",
                "emojiString": "🇪🇬"
            },
            {
                "id": 4,
                "name": "Uruguay",
                "fifaCode": "URU",
                "iso2": "uy",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/900px-Flag_of_Uruguay.png",
                "emoji": "flag-uy",
                "emojiString": "🇺🇾"
            },
            {
                "id": 5,
                "name": "Portugal",
                "fifaCode": "POR",
                "iso2": "pt",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.png",
                "emoji": "flag-pt",
                "emojiString": "🇵🇹"
            },
            {
                "id": 6,
                "name": "Spain",
                "fifaCode": "ESP",
                "iso2": "es",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.png",
                "emoji": "flag-es",
                "emojiString": "🇪🇸"
            },
            {
                "id": 7,
                "name": "Morocco",
                "fifaCode": "MAR",
                "iso2": "ma",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.png",
                "emoji": "flag-ma",
                "emojiString": "🇲🇦"
            },
            {
                "id": 8,
                "name": "Iran",
                "fifaCode": "IRN",
                "iso2": "ir",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.png",
                "emoji": "flag-ir",
                "emojiString": "🇮🇷"
            },
            {
                "id": 9,
                "name": "France",
                "fifaCode": "FRA",
                "iso2": "fr",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.png",
                "emoji": "flag-fr",
                "emojiString": "🇫🇷"
            },
            {
                "id": 10,
                "name": "Australia",
                "fifaCode": "AUS",
                "iso2": "au",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.png",
                "emoji": "flag-au",
                "emojiString": "🇦🇺"
            },
            {
                "id": 11,
                "name": "Peru",
                "fifaCode": "PER",
                "iso2": "pe",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/900px-Flag_of_Peru_%28state%29.png",
                "emoji": "flag-pe",
                "emojiString": "🇵🇪"
            },
            {
                "id": 12,
                "name": "Denmark",
                "fifaCode": "DEN",
                "iso2": "dk",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/740px-Flag_of_Denmark.png",
                "emoji": "flag-dk",
                "emojiString": "🇩🇰"
            },
            {
                "id": 13,
                "name": "Argentina",
                "fifaCode": "ARG",
                "iso2": "ar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png",
                "emoji": "flag-ar",
                "emojiString": "🇦🇷"
            },
            {
                "id": 14,
                "name": "Iceland",
                "fifaCode": "ISL",
                "iso2": "is",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.png",
                "emoji": "flag-is",
                "emojiString": "🇮🇸"
            },
            {
                "id": 15,
                "name": "Croatia",
                "fifaCode": "CRO",
                "iso2": "hr",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.png",
                "emoji": "flag-hr",
                "emojiString": "🇭🇷"
            },
            {
                "id": 16,
                "name": "Nigeria",
                "fifaCode": "NGA",
                "iso2": "ng",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.png",
                "emoji": "flag-ng",
                "emojiString": "🇳🇬"
            },
            {
                "id": 17,
                "name": "Brazil",
                "fifaCode": "BRA",
                "iso2": "br",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.png",
                "emoji": "flag-br",
                "emojiString": "🇧🇷"
            },
            {
                "id": 18,
                "name": "Switzerland",
                "fifaCode": "SUI",
                "iso2": "ch",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/320px-Flag_of_Switzerland_%28Pantone%29.png",
                "emoji": "flag-ch",
                "emojiString": "🇨🇭"
            },
            {
                "id": 19,
                "name": "Costa Rica",
                "fifaCode": "CRC",
                "iso2": "cr",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/833px-Flag_of_Costa_Rica_%28state%29.png",
                "emoji": "flag-cr",
                "emojiString": "🇨🇷"
            },
            {
                "id": 20,
                "name": "Serbia",
                "fifaCode": "SRB",
                "iso2": "rs",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1350px-Flag_of_Serbia.png",
                "emoji": "flag-rs",
                "emojiString": "🇷🇸"
            },
            {
                "id": 21,
                "name": "Germany",
                "fifaCode": "GER",
                "iso2": "de",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.png",
                "emoji": "flag-de",
                "emojiString": "🇩🇪"
            },
            {
                "id": 22,
                "name": "Mexico",
                "fifaCode": "MEX",
                "iso2": "mx",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png",
                "emoji": "flag-mx",
                "emojiString": "🇲🇽"
            },
            {
                "id": 23,
                "name": "Sweden",
                "fifaCode": "SWE",
                "iso2": "se",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.png",
                "emoji": "flag-se",
                "emojiString": "🇸🇪"
            },
            {
                "id": 24,
                "name": "South Korea",
                "fifaCode": "KOR",
                "iso2": "kr",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/900px-Flag_of_South_Korea.png",
                "emoji": "flag-kr",
                "emojiString": "🇰🇷"
            },
            {
                "id": 25,
                "name": "Belgium",
                "fifaCode": "BEL",
                "iso2": "be",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/450px-Flag_of_Belgium.png",
                "emoji": "flag-be",
                "emojiString": "🇧🇪"
            },
            {
                "id": 26,
                "name": "Panama",
                "fifaCode": "PAN",
                "iso2": "pa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/450px-Flag_of_Panama.png",
                "emoji": "flag-pa",
                "emojiString": "🇵🇦"
            },
            {
                "id": 27,
                "name": "Tunisia",
                "fifaCode": "TUN",
                "iso2": "tn",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.png",
                "emoji": "flag-tn",
                "emojiString": "🇹🇳"
            },
            {
                "id": 28,
                "name": "England",
                "fifaCode": "ENG",
                "iso2": "gb-eng",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.png",
                "emoji": "flag-england",
                "emojiString": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
            },
            {
                "id": 29,
                "name": "Poland",
                "fifaCode": "POL",
                "iso2": "pl",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.png",
                "emoji": "flag-pl",
                "emojiString": "🇵🇱"
            },
            {
                "id": 30,
                "name": "Senegal",
                "fifaCode": "SEN",
                "iso2": "sn",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
                "emoji": "flag-sn",
                "emojiString": "🇸🇳"
            },
            {
                "id": 31,
                "name": "Colombia",
                "fifaCode": "COL",
                "iso2": "co",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/450px-Flag_of_Colombia.png",
                "emoji": "flag-co",
                "emojiString": "🇨🇴"
            },
            {
                "id": 32,
                "name": "Japan",
                "fifaCode": "JPN",
                "iso2": "jp",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/900px-Flag_of_Japan.png",
                "emoji": "flag-jp",
                "emojiString": "🇯🇵"
            }
        ];
        // console.log('Hello TeamsProvider Provider');
        console.log(this.Teams);
    }
    EquiposProvider.prototype.GetTeams = function () {
        return this.Teams;
    };
    EquiposProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], EquiposProvider);
    return EquiposProvider;
}());

//# sourceMappingURL=equipos.js.map

/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stadiums_stadiums__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, _ST) {
        this.navCtrl = navCtrl;
        this._ST = _ST;
        this.Stadiums = [];
    }
    ContactPage.prototype.ngOnInit = function () {
        this.Stadiums = this._ST.GetStadiums();
        console.log(this.Stadiums);
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\contact\contact.html"*/'<ion-content>\n\n    <ion-header>\n\n        <ion-navbar>\n\n            <ion-title>\n\n                Stadiums\n\n            </ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n    <ion-scroll scrollY="true" class="scrollable">\n\n        <ion-card *ngFor="let item of Stadiums">\n\n            <img src={{item.image}} />\n\n            <ion-card-content>\n\n                <ion-card-title>\n\n                    Name: {{item.name}}\n\n                </ion-card-title>\n\n                <p>\n\n                    City: {{item.city}}\n\n                </p>\n\n            </ion-card-content>\n\n        </ion-card>\n\n    </ion-scroll>\n\n</ion-content>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_stadiums_stadiums__["a" /* StadiumsProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StadiumsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the StadiumsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StadiumsProvider = /** @class */ (function () {
    function StadiumsProvider(http) {
        this.http = http;
        this.Stadiums = [
            {
                "id": 1,
                "name": "Luzhniki Stadium",
                "city": "Moscow",
                "lat": 55.715765,
                "lng": 37.5515217,
                "image": "https://upload.wikimedia.org/wikipedia/commons/e/e6/Luzhniki_Stadium%2C_Moscow.jpg"
            },
            {
                "id": 2,
                "name": "Otkrytiye Arena",
                "city": "Moscow",
                "lat": 55.817765,
                "lng": 37.440363,
                "image": "https://upload.wikimedia.org/wikipedia/commons/5/50/Stadium_Spartak_in_Moscow.jpg"
            },
            {
                "id": 3,
                "name": "Krestovsky Stadium",
                "city": "Saint Petersburg",
                "lat": 59.972740,
                "lng": 30.221408,
                "image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Spb_06-2017_img40_Krestovsky_Stadium.jpg"
            },
            {
                "id": 4,
                "name": "Kaliningrad Stadium",
                "city": "Kaliningrad",
                "lat": 54.698157,
                "lng": 20.533859,
                "image": "https://upload.wikimedia.org/wikipedia/commons/a/a4/Kaliningrad_stadium_-_2018-04-07.jpg"
            },
            {
                "id": 5,
                "name": "Kazan Arena",
                "city": "Kazan",
                "lat": 55.820983,
                "lng": 49.160966,
                "image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Kazan_Arena_08-2016.jpg"
            },
            {
                "id": 6,
                "name": "Nizhny Novgorod Stadium",
                "city": "Nizhny Novgorod",
                "lat": 56.337287,
                "lng": 43.963251,
                "image": "https://upload.wikimedia.org/wikipedia/commons/9/90/Nizhny_Novgorod_Stadium_%28March_2018%29.jpg"
            },
            {
                "id": 7,
                "name": "Cosmos Arena",
                "city": "Samara",
                "lat": 53.278146,
                "lng": 50.238854,
                "image": "http://img.fifa.com/image/upload/t_l4/d0mymt1ubl2pypmu3gn3.jpg"
            },
            {
                "id": 8,
                "name": "Volgograd Arena",
                "city": "Volgograd",
                "lat": 48.734195,
                "lng": 44.548345,
                "image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Construction_of_Volgograd_Arena_inside_04.jpg"
            },
            {
                "id": 9,
                "name": "Mordovia Arena",
                "city": "Saransk",
                "lat": 54.181795,
                "lng": 45.203851,
                "image": "https://upload.wikimedia.org/wikipedia/commons/c/c9/%D0%A1%D1%82%D0%B0%D0%B4%D0%B8%D0%BE%D0%BD_Mordovia_arena.jpg"
            },
            {
                "id": 10,
                "name": "Rostov Arena",
                "city": "Rostov-on-Don",
                "lat": 47.209581,
                "lng": 39.738424,
                "image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Rostov-Arens_%28april_2018%29_01.jpg"
            },
            {
                "id": 11,
                "name": "Fisht Olympic Stadium",
                "city": "Sochi",
                "lat": 43.402011,
                "lng": 39.955709,
                "image": "https://upload.wikimedia.org/wikipedia/commons/5/55/Fisht_Stadium_in_January_2018.jpg"
            },
            {
                "id": 12,
                "name": "Central Stadium",
                "city": "Yekaterinburg",
                "lat": 56.832490,
                "lng": 60.573585,
                "image": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Estadio_Central_%28Ekaterinburg-arena%29.jpg"
            }
        ];
        // console.log('Hello TeamsProvider Provider');
        console.log(this.Stadiums);
    }
    StadiumsProvider.prototype.GetStadiums = function () {
        return this.Stadiums;
    };
    StadiumsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], StadiumsProvider);
    return StadiumsProvider;
}());

//# sourceMappingURL=stadiums.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_team_create_team__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    HomePage.prototype.openCreateTeam = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__create_team_create_team__["a" /* CreateTeamPage */]);
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\home\home.html"*/'<ion-content padding text-center>\n\n    <ion-header>\n\n        <ion-navbar>\n\n            <ion-title>\n\n                Crear Liga.\n\n            </ion-title>\n\n        </ion-navbar>\n\n    </ion-header>\n\n\n\n    <ion-content padding>\n\n\n\n        <ion-list>\n\n            <ion-item-sliding>\n\n                <ion-item>\n\n                    <h2>Liga 1</h2>\n\n                </ion-item>\n\n                <ion-item-options side="right">\n\n                    <button ion-button color="primary">\n\n                  <ion-icon name="text"></ion-icon>\n\n                  Set Score\n\n                </button>\n\n                </ion-item-options>\n\n            </ion-item-sliding>\n\n        </ion-list>\n\n\n\n\n\n\n\n        <ion-fab right bottom>\n\n            <button ion-fab (click)="openCreateTeam()"><ion-icon name="add"></ion-icon></button>\n\n        </ion-fab>\n\n\n\n    </ion-content>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, afAuth, usuarioProv) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.usuarioProv = usuarioProv;
        this.user = {};
        console.log(this.usuarioProv.usuario);
        this.user = this.usuarioProv.usuario;
        this.afAuth.authState.subscribe(function (user) {
            console.log('AFAUTH!!!');
            console.log(JSON.stringify(user));
        });
    }
    UserPage.prototype.salir = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function (res) {
            _this.usuarioProv.usuario = {};
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
        });
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\user\user.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Bienvenido!\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n    <ion-list>\n\n\n\n        <ion-item text-center>\n\n            <img [src]="user.imagen">\n\n        </ion-item>\n\n\n\n        <ion-item> {{ user.nombre }}</ion-item>\n\n        <ion-item> {{ user.email }}</ion-item>\n\n        <ion-item> {{ user.uid }}</ion-item>\n\n        <ion-item> {{ user.provider }}</ion-item>\n\n\n\n        <ion-item>\n\n\n\n            <button ion-button (click)="salir()" color="danger" block>\n\n              Salir\n\n          </button>\n\n\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(376);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_team_create_team__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_userlogin_userlogin__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_puntajesfinales_puntajesfinales__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_invitaacepta_invitaacepta__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_teams_teams__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_equipos_equipos__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_stadiums_stadiums__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//pages






//firebase



//plugins




//servicios



var firebaseConfig = {
    apiKey: "AIzaSyC_GHu71FpgWJoQeSn75fB8pZ3x7gfxMn4",
    authDomain: "loginquiniela.firebaseapp.com",
    databaseURL: "https://loginquiniela.firebaseio.com",
    projectId: "loginquiniela",
    storageBucket: "loginquiniela.appspot.com",
    messagingSenderId: "528085158243"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_team_create_team__["a" /* CreateTeamPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-team/create-team.module#CreateTeamPageModule', name: 'CreateTeamPage', segment: 'create-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_create_team_create_team__["a" /* CreateTeamPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_userlogin_userlogin__["a" /* UserloginProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_puntajesfinales_puntajesfinales__["a" /* PuntajesfinalesProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_invitaacepta_invitaacepta__["a" /* InvitaaceptaProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_teams_teams__["a" /* TeamsProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_equipos_equipos__["a" /* EquiposProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_stadiums_stadiums__["a" /* StadiumsProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { TabsPage } from '../pages/tabs/tabs';

var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserloginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UserloginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserloginProvider = /** @class */ (function () {
    function UserloginProvider(http) {
        this.http = http;
        console.log('Hello UserloginProvider Provider');
    }
    UserloginProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UserloginProvider);
    return UserloginProvider;
}());

//# sourceMappingURL=userlogin.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntajesfinalesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the PuntajesfinalesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var PuntajesfinalesProvider = /** @class */ (function () {
    function PuntajesfinalesProvider(http) {
        this.http = http;
        console.log('Hello PuntajesfinalesProvider Provider');
    }
    PuntajesfinalesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PuntajesfinalesProvider);
    return PuntajesfinalesProvider;
}());

//# sourceMappingURL=puntajesfinales.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitaaceptaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the InvitaaceptaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var InvitaaceptaProvider = /** @class */ (function () {
    function InvitaaceptaProvider(http) {
        this.http = http;
        console.log('Hello InvitaaceptaProvider Provider');
    }
    InvitaaceptaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], InvitaaceptaProvider);
    return InvitaaceptaProvider;
}());

//# sourceMappingURL=invitaacepta.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the TeamsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TeamsProvider = /** @class */ (function () {
    function TeamsProvider(http) {
        this.http = http;
        this.Teams = [
            {
                "id": 1,
                "name": "Russia",
                "fifaCode": "RUS",
                "iso2": "ru",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/900px-Flag_of_Russia.png",
                "emoji": "flag-ru",
                "emojiString": "🇷🇺"
            },
            {
                "id": 2,
                "name": "Saudi Arabia",
                "fifaCode": "KSA",
                "iso2": "sa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/750px-Flag_of_Saudi_Arabia.png",
                "emoji": "flag-sa",
                "emojiString": "🇸🇦"
            },
            {
                "id": 3,
                "name": "Egypt",
                "fifaCode": "EGY",
                "iso2": "eg",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Egypt.svg/900px-Flag_of_Egypt.png",
                "emoji": "flag-eg",
                "emojiString": "🇪🇬"
            },
            {
                "id": 4,
                "name": "Uruguay",
                "fifaCode": "URU",
                "iso2": "uy",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Flag_of_Uruguay.svg/900px-Flag_of_Uruguay.png",
                "emoji": "flag-uy",
                "emojiString": "🇺🇾"
            },
            {
                "id": 5,
                "name": "Portugal",
                "fifaCode": "POR",
                "iso2": "pt",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Portugal.svg/600px-Flag_of_Portugal.png",
                "emoji": "flag-pt",
                "emojiString": "🇵🇹"
            },
            {
                "id": 6,
                "name": "Spain",
                "fifaCode": "ESP",
                "iso2": "es",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/750px-Flag_of_Spain.png",
                "emoji": "flag-es",
                "emojiString": "🇪🇸"
            },
            {
                "id": 7,
                "name": "Morocco",
                "fifaCode": "MAR",
                "iso2": "ma",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/900px-Flag_of_Morocco.png",
                "emoji": "flag-ma",
                "emojiString": "🇲🇦"
            },
            {
                "id": 8,
                "name": "Iran",
                "fifaCode": "IRN",
                "iso2": "ir",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/630px-Flag_of_Iran.png",
                "emoji": "flag-ir",
                "emojiString": "🇮🇷"
            },
            {
                "id": 9,
                "name": "France",
                "fifaCode": "FRA",
                "iso2": "fr",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/900px-Flag_of_France.png",
                "emoji": "flag-fr",
                "emojiString": "🇫🇷"
            },
            {
                "id": 10,
                "name": "Australia",
                "fifaCode": "AUS",
                "iso2": "au",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1280px-Flag_of_Australia_%28converted%29.png",
                "emoji": "flag-au",
                "emojiString": "🇦🇺"
            },
            {
                "id": 11,
                "name": "Peru",
                "fifaCode": "PER",
                "iso2": "pe",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_%28state%29.svg/900px-Flag_of_Peru_%28state%29.png",
                "emoji": "flag-pe",
                "emojiString": "🇵🇪"
            },
            {
                "id": 12,
                "name": "Denmark",
                "fifaCode": "DEN",
                "iso2": "dk",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/740px-Flag_of_Denmark.png",
                "emoji": "flag-dk",
                "emojiString": "🇩🇰"
            },
            {
                "id": 13,
                "name": "Argentina",
                "fifaCode": "ARG",
                "iso2": "ar",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.png",
                "emoji": "flag-ar",
                "emojiString": "🇦🇷"
            },
            {
                "id": 14,
                "name": "Iceland",
                "fifaCode": "ISL",
                "iso2": "is",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/800px-Flag_of_Iceland.png",
                "emoji": "flag-is",
                "emojiString": "🇮🇸"
            },
            {
                "id": 15,
                "name": "Croatia",
                "fifaCode": "CRO",
                "iso2": "hr",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/800px-Flag_of_Croatia.png",
                "emoji": "flag-hr",
                "emojiString": "🇭🇷"
            },
            {
                "id": 16,
                "name": "Nigeria",
                "fifaCode": "NGA",
                "iso2": "ng",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_Nigeria.svg/800px-Flag_of_Nigeria.png",
                "emoji": "flag-ng",
                "emojiString": "🇳🇬"
            },
            {
                "id": 17,
                "name": "Brazil",
                "fifaCode": "BRA",
                "iso2": "br",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/720px-Flag_of_Brazil.png",
                "emoji": "flag-br",
                "emojiString": "🇧🇷"
            },
            {
                "id": 18,
                "name": "Switzerland",
                "fifaCode": "SUI",
                "iso2": "ch",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/320px-Flag_of_Switzerland_%28Pantone%29.png",
                "emoji": "flag-ch",
                "emojiString": "🇨🇭"
            },
            {
                "id": 19,
                "name": "Costa Rica",
                "fifaCode": "CRC",
                "iso2": "cr",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Costa_Rica_%28state%29.svg/833px-Flag_of_Costa_Rica_%28state%29.png",
                "emoji": "flag-cr",
                "emojiString": "🇨🇷"
            },
            {
                "id": 20,
                "name": "Serbia",
                "fifaCode": "SRB",
                "iso2": "rs",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/1350px-Flag_of_Serbia.png",
                "emoji": "flag-rs",
                "emojiString": "🇷🇸"
            },
            {
                "id": 21,
                "name": "Germany",
                "fifaCode": "GER",
                "iso2": "de",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.png",
                "emoji": "flag-de",
                "emojiString": "🇩🇪"
            },
            {
                "id": 22,
                "name": "Mexico",
                "fifaCode": "MEX",
                "iso2": "mx",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.png",
                "emoji": "flag-mx",
                "emojiString": "🇲🇽"
            },
            {
                "id": 23,
                "name": "Sweden",
                "fifaCode": "SWE",
                "iso2": "se",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.png",
                "emoji": "flag-se",
                "emojiString": "🇸🇪"
            },
            {
                "id": 24,
                "name": "South Korea",
                "fifaCode": "KOR",
                "iso2": "kr",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/900px-Flag_of_South_Korea.png",
                "emoji": "flag-kr",
                "emojiString": "🇰🇷"
            },
            {
                "id": 25,
                "name": "Belgium",
                "fifaCode": "BEL",
                "iso2": "be",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Flag_of_Belgium.svg/450px-Flag_of_Belgium.png",
                "emoji": "flag-be",
                "emojiString": "🇧🇪"
            },
            {
                "id": 26,
                "name": "Panama",
                "fifaCode": "PAN",
                "iso2": "pa",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Flag_of_Panama.svg/450px-Flag_of_Panama.png",
                "emoji": "flag-pa",
                "emojiString": "🇵🇦"
            },
            {
                "id": 27,
                "name": "Tunisia",
                "fifaCode": "TUN",
                "iso2": "tn",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Tunisia.svg/1200px-Flag_of_Tunisia.png",
                "emoji": "flag-tn",
                "emojiString": "🇹🇳"
            },
            {
                "id": 28,
                "name": "England",
                "fifaCode": "ENG",
                "iso2": "gb-eng",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/800px-Flag_of_England.png",
                "emoji": "flag-england",
                "emojiString": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
            },
            {
                "id": 29,
                "name": "Poland",
                "fifaCode": "POL",
                "iso2": "pl",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Flag_of_Poland.svg/1280px-Flag_of_Poland.png",
                "emoji": "flag-pl",
                "emojiString": "🇵🇱"
            },
            {
                "id": 30,
                "name": "Senegal",
                "fifaCode": "SEN",
                "iso2": "sn",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg",
                "emoji": "flag-sn",
                "emojiString": "🇸🇳"
            },
            {
                "id": 31,
                "name": "Colombia",
                "fifaCode": "COL",
                "iso2": "co",
                "flag": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/450px-Flag_of_Colombia.png",
                "emoji": "flag-co",
                "emojiString": "🇨🇴"
            },
            {
                "id": 32,
                "name": "Japan",
                "fifaCode": "JPN",
                "iso2": "jp",
                "flag": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/900px-Flag_of_Japan.png",
                "emoji": "flag-jp",
                "emojiString": "🇯🇵"
            }
        ];
        // console.log('Hello TeamsProvider Provider');
        console.log(this.Teams);
    }
    TeamsProvider.prototype.GetTeams = function () {
        return this.Teams;
    };
    TeamsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TeamsProvider);
    return TeamsProvider;
}());

//# sourceMappingURL=teams.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, afAuth, usuarioProv, googlePlus, platform) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.usuarioProv = usuarioProv;
        this.googlePlus = googlePlus;
        this.platform = platform;
    }
    LoginPage.prototype.signInGoogle = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\login\login.html"*/'<ion-content padding text-center>\n\n\n\n    <ion-grid>\n\n        <ion-row>\n\n            <ion-col class="top-20">\n\n                <img src="./assets/imgs/app-logo.png" alt="">\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col class="top-20">\n\n                <h3>Mundi Quiniela App</h3>\n\n            </ion-col>\n\n        </ion-row>\n\n\n\n        <ion-row>\n\n            <ion-col class="top-5">\n\n                <button (click)="signInGoogle()" ion-button color="google" icon-left block>\n\n                    <ion-icon name ="logo-google"></ion-icon>\n\n                    Google\n\n                </button>\n\n\n\n\n\n                <!-- <button (click)="login()" ion-button color="facebook" icon-left block>\n\n                    <ion-icon name ="logo-facebook"></ion-icon>\n\n                    Facebook\n\n                </button> -->\n\n\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-grid>\n\n</ion-content>'/*ion-inline-end:"C:\Users\wdleon\Documents\UMG\MundiQuiniela\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_3__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[371]);
//# sourceMappingURL=main.js.map