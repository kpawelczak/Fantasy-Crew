(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section>\n\n\t<div class=\"container\">\n\n\t\t<div class=\"row justify-content-center\">\n\n\t\t\t<div class=\"col-xl-12 \">\n\t\t\t\t<fantasy-crew-grid [selectedCharacter]=\"selectedCharacter\"></fantasy-crew-grid>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n</section>\n\n<section>\n\n\t<div class=\"container\">\n\n\t\t<div class=\"row justify-content-center\">\n\t\t\t<div class=\"col-xl-12\">\n\t\t\t\t<fc-grid (onCharacterSelection)=\"isCharacterSelected($event)\"></fc-grid>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.isCharacterSelected = function (selected) {
        this.selectedCharacter = selected;
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_fantasy_crew_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/fantasy-crew.reducer */ "./src/app/store/reducers/fantasy-crew.reducer.ts");
/* harmony import */ var _fantasy_crew_grid_fantasy_crew_grid_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fantasy-crew-grid/fantasy-crew-grid.module */ "./src/app/fantasy-crew-grid/fantasy-crew-grid.module.ts");
/* harmony import */ var _grid_fc_grid_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./grid/fc-grid.module */ "./src/app/grid/fc-grid.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _grid_fc_grid_module__WEBPACK_IMPORTED_MODULE_9__["FcGridModule"],
                _fantasy_crew_grid_fantasy_crew_grid_module__WEBPACK_IMPORTED_MODULE_8__["FantasyCrewGridModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                    character: _store_reducers_fantasy_crew_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"]
                })
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_5__["AppHeader"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/database.ts":
/*!**********************************!*\
  !*** ./src/app/data/database.ts ***!
  \**********************************/
/*! exports provided: FantasyCrewRoster */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyCrewRoster", function() { return FantasyCrewRoster; });
/* harmony import */ var _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fantasy-crew-rank */ "./src/app/data/fantasy-crew-rank.ts");

