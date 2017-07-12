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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLWRldGFpbHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhcmFjdGVyLWRldGFpbHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdDO0FBQ3hDLGtFQUE4RDtBQUU5RCwwQ0FBdUQ7QUFPdkQsSUFBYSx5QkFBeUI7SUFHbEMsbUNBQW9CLGlCQUFtQyxFQUFVLGVBQStCO1FBQWhHLGlCQU9DO1FBUG1CLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDNUYsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFjO1lBQzVDLElBQUksV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsU0FBb0I7Z0JBQ2xFLEtBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0wsZ0NBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLHlCQUF5QjtJQUxyQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLG1CQUFtQjtRQUM3QixXQUFXLEVBQUUsc0RBQXNEO1FBQ25FLFNBQVMsRUFBRSxDQUFDLHFEQUFxRCxDQUFDO0tBQ3JFLENBQUM7cUNBSXlDLG9DQUFnQixFQUEyQix1QkFBYztHQUh2Rix5QkFBeUIsQ0FXckM7QUFYWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Q2hhcmFjdGVyU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2UvY2hhcmFjdGVyLnNlcnZpY2VcIjtcbmltcG9ydCB7Q2hhcmFjdGVyfSBmcm9tIFwiLi4vbW9kZWwvY2hhcmFjdGVyXCI7XG5pbXBvcnQge0FjdGl2YXRlZFJvdXRlLCBQYXJhbXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdjaGFyYWN0ZXItZGV0YWlscycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NoYXJhY3Rlci1kZXRhaWxzL2NoYXJhY3Rlci1kZXRhaWxzLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9jaGFyYWN0ZXItZGV0YWlscy9jaGFyYWN0ZXItZGV0YWlscy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ2hhcmFjdGVyRGV0YWlsc0NvbXBvbmVudCB7XG4gICAgY2hhcmFjdGVyOiBDaGFyYWN0ZXI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFyYWN0ZXJTZXJ2aWNlOiBDaGFyYWN0ZXJTZXJ2aWNlLCBwcml2YXRlIF9hY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGUpIHtcbiAgICAgICAgX2FjdGl2YXRlZFJvdXRlLnBhcmFtcy5zdWJzY3JpYmUoKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVySWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICBfY2hhcmFjdGVyU2VydmljZS5nZXRCeUlkKGNoYXJhY3RlcklkKS5zdWJzY3JpYmUoKGNoYXJhY3RlcjogQ2hhcmFjdGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXIgPSBjaGFyYWN0ZXI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19