import React from 'react';
import { Reply } from '../form/enum/Reply';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Timestamp from '../../components/date/Timestamp';
import FormReply from '../../components/form/FormReply';


export default function PostViewReplyItem(props) {

  const useStyles = makeStyles(theme => ({
    depth: {
      marginLeft: `${theme.spacing(props.item.depthNo)}px`
    },
    avatar: {
      
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    cardContent: {
      marginLeft: `${theme.spacing(props.item.depthNo + 1)}px`,
      paddingTop: "0px"
    },
    description: {
      color: theme.palette.secondary.textColor
    },
  }));

  const classes = useStyles(props);
  const data = props.item;

  let userName = "";

  if(data.auth === null && data.guest !== null){
    userName = data.guest.name;
  }

  if(data.guest === null && data.auth !== null){
    userName = data.auth.author;
  }

  if(userName === ""){
    userName = "noname";
  }
  const [open, setOpen] = React.useState(false);
  const [action, setAction] = React.useState();

  const handleClickOpen = (action) => {
    setOpen(true);
    setAction(action);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CardHeader
        className={classes.depth}
        avatar={
          <Avatar className={classes.avatar}>
          </Avatar>
        }
        action={
          <React.Fragment>
            <IconButton aria-label={Reply.Reply} onClick={() => handleClickOpen(Reply.Reply)}>
              <ReplyIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label={Reply.Modify} onClick={() => handleClickOpen(Reply.Modify)}>
              <CreateIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label="삭제">
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </React.Fragment>
        }
        title={userName}
        subheader={<Timestamp dateTime={data.createDate} placement="left" />}
      />

      <CardContent className={[classes.cardContent, classes.depth].join(" ")}>
        <Typography variant="body2" className={classes.description}>
          {data.content}
        </Typography>
        {
        open ? (
            <FormReply close={handleClickClose} action={action} data={data}/>
          ) : null
        }
      </CardContent>

      
    </React.Fragment>
  );
};
