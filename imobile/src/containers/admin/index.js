import {Route, Switch} from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import {connect} from 'react-redux'
import Actions from '../../store/actions'
import pagesPathnames from '../../utils/pagesPathnames'
import Vendors from './Vendors/Vendors'

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
                <Route
                    path={pagesPathnames.VENDORS}
                    component={Vendors}
                    exact
                />
                <Route
                    path={pagesPathnames.ADMIN}
                    component={() => <div></div>}
                />
            </Switch>
        </>
    )
}

const mapStateToProps = state => ({
    haveToken: Actions.getJWT()
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)