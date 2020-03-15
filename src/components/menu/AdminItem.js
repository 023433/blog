import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AttachmentIcon from '@material-ui/icons/Attachment';

export default function CategoryItem(props) {

  const useStyles = makeStyles(theme => ({
    nested: {
      paddingLeft: theme.spacing(2),
    },
    list: {
      padding: "0px"
    },
    listItem: {
      padding: "0px"
    },
    listItemIcon: {
      minWidth: "20px",
      padding: "0px"
    },
    listItemText: {
      color: theme.palette.secondary.textColor,
      "& span": {
        fontSize: theme.palette.secondary.fontSize
      }
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 10,
      height: 10,
      color: theme.palette.secondary.textColor
    }
  }));

  const classes = useStyles();

  return (
    <List component="nav" className={classes.list}>

      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.listItemIcon}>
          <AttachmentIcon className={classes.icon} /> 
        </ListItemIcon>
        <ListItemText primary={props.name} className={classes.listItemText}/>
      </ListItem>

    </List>
  )
}