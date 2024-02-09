'use client'
import React, {useCallback, useState} from 'react';
import { TableProps } from "@/types/types";
import { SortOrder } from "@/types/list-query-params";
import {ProductCard} from "@/components/product-card/product-card";

export const ServerTable = ({ query, filters, id, sort: defaultSort }: TableProps) => {
    const [limit, setLimit] = useState(12);
    const [page, setPage] = useState(1);
    const sanitizedFilters = Object.entries(filters ?? {})
        .filter(([_, value]) => value && value.length)
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {} as { [key: string]: string });

    const { data: response } = query({
        sort: {
            sortBy: defaultSort?.column ?? 'createdAt',
            sortOrder: (defaultSort?.direction as SortOrder) ?? SortOrder.DESC,
        },
        filters: sanitizedFilters,
        limit,
        page,
        _id: id,
    });

    const getVisiblePageNumbers = useCallback(() => {
        const totalPages = response?.data?.length ?? 0;
        const currentPageNumber = page;
        const arrayRange = (start: number, stop: number) =>
            Array.from(
                { length: (stop - start) + 1 },
                (value, index) => start + index
            );
        return arrayRange(currentPageNumber - 1, currentPageNumber + 3,).filter(t => t > 0 && t <= totalPages);
    }, [response, page]);

    return (
        <div>
            <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
                {response?.data && response.data.map((product: any) => (
                    <ProductCard product={product} key={product.id} />
                ))}
            </div>
            <div className="mt-4 text-center mb-2 ">
                <button
                    onClick={() => setPage(page => Math.max(page - 1, 1))}
                    disabled={page === 1}
                    className="px-2 py-1 border rounded cursor-pointer"
                >
                    {'<'}
                </button>
                {getVisiblePageNumbers().map((targetPage, index) => (
                    <span
                        key={index}
                        onClick={() => {
                            if (typeof targetPage === 'number') {
                                setPage(targetPage);
                            }
                        }}
                        className={`mx-2 px-2 py-1 rounded cursor-pointer ${targetPage === page ? 'bg-blue-600 text-white' : ''}`}
                    >
                        {targetPage}
                    </span>
                ))}
                <button
                    onClick={() => setPage(page => Math.min(page + 1))}
                    disabled={page === response?.data}
                    className="px-2 py-1 border rounded cursor-pointer"
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};
