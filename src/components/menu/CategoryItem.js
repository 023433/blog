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

  const category = props.category;
  const title = category.title;  
  const count = category.count;  

  return (
    <List component="nav" className={classes.list}>

      <ListItem button className={classes.listItem}>
        <ListItemIcon className={classes.listItemIcon}>
          {open ? 
            <ArrowRightIcon className={classes.icon} onClick={handleClick}/> 
            : <ArrowDropDownIcon className={classes.icon} onClick={handleClick}/>}
        </ListItemIcon>
        <ListItem className={classes.listItem} {...{ component: Link, to: "/sub/" + title }}>
          <ListItemText primary={title} className={classes.listItemText}/>
        </ListItem>
        <ListItemSecondaryAction>
          <Badge badgeContent={count} max={999} className={classes.badge} />
        </ListItemSecondaryAction>
        
      </ListItem>   

      {
        category.children.map((category) => {
          category.parentTitle = title;
          return (
            <Collapse in={open} timeout="auto" className={classes.nested} key={category.no} >
              <SubCategoeyItem category={category} open={open}/>
            </Collapse>

          );
        })
      }   

    </List>
  )

  
  function SubCategoeyItem(props){

    const [open, setOpen] = React.useState(props.open);

    const handleClick = () => {
      setOpen(!open);
    };

    const category = props.category;
    const parentTitle = category.parentTitle;
    const title = category.title;
    const count = category.count;  

    return (
        <List component="div" className={classes.list}>
          <ListItem button className={classes.listItem} key={category.no}>
            <ListItemIcon className={classes.listItemIcon}>
              {open ? 
              <ArrowRightIcon className={classes.icon} onClick={handleClick}/> 
              : <ArrowDropDownIcon className={classes.icon} onClick={handleClick}/>}
            </ListItemIcon>
            <ListItem className={classes.listItem} {...{ component: Link, to: "/sub/" + parentTitle + "/" + title }}>
              <ListItemText primary={title} className={classes.listItemText}/>
            </ListItem>
            <ListItemSecondaryAction>
              <Badge max={999} badgeContent={count} className={classes.badge} />
            </ListItemSecondaryAction>
          </ListItem>

          {
              category.children.map((category) => {
                category.parentTitle = parentTitle + "/" + title;
                return (
                  <Collapse in={open} timeout="auto" className={classes.nested} key={category.no} >
                    <SubCategoeyItem category={category} key={category.no} open={open}/>
                  </Collapse>
                );
              })
            
          }

        </List>
    );
    
  }

}

