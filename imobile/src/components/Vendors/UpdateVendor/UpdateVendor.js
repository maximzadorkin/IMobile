import {Box, Button, Divider, TextField, Typography} from '@material-ui/core'
import {useState} from 'react'
import {PhotoCamera} from '@material-ui/icons'
import uniqid from 'uniqid'
import AddIcon from '@material-ui/icons/Add'

const ID_FOR_FILES_UPLOAD = `contained-button-file-updated-${uniqid()}`
const INITIAL_STATE_OF_FILE = {name: ''}

const TEXTS = {
    NAME: {
        LABEL: 'Именование'
    },
    ADD_PHOTO: 'Загрузить',
    REPLACE_PHOTO: 'Заменить',
}

const UpdateVendor = ({vendor}) => {
    const [name, setName] = useState(vendor.name)
    const [file, setFile] = useState(INITIAL_STATE_OF_FILE)
    const fileInputHandler = e => {
        const isFile = Boolean(e.target.files)
        const value = isFile ? e.target.files[0] : INITIAL_STATE_OF_FILE
        setFile(value)
    }

    return (
        <Box p={5}>
            <Box display='flex' alignItems='center'>
                <Box mr={3}>
                    <Typography>Именование: </Typography>
                </Box>
                <TextField
                    label={TEXTS.NAME.LABEL}
                    variant='outlined'
                    size='small'
                    // disabled={uploadingNewVendor}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    fullWidth
                    required
                />
                <Box mx={1}><Divider orientation='vertical'/></Box>
                <input
                    accept='image/*'
                    id={ID_FOR_FILES_UPLOAD}
                    type='file'
                    hidden
                    onChange={fileInputHandler}
                    // disabled={uploadingNewVendor}
                />
                <label htmlFor={ID_FOR_FILES_UPLOAD}>
                    <Button
                        variant='outlined'
                        color='primary'
                        startIcon={<PhotoCamera/>}
                        component='span'
                        fullWidth
                        // disabled={uploadingNewVendor}
                    >
                        {!file.name ? TEXTS.ADD_PHOTO : TEXTS.REPLACE_PHOTO}
                    </Button>
                </label>
            </Box>
            <Box mb={1} overflow='hidden'>
                <Typography>
                    {file.name}
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
                <Button
                    variant='contained'
                    color='primary'
                    // startIcon={<AddIcon/>}
                    type='submit'
                    size='large'
                    // disabled={uploadingNewVendor}
                >
                    Сохранить изменение
                </Button>
            </Box>
        </Box>
    )
}

export default UpdateVendor