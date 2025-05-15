import Name from "../components/Name"
import Navbar from "../components/Navbar"
import styled from "styled-components";

function MyLayout(){

    return(
        <Layout>
        <Navbar/>
        <Name name="사용자"/>
        </Layout>
    );
}

const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;

export default MyLayout;