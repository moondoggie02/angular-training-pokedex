export class pokemonQuery {
    count: number;
    next: string;
    previous: string;
    results: Result[];
}

export class Result {
    name: string;
    url: string;
}