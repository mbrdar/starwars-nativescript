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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjaGFyYWN0ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRDtBQUNqRCxzQ0FBbUM7QUFFbkMsaUNBQStCO0FBSy9CLElBQWEsZ0JBQWdCO0lBRXpCLDBCQUF1QyxPQUFPLEVBQVUsS0FBVztRQUE1QixZQUFPLEdBQVAsT0FBTyxDQUFBO1FBQVUsVUFBSyxHQUFMLEtBQUssQ0FBTTtJQUNuRSxDQUFDO0lBRUQsaUNBQU0sR0FBTjtRQUFBLGlCQVNDO1FBUkcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFJLElBQUksQ0FBQyxPQUFPLFdBQVEsQ0FBQzthQUN6QyxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBYyxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQTdCLENBQTZCLENBQUM7YUFDckQsR0FBRyxDQUFDLFVBQUMsVUFBdUI7WUFDekIsVUFBVSxDQUFDLEdBQUcsQ0FBQyxVQUFDLFNBQVM7Z0JBQ3JCLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1lBQ3JELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFVBQVUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQ0FBTyxHQUFQLFVBQVEsRUFBVTtRQUFsQixpQkFPQztRQU5HLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBSSxJQUFJLENBQUMsT0FBTyxlQUFVLEVBQUksQ0FBQzthQUMvQyxHQUFHLENBQUMsVUFBQyxRQUFhLElBQUssT0FBWSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQTNCLENBQTJCLENBQUM7YUFDbkQsR0FBRyxDQUFDLFVBQUMsU0FBb0I7WUFDdEIsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7WUFDakQsTUFBTSxDQUFDLFNBQVMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQTtJQUNWLENBQUM7SUFDTCx1QkFBQztBQUFELENBQUMsQUF4QkQsSUF3QkM7QUF4QlksZ0JBQWdCO0lBRDVCLGlCQUFVLEVBQUU7SUFHSSxXQUFBLGFBQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTs2Q0FBaUMsV0FBSTtHQUYxRCxnQkFBZ0IsQ0F3QjVCO0FBeEJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZSwgSW5qZWN0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtIdHRwfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0IHtDaGFyYWN0ZXJ9IGZyb20gXCIuLi9tb2RlbC9jaGFyYWN0ZXJcIjtcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyU2VydmljZSB7XG5cbiAgICBjb25zdHJ1Y3RvcihASW5qZWN0KCdBUElfVVJMJykgcHJpdmF0ZSBfYXBpVXJsLCBwcml2YXRlIF9odHRwOiBIdHRwKSB7XG4gICAgfVxuXG4gICAgZ2V0QWxsKCk6IE9ic2VydmFibGU8Q2hhcmFjdGVyW10+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke3RoaXMuX2FwaVVybH1wZW9wbGVgKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IGFueSkgPT4gPENoYXJhY3RlcltdPiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAubWFwKChjaGFyYWN0ZXJzOiBDaGFyYWN0ZXJbXSkgPT4ge1xuICAgICAgICAgICAgICAgIGNoYXJhY3RlcnMubWFwKChjaGFyYWN0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyLmltYWdlID0gdGhpcy5fYXBpVXJsICsgY2hhcmFjdGVyLmltYWdlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGFyYWN0ZXJzO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0QnlJZChpZDogbnVtYmVyKTogT2JzZXJ2YWJsZTxDaGFyYWN0ZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2h0dHAuZ2V0KGAke3RoaXMuX2FwaVVybH1wZW9wbGUvJHtpZH1gKVxuICAgICAgICAgICAgLm1hcCgocmVzcG9uc2U6IGFueSkgPT4gPENoYXJhY3Rlcj4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLm1hcCgoY2hhcmFjdGVyOiBDaGFyYWN0ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIuaW1hZ2UgPSB0aGlzLl9hcGlVcmwgKyBjaGFyYWN0ZXIuaW1hZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgICAgIH0pXG4gICAgfVxufSJdfQ==