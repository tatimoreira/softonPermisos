import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import { useStyles } from "./style";
import {types} from "../../_constants/typeOptions";


const Form = ({onClose, open}) => {
  const classes = useStyles();
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [modalState, setModalState] = useState(false);
  const [labelWidth, setLabelWidth] = useState(7);
  return (
    <Dialog
      onClose={onClose}
      open={open}
      aria-labelledby="simple-dialog-title"
    >
    <DialogTitle id="simple-dialog-title">
      <h2>Crear solicitud de permiso</h2>
    </DialogTitle>
      <div>
        <div className={classes.container_centered}>
          <form>
            <div className={classes.form__input}>
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
            </div>
            <div className={classes.form__input}>
              <FormControl>
                <TextField
                  id="initialDate"
                  label="Fecha de inicio"
                  type="date"
                  defaultValue="2017-05-24"
                  className={classes.formControl}
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
        <div className={`${classes.send__bottom} ${classes.container_centered}`}>
          <Button variant="contained" color="primary">
            Enviar solicitud
          </Button>
        </div>
      </div>
    </Dialog>
  );
};

export default Form;
/*export default reduxForm({
  form: "Form" // a unique identifier for this form
})(Form);*/
