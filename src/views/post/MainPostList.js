import React from 'react';
import PostItem from '../../components/post/PostItem'
import PaginationBackground from '../../components/post/PaginationBackground';
import Axios from '../../service/AxiosApi';
import Backdrop from '../../components/loading/Backdrop';
import ApiAsync from '../../service/api/reducer/ApiAsync';
import Cookies from 'js-cookie';

export default function MainPostList() {
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getUsers, []);

  async function getUsers() {
    const response = await Axios.get(
      '/auth/login'
    );
    console.log(response);
    console.log(Cookies.set("data", response.data));

    return response;
  }

  const { isLoading, data } = state;

  if(isLoading){
    return (<Backdrop/>)
  }
  
  let postList;

  if(data != null && typeof(data) == Array){
    postList = data.map(post => (
      <PostItem post={post}/>
    ))
  }

  return (
    <React.Fragment>
      { postList }
      <PostItem/>
      <PaginationBackground/>
    
    </React.Fragment>
  )

}
