import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';

export default function PostItem(props) {

  const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    typography: {
      color: theme.palette.secondary.textColor
    },
    grid: {
      marginBottom: `${theme.spacing(1)}px auto`,
      boxShadow: theme.palette.secondary.boxShadow,
    },
    box: {
      padding: `${theme.spacing(1)}px auto`,
    },

    title: {
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
      display: "-webkit-box",
      height: "100px",
      overflow: "hidden",
      WebkitLineClamp: "5",
      WebkitBoxOrient: "vertical",
      color: theme.palette.secondary.textColor
    },
    detail: {
      [theme.breakpoints.down('sm')]: {        
        "&:last-child": {
          paddingLeft: `${theme.spacing(1)}px auto`,
          paddingRight: `${theme.spacing(1)}px auto`,
          paddingTop: "0px",
          paddingBottom: `${theme.spacing(1)}px`
        }
      },
      [theme.breakpoints.up('md')]: {        
        "&:last-child": {
          paddingLeft: "0px",
          paddingRight: `${theme.spacing(1)}px auto`,
          paddingTop: `${theme.spacing(1)}px auto`,
          paddingBottom: `${theme.spacing(1)}px `
        }
      },
      
    },
    cover: {
      "&:last-child": {
        padding: "16px"
      }
    },
    coverMedia: {
      minHeight: "150px",
      [theme.breakpoints.down('sm')]: {
        minHeight: "300px"
      },
    }

  }));

  const classes = useStyles();

  return (
    
    <Grid item className={classes.grid}>
      <Link to="/post/3">
        <Card elevation={0} className={classes.card}>
          <CardActionArea>
            <Grid container spacing={1} >
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <CardContent className={classes.cover}>

                  <CardMedia
                    className={classes.coverMedia}
                    image="/static/images/react.png"
                  />
                </CardContent>
                
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8} xl={8}>              

                  <CardContent className={classes.detail}>
                    <Typography variant="h6" noWrap className={classes.title}>
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
                    
                    <Paper elevation={0}>
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
                    </Paper>
                    
                  </CardContent>
                  
              </Grid>
            </Grid>
            
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};
