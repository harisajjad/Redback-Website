import React from "react";
import "./HomeStyles.css"
import logo from "./img/Logo.png"

export default function Article() {
    return (
    <div className="background">
        <div className="redback-banner">
                <img className="home-logo" src={logo}/>
                <div className="info">
                    <h3>Welcome to Redback Operations</h3>
                    <p>Redback Operations builds cutting-edge technologies for connected health, 
                        fitness and sport to enable safe smart exercise. It is focused on providing 
                        a community-driven exercise and well-being gaming experience with competitive elements. </p>
                </div>
            </div>
        </div>
    );
}