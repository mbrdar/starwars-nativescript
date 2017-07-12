"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var characters_component_1 = require("./characters/characters.component");
var character_details_component_1 = require("./character-details/character-details.component");
var nativescript_angular_1 = require("nativescript-angular");
var character_service_1 = require("./service/character.service");
var filter_pipe_1 = require("./pipe/filter.pipe");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            nativescript_angular_1.NativeScriptFormsModule,
            nativescript_angular_1.NativeScriptHttpModule,
            nativescript_angular_1.NativeScriptRouterModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            characters_component_1.CharactersComponent,
            character_details_component_1.CharacterDetailsComponent,
            filter_pipe_1.FilterPipe
        ],
        providers: [
            character_service_1.CharacterService,
            { provide: 'API_URL', useValue: 'https://starwars-json-server-ewtdxbyfdz.now.sh/' }
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
