import {Box, Button, Divider, IconButton, TextField, Typography} from '@material-ui/core'
import {useState} from 'react'
import {PhotoCamera} from '@material-ui/icons'
import uniqid from 'uniqid'

// OPTIONS = {
//     LABEL: 'Изменить данные о производителе',
//     NAME: {LABEL: 'Именование: '},
//     ADD_PHOTO: 'Загрузить',
//     REPLACE_PHOTO: 'Заменить',
//     MAIN_BUTTON: 'Сохранить изменения',
//     MAIN_BUTTON_ICON: <AddIcon/>
// }


const Form = ({vendor, loading, options, formAction, fileName}) => {
    const INITIAL_STATE_OF_FILE = {name: fileName || ''}
    const ID_FOR_FILES_UPLOAD = `contained-button-file-updated-${uniqid()}`
    const deviceWidth = window.innerWidth
    const smallDeviceWidth = 768
    const isMobileDevice = deviceWidth <= smallDeviceWidth

    const [name, setName] = useState(vendor.name || '')

    const [file, setFile] = useState(INITIAL_STATE_OF_FILE)
    const haveFile = () => Boolean(file.size)
    const fileInputHandler = e => {
        const isFile = Boolean(e.target.files)
        const value = isFile ? e.target.files[0] : INITIAL_STATE_OF_FILE
        setFile(value)
    }

    const submitHandler = e => {
        e.preventDefault()
        const formData = new FormData()

        if (haveFile()) {
            setFile(INITIAL_STATE_OF_FILE)
            formData.set('file', file, file.name)
        }

        const vendorName = {name}
        formData.set('vendor', JSON.stringify(vendorName))
        setName('')
        formAction(formData)
    }

    return (
        <form onSubmit={submitHandler}>
            <Box mr={3} mb={2} display='flex'>
                <Typography variant={'body1'}>
                    {options.LABEL}
                </Typography>
            </Box>
            <Box display='flex'>
                <TextField
                    variant='outlined'
                    size='small'
                    fullWidth
                    required
                    label={options.NAME.LABEL}
                    value={name}
                    onChange={e => setName(e.target.value)}
                    disabled={loading}
                />
                {
                    !isMobileDevice &&
                    <Box mx={1}><Divider orientation='vertical'/></Box>
                }
                {
                    !isMobileDevice &&
                    <Box display='flex' alignItems='center'>
                        <label htmlFor={ID_FOR_FILES_UPLOAD}>
                            <Button
                                variant='outlined'
                                color='primary'
                                fullWidth
                                component='span'
                                startIcon={<PhotoCamera/>}
                                disabled={loading}
                            >
                                {!haveFile() ? options.ADD_PHOTO : options.REPLACE_PHOTO}
                            </Button>
                        </label>
                    </Box>
                }
                {
                    isMobileDevice && (
                        <Box display='flex' alignItems='center' justifyContent='flex-end'>
                            <label htmlFor={ID_FOR_FILES_UPLOAD}>
                                <IconButton
                                    disableRipple
                                    size='small'
                                    component='span'
                                    disabled={loading}
                                >
                                    <PhotoCamera/>
                                </IconButton>
                            </label>
                            <IconButton
                                type='submit'
                                size='small'
                                disableRipple
                                disabled={loading}
                            >
                                {options.MAIN_BUTTON_ICON}
                            </IconButton>
                        </Box>
                    )
                }
            </Box>
            <Box mb={1} overflow='hidden'>
                <Typography>
                    {file.name}
                </Typography>
            </Box>
            <Box display='flex' flexDirection='column'>
                {
                    !isMobileDevice &&
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                        size='large'
                        disabled={loading}
                    >
                        {options.MAIN_BUTTON}
                    </Button>
                }
            </Box>
            <input
                id={ID_FOR_FILES_UPLOAD}
                accept='image/*'
                type='file'
                hidden
                onChange={fileInputHandler}
                disabled={loading}
            />
        </form>
    )
}

export default Form