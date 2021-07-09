import React from 'react';
import {observer} from "mobx-react-lite";
import todo from "../store/todo";
import styled from "styled-components";


const Div = styled.div`
  border-radius: 2rem;
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Container = styled.div`
  padding-top: 10rem;
`

const InputElem = styled.input`
  width: 2rem;
  height: 2rem;
`

const Todo = () => {
    return (
        <Container>
            <h2>TodoList</h2>
            {todo.todos.map(t =>
            <Div key={t.id}>
                <InputElem checked={t.completed} onChange={() => {todo.completeTodo(t)}} type="checkbox"/>
                {t.title}
                <button onClick={()=> {todo.removeTodo(t)} } style={{margin: 0}}>X</button>
            </Div>
            )}
        </Container>
    );
};

export default observer(Todo);