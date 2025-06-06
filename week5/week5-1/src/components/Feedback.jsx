import styled from "styled-components";

function Feedback(){//완료
    return(
        <Entire>
        <Background>
            <Star src="public/media/별 하얀색.png"/>
            <Gift>성실히 후기를 작성 해주신 분들에게는!</Gift>
            <NotExist>딱히 별건 없지만 미래의 해커톤 발전에 큰 도움이 되는데 많은 후기 작성 부탁합니다.</NotExist>
            <ImgGroup>
                <ImgBox>
                    <Img src="public/media/미모티콘1.png"/>
                    <Review1 color="#FF6370">정말 최고의 경험!</Review1>
                    <MindBox>
                        <Review2>진짜 완전 백퍼 진심</Review2>
                        <Review3>힘들긴 해도 그만큼의 보람이 있었어요.<br/>여러분들도 그랬나요?</Review3>
                    </MindBox>
                </ImgBox>
                <ImgBox>
                    <Img src="public/media/미모티콘2.png"/>
                    <Review1 color="#01D354">저 진짜 한 번 더하고 싶어요</Review1>
                    <MindBox>
                        <Review2>이건 백퍼 진심은 아님</Review2>
                        <Review3>한 번 더하기엔 몸이 버티질<br/>못할 것 같아요. 중앙톤 열심히 해야지!</Review3>
                    </MindBox>
                </ImgBox>
                <ImgBox>
                    <Img src="public/media/미모티콘3.png"/>
                    <Review1 color="#FFB801">밤샘의 가치가 있다</Review1>
                    <MindBox>
                        <Review2>요건 80퍼센트 진심</Review2>
                        <Review3>밤샘은 건강에 좋지 않기 때문입니다.<br/>밤샘하지 않도록 미리미리 작업합시다!</Review3>
                    </MindBox>
                </ImgBox>
            </ImgGroup>
        </Background>
        </Entire>
    )
}

const Entire=styled.div`
display: flex;
    justify-content: center;
`

const Background=styled.div`
    display: flex;
    width: 1717px;
    height: 1150px;
    flex-shrink: 0;
    border-radius: 52px;
    border: 1px solid #FF6370;
    background: #1C1C1C;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Star=styled.img`
    width: 69px;
height: 69px;
flex-shrink: 0;
margin-bottom: 30px;
`

const Gift=styled.p`
    color: #D2D2D2;
    font-family: Pretendard;
    font-size: 52px;
    font-style: normal;
    font-weight: 700;
    line-height: 65px; /* 125% */
    margin: 0;
`
const NotExist=styled.p`
    color: rgba(254, 254, 254, 0.70);
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 65px; /* 203.125% */
    margin: 0;
    margin-bottom: 70px;
`
const ImgGroup=styled.div`
    display: flex;
    flex-direction: row;
    gap: 40px;
`

const ImgBox=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Img=styled.img`
    width: 366px;
    height: 366px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
`
const Review1=styled.p`
    color: ${(props) => props.color || 'black'};
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 800;
    line-height: 65px; /* 162.5% */
`

const Review2=styled.p`
    color: #1C1C1C;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 65px; /* 203.125% */
    margin: 0;
    margin-bottom: 10px;
`

const Review3=styled.p`
    color: #1C1C1C;
    text-align: center;
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px; /* 150% */
    margin: 0;
`

const MindBox=styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 490px;
    height: 220px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #D2D2D2;
`


export default Feedback;