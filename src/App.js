import './App.css';
import About from './components/About/About';
import Cards from './components/Card/Cards';
import Experience from './components/Experience/Experience';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
       <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Cards/>} />
          <Route path="/experience" element={<Experience/>} />
          
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
