import React from 'react';
import PostItem from '../../components/post/PostItem'
import PaginationBackground from '../../components/post/PaginationBackground';
import Backdrop from '../../components/loading/Backdrop';
import { ApiAsync, Axios } from '../../service/ApiService';

export default function MainPostList() {
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getPosts, []);
  const { isLoading, data } = state;

  async function getPosts() {
    const response = await Axios.get(
      '/posts/summary',
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
      <PostItem post={post} key={post.no}/>
    ))
  }

  return (
    <React.Fragment>
      { postList }
      <PaginationBackground pageable={data.pageable}/>
    
    </React.Fragment>
  )

}
