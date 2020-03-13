import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import LogoMedium from '../svg/logo/medium'

export default function RightMenu() {

  console.log();
  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main
    },
    typography: {
      color: theme.palette.secondary.textColor
    },
    grid: {
      marginBottom: "10px",
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
    },
    logoLine: {

    }
  }));

  const classes = useStyles();
  return (
    <Grid item className={classes.grid}>
      <Card elevation={0} className={classes.card}>
        <CardActionArea>
          <LogoMedium 
            logoFirst={classes.logoFirst} 
            logoSecond={classes.logoSecond} 
            logoLine={classes.logoLine}/>
          <CardContent>
            <Typography component="h5" variant="h5" className={classes.typography}>
              Live From Space
            </Typography>
            <Typography variant="subtitle1" className={classes.typography}>
              Mac Miller
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};
