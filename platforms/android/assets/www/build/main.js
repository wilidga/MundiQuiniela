webpackJsonp([6],{

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__invita_pendientes_invita_pendientes__ = __webpack_require__(180);
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
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__invita_pendientes_invita_pendientes__["a" /* InvitaPendientesPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/tabs/tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Own Teams" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Teams" tabIcon="git-network"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Stadiums" tabIcon="contacts"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Invita" tabIcon="md-key"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="User" tabIcon="person"></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LigasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_RX___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_RX__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LigasProvider = /** @class */ (function () {
    function LigasProvider(http) {
        this.http = http;
        this.LigaUrl = "https://loginquiniela.firebaseio.com/Liga.json";
        console.log('Hello LigasProvider Provider');
    }
    LigasProvider.prototype.nuevaLiga = function (liga) {
        var body = JSON.stringify(liga);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.LigaUrl, body, { headers: headers })
            .map(function (res) {
            console.log(res);
            return res;
        });
    };
    LigasProvider.prototype.getLigas = function () {
        return this.http.get(this.LigaUrl)
            .map(function (res) {
            return res;
        });
    };
    LigasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], LigasProvider);
    return LigasProvider;
}());

//# sourceMappingURL=ligas.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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
  Generated class for the SharingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SharingProvider = /** @class */ (function () {
    function SharingProvider(http) {
        this.http = http;
        this.InvitaURL = "https://loginquiniela.firebaseio.com/Sharing.json";
        console.log('Hello LigasProvider Provider');
    }
    SharingProvider.prototype.nuevaInvitacion = function (invita) {
        var body = JSON.stringify(invita);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.InvitaURL, body, { headers: headers })
            .map(function (res) {
            console.log(res);
            return res;
        });
    };
    SharingProvider.prototype.getInvitaciones = function () {
        return this.http.get(this.InvitaURL)
            .map(function (res) {
            return res;
        });
    };
    SharingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], SharingProvider);
    return SharingProvider;
}());

//# sourceMappingURL=sharing.js.map

/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PuntajesfinalesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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


var PuntajesfinalesProvider = /** @class */ (function () {
    function PuntajesfinalesProvider(http) {
        this.http = http;
        this.LigaUrl = "https://loginquiniela.firebaseio.com/score.json";
        console.log('Hello LigasProvider Provider');
    }
    PuntajesfinalesProvider.prototype.saveScores = function (score) {
        var body = JSON.stringify(score);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.LigaUrl, body, { headers: headers })
            .map(function (res) {
            console.log(res);
            return res;
        });
    };
    PuntajesfinalesProvider.prototype.getPuntajes = function () {
        return this.http.get(this.LigaUrl)
            .map(function (res) {
            return res;
        });
    };
    PuntajesfinalesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PuntajesfinalesProvider);
    return PuntajesfinalesProvider;
}());

//# sourceMappingURL=puntajesfinales.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateTeamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ligas_ligas__ = __webpack_require__(128);
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
    function CreateTeamPage(navCtrl, navParams, _Liga) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._Liga = _Liga;
        this.ocultar1 = false;
        this.ocultar2 = false;
        this.Liga = {
            Nombre: "",
            snDiversion: false,
            snPago: false,
            ValorPago: 0
        };
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
    CreateTeamPage.prototype.closeModal = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    CreateTeamPage.prototype.guardar = function () {
        console.log(this.Liga);
        this._Liga.nuevaLiga(this.Liga)
            .subscribe(function (data) {
        });
    };
    CreateTeamPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-team',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/create-team/create-team.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Crear Liga</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="guardar()" #forma="ngForm">\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating>Nombre de Liga</ion-label>\n                <ion-input [(ngModel)]="Liga.Nombre" name="Nombre" type="text" required></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>Liga por diversión</ion-label>\n                <ion-checkbox (ionChange)="updateToDo($event)" [(ngModel)]="Liga.snDiversion" name="snDiversion"></ion-checkbox>\n\n            </ion-item>\n\n            <ion-item>\n                <ion-label>liga de pago</ion-label>\n                <ion-checkbox (ionChange)="updateToDoOne($event)" checked={{!ocultar1}} [(ngModel)]="Liga.snPago" name="snPago"></ion-checkbox>\n            </ion-item>\n            <ion-item *ngIf="ocultar2">\n                <ion-label floating>Valor de Liga</ion-label>\n                <ion-input [(ngModel)]="Liga.ValorPago" name="ValorPago" type="number"></ion-input>\n            </ion-item>\n\n\n            <button [disabled]="!forma.valid" type="submit" ion-button color="default" icon-left block>\n                <ion-icon ></ion-icon>\n                Guardar\n            </button>\n\n\n            <button (click)="closeModal()" ion-button color="google" icon-left block>\n                <ion-icon ></ion-icon>\n                Cancelar\n            </button>\n\n\n        </ion-list>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/create-team/create-team.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_ligas_ligas__["a" /* LigasProvider */]])
    ], CreateTeamPage);
    return CreateTeamPage;
}());

