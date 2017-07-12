"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var character_service_1 = require("../service/character.service");
var CharactersComponent = (function () {
    function CharactersComponent(_characterService) {
        var _this = this;
        this._characterService = _characterService;
        this._characterService.getAll().subscribe(function (characters) {
            _this.characters = characters;
        });
    }
    return CharactersComponent;
}());
CharactersComponent = __decorate([
    core_1.Component({
        selector: 'characters',
        templateUrl: './characters/characters.component.html',
        styleUrls: ['./characters/characters.component.css']
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService])
], CharactersComponent);
exports.CharactersComponent = CharactersComponent;
