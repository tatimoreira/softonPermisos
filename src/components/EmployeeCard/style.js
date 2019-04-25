import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      container:{
        padding: '20px',
      },
      formControl: {
        minWidth: 120,
      },
      container_centered: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
});