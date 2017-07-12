import {NgModule} from "@angular/core";
import {NativeScriptRouterModule} from "nativescript-angular/router";
import {Routes} from "@angular/router";
import {CharactersComponent} from "./characters/characters.component";
import {CharacterDetailsComponent} from "./character-details/character-details.component";


const routes: Routes = [
    {path: '', component: CharactersComponent},
    {path: 'character/:id', component: CharacterDetailsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}