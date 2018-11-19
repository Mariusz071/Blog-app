import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import yellow from '@material-ui/core/colors/yellow';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { getKey } from "../actions";
import { compose } from "recompose";

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
    };

    submitHandler = (e) => {
        e.preventDefault();
        this.props.getKey(this.state.userName, () => {
            this.props.history.push('/posts')
        });
    };

    render() {
        const { classes } = this.props;
        console.log(this.props);
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
                 Log in
             </Button>
            </MuiThemeProvider>
          </form>;
    }
}

LoginInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = state => {
    console.log(state);
    return { userKey: state.key }
};


export default compose(
    withStyles(styles, { name: 'LoginInput' }),
    connect(mapStateToProps, { getKey })
)(LoginInput);


