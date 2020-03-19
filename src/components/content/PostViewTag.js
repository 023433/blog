import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import PostViewTagItem from './PostViewTagItem';

export default function PostViewTag() {
  return (
    <React.Fragment>
      <CardContent>         
        <PostViewTagItem/>
        <PostViewTagItem/>
        <PostViewTagItem/>
      </CardContent>
    </React.Fragment>
  );
};
