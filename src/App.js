
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
import Alert from './components/Alert';
function App() {
  return (
    <>
    <NoteState>
      <div>
   

        <Router>
          <Navbar />
          <Alert message="This is an alert box"/>
          <div className='container'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
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
