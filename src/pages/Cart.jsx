import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartTotal } from "../redux/cartSlice";
import CartComp from "../components/cart/cartComp";

function Cart() {
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)

    console.log(carts, totalAmount, itemCount, "carts")

    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    return (
        <div>
            {
                carts.length > 0 ?
                    <div>
                        {
                            carts?.map((cart, i) => (
                                <CartComp key={i} cart={cart} />
                            )
                            )
                        }
                        <div className="flex items-center justify-end text-2xl">Toplam Tutar: <span className="font-bold text-3xl ml-2 ">{totalAmount} ₺</span></div>
                    </div> :
                    <div>
                        Sepet Boş
                    </div>
            }
        </div>
    )
}

export default Cart