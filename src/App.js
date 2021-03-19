import React, { Component } from 'react';
import ToDoListTemplate from './components/ToDoListTemplate.js';
import Form from './components/Form';
import ToDoItemList from './components/TodoItemList'

class App extends Component{

  id = 3

  state = {
    input: '',
    todos: [
      { id: 0, text: 'Nothing', checked: true },
      { id: 1, text: 'Eat', checked: false },
      { id: 2, text: 'Sleep', checked: false }
    ]
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  handleCreate = (e) => {
    const { input, todos } = this.state;
    this.setState({
      input: '',
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
      });
    }

    handleKeyPress = (e) => {
      if(e.key === 'Enter') {
        this.handleCreate();
      }
    }

    handleToggle = (id) => {
      const { todos } = this.state;
  
      // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
      const index = todos.findIndex(todo => todo.id === id);
      const selected = todos[index]; // 선택한 객체
  
      const nextTodos = [...todos]; // 배열을 복사
  
      // 기존의 값들을 복사하고, checked 값을 덮어쓰기
      nextTodos[index] = { 
        ...selected, 
        checked: !selected.checked
      };
  
      this.setState({
        todos: nextTodos
      });
    }
    
    handleRemove = (id) => {
      const { todos } = this.state
      this.setState({
        todos: todos.filter(todo => todo.id !== id)
      });
    }
  

  render(){
    const { input, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove
    } = this;

    return(
      <ToDoListTemplate form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <ToDoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>
      </ToDoListTemplate>
    );
  }
}

export default App;
