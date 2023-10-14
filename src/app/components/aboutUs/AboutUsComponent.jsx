import React from "react";
import  "./AboutUsStyles.css"
import barbell from "./img/barbell.png"
import deadlift from "./img/deadlift.png"
import gym from "./img/gym.png"
import biking from "./img/biking.png"

export default function AboutUsComponent() {
  return <div className="about-us">
    <img className="about-us-banner-img" src={barbell}></img>
    <div className="about-us-title"><h2>ABOUT US</h2> <p>Redback Operations aims to harness the power of IoT, AI and 3D game worlds to push your exercise routine into the future.</p></div>
    <div className="about-us-container">
      
      <img src={deadlift} className="about-us-img"></img>
      <p>
        Redback Operations builds cutting-edge technologies for connected health, fitness and sport to enable safe smart exercise. 
        It is focused on providing a community-driven exercise and well-being gaming experience with competitive elements. 
      </p>
      <p>
      By developing cutting-edge technologies and advances in the space of IoT sensors, AI and Game development, Redback Operations seeks to 
      provide users with a fully immersive experience where they can engage with other users both casually and competitively or enjoy individual exercise 
      routines all the while receiving real-time feedback and tips on how to improve their performance and be the best person that they can be.
      </p>
      <img src={gym} className="about-us-img"></img>
      <img src={biking} className="about-us-img"></img>
      <p>
      We believe in enabling safe smart exercise through connecting health, fitness and sport. To achieve this goal, Redback operations work to: <br></br>
      • Develop an engaged and self-sustaining online community <br></br>
      • Provide real-time performance feedback to users through cutting edge IoT sensors and AI <br></br>
      • Provide fully immersive 3D worlds that users can experience from the comfort of their own homes. 
      </p>
    </div>
    <p className="about-us-footer">Join us today and enjoy a fully immersive experience where you will enjoy individual exercise routines all the time while receiving real-time 
      feedback and tips on how to improve their performance. Share your exercise with our community and engage with other users both casually and 
      competitively. <br></br>Act now and be the best person you can be.</p>
  </div>;
}
