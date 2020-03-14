import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LogoMedium from '../svg/logo/medium'

export default function RightMenu() {

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    typography: {
      color: theme.palette.secondary.textColor
    },
    grid: {
      marginBottom: `${theme.spacing(1)}px auto`,
      boxShadow: theme.palette.secondary.boxShadow
    },
    media: {
      height: 250
    },
    logoFirst: {
      fill: theme.palette.logo.first.fill
    },
    logoSecond: {
      fill: theme.palette.logo.second.fill
    }
  }));

  const classes = useStyles();
  return (
    <Grid item className={classes.grid}>
      <Card elevation={0} className={classes.card}>
        <CardActionArea>
          <LogoMedium 
            logoFirst={classes.logoFirst} 
            logoSecond={classes.logoSecond}/>
          <CardContent>
            <Typography variant="subtitle1" className={classes.typography} align="center">
              Dev-J
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card elevation={0} className={classes.card}>
        <CardActionArea>
          <LogoMedium 
            logoFirst={classes.logoFirst} 
            logoSecond={classes.logoSecond}/>
          <CardContent>
            <Typography variant="subtitle1" className={classes.typography} align="center">
              Dev-J
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      
    </Grid>
  );
};
