import {useQuery} from "@tanstack/react-query";
import axios, {AxiosResponse} from "axios";
import {ListQueryParams, listQueryString} from "@/types/list-query-params";
import http from "@/utils/http";
import {API_ENDPOINTS} from "@/types/api-endpoint";


async function productsList(params: ListQueryParams) {
    return await http.get(`${API_ENDPOINTS.PRODUCTS}?${listQueryString(params)}`);

}

export const useProductsListQuery = ({filters, sort, page, limit}: ListQueryParams) => {
    return useQuery<AxiosResponse>({
            queryKey: [API_ENDPOINTS.PRODUCTS, filters, sort, page, limit],
            queryFn: () => productsList({filters, sort, page, limit})
        }
    )
};
