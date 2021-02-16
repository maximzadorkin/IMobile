import {Route, Switch} from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import {connect} from 'react-redux'
import Actions from '../../store/actions'

const AdminPanel = (props) => {
    return (
        <>
            {props.haveToken && <AdminNavbar/>}
            <Switch>
                {
                    props.haveToken ? null :
                        <Route
                            path='/admin'
                            component={LogIn}
                        />
                }
            </Switch>
        </>
    )
}

const mapStateToProps = state => ({
    haveToken: Actions.getJWT()
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)