import React from 'react';

import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import NewCommentItem from './NewCommentItem';
import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';

export default function NewComment() {
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(() => getPostsNewest(), []);
  const { isLoading, data } = state;

  async function getPostsNewest() {

    const response = await Axios.get(
      '/comments/newest'
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


  if(data != null){
    data.pageable["totalPages"] = data.totalPages
  }

  let commentList;

  if(data != null){
    data.pageable["totalPages"] = data.totalPages

    commentList = data.content.map(item => (
      <NewCommentItem item={item} key={item.no}/>
    ))
  }
  return (
    <React.Fragment>
      <CardHeader title="최근 댓글" icon={ <ForumOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          {commentList}
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}