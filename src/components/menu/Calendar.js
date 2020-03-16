import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import FirstPageIcon from '@material-ui/icons/FirstPage';

export default function MenuCalendar() {
  const useStyles = makeStyles(theme => ({
    calendar: {
      width: "100%",
      border: "1px solid transparent",
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.textColor,
      textDecoration: "none",
      "& .react-calendar__navigation":{
        marginBottom: "0px"
      },
      "& .react-calendar__month-view__weekdays__weekday abbr":{
        textDecoration: "none"
      },
      "& .react-calendar__month-view__weekdays":{
        "& div:first-child": {
          color: theme.palette.calendar.sunday.color
        },
        "& div:last-child": {
          color: theme.palette.calendar.satday.color,
        }
      }
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    typography: {
      color: theme.palette.secondary.textColor
    },
    sunday: {
      color: theme.palette.calendar.sunday.color
    },
    satday: {
      color: theme.palette.calendar.satday.color,
      fontWeight: theme.palette.calendar.satday.fontWeight
    },
    weekday: {
      color: theme.palette.calendar.weekday.color
    },
    fill: {
      backgroundColor: theme.palette.calendar.fill.backgroundColor
    }
  }));

  const classes = useStyles();

  let writeDate = [1, 10, 20, 11, 15];

  const initDate = (param) => {
    let weekday = param.date.getDay();
    let day = param.date.getDate();
    let res = [];

    if(writeDate.includes(day)){
      res.push(classes.fill);
    }

    if(weekday === 0){
      res.push(classes.sunday);
    }else if(weekday === 6){
      res.push(classes.satday);
    }else{
      res.push(classes.weekday);
    }

    return res
  }

  return (
    <React.Fragment>
      <CardHeader title="달력" icon={ <CalendarTodayOutlinedIcon/>}/>
      <CardContent content={
        <React.Fragment>
          <Calendar 
            prevLabel={<NavigateBeforeIcon className={classes.icon}/>}
            prev2Label={null}
            nextLabel={<NavigateNextIcon className={classes.icon}/>}
            next2Label={null}
            navigationLabel={({ date }) => 
              <Typography variant="button" className={classes.typography}>
                {date.getFullYear() + ". " + (date.getMonth()+1) + "."}
              </Typography>
            }
            showNeighboringMonth={false}
            tileClassName={
              (date) => initDate(date)
            }
            className={classes.calendar}
            calendarType={"US"}
            />
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}