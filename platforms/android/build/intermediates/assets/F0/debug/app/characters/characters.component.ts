import {Component} from "@angular/core";
import {CharacterService} from "../service/character.service";
import {Character} from "../model/character";
@Component({
    selector: 'characters',
    templateUrl: './characters/characters.component.html',
    styleUrls: ['./characters/characters.component.css']
})
export class CharactersComponent {
    characters: Array<Character>;
    constructor(private _characterService: CharacterService) {
        this._characterService.getAll().subscribe((characters: Character[]) => {
            this.characters = characters;
        });
    }
}