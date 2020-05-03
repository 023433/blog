import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Backdrop from '../../components/loading/Backdrop';

import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Pagination from './Pagination';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import PostViewCategoryItem from './PostViewCategoryItem';
import { ApiAsync, Axios } from '../../service/ApiService';
import { useLocation} from "react-router";
import QueryString from "query-string";

export default function PostViewCategory(props) {
  const useStyles = makeStyles(theme => ({
    title: {
      marginBottom: "2px",
      alignSelf: "center",
      color: theme.palette.tertiary.textColor
    },
    subtitle: {
      marginBottom: "2px",
      alignSelf: "center",
      marginLeft: "4px",
      color: theme.palette.tertiary.textColor
    },
    category: {
      display: "flex",
      marginBottom: "3px",
      marginRight: "10px",
      color: theme.palette.secondary.textColor,
    },
    breadcrumbs: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    cardContent: {
      paddingTop: "0px"
    },
    paging: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    pagination: {
      "& ul li button span": {
        color: theme.palette.tertiary.textColor,
      },
      "& .Mui-selected": {
        backgroundColor: theme.palette.tag.backgroundColor,
      }
    }
  }));

  const breadcrumbs = (item, component) => {

    if(component == null){
      component = [];
    }

    component = [(<Typography variant="subtitle1" noWrap key={item.no}>{item.title}</Typography>), ...component];

    if(item.parent != null){
      return breadcrumbs(item.parent, component);
    }

    return component;
  }

  const classes = useStyles();

  const location = useLocation();
  const path = location.pathname.replace("/", "");
  const category = props.category[0].category;
  const pageLabel = "epage";
  const queryString = QueryString.parse(location.search);
  const page = queryString[pageLabel];
  delete queryString[pageLabel];

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(() => getPosts(page), [page]);
  const { isLoading, data } = state;

  async function getPosts(page) {
    let data = {}

    if(page !== undefined && page !== "NaN" && page > 0){
      data.pageNo = page - 1
    }
    const response = await Axios.get(
      '/posts/newest/' + category.no,
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

  data.pageable["totalPages"] = data.totalPages;

  return (
    <React.Fragment>
      <CardContent>         
        <Paper elevation={0} className={classes.category}>
          
          <Typography variant="subtitle1" noWrap >"&nbsp;</Typography>

          <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} className={classes.breadcrumbs}>
            {breadcrumbs(category)}
          </Breadcrumbs>

          <Typography variant="subtitle1" noWrap >&nbsp;"&nbsp;</Typography>

          <Typography variant="body2" noWrap component="h2" className={classes.subtitle}>
            의 다른 글
          </Typography>
        </Paper>    
      </CardContent>

      <CardContent className={classes.cardContent}>
        {
          data.content.map(post => (
            <PostViewCategoryItem post={post} key={post.no}/>
          ))
        }
      </CardContent>

      <CardContent className={classes.paging}>
      {
        data.empty ? null
          : <Pagination
              pageable={data.pageable} 
              path={path} 
              search={queryString}
              label={pageLabel} />
      }
      </CardContent>

    </React.Fragment>
  );
};
