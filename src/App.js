
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
   

        <Router>
          <Navbar />
          <div className='container'>
          <Routes>
            <Route exact path="/home" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
          </Routes>
          </div>
        </Router>
      </div>



    </NoteState>
    </>
  );
}

export default App;
