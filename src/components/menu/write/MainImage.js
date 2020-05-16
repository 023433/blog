import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import PanoramaOutlinedIcon from '@material-ui/icons/PanoramaOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function MainImage(props) {

  const useStyles = makeStyles(theme => ({
    card: {
      backgroundColor: theme.palette.secondary.main,
      margin: `${theme.spacing(1)}px auto`
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    paper: {
      padding: `${theme.spacing(1)}px`,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    iconAction: {
      marginRight: theme.spacing(0.5),
      padding: 2,
      color: theme.palette.secondary.textColor
    },
    typography: {
      color: theme.palette.secondary.textColor
    },
    cardHeader: {
      "& .MuiCardHeader-action": {
        alignSelf: "normal",
        marginTop: 0,
      }
    }
  }));

  const classes = useStyles();

  const [imageSrc, setImageSrc] = React.useState("");

  const submit = async () => {

  }

  const remove = async () => {
    setImageSrc("");
  }

  return (
    <React.Fragment>
      <CardHeader 
        className={classes.cardHeader}
        avatar={
          <InputAdornment position="end" className={classes.icon}>
            <PanoramaOutlinedIcon/>
          </InputAdornment>
        }
        title={
          <Typography variant="subtitle2" className={classes.typography}>
            메인 이미지
          </Typography>
        }
        action={
          <React.Fragment>
            <IconButton className={classes.iconAction} onClick={remove}>
              <RemoveOutlinedIcon variant="contained" />
            </IconButton>
            <IconButton className={classes.iconAction} onClick={submit}>
              <AddOutlinedIcon variant="contained" />
            </IconButton>
          </React.Fragment>
        }/>
      
      <CardMedia
        className={classes.media}
        image={imageSrc}
        title="Paella dish"
      />
    </React.Fragment>
  )
}
