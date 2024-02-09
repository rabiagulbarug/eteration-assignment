import {useState} from "react";

export const Basket = () => {
    const [quantity, setQuantity] = useState(0);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    return (
        <div className='flex flex-col'>
            <div className='border p-3 max-w-screen-lg'>
                <div className="flex flex-col sm:flex-row md:flex-row items-center justify-between">
                    <div className="flex items-center">
                        <span className="mr-2">name</span>
                    </div>
                    <div className="flex items-center">
                        <button className="bg-[#F6F6F6] h-6 w-6" onClick={decreaseQuantity}>-</button>
                        <span className=' text-white flex justify-center bg-blue-600 h-6 w-6'>{quantity}</span>
                        <button className=" bg-[#F6F6F6] h-6 w-6" onClick={increaseQuantity}>+</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col border mt-5 p-3 shadow-md'>
                <div className='flex flex-col sm:flex-row py-3 '>
                  <span className='sm:mr-4'>
                    Total Price:
                  </span>
                            <span className='text-blue-600'>
                    112.000 ₺
                  </span>
                </div>
                <div className='flex bg-blue-600 rounded-sm text-white h-9 justify-center items-center'>
                    <button className='w-full sm:w-auto'>Checkout</button>
                </div>
            </div>
        </div>
    );
};
