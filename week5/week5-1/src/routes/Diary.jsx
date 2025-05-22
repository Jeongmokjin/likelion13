import Header from "../components/Header";
import DiaryText from "../components/DiaryText";
import DiaryImg from "../components/DiaryImg";

function Diary(){
    return(
        <>
        <Header pageNumber={3}/>
        <DiaryText/>
        <DiaryImg/>
        </>
    )
}

export default Diary;