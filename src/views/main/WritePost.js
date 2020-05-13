import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import { ApiAsync } from '../../service/ApiService';
import Divider from '@material-ui/core/Divider';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


import WriteMenu from '../../components/menu/write/WriteMenu';



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

  }));

  // eslint-disable-next-line
  const classes = useStyles();
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getTags, []);

  async function getTags() {

  }



  return (
    <Container maxWidth="lg" className={classes.container}>
      
      <Grid container spacing={1}>

        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>

          <Card elevation={0} className={classes.card}>

            <Paper elevation={0} className={classes.paper}>
              <InputBase 
                className={classes.input}
                id="subject" 
                placeholder="제목을 입력하세요."
                fullWidth 
                variant="filled"/>
            </Paper>

            <Divider />

            <Paper elevation={0} className={classes.editor}>
              <CKEditor editor={ ClassicEditor } />
            </Paper>


            </Card>

        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <WriteMenu/>
        </Grid>
      </Grid>
      
    </Container>

  );
}