var FantasyCrewRoster = [
    {
        name: 'Q the Ordinary',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Q',
        score: 1
    }, {
        name: 'Jean-Luc Picard',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 9.5
    }, {
        name: 'Christopher Pike',
        rank: 'Admiral',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 7.5
    }, {
        name: 'William Riker',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Human',
        score: 8.5
    }, {
        name: 'Sarek',
        rank: 'Ambassador',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Vulcan',
        score: 9
    }, {
        name: 'Saru',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Kelpien',
        score: 6
    }, {
        name: 'Benjamin Sisko',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 8
    }, {
        name: 'Spock',
        rank: 'Ambassador',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Vulcan / Human',
        score: 9.5
    }, {
        name: 'T\'\Pol',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Vulcan',
        score: 6
    }, {
        name: 'Chakotay',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Human',
        score: 7
    }, {
        name: 'Pavel Chekov',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 7
    }, {
        name: 'Tuvok',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Vulcan',
        score: 8
    }, {
        name: 'Odo',
        rank: 'Constable',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Changeling',
        score: 9
    }, {
        name: 'The Doctor',
        rank: 'none',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Hologram',
        score: 8
    }, {
        name: 'Leonard McCoy',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Human',
        score: 7
    }, {
        name: 'Katherine Pulaski',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Human',
        score: 6
    }, {
        name: 'Geordi La Forge',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Engineering,
        species: 'Human',
        score: 8
    }, {
        name: 'B\'Elanna Torres',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Engineering,
        species: 'Klingon/Human',
        score: 7
    }, {
        name: 'Montgomery Scott',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Engineering,
        species: 'Human',
        score: 7
    }, {
        name: 'Miles O\'Brien',
        rank: 'Chief Petty Officer',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 7
    }, {
        name: 'Data',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science + ", " + _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First + ", " + _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Engineering,
        species: 'Android',
        score: 9.5
    }, {
        name: 'Jadzia Dax',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Trill',
        score: 8
    }, {
        name: 'Hikaru Sulu',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 6
    }, {
        name: 'Wesley Crusher',
        rank: 'Ensign',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 7
    }, {
        name: 'Kes',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Ocampa',
        score: 4
    }, {
        name: 'Travis Mayweather',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 5
    }, {
        name: 'Hoshi Sato',
        rank: 'Lt. Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Human',
        score: 3
    }, {
        name: 'Tom Paris',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 2
    }, {
        name: 'Malcolm Reed',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Human',
        score: 4
    }, {
        name: 'Deanna Troi',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Human/Betazoid',
        score: 7
    }, {
        name: 'Jonathan Archer',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 5
    }, {
        name: 'Phlox',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Denobulan',
        score: 4
    }, {
        name: 'Quark ',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Ferengi',
        score: 7.5
    }, {
        name: 'Tasha Yar',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Human',
        score: 3
    }, {
        name: 'Seven of Nine',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Borg drone',
        score: 8
    }, {
        name: 'Charles Tucker',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Engineering,
        species: 'Human',
        score: 2
    }, {
        name: 'Julian Bashir',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Human',
        score: 7
    }, {
        name: 'Beverly Crusher',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Medical,
        species: 'Human',
        score: 7
    }, {
        name: 'Kathryn Janeway',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 7
    }, {
        name: 'Kira Nerys',
        rank: 'Major',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Bajoran',
        score: 8.5
    }, {
        name: 'Worf ',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Klingon',
        score: 8
    }, {
        name: 'James T. Kirk',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 9
    }, {
        name: 'Elim Garak',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Cardassian',
        score: 7
    }, {
        name: 'Guinan',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'El-Aurian',
        score: 7.3
    }, {
        name: 'Alexander Rozhenko',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Klingon',
        score: 4
    }, {
        name: 'Ro Laren',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Bajoran',
        score: 4
    }, {
        name: 'Neelix',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Talaxian',
        score: 9
    }, {
        name: 'Dukat',
        rank: 'Gul',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Cardassian',
        score: 8
    }, {
        name: 'Damar',
        rank: 'Legate',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Cardassian',
        score: 7
    }, {
        name: 'Sela',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Romulan/Human',
        score: 5
    }, {
        name: 'Nero',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Romulan',
        score: 3
    }, {
        name: 'Alidar Jarok',
        rank: 'Admiral',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Romulan',
        score: 9
    }, {
        name: 'Ba\'el',
        rank: 'Civilian',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Klingon/Romulan',
        score: 4
    }, {
        name: 'Lwaxana Troi',
        rank: 'Ambassador',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Betazoid',
        score: 7
    }, {
        name: 'Michael Burnham',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Human',
        score: 7
    }, {
        name: 'Katrina Cornwell',
        rank: 'Vice Admiral',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 4
    }, {
        name: 'Emperor Kahless',
        rank: 'Emperor of the Klingon Empire',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Klingon clone',
        score: 8
    }, {
        name: 'Mora Pol',
        rank: 'none',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Science,
        species: 'Bajoran',
        score: 3
    }, {
        name: 'Borg Queen',
        rank: 'Queen',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Borg',
        score: 8
    }, {
        name: 'B\'Etor',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Klingon',
        score: 6
    }, {
        name: 'Tomalak',
        rank: 'Commander',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Romulan',
        score: 6
    }, {
        name: 'Odan',
        rank: 'Ambassador',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Morale,
        species: 'Trill',
        score: 4
    }, {
        name: 'Emperor Georgiou',
        rank: 'Emperor',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Human',
        score: 7
    }, {
        name: 'Martok',
        rank: 'General',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].First,
        species: 'Klingon',
        score: 5
    }, {
        name: 'Gowron',
        rank: 'Chancellor',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Klingon',
        score: 7
    }, {
        name: 'Keyla Detmer',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Helmsman,
        species: 'Human',
        score: 4
    }, {
        name: 'Ash Tyler',
        rank: 'Lieutenant',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Security,
        species: 'Klingon / Human',
        score: 7
    }, {
        name: 'Gabriel Lorca',
        rank: 'Captain',
        position: _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"].Command,
        species: 'Human',
        score: 3
    }
];


/***/ }),

/***/ "./src/app/data/fantasy-crew-rank.ts":
/*!*******************************************!*\
  !*** ./src/app/data/fantasy-crew-rank.ts ***!
  \*******************************************/
/*! exports provided: POSITION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POSITION", function() { return POSITION; });
var POSITION;
(function (POSITION) {
    POSITION["Command"] = "Commanding Officer";
    POSITION["First"] = "First Officer";
    POSITION["Security"] = "Chief of Security";
    POSITION["Science"] = "Science Officer";
    POSITION["Engineering"] = "Chief Engineer";
    POSITION["Medical"] = "Chief Medical Officer";
    POSITION["Helmsman"] = "Helmsman";
    POSITION["Morale"] = "Ship morale";
})(POSITION || (POSITION = {}));


/***/ }),

