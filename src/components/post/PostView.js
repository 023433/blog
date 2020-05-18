import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useParams } from "react-router-dom";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';

import PostViewCategory from './PostViewCategory';
import PostViewTag from './PostViewTag';
import PostViewReply from './PostViewReply';

import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';

import Image from '../svg/image/Image'
import Timestamp from '../../components/date/Timestamp';

export default function PostView() {
  let { id } = useParams();

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getPost, [id]);
  const { isLoading, data } = state;

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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "flex-end",
    }

  }));

  const classes = useStyles();

  async function getPost() {
    const response = await Axios.get(
      '/post/content/' + id,
    ).catch(error => {
      console.log(error);
    });

    if(response === undefined){
      return;
    }

    if(response.status === 200){
      return response;
    }
  }

  const breadcrumbs = (item, component) => {

    if(component == null){
      component = [];
    }

    component = [(<Typography variant="caption" key={item.no}>{item.title}</Typography>), ...component];

    if(item.parent != null){
      return breadcrumbs(item.parent, component);
    }

    return component;
  }

  if(isLoading){
    return (<Backdrop/>)
  }

  const post = data.post;
  const content = data;
  const categories = content.category;
  const category = categories[0].category;
  const tag = content.tag;


  return (
    <Card elevation={0} className={classes.card}>
      <CardContent>
        <Typography variant="h4" noWrap className={classes.title}>
          {post.subject}
        </Typography>

        <Paper elevation={0} className={classes.subtitle}>
          <Breadcrumbs separator="›" className={classes.breadcrumbs}>
            {breadcrumbs(category)}
          </Breadcrumbs>
          <Typography variant="caption" className={classes.date}>
            <Timestamp dateTime={post.createDate} />
          </Typography>
        </Paper>
      </CardContent>

      <CardContent>
        <CardMedia className={classes.coverMedia}>
          <Image url={content.savePath + content.mainImage} />
        </CardMedia>
      </CardContent>

      <CardContent>             
        <Typography variant="body2" component="h2" className={classes.description}>
          <div dangerouslySetInnerHTML={{ __html: content.content }}></div>
        </Typography>
      </CardContent>

      <Divider/>

      <PostViewCategory category={categories}/>

      <Divider/>

      {
        tag.length > 0 
          ? <React.Fragment><PostViewTag tag={tag}/><Divider/></React.Fragment> 
          : ""
      }

      <PostViewReply postNo={post.no}/>
      


    </Card>
  );
};
