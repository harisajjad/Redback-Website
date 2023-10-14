import React from "react"
import "./OurTeam.css"
import AliHassani from "./img/Ali-Hassani.png"
import KevinLee from "./img/Kevin-Lee.png"
import ImaliDias from "./img/Imali-Dias.png"
import EmilyChin from "./img/Emily-Chin.png"
import WilliamHebblewhite from "./img/William-Hebblewhite.png"
import SharniSujatha from "./img/Sharni-Sujatha.png"
import RaymondCorrigan from "./img/Raymond-Corrigan.png"
import AkshatArora from "./img/Akshat-Arora.png"
import MasonWilliamAllcorn from "./img/Mason-William-Allcorn.png"
import data from "../../../../src/assets/project.json"

export default function OurTeamComponent() {
  return <div className="our-team">
    <h2 className="our-team-heading">
      Our Teams
    </h2>
    <div className="directors-background">
      <div className="directors">
        <h3 className="our-directors-heading">Board of Directors</h3>
        <div className="our-board-directors-members">
          <div className="our-grid-directors"><img src = {AliHassani}/><h4>Ali Hassani</h4></div>
          <div className="our-grid-directors"><img src = {KevinLee}/><h4>Kevin Lee</h4></div>
          <div className="our-grid-directors"><img src = {ImaliDias}/><h4>Imali Dias</h4></div>
        </div>
      </div>
    </div>
    <h2 className="our-students-heading">Student Leadership</h2>
    <div className="our-student-directors-members">
      <div className="our-grid-students"><img src = {EmilyChin}/><div><h4>{data.leaders[1].name}</h4><p>{data.leaders[1].team}</p></div></div>
      <div className="our-grid-students"><img src = {WilliamHebblewhite}/><div><h4>{data.leaders[0].name}</h4><p>{data.leaders[0].team}</p></div></div>
      <div className="our-grid-students"><img src = {SharniSujatha}/><div><h4>{data.leaders[4].name}</h4><p>{data.leaders[4].team}</p></div></div>
      <div className="our-grid-students"><img src = {RaymondCorrigan}/><div><h4>{data.leaders[2].name} </h4><p>{data.leaders[2].team}</p></div></div>
      <div className="our-grid-students"><img src = {AkshatArora}/><div><h4>{data.leaders[3].name}</h4><p>{data.leaders[3].team}</p></div></div>
      <div className="our-grid-students"><img src = {MasonWilliamAllcorn}/><div><h4>{data.leaders[5].name}</h4><p>{data.leaders[5].team}</p></div></div>
      </div>

  </div>;
}
