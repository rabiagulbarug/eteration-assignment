import { useQuery } from '@tanstack/react-query';
import http from "@/utils/http";
import {API_ENDPOINTS} from "@/types/api-endpoint";
import {IdProps} from "@/types/types";

async function productDetail({ id }: IdProps) {
    return http.get(`${API_ENDPOINTS.PRODUCTS}/${id}`);
}

export const useProductDetailQuery = ({ id }: IdProps) => {
    return useQuery({
        queryKey: [API_ENDPOINTS.PRODUCTS, id],
        queryFn: () => productDetail({ id }),
    });
};
