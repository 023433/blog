import React, { useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function MenuCalendar() {
  const useStyles = makeStyles(theme => ({
    calendar: {
      border: "1px solid transparent"
    }
  }));

  const classes = useStyles();

  const [date, onDate] = useState(new Date());

  return (
    <React.Fragment>
      <CardHeader title="달력" icon={ <CalendarTodayOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          <Calendar 
            className={classes.calendar}
            onChange={onDate}
            value={date}/>
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}