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
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border:'5px',
        backgroundColor:'',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignUp() {
    const classes = useStyles();

    const schema = yup.object().shape({
        firstName: yup.string().required("This field is required"),
        lastName: yup.string().required("This field is required"),
        email: yup.string().required("This field is required").email("Invalid Email address"),
        password: yup.string().required("This field is required").min(8, "Password must be atleast 8 character"),
    })


    const formik = useFormik(
        {
            initialValues: {
                firstName:"",
                lastName:"",
                email: "",
                password: "",
            },
            validationSchema: schema,
            onSubmit: (data) => {
                console.log(data)
            }
        }
    )


    return (
        console.log(formik),
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
        </Typography>
                <form className={classes.form} onSubmit={formik.handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                values={formik.values.firstName}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                touched={formik.touched.firstName}
                                error={formik.errors.firstName}
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                values={formik.values.lastName}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                touched={formik.touched.lastName}
                                error={formik.errors.lastName}
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                values={formik.values.email}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                touched={formik.touched.email}
                                error={formik.errors.email}
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                values={formik.values.password}
                                onChange={formik.handleChange}
                                handleChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                touched={formik.touched.password}
                                error={formik.errors.password}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
          </Button>

                    <Link to='/Signin'><h4>Already Registered? Signin here</h4></Link>
                </form>
            </div>

        </Container>
    );
}