// Interface used for manage the pokemon data corresponding when the type query is made. 
interface Pokemon {
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
};

// Interface used for manage the type of the data that will be shown on the grid. 
interface PokemonEntry {
    name: string;
    image: string;
    firstMove: string;
    secondMove: string;
}