export class Character {
    edited: Date;
    name: string;
    created: Date;
    gender: string;
    skin_color: string;
    hair_color: string;
    height: string;
    eye_color: string;
    mass: string;
    homeworld: number;
    birth_year: string;
    image: string;
    id: number;
    vehicles: Array<number>;
    starships: Array<number>;
    films: Array<number>;

    constructor(character?: any) {
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
}
