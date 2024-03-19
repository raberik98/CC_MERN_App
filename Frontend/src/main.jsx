import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
//npm i react-router-dom

import './index.css'

import TodoList from './pages/TodoList'
import TodoCreator from './pages/TodoCreator'
import TodoUpdater from './pages/TodoUpdater'
import Layout from './pages/Layout'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element=<Layout/> >
        <Route path='/' element=<TodoList/> />
        <Route path='/create' element=<TodoCreator/> />
        <Route path='/update/:id' element=<TodoUpdater/> />
      </Route>
    </Routes>
  </BrowserRouter>
)

