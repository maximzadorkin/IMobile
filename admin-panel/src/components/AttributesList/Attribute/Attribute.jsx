import {Box, TextField} from '@material-ui/core'

const Attribute = ({attr}) => (
    <Box mb={2}>
        <TextField
            value={attr}
            InputProps={{
                readOnly: true,
            }}
        />
    </Box>
)

export default Attribute