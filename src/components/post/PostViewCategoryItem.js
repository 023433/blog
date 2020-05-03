import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Timestamp from '../../components/date/Timestamp';

export default function PostViewCategoryItem(props) {

  const useStyles = makeStyles(theme => ({
    nested: {
      paddingLeft: theme.spacing(2),
    },
    listItem: {
      display: "flex",
      padding: "2px",
    },
    listItemIcon: {
      minWidth: "20px",
      padding: "3px 0px 0px 5px"
    },
    listItemText: {
      color: theme.palette.secondary.textColor,
      fontSize: theme.palette.secondary.fontSize
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 5,
      height: 5,
      color: theme.palette.secondary.textColor
    },
    date: {
      display: "flex",
      alignSelf: "flex-end",
      marginLeft: "auto",
      color: theme.palette.secondary.textColor,
    },

  }));

  const classes = useStyles();

  const post = props.post;
  const no = post.no;  
  const subject = post.subject;  
  const createDate = post.createDate;  
  
  return (
    <ListItem button className={classes.listItem} {...{ component: Link, to: "/post/" + no }}>
      <ListItemIcon className={classes.listItemIcon}>
          <FiberManualRecordIcon className={classes.icon}/> 
      </ListItemIcon>

      <Typography variant="inherit" noWrap className={classes.listItemText}>
        {subject}
      </Typography>
      <Typography variant="caption" noWrap className={classes.date}>
        <Timestamp dateTime={createDate} />
      </Typography>
    </ListItem>
  )
}