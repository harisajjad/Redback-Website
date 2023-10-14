import React from "react";
import "./HomeStyles.css"

export default function Banner() {
  return (
      <div className="banner-container">
          <div className="image-banner">
            <img 
            className="banner-img" 
            src="https://www.cnet.com/a/img/resize/dc8bcdaac44db53a4dda3075f78ccf576d1fd9a5/2020/07/07/4d7ab387-8ba0-4f9e-9f10-571b37bce774/gettyimages-932459194.jpg?auto=webp&fit=crop&height=675&width=1200" 
            alt="Error"/>
          </div>
          <div className="info-banner">
            <h2 className="banner-heading">
                Excersise and get rewarded
            </h2>
            <button className="banner-button">
                Create Account
            </button>
          </div>
      </div>
  )
}