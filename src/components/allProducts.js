import axios from 'axios'
import { useEffect, useState } from 'react'
import PrincipalBanner from './principalBanner'
import '../stylesheets/allproducts.css'
function AllProducts(){

    let [products, setProducts] = useState([])
    
     useEffect(()=>{
        axios.get('http://localhost:9000/products')

        .then((response)=>{
           
            setProducts(response.data.products)
            
        })
     } ,[] )
    return (
        <div >
        <PrincipalBanner />
            <div className='home'>
                <div>
                    <h1>All products</h1>
                </div>
                <div className= 'allProductsBoard'>
                {products.map(product => {
                    return (
                            <div className='productSquare'>
                                <img src= {product.image} alt= 'crema' />
                                <div>
                                    <p className='productName'>{product.name}</p>
                                    <p className='productValue'> US ${product.value}</p>
                                </div>
                                <div className='addToCart'>
                                    <button type='' id='addToCartBtn'>Agregar a mi carrito</button>
                                </div>
                            </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}
export default AllProducts