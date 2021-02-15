import {Route, Switch} from 'react-router-dom'
import LogIn from './LogIn/LogIn'

const AdminPanel = () => {
    return (
        <Switch>
            <Route
                path='/admin/login'
                component={LogIn}
                exact
            />
        </Switch>
    )
}

export default AdminPanel