"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var CharacterService = (function () {
    function CharacterService(_apiUrl, _http) {
        this._apiUrl = _apiUrl;
        this._http = _http;
    }
    CharacterService.prototype.getAll = function () {
        var _this = this;
        return this._http.get(this._apiUrl + "people")
            .map(function (response) { return response.json(); })
            .map(function (characters) {
            characters.map(function (character) {
                character.image = _this._apiUrl + character.image;
            });
            return characters;
        });
    };
    CharacterService.prototype.getById = function (id) {
        var _this = this;
        return this._http.get(this._apiUrl + "people/" + id)
            .map(function (response) { return response.json(); })
            .map(function (character) {
            character.image = _this._apiUrl + character.image;
            return character;
        });
    };
    return CharacterService;
}());
CharacterService = __decorate([
    core_1.Injectable(),
    __param(0, core_1.Inject('API_URL')),
    __metadata("design:paramtypes", [Object, http_1.Http])
], CharacterService);
exports.CharacterService = CharacterService;
