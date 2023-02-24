import React, { createContext,useContext,useReducer } from 'react';
import {faker} from "@faker-js/faker";
import { cartReducer } from './Reducers';
import {productReducer} from "./Reducers"
const Cart = createContext();
faker.seed(11);
function Context({children}) {
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.animals(),
        inStock: faker.random.numeric([0,5]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.numeric([4,5,6,9]),
        //  qty : faker.random.numeric({ min: 1, max: 10 })
      }));

     const [state, dispatch] = useReducer(cartReducer,{
        products,
        Cart : []
     })

     const [productState, productDispatch] = useReducer(productReducer, {
        byStock : false,
        byFastDelivery : false,
        byRating : 0,
        searchQuery : ""
     })
  return (
    <Cart.Provider
        value={{state,dispatch, productState, productDispatch }}
    >
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
    return useContext(Cart)
}