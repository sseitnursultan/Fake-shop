import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import ProductComponent from "./productComponent";
import axios from "axios";
import {setProducts} from "../redux/actions/productActions";


const ProductListing = () => {

    const products = useSelector((state) => state)
    const dispatch = useDispatch()

    const fetchProducts = async () => {
        const response = await axios.get('https://fakestoreapi.com/products').catch((err)=>{
            console.log('error')
        })
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchProducts()
    })
    return (
        <div className='ui grid container'>
            <ProductComponent/>
        </div>
    )
}

export default ProductListing