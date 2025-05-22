import styled from "styled-components";
import { useState } from "react";

function QnAPlus({onInsert}){
    const [title,setTitle]= useState("");
    const [content,setContent]= useState("");

    function handleTitle(e){
        setTitle(e.target.value);
    }
    function handleContent(e){
        setContent(e.target.value);
    }

    function plusQ(){
        if(title !== "" && content !== ""){
        onInsert(title,content);
        setText("");
        }
    }

    return(
        <>
        <Title>
            <input value={title} onChange={handleTitle} placeholder='제목을 입력하세요.'/>
            <button type="button" style={{backgroundColor:"green"}} onClick={plusTodo} >
            등록</button>
        </Title>
        <Contents>
            <input value={content} onChange={handleContent} placeholder='내용을 입력하세요.'/>
        </Contents>
        </>
    )
}

const Title=styled.div`
    
`

const Contents=styled.div`
    
`

export default QnAPlus;