import {createSlice} from "@reduxjs/toolkit"

const Cartslice=createSlice({
    name:"cartslice",
    initialState:{
        cart:[]
    },
    reducers:{
           firstadd:(state,action)=>{state.cart.push({...action.payload,quantity:1})},
           addition:(state,action)=>{const element=state.cart.find((item)=>item.id===action.payload.id)
            element.quantity+=1;
           },
           subtraction:(state,action)=>{
            const element=state.cart.find((item)=>item.id===action.payload.id);
            if(element.quantity>1){
                element.quantity-=1;
            }
            else{
            state.cart=state.cart.filter((items)=>items.id!=action.payload.id);
            }
           }
    }
})
export default Cartslice.reducer
export const {firstadd,addition,subtraction} =Cartslice.actions;