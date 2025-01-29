interface Pokemon {
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
}

/* This arrays are need it because Tailwind dump every class that wasn't hardcoded on the code. */
const typeBorderColours = ['border-normal', 'border-fire', 'border-water', 'border-electric', 'border-grass', 'border-ice', 'border-fighting', 'border-poison', 'border-ground', 'border-flying', 'border-psychic', 'border-bug', 'border-rock', 'border-ghost', 'border-dragon', 'border-dark', 'border-steel', 'border-fairy', 'border-stellar', 'border-unknown'];
const typeBgColours = ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy', 'bg-stellar', 'bg-unknown'];
const typeTextColours = ['text-normal', 'text-fire', 'text-water', 'text-electric', 'text-grass', 'text-ice', 'text-fighting', 'text-poison', 'text-ground', 'text-flying', 'text-psychic', 'text-bug', 'text-rock', 'text-ghost', 'text-dragon', 'text-dark', 'text-steel', 'text-fairy', 'text-stellar', 'text-unknown'];

export default async function TypeName ( 
    { params }: { params: Promise<{ typeName: string }> } 
){
    const typeName = (await params).typeName;
    const data = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
    const pokemon = await data.json();

    console.log(pokemon.pokemon[0]);

    return (
        <div className='flex justify-center content-center h-screen'>
            <div className='grid md:grid-cols-5 grid-cols-2 gap-4 p-10'>
                {
                    pokemon.pokemon.map((pokemon: Pokemon) => {
                        /* Extract the identificator of to pokemon to get the corresponding image. That link is one of the repos where the images are stored of PokeAPI. */
                        let pokemonIdentifier = pokemon.pokemon.url.match(/\d+/g);
                        let pokemonImageURL = "";

                        /* Concatenate the URL of the corresponding image */
                        if(pokemonIdentifier){
                            pokemonImageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonIdentifier[1]}.png` 
                        }
                        
                        return (
                            <div key={pokemon.pokemon.name} className={`group justify-center content-center text-center p-8 border-4 rounded-lg transition delay-200 duration-300 ease-in-out text-${typeName} border-${typeName} bg-${typeName} hover:bg-opacity-50`}>
                                <img src={pokemonImageURL} className="justify-center content-center"></img>
                                <label className='group-hover:text-palette-black italic font-sans font-semibold md:text-xl text-sm text-center capitalize'>{pokemon.pokemon.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};