/***/ "./src/app/data/fantasy-crew.data.ts":
/*!*******************************************!*\
  !*** ./src/app/data/fantasy-crew.data.ts ***!
  \*******************************************/
/*! exports provided: FantasyCrewData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyCrewData", function() { return FantasyCrewData; });
/* harmony import */ var _fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fantasy-crew-rank */ "./src/app/data/fantasy-crew-rank.ts");

var FantasyCrewData = {
    ids: Object.values(_fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_0__["POSITION"]).slice(),
    entities: {
        'Commanding Officer': {
            id: 'Commanding Officer',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'First Officer': {
            id: 'First Officer',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'Chief of Security': {
            id: 'Chief of Security',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'Science Officer': {
            id: 'Science Officer',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'Chief Engineer': {
            id: 'Chief Engineer',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'Chief Medical Officer': {
            id: 'Chief Medical Officer',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'Helmsman': {
            id: 'Helmsman',
            name: '',
            rank: '',
            species: '',
            score: null
        },
        'Ship morale': {
            id: 'Ship morale',
            name: '',
            rank: '',
            species: '',
            score: null
        }
    }
};


/***/ }),

/***/ "./src/app/fantasy-crew-grid/fantasy-crew-grid.component.html":
/*!********************************************************************!*\
  !*** ./src/app/fantasy-crew-grid/fantasy-crew-grid.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gui-grid [columns]=\"columns\"\n\t\t  [rowColoring]=\"rowColoring\"\n\t\t  [theme]=\"theme\"\n\t\t  [source]=\"source\"\n\t\t  (itemsSelected)=\"onItemSelected($event)\">\n</gui-grid>\n\n<section>\n\n\t<h4 *ngIf=\"selectedCharacter else name\">{{isCharacterSelected()}}</h4>\n\n\t<mat-form-field>\n\t\t<mat-label>Select position</mat-label>\n\t\t<mat-select (selectionChange)=\"onPositionSelection($event)\">\n\t\t\t<mat-option *ngFor=\"let position of positions\"\n\t\t\t\t\t\t[value]=\"position\">\n\t\t\t\t{{position}}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</mat-form-field>\n\n\t<button mat-raised-button color=\"primary\"\n\t\t\t(click)=\"addCharacter(selectedPosition, selectedCharacter)\">\n\t\tAdd\n\t</button>\n\n\t<button mat-raised-button color=\"warn\" [disabled]=\"isButtonDisabled()\"\n\t\t\t(click)=\"removeCharacter(selectedFantasyCharacter)\">\n\t\tRemove\n\t</button>\n\n</section>\n\n<ng-template #name>\n\t<h4>Choose one of the characters below and select position you wish to fill</h4>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/fantasy-crew-grid/fantasy-crew-grid.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/fantasy-crew-grid/fantasy-crew-grid.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gui-grid {\n  margin: 32px 0; }\n\n.mat-raised-button {\n  margin-left: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFudGFzeS1jcmV3LWdyaWQvQzpcXFVzZXJzXFxrcnp5c1xcRGVza3RvcFxcRmFudGFzeUNyZXcvc3JjXFxhcHBcXGZhbnRhc3ktY3Jldy1ncmlkXFxmYW50YXN5LWNyZXctZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQWMsRUFBQTs7QUFFZjtFQUNDLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmFudGFzeS1jcmV3LWdyaWQvZmFudGFzeS1jcmV3LWdyaWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3VpLWdyaWQge1xuXHRtYXJnaW46IDMycHggMDtcbn1cbi5tYXQtcmFpc2VkLWJ1dHRvbntcblx0bWFyZ2luLWxlZnQ6IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/fantasy-crew-grid/fantasy-crew-grid.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/fantasy-crew-grid/fantasy-crew-grid.component.ts ***!
  \******************************************************************/
/*! exports provided: FantasyCrewGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyCrewGridComponent", function() { return FantasyCrewGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generic-ui/ngx-grid */ "./node_modules/@generic-ui/ngx-grid/dist/gui-grid.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _data_fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/fantasy-crew-rank */ "./src/app/data/fantasy-crew-rank.ts");
/* harmony import */ var _store_reducers_fantasy_crew_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/reducers/fantasy-crew.reducer */ "./src/app/store/reducers/fantasy-crew.reducer.ts");
/* harmony import */ var _store_actions_fantasy_crew_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/fantasy-crew.actions */ "./src/app/store/actions/fantasy-crew.actions.ts");







var FantasyCrewGridComponent = /** @class */ (function () {
    function FantasyCrewGridComponent(store) {
        this.store = store;
        this.positions = Object.values(_data_fantasy_crew_rank__WEBPACK_IMPORTED_MODULE_4__["POSITION"]).slice();
        this.columns = [
            {
                header: 'Position',
                field: 'id'
            }, {
                header: 'Name',
                field: 'name'
            }, {
                header: 'Rank',
                field: 'rank'
            }, {
                header: 'Species',
                field: 'species'
            }
        ];
        this.source = [];
        this.rowColoring = _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_2__["GuiRowColoring"].NONE;
        this.theme = _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_2__["GuiTheme"].MATERIAL;
        this.fantasyCrew = this.store.select(_store_reducers_fantasy_crew_reducer__WEBPACK_IMPORTED_MODULE_5__["selectAll"]);
    }
    FantasyCrewGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fantasyCrew
            .subscribe(function (characters) {
            _this.source = characters;
        });
    };
    FantasyCrewGridComponent.prototype.onPositionSelection = function (position) {
        this.selectedPosition = position.value;
    };
    FantasyCrewGridComponent.prototype.addCharacter = function (position, character) {
        if (position && character) {
            this.validateCharacter(character);
            this.store.dispatch(new _store_actions_fantasy_crew_actions__WEBPACK_IMPORTED_MODULE_6__["AddCharacter"](position.toString(), {
                name: character.name,
                rank: character.rank,
                species: character.species,
                score: character.score
            }));
        }
    };
    FantasyCrewGridComponent.prototype.removeCharacter = function (character) {
        if (this.selectedFantasyCharacter) {
            this.store.dispatch(new _store_actions_fantasy_crew_actions__WEBPACK_IMPORTED_MODULE_6__["RemoveCharacter"](character.id, {}));
            this.selectedFantasyCharacter = '';
        }
    };
    FantasyCrewGridComponent.prototype.validateCharacter = function (character) {
        for (var i = 0; i < this.source.length; i++) {
            if (this.source[i].name !== '') {
                if (this.source[i].name === character.name) {
                    this.source[i].name = '';
                    this.source[i].rank = '';
                    this.source[i].species = '';
                    this.source[i].score = null;
                }
            }
        }
    };
    FantasyCrewGridComponent.prototype.onItemSelected = function (character) {
        this.selectedFantasyCharacter = character[0];
    };
    FantasyCrewGridComponent.prototype.isCharacterSelected = function () {
        if (this.selectedCharacter) {
            return this.selectedCharacter.name;
        }
    };
    FantasyCrewGridComponent.prototype.isButtonDisabled = function () {
        return !this.selectedFantasyCharacter || this.selectedFantasyCharacter.name === '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FantasyCrewGridComponent.prototype, "selectedCharacter", void 0);
    FantasyCrewGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fantasy-crew-grid',
            template: __webpack_require__(/*! ./fantasy-crew-grid.component.html */ "./src/app/fantasy-crew-grid/fantasy-crew-grid.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fantasy-crew-grid.component.scss */ "./src/app/fantasy-crew-grid/fantasy-crew-grid.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], FantasyCrewGridComponent);
    return FantasyCrewGridComponent;
}());



/***/ }),

