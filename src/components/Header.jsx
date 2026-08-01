export default function Header(props) {

    return(
        <header>
            
            <h2>ShopEasy</h2>
            
            <form action={props.onAction} className="search-container">
                
                <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>

                <input placeholder="Search products..." name="search" type="text"></input>
            
            </form>
            
            <div className="cart-img-container">
                
                <img alt="cart-img" src="/src/assets/shopping-cart.png" />
            
            </div>
        
        </header>
    )
}