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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLnBpcGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmaWx0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFvRDtBQUtwRCxJQUFhLFVBQVU7SUFBdkI7SUFXQSxDQUFDO0lBVEMsOEJBQVMsR0FBVCxVQUFVLE1BQVcsRUFBRSxJQUFTO1FBQzlCLG1DQUFtQztRQUNuQyxFQUFFLENBQUEsQ0FBQyxJQUFJLEtBQUssU0FBUyxDQUFDO1lBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUVyQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFDLEtBQUs7WUFDekIsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1FBQy9ELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVILGlCQUFDO0FBQUQsQ0FBQyxBQVhELElBV0M7QUFYWSxVQUFVO0lBSHRCLFdBQUksQ0FBQztRQUNKLElBQUksRUFBRSxRQUFRO0tBQ2YsQ0FBQztHQUNXLFVBQVUsQ0FXdEI7QUFYWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnZmlsdGVyJ1xufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG5cbiAgdHJhbnNmb3JtKHZhbHVlczogYW55LCB0ZXJtOiBhbnkpOiBhbnkge1xuICAgIC8vY2hlY2sgaXMgc2VhcmNoIHRlcm0gaXMgdW5kZWZpbmVkXG4gICAgaWYodGVybSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gdmFsdWVzO1xuXG4gICAgcmV0dXJuIHZhbHVlcy5maWx0ZXIoKHZhbHVlKT0+IHtcbiAgICAgIHJldHVybiB2YWx1ZS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGVybS50b0xvd2VyQ2FzZSgpKTtcbiAgICB9KTtcbiAgfVxuXG59XG4iXX0=