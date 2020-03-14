import React from 'react';

import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import NewPostItem from './NewPostItem';

export default function NewPost() {

  return (
    <React.Fragment>
      <CardHeader title="최근 글" icon={ <BorderColorOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          <NewPostItem/>
          <NewPostItem/>
          <NewPostItem/>
          <NewPostItem/>
          <NewPostItem/>
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}