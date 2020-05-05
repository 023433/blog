import React from 'react';
import PostItem from '../../components/post/PostItem'
import PaginationBackground from '../../components/post/PaginationBackground';
import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';
import QueryString from "query-string";

export default function MainPostList(props) {
  const queryParam = props.location.query;
  const queryString = QueryString.parse(props.location.search);

  let no = 0;

  if(queryParam !== undefined){
    no = queryParam.page - 1;
  }  
  
  if(queryString !== undefined){
    no = queryString.page - 1;
  }  

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(() => getPosts(no), [no]);
  const { isLoading, data } = state;

  async function getPosts(no) {
    let data = {}

    if(no !== undefined && no !== "NaN" && no > 0){
      data.pageNo = no
    }

    const response = await Axios.get(
      '/posts/summary',
      {params: data}
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
      <PostItem post={post} key={post.postNo}/>
    ))
  }

  return (
    <React.Fragment>
      { postList }
      <PaginationBackground 
        pageable={data.pageable}
        search={data.search}
        label="page"/>
    
    </React.Fragment>
  )

}
