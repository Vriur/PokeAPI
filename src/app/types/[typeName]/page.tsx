import Grid from "@/components/grid";
import Pagination from "@/components/pagination";

export default async function TypeName ( 
    { params, searchParams }: { params: Promise<{ typeName: string }>, searchParams: Promise<{ page: number }> } 
){
    // Name of the type, use for get the type color dinamically.
    const typeName = (await params).typeName;

    // Fetch the data of all pokemon with the selected type.
    const data = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);
    const jsonData = await data.json();

    /* 
        Pagination variable:
        - itemsPerPage:     Quantity of pokemon in each page. (default = 20) 
        - pageNumber:       Number of the current page.
        - totalPageNumber:  Number of the total pages.
    */
    const itemsPerPage: number = 20;
    const pageNumber: number = Number((await searchParams).page);
    const totalPageNumber: number = Math.ceil(jsonData.pokemon.length / itemsPerPage); 

    // Array with the pokemon corresponding to the current page. (lenght = itemsPerPage)
    const pagesPokemon: Pokemon[] = jsonData.pokemon.slice((pageNumber - 1) * itemsPerPage, pageNumber * itemsPerPage);

    // Return view with the Grid component (grid of pokemon) and Pagination component (buttons for previous and next page).
    return (
        <div className='flex flex-col justify-center content-center'>
            <div>
                <Grid pokemon={pagesPokemon} typeName={typeName} />
            </div>
            <div>
                <Pagination pageNumber={pageNumber} totalPageNumber={totalPageNumber} typeName={typeName} />
            </div>
        </div>
    );
};