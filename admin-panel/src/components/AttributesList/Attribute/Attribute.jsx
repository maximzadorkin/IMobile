import {IconButton, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import {Delete} from '@material-ui/icons'

const Attribute = ({attr}) => (
    <ListItem mb={2} divider={true}>
        <ListItemText primary={attr}/>
        <IconButton>
            <EditIcon />
        </IconButton>
        <ListItemSecondaryAction>
            <IconButton edge="end">
                <Delete color='secondary' />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem>
)

export default Attribute