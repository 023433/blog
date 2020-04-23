import React from 'react';

import CardContent from '@material-ui/core/CardContent';
import PostViewTagItem from './PostViewTagItem';

export default function PostViewTag(props) {
  return (
    <React.Fragment>
      <CardContent>        
        {
          props.tag.map(item => (
            <PostViewTagItem tag={item.tag} key={item.no}/>
          ))
        } 
      </CardContent>
    </React.Fragment>
  );
};
