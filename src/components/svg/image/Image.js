import React, { useState } from 'react';
import LogoMedium from '../logo/medium'
import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Images(props) {
  const useStyles = makeStyles(theme => ({
      logoFirst: {
        fill: theme.palette.logo.first.fill
      },
      logoSecond: {
        fill: theme.palette.logo.second.fill
      },
      imgLogo: {
        width: "150px",
        height: "150px"
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

  let imgUrl = "";

  if(process.env.NODE_ENV === "production"){
    imgUrl = "https://img.devj.io";
  }else{
    imgUrl = "http://localhost";
  }

  const url = imgUrl + props.url;

  imageExists(url)

  let image;

  if(imgExists){
    image = <div
              style={{
                width: "100%",
                paddingTop: '56.25%', // 16:9
                backgroundSize: "contain",
                backgroundImage: `url(' ${url} ')`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"}}/> ;

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