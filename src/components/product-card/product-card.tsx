import Link from "next/link";
import {Product} from "@/types/types";
import {useUi} from "@/context/ui-context";
interface ProductCardProps {
    product: Product;
}
export const ProductCard = ({product}: ProductCardProps) => {
    const {cart} =  useUi()
    return (
        <div className="flex flex-col shadow-lg rounded p-2 border-zinc-400 border">
            <Link href={`/products/${product.id}`}>
                <img
                    src={product.image}
                    alt={product.name}
                    height={100}
                    className='object-cover w-full'
                />
            </Link>
            <span className="text-blue-600">{product.price} ₺</span>
            <div className="flex flex-row h-14">
                <span className="text-gray-800 font-bold">{product.name}</span>
            </div>
            <button
                type='button'
                onClick={() => cart?.addItemToCart && cart.addItemToCart(product)}
                className='border rounded-md h-9 w-full bg-blue-600 text-white flex items-center justify-center'>
                Add to Cart
            </button>
        </div>
    )
}
