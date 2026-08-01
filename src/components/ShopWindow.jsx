export default function ShopWindow(props) {

    return(
        <div className="shop-container">
            
            <div className="img-container">
                
                <img alt="headphone-img" src={props.thumbnail} />
            
            </div>
            
            <div className="shop-info">
                
                <h3>{props.title}</h3>
                <p>${props.price}</p>
            
            </div>
            
            <div className="button-container">
                
                <button onClick={()=>props.addToCart(props.id)}>Add to cart</button>
            
            </div>
        
        </div>
    )
}