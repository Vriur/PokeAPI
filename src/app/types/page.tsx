import Link from 'next/link';

interface Type {
    name: string;
    url: string;
}

export default async function Types() {
    const data = await fetch("https://pokeapi.co/api/v2/type")
    const types = await data.json();
    const typeTextColours = ['text-normal', 'text-fire', 'text-water', 'text-electric', 'text-grass', 'text-ice', 'text-fighting', 'text-poison', 'text-ground', 'text-flying', 'text-psychic', 'text-bug', 'text-rock', 'text-ghost', 'text-dragon', 'text-dark', 'text-steel', 'text-fairy', 'text-stellar', 'text-unknown']; 
    const typeBorderColours = ['border-normal', 'border-fire', 'border-water', 'border-electric', 'border-grass', 'border-ice', 'border-fighting', 'border-poison', 'border-ground', 'border-flying', 'border-psychic', 'border-bug', 'border-rock', 'border-ghost', 'border-dragon', 'border-dark', 'border-steel', 'border-fairy', 'border-stellar', 'border-unknown'];
    const typeBgColours = ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy', 'bg-stellar', 'bg-unknown'];

    return (
        <div className='flex justify-center content-center h-screen'>
            <div className='grid grid-cols-5 gap-4 p-10'>
                {
                    types.results.map((type: Type) => {
                        return (
                            <Link key={type.name} href={`/types/${type.name}`} className={`justify-center content-center text-center p-8 border-4 rounded-lg transition delay-200 duration-300 ease-in-out text-palette-black border-${type.name} bg-${type.name} hover:text-palette-black hover:bg-palette-grey`}>
                                <label className='italic font-sans font-semibold text-xl  text-center capitalize'>{type.name}</label>   
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};