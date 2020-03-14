import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

export default function PostItem() {

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
      boxShadow: theme.palette.secondary.boxShadow,
    }
  }));

  const classes = useStyles();
  return (
    
    <Grid item className={classes.grid}>
      <Card elevation={0} className={classes.card}>
        <CardActionArea>
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
