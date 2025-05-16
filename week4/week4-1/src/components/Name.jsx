import { useNavigate } from "react-router";
import styled from "styled-components";

function Name({name,age,email,from}){

    const navigate = useNavigate();
    
    if(localStorage.getItem("name")){   //초기값 설정(사이트 처음 킬때)
        name=localStorage.getItem("name");
    } else{
        name="사용자";
    }
    if(localStorage.getItem("age")){
        age=localStorage.getItem("age");
    } else{
        age="00";
    }
    if(localStorage.getItem("email")){
        email=localStorage.getItem("email");
    } else{
        email="메일 없음";
    }
    if(localStorage.getItem("from")){
        from=localStorage.getItem("from");
    } else{
        from="소속 없음";
    }
    
    const pic={
        height:"200px",
        width:"200px",
    };
    const button={
        backgroundColor:"yellowgreen",
    };
    
    function NameChange(){  //라우팅 함수
        navigate("/Mylayout/NameChange");
    }

    return(
        <Profile>
        <img src="../../media/트랄라.png" style={pic}/>
        <info>
        <div>이름: {name} <button type="button" onClick={NameChange} style={button}>정보 변경</button></div>
        나이: {age} 세 <br/>
        이메일: {email} <br/>
        소속: {from} <br/>
        </info>
        </Profile>
    );
}


const Profile=styled.div`
    display:flex;
    align-items:center;
    gap:20px;
    margin:10px;
`



export default Name;