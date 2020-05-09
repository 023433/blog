import React from 'react';
import { Reply } from '../form/enum/Reply';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import CreateIcon from '@material-ui/icons/Create';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Timestamp from '../../components/date/Timestamp';
import FormReply from '../../components/form/FormReply';
import Confirm from '../alert/Confirm';
import  Warning from '../../components/alert/Warning';
import { Axios, Cookies } from '../../service/ApiService';

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
  const [item, setItem] = React.useState(props.item);
  const [isSecret, setSecret] = React.useState(item.secret);

  const authToken = Cookies.get("X_AUTH_TOKEN");
  let isLogin = false;

  if(authToken !== undefined){
    isLogin = true;
  }

  let userName = "";

  if(item.auth === null && item.guest !== null){
    userName = item.guest.name;
  }

  if(item.guest === null && item.auth !== null){
    userName = item.auth.author;
  }

  if(userName === ""){
    userName = "noname";
  }

  const [openForm, setOpenForm] = React.useState(false);
  const [openWarning, setOpenWarning] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [action, setAction] = React.useState();
  const [content, setContent] = React.useState(item.content);
  const [isReply, setReply] = React.useState(false);


  const handleClickOpen = async (action) => {
    if(isLogin && action === Reply.Modify){
      const response = await onConfirmApi();

      if(response === undefined){
        return null;
      }
  
      if(response.status === 200){
        if(response.data === ""){
          setMessage("수정할 수 없습니다.");
          setOpenWarning(true);
          return;
        }
        setItem(response.data);
        setContent(response.data.content);
        setAction(action);
        setOpenForm(true);
        return;
      }else{
        return;
      }
    }

    if(isSecret && action === Reply.Modify){
      setOpenConfirm(true);
      setReply(true);
      return;
    }
    
    setOpenForm(true);
    setAction(action);
  };

  const handleClickClose = (data) => {
    if(data !== undefined){
      setItem(data);
      setContent(data.content);
    }
    setOpenForm(false);
  };

  const confirmClose = () => {
    setOpenConfirm(false);
  };

  const onConfirmApi = async (password) => {
    let params = {}

    params.password = password
  
    const response = await Axios.get(
      '/comment/' + item.no,
      {params: params}
    ).catch(error => {
      console.log(error);
    });

    if(response === undefined){
      return null;
    }

    if(response.status === 200){
      return response;
    }
  };

  const onConfirmSuccess = (data) => {
    setItem(data);
    setContent(data.content);
    setOpenConfirm(false);
    setSecret(false);
  };

  const onConfirmFail = () => {
    setMessage("비밀번호를 확인하세요");
    setOpenWarning(true);
  };

  const onConfirmCallback = () => {
    if(isReply){
      setAction(Reply.Modify);
      setOpenForm(true);
    }
  };

  const commentClickOpen = async () => {
    if( !isSecret ){
      return;
    }
    
    if(isLogin){
      const response = await onConfirmApi();

      if(response === undefined){
        return null;
      }
  
      if(response.status === 200){
        if(response.data === ""){
          setOpenConfirm(true);
          setReply(false);
          return;
        }
        setItem(response.data);
        setContent(response.data.content);
        return;
      }else{
        return;
      }
    }

    if(isSecret){
      setOpenConfirm(true);
      setReply(false);
    }
  };


  const isPublish = item.publish;

  return (
    <React.Fragment>
      <Warning open={openWarning} onClose={() => {setOpenWarning(false);}} message={message} />
      <Confirm 
        open={openConfirm} 
        onClose={confirmClose} 
        onApi={onConfirmApi}
        onSuccess={onConfirmSuccess}
        onFail={onConfirmFail}
        onCallBack={onConfirmCallback}
        aria-labelledby="Comment"/>
      <CardHeader
        className={classes.depth}
        avatar={
          <Avatar className={classes.avatar}>
          </Avatar>
        }
        action={
          isPublish?
            <React.Fragment>
              <IconButton aria-label={Reply.Reply} onClick={() => handleClickOpen(Reply.Reply)}>
                <ReplyIcon className={classes.icon} />
              </IconButton>
              <IconButton aria-label={Reply.Modify} onClick={() => handleClickOpen(Reply.Modify)}>
                <CreateIcon className={classes.icon} />
              </IconButton>
            </React.Fragment>
            :null
        }
        title={userName}
        subheader={<Timestamp dateTime={item.createDate} placement="left" />}
      />

      <CardContent className={[classes.cardContent, classes.depth].join(" ")}>
        <Typography 
          variant="body2" 
          onClick={commentClickOpen}
          className={classes.description}>
          {content}
        </Typography>
        {
        openForm ? (
            <FormReply close={handleClickClose} action={action} data={item} refresh={props.refresh}/>
          ) : null
        }
      </CardContent>

      
    </React.Fragment>
  );
};
