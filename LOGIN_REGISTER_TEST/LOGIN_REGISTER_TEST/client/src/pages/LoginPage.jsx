import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const LoginPage = () => {
  const [loginUser, setLoginUser] = useState(""); // 닉네임
  const [loginPass, setLoginPass] = useState(""); // 비밀번호
  const [sessionId, setSessionId] = useState(""); // 세션 정보 보여줄 용도

  useEffect(() => {
    setSessionId(localStorage.getItem("sessionId")); // 컴포넌트라 로딩되자마자 로컬 스토리지에서 세션 정보가 있을 경우 받아와서 저장
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4173/login", {
        username: loginUser,
        password: loginPass,
      })
      .then((res) => {
        const sessionId = res.data.sessionId;
        localStorage.setItem("sessionId", sessionId); // 로컬스토리지에 세션 정보 저장
        setSessionId(sessionId);

        alert("로그인 성공!");
      })
      .catch((err) => {
        alert("로그인 실패");
      })
      .finally(() => {
        console.log("Login request finished");
      });
  };

  return (
    <Container>
      <h2>로그인</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="아이디"
          value={loginUser}
          onChange={(e) => setLoginUser(e.target.value)}
          required
        />
        <Input
          placeholder="비밀번호"
          type="password"
          value={loginPass}
          onChange={(e) => setLoginPass(e.target.value)}
          required
        />
        <Button type="submit">로그인</Button>
      </Form>
      <p>현재 세션: {sessionId || "없음"}</p>
    </Container>
  );
};

const Container = styled.div`
  max-width: 400px;
  margin: 5rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default LoginPage;
