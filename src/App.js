import logo from './logo.svg';
import './App.css';
import 'animate.css';
import Login from './components/connection';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home';
import Caisse from './components/caisse/caisse';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Login />}/>
 
      <Route exact path="/dashboard" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
