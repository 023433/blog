import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';

import LogoMedium from '../svg/logo/medium'
import CardContent from './CardContent';

export default function Logo() {
  const useStyles = makeStyles(theme => ({
    typography: {
      color: theme.palette.secondary.textColor
    },
    logoFirst: {
      fill: theme.palette.logo.first.fill
    },
    logoSecond: {
      fill: theme.palette.logo.second.fill
    },

  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <LogoMedium 
        logoFirst={classes.logoFirst} 
        logoSecond={classes.logoSecond}/>
        <CardContent content={
          <Typography variant="subtitle1" className={classes.typography} align="center">
            Dev-J
          </Typography>
        }/>
    </React.Fragment>
  )
}