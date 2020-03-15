import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';

import Button from '@material-ui/core/Button';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Popper from '@material-ui/core/Popper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';

export default function DropDownMenu() {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const useStyles = makeStyles(theme => ({
    button: {
      color: theme.palette.primary.textColor,
      fontWeight: theme.palette.primary.fontWeight
    },
    item: {
      color: theme.palette.secondary.textColor,
      fontWeight: theme.palette.secondary.fontWeight
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Button 
        className={classes.button}
        onClick={handleClick} 
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}>
          
        메뉴
      </Button>
      
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem className={classes.item}>첫번째</MenuItem>
              <MenuItem className={classes.item}>두번째</MenuItem>
              <MenuItem className={classes.item}>세번째</MenuItem>
            </MenuList>
          </ClickAwayListener>
        </Paper>
      </Popper>
      
    </React.Fragment>
  );
};
