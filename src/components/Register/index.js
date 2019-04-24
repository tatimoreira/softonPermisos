import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import NavBar from "../NavBar";

import { useStyles } from "./style";

const Register = () => {
  const classes = useStyles();
  return (
    <>
      <NavBar />
      <div className={classes.container_centered}>
        <form>
          <div className={classes.form__input}>
            <FormControl>
              <TextField id="firstName" label="Nombre" />
            </FormControl>
          </div>
          <div className={classes.form__input}>
            <FormControl>
              <TextField id="lastName" label="Apellido" />
            </FormControl>
          </div>
          <div className={classes.form__input}>
            <FormControl>
              <TextField id="user" label="Usuario" />
            </FormControl>
          </div>
          <div className={classes.form__input}>
            <FormControl>
              <TextField id="occupation" label="Ocupación" />
            </FormControl>
          </div>
          <div className={classes.form__input}>
            <FormControl>
              <TextField id="password" label="Contraseña" />
            </FormControl>
          </div>
          <div
            className={`${classes.send__bottom} ${classes.container_centered}`}
          >
            <Button variant="contained" color="primary">
              Registrar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
