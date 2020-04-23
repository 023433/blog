import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PostViewTagItem from '../../components/post/PostViewTagItem';
import Backdrop from '../../components/loading/Backdrop';

import { ApiAsync, Axios } from '../../service/ApiService';

export default function TagList() {

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    description: {
      color: theme.palette.secondary.textColor
    }

  }));

  const classes = useStyles();
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getTags, []);
  const { isLoading, data } = state;

  async function getTags() {
    const response = await Axios.get(
      '/tags',
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

  console.log(data);
  if(isLoading){
    return (<Backdrop/>)
  }

  const tag = data;

  return (
    <Card elevation={0} className={classes.card}>

      <CardContent>             
        <Typography variant="body2" component="h2" className={classes.description}>
          {
            tag.map(item => (
              <PostViewTagItem tag={item} key={item.no}/>
            ))
          } 
        </Typography>
      </CardContent>
        
    </Card>
  );
}
