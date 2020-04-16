import React from 'react';
import LogoMedium from '../logo/medium'
import makeStyles from '@material-ui/core/styles/makeStyles';

export default function Image(props) {
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
        height: maxHeight,
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

  function imageExists(imageUrl){
      var http = new XMLHttpRequest();
  
      http.open('HEAD', imageUrl, false);
      http.send();
  
      return http.status !== 404;
  }

  const url = props.url;
  const image = <img className={classes.img} src={url} alt=""/>;

  const logo = 
                <div className={classes.card}>
                  <div className={classes.imgLogo}>
                    <LogoMedium logoFirst={classes.logoFirst} logoSecond={classes.logoSecond}/>
                  </div>
                </div>;

  return (
      <React.Fragment>
          {imageExists(url) === true ? image : logo }
      </React.Fragment>
  )
}