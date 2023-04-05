import logo from './logo.svg';
import './App.css';
import bg from "./images/background.jpg";
import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {


  return (
    <>
    <Router>
     <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />


   </Routes>
   </Router>
   </>
  );
}

export default App;
