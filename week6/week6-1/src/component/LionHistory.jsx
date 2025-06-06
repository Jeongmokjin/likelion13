import styled from "styled-components";

function LionHistory(){
    return(
        <Entire>
            <TextBox img="public/media/단체OT.png">
            <Text1>이젠 추억이죠?</Text1>
            <Text2>단체 OT</Text2>
            </TextBox>
            <TextBox img="public/media/아이디어톤.png">
            <Text1>상상을 현실로</Text1>
            <Text2>단체 OT</Text2>
            </TextBox>
            <TextBox img="public/media/멋사MT.png">
            <Text1>이젠 추억이죠?</Text1>
            <Text2>단체 OT</Text2>
            </TextBox>
        </Entire>
    )
}

const Entire=styled.div`
    display: flex;
    flex-direction: row;
    gap: 50px;
`

const Img=styled.img`
    width: 370px;
height: 277px;
flex-shrink: 0;
border-radius: 30px;
background: linear-gradient(179deg, rgba(0, 0, 0, 0.00) 1.07%, rgba(0, 0, 0, 0.00) 27.99%, rgba(0, 0, 0, 0.00) 57.35%, #1A1A1A 98.95%);
`

const TextBox=styled.div`
    display: flex;
    width: 200px;
    height: 150px;
    background-image: 
    linear-gradient(179deg, rgba(0, 0, 0, 0.00) 1.07%, rgba(0, 0, 0, 0.00) 27.99%, rgba(0, 0, 0, 0.00) 57.35%, #1A1A1A 98.95%),
    url(${(props)=> props.img});
    background-position: center;
    flex-direction: column;
    text-align: left;
`

const Text1=styled.p`
color: #FFF;
font-family: Pretendard;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 120%; /* 24px */
`
const Text2=styled.p`
    color: #FFF;
font-family: Pretendard;
font-size: 32px;
font-style: normal;
font-weight: 700;
line-height: 120%; /* 38.4px */
`

export default LionHistory;