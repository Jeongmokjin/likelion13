import styled from "styled-components";
import { Now, Explain, TextBox, Star } from "../css/PageText.styles";

function DiaryText(){
    return(
        <>
        <TextBox>
            <Now><Star src="public/media/별 초록색.png"/> Diary</Now>
            <Explain>
                2025 서경대학교 아이디어톤의 소감을 적는 곳 입니다. 
                여러분이 느꼈던 모든 것을 적어주세요!<br/>
                이미지를 올리셔도 됩니다. 배치도 자유롭게 설정할 수 있어요! 
                방명록이라고 편하게 생각 부탁함~
            </Explain>
            <Button><ButtonName>방명록 쓰러가기</ButtonName></Button>
        </TextBox>
        </>
    )
}

const Button=styled.button`
    width: 367px;
    height: 116px;
    flex-shrink: 0;
    border-radius: 15px;
    background: #00CE52;
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

export default DiaryText;