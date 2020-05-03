import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Button from '@material-ui/core/Button';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';

import { Link } from "react-router-dom";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';



export default function DropDownMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const useStyles = makeStyles(theme => ({
    button: {
      color: theme.palette.primary.textColor,
      fontWeight: theme.palette.primary.fontWeight
    },
    item: {
      color: theme.palette.secondary.textColor,
      fontWeight: theme.palette.secondary.fontWeight
    },
    nested: {
      paddingLeft: theme.spacing(1),
    },
    list: {
      padding: "0px 4px 0px 2px"
    },
    firstItem: {
      padding: "0px 4px 0px 5px"
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
    }
  }));

  const classes = useStyles();
  const category = props.category;
  const title = category.title;  

  return (
    <React.Fragment>
      <Button 
        className={classes.button}
        onClick={handleClick} 
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}>
          
        {category.title}
      </Button>
      
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <List component="nav" className={classes.list}>
              <ListItem button className={classes.firstItem} key={category.no}>
                <ListItem className={classes.listItem} {...{ component: Link, to: "/sub/" + title }}>
                  <ListItemText primary={title} className={classes.listItemText}/>
                </ListItem>
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
          </ClickAwayListener>
        </Paper>
      </Popper>
      
    </React.Fragment>
  );




  
  
  function SubCategoeyItem(props){

    const category = props.category;
    const parentTitle = category.parentTitle;
    const title = category.title;

    return (
        <List component="div" className={classes.list}>
          <ListItem button className={classes.listItem} key={category.no}>
            <ListItem className={classes.listItem} {...{ component: Link, to: "/sub/" + parentTitle + "/" + title }}>
              <ListItemText primary={title} className={classes.listItemText}/>
            </ListItem>
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
};
