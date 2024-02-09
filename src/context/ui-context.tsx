import {Product} from "@/types/types";
import {createContext, PropsWithChildren, useCallback, useContext, useEffect, useMemo, useState} from "react";

interface UiContextType {
    search?: {
        searchText: string
        setSearchText: (text: string) => void
    }
    cart?: {
        isVisible: boolean
        totalAmount: number
        items: { product: Product, quantity: number }[]
        addItemToCart: (product: Product) => void
        setItemQuantity: (id: string, quantity: number) => void
        removeItemFromCart: (id: string) => void
        toggleVisible: () => void
        show: () => void
        hide: () => void
    }
}

export const UiContext = createContext<UiContextType>({})
let persistedItems: {product: Product, quantity: number}[] = []
if (typeof localStorage !== "undefined") {
    persistedItems = JSON.parse(localStorage.getItem('cart') ?? '[]') ?? []
}

function useProvideUiContext(): UiContextType {
    const [searchText, setSearchText] = useState<string>('')
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [items, setItems] = useState<{ product: Product, quantity: number }[]>(persistedItems)
    const totalAmount = useMemo(() => items.reduce((acc, item) => {
        return acc + (item.quantity * Number(item.product.price))
    }, 0), [items])
    const hide = () => setIsVisible(false)
    const show = () => setIsVisible(true)
    const toggleVisible = () => setIsVisible(prev => !prev)

    const itemsUpdated = useCallback(() => {
        if (typeof localStorage !== "undefined") {
            localStorage.setItem('cart', JSON.stringify(items))
        }
    }, [items])

    useEffect(() => {
        itemsUpdated()
    }, [items, itemsUpdated])

    const addItemToCart = (product: Product) => {
        setItems(items => {
            const oldItem = items.find(t => t.product.id === product.id)
            if (oldItem) {
                return [...items.filter(t => t.product.id !== product.id), {...oldItem, quantity: oldItem.quantity + 1}]
            }
            return [...items, {product, quantity: 1}]
        })
    }

    const removeItemFromCart = (id: string) => setItems(items => [...items.filter(t => t.product.id !== id)])
    const setItemQuantity = (id: string, quantity: number) => {
        setItems(items => {
            const oldItem = items.find(t => t.product.id === id)
            if (oldItem) {
                return quantity > 0 ?
                    [...items.filter(t => t.product.id !== id), {...oldItem, quantity: quantity}]
                    : [...items.filter(t => t.product.id !== id)]
            }
            return items
        })
    }

    return {
        search: {
            searchText,
            setSearchText
        },
        cart: {
            isVisible,
            items,
            totalAmount,
            addItemToCart,
            removeItemFromCart,
            setItemQuantity,
            hide,
            show,
            toggleVisible,
        }
    }
}

export const useUi = () => useContext(UiContext);

export const UiContextProvider = ({children}: PropsWithChildren) => {
    const context = useProvideUiContext()
    return (
        <UiContext.Provider value={context}>
            {children}
        </UiContext.Provider>
    )
}
