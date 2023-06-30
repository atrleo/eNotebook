
import './App.css';
import {
  BrowserRouter as 
  Router,
  Route,
  Routes
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/noteState';
function App() {
  return (
    <>
    <NoteState>
      <div>
        <h1 style={{ alignItems: 'center', textAlign: 'center', color: 'darkgrey' }}>This is eNotebook</h1>

        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
        </Router>
      </div>



    </NoteState>
    </>
  );
}

export default App;
