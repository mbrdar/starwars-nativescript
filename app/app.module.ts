import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {AppRoutingModule} from "./app.routing";
import {AppComponent} from "./app.component";
import {CharactersComponent} from "./characters/characters.component";
import {CharacterDetailsComponent} from "./character-details/character-details.component";
import {NativeScriptFormsModule, NativeScriptHttpModule, NativeScriptRouterModule} from "nativescript-angular";
import {CharacterService} from "./service/character.service";
import {FilterPipe} from "./pipe/filter.pipe";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptFormsModule,
        NativeScriptHttpModule,
        NativeScriptRouterModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        CharactersComponent,
        CharacterDetailsComponent,
        FilterPipe
    ],
    providers: [
        CharacterService,
        {provide: 'API_URL', useValue: 'https://starwars-json-server-ewtdxbyfdz.now.sh/'}
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule {
}
