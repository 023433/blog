import React from 'react';

import BuildRoundedIcon from '@material-ui/icons/BuildRounded';

import AdminItem from './AdminItem';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import { Cookies } from '../../service/ApiService';

export default function Admin() {

  const authToken = Cookies.get("X_AUTH_TOKEN");
  let isLogin = false;

  if(authToken !== undefined){
    isLogin = true;
  }

  return (
    <React.Fragment>
      <CardHeader title="관리" icon={ <BuildRoundedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          <AdminItem name={isLogin? "로그아웃":"로그인"} link={isLogin? "/signout":"/signin"} />
          <AdminItem name="관리자" link="/admin" />
          <AdminItem name="글쓰기" link="/write" />
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}