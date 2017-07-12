"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (values, term) {
        //check is search term is undefined
        if (term === undefined)
            return values;
        return values.filter(function (value) {
            return value.name.toLowerCase().includes(term.toLowerCase());
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    core_1.Pipe({
        name: 'filter'
    })
], FilterPipe);
exports.FilterPipe = FilterPipe;
