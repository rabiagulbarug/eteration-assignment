"use client";
import { useParams } from "next/navigation";
import {Content} from "@/components/product-detail-content/content";

const ProductDetail = () => {
    const params = useParams();

    return <Content id={params.id as string} />
}

export default ProductDetail;
