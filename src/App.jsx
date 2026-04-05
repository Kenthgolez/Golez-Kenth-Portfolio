import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cover from './pages/Cover'
import Personal from './pages/Personal'
import Education from './pages/Education'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Extra from './pages/Extra'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/extra" element={<Extra />} />
      </Routes>
    </Router>
  )
}

export default App
