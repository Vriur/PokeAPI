import Grid from "@/components/grid";
import Pagination from "@/components/pagination";

/* This arrays are need it because Tailwind dump every class that wasn't hardcoded on the code. */
const typeBorderColours = ['border-normal', 'border-fire', 'border-water', 'border-electric', 'border-grass', 'border-ice', 'border-fighting', 'border-poison', 'border-ground', 'border-flying', 'border-psychic', 'border-bug', 'border-rock', 'border-ghost', 'border-dragon', 'border-dark', 'border-steel', 'border-fairy', 'border-stellar', 'border-unknown'];
const typeBgColours = ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy', 'bg-stellar', 'bg-unknown'];
const typeTextColours = ['text-normal', 'text-fire', 'text-water', 'text-electric', 'text-grass', 'text-ice', 'text-fighting', 'text-poison', 'text-ground', 'text-flying', 'text-psychic', 'text-bug', 'text-rock', 'text-ghost', 'text-dragon', 'text-dark', 'text-steel', 'text-fairy', 'text-stellar', 'text-unknown'];

export default async function TypeName ( 
    { params, searchParams }: { params: Promise<{ typeName: string }>, searchParams: Promise<{ page: number }> } 
){
    const typeName = (await params).typeName;
    const data = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`)
    const jsonData = await data.json();

    const itemsPerPage: number = 20;
    const pageNumber: number = Number((await searchParams).page);
    const totalPageNumber: number = Math.ceil(jsonData.pokemon.length / itemsPerPage); 

    const test: Pokemon[] = jsonData.pokemon.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

    return (
        <div className='flex flex-col justify-center content-center'>
            <div>
                <Grid pokemon={test} typeName={typeName} />
            </div>
            <div>
                <Pagination pageNumber={pageNumber} totalPageNumber={totalPageNumber} typeName={typeName} />
            </div>
        </div>
    );
};