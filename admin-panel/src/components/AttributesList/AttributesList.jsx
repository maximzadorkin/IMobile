import {Box, Button, TextField} from '@material-ui/core'
import Attribute from './Attribute/Attribute'
import uniqid from 'uniqid'

const AttributesList = ({attributes}) => (
    <Box
        display='flex'
        flexDirection='column'
        justifyContent='center'
        // width='320px'
    >
        {
            attributes.map(attr =>
                <Attribute
                    attr={attr}
                    key={uniqid()}
                />
            )
        }
        <form>
            <TextField
                label="Новый атрибут"
                variant="outlined"
            />
            <Button>
                +
            </Button>
        </form>
    </Box>
)

export default AttributesList