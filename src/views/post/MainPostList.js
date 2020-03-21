import React from 'react';

import PostItem from '../../components/post/PostItem'
import PaginationBackground from '../../components/post/PaginationBackground';
import Axios from 'axios';
import Backdrop from '../../components/loading/Backdrop';
import ApiAsync from '../../service/reducer/ApiAsync';

export default function MainPostList() {
  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getUsers, []);

  async function getUsers() {
    const response = await Axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    return response;
  }

  const { isLoading, data } = state;

  if(isLoading){
    return (<Backdrop/>)
  }

  return (
    <React.Fragment>
      { 
        data.map(user => (
          <PostItem/>
        ))
      }
      <PostItem/>
      <PaginationBackground/>
    
    </React.Fragment>
  )

}
