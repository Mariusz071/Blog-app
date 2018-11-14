import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import yellow from '@material-ui/core/colors/yellow';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    palette: {
        primary: yellow,
    },
    typography: { useNextVariants: true },
});

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: "50%",
    },
    input: {
        color: "#FFF",
        borderColor: "#FFF",
        underline: "2px solid #FFF"
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: "100%",
    },
    dense: {
        marginTop: 20,
    },
    Button: {
        color: "#000",
        backgroundColor: "#FFF",
        outline: "none",
        margin: "2rem auto",
        '&:hover': {
            backgroundColor: "#FCDA02"
        },
        '&:active:': {
            outline: "none"
        }
    },
});

class LoginInput extends Component {
    state = {
        userName: ''
    };

    handleChange = (e) => {
        const val = e.target.value;
        this.setState({
            userName: val,
        });
        console.log(this.state.userName)
    };

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state.userName)
    };

    render() {

        const { classes } = this.props;
        return <form className={classes.container} autoComplete="off" onSubmit={this.submitHandler} value={this.state.userName}>
            <MuiThemeProvider theme={theme}>
              <TextField required
                         id="userKey"
                         color="primary"
                         label="Your user name"
                         placeholder="Enter your unique user name"
                         className={classNames(classes.textField, classes.dense)}
                         InputProps={ {className: classes.input} }
                         InputLabelProps={ {className: classes.input} }
                         fullWidth margin="normal"
                         variant="outlined"
                         onChange={this.handleChange}
              />
             <Button type="submit"
                     size="large"
                     variant="contained"
                     className={classes.Button}
                     value="send"
             >
                 Submit user name
             </Button>
            </MuiThemeProvider>
          </form>;
    }
}

LoginInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginInput);

