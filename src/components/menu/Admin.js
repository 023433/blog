import React from 'react';

import BuildRoundedIcon from '@material-ui/icons/BuildRounded';

import AdminItem from './AdminItem';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function Admin() {

  return (
    <React.Fragment>
      <CardHeader title="관리" icon={ <BuildRoundedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          <AdminItem name="로그인" />
          <AdminItem name="관리자" />
          <AdminItem name="글쓰기" />
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}