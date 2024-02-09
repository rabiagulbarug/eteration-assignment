import {useState} from "react";
import {useUi} from "@/context/ui-context";
import {ProductSortBy} from "@/components/products/product-sort-by";
import {ProductBrands} from "@/components/products/product-brands";
import {ProductModels} from "@/components/products/product-models";
import {ServerTable} from "@/components/server-table/server-table";
import {useProductsListQuery} from "@/handlers/products/use-products";

export const Products = () => {
    const [filterModel, setFilterModel] = useState<string>('');
    const [brandFilter, setBrandFilter] = useState<string>('');
    const [sortOption, setSortOption] = useState<{column: string, order: string} | null>();
    const [filtersVisible, setFiltersVisible] = useState<boolean>(false)
    const {search} = useUi()

    const handleBrandsFilterChange = (selectedBrand: any) => {
        setBrandFilter(selectedBrand);
    };

    const handleModelsFilterChange = (selectedModel: any) => {
        setFilterModel(selectedModel);
    };

    const handleSortChange = (column: string, order: string) => {
        setSortOption({column, order});
    };

    return (
        <div className="flex flex-row flex-1 justify-center">
            <div className='flex flex-col lg:flex-row lg:w-[960px] justify-center w-full'>
                <div className="w-full lg:w-3/12">
                    <div className="lg:hidden flex flex-row mt-4">
                        <button type="button" onClick={() => setFiltersVisible(prev => !prev)} className="rounded bg-blue-600 text-white text-center p-4 flex-1">Filtre ve Sıralama</button>
                    </div>
                    <div className={`bg-white py-5 lg:pr-5 ${filtersVisible ? 'flex' : 'hidden'} lg:flex flex-col`}>
                        <ProductSortBy onSortChange={handleSortChange} />
                        <ProductBrands
                            filter={brandFilter}
                            setFilter={setBrandFilter}
                            onFilterChange={handleBrandsFilterChange}
                        />
                        <ProductModels
                            filter={filterModel}
                            setFilter={setFilterModel}
                            onFilterChange={handleModelsFilterChange}
                        />
                    </div>
                </div>
                <div className='w-full lg:w-9/12 flex justify-center lg:pl-5 py-5'>
                    <ServerTable
                        filters={{
                            brand: brandFilter,
                            model: filterModel,
                            search: search?.searchText && search.searchText.length > 3 ? search.searchText : ''
                        }}
                        sort={sortOption ? {column: sortOption.column, direction: sortOption.order} : undefined}
                        query={useProductsListQuery}
                    />
                </div>
            </div>
        </div>
    )
}
