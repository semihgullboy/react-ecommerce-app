import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { STATUS } from '../utils/status';

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productsDetail: [],
    productsDetailStatus: STATUS.IDLE
}

export const getProducts = createAsyncThunk("getproducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    return data;
})

export const getCategoryProduct = createAsyncThunk("getcategory", async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    const data = await response.json();
    return data;
})

export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`)
    const data = await response.json();
    return data;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.productsStatus = STATUS.LOADING
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.productsStatus = STATUS.FAIL;
        })
        builder.addCase(getDetailProduct.pending, (state) => {
            state.productsDetailStatus = STATUS.LOADING
        })
        builder.addCase(getDetailProduct.fulfilled, (state, action) => {
            state.productsDetailStatus = STATUS.SUCCESS
            state.productsDetail = action.payload
        })
        builder.addCase(getDetailProduct.rejected, (state) => {
            state.productsDetailStatus = STATUS.FAIL
        })
        builder.addCase(getCategoryProduct.pending, (state) => {
            state.productsStatus = STATUS.LOADING
        })
        builder.addCase(getCategoryProduct.fulfilled, (state, action) => {
            state.productsStatus = STATUS.SUCCESS;
            state.products = action.payload
        })
        builder.addCase(getCategoryProduct.rejected, (state) => {
            state.productsStatus = STATUS.FAIL;
        })
    }
})

export default productSlice.reducer