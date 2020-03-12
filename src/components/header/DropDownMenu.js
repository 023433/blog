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
    }
  }));

  const classes = useStyles();

  return (
    <React.Fragment>
      <Button 
        className={classes.button}
        onClick={handleClick} 
        endIcon={open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}>
          
        Open Menu
      </Button>
      
      <Popper open={open} anchorEl={anchorEl} transition disablePortal>
        <Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList>
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </MenuList >
          </ClickAwayListener>
        </Paper>
      </Popper>
      
    </React.Fragment>
  );
};
