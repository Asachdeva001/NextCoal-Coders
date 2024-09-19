import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import LoginSignup from './Components/LoginSignup';
import Dashboard from './Components/Dashboard';
import Page from './Components/Page';
import Miningact from './Components/miningact';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/loginsignup' element={<LoginSignup />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard' element={<Page />} />
          <Route exact path='/miningact' element={<Miningact />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
