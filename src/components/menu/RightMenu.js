import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Search from './Search';
import Category from './Category';
import Logo from './Logo';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export default function RightMenu() {

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    grid: {
      marginBottom: `${theme.spacing(1)}px auto`,
      boxShadow: theme.palette.secondary.boxShadow
    }
  }));

  const classes = useStyles();

  return (
    <Grid item className={classes.grid}>
      <Card elevation={0} className={classes.card}>
        <Logo/>
      </Card>

      <Card elevation={0} className={classes.card}>
        <Search />
      </Card>

      <Card elevation={0} className={classes.card}>
        <Category/>
      </Card>
      
    </Grid>
  );
};
