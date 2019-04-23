import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { useStyles } from "./style";

const Login = () => {
  const classes = useStyles();
  return (
    <div className={classes.container_centered}>
          <form>
            <div className={classes.form__input}>
              <FormControl>
                <TextField
                  id="user"
                  label="Usuario"
                />
              </FormControl>
            </div>
            <div className={classes.form__input}>
              <FormControl>
                <TextField
                  className={classes.formControl}
                  id="finalDate"
                  label="Fecha final"
                  type="date"
                  defaultValue="2017-05-24"
                  InputLabelProps={{
                    shrink: true
                  }}
                />
              </FormControl>
            </div>
            <div className={classes.form__input}>
              <FormControl>
                <TextField
                  className={classes.formControl}
                  id="outlined-multiline-static"
                  label="Descripción"
                  multiline
                  rows="4"
                  defaultValue=""
                  margin="normal"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                />
              </FormControl>
            </div>
          </form>
        </div>
  );
};

export default Login;
