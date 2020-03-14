import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import InputAdornment from '@material-ui/core/InputAdornment';

export default function MenuCardHeader(props) {

  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    typography: {
      color: theme.palette.secondary.textColor
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <CardHeader
        avatar={
          <InputAdornment position="end" className={classes.icon}>
            {props.icon}
          </InputAdornment>
        }
        title={
          <Typography variant="subtitle2" className={classes.typography}>
            {props.title}
          </Typography>
        }
      />
    </React.Fragment>
    
    
  )
}