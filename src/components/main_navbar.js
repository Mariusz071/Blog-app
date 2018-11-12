import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    AppBar: {
        background: "rgba(0,0,0,.7)",
        color: "#FCDA02"

    },
    Button: {
        color: "#FFF",
        outline: "none"
    },
    Logo: {
        fontFamily: "Permanent Marker",
        letterSpacing: "2px",
        wordSpacing: "4px"
    }
};

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root }>
            <AppBar position="absolute" style={styles.AppBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" className={classes.grow} style={styles.Logo}>
                        BlogSimple
                    </Typography>
                    <Link to="/login" style={ {textDecoration: "none"} }>
                        <Button style={styles.Button}>Login</Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);