import React ,{ Component } from "react"
//import logo from './logo.svg';
import './App.css';

import { Route, Routes, Link, Outlet, useNavigate } from 'react-router-dom'

import Home from './Home'
import Page1 from './Page1'
import Me from './Me'
import Others from './Others'
import About from './About'
import Contact from './Contact'
import NotFound from './NotFound'

function Layout() {
  const navigate = useNavigate()
  const handleClick = (e)=>{
    if(e.target.name==="home"){
      navigate("/")
    }
    else if(e.target.name==="page1"){
      navigate("/page1")
    }
    else if(e.target.name==="about"){
      navigate("/about")
    }
    else if(e.target.name==="contact"){
      navigate("/contact")
    }
  }
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
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
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
        <div>
        <button onClick={handleClick} name="home">Home</button>
        <button onClick={handleClick} name="page1">Page1</button>
        <button onClick={handleClick} name="about">About</button>
        <button onClick={handleClick} name="contact">Contact</button>
        </div>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

class App extends Component{
  constructor(props){
    console.log("App.constructor")
    super(props);
    // this.state = {
    //      state:0
    // }
    //this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
      console.log("App.componentDidMount")  
  }
  componentWillUnmount(){
    console.log("App.componentWillUnmount")
  }
  // handleClick(e){
  //   if(e.target.name==="home"){
  //     this.props.navigate("/")
  //   }
  //   else if(e.target.name==="page1"){
  //     this.props.navigate("/page1")
  //   }
  //   else if(e.target.name==="about"){
  //     this.props.navigate("/about")
  //   }
  //   else if(e.target.name==="contact"){
  //     this.props.navigate("/contact")
  //   }
  // }
  render() {
    return (
      <div>
        <h1>Hello React Pwa</h1>
        {
          /*
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
          */
        }
        <div>
          {/*
        <button onClick={this.handleClick} name="home">Home</button>
        <button onClick={this.handleClick} name="page1">Page1</button>
        <button onClick={this.handleClick} name="about">About</button>
        <button onClick={this.handleClick} name="contact">Contact</button>
           */
          }
        </div>
        <Routes>
          <Route exact path="/"  element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="page1" element={<Page1 />} />
            <Route path="page1/:id" element={<Others/>}/>
            <Route path="page1/me" element={<Me/>}/>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
             {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes> 
      </div>    
    )
  }
}

// function App() {
//   const navigate = useNavigate()
//   const handleClick = (e) => {
//     console.log(e)
//     if(e.target.name==="home"){
//       navigate("/")
//     }
//     else if(e.target.name==="page1"){
//       navigate("/page1")
//     }
//     else if(e.target.name==="about"){
//       navigate("/about")
//     }
//     else if(e.target.name==="contact"){
//       navigate("/contact")
//     }
//   }
//   return(
//     <div>
//     <h1>Hello React Pwa</h1>
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/page1">Page1</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/contact">Contact</Link>
//       </li>
//     </ul>
//     <div>
//     <button onClick={handleClick} name="home">Home</button>
//     <button onClick={handleClick} name="page1">Page1</button>
//     <button onClick={handleClick} name="about">About</button>
//     <button onClick={handleClick} name="contact">Contact</button>
//     </div>
//     <Routes>
//       <Route exact path="/"  element={<Home/>}/>
//       <Route path="/page1" element={<Page1/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//       <Route element={<NotFound/>}/>
//     </Routes>
//     </div>
//   )
// }


//
//もとのApp
//

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
