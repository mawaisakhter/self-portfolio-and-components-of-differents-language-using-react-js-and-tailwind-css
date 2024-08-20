import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demo from './components/Demo/Demo';
import About from './components/About/About';
import Contact from './components/Contact/Contact';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/Demo" element={<Demo />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

export default App
