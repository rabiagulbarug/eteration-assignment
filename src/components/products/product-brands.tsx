import React, {useState} from "react";
import {FilterProps, ProductBrandsProps} from "@/types/types";
import {Search} from "@/components/search/search";

export const ProductBrands = ({onFilterChange}: FilterProps) => {
    const [search, setSearch] = useState<string>('');
    const [productBrands, setProductBrands] = useState<ProductBrandsProps>({
        smart: false,
        lamborghini: false,
        ferrari: false,
        volkswagen: false,
        mercedes: false,
        tesla: false,
        fiat: false,
        land: false,
        nissan: false,
        maserati: false,
        bugatti: false,
        aston: false,
        chevrolet: false,
        honda: false,
        rolls: false,
        audi: false,
        cadillac: false,
        kia: false,
        hyundai: false,
        polestar: false,
        mini: false,
        mazda: false,
        dodge: false,
        bmw: false,
        jeep: false,
        ford: false,
    });

    const productBrandLabels: { [key in keyof ProductBrandsProps]: string } = {
        smart: 'Smart',
        lamborghini: 'Lamborghini',
        ferrari: 'Ferrari',
        volkswagen: 'Volkswagen',
        mercedes: 'Mercedes',
        tesla: 'Tesla',
        fiat: 'Fiat',
        land: 'Land',
        nissan: 'Nissan',
        maserati: 'Maserati',
        bugatti: 'Bugatti',
        aston: 'Aston Martin',
        chevrolet: 'Chevrolet',
        honda: 'Honda',
        rolls: 'Rolls Royce',
        audi: 'Audi',
        cadillac: 'Cadillac',
        kia: 'Kia',
        hyundai: 'Hyundai',
        polestar: 'Polestar',
        mini: 'Mini',
        mazda: 'Mazda',
        dodge: 'Dodge',
        bmw: 'BMW',
        jeep: 'Jeep',
        ford: 'Ford',
    };

    const handleCheckboxChange = (checkboxType: keyof ProductBrandsProps) => {
        setProductBrands((prevState) => {
            const updatedState = {
                ...prevState,
                [checkboxType]: !prevState[checkboxType],
            };
            const selectedBrand = Object.keys(updatedState).filter(
                (brand) => updatedState[brand as keyof ProductBrandsProps]
            );
            onFilterChange(selectedBrand.join("|"));
            return updatedState;
        });
    };

    return (
        <div>
            <div className='border flex flex-col p-5 h-[200px] bg-white w-full overflow-hidden shadow-lg mb-4'>
                <div className="flex flex-row mb-4">
                    <span className="text-sm font-semibold">Brands</span>
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
                    {Object.keys(productBrands).map((brand, index) => {
                        const brandLabel = productBrandLabels[brand as keyof ProductBrandsProps];
                        const isVisible = brandLabel.toLowerCase().includes(search.toLowerCase());

                        return (
                            isVisible && (
                                <label key={index} className='p-2 flex items-center'>
                                    <input
                                        className="mr-2"
                                        type="checkbox"
                                        checked={productBrands[brand as keyof ProductBrandsProps]}
                                        onChange={() => {
                                            handleCheckboxChange(brand as keyof ProductBrandsProps);
                                        }}
                                    />
                                    <span className="text-gray-800 text-sm cursor-pointer">
                                        {brandLabel}
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
