"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var character_service_1 = require("../service/character.service");
var router_1 = require("@angular/router");
var CharacterDetailsComponent = (function () {
    function CharacterDetailsComponent(_characterService, _activatedRoute) {
        var _this = this;
        this._characterService = _characterService;
        this._activatedRoute = _activatedRoute;
        _activatedRoute.params.subscribe(function (params) {
            var characterId = params['id'];
            _characterService.getById(characterId).subscribe(function (character) {
                _this.character = character;
            });
        });
    }
    return CharacterDetailsComponent;
}());
CharacterDetailsComponent = __decorate([
    core_1.Component({
        selector: 'character-details',
        templateUrl: './character-details/character-details.component.html',
        styleUrls: ['./character-details/character-details.component.css']
    }),
    __metadata("design:paramtypes", [character_service_1.CharacterService, router_1.ActivatedRoute])
], CharacterDetailsComponent);
exports.CharacterDetailsComponent = CharacterDetailsComponent;
