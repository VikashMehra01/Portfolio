import React ,{useState} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './App.css';
import MyService from './Components/MyService';


function App() {
  
  const [text] = useTypewriter({
    words: ['Vikash', 'Coder','Programmer','Developer', 'Soul', 'Devotee'],
    loop: {},
    delaySpeed: 1000,
    deleteSpeed: 200,
    cursorStyle: '|',
    typeSpeed: 250,
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
          <div className="intro">I am&nbsp;</div><div className="typing">
            <span className="Prof">{text}<Cursor/></span></div>
        </div>

        <div className='about'>
          "As a Computer Science Engineering student at IIT Ropar, I have developed strong programming skills in C++, Java, and Python. My academic and project experiences focus on software and web development, with a keen interest in algorithms and data structures.I excel in problem-solving and technical innovation. I value collaborative environments with open communication and regular meetings. My goal is to specialize in a dynamic tech field, leveraging my expertise and passion to drive impactful projects and solutions."
        </div>
        <div className='handle'>
          <div className='icon'>
          <a href="https://leetcode.com/u/VikashMehra01/" target='_blank'><img src="leetcode.svg" alt="" className='leetcode' /></a>
          </div>
          <div className='icon'>
          <a href="https://www.geeksforgeeks.org/user/2023csterb/" target='_blank'><img style={{marginTop:"0.45rem"}} src="https://img.icons8.com/color/48/GeeksforGeeks.png" alt="GeeksforGeeks" className='leetcode'/></a>
          </div>
          <div className='icon'>
          <a href="https://www.linkedin.com/in/vikash-kumar-173691287/" target='_blank'><img src="linkedin.gif" alt="" className='leetcode'/></a>
          </div>
          <div className='icon'>
          <a href="https://www.instagram.com/vikash_mehra23/" target='_blank'><img src="instagram.gif" alt=""  className='leetcode'style={{marginTop:"0.45rem"}}/></a>
          </div>
          <div className='icon'>
          <a href="https://github.com/Vikash1172" target='_blank'><img src="github.gif" alt="" style={{marginTop:"0.45rem"}} className='leetcode'/></a>
          </div>
        </div>

      </div>
      <div className='main-right'>
        <div className="circle">

        </div>
        <img src='/vikashkumar.png' className="thanos"/>
      </div>
    </div>
    <MyService/>
    </>
  );
}

export default App;
