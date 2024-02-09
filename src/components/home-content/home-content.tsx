"use client";
import {Header} from "@/components/header/header";
import {Products} from "@/components/products/products";

export function HomeContent() {
    return (
        <div className='flex flex-col'>
            <Header/>
            <div className="p-5 lg:p-0">
                <Products/>
            </div>
        </div>
    )
}
