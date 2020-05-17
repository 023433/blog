import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { renderToStaticMarkup } from 'react-dom/server';

import InsertPhotoOutlinedIcon from '@material-ui/icons/InsertPhotoOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import RemoveOutlinedIcon from '@material-ui/icons/RemoveOutlined';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LogoMedium from '../../svg/logo/medium'
import { Axios, Backdrop } from '../../../service/ApiService';

export default function Thumbnail(props) {

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
    },
    none: {
      display: "none"
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  }));

  const classes = useStyles();
  const [imageSrc, setImageSrc] = React.useState("/");
  const [isDefault, setDefault] = React.useState(true);
  const [isLoading, setLoading] = React.useState(false);
  const [originalName, setOriginalName] = React.useState("");
  const [saveName, setSaveName] = React.useState("");
  const [savePath, setSavePath] = React.useState("");

  const inputEl = React.createRef();

  const submit = async (event) => {
    setLoading(true);
    const target = event.target;

    const data = new FormData();
    data.append("attachImage", target.files[0]);

    const response = await Axios.post(
      '/attach/thumbnail',
      data
    ).catch(error => {
      console.log(error);
    });
    
    if(response === undefined){
      setLoading(false);
      return;
    }

    if(response.status === 200){
      const res = response.data;
      const savePath = res.savePath;
      const originalFileName = res.originalFileName;
      const saveFileName = res.saveFileName;
      const url = res.url;

      setLoading(false);
      setDefault(false);
      setSaveName(saveFileName);
      setSavePath(savePath);
      setOriginalName(originalFileName);
      setImageSrc(url + savePath + saveFileName);
    }
  }
  
  const attach = () => {
    inputEl.current.click();
  }

  const remove = () => {
    setDefault(true);
    setImageSrc("/");
    setSaveName("");
    setSavePath("");
    setOriginalName("");
  }

  const logo = encodeURIComponent(renderToStaticMarkup(<LogoMedium/>));

  return (
    <React.Fragment>
      {
        isLoading? <Backdrop/> : null
      }
      
      <CardHeader 
        className={classes.cardHeader}
        avatar={
          <InputAdornment position="end" className={classes.icon}>
            <InsertPhotoOutlinedIcon/>
          </InputAdornment>
        }
        title={
          <Typography variant="subtitle2" className={classes.typography}>
            썸네일
          </Typography>
        }
        action={
          <React.Fragment>
            <IconButton className={classes.iconAction} onClick={remove}>
              <RemoveOutlinedIcon variant="contained" />
            </IconButton>
            <IconButton className={classes.iconAction} onClick={attach}>
              <AddOutlinedIcon variant="contained" />
            </IconButton>
          </React.Fragment>
        }/>
      
      <input type="file" ref={inputEl} className={classes.none} onChange={submit} accept="image/*" />
      <input type="hidden" name="thumbnailOriginalName" value={originalName}/>
      <input type="hidden" name="thumbnailSaveName" value={saveName}/>
      <input type="hidden" name="thumbnailSavePath" value={savePath}/>

      {
       isDefault?
        <div
          style={{
            paddingTop: '56.25%', // 16:9
            opacity: "20%",
            backgroundImage: `url('data:image/svg+xml;utf8, ${logo} ')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center"}}/> 
        :
        <CardMedia
          className={classes.media}
          image={imageSrc}
          title="Thumbnail"/>
      }

    </React.Fragment>
  )
}
