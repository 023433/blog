import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import MainPostList from '../post/MainPostList';
import SubPostList from '../post/SubPostList';
import SearchPostList from '../post/SearchPostList';
import SearchTagPostList from '../post/SearchTagPostList';
import TagList from '../post/TagList';


import PostView from '../../components/post/PostView';
import RightMenu from '../../components/menu/RightMenu';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: "68px"
    }
  })
);

export default function Main() {
  const classes = useStyles();
  
  return (
    <Container maxWidth="lg" className={classes.container}>
      
      <Grid container spacing={1}>

        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Switch>
            <Route exact path="/"><MainPostList/></Route>
            <Route path="/sub/:first/:second"><SubPostList/></Route>
            <Route path="/sub/:first"><SubPostList/></Route>
            <Route path="/search/:item"><SearchPostList/></Route>
            <Route path="/tag/:item"><SearchTagPostList/></Route>
            <Route path="/tag"><TagList/></Route>
            <Route path="/post/:id"><PostView/></Route>
          </Switch>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <RightMenu/>
        </Grid>

      </Grid>
      
    </Container>
  );
}
