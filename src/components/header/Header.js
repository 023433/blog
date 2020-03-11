import React from 'react';
import DrawerMenu from './DrawerMenu';

import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';


export default function Header() {

  const useStyles = makeStyles(theme => ({
    appbar: {
      height: "65px",
      minHeight: "65px",
      paddingLeft: "0px",
      paddingRight: "0px"
    },
    container: {
      paddingLeft: "0px",
      paddingRight: "0px"
    },
    toolbar: {
      height: "64px",
      minHeight: "64px",
      paddingLeft: "0px",
      paddingRight: "0px"
    },
    verticalCenter: {
      display: 'flex',
      alignItems: 'center',
    }

  }));

  const classes = useStyles();

  return (
    <div>
      <AppBar className={classes.appbar} position="fixed" color="inherit">
        <Container className={classes.container} maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={1}>

              <Grid item xs={2}>
                <Avatar src="/static/images/logo/logo_small.svg" />
              </Grid>

              <Grid item xs={7} className={classes.verticalCenter}>
                <Hidden smDown>
                  Material-UI
                </Hidden>
              </Grid>

              <Grid item xs={3} className={classes.verticalCenter}>
                <Hidden mdUp>
                  <DrawerMenu/>                      
                </Hidden>
                <Hidden smDown>
                  Login
                </Hidden>
              </Grid>
            </Grid>

          </Toolbar>
        </Container>
        
      </AppBar>
      
    </div>
  );
}
