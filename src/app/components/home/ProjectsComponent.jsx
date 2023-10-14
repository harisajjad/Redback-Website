import React from "react";
import "./HomeStyles.css";
import data from "../../../assets/project.json";
import { RecordVoiceOver } from "@material-ui/icons";

export default function ProjectBanner() {
    return(
    <div className="projects-container">
        <h2>List of Our Projects</h2>
            {data.projects.map((test)=> {
                return <div key={data.projects.number} className="project-names"><p className="project-number">Project {test.number}: </p> <p className="project-title">{test.name}</p></div> 
            })}
    </div>
    )
}