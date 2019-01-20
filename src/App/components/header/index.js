import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../../images/logo.png';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return <div className="header-content">
            <AppBar position="static">
                <Toolbar>
                    <div className="header-container">
                        <img className="logo" src={Logo} alt="Git Hub"/>
                        <div className="input-box">
                            <input className="input-field" name="search" placeholder="search or jump too..."/>
                        </div>
                        <div className="menu-item">Pull Request</div>
                        <div className="menu-item">Issue</div>
                        <div className="menu-item">Markeplace</div>
                        <div className="menu-item">Explore</div>
                    </div>
                    {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton> */}
                    {/* <Typography variant="h6" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);