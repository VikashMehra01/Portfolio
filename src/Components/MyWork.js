import React from 'react'

export default function MyWork() {
  return (
    <div className='MyWork'>
        <div className="MyWork-top">
            <div className="MyWork-top-heading">
                <span className="MyWork-first">My</span>&nbsp;<span className="MyWork-second">Work</span>
            </div>
            <div className="MyWork-top-about">
                <p >"My work is a fusion of creativity and technical expertise to craft captivating digital experiences."</p>
            </div>
            <div className="bottom-bar">

            </div>
        </div>
        <div className="MyWork-bottom">
            <div className="MyWork-bottom-nav">
                <button className="MyWork-nav-button">All</button>
                <button className="MyWork-nav-button">Design</button>
                <button className="MyWork-nav-button">Marketing</button>
                <button className="MyWork-nav-button">Photography</button>
            </div>
            <div className="MyWork-bottom-Work">
                <div className="Work">
                    <img src="Web-design.jpg" alt="" />
                </div>
                <div className="Work">
                    <img src="Programming.jpg" alt="" />
                </div>
                <div className="Work">
                    <img src="UX.jpg" alt="" />
                </div>
                <div className="Work">
                    <img src="Website.jpg" alt="" />
                </div>
                <div className="Work">
                    <img src="Photography.jpg" alt="" />
                </div>
                <div className="Work">
                    <img src="App-Development.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}
