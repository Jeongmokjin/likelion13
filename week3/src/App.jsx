import { useState } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 100vw;
  height: 100vh;
  max-width: 400px;
  background: #f7f3e5;
`;

const Title = styled.p`
  font-size: 28px;
  font-weight: bold;
`

function App() {
  const [todos, setTodos] = useState([]);

  function handleInsert(text) {
    const newTodo = {
      id: Date.now(),
      text,
      checked: false
    };
    setTodos([newTodo, ...todos]);
  }

  function handleToggle(id) {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  }//todos를 하나씩 찾아서 todo.id와 받은 id값이 같으면 체크 값을 반전 다르면 넘어가기 

  function handleRemove(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }//id와 다른 것들만 필터링 해서 새로 배열을 만드는 의미

  return (
    
    <Container>
      <Title>TodoList</Title>
      <TodoInsert onInsert={handleInsert}/>
      <TodoList 
        todos={todos} 
        onToggle={handleToggle} 
        onRemove={handleRemove} 
      />
    </Container>
  );
} 

export default App;
