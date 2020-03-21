import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { useParams } from "react-router-dom";
import PostItem from '../../components/post/PostItem'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import PaginationBackground from '../../components/post/PaginationBackground';

export default function SubPostList() {

  let { first, second, third } = useParams();

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    title: {
      color: theme.palette.tertiary.textColor,
      display: "flex",
      justifyContent: "center",
      alignContent: "center"
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    content: {
      "&:last-child": {
        padding: "16px"
      }
    }

  }));

  const classes = useStyles();
  
  return (
    <React.Fragment>

      <Card elevation={0} className={classes.card}>

        <CardContent className={classes.content}>             
          <Paper elevation={0}>
            <Breadcrumbs separator="›" className={classes.title}>
              {first !== undefined ? <Typography variant="h6" component="h2" >{first}</Typography> : ""}
              {second !== undefined ? <Typography variant="h6" component="h2" >{second}</Typography> : ""}
              {third !== undefined ? <Typography variant="h6" component="h2" >{third}</Typography> : ""}
            </Breadcrumbs>
          </Paper>
        </CardContent>
          
      </Card>

      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>
      <PostItem/>

      <PaginationBackground/>

    </React.Fragment>
  );
}