//# sourceMappingURL=create-team.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_puntajesfinales_puntajesfinales__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScorePage = /** @class */ (function () {
    function ScorePage(navCtrl, navParams, _grupos, _puntaje, viewCtrl, params) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._grupos = _grupos;
        this._puntaje = _puntaje;
        this.viewCtrl = viewCtrl;
        this.Teams = [];
        this.stadiums = [];
        this.Gruposa = [];
        this.Gruposb = [];
        this.Gruposc = [];
        this.Gruposd = [];
        this.Grupose = [];
        this.Gruposf = [];
        this.Gruposg = [];
        this.Gruposh = [];
        this.score = {
            liga: "",
            grupo: "",
            home_team: "",
            valueHome: 0,
            away_team: "",
            valueAway: 0,
            urlaway: "",
            urlhome: ""
        };
        this.myParam = params.get('myParam');
        console.log(this.myParam);
    }
    ScorePage.prototype.ionViewDidLoad = function () {
    };
    ScorePage.prototype.ngOnInit = function () {
        var _this = this;
        this._grupos.getGrupos()
            .subscribe(function (data) {
            console.log(data);
            _this.Teams = data.teams;
            _this.stadiums = data.stadiums;
            _this.Gruposa = data.groups.a.matches;
            _this.Gruposb = data.groups.b.matches;
            _this.Gruposc = data.groups.c.matches;
            _this.Gruposd = data.groups.d.matches;
            _this.Grupose = data.groups.e.matches;
            _this.Gruposf = data.groups.f.matches;
            _this.Gruposg = data.groups.g.matches;
            _this.Gruposh = data.groups.h.matches;
            console.log(_this.Teams);
            console.log(_this.Gruposa);
        });
    };
    ScorePage.prototype.getNameTeam = function (id) {
        for (var _i = 0, _a = this.Teams; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                return item.name;
            }
        }
    };
    ScorePage.prototype.getImgTeam = function (id) {
        for (var _i = 0, _a = this.Teams; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                return item.flag;
            }
        }
    };
    ScorePage.prototype.getNameStadiums = function (id) {
        for (var _i = 0, _a = this.stadiums; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.id === id) {
                return item.name;
            }
        }
    };
    ScorePage.prototype.guardar = function (grupo, a, b, c, d, urlhome, urlaway) {
        console.log(this.myParam + " " + grupo + " " + a + " " + b + " " + c + " " + d);
        this.score.liga = this.myParam;
        this.score.grupo = grupo;
        this.score.home_team = a;
        this.score.valueHome = b;
        this.score.away_team = c;
        this.score.valueAway = d;
        this.score.urlhome = urlhome;
        this.score.urlaway = urlaway;
        this._puntaje.saveScores(this.score)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    ScorePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ScorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-score',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/score/score.html"*/'<ion-header padding text-center>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()" color="secondary" clear>Close</button>\n        </ion-buttons>\n        <ion-title>Score</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card>\n        <ion-item padding text-center>\n\n            <ion-input #Grupo type="text" value="GRUPO A" enabled="false"></ion-input>\n        </ion-item>\n    </ion-card>\n\n    <ion-card *ngFor="let item of Gruposa">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                <ion-icon ></ion-icon>\n                Guardar\n            </button>\n\n    </ion-card>\n\n\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO B\n        </ion-item>\n    </ion-card>\n\n\n    <ion-card *ngFor="let item of Gruposb">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO C\n        </ion-item>\n    </ion-card>\n\n\n    <ion-card *ngFor="let item of Gruposc">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO D\n        </ion-item>\n    </ion-card>\n\n\n    <ion-card *ngFor="let item of Gruposd">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO E\n        </ion-item>\n    </ion-card>\n\n\n    <ion-card *ngFor="let item of Grupose">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO F\n        </ion-item>\n    </ion-card>\n\n\n    <ion-card *ngFor="let item of Gruposf">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n\n\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO G\n        </ion-item>\n    </ion-card>\n\n\n    <ion-card *ngFor="let item of Gruposg">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n    <ion-card>\n        <ion-item padding text-center>\n            GRUPO H\n        </ion-item>\n    </ion-card>\n\n    <ion-card *ngFor="let item of Gruposh">\n\n        <ion-card-content>\n            <ion-card-title>\n\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.home_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.home_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolHome type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{getImgTeam(item.away_team)}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ getNameTeam(item.away_team) }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <ion-label floating>Goles</ion-label>\n                        <ion-input #GolAway type="number"></ion-input>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n            <p>\n                Date: {{item.date}}\n                <BR> Estadio: {{getNameStadiums(item.stadium)}}\n            </p>\n        </ion-card-content>\n        <button (click)="guardar(Grupo.value, getNameTeam(item.home_team),GolHome.value, getNameTeam(item.away_team),GolAway.value,getImgTeam(item.home_team),getImgTeam(item.away_team))" ion-button color="default" icon-left block>\n                        <ion-icon ></ion-icon>\n                        Guardar\n                    </button>\n\n    </ion-card>\n\n\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/score/score.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_groups_groups__["a" /* GroupsProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_puntajesfinales_puntajesfinales__["a" /* PuntajesfinalesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ScorePage);
    return ScorePage;
}());

