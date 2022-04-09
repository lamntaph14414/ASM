import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { create, list, remove, update } from "../../api/categoryProduct"

export const listCate = createAsyncThunk(
    "category/getCategory",
    async () =>{
        const {data} = await list()
        return data;
    }
)

export const addCate = createAsyncThunk(
    "category/add",
    async (category) => {
        const {data} = await create(category)
        return data
    }
)

export const updateCate = createAsyncThunk(
    "category/update",
    async (category) => {
        const {data} = await update(category)
        return data
    }
)

export const removeCate = createAsyncThunk(
    "category/remove",
    async (id) => {
        const {data} = await remove(id)
        return data
    }
)

const categorySlice = createSlice({
    name: "category",
    initialSate: {
        value: []
    },
    extraReducers: (builder) => {
        builder.addCase(listCate.fulfilled, (state, action) =>{
            state.value = action.payload
        });
        builder.addCase(removeCate.fulfilled, (state, action)=>{
            state.value = state.value.filter(item => item._id !== action.payload._id)
        });
        builder.addCase(updateCate.fulfilled, (state, action)=>{
            state.value = state.value.map(item._id === action.payload._id ? action.payload : item)
        })
    }
})
export default categorySlice.reducer