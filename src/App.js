import React from 'react';
import { Header } from "./components/Header";
import { Content } from './components/Content';
import { Collage } from "./components/Collage";
import { Footer } from './components/Footer';
import { Copyright } from "./components/Copyright";

import "./App.scss";


function App() {
  return (
<React.Fragment>
    <Header/>
    <Content/>
    <Collage/>
    <Footer/>
    <Copyright/>
</React.Fragment>
  );
}

export default App;
