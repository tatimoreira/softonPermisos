import React, { useState } from "react";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./style";

const EmployeeCard = (props) => {
  const classes = useStyles();
  const employee = props;
  const [expandedState, setExpandedState] = useState(false);
  return (
    <div>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Employee" className={classes.avatar}>
              {employee.avatar}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={employee.name}
          subheader={employee.occupation}
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: expandedState
            })}
            onClick={() => setExpandedState(!expandedState)}
            aria-expanded={expandedState}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expandedState} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Usuario : {employee.user}</Typography>
            <Typography paragraph>Contraseña : {employee.password}</Typography>
            <Typography paragraph>Correo : {employee.email}</Typography>
            <Typography paragraph>
              Fecha de ingreso : {employee.startDate}
            </Typography>
            <Typography paragraph>
              Departamento : {employee.department}
            </Typography>
            <Typography paragraph>
              Tipo de empleado : {employee.type}
            </Typography>
            <Typography paragraph>
              Categoría de empleado : {employee.category}
            </Typography>
            <Typography paragraph>
              Turno de trabajo : {employee.workShift}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default EmployeeCard;
