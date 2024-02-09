import React, {useState} from "react";
import {FilterProps, ProductModelsProps} from "@/types/types";
import {Search} from "@/components/search/search";

export const ProductModels = ({onFilterChange}: FilterProps) => {
    const [search, setSearch] = useState<string>('');
    const [productModels, setProductModels] = useState<ProductModelsProps>({
        cts: false, roadster: false, taurus: false,
        jetta: false, fortwo: false, A4: false, 'F-150': false,
        Corvette: false, Ranchero: false, Colorado: false, '911': false,
        Altima: false,
        Mercielago: false,
        Land: false,
        Model: false,
        Accord: false,
        Volt: false,
        Mustang: false,
        Golf: false,
        Malibu: false,
        Roadster: false,
        Alpine: false,
        Wrangler: false,
        Caravan: false,
        Silverado: false,
        Explorer: false,
        ATS: false,
        Jetta: false,
        '2': false,
        Cherokee: false,
        '1': false,
        LeBaron: false,
        V90: false,
        Charger: false,
        Camry: false,
        Spyder: false,
        Expedition: false,
        Impala: false,
        Fiesta: false,
        Cruze: false,
        Camino: false,
        Element: false,
        XTS: false,
    });

    const productModelLabels: { [key in keyof ProductModelsProps]: string } = {
        cts: 'Cts',
        roadster: 'Roadster',
        taurus: 'Taurus',
        jetta: 'Jetta',
        fortwo: 'Fortwo',
        A4: 'A4',
        'F-150': 'F-150',
        Corvette: 'Corvette',
        Ranchero: 'Ranchero',
        Colorado: 'Colorado',
        '911': '911',
        Altima: 'Altima',
        Mercielago: 'Mercielago',
        Land: 'Land',
        Model: 'Model',
        Accord: 'Accord',
        Volt: 'Volt',
        Mustang: 'Mustang',
        Golf: 'Golf',
        Malibu: 'Malibu',
        Roadster: 'Roadster',
        Alpine: 'Alpine',
        Wrangler: 'Wrangler',
        Caravan: 'Caravan',
        Silverado: 'Silverado',
        Explorer: 'Explorer',
        ATS: 'ATS',
        Jetta: 'Jetta',
        '2': '2',
        Cherokee: 'Cherokee',
        '1': '1',
        LeBaron: 'LeBaron',
        V90: 'V90',
        Charger: 'Charger',
        Camry: 'Camry',
        Spyder: 'Spyder',
        Expedition: 'Expedition',
        Impala: 'Impala',
        Fiesta: 'Fiesta',
        Cruze: 'Cruze',
        Camino: 'Camino',
        Element: 'Element',
        XTS: 'XTS',
    };

    const handleCheckboxChange = (checkboxType: keyof ProductModelsProps) => {
        setProductModels((prevState) => {
            const updatedState = {
                ...prevState,
                [checkboxType]: !prevState[checkboxType],
            };
            const selectedModel = Object.keys(updatedState).filter(
                (model) => updatedState[model as keyof ProductModelsProps]
            );
            onFilterChange(selectedModel.join("|"));
            return updatedState;
        });
    };

    return (
        <div>
            <div className='border flex flex-col p-5 h-[200px] shadow-md w-full bg-white mb-4'>
                <div className="flex flex-row mb-4">
                    <span className="text-sm font-semibold">Modeller</span>
                </div>
                <div>
                    <div className='flex flex-row rounded-lg relative flex-1 max-w-[400px]'>
                        <div className='absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none'>
                            <img src='/assets/svg/search.svg' alt='Search Icon' width={15} />
                        </div>
                        <input
                            className='w-full h-9 block p-4 ps-10 bg-white'
                            type='text'
                            placeholder='Search'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col overflow-y-scroll">
                    {Object.keys(productModels).map((model, index) => {
                        const modelLabel = productModelLabels[model as keyof ProductModelsProps];
                        const isVisible = modelLabel.toLowerCase().includes(search.toLowerCase());

                        return (
                            isVisible && (
                                <label key={index} className='p-2 flex items-center'>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        checked={productModels[model as keyof ProductModelsProps]}
                                        onChange={() => {
                                            handleCheckboxChange(model as keyof ProductModelsProps);
                                        }}
                                    />
                                    <span className="text-gray-800 text-sm cursor-pointer">
                                        {modelLabel}
                                    </span>
                                </label>
                            )
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
