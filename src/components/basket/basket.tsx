import {useState} from "react";
import {useUi} from "@/context/ui-context";

export const Basket = () => {
    const {cart} = useUi()
    return cart ? (
        <div className='flex flex-col'>
            <div className='border p-3 max-w-screen-lg'>
                {cart.items.map(item => (
                    <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between" key={item.product.id}>
                        <div className="flex items-center">
                            <span className="mr-2">{item.product.name}</span>
                        </div>
                        <div className="flex items-center">
                            <button className="bg-[#F6F6F6] h-6 w-6"
                                    onClick={() => cart.setItemQuantity(item.product.id, item.quantity - 1)}>-
                            </button>
                            <span className=' text-white flex justify-center bg-blue-600 h-6 w-6'>{item.quantity}</span>
                            <button className=" bg-[#F6F6F6] h-6 w-6"
                                    onClick={() => cart.setItemQuantity(item.product.id, item.quantity + 1)}>+
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-col border mt-5 p-3 shadow-md'>
                <div className='flex flex-col sm:flex-row py-3 '>
                  <span className='sm:mr-4'>
                    Total Price:
                  </span>
                    <span className='text-blue-600'>
                    {cart.totalAmount} ₺
                  </span>
                </div>
                <div className='flex bg-blue-600 rounded-sm text-white h-9 justify-center items-center'>
                    <button className='w-full sm:w-auto'>Checkout</button>
                </div>
            </div>
        </div>
    ) : null;
};
