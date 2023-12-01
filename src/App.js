
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Timeline from './pages/Timeline.js'
import Projects from './pages/Projects.js'

function App() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' Component={Home}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
