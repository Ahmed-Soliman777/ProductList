import React, { useState } from 'react'

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')

    const addItem = () => {
        if (productName && productPrice) {
            setProducts([...products, { name: productName, price: parseFloat(productPrice) }])
            setProductName('')
            setProductPrice('')
        }
    }

    const removeItem = (index) => {
        const updatedArray = [...products]
        updatedArray.splice(index, 1)
        setProducts(updatedArray)
    }

    const calculateTotalPrice = () => {
        const total = products.reduce((sum, product) => sum + product.price, 0)
        return total
    }

    return (
        <div>
            <div>
                <label>Product Name : </label>
                <input type="text" value={productName} onChange={(event) => setProductName(event.target.value)} />
                <label>Product Price : </label>
                <input type="number" value={productPrice} onChange={(event) => setProductPrice(event.target.value)} />
                <button onClick={addItem}>+</button>
            </div>
            <ul>
                {products.map((product, index) => (
                    <li key={index}>
                        {product.name} - {product.price.toFixed(2)}
                        <button onClick={() => removeItem(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${calculateTotalPrice()}</p>
        </div>
    )
}

export default ProductList
