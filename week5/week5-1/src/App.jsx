import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import styled from 'styled-components'
import MainLayout from './routes/MainLayout'
import Project from './routes/Project';
import Diary from './routes/Diary';
import QnA from './routes/QnA';
import QnAPlusLayout from './routes/QnAPlusLayout';

function App() {

  return (
    <BrowserRouter>
    <BackGround>
      <Routes>
        <Route path='/' element={<MainLayout/>}/>
        <Route path='/Project' element={<Project/>}/>
        <Route path='/Diary' element={<Diary/>}/>
        <Route path='/QnA' element={<QnA/>} />
        <Route path='/QnA/QnAPlus' element={<QnAPlusLayout/>}/>
      </Routes>
    </BackGround>
    </BrowserRouter>
  )
}

const BackGround=styled.div`
  width: 1920px;
  height: auto;
  background: #FEFEFE;
`

export default App
