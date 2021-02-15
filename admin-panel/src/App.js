import Attributes from './containers/attributes/Attributes'
import {Box} from '@material-ui/core'

function App() {
  return (
    <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
    >
      <Attributes />
    </Box>
  )
}

export default App