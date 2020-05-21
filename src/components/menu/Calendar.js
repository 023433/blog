import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useHistory } from 'react-router-dom';

import CalendarTodayOutlinedIcon from '@material-ui/icons/CalendarTodayOutlined';

import CardHeader from './CardHeader';
import CardContent from './CardContent';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import Typography from '@material-ui/core/Typography';

import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { ApiAsync, Axios, Backdrop } from '../../service/ApiService';

export default function MenuCalendar() {
  const history = useHistory();

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


  const goToPage = (value) => {
    const year = value.getFullYear();
    let month = value.getMonth() + 1;
    let day = value.getDate();

    if(!writeDate.includes(day)){
      return;
    }

    if(month < 10){
      month = `0${month}`;
    }

    if(day < 10){
      day = `0${day}`;
    }

    const result = `${year}-${month}-${day}`;

    history.push("/day/" + result);
  }

  const [activeDate, setActiveDate] = React.useState(getActiveDate(new Date()));

  // eslint-disable-next-line
  const [state, dispatch] = ApiAsync(() => getPostCount(activeDate), [activeDate]);
  const { isLoading, data } = state;

  let writeDate = [];

  async function getPostCount(date) {

    const response = await Axios.get(
      '/post/count/' + date
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
  
  const changeActiveDate = (value) => {
    setActiveDate(getActiveDate(value.activeStartDate));
  }

  function getActiveDate(activeDate){
    const year = activeDate.getFullYear();
    let month = activeDate.getMonth() + 1;

    if(month < 10){
      month = `0${month}`;
    }

    return `${year}-${month}`;
  }

  if(isLoading){
    return (<Backdrop/>)
  }

  data.map(value => {
    
    let createDate = new Date(value.createDate);

    if(navigator.platform.indexOf('Mac') > -1){
      createDate = new Date(value.createDate + "+09:00");
    }

    if(navigator.platform.indexOf('iPhone') > -1){
      createDate = new Date(value.createDate + "+09:00");
    }
    
    writeDate.push(createDate.getDate());
    return null;
  })

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
            onClickDay={(value) => {goToPage(value);}}
            onActiveStartDateChange={(activeStartDate) => {changeActiveDate(activeStartDate);}}

            />
        </React.Fragment>
      }/>
    </React.Fragment>
  )
}