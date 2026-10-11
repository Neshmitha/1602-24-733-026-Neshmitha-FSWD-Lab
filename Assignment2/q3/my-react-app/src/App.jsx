
import { useEffect, useState } from 'react'

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        return response.json()
      })
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Unable to load products')
        setLoading(false)
      })
  }, [])

  function addToCart(product) {
    setCart(previousCart => {
      const existing = previousCart.find(item => item.id === product.id)

      if (existing) {
        return previousCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...previousCart, { ...product, quantity: 1 }]
    })
  }

  function increaseQuantity(id) {
    setCart(previousCart =>
      previousCart.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  function decreaseQuantity(id) {
    setCart(previousCart =>
      previousCart
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  function removeItem(id) {
    setCart(previousCart => previousCart.filter(item => item.id !== id))
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  if (loading) return <h2>Loading products...</h2>
  if (error) return <h2>{error}</h2>

  return (
    <div>
      <h1>Shopping Cart</h1>

      <h2>Products</h2>
      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>Price: ${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div className="cart-item" key={item.id}>
            <span>{item.title} - ${item.price.toFixed(2)}</span>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}

      <h2>Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  )
}

export default App
