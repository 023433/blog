import React from 'react';
import { useHistory } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function Search() {

  const useStyles = makeStyles(theme => ({
    input: {
      border: "none",
      backgroundColor: theme.palette.inputSearch.bgColor,
      color: theme.palette.inputSearch.color
    },
    paper: {
      padding: '5px 4px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.inputSearch.bgColor,
      border: theme.palette.inputSearch.border,
    },
  }));

  var history = useHistory();

  function search(e){
    if(e.keyCode !== 13){
      return;      
    }

    if(e.target.value === ""){
      history.push("/");
      return;
    }

    history.push("/search/" + e.target.value);
  }
  
  const classes = useStyles();

  return (
    <React.Fragment>
      <CardHeader title="검색" icon={ <SearchIcon/>}/>
      <CardContent content={
        <Paper variant="outlined" className={classes.paper}>
          <InputBase 
            className={classes.input}
            id="outlined-basic" 
            placeholder="검색어 입력 후 엔터를 누르세요."
            fullWidth 
            variant="filled"
            onKeyDown={search}
            />
        </Paper>
      } />
    </React.Fragment>
    
    
  )
}