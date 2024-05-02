import './assets/css/colors.css'
import './assets/css/fonts.css'
import './assets/css/layout.css'
import './App.css'
import Home from './pages/Home/Home';
import Header from './components/shared/Header/Header';

import Footer from './components/shared/Footer/Footer';
import Dashboard from './pages/Dashboard/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';


function App() {
  return (
    <div>
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
