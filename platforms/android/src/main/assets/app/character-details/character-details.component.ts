import {Component} from "@angular/core";
import {CharacterService} from "../service/character.service";
import {Character} from "../model/character";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
    selector: 'character-details',
    templateUrl: './character-details/character-details.component.html',
    styleUrls: ['./character-details/character-details.component.css']
})
export class CharacterDetailsComponent {
    character: Character;

    constructor(private _characterService: CharacterService, private _activatedRoute: ActivatedRoute) {
        _activatedRoute.params.subscribe((params: Params) => {
            let characterId = params['id'];
            _characterService.getById(characterId).subscribe((character: Character) => {
                this.character = character;
            });
        })
    }
}