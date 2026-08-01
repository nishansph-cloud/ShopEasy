import React from "react"
import ShopWindow from "./ShopWindow"
//import ItemsData from "./ItemData"
import Cart from "./Cart"
import TotalCart from "./TotalCart"


export default function Shopping(props) {

    const [items, setItems] = React.useState([])

    React.useEffect(()=>{
        async function fetchProducts() {
            const url = props.searchInput ?`https://dummyjson.com/products/search?q=${encodeURIComponent(props.searchInput)}` : `https://dummyjson.com/products` 
            const response = await fetch(url)         
            const data = await response.json()
            setItems(data.products)
        }
        fetchProducts()
    }, [props.searchInput])

    const [yourCart, setYourCart] = React.useState([])
    
    function addToCart(id) {
        const alreadyInCart = yourCart.find(cart => cart.id === id)
        if (alreadyInCart) return
        const addToCart = items.find(item => item.id === id)
        setYourCart(prevCart => [...prevCart, {...addToCart, qty: 1}])
    }

    function qtyinc(id) {
        setYourCart(prevCart=>
            prevCart.map(cart => 
                cart.id === id ? {...cart, qty: cart.qty+1} : cart
            )
        )
    }

    function qtydec(id) {
        setYourCart(prevCart=>
            prevCart.map(cart => 
                cart.id === id ? {...cart, qty: cart.qty-1} : cart 
            ).filter(cart => cart.qty > 0)
        )
    }

    function checkOut() {
        const totalPrice = yourCart.reduce((total, cartItem)=>{
            return total + (cartItem.qty * cartItem.price)
        }, 0) 
        const itemNames = yourCart.map(items => items.title)
        const itemQuantity = yourCart.map(items => items.qty)
        console.log("Purchased : ", itemNames , " quantity :",itemQuantity, " Worth :",totalPrice.toFixed(2) )
        console.log() 
        setYourCart([])
    }
    
    return(
        <main className="shop">
            
            <h1>Results:</h1>

            <section className="grid-container">
                
                {items.map(item => <ShopWindow key={item.id} id={item.id} {...item} addToCart={addToCart} />)}
            
            </section>

            {yourCart.length > 0 && <section className="cart-section">
                
            <h1>Your cart</h1>
                
            {yourCart.map(cart=>
                <Cart key={cart.id} id={cart.id} {...cart} 
                qtyinc={qtyinc} qtydec={qtydec} />
                )
            }
            
            <TotalCart checkOut={checkOut} yourCart={yourCart} />
            
            </section>}

        </main>
    )
}