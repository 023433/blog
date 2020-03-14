import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';


export default function CategoryItem() {

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
      color: theme.palette.secondary.textColor
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
  }));

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" className={classes.list}>

      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.listItemIcon}>
          {open ? 
            <ArrowRightIcon className={classes.icon} onClick={handleClick}/> 
            : <ArrowDropDownIcon className={classes.icon} onClick={handleClick}/>}
        </ListItemIcon>

        <ListItemText primary="Inbox" className={classes.listItemText}/>
      </ListItem>

      <Collapse in={open} timeout="auto" className={classes.nested}>
        <List component="div" className={classes.list}>
          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <ArrowRightIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="Starred" className={classes.listItemText}/>
          </ListItem>
          <ListItem button className={classes.listItem}>
            <ListItemIcon className={classes.listItemIcon}>
              <ArrowRightIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="Starred" className={classes.listItemText}/>
          </ListItem>
        </List>
      </Collapse>

    </List>
  )
}