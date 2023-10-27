import axios from "axios"
import { useState, useEffect } from "react"

const baseURL= 'http://localhost:9000/products'

function CreateProduct(){
    const [product, setProduct] = useState({
        name: '',
        description: '',
        units: '',
        value: '',
        image: '',
        createByUserId: '',
        providerId: ''
    })
  const handleFormSubmit = async (event) => {
    event.preventDefault()
    try{
        const response = await axios.post(baseURL, product)
        console.log(response.data)
        
        setProduct({
            name: '',
            description: '',
            units: '',
            value: '',
            image: '',
            createByUserId: '',
            providerId: ''
        })
    }catch(error){
        console.error(error)
    }
}
    
    const handleInputChange = (event) => {
        const {name, value} = event.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name] : value,
        }))
    }


return(
    <div>
        <h1>Agregar nuevo producto</h1>
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="name">Nombre: </label>
                <input type="text" id='name' name='name' value={product.name} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="description">Descripción: </label>
                <input type='textarea' id='description'  name= 'description' value={product.description} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="units">Unidades: </label>
                <input type= 'number' id= 'units' name="units" value={product.units} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="value">Precio: </label>
                <input type= 'number' id='value' name= 'value' value={product.value} onChange={handleInputChange}/>
            </div>
            <div>
                <label htmlFor="image">Imagen de referencia del producto: </label>
                <input type= 'text' id= 'image' name='image' value={product.image} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="createdByUserId">ID de usuario: </label>
                <input type= 'number' id='createdByUserId' name= 'createdByUserId' value={product.createByUserId} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor= 'providerId'>ID del proveedor: </label>
                <input type='number' id= 'providerId' name= 'providerId' value={product.providerId} onChange={handleInputChange} />
            </div>
            <button type= 'submit' id='createProduct' >Agregar producto</button>
        </form>
    </div>
)
}

export default CreateProduct