import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Icon from 'material-ui/icon';
import Typography from 'material-ui/Typography';
import Card from 'material-ui/Card';

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

  render() {
    const { classes } = this.props;

    return (
      <Card className={ classes.card }> 
        <form className={ classes.container }>
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
            raised
            color="primary"
            className={ classes.button }
          >
            <span>Sumbit</span>
            <Icon style={{ marginLeft: 10 }}>send</Icon>
          </Button>
        </form>
      </Card>
    );
  }
}

export default withStyles(styles)(LoginForm);