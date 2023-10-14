import React from "react";
import "./HomeStyles.css"
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

export default function BoardDirectors() {
    return (
        <div className="directors-students-container">
            <div className="board-directors">
                <h3 className="directors-heading">Board of Directors</h3>
                <div className="board-directors-members">
                    <div className="grid-directors"><img src = {AliHassani}/><h4>Ali Hassani</h4></div>
                    <div className="grid-directors"><img src = {KevinLee}/><h4>Kevin Lee</h4></div>
                    <div className="grid-directors"><img src = {ImaliDias}/><h4>Imali Dias</h4></div>
                </div>
                <h3 className="students-heading">Student Leadership</h3>
                <div className="student-directors-members">
                    <div className="grid-students"><img src = {EmilyChin}/><div><h4>{data.leaders[1].name}</h4><p>{data.leaders[1].team}</p></div></div>
                    <div className="grid-students"><img src = {WilliamHebblewhite}/><div><h4>{data.leaders[0].name}</h4><p>{data.leaders[0].team}</p></div></div>
                    <div className="grid-students"><img src = {SharniSujatha}/><div><h4>{data.leaders[4].name}</h4><p>{data.leaders[4].team}</p></div></div>
                    <div className="grid-students"><img src = {RaymondCorrigan}/><div><h4>{data.leaders[2].name} </h4><p>{data.leaders[2].team}</p></div></div>
                    <div className="grid-students"><img src = {AkshatArora}/><div><h4>{data.leaders[3].name}</h4><p>{data.leaders[3].team}</p></div></div>
                    <div className="grid-students"><img src = {MasonWilliamAllcorn}/><div><h4>{data.leaders[5].name}</h4><p>{data.leaders[5].team}</p></div></div>

                </div>
            </div>
        </div>
    );
  }