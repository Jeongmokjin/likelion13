import styled from "styled-components";

function DiaryImg(){
    return(
        <Group>
        <Box color="#FFD15B" width="782px" height="806px" left="100px" top="20px">
            <Text fontColor="#151515" size="128px" enterGap="160px">
                다들<br/>사랑해요호<br/>!!!!!!!
            </Text>
        </Box>
        <Box color="#BEE317" width="884px" height="451px" left="800px" top="200px">
            <Text fontColor="#151515" size="88px" enterGap="120px">
                최강동아리 멋사<br/>그 중 서경대가 최강
            </Text>
        </Box>
        <Img src="public/media/회장님 셀카모드.png" width="1016px" height="573px" left="600px" top="1000px"/>
        <Box color="#5A5DFF" width="560px" height="373px" left="100px" top="1300px" rotate="-6.5deg">
            <Text fontColor="#FEFEFE" size="96px" enterGap="160px">
                내가더더더
            </Text>
        </Box>
        <Box color="#FF7984" width="522px" height="537px" left="450px" top="1800px">
            <Text fontColor="#FEFEFE" size="32px" enterGap="50px">
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다<br/>
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다<br/>
                글씨를 이렇게도 작게 쓸 수 있어요<br/>그치만 이렇게 쓰면 안보이겠죠?<br/>시원하게 씁시다
            </Text>
        </Box>
        <Img src="public/media/발표 중.png" width="473px" height="537px" left="100px" top="2200px"/>
        <Box color="#593A6D" width="665px" height="444px" left="1050px" top="2450px">
            <Text fontColor="#FEFEFE" size="64px" enterGap="90px">
                여기 후기 쓰는 곳임<br/>그래서 제 소감은요...<br/>(이하 생략
            </Text>
        </Box>
        <Img src="public/media/점수 집계 중.png" width="1034px" height="1033px" left="400px" top="2970px"/>
        </Group>
    )
}

const Group=styled.div`
    position: relative;
    display: flex;
`

const Box=styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    flex-shrink: 0;
    border-radius: 15px;
    background: ${(props)=>props.color};
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
    left: ${(props)=>props.left};
    top: ${(props)=>props.top};
    transform: rotate(${(props)=>props.rotate});
`

const Text=styled.p`
    text-align: left;
    color: ${(props)=>props.fontColor};
    font-family: Pretendard;
    font-size: ${(props)=>props.size};
    font-style: normal;
    font-weight: 900;
    line-height: ${(props)=>props.enterGap};

`

const Img=styled.img`
    position: absolute;
    width: ${(props)=>props.width};
    height: ${(props)=>props.height};
    flex-shrink: 0; 
    border-radius: 15px;
    background: url(<path-to-image>) lightgray 50% / contain no-repeat;
    box-shadow: 15px 15px 15px 0px rgba(0, 0, 0, 0.20);
    left: ${(props)=>props.left};
    top: ${(props)=>props.top};
`

export default DiaryImg;