/***/ "./src/app/fantasy-crew-grid/fantasy-crew-grid.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/fantasy-crew-grid/fantasy-crew-grid.module.ts ***!
  \***************************************************************/
/*! exports provided: FantasyCrewGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FantasyCrewGridModule", function() { return FantasyCrewGridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generic-ui/ngx-grid */ "./node_modules/@generic-ui/ngx-grid/dist/gui-grid.js");
/* harmony import */ var _fantasy_crew_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fantasy-crew-grid.component */ "./src/app/fantasy-crew-grid/fantasy-crew-grid.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var FantasyCrewGridModule = /** @class */ (function () {
    function FantasyCrewGridModule() {
    }
    FantasyCrewGridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_3__["GridModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"]
            ],
            declarations: [
                _fantasy_crew_grid_component__WEBPACK_IMPORTED_MODULE_4__["FantasyCrewGridComponent"]
            ],
            exports: [
                _fantasy_crew_grid_component__WEBPACK_IMPORTED_MODULE_4__["FantasyCrewGridComponent"]
            ]
        })
    ], FantasyCrewGridModule);
    return FantasyCrewGridModule;
}());



/***/ }),

/***/ "./src/app/grid/fc-grid.component.html":
/*!*********************************************!*\
  !*** ./src/app/grid/fc-grid.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<gui-grid [columns]=\"columns\"\n\t\t  [source]=\"source\"\n\t\t  [height]=\"400\"\n\t\t  [rowColoring]=\"rowColoring\"\n\t\t  [paging]=\"paging\"\n\t\t  [theme]=\"theme\"\n\t\t  (itemsSelected)=\"onItemSelected($event)\">\n</gui-grid>\n"

/***/ }),

