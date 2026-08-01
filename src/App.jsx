import Header from "/src/components/Header"
import Shopping from "/src/components/Shopping"
import React from "react"

export default function App() {

    const [searchInput,setSearchInput] = React.useState()

    function searchProducts(formData) {
        const searchData = formData.get("search")
        setSearchInput(searchData)
    }
     
    return(
        <>
            <Header onAction={searchProducts}/>
            <Shopping searchInput={searchInput} />
        </>
    )
}