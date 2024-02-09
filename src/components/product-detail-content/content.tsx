"use client";
import {useProductDetailQuery} from "@/handlers/products/use-product-detail";
import {useUi} from "@/context/ui-context";

export const Content = ({id}: {id: string}) => {
    const {data} = useProductDetailQuery({ id: String(id) })
    const {cart} = useUi()

    return (
        <div className="flex flex-row justify-center pt-4">
            {data?.data && (
                <div className="flex flex-row lg:w-[960px] border">
                    <div className='w-1/2 '>
                        <img src={data.data.image} alt="Detail"/>
                    </div>
                    <div className='w-1/2 px-4 flex flex-col justify-between'>
                        <div className='flex flex-col' >
                            <span>{data.data.model}</span>
                            <span className='text-blue-600'>{data.data.price}</span>
                        </div>
                        <div className='flex bg-blue-600 rounded-sm text-white h-9 justify-center items-center'>
                            <button onClick={() => cart?.addItemToCart && cart.addItemToCart(data.data)}>Add to Cart</button>
                        </div>
                        <div className='mb-0 text-sm'>
                            {data.data.description}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
