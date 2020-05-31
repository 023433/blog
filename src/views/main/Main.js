import React from 'react';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch } from 'react-router-dom';

import MainPostList from '../post/MainPostList';
import SubPostList from '../post/SubPostList';
import SearchPostList from '../post/SearchPostList';
import SearchTagPostList from '../post/SearchTagPostList';
import DayPostList from '../post/DayPostList';
import TagList from '../post/TagList';


import PostView from '../../components/post/PostView';
import RightMenu from '../../components/menu/RightMenu';

import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import { Cookies } from '../../service/ApiService';
import { Cookie } from '../../service/api/enum/Cookie';

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
  const history = useHistory();

  const signout = () => {
    Cookies.remove(Cookie.STR_TOKEN);
    history.push("/");
    window.location.reload()
  }
  return (
    <Container maxWidth="lg" className={classes.container}>
      
      <Grid container spacing={1}>

        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Switch>
            <Route exact path="/" component={(props) => <MainPostList {...props} />} />
            <Route path="/sub/:first/:second/:third/:fourth" component={(props) => <SubPostList {...props} />} />
            <Route path="/sub/:first/:second/:third" component={(props) => <SubPostList {...props} />} />
            <Route path="/sub/:first/:second" component={(props) => <SubPostList {...props} />} />
            <Route path="/sub/:first" component={(props) => <SubPostList {...props} />} />
            <Route path="/search/:item" component={(props) => <SearchPostList {...props} />} />
            <Route path="/day/:item" component={(props) => <DayPostList {...props} />} />
            <Route path="/tag/:item" component={(props) => <SearchTagPostList {...props} />} />
            <Route path="/tag" component={(props) => <TagList {...props} />} />
            <Route path="/post/:id" component={PostView} />
            <Route path="/signout" render={signout}/>
          </Switch>
        </Grid>

        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <RightMenu/>
        </Grid>

      </Grid>
      
    </Container>
  );
}
