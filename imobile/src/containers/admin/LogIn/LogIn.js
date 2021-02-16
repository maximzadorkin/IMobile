import LogInRender from '../../../components/LogIn/LogIn'
import {connect} from 'react-redux'
import Actions from '../../../store/actions'
import Errors from '../../../utils/Errors'
import {history} from '../../../index'
import pagesPathnames from '../../../utils/pagesPathnames'
import {Component} from 'react'

class LogIn extends Component {

    componentDidMount() {
        history.push(pagesPathnames.ADMIN)
    }

    render() {
        return (
            <LogInRender
                logIn={this.props.logIn}
                error={this.props.error}
                logInError={Errors.INVALID_AUTH_ERROR}
                loading={this.props.loading}
            />
        )
    }
}

const mapStateToProps = state => ({
    loading: Boolean(state.admin.loading),
    error: state.admin.errorLogIn
})

const mapDispatchToProps = dispatch => ({
    logIn: (email, password) => dispatch(Actions.LogIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)