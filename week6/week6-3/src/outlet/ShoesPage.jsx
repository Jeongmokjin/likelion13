import { shoesInformation } from "../data/ShoesInformation";
import Products from "../Layout/Products";


function ShoesPage(){ 
    return(
        <>
        <Products data={shoesInformation}/>
        </>
    )
}

export default ShoesPage;