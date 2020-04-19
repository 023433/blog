import React from 'react';
import { Link } from "react-router-dom";

import makeStyles from '@material-ui/core/styles/makeStyles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

import CategoryItem from '../menu/CategoryItem';
import CardContent from '../menu/CardContent';
import LogoMedium from '../svg/logo/medium'

import Paper from '@material-ui/core/Paper';

import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
export default function DrawerMenu(props) {

  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.button.bgColor,
      border: theme.palette.button.border,
      color: theme.palette.button.color      
    },
    logo: {
      width: "150px",
      minWidth: "150px",
      height: "150px",
      paddingLeft: "50px",
      paddingRight: "50px"
    },
    logoFirst: {
      fill: theme.palette.logo.first.fill
    },
    logoSecond: {
      fill: theme.palette.logo.second.fill
    },
    list: {
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
  }));

  const classes = useStyles();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  let saveTheme = props.currentTheme;

  if (saveTheme === 'undefined') {
    saveTheme = 'light';
  }

  const [theme, setTheme] = React.useState(saveTheme);
  const category = props.category;

  
  return (
    <React.Fragment>
      <IconButton
        edge="start"
        size="small"
        aria-label="open drawer"
        onClick={toggleDrawer('right', true)}
      >
        <MenuIcon className={classes.button}/>
      </IconButton>
      <Drawer 
        anchor="right" 
        open={state.right} 
        onClose={toggleDrawer('right', false)}>

      <Paper 
        elevation={0} 
        className={classes.logo}> 
        <LogoMedium           
          logoFirst={classes.logoFirst} 
          logoSecond={classes.logoSecond}/>
      </Paper>

      <Divider />

      <List className={classes.list} {...{ component: Link, to: "/" }}>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <HomeRoundedIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary="Home" className={classes.listItemText}/>
        </ListItem>
      </List>

      <Divider />

      <List className={classes.list} {...{ component: Link, to: "/tag" }}>
        <ListItem button>
          <ListItemIcon className={classes.listItemIcon}>
            <LocalOfferOutlinedIcon className={classes.icon}/>
          </ListItemIcon>
          <ListItemText primary="Tag" className={classes.listItemText}/>
        </ListItem>
      </List>

      <Divider />

      <List className={classes.list}>
        <ListItem 
          button  
          onClick={() => {
            props.toggleTheme()
            if (theme === 'light') {
              setTheme('dark');
            } else {
              setTheme('light');
            }
          }
        }>
          <ListItemIcon className={classes.listItemIcon}>
              {theme==="dark"? <WbSunnyRoundedIcon  className={classes.icon}/> : <Brightness2RoundedIcon  className={classes.icon}/>}
          </ListItemIcon>
          <ListItemText primary={theme==="dark"? "Day" : "Night" } className={classes.listItemText}/>
        </ListItem>
      </List>

      <Divider />

      <CardContent content={
        <React.Fragment>
          {
            category != null ?
              category.map(item => (
                <CategoryItem category={item} key={item.no}/>
              ))
              :
              null
          }
        </React.Fragment>
      }/>
      <Divider />
        
      </Drawer>
    </React.Fragment>
  );
}
