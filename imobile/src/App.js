import {Switch, Route} from 'react-router-dom'
import AdminPanel from './containers/admin'
import {Box} from '@material-ui/core'

const App = () => (
    <Box
        position='absolute'
        top={0}
        left={0}
        bottom={0}
        right={0}
        zIndex={1}
    >
        <Switch>
            <Route
                path='/admin'
                component={AdminPanel}
            />
            <Route
                path='/'
                component={() => <div>Main page</div>}
            />
        </Switch>
    </Box>
)
export default App