import React from 'react';
import DrawerMenu from './DrawerMenu';
import DropDownMenu from './DropDownMenu';
import { Link } from "react-router-dom";

import makeStyles from '@material-ui/core/styles/makeStyles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import Button from '@material-ui/core/Button';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import Brightness2RoundedIcon from '@material-ui/icons/Brightness2Rounded';
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded';

import LogoSamll from '../svg/logo/small'
import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';

export default function Header(props) {

  const toggleTheme = () => {
    props.toggleTheme();
  }

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
      overflow: "hidden"
    },
    toggle: {
      backgroundColor: theme.palette.toggle.bgColor,
      border: theme.palette.toggle.border,
      color: theme.palette.toggle.color,
      textTransform: "none"
    },
    button: {
      backgroundColor: theme.palette.button.bgColor,
      border: theme.palette.button.border,
      color: theme.palette.button.color,
      textTransform: "none"
    },
    logoFirst: {
      fill: theme.palette.logo.first.fill
    },
    logoSecond: {
      fill: theme.palette.logo.second.fill
    }

  }));

  const classes = useStyles();

  let saveTheme = props.currentTheme;

  if (saveTheme === 'undefined') {
    saveTheme = 'light';
  }

  const [theme, setTheme] = React.useState(saveTheme);

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getCategory, []);
  const { isLoading, data } = state;

  async function getCategory() {
    const response = await Axios.get(
      '/categories',
    ).catch(error => {
      console.log(error);
    });

    if(response === undefined){
      return;
    }

    if(response.status === 200){
      return response;
    }
  }
  
  if(isLoading){
    return (<Backdrop/>)
  }
  
  return (

    <AppBar className={classes.appbar} position="fixed" color="primary">
      <Container className={classes.container} maxWidth="lg">
        <Toolbar className={classes.toolbar}>
          <Grid container spacing={1}>

            <Grid item xs={1}>
              <div style={{maxWidth:"45px", minHeight:"45px", minWidth:"45px", maxHeight:"45px"}}> 
                <Link to="/">
                  <LogoSamll 
                      logoFirst={classes.logoFirst} 
                      logoSecond={classes.logoSecond} />
                </Link>
              </div>
            </Grid>

            <Grid item xs={8} 
              className={classes.verticalCenter} 
              container 
              justify="flex-end">

              <Hidden smDown>
                {
                  data != null ?
                    data.map(item => (
                      <DropDownMenu category={item} key={item.no}/>
                    ))
                    :
                    null
                }
              </Hidden>
            </Grid>

            <Grid item xs={3} 
              className={classes.verticalCenter} 
              container 
              justify="flex-end"
              style={{paddingRight: "15px"}}>

              <Hidden mdUp>
                <DrawerMenu toggleTheme={toggleTheme} currentTheme={saveTheme} category={props.category} />
              </Hidden>
              <Hidden smDown>
                <Link to="/">
                  <Button 
                    size="small"
                    className={classes.button}
                    startIcon={<HomeRoundedIcon/>}>
                      Home
                  </Button>
                </Link>
                <Link to="/tag">
                  <Button 
                    size="small"
                    className={classes.button}
                    startIcon={<LocalOfferOutlinedIcon/>}>
                      Tag
                  </Button>
                </Link>
                <Button
                  size="small"
                  className={classes.toggle}
                  onClick={() => {
                    props.toggleTheme()
                    if (theme === 'light') {
                      setTheme('dark');
                    } else {
                      setTheme('light');
                    }
                  }}
                  startIcon={theme==="dark"? <WbSunnyRoundedIcon /> : <Brightness2RoundedIcon />}
                >
                  {theme==="dark"? "Day" : "Night" }
                  
                </Button>
              </Hidden>
            </Grid>
          </Grid>

        </Toolbar>
      </Container>
      
    </AppBar>
    
  );
}
