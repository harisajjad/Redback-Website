import React from "react";
import "./OurProjectsStyles.css";
import "@fontsource/bodoni-moda";
import { ProjectContent } from "./ProjectContent";

export default function OurProjectComponent() {


	return (
		<div>
			<div className="Content">
				<div className="InfoContent">
				<h1>Our Projects</h1>
				<p>
					Redback Operations aims to harness the power of IoT, AI and 3D game
					worlds to push your exercise routine into the future. We aim to
					provide a community-driven exercise and well-being gaming experience
					with competitive elements. By developing cutting-edge technologies and
					advances in the space of IoT sensors, AI and Game development, Redback
					Operations seeks to provide users with a fully immersive experience
					where they can engage with other users both casually and competitively
					or enjoy individual exercise routines all the while receiving
					real-time feedback and tips on how to improve their performance and be
					the best person that they can be. To achieve this goal, Redback
					operations have three main objectives:
				</p>
				</div>
				<div className="ImgDisplay">
				    <div className="Rectangle1"></div>
		     	    <div className="HeadsetImg"></div>
			    </div>	 
			</div>
			<div className="Content1">
			    <div className="Img2"></div>
				<div className="ProjectDetail1">
				<p>
					• The development of an engaged and self-sustaining online community{" "}
					<br></br>
					<br></br>• The ability to provide real-time performance feedback to
					users through cutting edge IoT sensors and AI <br></br>
					<br></br>• Fully immersive 3D worlds that users can experience from
					the comfort of their own homes. <br></br>
					<br></br>
					<br></br>
					To be able to realize these objectives, Redback Operations has
					enlisted the skills and attributes of data scientists and analysts,
					IoT specialists, Game developers, cyber security specialists, web
					development, and DevOps experts all guided to success by a core team
					of project managers.
				</p>
			</div>
			</div>
			
      <ProjectContent/>
	  </div>
	);
}