//# sourceMappingURL=score.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_pago_tarjeta_pago_tarjeta__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PagosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PagosPage = /** @class */ (function () {
    function PagosPage(navCtrl, navParams, viewCtrl, params, _pagoTC) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._pagoTC = _pagoTC;
        this.myParam = "";
        this.pagosTC = {
            Nombre: "",
            anio: 0,
            mes: 0,
            numero: 0,
            codigo: 0,
            nit: "",
            monto: 0
        };
        this.myParam = params.get('myParam');
        console.log(this.myParam);
    }
    PagosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PagosPage');
    };
    PagosPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    PagosPage.prototype.guardar = function () {
        console.log(this.pagosTC);
        this._pagoTC.savePagos(this.pagosTC)
            .subscribe(function (data) {
        });
    };
    PagosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pagos',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/pagos/pagos.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()" color="secondary" clear>Close</button>\n        </ion-buttons>\n        <ion-title>pagos</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form (ngSubmit)="guardar()" #forma="ngForm">\n        <ion-list>\n\n            <ion-item>\n                <ion-label floating>Numero de la tarjeta</ion-label>\n                <ion-input [(ngModel)]="pagosTC.numero" name="numero" type="number" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Codigo de la tarjeta</ion-label>\n                <ion-input [(ngModel)]="pagosTC.codigo" name="codigo" type="number" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Anio de la tarjeta </ion-label>\n                <ion-input [(ngModel)]="pagosTC.anio" name="anio" type="number" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Mes de la tarjeta </ion-label>\n                <ion-input [(ngModel)]="pagosTC.mes" name="mes" type="number" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Nombre de la Tarjeta</ion-label>\n                <ion-input [(ngModel)]="pagosTC.Nombre" name="Nombre" type="text" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Ingrese Monto</ion-label>\n                <ion-input [(ngModel)]="pagosTC.monto" name="monto" type="number" required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label floating>Nit</ion-label>\n                <ion-input [(ngModel)]="pagosTC.nit" name="nit" type="text"></ion-input>\n            </ion-item>\n\n            <button [disabled]="!forma.valid" type="submit" ion-button color="default" icon-left block>\n                    <ion-icon ></ion-icon>\n                    Guardar\n                </button>\n        </ion-list>\n    </form>\n\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/pagos/pagos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_pago_tarjeta_pago_tarjeta__["a" /* PagoTarjetaProvider */]])
    ], PagosPage);
    return PagosPage;
}());

