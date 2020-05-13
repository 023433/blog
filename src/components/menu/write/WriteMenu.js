import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

import Category from './Category';

export default function WriteMenu(props) {

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
        <Category/>
      </Card>
    </Grid>
  );
};
