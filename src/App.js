import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import Hidden from '@material-ui/core/Hidden';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },    
  },
  list: {
    width: 250,
  },
  container: {
    paddingLeft: 0,
    paddingRight: 0,
  },
  mgTop70: {
    marginTop: 70,
  },
  cover: {
    width: 151,
  },
  thumbnail: {
    display: 'flex',
    flexDirection: 'column',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
}));


export default function CenteredGrid() {
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
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Container maxWidth="lg" className={classes.container}>
          <Toolbar className={classes.container}>
            <Grid container spacing={1}>

              <Grid item xs={2} sm={2} md={2} lg={2} xl={2} container direction="column" spacing={1}>
                <Grid item wrap="wrap">

                  <Hidden xsDown>
                    <Paper variant="outlined" className={classes.paper}>Material-UI</Paper>
                  </Hidden>

                </Grid>
              </Grid>

              <Grid item xs={9} sm={9} md={7} lg={7} xl={7} container direction="column" spacing={1}>
                <Grid item>
                  <Hidden smDown>
                    <Paper variant="outlined" className={classes.paper}>Material-UI</Paper>
                  </Hidden>
                </Grid>
              </Grid>

              <Grid item xs={1} sm={1} md={3} lg={3} xl={3} container direction="column"spacing={1}>
                <Grid item>

                  <Hidden mdUp>
                    <IconButton
                      edge="start"
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="open drawer"
                      onClick={toggleDrawer('right', true)}
                    >
                      <MenuIcon />
                    </IconButton>

                    <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                      {sideList('right')}
                    </Drawer>
                  </Hidden>
                  <Hidden smDown>
                    <Button 
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit" className={classes.menuButton}>Login</Button>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>

          </Toolbar>
        </Container>


        
      </AppBar>


      <Container maxWidth="lg" className={[classes.container, classes.mgTop70].join(" ")}>
        <Grid container spacing={1}>
        
          <Grid item xs={12} sm={12} md={9} lg={9} xl={9} container direction="column" spacing={1}>
            <Grid item>
              <Card variant="outlined">
                <CardActionArea>
                  <CardMedia
                    className={classes.cover}
                    image="/static/images/cards/live-from-space.jpg"
                    title="Live from space album cover"
                  />
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Typography component="h5" variant="h5">
                        Live From Space
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        Mac Miller
                      </Typography>
                    </CardContent>
                  </div>
                  
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3} xl={3} container direction="column"spacing={1}>
            <Grid item>
              <Paper variant="outlined" className={classes.paper}>xs=3</Paper>
            </Grid>
           
          </Grid>

        </Grid>

      </Container>

    </div>
  );
}
