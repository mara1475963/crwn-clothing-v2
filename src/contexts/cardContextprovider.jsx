import { createContext, useState} from "react"

export const CartContext = createContext({
    isCartOpen:false,
    setIsCartOpen: ()=>{},
    cartItems: [],
    addItemToCart: ()=>{},
})


const addCartItems = (cartItems,productToAdd)=>{
    for(let el of cartItems) {
        if(el.id === productToAdd.id){
            el.quantity++;
            return [...cartItems];
        }
    };

    productToAdd['quantity'] = 1;
    cartItems.push(productToAdd);

    return  [...cartItems];;
}

export const CartContextProvider = ({children})=>{
    const [isCartOpen,setIsCartOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);
    
    const addItemToCart = (productToAdd)=>{
        setCartItems(addCartItems(cartItems,productToAdd))
    }
    const value = {cartItems, isCartOpen, setIsCartOpen, addItemToCart}

    return <CartContext.Provider value= {value}>{children}</CartContext.Provider>
}
