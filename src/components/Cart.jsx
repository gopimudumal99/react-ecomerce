import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addToCart,delToCart } from '../redux/action'
function Cart() {
    const product = useSelector((state) => state.Reducer)
    const dispatch = useDispatch()
    const isEmpty = useRef(false)
    if (product.length === 0) {
        isEmpty.current = true
    } else { 
        isEmpty.current = false
    }

    const handleBtn = (e, product) => {
      if (e.target.outerText === "+") {
        console.log("plus");
        dispatch(addToCart(product));
      } else {
          dispatch(delToCart(product));
      }
    };

  return isEmpty.current ? (
    "No items"
  ) : (
    <div>
      {product.map((product) => {
        return (
          <div className="flex" key={product.id}>
            <div>
              <img src={product.image} alt="" />
            </div>
            <div>
              <h3>{product.title.substring(0, 12)}</h3>
              <h4>
                qty: {product.qty} X ${product.price} = $
                {product.qty * product.price}
              </h4>
              <button onClick={(e) => handleBtn(e, product)}>+</button>
              <button onClick={(e) => handleBtn(e, product)}>-</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cart