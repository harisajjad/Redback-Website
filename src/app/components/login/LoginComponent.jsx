import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import "./LoginStyles.css";
import agent from "../../proxy/userService";
import { useHistory } from "react-router-dom";

export default function LoginComponent(props) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);

  function handleClick() {
    const userDetail = {
      username: email,
      password: password,
    };
    agent.UserAPI.login(userDetail).then((response) => {
      sessionStorage.setItem("access_token", response["accessToken"]);
      sessionStorage.setItem("refresh_token", response["refreshToken"]);
      sessionStorage.setItem("username", email);
      history.push("/");
    });
  }

  const showLoginForm = () => {
    setIsLoginFormVisible(true);
  };

  const hideLoginForm = () => {
    setIsLoginFormVisible(false);
  };

  return (
    <div className="LoginComponent">
      <div style={{ padding: 30 }}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          {!isLoginFormVisible && (
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <Button
                onClick={showLoginForm}
                style={{
                  borderRadius: 25,
                  backgroundColor: "#e87461",
                  color: "#FFFF",
                  width: "200px",
                  padding: "10px",
                  fontSize: "15px",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#d35649")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "#e87461")}
              >
                Login/SignUp
              </Button>
            </div>
          )}

          {isLoginFormVisible && (
            <div style={{ textAlign: "center" }}>
              <h1
                style={{
                  color: "#FFFF",
                }}
              >
                Login
              </h1>
              <div style={{ textAlign: "center" }}>
                <Grid container direction="column" alignItems="center">
                  <Grid item xs={12}>
                    <TextField
                      className="Login-input"
                      value={email}
                      type="email"
                      placeholder="username"
                      onChange={(e) => setEmail(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      large
                      className="Login-input"
                      value={password}
                      type="password"
                      placeholder="password"
                      onChange={(e) => setPassword(e.target.value)}
                    ></TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleClick}
                      style={{
                        borderRadius: 25,
                        backgroundColor: "#e87461",
                        color: "#FFFF",
                        width: "140%",
                        marginLeft: "10px",
                        marginTop: "20px",
                        padding: "10px 30px",
                        fontSize: "15px",
                      }}
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <div
                      style={{
                        marginLeft: "40px",
                        color: "#FFFF",
                      }}
                      className="createprofile"
                    >
                      {" "}
                      <Link
                        style={{
                          marginLeft: "40px",
                          color: "#FFFF",
                        }}
                        to={"./signUp"}
                      >
                        {" "}
                        Create a profile{" "}
                      </Link>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
}
