import { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom'



const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        const fetchProduct = async () => {
            try{
                const response = await axios.get(`http://localhost:9000/products/${id}`)
                setProduct(response.data.product)
                setLoading(false)
            
            }catch(error){
                console.error(error)
            }
        }
        fetchProduct()
    }, [id])
    return (
        <div>
            <h1>{product.name}</h1>
            <img src= {product.image} />
            <p>{product.description}</p>
            <p>${product.value} USD</p>
        </div>
    )
}

export default ProductDetails