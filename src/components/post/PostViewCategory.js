import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Pagination from './Pagination';

import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import PostViewCategoryItem from './PostViewCategoryItem';

export default function PostViewCategory() {
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

  const classes = useStyles();
  return (
    <React.Fragment>
      <CardContent>         
        <Paper elevation={0} className={classes.category}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small"/>} className={classes.breadcrumbs}>
            <Typography variant="subtitle1" noWrap className={classes.title}>"Material-UI</Typography>
            <Typography variant="subtitle1" noWrap className={classes.title}>Breadcrumb"</Typography>
          </Breadcrumbs>

          <Typography variant="body2" noWrap component="h2" className={classes.subtitle}>
            카테고리의 다른 글
          </Typography>
        </Paper>    
      </CardContent>

      <CardContent className={classes.cardContent}>
        <PostViewCategoryItem/>
        <PostViewCategoryItem/>
        <PostViewCategoryItem/>
        <PostViewCategoryItem/>
        <PostViewCategoryItem/>
      </CardContent>

      <CardContent className={classes.paging}>
        <Pagination 
          className={classes.pagination} 
          pageable={ {"totalPages": 10, "pageNumber": 0} }
          count={10} 
          variant="outlined" 
          shape="rounded" />
      </CardContent>

    </React.Fragment>
  );
};
