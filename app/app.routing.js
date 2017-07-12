"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var characters_component_1 = require("./characters/characters.component");
var character_details_component_1 = require("./character-details/character-details.component");
var routes = [
    { path: '', component: characters_component_1.CharactersComponent },
    { path: 'character/:id', component: character_details_component_1.CharacterDetailsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
        exports: [router_1.NativeScriptRouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
