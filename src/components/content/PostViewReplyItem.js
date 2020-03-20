import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ReplyIcon from '@material-ui/icons/Reply';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';



export default function PostViewReplyItem(props) {

  const useStyles = makeStyles(theme => ({
    depth: {
      marginLeft: `${theme.spacing(props.depth)}px`
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
      marginLeft: `${theme.spacing(props.depth + 1)}px`,
      paddingTop: "0px"
    },
    description: {
      color: theme.palette.secondary.textColor
    },
  }));

  const classes = useStyles(props);

  return (
    <React.Fragment>
      <CardHeader
        className={classes.depth}
        avatar={
          <Avatar className={classes.avatar}>
            J
          </Avatar>
        }
        action={
          <React.Fragment>
            <IconButton aria-label="대댓글">
              <ReplyIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label="수정">
              <CreateIcon className={classes.icon} />
            </IconButton>
            <IconButton aria-label="삭제">
              <DeleteIcon className={classes.icon} />
            </IconButton>
          </React.Fragment>
          
        }
        title="j님"
        subheader="2020-03-20 11:22:33"
      />

      <CardContent className={[classes.cardContent, classes.depth].join(" ")}>
        <Typography variant="body2" className={classes.description}>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </React.Fragment>
  );
};