//# sourceMappingURL=pagos.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VaticinioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_puntajesfinales_puntajesfinales__ = __webpack_require__(150);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VaticinioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VaticinioPage = /** @class */ (function () {
    function VaticinioPage(navCtrl, navParams, viewCtrl, params, _Puntajes) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this._Puntajes = _Puntajes;
        this.myParam = 'Wilman';
        this.Puntajes = [];
        this.myParam = params.get('myParam');
        console.log(this.myParam);
    }
    VaticinioPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad VaticinioPage');
    };
    VaticinioPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    VaticinioPage.prototype.ngOnInit = function () {
        var _this = this;
        this._Puntajes.getPuntajes()
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.Puntajes.push(data[key$]);
            }
            console.log(_this.Puntajes);
        });
    };
    VaticinioPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-vaticinio',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/vaticinio/vaticinio.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-buttons start>\n            <button ion-button (click)="dismiss()" color="secondary" clear>Close</button>\n        </ion-buttons>\n        <ion-title>vaticinio</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-card *ngFor="let item of Puntajes">\n        <ion-card-content>\n            <ion-card-title>\n                <h2> Liga: {{item.liga}} </h2>\n                <BR>\n                <h2>Grupo: {{item.grupo}} </h2>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{item.urlhome}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{item.home_team }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <h2> Goles: {{item.valueHome}}</h2>\n                    </ion-item>\n                </ion-list>\n                <ion-list>\n                    <ion-item>\n                        <ion-avatar item-start>\n                            <img src={{item.urlaway}}/>\n                        </ion-avatar>\n                        <h2> Home team: {{ item.away_team }}</h2>\n                    </ion-item>\n                    <ion-item>\n                        <h2>Goles: {{item.valueAway}}</h2>\n                    </ion-item>\n                </ion-list>\n\n            </ion-card-title>\n        </ion-card-content>\n\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/vaticinio/vaticinio.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_puntajesfinales_puntajesfinales__["a" /* PuntajesfinalesProvider */]])
    ], VaticinioPage);
    return VaticinioPage;
}());

//# sourceMappingURL=vaticinio.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitaPendientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_sharing_sharing__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InvitaPendientesPage = /** @class */ (function () {
    function InvitaPendientesPage(navCtrl, navParams, _sha) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._sha = _sha;
        this.invita = [];
    }
    InvitaPendientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitaPendientesPage');
    };
    InvitaPendientesPage.prototype.ngOnInit = function () {
        var _this = this;
        this._sha.getInvitaciones()
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.invita.push(data[key$]);
            }
            console.log(_this.invita);
        });
    };
    InvitaPendientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-invita-pendientes',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/invita-pendientes/invita-pendientes.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>InvitaPendientes</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-list>\n        <ion-item *ngFor="let item of invita">\n            <ion-avatar item-start>\n\n            </ion-avatar>\n            <h2>Email: {{item.Email}}</h2>\n            <p>Liga: {{item.Liga}}</p>\n        </ion-item>\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/invita-pendientes/invita-pendientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_sharing_sharing__["a" /* SharingProvider */]])
    ], InvitaPendientesPage);
    return InvitaPendientesPage;
}());

//# sourceMappingURL=invita-pendientes.js.map

/***/ }),

