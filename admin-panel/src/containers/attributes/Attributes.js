import {
    Box, Button,
    CircularProgress, IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper, TextField,
    Typography
} from '@material-ui/core'
import {useQuery} from '@apollo/client'
import {getAttributes} from './queries'
import AttributesList from '../../components/AttributesList/AttributesList'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'

const Attributes = props => {
    const {loading, error, data} = useQuery(getAttributes)
    const attributes = //data?.Attributes.attributes.map(attr => attr.name)
                ['Объем физической памяти очень большой атрибут', 'Атрибут 2', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5',
                    'Атрибут 3', 'Атрибут 4', 'Атрибут 5', 'Атрибут 3', 'Атрибут 4', 'Атрибут 5'
                ]

    // if (loading)
    //    return <CircularProgress />

    return (
        <Box
            pt='50px'
            maxWidth='90%'
            display='flex'
            flexWrap={'wrap'}
        >
            {
                <AttributesList
                    attributes={attributes}
                />
            }
            <Box
                ml={5}
                width={320}
                height={320}
            >
                <Typography>
                    Выбранный атрибут: {'some'}
                </Typography>
                <List>
                    <ListItem>
                        <ListItemText primary={'item'}/>
                        <ListItemSecondaryAction>
                            <IconButton edge="end">
                                <EditIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>
                <Box
                    display='flex'
                    justifyContent='space-between'
                >
                    <TextField
                        label='Новое значение атрибута'
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
        </Box>
    )
}

export default Attributes