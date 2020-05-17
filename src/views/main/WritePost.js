import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useHistory } from 'react-router-dom';

import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import  Warning from '../../components/alert/Warning';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import Chip from '@material-ui/core/Chip';
import WriteMenu from '../../components/menu/write/WriteMenu';
import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';
import Alert from '../../components/alert/Alert';

import './WritePost.css';

export default function WritePost() {

  const useStyles = makeStyles(theme => ({
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: "68px"
    },
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    input: {
      height: "60px",
      fontSize: "26px",
      color: theme.palette.secondary.textColor
    },
    paper: {
      padding: `${theme.spacing(1)}px`,
    },
    editor: {
      paddingTop: `${theme.spacing(2)}px`,
    },
    chip: {
      margin: theme.spacing(0.5),
      color: theme.palette.secondary.textColor
    },
  }));

  // eslint-disable-next-line
  const classes = useStyles();
  const history = useHistory();

  const [chipData, setChipData] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [content, setContent] = React.useState("");


  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(authValidate, []);
  const { isLoading, data } = state;

  async function authValidate() {
    const response = await Axios.get(
      '/auth/validate/admin',
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


  const onConfirmSuccess = () =>{
    history.push("/");
  }

  if(isLoading){
    return (<Backdrop/>)
  }

  if(data === null){
    return (
      <Alert
        open={true} 
        message="권한이 없습니다."
        onClose={onConfirmSuccess} 
        onSuccess={onConfirmSuccess}/>
    )
  }

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handleInsert = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const tag = document.getElementById('tag');
      const label = tag.value;
      tag.value = "";

      if(chipData.some((chip) => chip.key === label)){
        setMessage("이미 입력 하였습니다.");
        setOpen(true);
        return;
      }

      setChipData((chips) => [...chips, {key: label, label: label }]);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.target);

    const tags = chipData.map((value, index) => value.label)

    data.append("tags", tags);
    data.append("content", content);

    const response = await Axios.post(
      '/post',
      data
    ).catch(error => {
      setMessage("저장 실패!");
      handleClickOpen();
    });

    if(response === undefined){
      return;
    }

    if(response.status === 200){
      history.push("/");
    }

  }


  return (
    <Container maxWidth="lg" className={classes.container}>
      <Warning open={open} onClose={handleClose} message={message} />

      <form onSubmit={handleSubmit} method="post">
        
        <Grid container spacing={1}>

          <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>

            <Card elevation={0} className={classes.card}>

              <Paper elevation={0} className={classes.paper}>
                <InputBase 
                  className={classes.input}
                  id="subject" 
                  name="subject"
                  placeholder="제목을 입력하세요."
                  fullWidth 
                  variant="filled"/>
              </Paper>

              <CKEditor 
                editor={ ClassicEditor }
                onChange={ ( event, editor ) => {
                  setContent(editor.getData());
                } } />

              <Divider/>

              <Paper elevation={0} className={classes.paper}>

                {
                  chipData.map((data) => {
                    return (
                        <Chip
                          key={data.key}
                          label={data.label}
                          onDelete={handleDelete(data)}
                          className={classes.chip}
                        />
                    );
                  })
                }

              </Paper>


              <Paper elevation={0} className={classes.paper}>
                <InputBase 
                  className={classes.input}
                  id="tag" 
                  placeholder="태그를 입력하세요."
                  fullWidth 
                  onKeyPress={(event) =>{
                    handleInsert(event)
                  }}
    
                  variant="filled"/>
              </Paper>

            </Card>

          </Grid>

          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <WriteMenu/>
          </Grid>
        </Grid>

      </form>
      
    </Container>

  );
}
