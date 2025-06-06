import styled from "styled-components";
import { Now, Explain, TextBox, Star } from "../css/PageText.styles";

function ProjectPic(){
    return(
        <>
        <TextBox>
            <Now><Star src="public/media/별 빨간색.png"/> Project</Now>
            <Explain>   
                2025 서경대학교 아이디어톤의 프로젝트 파일입니다. 클릭하여 상세한 정보를 확인하세요!
                <br/>모아 놓으니 더 예쁘네요. 다들 너무 수고하셨습니다!
            </Explain>
        </TextBox>
        <PicGroup>
            <Pic src="public/media/댕댕일기.png"/>
            <Pic src="public/media/travAI.png"/>
            <Pic src="public/media/아이랑.png"/>
            <Pic src="public/media/톡식.png"/>
            <Pic src="public/media/김비서.png"/>
            <Pic src="public/media/꼬북.png"/>
            <Pic src="public/media/FrameOut.png"/>
            <Pic src="public/media/TPOcket.png"/>
        </PicGroup>
        </>
    )
}

const Pic=styled.img`
    width: 840px;
    height: 473px;
    flex-shrink: 0;
    aspect-ratio: 840/473;
    border-radius: 25px;
`

const PicGroup=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
`
export default ProjectPic