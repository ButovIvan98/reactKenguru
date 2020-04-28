
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {NavLink, Redirect} from "react-router-dom";

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const SignIn = (props) => {
    const classNamees = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={classNamees.paper}>
                <Avatar className={classNamees.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <form className={classNamees.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={(e) => (props.updateEmail(e.target.value))}
                        value={props.authorization.email}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={props.authorization.password}
                        onChange={(e) => (props.updatePassword(e.target.value))}
                    />
                    <FormControlLabel
                        control={<Checkbox checked={props.authorization.rememberMe} value="remember" color="primary"/>}
                        label="Запомнить меня?"
                        onChange={()=>(props.updateRememberMe(props.authorization.rememberMe))}
                    />
                    {
                        props.authorization.isAuth
                            ? <Redirect from={'/login'} to={'/lk'}></Redirect>
                            : <Button   
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classNamees.submit}
                                onClick={()=>(props.auth(props.authorization.email, props.authorization.password))}
                            >
                                Авторизация
                            </Button>
                    }
                    <Grid container>
                        <Grid item xs>
                            <NavLink to={'/reloadPassword'} variant="body2">
                                Забыли пароль?
                            </NavLink>
                        </Grid>
                        <Grid item>
                            <NavLink to="/registration" variant="body2">
                                {"Нет аккаунта? Создайте."}
                            </NavLink>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}
export default SignIn;