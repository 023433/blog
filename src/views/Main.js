import React, { useState } from 'react';
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../components/header/Header'
import MainContent from './main/Main';
import Signin from './main/Signin';
import WritePost from './main/WritePost';

import { ApiAsync, Axios, Backdrop } from '../service/ApiService';

export default function Main() {

  let saveTheme = localStorage.getItem("theme")

  if (saveTheme === 'undefined') {
    saveTheme = 'light';
  }

  const [theme, setTheme] = useState(saveTheme);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  const lightTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: 'Noto Sans'
    },      
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
        fontSize: '14px',
        boxShadow: "0 2px 4px 0 #eeeeee"
      },
      tertiary: {
        main: '#fff',
        textColor: '#263238',
        fontSize: '14px',
        boxShadow: "0 2px 4px 0 #eeeeee"
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
      inputSearch: {
        border: "1px solid #D8D8D8",
        bgColor: "#fff",
        color: "#151515"
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
      },
      calendar: {
        sunday: {
          color: "red"
        },
        satday: {
          color: "#133a70",
          fontWeight: "bold"
        },
        weekday: {
          color: "#616161"
        },
        fill: {
          backgroundColor: "#D8D8D8"
        }
      },
      badge: {
        backgroundColor: "#E6E6E6"
      },
      tag: {
        backgroundColor: "#D8D8D8"
      },
      saveButton: {
        backgroundColor: "#133a70"
      },
      label: {
        color: "#BCBCBC"
      },
      confirm: {
        button: {
          border: "1px solid transparent",
          bgColor: "transparent",
          color: "#616161"
        },
      }
    },
    bgColor: '#f2f6fc'
  });
  
  const darkTheme = createMuiTheme({
    typography: {
      useNextVariants: true,
      fontFamily: 'Noto Sans'
    },
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
        fontSize: '14px',
        boxShadow: "0 0 0 0"
      },
      tertiary: {
        main: '#424242',
        textColor: '#e0e0e0',
        fontSize: '14px',
        boxShadow: "0 0 0 0"
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
      inputSearch: {
        border: "1px solid transparent",
        bgColor: "#2E2E2E",
        color: "#D8D8D8"
      },
      logo: {
        first: {
          fill: "#2E2E2E"
        },
        second: {
          fill: "#606060"
        }
      },
      calendar: {
        sunday: {
          color: "red"
        },
        satday: {
          color: "#0288d1",
          fontWeight: "bold"
        },
        weekday: {
          color: "#A4A4A4"
        },
        fill: {
          backgroundColor: "#2E2E2E"
        }
      },
      badge: {
        backgroundColor: "#2E2E2E"
      },
      tag: {
        backgroundColor: "#2E2E2E"
      },
      saveButton: {
        backgroundColor: "#2E2E2E"
      },
      label: {
        color: "#929292"
      },
      confirm: {
        button: {
          border: "1px solid transparent",
          bgColor: "transparent",
          color: "#D8D8D8"
        },
      }
      
    },
    bgColor: '#151515'
  });


  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getCategory, []);
  const { isLoading, data } = state;

  async function getCategory() {
    const response = await Axios.get(
      '/categories/count',
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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router>
        <div style={{minHeight: "100vh", background: (theme === 'light' ? lightTheme.bgColor : darkTheme.bgColor)}}>
          <Header toggleTheme={toggleTheme} currentTheme={saveTheme} category={data}/>
          
          <Switch>
            <Route exact path="/signin"><Signin/></Route>
            <Route path="/write"><WritePost/></Route>
            <Route path="/*"><MainContent category={data}/></Route>
          </Switch>
          
        </div>
      </Router>
    </ThemeProvider>
  );
};
