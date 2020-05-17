import React from 'react';

import AccountTreeIcon from '@material-ui/icons/AccountTree';

import CategoryItem from './CategoryItem';
import CardHeader from './CardHeader';
import CardContent from './CardContent';
import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';

export default function Category() {

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(getCategory, []);
  const { isLoading, data } = state;

  async function getCategory() {
    const response = await Axios.get(
      '/categories/count',
    ).catch(error => {
      console.log(error);
    });

    if(response === undefined){
      return;
    }

    if(response.status === 200){
      return response;
    }
  }
  
  if(isLoading){
    return (<Backdrop/>)
  }
  
  
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