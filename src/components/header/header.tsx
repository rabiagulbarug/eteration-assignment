'use client'
import {Search} from "@/components/search/search";
import {useUi} from "@/context/ui-context";
import {Basket} from "@/components/basket/basket";

export const Header = () => {
    const {cart} = useUi()

    return (
        <div className='bg-blue-600 flex justify-center items-center'>
            <div className='py-3 flex flex-row justify-center lg:w-[960px] items-center'>
                <div className='flex flex-row'>
                    <span className="text-white font-bold">
                        Eteration
                    </span>
                </div>
                <div className="flex flex-row flex-1 lg:justify-between lg:pl-4">
                    <Search />
                    <div className="relative">
                        <span className='text-white select-none' role="button" onClick={() => cart?.toggleVisible()}>Sepet: {cart?.totalAmount || 'Boş'}</span>
                        <div className={`absolute bg-white p-4 right-0 border border-zinc-400 w-[300px] rounded shadow-lg drop-shadow-lg top-[56px] ${cart?.isVisible ? 'block' : 'hidden'}`}>
                            <Basket />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
