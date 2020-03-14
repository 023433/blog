import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

export default function NewCommentItem() {

  const useStyles = makeStyles(theme => ({
    nested: {
      paddingLeft: theme.spacing(2),
    },
    listItem: {
      padding: "0px"
    },
    listItemIcon: {
      minWidth: "20px",
      padding: "3px 0px 0px 5px"
    },
    listItemText: {
      color: theme.palette.secondary.textColor
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 5,
      height: 5,
      color: theme.palette.secondary.textColor
    },
  }));

  const classes = useStyles();

  return (
    <ListItem button className={classes.listItem}>
      <ListItemIcon className={classes.listItemIcon}>
        <FiberManualRecordIcon className={classes.icon}/> 
      </ListItemIcon>

      <Typography variant="inherit" noWrap className={classes.listItemText}>
        very long text that overflowsA very long text that overflows
      </Typography>
    </ListItem>
  )
}