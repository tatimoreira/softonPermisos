import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/ReportProblem";
import { useStyles } from "./style";

const Message = () => {
  const classes = useStyles();
  return (
    <div>
          <Paper
            className={`${classes.noRequest} ${classes.container_centered}`}
          >
            <Typography variant="h5" component="h3">
              <DeleteIcon className={classes.icon} />
              No hay solicitudes de permisos.
            </Typography>
          </Paper> 
    </div>
  );
};

export default Message;
