import React, { useState } from 'react';
import Header from '../../components/header/Header'
import PostItem from '../../components/post/PostItem'
import RightMenu from '../../components/menu/RightMenu'

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: "70px"
    }
  })
);

export default function Main() {

  const classes = useStyles();

  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
    // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }

  const lightTheme = createMuiTheme({
    palette: {
      type: "light"
    },
    bgColor: '#fff'
  });
  
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark"
    },
    bgColor: '#000'
  });


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div style={{height: "100vh", background: (theme === 'light' ? lightTheme.bgColor : darkTheme.bgColor)}}>
        <Header/>
        <Container maxWidth="lg" className={classes.container}>
          
          <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <PostItem/>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <RightMenu/>
              <button onClick={toggleTheme}>ssss</button>

            </Grid>

          </Grid>    

        </Container>
      </div>
      
    </ThemeProvider>
  );
}
