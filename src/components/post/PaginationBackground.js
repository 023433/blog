import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Pagination from './Pagination';

export default function PostPaginationBackground(props) {
  const useStyles = makeStyles(theme => ({
    card: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    content: {
      display: 'flex',
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`,
      "&:last-child": {
        padding: `${theme.spacing(1)}px`
      }
    },
  }));

  const classes = useStyles();

  return (
    <Card elevation={0} className={classes.card}>
      <CardContent className={classes.content}>
        <Pagination pageable={props.pageable}/>
      </CardContent>
    </Card>
  );
}