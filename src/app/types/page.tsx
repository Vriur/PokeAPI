import Link from 'next/link';

interface Type {
    name: string;
    url: string;
}

export default async function Types() {
    const data = await fetch("https://pokeapi.co/api/v2/type")
    const types = await data.json();

    return (
        <div className='flex justify-center content-center h-screen bg-[#d8dde3]'>
            <div className='grid grid-cols-5 gap-4 p-10'>
                {
                    types.results.map((type: Type) => {
                        return (
                            <Link href={`/types/${type.name}`} className='justify-center content-center text-center p-8 border-2 rounded-lg transition delay-200 duration-300 ease-in-out text-palette-primary border-palette-primary hover:text-palette-white hover:bg-palette-primary'>    
                                <label className='italic font-sans font-semibold text-xl  text-center capitalize'>{type.name}</label>   
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};