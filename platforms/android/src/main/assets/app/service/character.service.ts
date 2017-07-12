import {Injectable, Inject} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Character} from "../model/character";


@Injectable()
export class CharacterService {

    constructor(@Inject('API_URL') private _apiUrl, private _http: Http) {
    }

    getAll(): Observable<Character[]> {
        return this._http.get(`${this._apiUrl}people`)
            .map((response: any) => <Character[]> response.json())
            .map((characters: Character[]) => {
                characters.map((character) => {
                    character.image = this._apiUrl + character.image;
                });
                return characters;
            });
    }

    getById(id: number): Observable<Character> {
        return this._http.get(`${this._apiUrl}people/${id}`)
            .map((response: any) => <Character> response.json())
            .map((character: Character) => {
                character.image = this._apiUrl + character.image;
                return character;
            })
    }
}