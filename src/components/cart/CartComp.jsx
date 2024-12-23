import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlice";

function CartComp({ cart }) {
    const dispatch = useDispatch();

    const handleRemove = (id) => {
        dispatch(removeFromCart(id));
        window.location.reload();
    };

    return (
        <div className="my-10 flex items-center justify-between">
            <img className="w-[150px] h-[150px]" src={cart?.image} alt="" />
            <div className="w-[476px]">
                <div className="text-xl">{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div className="font-bold text-2xl">{cart?.price} ₺</div>
            <div className="font-bold text-2xl">{cart?.quantity} </div>
            <div
                onClick={() => handleRemove(cart?.id)}
                className="bg-red-500 text-white w-[150px] text-2xl cursor-pointer rounded-md h-16 flex items-center justify-center"
            >
                Ürünü Sil
            </div>
        </div>
    );
}

export default CartComp;
