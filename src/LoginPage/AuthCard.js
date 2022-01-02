import React from 'react'
import {Grid,Paper, 
        IconButton,InputAdornment, Typography,
        TextField, Button} from '@material-ui/core/'
import { makeStyles } from '@material-ui/core/styles'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {useNavigate} from 'react-router';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding:"1vh 15vh 5vh",
      margin:"20vh 60vh 10vh",
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
    const classes = useStyles();
    const [attempted, setAttempted] = React.useState(false);
    const [values, setValues] = React.useState({
        username: '',
        password: '',
        showPassword: false
        });
    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
        if (values.username === 'admin' && values.password === 'password') {
            navigate('/home');
        } else {
            console.log('Invalid');
            setAttempted(true);
        }
    };
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
            {attempted ? 
            <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity='error' onClose={() => {setAttempted(false)}}>Invalid Name/Password combination</Alert>
            </Stack>
            : null }
            <Grid container className={classes.grid} spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h4">{Title}</Typography>
                    <Typography variant="subtitle1">Login</Typography>
                </Grid>
                <Grid item>
                    <form onSubmit={onSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs = {12}>
                                <TextField className={classes.textField} id="outlined-basic" label="email or username"
                                 variant="outlined" onChange={handleChange('username')} value={values.username}/>
                            </Grid>
                            <Grid item xs={12}>
                              <TextField className={classes.textField} id="outlined-password-input" label="Password" 
                              type={values.showPassword ? 'text' : 'password'} autoComplete="current-password" variant="outlined" 
                              value={values.password} onChange={handleChange('password')} 
                              InputProps={{
                                      endAdornment:<InputAdornment position="end">
                                      <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} 
                                        onMouseDown={handleMouseDownPassword} edge="end">
                                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                      </IconButton>
                                  </InputAdornment>
                                  }}
                                  />
                              <Grid container justifyContent="space-between">
                                  <Button type="button"
                                      color="secondary"
                                      onClick = {() => {
                                        navigate('/signup');
                                      }}
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
