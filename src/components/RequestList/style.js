import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  noRequest: {
    padding: "20px",
    marginTop: "20px"
  },
  formControl: {
    width: '250px',
    minWidth: 120,
    marginRight: "20px !important"
  },
  filter__container:{
    padding: "10px"
  },
  userFilter__input:{
    marginTop : "0px !important",
    marginRight: "10px !important"
  },
  startDate__input:{
    marginRight: "20px !important"
  }
});
