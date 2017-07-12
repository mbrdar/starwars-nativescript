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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLDZDQUErQztBQUMvQyxpREFBNkM7QUFDN0MsMEVBQXNFO0FBQ3RFLCtGQUEwRjtBQUMxRiw2REFBK0c7QUFDL0csaUVBQTZEO0FBQzdELGtEQUE4QztBQTJCOUMsSUFBYSxTQUFTO0lBQXRCO0lBQ0EsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxTQUFTO0lBekJyQixlQUFRLENBQUM7UUFDTixTQUFTLEVBQUU7WUFDUCw0QkFBWTtTQUNmO1FBQ0QsT0FBTyxFQUFFO1lBQ0wsd0NBQWtCO1lBQ2xCLDhDQUF1QjtZQUN2Qiw2Q0FBc0I7WUFDdEIsK0NBQXdCO1lBQ3hCLDhCQUFnQjtTQUNuQjtRQUNELFlBQVksRUFBRTtZQUNWLDRCQUFZO1lBQ1osMENBQW1CO1lBQ25CLHVEQUF5QjtZQUN6Qix3QkFBVTtTQUNiO1FBQ0QsU0FBUyxFQUFFO1lBQ1Asb0NBQWdCO1lBQ2hCLEVBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsaURBQWlELEVBQUM7U0FDcEY7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUNyQjtBQURZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0TW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAucm91dGluZ1wiO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q2hhcmFjdGVyc0NvbXBvbmVudH0gZnJvbSBcIi4vY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtDaGFyYWN0ZXJEZXRhaWxzQ29tcG9uZW50fSBmcm9tIFwiLi9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5jb21wb25lbnRcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5pbXBvcnQge0NoYXJhY3RlclNlcnZpY2V9IGZyb20gXCIuL3NlcnZpY2UvY2hhcmFjdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7RmlsdGVyUGlwZX0gZnJvbSBcIi4vcGlwZS9maWx0ZXIucGlwZVwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBDaGFyYWN0ZXJzQ29tcG9uZW50LFxuICAgICAgICBDaGFyYWN0ZXJEZXRhaWxzQ29tcG9uZW50LFxuICAgICAgICBGaWx0ZXJQaXBlXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2hhcmFjdGVyU2VydmljZSxcbiAgICAgICAge3Byb3ZpZGU6ICdBUElfVVJMJywgdXNlVmFsdWU6ICdodHRwczovL3N0YXJ3YXJzLWpzb24tc2VydmVyLWV3dGR4YnlmZHoubm93LnNoLyd9XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG59XG4iXX0=