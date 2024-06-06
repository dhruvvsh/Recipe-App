// src/styles.js
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  card: {
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export default useStyles;
