import React, { useState, useEffect } from 'react'
import Input from './components/Input'
import ToDoList from './components/ToDoList'
import Header from './components/Header'
import Footer from './components/Footer'

import axios from 'axios'
import RandomQuest from './components/RandomQuest'

function App() {

  const [todos, setTodos] = useState([])
  const [todoValue, setTodoValue] = useState('')
  const [randomQuests, setRandomQuests] = useState([])

  const fetchRandomQuests = async () => {
      try {
          const response = await axios.get('https://duskwalk-server.vercel.app/random-quests');
          setRandomQuests(response.data); 
      } catch (error) {
          console.error('Error fetching random quests:', error);
      }
  };

  function persistData(newList){
    localStorage.setItem('todos', JSON.stringify({ todos:newList }))
  }

  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index){
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleEditTodo(index){
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    handleDeleteTodo(index)
  }

  useEffect(() => {
    if(!localStorage){
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos){
      return
    }

    localTodos = JSON.parse(localTodos).todos
    
    setTodos(localTodos)
  }, [])


  return (
    <div className="flex flex-col min-h-screen">
      <div className='flex-grow'>
        <Header />
        <RandomQuest fetchRandomQuests={fetchRandomQuests} randomQuests={randomQuests} />
        <Input todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
        <ToDoList handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo} todos={todos} />
      </div>
      <Footer />
    </div>
  )
}

export default App
