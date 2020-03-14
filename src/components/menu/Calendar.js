import React from 'react';

import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

export default function Calendar() {

  return (
    <React.Fragment>
      <CardHeader title="달력" icon={ <CalendarTodayOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}