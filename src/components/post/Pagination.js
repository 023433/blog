import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Pagination from '@material-ui/lab/Pagination';

export default function PostPagination() {
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

  return (
    <React.Fragment>
      <Pagination className={classes.pagination} count={100} defaultPage={80}  siblingCount={2} variant="outlined" shape="rounded" />
    </React.Fragment>
  );
}