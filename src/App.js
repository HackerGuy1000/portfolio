
import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import About from './pages/About';
import NoPage from './pages/NoPage'

import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" component={<Home/>} />
          <Route index element={<Home />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="*" element={<NoPage />}/>
        </Routes>
    </div>
  );
}

export default App;
