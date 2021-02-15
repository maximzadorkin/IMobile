import {Box, Button, Fade, Paper, TextField, Typography} from '@material-ui/core'
import {useState} from 'react'
import validator from 'validator'
import Loading from '../Loading/Loading'

const TEXTS = {
    TITLE: 'Авторизация',
    EMAIL_ERROR: 'Вы не ввели почту',
    PASSWORD_ERROR: 'Вы не ввели пароль',
    BUTTON_LOG_IN: 'Войти',
    FETCH_ERROR: {
        PASS: 'password',
        NETWORK: 'network',
        PASS_TEXT: 'Вы ввели неверные данные',
        NETWORK_TEXT: 'Проблемы с сетью. Попробуйте позже'
    }
}

const LogIn = ({logIn, error, loading}) => {
    const [email, setEmail] = useState({
        value: '',
        isValid: false
    })

    const [password, setPassword] = useState('')

    const emailHandler = event => {
        const email = {
            value: event.target.value,
            isValid: validator.isEmail(event.target.value)
        }
        setEmail(email)
    }

    const logInHandler = () => logIn(email.value, password)

    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            width='100%'
            height='100%'
        >
            <Paper variant='outlined'>
                <Box
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    width='300px'
                    height='400px'
                    position='relative'
                >
                    {
                        loading && <Loading/>
                    }
                    <form onSubmit={(e) => e.preventDefault()}>
                        <Box mb={3}>
                            <Typography
                                variant='h4'
                                component='h1'
                                align='center'
                                mb='5rem'
                            >
                                {TEXTS.TITLE}
                            </Typography>
                        </Box>
                        <Box mb={2}>
                            <TextField
                                required
                                label='Email'
                                variant='outlined'
                                value={email.value}
                                onChange={emailHandler}
                                error={!email.isValid}
                                helperText={!email.isValid && TEXTS.EMAIL_ERROR}
                                fullWidth={true}
                            />
                        </Box>
                        <Box mb={1}>
                            <TextField
                                required
                                label='Пароль'
                                variant='outlined'
                                type='password'
                                value={password.value}
                                onChange={event => setPassword(event.target.value)}
                                error={password.length === 0}
                                helperText={password.length === 0 && TEXTS.PASSWORD_ERROR}
                                fullWidth={true}
                            />
                        </Box>
                        <Box mb={1}>
                            {
                                error &&
                                <Fade in={true} timeout={300}>
                                    <Typography
                                        color='secondary'
                                        variant='body2'
                                    >
                                        {
                                            error === TEXTS.FETCH_ERROR.NETWORK
                                                ? TEXTS.FETCH_ERROR.NETWORK_TEXT
                                                : error === TEXTS.FETCH_ERROR.PASS
                                                ? TEXTS.FETCH_ERROR.PASS_TEXT
                                                : null
                                        }
                                    </Typography>
                                </Fade>
                            }
                        </Box>
                        <Box
                            display='flex'
                            justifyContent='center'
                        >
                            <Button
                                variant='contained'
                                color='primary'
                                onClick={() => email.isValid && logInHandler()}
                                type='submit'
                                disabled={loading || !email.isValid}
                            >
                                {TEXTS.BUTTON_LOG_IN}
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </Box>
    )
}

export default LogIn