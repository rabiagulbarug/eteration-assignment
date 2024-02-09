"use client";
import {useProductDetailQuery} from "@/handlers/products/use-product-detail";
import {Header} from "@/components/header/header";
import {Basket} from "@/components/basket/basket";

export const Content = ({id}: {id: string}) => {
    const {data} = useProductDetailQuery({ id: String(id) })

    return (
        <div className='flex flex-col'>
            <Header />
            <div className='flex flex-row p-6 mt-10'>
                <div className="flex flex-row justify-end w-7/12 m-auto mr-0 p-2 border  ">
                    <div className='w-1/2 '>
                        <img src={data?.data?.image} alt="Detail"/>
                    </div>
                    <div className='w-1/2 px-4 flex flex-col justify-between'>
                        <div className='flex flex-col' >
                            <span>{data?.data?.model}</span>
                            <span className='text-blue-600'>{data?.data?.price}</span>
                        </div>
                        <div className='flex bg-blue-600 rounded-sm text-white h-9 justify-center items-center'>
                            <button>Add to Cart</button>
                        </div>
                        <div className='mb-0 text-sm'>
                            {data?.data?.description}
                        </div>
                    </div>
                </div>
                <div className='w-4/12 flex-row justify-center flex ml-4'>
                    <Basket/>
                </div>
            </div>
        </div>
    )
}