/***/ 189:
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
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-team/create-team.module": [
		731,
		5
	],
	"../pages/invita-pendientes/invita-pendientes.module": [
		732,
		4
	],
	"../pages/login/login.module": [
		733,
		3
	],
	"../pages/pagos/pagos.module": [
		735,
		2
	],
	"../pages/score/score.module": [
		734,
		1
	],
	"../pages/vaticinio/vaticinio.module": [
		736,
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
webpackAsyncContext.id = 233;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__ = __webpack_require__(235);
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
            selector: 'page-about',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/about/about.html"*/'<ion-content>\n    <ion-header>\n        <ion-navbar>\n            <ion-title>\n                Teams\n\n            </ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-scroll scrollY="true" class="scrollable">\n        <ion-list>\n            <ion-item *ngFor="let item of Teams">\n                <ion-avatar item-start>\n                    <img src={{item.flag}}>\n                </ion-avatar>\n                <h2>{{item.name }}</h2>\n                <p>{{item.fifaCode}}</p>\n            </ion-item>\n        </ion-list>\n    </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_equipos_equipos__["a" /* EquiposProvider */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EquiposProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_stadiums_stadiums__ = __webpack_require__(239);
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
            selector: 'page-contact',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/contact/contact.html"*/'<ion-content>\n    <ion-header>\n        <ion-navbar>\n            <ion-title>\n                Stadiums\n            </ion-title>\n        </ion-navbar>\n    </ion-header>\n    <ion-scroll scrollY="true" class="scrollable">\n        <ion-card *ngFor="let item of Stadiums">\n            <img src={{item.image}} />\n            <ion-card-content>\n                <ion-card-title>\n                    Name: {{item.name}}\n                </ion-card-title>\n                <p>\n                    City: {{item.city}}\n                </p>\n            </ion-card-content>\n        </ion-card>\n    </ion-scroll>\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/contact/contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_stadiums_stadiums__["a" /* StadiumsProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StadiumsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_team_create_team__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_ligas_ligas__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sharing_sharing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__score_score__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pagos_pagos__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__vaticinio_vaticinio__ = __webpack_require__(179);
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
    function HomePage(navCtrl, modalCtrl, _Liga, socialSharing, usuarioProv, _EnviaInvita) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this._Liga = _Liga;
        this.socialSharing = socialSharing;
        this.usuarioProv = usuarioProv;
        this._EnviaInvita = _EnviaInvita;
        this.Ligas = [];
        this.invita = [];
        this.user = {};
        this.myParam = '';
        this.user = this.usuarioProv.usuario;
        this._Liga.getLigas()
            .subscribe(function (data) {
            for (var key$ in data) {
                _this.Ligas.push(data[key$]);
            }
            console.log(_this.Ligas);
        });
    }
    HomePage.prototype.openCreateTeam = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__create_team_create_team__["a" /* CreateTeamPage */]);
        modal.present();
    };
    HomePage.prototype.setScore = function (param) {
        this.myParam = param;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__score_score__["a" /* ScorePage */], { 'myParam': this.myParam });
    };
    HomePage.prototype.Pagos = function (param) {
        this.myParam = param;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__pagos_pagos__["a" /* PagosPage */], { 'myParam': this.myParam });
    };
    HomePage.prototype.getVaticinio = function (param) {
        this.myParam = param;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__vaticinio_vaticinio__["a" /* VaticinioPage */], { 'myParam': this.myParam });
    };
    HomePage.prototype.regularShare = function (prueba) {
        var msg = "Unete a mi Liga en MundiQuiniela";
        this.invita.push(this.user.email);
        this.invita.push(prueba);
        this.invita.push(msg);
        console.log(prueba);
        console.log(msg);
        console.log(this.invita);
        this._EnviaInvita.nuevaInvitacion(this.invita)
            .subscribe(function (data) {
        });
        // this.socialSharing.share(msg, "MundiQuiniela", null, null);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/home/home.html"*/'<ion-content padding text-center>\n    <ion-header>\n        <ion-navbar>\n            <ion-title>\n                Crear Liga.\n            </ion-title>\n        </ion-navbar>\n    </ion-header>\n\n    <ion-content padding>\n\n        <ion-list>\n            <ion-item-sliding *ngFor="let item of Ligas">\n                <ion-item>\n                    {{item.Nombre}}\n                </ion-item>\n                <ion-item-options side="right">\n                    <button (click)="setScore(item.Nombre)" ion-button color="primary">\n                  <ion-icon name="text"></ion-icon>\n                  Set Score\n                </button>\n                    <button (click)="getVaticinio(item.Nombre)" ion-button color="primary">\n                        <ion-icon name="text"></ion-icon>\n                        Vaticinio\n                      </button>\n                </ion-item-options>\n                <ion-item-options side="left">\n                    <button (click)="regularShare(item.Nombre)" color="primary">\n                  <ion-icon name="md-share"></ion-icon>\n                  Sharing\n                </button>\n                    <button *ngIf="item.snPago" (click)="Pagos(item.Nombre)" ion-button color="primary">\n                        <ion-icon name="ios-card"> </ion-icon>\n                        Pagos\n                      </button>\n                </ion-item-options>\n            </ion-item-sliding>\n        </ion-list>\n\n\n\n        <ion-fab right bottom>\n            <button ion-fab (click)="openCreateTeam()"><ion-icon name="add"></ion-icon></button>\n        </ion-fab>\n\n    </ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_ligas_ligas__["a" /* LigasProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__providers_usuario_usuario__["a" /* UsuarioProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_sharing_sharing__["a" /* SharingProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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


var GroupsProvider = /** @class */ (function () {
    function GroupsProvider(http) {
        this.http = http;
    }
    GroupsProvider.prototype.getGrupos = function () {
        return this.http.get("https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json")
            .map(function (res) {
            return res;
        });
    };
    GroupsProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GroupsProvider);
    return GroupsProvider;
}());

