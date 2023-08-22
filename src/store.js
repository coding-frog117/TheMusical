import {configureStore, createSlice} from '@reduxjs/toolkit'

const userId = createSlice({
    name : 'id',
    initialState : {name : 'kim', age : 20},
    reducers :{
        changename(state){
             state.name = 'john kim'
        },

        increase(state,action){
            state.age += action.payload
        }
    }
})

export let { changename,increase } = userId.actions

const password = createSlice({
    name : 'pw',
    initialState : 1234,
})

const cartData = createSlice({
    name: 'cart',
    initialState : [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}
      ] 
})
export default configureStore({
    reducer : {
        userId : userId.reducer,
        password : password.reducer,
        cart : cartData.reducer,

    }
})
