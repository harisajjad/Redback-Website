import React, { useEffect, useState } from "react";
import "./HomeStyles.css";
import Carousell from "./carousel";
import Article from "./Article";
import { useLocation } from "react-router-dom";
import agent from "../../proxy/userService";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Board from "./BoardDirectors";
import MVGBanner from "./MVGComponent";
import ProjectList from "./ProjectsComponent"
import HomePageFooter from "./HomePageFooter";

export default function HomepageComponent(props) {
  const location = useLocation();
  const [userDetail, setUserDetail] = useState("");
  const [display,setDisplay] =useState(false);
  useEffect(() => {
    let username = sessionStorage.getItem("username");
    if (username != null) {
      agent.UserAPI.detail(username).then((response) => {
        setUserDetail(response);
        setDisplay(true);
        console.log(response);
      });
    } else {
      setDisplay(false);
    }
  }, []);
  return (
    <div>
      <>
       
        {display  && (
          <div className="user">
            <Card sx={{ minWidth: 275 }} className="user-details-data">
              <CardContent>
                {/* <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Email -{userDetail.email}
                </Typography> */}
                <Typography variant="h5" component="div">
                  Welcome {userDetail.firstname} {userDetail.lastname}
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  LastName -{userDetail.lastname}
                </Typography> */}
                <Typography variant="body2" className="user-details-text">
                  Your user level is {userDetail.userLevel}
                  <br />
                </Typography>
                {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Your phone number is {userDetail.telephone}
                </Typography> */}
              </CardContent>
            </Card>
            <h3 className="user-info">User Details</h3>
          </div>
        )}
      </>
      <Carousell />
      <Article />
      <Board/>
      <MVGBanner/> 
      <ProjectList/> 
      <HomePageFooter/>
    </div>
  );
}
