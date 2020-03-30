import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Collapse from '@material-ui/core/Collapse';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Badge from '@material-ui/core/Badge';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
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
      color: theme.palette.secondary.textColor,
      "& span": {
        fontSize: theme.palette.secondary.fontSize
      }
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    badge: {
      "& span":{
        backgroundColor: theme.palette.badge.backgroundColor,
        color: theme.palette.secondary.textColor
      }
    }
  }));

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" className={classes.list}>

      <ListItem button className={classes.listItem} {...{ component: Link, to: "/sub/f" }}>
        <ListItemIcon className={classes.listItemIcon}>
          {open ? 
            <ArrowRightIcon className={classes.icon} onClick={handleClick}/> 
            : <ArrowDropDownIcon className={classes.icon} onClick={handleClick}/>}
        </ListItemIcon>

        <ListItemText primary="메뉴" className={classes.listItemText}/>
        <ListItemSecondaryAction>
          <Badge badgeContent={10000} max={999} className={classes.badge} />
        </ListItemSecondaryAction>
      </ListItem>

      <Collapse in={open} timeout="auto" className={classes.nested}>
        <List component="div" className={classes.list}>
          <ListItem button className={classes.listItem} {...{ component: Link, to: "/sub/f/first" }}>
            <ListItemIcon className={classes.listItemIcon}>
              <ArrowRightIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="첫번째" className={classes.listItemText}/>
            <ListItemSecondaryAction>
              <Badge badgeContent={4} className={classes.badge} />
            </ListItemSecondaryAction>
           

          </ListItem>
          <ListItem button className={classes.listItem} {...{ component: Link, to: "/sub/f/second" }}>
            <ListItemIcon className={classes.listItemIcon}>
              <ArrowRightIcon className={classes.icon}/>
            </ListItemIcon>
            <ListItemText primary="두번째" className={classes.listItemText}/>
            <ListItemSecondaryAction>
              <Badge badgeContent={4} className={classes.badge} />
            </ListItemSecondaryAction>

          </ListItem>
        </List>
      </Collapse>

    </List>
  )
}