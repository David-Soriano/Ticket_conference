import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import { Header } from './components/Header/Header'
import { Init } from './pages/Init/Init'
import { Home } from './pages/Home/Home'
import { Footer } from './components/Footer/Footer'
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Init />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
