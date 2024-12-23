import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem("cart");
    if (cart) {
        try {
            return JSON.parse(cart);
        } catch (error) {
            console.error("localStorage verisi JSON formatında değil:", error);
            return [];
        }
    } else {
        return [];
    }
};

const storeLocalStorage = (data) => {
    localStorage.setItem("cart", JSON.stringify(data));
};


const initialState = {
    carts: fetchFromLocalStorage(),
    itemCount: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const isItemCart = state.carts.find(item => item.id === action.payload.id)
            if (isItemCart) {
                const tempCart = state.carts.map(item => {
                    if (item.id == action.payload.id) {
                        let tempQty = item.quantity + action.payload.quantity;
                        let tempPrice = item.price * tempQty;
                        return {
                            ...item, quantity: tempQty, totalPrice: tempPrice
                        }
                    } else {
                        return item
                    }
                })
                state.carts = tempCart;
                storeLocalStorage(state.carts);
            } else {
                state.carts.push(action.payload);
                storeLocalStorage(state.carts);
            }
        },
        removeFromCart: (state, action) => {
            const tempCart = state.carts.filter(item => item.id !== action.payload);
            state.carts = tempCart;
            storeLocalStorage(state.carts);
        },
        clearCart: (state) => {
            state.carts = [];
            storeLocalStorage(state.carts);
        },
        getCartTotal: (state) => {
            if (!Array.isArray(state.carts)) {
                state.carts = [];
            }
            state.totalAmount = state.carts.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.price * cartItem.quantity
            }, 0);
            state.itemCount = state.carts.length;
        }

    }
})

export const { addToCart, removeFromCart, clearCart, getCartTotal } = cartSlice.actions
export default cartSlice.reducer