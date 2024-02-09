export type Filter = {
    [key: string]: string;
};

export enum SortOrder {
    ASC = 'asc',
    DESC = 'desc',
}

export type Sort = {
    sortBy: string;
    sortOrder?: SortOrder;
};

export type ListQueryParams = {
    filters?: Filter;
    sort?: Sort;
    page: number;
    limit: number;
    _id?: string;
};


export const listQueryString = (params: ListQueryParams) => {
    const searchParams = new URLSearchParams();
    searchParams.set('page', params.page.toString());
    if (params.limit) {
        searchParams.set('limit', params.limit.toString());
    }
    if (params.sort && params.sort.sortBy) {
        searchParams.set('sortBy', params.sort.sortBy);
        if (params.sort.sortOrder) {
            searchParams.set('order', params.sort.sortOrder);
        }
    }

    Object.keys(params.filters ?? {}).forEach((key) => {
        if(params.filters) {
            const value = params.filters[key];
            searchParams.append(key, value)
        }
    })

    return searchParams.toString();
};
