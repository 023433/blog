import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function PostViewTagItem() {
  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.tag.backgroundColor,
      color: theme.palette.tertiary.textColor,
      margin: "2px",
    },
  }));

  const classes = useStyles();
  return (
    <React.Fragment>
      <Link to="/tag/tag">
        <Button 
          size="small"
          className={classes.button}>
            #Tag
        </Button>
      </Link>
    </React.Fragment>
  );
};
