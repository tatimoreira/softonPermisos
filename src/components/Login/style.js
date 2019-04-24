import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  container_centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  form__container:{
    padding: "20px"
  },
  formControl: {
    width: '300px',
    minWidth: 120,
  },
  textField: {
    width: 200
  },
  form__input : {
    paddingBottom: '25px',
  },
  send__bottom : {
    marginBottom: '25px',
  }
});
