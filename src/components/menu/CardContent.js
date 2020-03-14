import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';
import CardContent from '@material-ui/core/CardContent';

export default function MenuCardContent(props) {

  const useStyles = makeStyles(theme => ({
    cardContent: {
      paddingTop: "0px"
    }
  }));

  const classes = useStyles();

  return (
    <CardContent className={classes.cardContent}>
      {props.content}
    </CardContent>
  )

}