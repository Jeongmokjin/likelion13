import styled from "styled-components";

function Header(){
    return(
        <Entire>
        <Title>LIKELION</Title>
        <Login><ButtonName>로그인</ButtonName></Login>
        </Entire>
    )
}

const Entire=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Title=styled.p`
    color: #1C1B1A;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const Login=styled.button`
    display: flex;
    padding: 8px 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
background: #1C1B1A;
`

const ButtonName=styled.p`
    color: #FFF;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

export default Header;