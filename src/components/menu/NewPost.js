import React from 'react';

import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import NewPostItem from './NewPostItem';
import { ApiAsync, Axios } from '../../service/ApiService';
import Backdrop from '../../components/loading/Backdrop';


export default function NewPost() {
  
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(() => getPostsNewest(), []);
  const { isLoading, data } = state;

  async function getPostsNewest() {

    const response = await Axios.get(
      '/posts/newest'
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
  
  let postList;

  if(data != null){
    data.pageable["totalPages"] = data.totalPages

    postList = data.content.map(post => (
      // <PostItem post={post} key={post.no}/>
      <NewPostItem post={post} key={post.no}/>
    ))
  }

  return (
    <React.Fragment>
      <CardHeader title="최근 글" icon={ <BorderColorOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          {postList}
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}