import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './Layout/Header';
import Information from './components/Information';
import MainPage from './outlet/MainPage';
import ClothingPage from './outlet/ClothingPage';
import ShoesPage from './outlet/ShoesPage';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Information/>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/ClothingPage" element={<ClothingPage/>}/>
        <Route path='/ShoesPage' element={<ShoesPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
