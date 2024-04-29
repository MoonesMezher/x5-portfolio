import './assets/css/colors.css'
import './assets/css/fonts.css'
import './assets/css/layout.css'
import './App.css'
import Home from './pages/Home/Home';
import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <main>
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<Home/>}/>
          </Routes>
          <Footer/>
        </BrowserRouter>
    </main>
  )
}

export default App
