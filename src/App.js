import React from 'react';
//import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

function App() {
  return (
    <BrowserRouter>
       <h1>Hello React Pwa</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page1">Page1</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/page1" element={<Page1/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route component={NotFound}/>
      </Routes>

    </BrowserRouter>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
