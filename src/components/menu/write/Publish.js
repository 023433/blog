import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import CardHeader from '../CardHeader';

import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default function Publish(props) {

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
      <CardHeader title="공개 설정" icon={ <LockOpenIcon/>}/>
      <Paper elevation={0} className={classes.paper}>
        <ButtonGroup
          fullWidth={true}
          size="large"
          variant="contained" 
          color="primary">
          <Button className={classes.button}>공개</Button>
          <Button className={classes.button}>비공개</Button>
        </ButtonGroup>
      </Paper>
      
    </React.Fragment>
  )
}

