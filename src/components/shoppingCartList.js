
import '../stylesheets/shoppingcart.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

function ShoppingCartList(){
    let [CartProducts, setCartProducts] = useState([])
    let [subtotal, setSubtotal] = useState(0)
    useEffect(()  => {
        axios.get('http://localhost:9000/shoppingcart')

        .then((response)  => {
            //console.log(response.data.cartProducts)
            setCartProducts(response.data.cartProducts)
            
            setSubtotal(subtotal)
            CartProducts.forEach(item => setSubtotal(subtotal += item.product.value))
            console.log(subtotal)
        })
    }, [])
        return (
            <div className="container">
            <section className='shoppingCart'>
                <div>
                    <h1>Shopping Cart</h1>
                    <p>Price</p>
                    
                </div>
                <div className="cartBoard">
                    {CartProducts.map(item =>{
                        return (
                            <div className="cartItem">
                        <div>
                            <img src= {item.product.image} />
                        </div>
                        <div>
                            <h3>
                                {item.product.name}
                            </h3>
                            <p>
                            Disponible
                            </p>
                            <div className='itemOptions'>
                                <div>
                                    <p>Units: </p>
                                    <select name= 'units'>
                                        <option value ='1'>1</option>
                                        <option value ='2'>2</option>
                                        <option value ='3'>3</option>
                                        <option value ='4'>4</option>
                                        <option value ='5'>5</option>
                                        <option value ='6'>6</option>
                                    </select>
                                </div>
                                <div>
                                    <p>
                                        Eliminar del carrito 
                                    </p>
                                    <p>
                                        Guardar para más tarde
                                    </p>
                                    <p>
                                        Ver más productos similares
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>US$ {item.product.value}</p>
                        </div>
                    </div>
                        )
                    })

                    }
                </div>
            </section>
            <section className='orderSummary'>
                <div>
                    <h2>Order Summary</h2>
                </div>
                <div>
                    <p>
                        Subtotal:  <span>US ${subtotal}</span>
                    </p>
                    <div>
                        <input type= 'checkbox' id='giftOpc' value= 'giftOpc' />
                        <label htmlFor='giftOpc'>Este pedido es un regalo</label>
                    </div>
                    <div>
                        <button type= 'submit' id= 'orderCheckout'>Proceder al pago</button>
                    </div>
                </div> 
            </section>

        </div>
    )
}
export default ShoppingCartList