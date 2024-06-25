import React ,{useState} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './App.css';


function App() {
  
  const [text] = useTypewriter({
    words: ['Vikash', 'Coder', 'Soul', 'Devotee'],
    loop: {},
    delaySpeed: 300,
    deleteSpeed: 100,
    cursorStyle: '|',
    typeSpeed: 100,
  })

  return (
    <>
    <div className="navbar">
      <div className="nav-left">
        <p id='logo'>
          PORTFOLIO
        </p>
      </div>
      <div className='nav-right'>
        <a href='#' >HOME</a>
        <a href='#'>ABOUT</a>
        <a href='#'>SERVICE</a>
        <a href='#'>WORK</a>
        <a href='#'>RESUME</a>
        <a href='#'>BLOG</a>
        <a href='#'>CONTACT</a>
      </div>
    </div>
    <div className='Main'>
      <div className='main-left'>
        <p className='wel'>
          WELCOME!
        </p>

        <div className="Intro">
          <div className="intro">I am &nbsp;f</div><div className="typing">
            <span className="cursor">{text}<Cursor/></span></div>
        </div>

        <div className='about'>
        "Ah, the futility of your pitiful civilizations. I, Thanos, am the embodiment of balance and sustainability. My Infinity Gauntlet contains the power of the six Infinity Stones, granting me the ability to erase half of all life in the universe with a mere snap of my fingers. This cruel yet necessary measure ensures that resources are conserved and the cosmos are spared from the impending collapse that your reckless consumption and overpopulation would inevitably bring. To them, I am a ghastly figure of despair. To the universe, I am its savior."
        </div>
        <div className='handle'>
          <div className='icon'>

          </div>
          <div className='icon'>
              
          </div>
          <div className='icon'>
            
          </div>
          <div className='icon'>
          
          </div>
          <div className='icon'>
          
          </div>
        </div>

      </div>
      <div className='main-right'>
        <img src='/Thanos.png' className="thanos"/>
      </div>
    </div>
    </>
  );
}

export default App;
