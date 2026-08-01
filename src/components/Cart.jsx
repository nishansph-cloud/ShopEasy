import React from "react"

export default function Cart(props) {

    const [price, setPrice] = React.useState(props.price)

    return(
        <>
            <div className="row">
            
                <div className="column-item">
                    
                    <div>
                        <img alt="product-img" src={props.thumbnail} />
                        <h3>{props.title}</h3>
                    </div>

                    <p>Qty:{props.qty}</p>
                    
                    <div className="btn-container">
                        
                        <button onClick={()=>props.qtydec(props.id)}>-</button>
                        <button onClick={()=>props.qtyinc(props.id)} >+</button>
                    
                    </div>
                
                </div>
                
                <div className="column-price">
                    
                    <p>${(props.price * props.qty).toFixed(2)}</p>
                
                </div>
            
            </div>
        </>
    )
}