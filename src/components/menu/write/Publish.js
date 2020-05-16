import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import LockOpenIcon from '@material-ui/icons/LockOpen';
import CardHeader from '../CardHeader';

import Paper from '@material-ui/core/Paper';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export default function Publish(props) {

  const useStyles = makeStyles(theme => ({
    paper: {
      paddingLeft: `${theme.spacing(2)}px`,
      paddingRight: `${theme.spacing(2)}px`,
      paddingBottom: `${theme.spacing(2)}px`,
    },
    toggle: {
      color: theme.palette.button.color,
      textTransform: "none",
      border: theme.palette.button.border,
      width: "100%",
      "& .Mui-selected": {
        backgroundColor: theme.palette.saveButton.backgroundColor,
        color: theme.palette.button.color,
      }
    },
  }));

  const [alignment, setAlignment] = React.useState('true');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const classes = useStyles();

  return (
    <React.Fragment>
      <CardHeader title="공개 설정" icon={ <LockOpenIcon/>}/>
      <Paper elevation={0} className={classes.paper}>
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          className={classes.toggle}
        >
          <ToggleButton className={classes.toggle} value="true" aria-label="공개">
            공개
          </ToggleButton>
          <ToggleButton className={classes.toggle} value="false" aria-label="비공개">
            비공개
          </ToggleButton>
        </ToggleButtonGroup>
      </Paper>
      
    </React.Fragment>
  )
}

