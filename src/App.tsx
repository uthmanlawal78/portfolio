
import './App.css'
import Home from './pages/home';
import Header from './pages/header';
import Footer from './pages/footer';
import Contact from './pages/contact';
import { Route, Routes } from 'react-router-dom';
import Project from './pages/project';


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
