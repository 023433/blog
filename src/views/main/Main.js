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

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  const lightTheme = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: '#133a70',
        textColor: '#eceff1',
        fontWeight: "500"
      },
      secondary: {
        main: '#fff',
        textColor: '#616161',
        boxShadow: "0 2px 4px 0 #eeeeee"
      },
      textSecondary: {
        main: '#000'
      },
      toggle: {
        border: "1px solid #133a70",
        bgColor: "#133a70",
        color: "#eceff1"
      }
    },
    bgColor: '#f2f6fc'
  });
  
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#424242'
      },
      secondary: {
        main: '#424242',
        textColor: '#fff',
        boxShadow: "0 0 0 0"
      },
      textSecondary: {
        main: '#000'
      },
      toggle: {
        border: "1px solid #424242",
        bgColor: "#424242",
        color: "#212121"
      }
      
    },
    bgColor: '#212121'
  });


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div style={{height: "100vh", background: (theme === 'light' ? lightTheme.bgColor : darkTheme.bgColor)}}>
        <Header toggleTheme={toggleTheme}/>
        <Container maxWidth="lg" className={classes.container}>
          
          <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <PostItem/>
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
