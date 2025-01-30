'use client'

import { usePathname, useRouter } from 'next/navigation';

export default function Pagination ( 
    { pageNumber, totalPageNumber, typeName }: { pageNumber: number, totalPageNumber: number, typeName: string } 
){
    /*
        The useRouter is a hook used for replace the current route with the route of the previous or next page, while 
        usePathname is a hook used for get the the current pathname need it for constructed the URL parameter of useRouter. 
    */
    const router = useRouter();
    const pathname = usePathname();

    // Variables that represent the previous and next page number.
    const previousPage: number = pageNumber - 1;
    const nextPage: number = pageNumber + 1;

    // When previous button or next button this handler will replace the URL according the clicked button.
    const handleClick = (newPage: number) => {
        router.replace(`${pathname}?page=${newPage}`);
    }

    /*
        It will return a flex row reverse with the previous button and the next button on it. Those buttons will trigger
        the handleClick with the number of the previous or next page respectively.
    */
    return (
        <div className='flex flex-row-reverse gap-4 pr-10 pb-10'>
            {
                pageNumber < totalPageNumber &&
                <div className={`justify-center content-center text-center rounded-lg transition delay-200 duration-300 ease-in-out text-palette-black bg-${typeName} hover:bg-opacity-50`}>
                    <button onClick={() => handleClick(nextPage)} className='lg:p-10 md:p-8 sm:p-4 p-4 lg:text-xl sm:text-md max-sm:text-xs italic font-sans font-semibold md:text-xl text-sm text-center'>
                        {`Next Page (${nextPage})`}
                    </button>
                </div>
            }
            {
                pageNumber > 1 &&
                <div className={`justify-center content-center text-center rounded-lg transition delay-200 duration-300 ease-in-out text-palette-black bg-${typeName} hover:bg-opacity-50`}>
                    <button onClick={() => handleClick(previousPage)} className='lg:p-10 md:p-8 sm:p-4 p-4 lg:text-xl sm:text-md max-sm:text-xs  italic font-sans font-semibold md:text-xl text-sm text-center'>
                        {`Previous Page (${previousPage})`}
                    </button>
                </div>
            }
        </div>
    );
};