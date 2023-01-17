import React from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import "./App.css";
import { Grid } from "./components/Grid";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";


    // <Router>
    //   <header>
    //     <Link to="/">Home</Link>
    //     <Link to="/movie">Movie</Link>
    //     className="flex justify-center m-5 text-4xl"
    //   </header>
    //   <main>
    //     <Switch>
    //       <Route path="/movie">Movie</Route>
    //       <Route path="/">Home</Route>
    //       <Grid />
    //     </Switch>
    //   </main>
    // </Router>
    
  export function App() {
          return (
            <BrowserRouter>
            <header>
              <Link to="/home"><h1 className="bg-black text-white flex justify-center p-5 text-3xl">
                Peliculas
              </h1>
              </Link >
              
            </header>
              <Link to="/blog"><h1>Aboutss</h1>
              </Link>
            
              <Routes>
                {/* <Link to='/Blog'>Movie</Link>  */}
                <Route path="/Home" element={<Home/>} />
                <Route path="/About" element={<About/>} />
                <Route path="/Blog" element={<Blog/>} />
              </Routes>
              
            </BrowserRouter>
          );
        }
        
 
