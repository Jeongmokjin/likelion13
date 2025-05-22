import styled from "styled-components";
import { Now, Explain, TextBox, Star } from "../css/PageText.styles";

function QnAText(){
    return(
        <>
        <TextBox>
            <Now><Star src="public/media/별 하늘색.png"/> QnA</Now>
            <Explain>
                궁금한 것이 있으면 질문 남겨주세요!
            </Explain>
            <Button><ButtonName>질문 등록</ButtonName></Button>
        </TextBox>
        </> 
    )
}

const Button=styled.button`
    width: 367px;
    height: 116px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #48a0f7;
    margin-top: 40px;
`
const ButtonName=styled.p`
    color: #FEFEFE;
    text-align: center;
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin: auto;
`

export default QnAText;