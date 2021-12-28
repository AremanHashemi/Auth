import React from 'react'
import {Grid,Paper,FormControl, 
        IconButton,InputAdornment, Typography,
        TextField, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import UserPool from './UserPool';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"1vh 15vh 5vh",
      margin:"20vh 60vh 10vh",
    //   inlineSize:"fit-content",
    },
    textField: {
        width: '25ch',
      },
    grid:{
        textAlign:"center",
    }
  }));

export default function AuthCard() {

    const Title = "My Auth Project";
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false,
    });
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(`Login Data user=${values.username}, pass=${values.password}`);
        UserPool.signUp(values.username, values.password, [], null, (err, data) => {
            if (err) {
                console.log(err);
            } 
            console.log(data);
        });
    };
    const classes = useStyles();
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Paper className={classes.root} elevation={20}>
            <Grid container
                className={classes.grid} 
                spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">{Title}</Typography>
                    <Typography variant="subtitle">Login</Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs = {12}>
                                <TextField
                                    className={classes.textField}
                                    id="outlined-basic"
                                    label="email or username"
                                    variant="outlined"
                                    onChange={handleChange('username')}
                                    value={values.username}
                                />
                            </Grid>
                            <Grid item xs={12}>
                              <TextField
                                  className={classes.textField}
                                  id="outlined-password-input"
                                  label="Password"
                                  type={values.showPassword ? 'text' : 'password'}
                                  autoComplete="current-password"
                                  variant="outlined"
                                  value={values.password}
                                  onChange={handleChange('password')}
                                  InputProps={{
                                      endAdornment:<InputAdornment position="end">
                                      <IconButton
                                      aria-label="toggle password visibility"
                                      onClick={handleClickShowPassword}
                                      onMouseDown={handleMouseDownPassword}
                                      edge="end"
                                      >
                                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                  </InputAdornment>
                                  }}
                                  />
                              <Grid container xs={12} justifyContent="space-between">
                                  <Button type="signUp"
                                      color="secondary"
                                      >Sign up</Button>
                                  <Button variant="contained" 
                                      type="submit"
                                      color="primary"
                                      >Login</Button>
                              </Grid>
                            </Grid>
                        </Grid>
                    </form>
                </Grid>
            </Grid>
        </Paper>
    );
}
