import React from 'react';

import BuildRoundedIcon from '@material-ui/icons/BuildRounded';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function Admin() {

  return (
    <React.Fragment>
      <CardHeader title="관리" icon={ <BuildRoundedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}