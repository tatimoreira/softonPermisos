import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { useStyles } from "./style";

const selectValues = [
  {
    value: 1,
    text: "Vacaciones"
  },
  {
    value: 2,
    text: "Permiso sin Goce Salarial"
  },
  {
    value: 3,
    text: "Permiso Con Goce Salarial"
  },
  {
    value: 4,
    text: "Licencia por Maternidad"
  },
  {
    value: 5,
    text: "Licencia de Matrimonio"
  },
  {
    value: 6,
    text: "Cambio de Jornada Laboral"
  },
  {
    value: 7,
    text: "Solicitud Horas Extras"
  },
  {
    value: 8,
    text: "Fallecimiento Familiar"
  },
  {
    value: 9,
    text: "Paid Day Off ( Cumpleaños)"
  },
  {
    value: 10,
    text: "Constancia Salarial/Laboral"
  },
  {
    value: 11,
    text: "Solicitud trabajo remoto desde el extranjero (Viaje)"
  },
  {
    value: 12,
    text:
      "Dia de Asueto (solo valido para empleados que realizan preaviso laboral)"
  }
];

const Form = () => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [labelWidth, setLabelWidth] = useState(7);
  return (
    <div>
      <div className={classes.container_centered}>
        {" "}
        <h1>Solicitud de Permiso, SoftonITG.</h1>
      </div>

      <div className={classes.container_centered}>
        <form>
          <div>
            <FormControl variant="outlined">
              <InputLabel htmlFor="type-simple">Tipo</InputLabel>
              <Select
                value={type}
                onChange={e => setType(e.target.value)}
                inputProps={{
                  name: "type",
                  id: "type-simple"
                }}
              >
                {selectValues.map(type => (
                  <MenuItem value={type.value} primaryText={type.text}>
                    {type.text}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              id="outlined-multiline-static"
              label="Descripción"
              multiline
              rows="4"
              defaultValue=""
              margin="normal"
              variant="outlined"
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className={classes.container_centered}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
      </div>
    </div>
  );
};

export default Form;
/*export default reduxForm({
  form: "Form" // a unique identifier for this form
})(Form);*/
