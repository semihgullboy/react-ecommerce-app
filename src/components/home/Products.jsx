import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProduct, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

function Products({ category, sort }) {

    const dispatch = useDispatch();
    const { products, productsStatus } = useSelector((state) => state.products);

    useEffect(() => {
        if (category) {
            dispatch(getCategoryProduct(category));
        } else {
            dispatch(getProducts());
        }
    }, [dispatch, category]);

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 6;
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <div className="p-5">
            {
                productsStatus === "LOADING" ?
                    <Loading /> :
                    <>
                        <div className="flex flex-wrap justify-center gap-6">
                            {
                                currentItems?.sort((a, b) => sort == "inc" ? a.price - b.price : sort == "dec" ? b.price - a.price : null)?.map((product, i) => (
                                    <Product key={i} product={product} />
                                ))
                            }
                        </div>

                        <ReactPaginate
                            className="paginate flex justify-center items-center mt-5 gap-2"
                            breakLabel="..."
                            nextLabel=">"
                            onPageChange={handlePageClick}
                            pageRangeDisplayed={5}
                            pageCount={pageCount}
                            previousLabel="<"
                            renderOnZeroPageCount={null}
                            activeClassName="bg-blue-500 text-white rounded px-3 py-1"
                            pageClassName="px-3 py-1 border rounded hover:bg-blue-100"
                            previousClassName="px-3 py-1 border rounded hover:bg-blue-100"
                            nextClassName="px-3 py-1 border rounded hover:bg-blue-100"
                        />
                    </>
            }
        </div>
    );
}

export default Products;
