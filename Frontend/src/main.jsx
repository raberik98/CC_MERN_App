import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//npm i react-router-dom

import './index.css'

import TodoList from './pages/TodoList'
import TodoEditor from './pages/TodoEditor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element=<TodoList/> />
      <Route path='/editor/:id' element=<TodoEditor/> />
    </Routes>
  </BrowserRouter>
)

