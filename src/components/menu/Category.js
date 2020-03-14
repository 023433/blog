import React from 'react';

import AccountTreeIcon from '@material-ui/icons/AccountTree';

import CategoryItem from './CategoryItem';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function Category() {

  return (
    <React.Fragment>
      <CardHeader title="카테고리" icon={ <AccountTreeIcon/>}/>
      <CardContent content={
        <React.Fragment>
          <CategoryItem/>
          <CategoryItem/>
          <CategoryItem/>
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}