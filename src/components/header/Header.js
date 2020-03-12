import React from 'react';
import DrawerMenu from './DrawerMenu';
import DropDownMenu from './DropDownMenu';

import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';

import Button from '@material-ui/core/Button';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';

import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';
import ToggleButton from '@material-ui/lab/ToggleButton';

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
    },
    toggle: {
      backgroundColor: theme.palette.toggle.bgColor,
      border: theme.palette.toggle.border,
      color: theme.palette.toggle.color      
    },

  }));

  const classes = useStyles();

  const [selected, setSelected] = React.useState(false);

  return (
    <div>
      <AppBar className={classes.appbar} position="fixed" color="primary">
        <Container className={classes.container} maxWidth="lg">
          <Toolbar className={classes.toolbar}>
            <Grid container spacing={1}>

              <Grid item xs={1}>
                <Avatar src="/static/images/logo/logo_small.svg" />
              </Grid>

              <Grid item xs={8} 
                className={classes.verticalCenter} 
                container 
                justify="flex-end">

                <Hidden smDown>
                  <DropDownMenu/>
                  <DropDownMenu/>
                  <DropDownMenu/>
                </Hidden>
              </Grid>

              <Grid item xs={3} 
                className={classes.verticalCenter} 
                container 
                justify="flex-end"
                style={{paddingRight: "15px"}}>

                <Hidden mdUp>
                  <DrawerMenu/>
                </Hidden>
                <Hidden smDown>
                  
                  <Button 
                    startIcon={<LocalOfferOutlinedIcon/>}>
                      
                      Tag
                  </Button>
                  <ToggleButton
                    className={classes.toggle}
                    onChange={() => {
                      setSelected(!selected);
                    }}
                  >
                    {selected? <Brightness2RoundedIcon /> : <WbSunnyRoundedIcon />}
                    {selected? "DARK" : "LIGHT"}
                    
                  </ToggleButton>
                </Hidden>
              </Grid>
            </Grid>

          </Toolbar>
        </Container>
        
      </AppBar>
      
    </div>
  );
}
