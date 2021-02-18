import {Box, Button, Divider, Fade, Paper, TextField, Typography} from '@material-ui/core'
import {PhotoCamera} from '@material-ui/icons'
import AddIcon from '@material-ui/icons/Add'
import {TEXTS} from './TEXTS'
import {useState} from 'react'
import uniqid from 'uniqid'

const INITIAL_STATE_OF_FILE = {name: ''}
const ID_FOR_FILES_UPLOAD = `contained-button-file-${uniqid()}`

const AddVendor = ({
                       addVendor,
                       uploadingNewVendor,
                       vendors,
                       errorAddingAVendor,
                       deleteErrorAddingAVendor
                   }) => {
    const [nameValue, setNameValue] = useState('')
    const [fileValue, setFileValue] = useState(INITIAL_STATE_OF_FILE)

    const submitHandler = e => {
        e.preventDefault()

        const formData = new FormData()
        setNameValue('')
        const vendorName = {name: nameValue}
        formData.set('vendor', JSON.stringify(vendorName))

        const isFile = Boolean(fileValue.size)
        if (isFile) {
            setFileValue(INITIAL_STATE_OF_FILE)
            formData.set('file', fileValue, fileValue.name)
        }

        addVendor(formData, vendors)
    }
    const fileInputHandler = e => {
        const isFile = Boolean(e.target.files)
        const value = isFile ? e.target.files[0] : INITIAL_STATE_OF_FILE
        setFileValue(value)
    }

    return (
        <Paper variant='outlined'>
            <Box p={3}>
                <form onSubmit={submitHandler}>
                    <Box mb={1}>
                        <Typography variant='h6'>
                            {TEXTS.ADD_NEW_VENDOR}
                        </Typography>
                    </Box>
                    <Box display='flex' mb={1}>
                        <TextField
                            label={TEXTS.NEW_VENDOR}
                            fullWidth
                            variant='outlined'
                            value={nameValue}
                            onChange={e => setNameValue(e.target.value)}
                            required
                            disabled={uploadingNewVendor}
                            size='small'
                        />
                        <Box mx={1}><Divider orientation='vertical'/></Box>
                        <Box display='flex' alignItems='center'>
                            <input
                                accept='image/*'
                                id={ID_FOR_FILES_UPLOAD}
                                type='file'
                                hidden
                                onChange={fileInputHandler}
                                disabled={uploadingNewVendor}
                            />
                            <label htmlFor={ID_FOR_FILES_UPLOAD}>
                                <Button
                                    variant='outlined'
                                    color='primary'
                                    startIcon={<PhotoCamera/>}
                                    component='span'
                                    disabled={uploadingNewVendor}
                                >
                                    {!fileValue.name ? TEXTS.ADD_PHOTO : TEXTS.REPLACE_PHOTO}
                                </Button>
                            </label>
                        </Box>
                    </Box>
                    <Box mb={1} overflow='hidden'>
                        <Typography>
                            {fileValue.name}
                        </Typography>
                    </Box>
                    <Box display='flex' flexDirection='column'>
                        <Button
                            variant='contained'
                            color='primary'
                            startIcon={<AddIcon/>}
                            type='submit'
                            size='large'
                            disabled={uploadingNewVendor}
                        >
                            {TEXTS.MAIN_BUTTON}
                        </Button>
                    </Box>
                    <Fade in={errorAddingAVendor.error} unmountOnExit mountOnEnter>
                        <Box mt={3} textAlign='center'>
                            <Typography color='secondary' align='center'>
                                {TEXTS.ERROR_MESSAGE} : {errorAddingAVendor.name}
                            </Typography>
                            <Button
                                color='primary'
                                variant='contained'
                                onClick={deleteErrorAddingAVendor}
                            >
                                {TEXTS.OK}
                            </Button>
                        </Box>
                    </Fade>
                </form>
            </Box>
        </Paper>
    )
}


export default AddVendor
