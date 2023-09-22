import { createSlice } from "@reduxjs/toolkit"

const formData = new FormData();

export const productImageSlice = createSlice({
    name : 'productImageSlice',
    initialState : { value: '' },
    reducers : {
        imagePre(state,payload){
            state.value = payload 
        }   
    }
})

export let { imagePre } = productImageSlice.actions;