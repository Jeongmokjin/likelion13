import Header from "../components/Header";
import QnAList from "../components/QnAList";
import QnAText from "../components/QnAText";
import QnAPlus from "../components/QnAPlus";

function QnA(){
    
    return(
        <>
        <Header pageNumber={4}/>
        <QnAText/>
        <QnAList/>
        </>
    )
}

export default QnA;