/***/ "./src/app/grid/fc-grid.component.scss":
/*!*********************************************!*\
  !*** ./src/app/grid/fc-grid.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gui-grid {\n  padding-top: 20px; }\n\n.mat-raised-button {\n  margin-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ3JpZC9DOlxcVXNlcnNcXGtyenlzXFxEZXNrdG9wXFxGYW50YXN5Q3Jldy9zcmNcXGFwcFxcZ3JpZFxcZmMtZ3JpZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGlCQUFpQixFQUFBOztBQUdsQjtFQUNDLGlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZ3JpZC9mYy1ncmlkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmd1aS1ncmlkIHtcblx0cGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XG5cdG1hcmdpbi1sZWZ0OjMwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/grid/fc-grid.component.ts":
/*!*******************************************!*\
  !*** ./src/app/grid/fc-grid.component.ts ***!
  \*******************************************/
/*! exports provided: FcGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGridComponent", function() { return FcGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @generic-ui/ngx-grid */ "./node_modules/@generic-ui/ngx-grid/dist/gui-grid.js");
/* harmony import */ var _data_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/database */ "./src/app/data/database.ts");




var FcGridComponent = /** @class */ (function () {
    function FcGridComponent() {
        this.onCharacterSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.columns = [{
                header: 'Name',
                field: 'name'
            }, {
                header: 'Rank',
                field: 'rank'
            }, {
                header: 'Position',
                field: 'position'
            }, {
                header: 'Species',
                field: 'species'
            }];
        this.source = [];
        this.rowColoring = _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_2__["GuiRowColoring"].NONE;
        this.theme = _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_2__["GuiTheme"].MATERIAL;
        this.paging = {
            enabled: true,
            pageSizes: [25, 50]
        };
    }
    FcGridComponent.prototype.ngOnInit = function () {
        this.source = _data_database__WEBPACK_IMPORTED_MODULE_3__["FantasyCrewRoster"];
    };
    FcGridComponent.prototype.onItemSelected = function (character) {
        this.onCharacterSelection.emit(character[0]);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FcGridComponent.prototype, "onCharacterSelection", void 0);
    FcGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'fc-grid',
            template: __webpack_require__(/*! ./fc-grid.component.html */ "./src/app/grid/fc-grid.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./fc-grid.component.scss */ "./src/app/grid/fc-grid.component.scss")]
        })
    ], FcGridComponent);
    return FcGridComponent;
}());



/***/ }),

/***/ "./src/app/grid/fc-grid.module.ts":
/*!****************************************!*\
  !*** ./src/app/grid/fc-grid.module.ts ***!
  \****************************************/
/*! exports provided: FcGridModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcGridModule", function() { return FcGridModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @generic-ui/ngx-grid */ "./node_modules/@generic-ui/ngx-grid/dist/gui-grid.js");
/* harmony import */ var _fc_grid_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fc-grid.component */ "./src/app/grid/fc-grid.component.ts");





