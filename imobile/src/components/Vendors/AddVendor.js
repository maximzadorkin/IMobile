import {Box, Button, Fade, Paper, Typography} from '@material-ui/core'
import Form from './Form'
import SaveIcon from '@material-ui/icons/Save'

const TEXTS = {
    ERROR_MESSAGE: 'Производитель с таким именем уже существует',
    OK: 'OK'
}

const AddVendor = ({addVendor, uploadingNewVendor, vendors, errorAddingAVendor, deleteErrorAddingAVendor}) => {
    const submitHandler = formData => addVendor(formData, vendors)

    return (
        <Paper variant='outlined'>
            <Box p={3}>
                <Form
                    formAction={submitHandler}
                    vendor={false}
                    loading={uploadingNewVendor}
                    options={{
                        LABEL: 'Добавить производителя',
                        NAME: {
                            LABEL: 'Именование: '
                        },
                        ADD_PHOTO: 'Загрузить',
                        REPLACE_PHOTO: 'Заменить',
                        MAIN_BUTTON: 'Добавить',
                        MAIN_BUTTON_ICON: <SaveIcon/>
                    }}
                />
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
            </Box>
        </Paper>
    )
}


export default AddVendor
