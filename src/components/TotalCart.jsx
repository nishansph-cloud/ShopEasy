export default function TotalCart(props) {

    const totalPrice = props.yourCart.reduce((total, cartItem)=>{
        return total + (cartItem.qty * cartItem.price)
    }, 0)  


    return(
        <>

            <div className="total-container">

                <h3>Total</h3>
                <p>${totalPrice.toFixed(2)}</p>

            </div>

            <button onClick={props.checkOut} className="checkout">Checkout</button>

        </>
    )
}