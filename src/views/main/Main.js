import React, { useState } from 'react';

import Header from '../../components/header/Header'
import Content from '../../components/content/ContentMain'

import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";

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
        border: "1px solid D8D8D8",
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
          color: "#133a70",
          fontWeight: "bold"
        },
        weekday: {
          color: "#A4A4A4"
        },
        fill: {
          backgroundColor: "#2E2E2E"
        }
      }
      
    },
    bgColor: '#151515'
  });


  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

      <div style={{minHeight: "100vh", background: (theme === 'light' ? lightTheme.bgColor : darkTheme.bgColor)}}>
        <Header toggleTheme={toggleTheme} currentTheme={saveTheme} />
        <Content />
      </div>
      
    </ThemeProvider>
  );
}
