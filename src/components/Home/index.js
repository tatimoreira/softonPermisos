import React from "react";
import Form from "../Form";
import NavBar from "../NavBar";
import RequestList from "../RequestList";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./style";

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Grid xs={12} className={classes.container}>
        <Grid>
          <RequestList />
        </Grid>
        <Grid xs={4} item>
          <Form />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
