import './App.css';
import Navbar from './view/Navbar'
import About from './view/About.jsx'
import Cv from './view/Cv.jsx'
import Favorit from './view/Favorit.jsx'
import Home from './view/Home.jsx'
import Footer from './view/Footer.jsx';
import { Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar/>
<Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/cv' element={<Cv/>}/>
      <Route path='/favorit' element={<Favorit/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    <Footer/>
     </>
  )
}

export default App;