//# sourceMappingURL=groups.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagoTarjetaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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


var PagoTarjetaProvider = /** @class */ (function () {
    function PagoTarjetaProvider(http) {
        this.http = http;
        this.InvitaURL = "https://loginquiniela.firebaseio.com/PagosTarjeta.json";
        console.log('Hello LigasProvider Provider');
    }
    PagoTarjetaProvider.prototype.savePagos = function (pagos) {
        var body = JSON.stringify(pagos);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.InvitaURL, body, { headers: headers })
            .map(function (res) {
            console.log(res);
            return res;
        });
    };
    PagoTarjetaProvider.prototype.getInvitaciones = function () {
        return this.http.get(this.InvitaURL)
            .map(function (res) {
            return res;
        });
    };
    PagoTarjetaProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], PagoTarjetaProvider);
    return PagoTarjetaProvider;
}());

//# sourceMappingURL=pago-tarjeta.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(95);
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
            selector: 'page-user',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/user/user.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Bienvenido!\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n    <ion-list>\n\n        <ion-item text-center>\n            <img [src]="user.imagen">\n        </ion-item>\n\n        <ion-item> {{ user.nombre }}</ion-item>\n        <ion-item> {{ user.email }}</ion-item>\n        <ion-item> {{ user.uid }}</ion-item>\n        <ion-item> {{ user.provider }}</ion-item>\n\n        <ion-item>\n\n            <button ion-button (click)="salir()" color="danger" block>\n              Salir\n          </button>\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_2__providers_usuario_usuario__["a" /* UsuarioProvider */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(515);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_contact_contact__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tabs_tabs__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_create_team_create_team__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_score_score__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_plus__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_userlogin_userlogin__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_puntajesfinales_puntajesfinales__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_invitaacepta_invitaacepta__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_teams_teams__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_equipos_equipos__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_stadiums_stadiums__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_ligas_ligas__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_sharing_sharing__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_groups_groups__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_vaticinio_vaticinio__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_pagos_pagos__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_pago_tarjeta_pago_tarjeta__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_invita_pendientes_invita_pendientes__ = __webpack_require__(180);
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
                __WEBPACK_IMPORTED_MODULE_15__pages_create_team_create_team__["a" /* CreateTeamPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_score_score__["a" /* ScorePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_vaticinio_vaticinio__["a" /* VaticinioPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_invita_pendientes_invita_pendientes__["a" /* InvitaPendientesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/create-team/create-team.module#CreateTeamPageModule', name: 'CreateTeamPage', segment: 'create-team', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/invita-pendientes/invita-pendientes.module#InvitaPendientesPageModule', name: 'InvitaPendientesPage', segment: 'invita-pendientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/score/score.module#ScorePageModule', name: 'ScorePage', segment: 'score', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pagos/pagos.module#PagosPageModule', name: 'PagosPage', segment: 'pagos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vaticinio/vaticinio.module#VaticinioPageModule', name: 'VaticinioPage', segment: 'vaticinio', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["a" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_auth__["b" /* AngularFireAuthModule */],
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
                __WEBPACK_IMPORTED_MODULE_15__pages_create_team_create_team__["a" /* CreateTeamPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_score_score__["a" /* ScorePage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_vaticinio_vaticinio__["a" /* VaticinioPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_pagos_pagos__["a" /* PagosPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_invita_pendientes_invita_pendientes__["a" /* InvitaPendientesPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_13__providers_usuario_usuario__["a" /* UsuarioProvider */],
                __WEBPACK_IMPORTED_MODULE_21__providers_userlogin_userlogin__["a" /* UserloginProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_puntajesfinales_puntajesfinales__["a" /* PuntajesfinalesProvider */],
                __WEBPACK_IMPORTED_MODULE_23__providers_invitaacepta_invitaacepta__["a" /* InvitaaceptaProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_teams_teams__["a" /* TeamsProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_equipos_equipos__["a" /* EquiposProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_stadiums_stadiums__["a" /* StadiumsProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_ligas_ligas__["a" /* LigasProvider */],
                __WEBPACK_IMPORTED_MODULE_28__providers_sharing_sharing__["a" /* SharingProvider */],
                __WEBPACK_IMPORTED_MODULE_29__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_30__providers_groups_groups__["a" /* GroupsProvider */],
                __WEBPACK_IMPORTED_MODULE_33__providers_pago_tarjeta_pago_tarjeta__["a" /* PagoTarjetaProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(95);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserloginProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvitaaceptaProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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

/***/ 730:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(26);
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

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(124);
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
        var _this = this;
        this.googlePlus.login({
            'webClientId': '528085158243-j9vtggcl6siodumeblu9t25jdg82hg3g.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"]().signInWithCredential(__WEBPACK_IMPORTED_MODULE_3_firebase_app__["auth"].GoogleAuthProvider.credential(res.idToken))
                .then(function (user) {
                console.log(JSON.stringify(user));
                _this.usuarioProv.cargarUsuario(user.displayName, user.email, user.photoURL, user.uid, 'google');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
            })
                .catch(function (error) { return console.log("Firebase failure: " + JSON.stringify(error)); });
        }).catch(function (err) { return console.error("Error: " + JSON.stringify(err)); });
        // this.navCtrl.setRoot(TabsPage);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Developer/UMG/MundiQuiniela/src/pages/login/login.html"*/'<ion-content padding text-center>\n\n    <ion-grid>\n        <ion-row>\n            <ion-col class="top-20">\n                <img src="./assets/imgs/app-logo.png" alt="">\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col class="top-20">\n                <h3>Mundi Quiniela App</h3>\n            </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col class="top-5">\n                <button (click)="signInGoogle()" ion-button color="google" icon-left block>\n                    <ion-icon name ="logo-google"></ion-icon>\n                    Google\n                </button>\n\n\n                <!-- <button (click)="login()" ion-button color="facebook" icon-left block>\n                    <ion-icon name ="logo-facebook"></ion-icon>\n                    Facebook\n                </button> -->\n\n\n            </ion-col>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"/Developer/UMG/MundiQuiniela/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__providers_usuario_usuario__["a" /* UsuarioProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[510]);
//# sourceMappingURL=main.js.map