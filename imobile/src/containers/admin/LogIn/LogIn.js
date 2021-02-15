import LogInRender from '../../../components/LogIn/LogIn'
import {connect} from 'react-redux'
import Actions from '../../../store/actions'

const LogIn = (props) => {
    return (
        <LogInRender
            logIn={props.logIn}
            error={props.error}
            loading={props.loading}
        />
    )
}

const mapStateToProps = state => ({
    loading: Boolean(state.admin.loading),
    error: state.admin.errorLogIn
})

const mapDispatchToProps = dispatch => ({
    logIn: (email, password) => dispatch(Actions.LogIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)