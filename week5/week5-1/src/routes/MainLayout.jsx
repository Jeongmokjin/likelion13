import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import About from './About';
import styled from 'styled-components';

function MainLayout() {

  return (
    <>
      <Header pageNumber={1}/><br/>
      <About/>
    </>
  )
}


export default MainLayout;