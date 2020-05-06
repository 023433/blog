import React from 'react';
import { Reply } from './enum/Reply';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import CancelIcon from '@material-ui/icons/Cancel';
import Typography from '@material-ui/core/Typography';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Axios, qs, Cookies } from '../../service/ApiService';
import  Warning from '../../components/alert/Warning';

export default function FormReply(props) {

  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    paper: {
      padding: '5px 4px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.inputSearch.bgColor,
      border: theme.palette.inputSearch.border,
    },
    button: {
      backgroundColor: theme.palette.saveButton.backgroundColor,
      color: theme.palette.button.color,
      textTransform: "none",
      border: theme.palette.button.border,
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    label: {
      color: theme.palette.label.color,
      fontWeight: "bold"
    },
  }));

  const submit = async (action) => {
    let response = null;
    const no = props.data.no;
    const docName = document.getElementById('formName');
    const name = docName? docName.value : "";
    const docPassword = document.getElementById('formPassword');
    const password = docPassword? docPassword.value : "";
    const content = document.getElementById('formContent').value;
    const secret = document.getElementById('formSecret').checked;
    const param = qs.stringify({ no, name, password, secret, content });

    if(docName !== null && docName !== undefined){
      if(name === undefined || name === ""){
        setOpen(true);
        setMessage("이름을 입력하세요");
        return;
      }
    }

    if(docPassword !== null && docPassword !== undefined){
      if(password === undefined || password === ""){
        setOpen(true);
        setMessage("비밀번호를 입력하세요");
        return;
      }
    }

    if(action === Reply.Reply){
      response = await Axios.post(
        '/comment/reply',
        param
      ).catch(error => {
        console.log(error);
      });
    }

    if(action === Reply.Modify){
      response = await Axios.put(
        '/comment',
        param
      ).catch(error => {
        console.log(error);
      });
    }

    if(response === undefined){
      return;
    }

    if(response.status === 200){
      props.refresh();
      props.close();
    }

  }

  const authToken = Cookies.get("X_AUTH_TOKEN");
  let isLogin = false;

  if(authToken !== undefined){
    isLogin = true;
  }
  
  const classes = useStyles(props);

  const action = props.action;
  let content = "";
  let secret = false;
  let name = "";

  if(action === Reply.Reply){
    content = "";
    name = "";
  }
  
  if(action === Reply.Modify){
    const tempGuest = props.data.guest;

    content = props.data.content;
    secret = props.data.secret;

    name = tempGuest? tempGuest.name : "";
  }

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("false");

  return (
    <React.Fragment>
      <Warning 
        open={open} 
        onClose={() => {
          setOpen(false);
          setMessage("");
        }} 
        message={message} />
      <CardContent className={classes.cardContent}>         
      <Grid container spacing={1}>
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant="button" className={classes.label}>
              {action}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} container justify="flex-end">
          <Button 
            size="small"
            onClick={() => props.close()}
            className={classes.button}
            endIcon={<CancelIcon/>}>
              취소
          </Button>
        </Grid>
        {
          isLogin? null
          : 
          <React.Fragment>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper variant="outlined" className={classes.paper}>
                <Input 
                  disableUnderline={true}
                  className={classes.input}
                  startAdornment={<PersonIcon className={classes.icon}/>}
                  placeholder=" Name"
                  id="formName"
                  defaultValue={name}
                  fullWidth/>
              </Paper>
            </Grid>
    
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Paper variant="outlined" className={classes.paper}>
                <Input 
                  disableUnderline={true}
                  className={classes.input}
                  startAdornment={<LockIcon className={classes.icon}/>}
                  placeholder=" Password"
                  type="password"
                  id="formPassword"
                  fullWidth/>
              </Paper>
            </Grid>
          </React.Fragment>
        }

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper variant="outlined" className={classes.paper}>
            <FormControlLabel
              className={classes.label}
              control={<Checkbox color="primary" id="formSecret" defaultChecked={secret} />}
              label="Secret"              
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper variant="outlined" className={classes.paper}>
            <Input
              disableUnderline={true}
              fullWidth
              multiline
              placeholder="Comment"
              rows="6"
              variant="outlined"
              id="formContent"
              defaultValue={content}/>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button 
            className={classes.button} 
            fullWidth 
            variant="contained" 
            color="primary" 
            disableElevation
            onClick={() => submit(action)}>
            등록
          </Button>
        </Grid>
      </Grid>
        
      </CardContent>

    </React.Fragment>
  );
}
