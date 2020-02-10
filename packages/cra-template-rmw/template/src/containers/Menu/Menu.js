import React from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'

const styles = theme => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
})

const mobileMenuId = 'primary-search-account-menu-mobile'

const ResponsiveMenu = ({
  history,
  scroll,
  handleMobileMenuClose,
  sections = [],
  handleMenuClose,
  statemobileMoreAnchorEl,
  isMobileMenuOpen,
  classes = {},
  transparent,
  handleMobileMenuOpen,
}) => {
  return (
    <React.Fragment>
      <div
        className={classes.sectionDesktop}
        style={{ color: transparent ? 'white' : undefined }}
      >
        {sections.map(section => {
          const { onClick, name } = section
          return (
            <Button
              key={`button_${name}`}
              style={{ margin: 8 }}
              //variant="contained"
              onClick={onClick}
              aria-label={name}
              color="inherit"
            >
              <Typography variant="h6">{name}</Typography>
            </Button>
          )
        })}
      </div>
      <div className={classes.sectionMobile}>
        <IconButton
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
        >
          <MenuIcon style={{ color: transparent ? 'white' : undefined }} />
        </IconButton>
      </div>
      <Menu
        anchorEl={statemobileMoreAnchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
        {sections.map(section => {
          const { onClick, icon, name } = section
          return (
            <MenuItem onClick={onClick} key={`menuItem_${name}`}>
              <Button aria-label={name} color="inherit" startIcon={icon}>
                {name}
              </Button>
            </MenuItem>
          )
        })}
      </Menu>
    </React.Fragment>
  )
}

export default withStyles(styles)(ResponsiveMenu)