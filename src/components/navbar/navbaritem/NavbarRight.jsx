import { useEffect } from "react";
import { BiSearch, BiHeart } from "react-icons/bi";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cartSlice";
import { useNavigate } from "react-router-dom";

function NavbarRight() {

    const dispatch = useDispatch()
    const { carts } = useSelector(state => state.carts)
    const navigate = useNavigate()


    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])

    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center border p-3 rounded-full bg-gray-200">
                <input className="bg-gray-200 outline-none" type="text" placeholder="Arama Yapınız..." />
                <BiSearch fontSize={28} />
            </div>
            <BiHeart fontSize={28} />
            <div onClick={() => navigate("cart")} className="relative">
                <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{carts?.length}</div>
                <SlBasket fontSize={28} />
            </div>
        </div>
    )
}

export default NavbarRight