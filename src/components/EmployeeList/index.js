import React, { useState } from "react";
import classnames from "classnames";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Container, Row, Col } from "react-bootstrap";

import Message from "../Message";
import EmployeeCard from "../EmployeeCard";
import { useStyles } from "./style";

let id = 0;
function createData(
  name,
  avatar,
  occupation,
  user,
  password,
  email,
  startDate,
  department,
  type,
  category,
  workShift
) {
  id += 1;
  return {
    id,
    name,
    avatar,
    occupation,
    user,
    password,
    email,
    startDate,
    department,
    type,
    category,
    workShift
  };
}

const employees = [
  createData(
    "Tatiana Moreira Beita",
    "T",
    "React Developer",
    "tatiana.moreira",
    "**********",
    "tatiana.moreira@softonitg.com",
    "Octubre 5, 2019",
    "Desarrollo",
    "Interno",
    "Operativo",
    "Regular"
  ),
  createData(
    "Marta Fernandez Ulloa",
    "M",
    "Human Resources",
    "marta.fernandez",
    "**********",
    "marta.fernandez@softonitg.com",
    "Octubre 5, 2019",
    "Desarrollo",
    "Interno",
    "Operativo",
    "Regular"
  ),
  createData(
    "Davide Tonti Tonti",
    "D",
    "CTO",
    "davide.tonti",
    "**********",
    "davide.tonti@softonitg.com",
    "Octubre 5, 2019",
    "Desarrollo",
    "Interno",
    "Operativo",
    "Regular"
  ),
  createData(
    "Laura Solano Perez",
    "L",
    "Project Manager",
    "laura.solano",
    "**********",
    "laura.solano@softonitg.com",
    "Octubre 5, 2019",
    "Desarrollo",
    "Interno",
    "Operativo",
    "Regular"
  )
];

const style = {
  display: "flex",
  flexWrap: "wrap"
};

const EmployeeList = () => {
  const [modalState, setModalState] = useState(false);
  const [expandedState, setExpandedState] = useState(false);
  const classes = useStyles();
  return (
    <>
      <Typography variant="h5" component="h3">
        Colaboradores
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setModalState(true)}
      >
        Agregar colaborador
      </Button>

      <Container fluid={false}>
        <Row style={style}>
          {employees &&
            employees.map(employee => (
              <Col xs={6} sm={4} md={3} key={employee.id}>
                <EmployeeCard avatar={employee.avatar} occupation={employee.occupation} name={employee.name} user={employee.user} password={employee.password} email={employee.email} startDate={employee.startDate} department={employee.department} type={employee.type} category={employee.category} workShift={employee.workShift}/>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default EmployeeList;
