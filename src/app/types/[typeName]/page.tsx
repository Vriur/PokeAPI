interface Pokemon {
    pokemon: {
        name: string;
        url: string;
    };
    slot: number;
}

export default async function TypeName ( 
    { params }: { params: Promise<{ typeName: string }> } 
){
    const typeName = (await params).typeName;
    const data = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
    const pokemon = await data.json();

    console.log(pokemon.pokemon[0]);

    return (
        <div className='flex justify-center content-center h-screen'>
            <div className='grid grid-cols-5 gap-4 p-10'>
                {
                    pokemon.pokemon.map((element: Pokemon) => {
                        console.log(element.slot);
                        console.log(element.pokemon.url);
                        return (
                            <div className='italic font-sans font-semibold text-xl capitalize justify-center content-center text-center p-8 border-2 rounded-lg transition delay-200 duration-300 ease-in-out text-palette-primary border-palette-primary hover:text-palette-white hover:bg-palette-primary'>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png"></img>
                                <label>{element.pokemon.name}</label>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};