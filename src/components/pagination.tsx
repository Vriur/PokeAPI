'use client'

import { usePathname, useRouter } from 'next/navigation';

/* This array is need it because Tailwind dump every class that wasn't hardcoded on the code. */
const typeBgColours = ['bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy', 'bg-stellar', 'bg-unknown'];

export default function Pagination ( 
    { pageNumber, totalPageNumber, typeName }: { pageNumber: number, totalPageNumber: number, typeName: string } 
){
    const router = useRouter();
    const pathname = usePathname();

    const previousPage: number = pageNumber - 1;
    const nextPage: number = pageNumber + 1;

    const handleClick = (newPage: number) => {
        router.replace(`${pathname}?page=${newPage}`);
    }

    return (
        <div className='flex flex-row-reverse gap-4 pr-10 pb-10'>
            {
                pageNumber < totalPageNumber &&
                <div className={`justify-center content-center text-center p-8 rounded-lg transition delay-200 duration-300 ease-in-out text-palette-black bg-${typeName} hover:bg-opacity-50`}>
                    <button onClick={() => handleClick(nextPage)} className='italic font-sans font-semibold md:text-xl text-sm text-center'>
                        {`Next Page (${nextPage})`}
                    </button>
                </div>
            }
            {
                pageNumber > 1 &&
                <div className={`justify-center content-center text-center p-8 rounded-lg transition delay-200 duration-300 ease-in-out text-palette-black bg-${typeName} hover:bg-opacity-50`}>
                    <button onClick={() => handleClick(previousPage)} className='italic font-sans font-semibold md:text-xl text-sm text-center'>
                        {`Previous Page (${previousPage})`}
                    </button>
                </div>
            }
        </div>
    );
};