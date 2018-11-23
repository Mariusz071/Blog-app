import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import classNames from "classnames";

const styles = theme => ({
    list: {
        marginBottom: theme.spacing.unit * 2,
    },
    appBar: {
        top: 'auto',
        bottom: 0,
        background: "#FCDA02",
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconButton: {
        color: "#797979",
        outline: "none",

        '&:hover': {
            color: "#444"
        }
    },
});

function BottomAppBar(props) {
    const { classes } = props;
    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar className={classNames(classes.toolbar, "footer")}>
                <div>
                    <IconButton className={classes.iconButton} href="https://github.com/Mariusz071">
                            <i className="fab fa-github-square"></i>
                    </IconButton>
                    <IconButton className={classes.iconButton}
                                href="https://www.linkedin.com/in/mariusz-siewruk-js-developer/">
                        <i className="fab fa-linkedin"></i>
                    </IconButton>
                </div>
                <div>
                    <Typography variant="subtitle2" color="textPrimary">
                        Copyright &copy; 2018 Mariusz Siewruk
                    </Typography>
                </div>
            </Toolbar>
        </AppBar>
    );
}

BottomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomAppBar);