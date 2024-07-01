import React ,{useState} from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import './App.css';
import MyService from './Components/MyService';
import MyWork from './Components/MyWork';


function App() {
  
  const [text] = useTypewriter({
    words: ['Vikash Mehra', 'Coder',,'Developer','Programmer', 'Gamer', ],
    loop: {},
    delaySpeed: 1000,
    deleteSpeed: 200,
    cursorStyle: '|',
    typeSpeed: 250,
  })
  const [display,setdisplay]=useState("");
  function show(){
    setdisplay("flex");
  }
  function hide(){
    setdisplay("none");
  }

  return (
    <>
    <div className="navbar" id='Home'>
      <div className="nav-left">
        <button className='button' onClick={show}><i class="fa-solid fa-bars"></i></button>
        <p id='logo'>
          PORTFOLIO
        </p>
      </div>
      <div className='nav-right'>
        <a href='#Home'>HOME</a>
        <a href='#About'>ABOUT</a>
        <a href='#MyService'>SERVICE</a>
        <a href='#MyWork'>WORK</a>
        <a href='#'>RESUME</a>
        <a href='#'>BLOG</a>
        <a href='#'>CONTACT</a>
      </div>
    </div>
    <div className="sidebar" style={{display:display}} onMouseEnter={show} onMouseLeave={hide}>
        <h5>Vikash Mehra</h5>
        <hr />
        <a href='#Home' >HOME</a>
        <a href='#About'>ABOUT</a>
        <a href='#MyService'>SERVICE</a>
        <a href='#MyWork'>WORK</a>
        <a href='#'>RESUME</a>
        <a href='#'>BLOG</a>
        <a href='#'>CONTACT</a>

    </div>
    <div className='Main' id='About'>
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
        <div className="img">
        <div className="circle">
        </div>
        <div className="thanos">
        <img src='/vikashkumar.png' className="thanos"/>
        </div>
        </div>

      </div>
 
    </div>
    <MyService/>
    <MyWork/>
    </>
  );
}

export default App;
