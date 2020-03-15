import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function PostView() {

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    title: {
      marginTop: "10px",
      color: theme.palette.tertiary.textColor
    },
    subtitle: {
      display: "flex",
      marginBottom: "3px",
      marginRight: "10px",
      justifyContent: "space-between",
      color: theme.palette.secondary.textColor,
    },
    breadcrumbs: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    date: {
      display: "flex",
      justifyContent: "center",
      color: theme.palette.secondary.textColor,
      alignItems: "center",
      alignSelf: "flex-end",
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    coverMedia: {
      maxHeight: "500px",
      minHeight: "300px",
    }

  }));

  const classes = useStyles();
  return (
    <Card elevation={0} className={classes.card}>
      <CardContent>
        <Typography variant="h4" noWrap className={classes.title}>
          제목제목제목제목제목제목제목제목제목
        </Typography>

        <Paper elevation={0} className={classes.subtitle}>
          <Breadcrumbs separator="›" className={classes.breadcrumbs}>
            <Typography variant="caption">Material-UI</Typography>
            <Typography variant="caption" >Breadcrumb</Typography>
          </Breadcrumbs>
          <Typography variant="caption" className={classes.date}>
            2020-03-01
          </Typography>
        </Paper>
      </CardContent>

      <CardContent>
        <CardMedia
          className={classes.coverMedia}
          image="/static/images/react.png"/>
      </CardContent>

      <CardContent>             
        <Typography variant="body2" component="h2" className={classes.description}>
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
          내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        </Typography>
      </CardContent>
              
        
    </Card>
  );
};
