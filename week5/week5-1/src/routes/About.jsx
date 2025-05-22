import FeedbackButton from "../components/FeedbackButton";
import Feedback from "../components/Feedback";
import ClosingPicture from "../components/ClosingPicture";
import styled from "styled-components";

function About(){
    return(
        <Entire>
        <FeedbackButton/>
        <ClosingPicture/>
        <Feedback/>
        </Entire>
    )
}

const Entire=styled.div`
    display: flex;
    flex-direction: column;
    gap: 150px;
`

export default About;