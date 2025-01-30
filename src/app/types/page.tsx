import Link from 'next/link';

// Interface used for manage the data fetch corresponding to every pokemon type.
interface Type {
    name: string;
    url: string;
}

export default async function Types() {
    // Get the pokemon types data.
    const data = await fetch("https://pokeapi.co/api/v2/type")
    const types = await data.json();

    // Return a grid of clickable links of pokemon types. When some link is clicked it'll redirect to /types/: type page. 
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