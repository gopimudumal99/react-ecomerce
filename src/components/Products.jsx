import React, { useState,useEffect,useContext, useRef}from 'react'
import { AuthContext } from './../contexts/LoginProvider';
import {addToCart,delToCart} from "../redux/action"
import {useDispatch,useSelector} from "react-redux"

function Products() {
    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)
    const { isAuth } = useContext(AuthContext)
    const dispatch = useDispatch()
    let dataIsMoutend = useRef(true)
    useEffect(() => { 
        const getData = async () => { 
            setLoading(true)
            if (dataIsMoutend.current) { 
                let res = await fetch("https://fakestoreapi.com/products");
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false)
            }
            return () => { 
              dataIsMoutend.current = false
            }
        }
        getData()
    },[])

    const addItem = (product) => { 
        dispatch(addToCart(product))
        // console.log(product)
    }

    const ShowProduct = () => { 
      return  <div className='grid-container'>{filter.map((product) => { 
            return (
              <div key={product.id}>
                <img src={product.image} alt={product.title} />
                <h3>Title: {product.title.substring(0, 12)}...</h3>
                <h4>Price: ${product.price}</h4>
                <p>rate: {product.rating.rate}</p>
                <button onClick={()=>addItem(product)} className='li1'>Buy Now</button>
              </div>
            );
        })}</div>;
    }

    const selectCat = (e) => { 
        let cat = e.target.outerText.toLowerCase();
        if (cat === "all") {
            setFilter(data);
        } else { 
            let updateList =  data.filter((x) => x.category === cat)
            setFilter(updateList)
        }
    }

    return isAuth ?  loading ? (
      <h3>Loading...</h3>
    ) : (
      <div>
    <ul onClick={(e)=>selectCat(e)} style={{ display: "flex", justifyContent: "space-around", marginTop: "80px" }}>
          <li  className='li1'>All</li>                
          <li  className='li1'>Men's clothing</li>
          <li className='li1'>Women's clothing</li>
          <li className='li1'>Electronics</li>
          <li className='li1'>Jewelery</li>
    </ul>
        <ShowProduct/>
      </div>
    ) : (
            "Please Login"
    )
}

export default Products