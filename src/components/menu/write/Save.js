import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import SaveAltIcon from '@material-ui/icons/SaveAlt';
import CardHeader from '../CardHeader';

import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

export default function Save(props) {

  const useStyles = makeStyles(theme => ({
    paper: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
      paddingBottom: `${theme.spacing(2)}px`,
    },
    button: {
      backgroundColor: theme.palette.saveButton.backgroundColor,
      color: theme.palette.button.color,
      textTransform: "none",
      border: theme.palette.button.border,
    },
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CardHeader title="저장" icon={ <SaveAltIcon/>}/>
      <Paper elevation={0} className={classes.paper}>
        <Button fullWidth={true} type="submit" className={classes.button}>저장</Button>
      </Paper>
    </React.Fragment>
  )
}

