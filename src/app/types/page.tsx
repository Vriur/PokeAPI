import Link from 'next/link';

interface Type {
    name: string;
    url: string;
}

/* This arrays are need it because Tailwind dump every class that wasn't hardcoded on the code. */
const typeBorderColours = ['border-normal', 'border-fire', 'border-water', 'border-electric', 'border-grass', 'border-ice', 'border-fighting', 'border-poison', 'border-ground', 'border-flying', 'border-psychic', 'border-bug', 'border-rock', 'border-ghost', 'border-dragon', 'border-dark', 'border-steel', 'border-fairy', 'border-stellar', 'border-unknown'];
const typeBgColours = ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy', 'bg-stellar', 'bg-unknown'];

export default async function Types() {
    const data = await fetch("https://pokeapi.co/api/v2/type")
    const types = await data.json();

    return (
        <div className='flex justify-center content-center h-screen w-screen'>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-4 p-4 lg:p-10'>
                {
                    types.results.map((type: Type) => {
                        return (
                            <Link key={type.name} href={`/types/${type.name}?page=1`} className={`justify-center content-center text-center lg:p-8 border-4 rounded-lg transition delay-200 duration-300 ease-in-out text-palette-black border-${type.name} bg-${type.name} hover:bg-opacity-50`}>
                                <label className='italic font-sans font-semibold text-xl text-center capitalize'>{type.name}</label>   
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};