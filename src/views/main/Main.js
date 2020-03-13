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
        textColor: '#E6E6E6',
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
        border: "1px solid transparent",
        bgColor: "transparent",
        color: "#E6E6E6"
      },
      button: {
        border: "1px solid transparent",
        bgColor: "transparent",
        color: "#E6E6E6"
      },
      logo: {
        first: {
          fill: "#0F61AA"
        },
        second: {
          fill: "#2F89CC"
        },
        line: {
          fill: "none",
          stroke: "#2F89CC"          
        }
      }
    },
    bgColor: '#f2f6fc'
  });
  
  const darkTheme = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: '#424242',
        textColor: '#D8D8D8',
        fontWeight: "500"
      },
      secondary: {
        main: '#424242',
        textColor: '#A4A4A4',
        boxShadow: "0 0 0 0"
      },
      textSecondary: {
        main: '#000'
      },
      toggle: {
        border: "1px solid transparent",
        bgColor: "transparent",
        color: "#D8D8D8"
      },
      button: {
        border: "1px solid transparent",
        bgColor: "transparent",
        color: "#D8D8D8"
      },
      logo: {
        first: {
          fill: "#2E2E2E"
        },
        second: {
          fill: "#606060"
        },
        line: {
          fill: "none",
          stroke: "#2F89CC"
        }
      }
      
    },
    bgColor: '#151515'
  });


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <div style={{height: "100vh", background: (theme === 'light' ? lightTheme.bgColor : darkTheme.bgColor)}}>
        <Header toggleTheme={toggleTheme} />
        <Container maxWidth="lg" className={classes.container}>
          
          <Grid container spacing={1}>

            <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
              <PostItem/>
              <PostItem/>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
              <RightMenu/>
            </Grid>

          </Grid>    

        </Container>
      </div>
      
    </ThemeProvider>
  );
}
