import React , { useState }  from "react";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./style";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { types } from "../../_constants/typeOptions";
import { stateOptions } from "../../_constants/stateOptions";

const Filters = () => {
  const [type, setType] = useState("");
  const [user, setUser] = useState("User");
  const classes = useStyles();
  return (
    <div className={classes.filter__container}>
      <h3>Filtros</h3>
      <TextField
        className={classes.userFilter__input}
        id="user"
        label="Colaborador"
        value={user}
        margin="normal"
        onChange={e => setUser(e.target.value)}
      />
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="type-simple">Tipo</InputLabel>
        <Select
          value={type}
          onChange={e => setType(e.target.value)}
          inputProps={{
            name: "type",
            id: "type-simple"
          }}
        >
          {types.map(type => (
            <MenuItem value={type.value} primaryText={type.text}>
              {type.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="type-simple">Estado</InputLabel>
        <Select
          value={type}
          onChange={e => setType(e.target.value)}
          inputProps={{
            name: "type",
            id: "type-simple"
          }}
        >
          {stateOptions.map(state => (
            <MenuItem value={state.value} primaryText={state.text}>
              {state.text}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <TextField
          className={classes.startDate__input}
          id="initialDate"
          label="Fecha de inicio"
          type="date"
          defaultValue="2017-05-24"
          InputLabelProps={{
            shrink: true
          }}
        />
      </FormControl>
      <FormControl>
        <TextField
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
  );
};

export default Filters;
