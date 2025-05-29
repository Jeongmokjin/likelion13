import Products from "../Layout/Products";
import { clothingInformation } from "../data/ClothingInformation";

function ClothingPage(){ //분류 토글과 상품들 출력
    return(
        <>
            <Products data={clothingInformation}/>
        </>
    )
}

export default ClothingPage;