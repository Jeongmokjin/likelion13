import { useState } from 'react';

function TodoInsert({onInsert}){
    const [text,setText]= useState("");

    function handleText(e){
        setText(e.target.value);
    }
    function plusTodo(){
        if(text !== ""){
        onInsert(text);
        setText("");
        }
    }
    function pressEnter(e){
        if(e.key=="Enter"){
            onInsert(text);
            setText("");
        }
    }

    return(
        <div>
            <input value={text} onChange={handleText} onKeyPress={pressEnter} placeholder='할 일을 입력하세요'/>
            <button type="button" style={{backgroundColor:"green"}} onClick={plusTodo} >
            추가</button>
        </div>
    );
}

export default TodoInsert;