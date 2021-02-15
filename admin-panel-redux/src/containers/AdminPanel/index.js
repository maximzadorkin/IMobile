import {Route, Switch} from 'react-router-dom'
import {BASIC_ADMIN_URL, urls} from '../../utils/api'
import Auth from './Auth/Auth'
import Attributes from './Attributes/Attributes'

const adminPanel = () => {
    return (
        <Switch>
            <Route to={urls.CRM} exact component={Auth}/>
            <Route path={urls.ATTRIBUTES} exact component={Attributes}/>
            {/*<Route path={urls.ADD_PRODUCT} exact component={Auth}/>*/}
            {/*<Route path={urls.ABOUT} exact component={Auth}/>*/}
            {/*<Route path={urls.PERSONAL_INFORMATION} exact component={Auth}/>*/}
            {/*<Route path={urls.AUTH} exact component={Auth}/>*/}
            <Route path={BASIC_ADMIN_URL} exact/>
        </Switch>
    )
}