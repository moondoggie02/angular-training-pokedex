export class pokemonInfo {
    abilities: abilityList[];
    height: number;
    id: number;
    name: string;
    sprites: Sprite;
    stats: statList[];
    types: typeList[];
    weight: number;
}

export class abilityList {
    ability: ability;
    is_hidden: boolean;
    slot: number;
}

export class ability {
    name: string;
    url: string;
}

export class Sprite {
    front_default: string;
}

export class statList {
    base_stat: number;
    effort: number;
    stat: Stat;
}

export class Stat {
    name: string;
    url: string;
}

export class typeList {
    slot: number;
    type: Type;
}

export class Type {
    name: string;
    url: string;
}

