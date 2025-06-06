import Header from "../component/Header";
import Introduce from "../component/Introduce";
import LionHistory from "../component/LionHistory";
import Footer from "../component/Footer";
import styled from "styled-components";


function Outlet(){
    return(
        <Entire>
            <Header/>
            <Introduce/>
            <LionHistory/>
            <Footer/>
        </Entire>
    )
}
const Entire=styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`




export default Outlet;