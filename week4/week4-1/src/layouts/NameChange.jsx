import { useNavigate } from "react-router";
import { useState } from 'react';
import Navbar from "../components/Navbar"
import styled from "styled-components";

function NameChange(){
    const [text,setText]= useState({
        name:"",
        age:"",
        email:"",
        from:"",
    });
    const navigate = useNavigate();

    function handleName(e){ //각 요소 변경 감지 함수
        setText(t => ({
            ...t,
            name: e.target.value,
        }));
    }
        function handleAge(e){ //각 요소 변경 감지 함수
        setText(t => ({
            ...t,
            age: e.target.value,
        }));
    }
        function handleEmail(e){ //각 요소 변경 감지 함수
        setText(t => ({
            ...t,
            email: e.target.value,
        }));
    }
        function handleFrom(e){ //각 요소 변경 감지 함수
        setText(t => ({
            ...t,
            from: e.target.value,
        }));
    }

    function InsertName(){  //입력값 반영 함수
        if(text.name!=""){
            localStorage.setItem("name",text.name);
        }
        if(text.age!=""){
            localStorage.setItem("age",text.age);
        }
        if(text.email!=""){
            localStorage.setItem("email",text.email);
        }
        if(text.from!=""){
            localStorage.setItem("from",text.from);
        }
        navigate("/Mylayout");
    }
    function EnterDown(e){ //엔터 누를시 실행 단,값이 입력된게 하나도 없으면 행동X
        if(e.key==="Enter"){
            if(text.name!="" || text.age!="" || text.email!="" || text.from!=""){
                if(text.name!=""){  //입력된 값만 적용, 구현은 했는데 비효율적인듯
                    localStorage.setItem("name",text.name);
                }
                if(text.age!=""){
                    localStorage.setItem("age",text.age);
                }
                if(text.email!=""){
                    localStorage.setItem("email",text.email);
                }
                if(text.from!=""){
                    localStorage.setItem("from",text.from);
                }
            navigate("/Mylayout");
            }
        }
    }

    const button={
        backgroundColor:"green",
    };

    return(
        <Layout>
        <Navbar/>
        이름:<input type="text" value={text.name} onChange={handleName} onKeyDown={EnterDown} placeholder="변경할 이름을 입력하세요."/>
        <button type="button" onClick={InsertName} style={button}>저장</button><br/>
        나이:<input type="text" value={text.age} onChange={handleAge} onKeyDown={EnterDown} placeholder="변경할 나이를를 입력하세요."/>
        <br/>
        이메일:<input type="text" value={text.email} onChange={handleEmail} onKeyDown={EnterDown} placeholder="변경할 메일을 입력하세요."/>
        <br/>
        소속:<input type="text" value={text.from} onChange={handleFrom} onKeyDown={EnterDown} placeholder="변경할 소속을 입력하세요."/>

        </Layout>
    );
}

const Layout = styled.div`
  min-height: 100vh;
  background: #f4f4f4;
`;

export default NameChange;