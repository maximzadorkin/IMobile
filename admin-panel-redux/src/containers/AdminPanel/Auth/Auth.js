import {connect} from 'react-redux'
import {Box, Button, FormGroup, Paper, TextField, Typography} from '@material-ui/core'
import {useState} from 'react'
import validator from 'validator'

const TITLE = 'Авторизация'
const EMAIL_ERROR = 'Вы не ввели почту'
const PASSWORD_ERROR = 'Вы не ввели пароль'
const BUTTON_SIGNIN = 'Войти'

const Auth = props => {

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

    return (
        <Box
            display="flex"
            justifyContent='center'
            alignItems='center'
            width='100%'
            height='100%'
            position='absolute'
        >
            <Paper variant='outlined' square>
                <FormGroup>
                    <Box mt={5} mb={3} px={10}>
                        <Typography
                            variant="h4"
                            component="h1"
                            align='center'
                            mb="5rem"
                        >
                            {TITLE}
                        </Typography>
                    </Box>
                    <Box mb={2} px={10}>
                        <TextField
                            required
                            label="Email"
                            variant="outlined"
                            value={email.value}
                            onChange={emailHandler}
                            error={!email.isValid}
                            helperText={!email.isValid && EMAIL_ERROR}
                        />
                    </Box>
                    <Box mb={3} px={10}>
                        <TextField
                            required
                            label="Пароль"
                            variant="outlined"
                            type='password'
                            value={password.value}
                            onChange={event => setPassword(event.target.value)}
                            error={password.length === 0}
                            helperText={password.length === 0 && PASSWORD_ERROR}
                        />
                    </Box>
                    <Box mb={5} mx='auto'>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            {BUTTON_SIGNIN}
                        </Button>
                    </Box>
                </FormGroup>
            </Paper>
        </Box>
    )
}

export default connect()(Auth)