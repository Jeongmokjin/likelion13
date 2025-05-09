import { useState } from 'react';

function TodoList({todos,onToggle,onRemove}){

        return(
            <>
            {todos.map((todo)=>(
                <div style={{backgroundColor:"white"}}>
                    <input type="checkbox" checked={todo.checked} onClick={()=>onToggle(todo.id)}/>
                    {todo.text}
                    <button type="button" style={{backgroundColor:"red"}} onClick={()=>onRemove(todo.id)}>삭제</button>
                </div>
            ))}
            </>
        );
    

}
export default TodoList;