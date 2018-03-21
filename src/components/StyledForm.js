import React from 'react';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { Icon } from 'material-ui';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';
import Card from 'material-ui/Card';
import { LinearProgress } from 'material-ui/Progress';
import { Link } from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: theme.spacing.unit * 4,
  },
  card: {
    maxWidth: 400,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '20vh',
  },
  button: {
    flexGrow: 0,
    marginTop: theme.spacing.unit * 2,
  },
  textField: {
    minWidth: 300,
    alignSelf: 'stretch',
  },
  progress: {
    width: '100%',
  },
  error: {
    marginTop: theme.spacing.unit,
  },
});

const StyledForm = ({
  username,
  password,
  handleUserChange,
  handlePasswordChange,
  handleSubmit,
  isWaiting,
  message,
  classes,
}) => (
  <Card className={ classes.card }>
    <form className={ classes.container } onSubmit={handleSubmit}>
      <Typography type="headline">Login</Typography>
      <Typography type="subheading">to view your profile</Typography>
      <TextField
        label="Username"
        value={username}
        placeholder="Enter your username"
        margin="normal"
        className={ classes.textField }
        onChange={ handleUserChange }
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        placeholder="Enter your password"
        margin="normal"
        className={ classes.textField }
        onChange={handlePasswordChange}
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
      {
        message &&
        <Typography type="body1" color="error" className={ classes.error }>
          { message }
        </Typography>
      }
    </form>
    {
      isWaiting &&
      <div className={classes.progress}>
        <LinearProgress />
      </div>
    }

  </Card>
);

StyledForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  handleUserChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  isWaiting: PropTypes.bool.isRequired,
};

export default withStyles(styles)(StyledForm);
