import React from 'react';

import ForumOutlinedIcon from '@material-ui/icons/ForumOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function NewComment() {

  return (
    <React.Fragment>
      <CardHeader title="최근 댓글" icon={ <ForumOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}