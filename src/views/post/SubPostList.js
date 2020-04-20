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

import Backdrop from '../../components/loading/Backdrop';
import { ApiAsync, Axios } from '../../service/ApiService';
import QueryString from "query-string";

export default function SubPostList(props) {

  let { first, second, third, fourth } = useParams();

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


  const queryParam = props.location.query;
  const queryString = QueryString.parse(props.location.search);

  let no = 0;

  if(queryParam !== undefined){
    no = queryParam.page - 1;
  }  
  
  if(queryString !== undefined){
    no = queryString.page - 1;
  }  

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(() => getPosts(no), [no]);
  const { isLoading, data } = state;

  async function getPosts(no) {
    let data = {}

    if(no !== undefined && no !== "NaN" && no > 0){
      data.pageNo = no
    }

    const response = await Axios.get(
      '/posts/summary',
      {params: data}
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

  if(isLoading){
    return (<Backdrop/>)
  }
  
  let postList;

  if(data != null){
    data.pageable["totalPages"] = data.totalPages

    postList = data.content.map(post => (
      <PostItem post={post} key={post.no}/>
    ))
  }

  const path = props.location.pathname.replace("/", "");

  return (
    <React.Fragment>

      <Card elevation={0} className={classes.card}>

        <CardContent className={classes.content}>             
          <Paper elevation={0}>
            <Breadcrumbs separator="›" className={classes.title}>
              {first !== undefined ? <Typography variant="h6" component="h2" >{first}</Typography> : ""}
              {second !== undefined ? <Typography variant="h6" component="h2" >{second}</Typography> : ""}
              {third !== undefined ? <Typography variant="h6" component="h2" >{third}</Typography> : ""}
              {fourth !== undefined ? <Typography variant="h6" component="h2" >{fourth}</Typography> : ""}
            </Breadcrumbs>
          </Paper>
        </CardContent>
          
      </Card>

      { postList }

      <PaginationBackground pageable={data.pageable} path={path}/>

    </React.Fragment>
  );
}
