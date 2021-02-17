import {Switch, Route} from 'react-router-dom'
import AdminPanel from './containers/admin'
import {Box} from '@material-ui/core'
import pagesPathnames from './utils/pagesPathnames'
import Start from './containers/main/Start/Start'

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
                path={pagesPathnames.ADMIN}
                component={AdminPanel}
            />
            <Route
                path={pagesPathnames.MAIN}
                component={Start}
            />
        </Switch>
    </Box>
)
export default App