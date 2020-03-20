import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';

import PaginationBackground from './PaginationBackground';
import PostViewReplyItem from './PostViewReplyItem';

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
  subtitle: {
    marginBottom: "2px",
    alignSelf: "center",
    marginLeft: "4px",
    color: theme.palette.tertiary.textColor
  },
  category: {
    display: "flex",
    marginBottom: "3px",
    marginRight: "10px",
    color: theme.palette.secondary.textColor,
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
    color: theme.palette.secondary.textColor
  },
  cardContent: {
    paddingTop: "0px"
  },
  button: {
    backgroundColor: theme.palette.saveButton.backgroundColor,
    color: theme.palette.button.color,
    textTransform: "none",
    border: theme.palette.button.border,
  }
}));

export default function PostViewReply() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CardContent>         
        <Paper elevation={0} className={classes.category}>
          <Typography variant="subtitle1" noWrap component="h2" className={classes.subtitle}>
            댓글(0)
          </Typography>
        </Paper>    
      </CardContent>

      <CardContent className={classes.cardContent}>         
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Input 
              disableUnderline={true}
              className={classes.input}
              startAdornment={<PersonIcon className={classes.icon}/>}
              placeholder=" Name"
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
              fullWidth/>
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
              variant="outlined"/>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button className={classes.button} fullWidth variant="contained" color="primary" disableElevation>
            등록
          </Button>
        </Grid>

      </Grid>
        
      </CardContent>

      <PostViewReplyItem depth={0}/>
      <PostViewReplyItem depth={1}/>
      <PostViewReplyItem depth={3}/>
      <PostViewReplyItem depth={4}/>
      <PostViewReplyItem depth={5}/>

      <PaginationBackground/>

    </React.Fragment>
  );
};
