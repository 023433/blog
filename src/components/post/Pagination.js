import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

export default function PostPagination(props) {
  const useStyles = makeStyles(theme => ({
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
        color: theme.palette.tertiary.textColor,
        fontWeight: theme.palette.primary.fontWeight,
      }
    }
  }));

  const classes = useStyles();
  const pageable = props.pageable;
  const path = props.path? undefined : "";
  const currentPage = pageable.pageNumber? (pageable.pageNumber + 1) : 1;

  return (
      <Pagination
        className={classes.pagination} 
        count={pageable.totalPages} 
        page={currentPage}
        variant="outlined"
        shape="rounded"
        renderItem={(item) => (
          <PaginationItem
            component={Link}
            to={{ pathname: `/${path}`, query: { page: item.page } , search: `?page=${item.page}`}} 
            // to={`/${item.page === 1 ? 'post/2' : `?page=${item.page}`}`}
            {...item}
          />
        )}
      />
      
  );
}