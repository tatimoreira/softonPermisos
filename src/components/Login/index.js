import React, { useState }  from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import NavBar from "../NavBar";

import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <NavBar />
      <div className={classes.container_centered}>
        <form>
          <div className={classes.form__input}>
            <FormControl>
              <TextField
                id="user"
                label="Usuario"
                value={user}
                onChange={e => setUser(e.target.value)}
              />
            </FormControl>
          </div>
          <div className={classes.form__input}>
            <FormControl>
              <TextField
                id="password"
                label="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </FormControl>
          </div>
          <div >
            <Button variant="contained" color="primary">
              Iniciar sesión
            </Button>
          </div>
          <Link to="/register" className="btn btn-link">
            Registrar
          </Link>
        </form>
      </div>
    </>
  );
};

export default Login;
