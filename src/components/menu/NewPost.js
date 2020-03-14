import React from 'react';

import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function NewPost() {

  return (
    <React.Fragment>
      <CardHeader title="최근 글" icon={ <BorderColorOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}