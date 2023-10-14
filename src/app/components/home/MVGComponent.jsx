import React from "react";
import "./HomeStyles.css"
import Mission from "./img/missionImg.png"
import Vision from "./img/visionImg.png"
import Goal from "./img/goalImg.png"

export default function MVGBanner() {
  return (
      <div className="mvg-container">
        <div className="mvg-grid">
          <img src={Mission} alt="Company Mission" className="mvg-logos"/>
          <h3>Mission</h3>
          <p>Redback Operations aims to harness the power of IoT, AI and 3D game worlds to push your exercise routine into the future.</p></div>
        <div className="mvg-grid">
        <img src={Vision} alt="Company Vision" className="mvg-logos"/>
          <h3>Vision</h3>
          <p>By developing cutting-edge technologies and advances in the space of IoT sensors, AI and Game development, Redback Operations seeks to provide users with a fully immersive experience where they can engage with other users both casually and competitively.</p>
          </div>
        <div className="mvg-grid">
        <img src={Goal} alt="Company Goal" className="mvg-logos"/>
          <h3>Goal</h3>
          <ul>
            <li>Develop an engaged and self-sustaining online community </li>
            <li>Provide real-time performance feedback to users through cutting edge IoT sensors and AI </li>
            <li>Provide fully immersive 3D worlds that users can experience from the comfort of their own homes</li>
          </ul>
          </div>
      </div>
  )
}
