import {Box, Button, List, TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import Attribute from './Attribute/Attribute'
import uniqid from 'uniqid'

const AttributesList = ({attributes}) => (
    <Box maxWidth={1} width='350px'>
        <Box
            height={400}
            overflow='auto'
            mb={2}
        >
            <List>
                {
                    attributes.map(attr =>
                        <Attribute
                            attr={attr}
                            key={uniqid()}
                        />
                    )
                }
            </List>
        </Box>
        <Box
            display='flex'
            justifyContent='space-between'
        >
            <TextField
                label='Новый атрибут'
                variant='outlined'
                fullWidth={true}
            />
            <Button
                variant='outlined'
                color='primary'
            >
                <AddIcon color="primary" />
            </Button>
        </Box>
    </Box>
)

export default AttributesList