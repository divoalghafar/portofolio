import React from 'react';
import './App.css';
import Header from './Header';
import Content from './Content';
import Images from './Images';
//gsap
import{gsap, Power3} from 'gsap';

function App() {
  //gsap
  let tl = new gsap.timeline();
  let ease = Power3.easeInOut;
  return (
    <div className="hero">
      <Header timeline={tl} ease={ease} />
      <div className="container">
        <Content timeline={tl}/>
        <Images timeline={tl} ease={ease} />
      </div>
    </div>
  );
}

export default App;
