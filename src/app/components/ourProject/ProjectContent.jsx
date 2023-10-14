import React from 'react'
import Container from "@mui/material/Container";
import "./OurProjectsStyles.css";
import "@fontsource/bodoni-moda";
import projectDetail from "../../../assets/project.json";

export const ProjectContent = () => {
    const { projects, leaders } = projectDetail;
	console.log("projectes : ", projects);
	console.log("leaders : ", leaders);
	console.log("pro1", projects[0].name);
    const Name = projects.map(project=>{
        return (
            <div>
                <div className='grid-project'><p> Project {project.number} : {project.name}</p></div>
                <div className='grid-description'><p> {project.description}</p></div>
            </div>
        )
    })
  return (
    
    <div className='Project-Content-Container'>
        <div className='ProjectContent'>{Name}</div>
    </div>
  )
}
