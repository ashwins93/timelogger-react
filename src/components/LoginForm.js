import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/icon';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';
import { connect } from 'react-redux';
import { getToken, getMessage, getIsWaiting } from '../reducers';
import * as actions from '../actions';
import { LinearProgress } from 'material-ui/Progress';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing.unit * 4
  },  
  card: {
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20vh'
  },
  button: {
    flexGrow: 0,
    marginTop: theme.spacing.unit * 2
  },
  textField: {
    minWidth: 300,
    alignSelf: 'stretch'
  },
  progress: {
    width: '100%'
  }
});

class LoginForm extends Component {
 state = {
    username: '',
    password: ''
  };
  
  handleChange = name => event => (
    this.setState({
      [name]: event.target.value
    })
  );

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('submitting');
    // console.log('state', this.state);
    this.props.authenticate(this.state.username, this.state.password); 
  }

  render() {
    const { classes, token, message, isWaiting } = this.props;

    return (
      <Card className={ classes.card }>
        <form className={ classes.container } onSubmit={this.handleSubmit}> 
          <Typography type="headline">Login</Typography>
          <Typography type="subheading">to view your profile</Typography>
          <TextField 
            label="Username"
            value={this.state.username}
            placeholder="Enter your username"
            margin="normal"
            className={ classes.textField }
            onChange={this.handleChange('username')}
          />
          <TextField 
            label="Password"
            type="password"
            value={this.state.password}
            placeholder="Enter your password"
            margin="normal"
            className={ classes.textField }
            onChange={this.handleChange('password')}
          />
          <Button
            type="submit"
            raised
            color="primary"
            className={ classes.button }
          >
            <span>Sumbit</span>
            <Icon style={{ marginLeft: 10 }}>send</Icon>
          </Button>
          
        </form>
        { 
          isWaiting && 
          <div className={classes.progress}>
            <LinearProgress  />
          </div>
        }
      </Card>
    );
  }
}

const mapStateToProps = (state) => ({
  token: getToken(state),
  message: getMessage(state),
  isWaiting: getIsWaiting(state),
});

const StyledForm = withStyles(styles)(LoginForm)

export default connect(
  mapStateToProps,
  actions
)(StyledForm);