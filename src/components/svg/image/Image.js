import React, { useState } from 'react';
import LogoMedium from '../logo/medium'
import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Images(props) {
  const maxHeight = props.maxHeight? props.maxHeight : "300px";
  const useStyles = makeStyles(theme => ({
      logoFirst: {
        fill: theme.palette.logo.first.fill
      },
      logoSecond: {
        fill: theme.palette.logo.second.fill
      },
      imgLogo: {
        width: maxHeight,
        height: maxHeight
      },
      img: {
        maxWidth: "100%",
        maxHeight: "100%"
      },
      card: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }
  
  }));

  const classes = useStyles();
  const [imgExists, setImgExists] = useState(false);


  function imageExists(imageUrl){

      if(imgExists){
        return;
      }

      var image = new Image();
      image.src = imageUrl;
      
      image.onload = function(){
        setImgExists(true);
      }

      image.onerror = function(){
        setImgExists(false);
      }

  }

  const url = props.url;

  imageExists(url)

  let image;

  if(imgExists){
    image = <img className={classes.img} src={url} alt=""/>;
  }else{
    image = <div className={classes.card}>
                <div className={classes.imgLogo}>
                  <LogoMedium logoFirst={classes.logoFirst} logoSecond={classes.logoSecond}/>
                </div>
              </div>;
  }


  return (
      <React.Fragment>
          {image}
      </React.Fragment>
  )
}