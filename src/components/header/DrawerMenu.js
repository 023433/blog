import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


export default function DrawerMenu(props) {

  const useStyles = makeStyles(theme => ({
    button: {
      backgroundColor: theme.palette.button.bgColor,
      border: theme.palette.button.border,
      color: theme.palette.button.color      
    }
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

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  
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

        {sideList('right')}

        <IconButton
          size="small"
          onClick={() => {
            props.toggleTheme()
          }}
        >
          <MenuIcon className={classes.button}/>
        </IconButton>
      </Drawer>
    </React.Fragment>
  );
}
