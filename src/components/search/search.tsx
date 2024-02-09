import React from 'react';
import {useUi} from "@/context/ui-context";

export const Search = () => {
    const {search} = useUi()
    return (
        <div className='flex flex-row rounded-lg relative flex-1 max-w-[400px]'>
            <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                <img src='/assets/svg/search.svg' alt='Search Icon' width={15} />
            </div>
            <input
                className='w-full h-9 block p-4 ps-10 bg-white'
                type='text'
                placeholder='Search'
                value={search?.searchText}
                onChange={(e) => search?.setSearchText(e.target.value)}
            />
        </div>
    );
};
