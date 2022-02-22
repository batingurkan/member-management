import React from "react";

import './index.css';


import Home from "./pages/home/";
import Contact from "./pages/contact/";
import About from "./pages/about/";
import UyeIslemleri from "./pages/uyeislemleri/";
import MenuBar from "./layout/header/menubar/MenuBar";
import Container from '@mui/material/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
        <MenuBar />
     
        <Container maxWidth="lg">
         <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/uyeislemleri">
            <UyeIslemleri />
          </Route>          
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </Container>
       
    </Router>
  );
}

