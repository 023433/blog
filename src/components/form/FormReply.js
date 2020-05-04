import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import CancelIcon from '@material-ui/icons/Cancel';

import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function FormReply(props) {

  const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
      color: theme.palette.secondary.textColor
    },
    paper: {
      padding: '5px 4px',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: theme.palette.inputSearch.bgColor,
      border: theme.palette.inputSearch.border,
    },
    button: {
      backgroundColor: theme.palette.saveButton.backgroundColor,
      color: theme.palette.button.color,
      textTransform: "none",
      border: theme.palette.button.border,
    },
    description: {
      color: theme.palette.secondary.textColor
    },
    label: {
      color: theme.palette.label.color,
      fontWeight: "bold"
    },
  }));

  const classes = useStyles(props);

  return (
    <React.Fragment>

      <CardContent className={classes.cardContent}>         
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} container justify="flex-end">
          <Button 
            size="small"
            onClick={() => props.close()}
            className={classes.button}
            endIcon={<CancelIcon/>}>
              취소
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Input 
              disableUnderline={true}
              className={classes.input}
              startAdornment={<PersonIcon className={classes.icon}/>}
              placeholder=" Name"
              fullWidth/>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Paper variant="outlined" className={classes.paper}>
            <Input 
              disableUnderline={true}
              className={classes.input}
              startAdornment={<LockIcon className={classes.icon}/>}
              placeholder=" Password"
              type="password"
              fullWidth/>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper variant="outlined" className={classes.paper}>
            <FormControlLabel
              className={classes.label}
              control={<Checkbox color="primary" />}
              label="Secret"
            />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Paper variant="outlined" className={classes.paper}>
            <Input
              disableUnderline={true}
              fullWidth
              multiline
              placeholder="Comment"
              rows="6"
              variant="outlined"/>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Button className={classes.button} fullWidth variant="contained" color="primary" disableElevation>
            등록
          </Button>
        </Grid>
      </Grid>
        
      </CardContent>

    </React.Fragment>
  );
}
