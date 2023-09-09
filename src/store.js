import {configureStore, createSlice} from '@reduxjs/toolkit'

const userToken = createSlice({
    name : 'token',
    initialState : {value : ''},
    reducers :{
        depositToken(state, a){
             state.value = a.payload
        },
    }
})

export let { depositToken } = userToken.actions

export default configureStore({
    reducer : {
        userToken : userToken.reducer,

    }
})
