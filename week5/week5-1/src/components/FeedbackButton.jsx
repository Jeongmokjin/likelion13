import styled from "styled-components";

function FeedbackButton(){//완료
    return(
        <Entire>
        <Q>저번주에 진행 되었던 아이디어톤, 모두 어떠셨나요?</Q>
        <A>여러분들의 생생한 후기가 궁금합니다!</A>
        <ButtonGroup>
            <Button><ButtonName>텍스트 후기</ButtonName></Button>
            <Button><ButtonName>이미지 후기</ButtonName></Button>
            <Button><ButtonName>소감문 제출(PDF)</ButtonName></Button>
        </ButtonGroup>
        </Entire>
    )
}

const Q= styled.p`
    color: #1C1C1C;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 60px; /* 250% */
    margin: 0;
`

const A=styled.p`
    color: #1C1C1C;
    text-align: center;
    font-family: Pretendard;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px; /* 200% */
    margin: 0;
    margin-bottom: 30px;
`

const Button=styled.div`
    display: flex;
    width: 300px;
    height: 150px;
    flex-shrink: 0;
    border-radius: 16px;
    background: linear-gradient(180deg, #636363 0%, #1C1C1C 100%);
    align-items: center;
    justify-content: center;
`

const ButtonName=styled.p`
    color: #FEFEFE;
    text-align: center;
    font-family: Pretendard;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`

const ButtonGroup=styled.div`
    display: flex;
    gap: 110px;
`

const Entire=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 60px;
`
export default FeedbackButton;