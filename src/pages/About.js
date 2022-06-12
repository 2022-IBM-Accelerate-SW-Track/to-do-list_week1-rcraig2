import React, { Component } from 'react';
import "./About.css"
import headshot from "../assets/profile_ricacraig.png"
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              src = {headshot}
              alt="Profile Pic"
              ></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Rica Craig</div>
            <div className="brief_description">
                 <h2>Hi, I am Rica.</h2>
                 <p>I am a rising junior majoring in Biometry and Statistics and minoring in Information Science and Business.</p>
                 <p>I have been immersing myself in tech through opportunities such as working on web development in Women in Computing at Cornell.</p>
                 <p>I have also taken classes that introduced me to HTML, CSS, JavaScript, and Python.</p>
                 <p>I am looking forward to what's to come during IBM Accelerate!</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

