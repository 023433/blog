import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import AccountTreeIcon from '@material-ui/icons/AccountTree';

import CardHeader from '../CardHeader';

import Checkbox from '@material-ui/core/Checkbox';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

import { ApiAsync, Axios, Backdrop } from '../../../service/ApiService';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function Category(props) {

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    paper: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
      paddingBottom: `${theme.spacing(2)}px`,
    },
    input: {
      "& .MuiInput-underline:before": {
        borderBottom: "none",
      },
      "& .MuiInput-underline:after": {
        borderBottom: "none",
      },
      "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
        borderBottom: "none",
      },
    }

  }));

  const [no, setNo] = React.useState([]);

  const classes = useStyles();

  const change = (value) => {
    const idx = value.length - 1

    if(idx < 0){
      setNo([]);
      return
    }

    const isContains = no.some(val => val === value[idx].no);

    if(isContains){
      setNo((chips) => chips.filter((chip) => chip !== value[idx].no));
    }else{
      setNo((chips) => chips.concat(value[idx].no));
    }
  }


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
  
  const category = initCategory(data);

  return (
    <React.Fragment>
      <CardHeader title="카테고리" icon={ <AccountTreeIcon/>}/>
      <Paper elevation={0} className={classes.paper}>
        <Autocomplete
          multiple
          id="category"
          size="small"
          limitTags={2}
          options={category}
          disableCloseOnSelect
          onChange={(event, value) => change(value)}
          getOptionLabel={(option) => option.title}
          renderOption={(option, { selected }) => (
            <React.Fragment>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </React.Fragment>
          )}
          renderInput={(params) => 
            <TextField 
              {...params} 
              className={classes.input} 
              placeholder="카테고리를 선택하세요." />
          }
        />
      </Paper>
      <input
        type="hidden" 
        value={no}
        name="category" />
    </React.Fragment>
  )
}

let res = [];

const initCategory = (data) =>{
  res = [];
  
  if(data === null){
    return data;
  }

  data.map((category) => {
    res.push({"no": category.no, "title": category.title});

    if(category.children !== null){
      initCategory(category.children);
    }
    return null;
  });

  return res;
}
