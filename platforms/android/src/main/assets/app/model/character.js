"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Character = (function () {
    function Character(character) {
        this.edited = character && character.edited || null;
        this.name = character && character.name || null;
        this.created = character && character.created || null;
        this.gender = character && character.gender || null;
        this.skin_color = character && character.skin_color || null;
        this.hair_color = character && character.hair_color || null;
        this.height = character && character.height || null;
        this.eye_color = character && character.eye_color || null;
        this.mass = character && character.mass || null;
        this.homeworld = character && character.homeworld || null;
        this.birth_year = character && character.birth_year || null;
        this.image = character && character.image || null;
        this.id = character && character.id || null;
        this.vehicles = character && character.vehicles || null;
        this.starships = character && character.starships || null;
        this.films = character && character.films || null;
    }
    return Character;
}());
exports.Character = Character;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcmFjdGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhcmFjdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFrQkksbUJBQVksU0FBZTtRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztRQUM1RCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztRQUM1RCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUNoRCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztRQUNsRCxJQUFJLENBQUMsRUFBRSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsRUFBRSxJQUFJLElBQUksQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQztRQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQztRQUMxRCxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsSUFBSSxTQUFTLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQztJQUN0RCxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBcENELElBb0NDO0FBcENZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENoYXJhY3RlciB7XG4gICAgZWRpdGVkOiBEYXRlO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBjcmVhdGVkOiBEYXRlO1xuICAgIGdlbmRlcjogc3RyaW5nO1xuICAgIHNraW5fY29sb3I6IHN0cmluZztcbiAgICBoYWlyX2NvbG9yOiBzdHJpbmc7XG4gICAgaGVpZ2h0OiBzdHJpbmc7XG4gICAgZXllX2NvbG9yOiBzdHJpbmc7XG4gICAgbWFzczogc3RyaW5nO1xuICAgIGhvbWV3b3JsZDogbnVtYmVyO1xuICAgIGJpcnRoX3llYXI6IHN0cmluZztcbiAgICBpbWFnZTogc3RyaW5nO1xuICAgIGlkOiBudW1iZXI7XG4gICAgdmVoaWNsZXM6IEFycmF5PG51bWJlcj47XG4gICAgc3RhcnNoaXBzOiBBcnJheTxudW1iZXI+O1xuICAgIGZpbG1zOiBBcnJheTxudW1iZXI+O1xuXG4gICAgY29uc3RydWN0b3IoY2hhcmFjdGVyPzogYW55KSB7XG4gICAgICAgIHRoaXMuZWRpdGVkID0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci5lZGl0ZWQgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5uYW1lID0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci5uYW1lIHx8IG51bGw7XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuY3JlYXRlZCB8fCBudWxsO1xuICAgICAgICB0aGlzLmdlbmRlciA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuZ2VuZGVyIHx8IG51bGw7XG4gICAgICAgIHRoaXMuc2tpbl9jb2xvciA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuc2tpbl9jb2xvciB8fCBudWxsO1xuICAgICAgICB0aGlzLmhhaXJfY29sb3IgPSBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyLmhhaXJfY29sb3IgfHwgbnVsbDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyLmhlaWdodCB8fCBudWxsO1xuICAgICAgICB0aGlzLmV5ZV9jb2xvciA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuZXllX2NvbG9yIHx8IG51bGw7XG4gICAgICAgIHRoaXMubWFzcyA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIubWFzcyB8fCBudWxsO1xuICAgICAgICB0aGlzLmhvbWV3b3JsZCA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuaG9tZXdvcmxkIHx8IG51bGw7XG4gICAgICAgIHRoaXMuYmlydGhfeWVhciA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuYmlydGhfeWVhciB8fCBudWxsO1xuICAgICAgICB0aGlzLmltYWdlID0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci5pbWFnZSB8fCBudWxsO1xuICAgICAgICB0aGlzLmlkID0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLnZlaGljbGVzID0gY2hhcmFjdGVyICYmIGNoYXJhY3Rlci52ZWhpY2xlcyB8fCBudWxsO1xuICAgICAgICB0aGlzLnN0YXJzaGlwcyA9IGNoYXJhY3RlciAmJiBjaGFyYWN0ZXIuc3RhcnNoaXBzIHx8IG51bGw7XG4gICAgICAgIHRoaXMuZmlsbXMgPSBjaGFyYWN0ZXIgJiYgY2hhcmFjdGVyLmZpbG1zIHx8IG51bGw7XG4gICAgfVxufVxuIl19