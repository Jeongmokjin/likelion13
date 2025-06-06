import styled from "styled-components";

function Introduce(){
    return(
        <>
        <Intro>
            안녕하세요,<br/>멋쟁이사자처럼 입니다.
        </Intro>
        <Button><ButtonName>멋사 바로가기</ButtonName></Button>
        </>
    )
}

const Entire=styled.div`
    display: flex;
    flex-direction: column;
`

const Intro=styled.p`
    color: #1C1B1A;
font-family: Pretendard;
font-size: 48px;
font-style: normal;
font-weight: 700;
line-height: 130%; /* 62.4px */
text-align: left;
`

const Button=styled.button`
    display: inline-flex;
padding: 10px 30px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 20px;
background: #1C1B1A;
margin-right: auto;
`

const ButtonName=styled.p`
    color: #FFF;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export default Introduce;