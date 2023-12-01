import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Timeline from './pages/Timeline.js'
import Projects from './pages/Projects.js'
import './App.css'

function App() {

  return (
    
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/code-portfolio-v2/' Component={Home}/>
          <Route path='/code-portfolio-v2/projects' Component={Projects}/>
          <Route path='/code-portfolio-v2/timeline' Component={Timeline}/>
          <Route path='/code-portfolio-v2/contact' Component={Contact}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
