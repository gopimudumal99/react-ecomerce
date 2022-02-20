import { ADD_ITEM, DEL_ITEM } from "./actionTypes";

export const addToCart = (payload) => { 
    return {type:ADD_ITEM,payload}
} 

export const delToCart = (payload) => { 
    return {type:DEL_ITEM,payload}
}