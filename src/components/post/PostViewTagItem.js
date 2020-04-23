import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function PostViewTagItem(props) {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.tag.backgroundColor,
      color: theme.palette.tertiary.textColor,
      margin: "2px",
    },
  }));

  const tag = props.tag;
  const title = tag.title;

  const classes = useStyles();
  return (
    <React.Fragment>
      <Link to={"/tag/" + title}>
        <Button 
          size="small"
          className={classes.button}>
            #{title}
        </Button>
      </Link>
    </React.Fragment>
  );
};
