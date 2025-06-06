import styled from "styled-components";


function ClosingPicture(){//파스텔톤만 해결하면 됨
    return(
        <Entire>
            <Blur top="70px" left="200px"/>
            <Blur top="100px" left="0px"/>
            <Blur top="300px" left="60px"/>
            <Blur top="250px" left="250px"/>
        <TextBox>
            <Opinion>
            How was your Ideathon?<br/>
            Please share your opinion !
            </Opinion>
            <Review>
            진짜 언젠가 이런 후기 올릴 수 있는 사이트를 디자인 해좋겠다는
            <br/>생각이 만들다보니 드네요. 프론트앤드 모두 화이팅!
            </Review>
        </TextBox>
        <Img src="public/media/아이디어톤 마무리사진.jpg"/>
        </Entire>
    )
}

const Opinion=styled.p`
    color: #1C1C1C;
font-family: Pretendard;    
font-size: 52px;
font-style: normal;
font-weight: 700;
line-height: 60px; /* 115.385% */
text-align: left;
`

const Review=styled.p`
    color: #1C1C1C;
font-family: Pretendard;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 36px; /* 150% */
text-align: left;
`

const TextBox=styled.div`
    width: 700px;
    margin-left: 50px;
`

const Img=styled.img`
    width: 1071px;
height: 601px;
flex-shrink: 0;
border-radius: 68px 0px 0px 68px;
background: linear-gradient(180deg, rgba(254, 254, 254, 0.00) 53.37%, rgba(254, 254, 254, 0.45) 100%), #E9E9E9;
margin-left: auto;
`

const Entire=styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`
const Blur = styled.div`
    position: absolute;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(239, 103, 171, 0.7) 0% );
    filter: blur(100px);
    border-radius: 50%;
    top: ${(props)=>props.top};
    left: ${(props)=>props.left};
`;

export default ClosingPicture;