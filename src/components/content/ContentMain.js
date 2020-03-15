import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PostItem from '../post/PostItem'
import RightMenu from '../menu/RightMenu'

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
    container: {
      paddingLeft: 0,
      paddingRight: 0,
      paddingTop: "64px"
    }
  })
);
export default function ContentMain() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.container}>
      <Grid container spacing={1}>

        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
          <PostItem/>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <RightMenu/>
        </Grid>

      </Grid>
    </Container>
  );
};