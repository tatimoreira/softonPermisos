import React from "react";
import Form from "../Form";
import NavBar from "../NavBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

const Home = () => {
  return (
    <div>
      <NavBar />
      <p>No tienes solicitudes de permisos.</p>
      <Form />
    </div>
  );
};

export default Home;
