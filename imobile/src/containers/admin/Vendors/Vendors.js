import {
    Box, Button,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper, TextField, Typography
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import {PhotoCamera} from '@material-ui/icons'

const TEXTS = {
    ADD_NEW_VENDOR: 'Добавить нового производителя',
    NEW_VENDOR: 'Именование'
}

const Vendors = (props) => {
    return (
        <Box pt={5} ml='320px'>
            <Container maxWidth="md">
                <Box mb={1}>
                    <form submit={e => e.preventDefault()}>
                        <Typography>{TEXTS.ADD_NEW_VENDOR}</Typography>
                        <TextField label={TEXTS.NEW_VENDOR} variant='outlined'/>
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                        <IconButton type='submit' color='primary' onClick={() => {}}>
                            <AddIcon />
                        </IconButton>
                    </form>
                </Box>
                <Paper variant="outlined">
                    <List>
                        <ListItem  divider>
                            <ListItemText primary="Single-line item" />
                            <ListItemSecondaryAction>
                                <IconButton size="small">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton size="small">
                                    <DeleteIcon color='secondary'/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem button divider>
                            <ListItemText primary="Single-line item" />
                            <ListItemSecondaryAction>
                                <IconButton size="small">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton size="small">
                                    <DeleteIcon color='secondary'/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem button divider>
                            <ListItemText primary="Single-line item" />
                            <ListItemSecondaryAction>
                                <IconButton size="small">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton size="small">
                                    <DeleteIcon color='secondary'/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem><ListItem button divider>
                        <ListItemText primary="Single-line item" />
                        <ListItemSecondaryAction>
                            <IconButton size="small">
                                <EditIcon/>
                            </IconButton>
                            <IconButton size="small">
                                <DeleteIcon color='secondary'/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                        <ListItem button divider>
                            <ListItemText primary="Single-line item" />
                            <ListItemSecondaryAction>
                                <IconButton size="small">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton size="small">
                                    <DeleteIcon color='secondary'/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem button divider>
                            <ListItemText primary="Single-line item" />
                            <ListItemSecondaryAction>
                                <IconButton size="small">
                                    <EditIcon/>
                                </IconButton>
                                <IconButton size="small">
                                    <DeleteIcon color='secondary'/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>

                    </List>
                </Paper>
            </Container>
        </Box>
    )
}

export default Vendors