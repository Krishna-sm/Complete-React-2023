import { createSlice } from '@reduxjs/toolkit'



export const ProductSlice = createSlice({
    name:'product',
    initialState:{
        cart: JSON.parse(localStorage.getItem("cart")) ||  []
    },
    reducers:{
        addToCart:(state,action)=>{

            const existData = state.cart.find((cur)=>cur.id===action.payload.id);
            if(existData)
            {
                 state.cart = state.cart.map((cur)=>{
                    if(cur.id===action.payload.id){
                            cur.qty +=1
                    }
                    return cur
                })
            localStorage.setItem("cart", JSON.stringify(state.cart))

                return 
            }
        //    const item = {
        //     ...action.payload,
        //     qty:1
        //    }
             state.cart.push({...action.payload,'qty':1});
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        incrementIntoCart:(state,action)=>{
            const existData = state.cart.find((cur)=>cur.id===action.payload);
            if(existData)
            {
                 state.cart = state.cart.map((cur)=>{
                    if(cur.id===action.payload){
                            cur.qty +=1
                    }
                    return cur
                })
            localStorage.setItem("cart", JSON.stringify(state.cart))

                return 
            }
        },

        minusIntoCart:(state,action)=>{
            const existData = state.cart.find((cur)=>cur.id===action.payload);
            if(existData.qty<1|| existData.qty===1){
                state.cart = state.cart.filter((c)=>c.id!==action.payload);
                localStorage.setItem("cart", JSON.stringify(state.cart))
            }
            if(existData)
            {

                

                 state.cart = state.cart.map((cur)=>{
                    if(cur.id===action.payload){
                            cur.qty -=1;
                    }
                    return cur
                })
            localStorage.setItem("cart", JSON.stringify(state.cart))

                return 
            }
        },
       
        deleteItem:(state,action)=>{
            state.cart = state.cart.filter((c)=>c.id!==action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        placeOrder :(state,action)=>{
            console.log({data:action.payload});
            state.cart = []
            localStorage.setItem("cart", JSON.stringify([]))
        }
       
    }
})

// Action creators are generated for each case reducer function
export const { addToCart,incrementIntoCart,minusIntoCart,deleteItem,placeOrder} = ProductSlice.actions
