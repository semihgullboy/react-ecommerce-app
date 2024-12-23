import SliderComp from "../components/home/SliderComp"
import Sorting from "../components/home/Sorting"
import Category from "../components/home/Category"
import Products from "../components/home/Products"
import { useState } from "react";

function Home() {

    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");

    return (
        <div>
            <SliderComp />
            <Sorting setSort={setSort} />
            <div className="flex">
                <Category setCategory={setCategory} />
                <Products category={category} sort={sort} />
            </div>
        </div>
    )
}

export default Home