import {Routes, Route, useParams}from 'react-router-dom'
import { Home } from './pages/Home/intex'
import { Post } from './pages/Post'

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/post/:issueNumber' element={<Post />}/>
    </Routes>
  )
}