var FcGridModule = /** @class */ (function () {
    function FcGridModule() {
    }
    FcGridModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _generic_ui_ngx_grid__WEBPACK_IMPORTED_MODULE_3__["GridModule"]
            ],
            declarations: [
                _fc_grid_component__WEBPACK_IMPORTED_MODULE_4__["FcGridComponent"]
            ],
            exports: [
                _fc_grid_component__WEBPACK_IMPORTED_MODULE_4__["FcGridComponent"]
            ]
        })
    ], FcGridModule);
    return FcGridModule;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"app-header\">\n\t<h2>Fantasy Crew</h2>\n\t<a href=\"https://github.com/kpawelczak/Fantasy-Crew\">Github</a>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-header {\n  background: #3f51b5;\n  padding: 4px;\n  text-align: center;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  color: #fcfcfc;\n  box-shadow: 0 2px 4px #8591d5; }\n\na {\n  color: #fcfcfc;\n  font-size: 16px;\n  padding: 2px;\n  text-decoration: none;\n  text-transform: capitalize; }\n\na:hover {\n    color: #b0afaf; }\n\nh2 {\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xca3J6eXNcXERlc2t0b3BcXEZhbnRhc3lDcmV3L3NyY1xcYXBwXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNDLG1CQUphO0VBS2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsY0FQYztFQVFkLDZCQUF3QyxFQUFBOztBQUd6QztFQUNDLGNBWmM7RUFhZCxlQUFlO0VBQ2YsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQiwwQkFBMEIsRUFBQTs7QUFMM0I7SUFRRSxjQUF5QixFQUFBOztBQUkzQjtFQUNDLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmx1ZTogIzNmNTFiNTtcbiR3aGl0ZTogI2ZjZmNmYztcblxuLmFwcC1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kOiAkYmx1ZTtcblx0cGFkZGluZzogNHB4O1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcblx0Y29sb3I6ICR3aGl0ZTtcblx0Ym94LXNoYWRvdzogMCAycHggNHB4IGxpZ2h0ZW4oJGJsdWUsIDIwKVxufVxuXG5hIHtcblx0Y29sb3I6ICR3aGl0ZTtcblx0Zm9udC1zaXplOiAxNnB4O1xuXHRwYWRkaW5nOiAycHg7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0dGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5cblx0Jjpob3ZlciB7XG5cdFx0Y29sb3I6IGRhcmtlbigkd2hpdGUsIDMwKTtcblx0fVxufVxuXG5oMiB7XG5cdG1hcmdpbjogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: AppHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeader", function() { return AppHeader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppHeader = /** @class */ (function () {
    function AppHeader() {
    }
    AppHeader = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        })
    ], AppHeader);
    return AppHeader;
}());



/***/ }),

/***/ "./src/app/store/actions/fantasy-crew.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/actions/fantasy-crew.actions.ts ***!
  \*******************************************************/
/*! exports provided: ADD_CHARACTER, REMOVE_CHARACTER, AddCharacter, RemoveCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_CHARACTER", function() { return ADD_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_CHARACTER", function() { return REMOVE_CHARACTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCharacter", function() { return AddCharacter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoveCharacter", function() { return RemoveCharacter; });
var ADD_CHARACTER = '[CHARACTER] ADD_CHARACTER';
var REMOVE_CHARACTER = '[CHARACTER] REMOVE_CHARACTER';
var AddCharacter = /** @class */ (function () {
    function AddCharacter(id, changes) {
        this.id = id;
        this.changes = changes;
        this.type = ADD_CHARACTER;
    }
    return AddCharacter;
}());

var RemoveCharacter = /** @class */ (function () {
    function RemoveCharacter(id, changes) {
        this.id = id;
        this.changes = changes;
        this.type = REMOVE_CHARACTER;
    }
    return RemoveCharacter;
}());



/***/ }),

/***/ "./src/app/store/reducers/fantasy-crew.reducer.ts":
/*!********************************************************!*\
  !*** ./src/app/store/reducers/fantasy-crew.reducer.ts ***!
  \********************************************************/
/*! exports provided: characterAdapter, initialState, crew, reducer, getCharacterState, selectAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "characterAdapter", function() { return characterAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "crew", function() { return crew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharacterState", function() { return getCharacterState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _data_fantasy_crew_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/fantasy-crew.data */ "./src/app/data/fantasy-crew.data.ts");
/* harmony import */ var _actions_fantasy_crew_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/fantasy-crew.actions */ "./src/app/store/actions/fantasy-crew.actions.ts");




var characterAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
var initialState = characterAdapter.getInitialState(_data_fantasy_crew_data__WEBPACK_IMPORTED_MODULE_2__["FantasyCrewData"]);
var crew = _data_fantasy_crew_data__WEBPACK_IMPORTED_MODULE_2__["FantasyCrewData"];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_fantasy_crew_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_CHARACTER"]: {
            return characterAdapter.updateOne({
                id: action.id,
                changes: action.changes
            }, state);
        }
        case _actions_fantasy_crew_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_CHARACTER"]: {
            return characterAdapter.updateOne({
                id: action.id,
                changes: action.changes = {
                    name: '',
                    rank: '',
                    species: '',
                    score: null
                }
            }, state);
        }
        default:
            return state;
    }
}
var getCharacterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('character');
var selectAll = characterAdapter.getSelectors(getCharacterState).selectAll;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\krzys\Desktop\FantasyCrew\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map