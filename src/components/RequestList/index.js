import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Message from "../Message";
import FormDialogWrapped from "../Form";
import Filters from "../Filter";
import { useStyles } from "./style";

let id = 0;
function createData(user, type, startDate, endDate, state) {
  id += 1;
  return { id, user, type, startDate, endDate, state };
}

const rows = [
  createData(
    "Tatiana Moreira Beita",
    "Vacaciones",
    "24/6/2019",
    6.0,
    24,
    "Aprobado"
  ),
  createData(
    "Nicole Neira Sanchez",
    "Permiso sin goce de salario",
    "24/6/2019",
    9.0,
    37,
    "Denegado"
  ),
  createData(
    "Marcos Juarez Lopez",
    "Permiso con goce de salario",
    "24/6/2019",
    "24/6/2019",
    "En proceso"
  ),
  createData(
    "Katya Nuñez Hernandez",
    "Matrimonio",
    "24/6/2019",
    3.7,
    67,
    "Denegado"
  ),
  createData("Ulises Torres Figueres", "Bla", "24/6/2019", 16.0, 49, "Denegado")
];

const RequestList = () => {
  const [modalState, setModalState] = useState(false);
  const classes = useStyles();
  return (
    <Grid container spacing={16} className={classes.root}>
      <Grid xs={12} item>
        <Grid xs={6} item>
          <Typography variant="h5" component="h3">
            Historial de solicitudes
          </Typography>
        </Grid>
        <Grid xs={6} item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setModalState(true)}
          >
            Crear solicitud
          </Button>
        </Grid>
        <Filters />
        <Grid item>
          <Message />
        </Grid>
      </Grid>
      <Grid xs={12} item>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Colaborador</TableCell>
                <TableCell>Tipo</TableCell>
                <TableCell>Fecha Inicial</TableCell>
                <TableCell>Fecha Final</TableCell>
                <TableCell>Estado</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.user}
                  </TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.startDate}</TableCell>
                  <TableCell>{row.endDate}</TableCell>
                  <TableCell>{row.state}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <FormDialogWrapped
        open={modalState}
        onClose={() => setModalState(false)}
      />
    </Grid>
  );
};

export default RequestList;
