import React from 'react';

import AccountTreeIcon from '@material-ui/icons/AccountTree';

import CategoryItem from './CategoryItem';
import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function Category(props) {

  const data = props.category;

  return (
    <React.Fragment>
      <CardHeader title="카테고리" icon={ <AccountTreeIcon/>}/>
      <CardContent content={
        <React.Fragment>
          {
            data != null ?
              data.map(category => (
                <CategoryItem category={category} key={category.no}/>
              ))
              :
              null
          }
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}