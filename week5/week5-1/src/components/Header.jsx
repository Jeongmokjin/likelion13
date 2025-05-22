import styled from "styled-components";
import SearchBar from "./SearchBar";

function Header({pageNumber}){
    let aboutColor=[0,""];
    let projectColor=[0,"",""];
    let diaryColor=[0,""];
    let qnaColor=[0,""];

    switch(pageNumber){
        case 1:
            aboutColor[0]=1;
            aboutColor[1]="black";
            break;
        case 2:
            projectColor[0]=1;
            projectColor[1]="#FF6D79";
            projectColor[2]=<SearchBar/>;
            break;
        case 3:
            diaryColor[0]=1;
            diaryColor[1]="#01D354";
            break;
        case 4:
            qnaColor[0]=1;
            qnaColor[1]="#48a0f7";
            break;
    }

    return(
        <H>
            <Title>IDT</Title>
            {projectColor[2]}
            <NavBar>
                <Nav href="/" pageOn={aboutColor[0]} color={aboutColor[1]}>About</Nav>
                <Nav href="/Project" pageOn={projectColor[0]} color={projectColor[1]}>Project</Nav>
                <Nav href="/Diary" pageOn={diaryColor[0]} color={diaryColor[1]}>Diary</Nav>
                <Nav href="/QnA" pageOn={qnaColor[0]} color={qnaColor[1]}>QnA</Nav>
            </NavBar>
        </H>
    )
}

const H=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Title= styled.p`
    color: #1C1C1C;
    text-align: center;
    font-family: "TT Travels Next Trl";
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 80px;
    margin-right: 20px;
    
`
const NavBar=styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-right: 80px;
    margin-left: auto;
`

const Nav=styled.a`
    display: flex;
    width: 100px;
    justify-content: center;
    padding-bottom: 5px;
    color: ${(props) => {
        if(props.pageOn) return "black";
        return "#A7A7A7";
    }};
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: ${(props) => {
        if(props.pageOn) return 800;
        return 500;
    }};
    line-height: normal;
    text-decoration: none;
    border-bottom: ${(props)=>{
        if(props.pageOn) return `4px  solid ${(props.color)}`;
        return 'none';
    }}
`
export default Header;