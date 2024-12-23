import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/productSlice";
import DetailComp from "../components/detail/DetailComp";
import Loading from "../components/Loading";


function Detail() {

    const { id } = useParams();
    const dispatch = useDispatch();

    const { productsDetail, productsDetailStatus } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [dispatch, id]);

    return (
        <div>
            {
                productsDetailStatus === "LOADING" ? <Loading /> :
                    <DetailComp productDetail={productsDetail} />
            }
        </div>
    )
}

export default Detail