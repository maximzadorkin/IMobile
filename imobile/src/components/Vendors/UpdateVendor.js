import {Box} from '@material-ui/core'
import Form from './Form'
import SaveIcon from '@material-ui/icons/Save'

const UpdateVendor = ({vendor, loadingUpdateVendor, updateVendor}) => {

    const submitHandler = vendorFormData => updateVendor(vendor.id, vendorFormData)

    return (
        <Box p={3}>
            <Form
                formAction={submitHandler}
                vendor={vendor}
                loading={loadingUpdateVendor}
                fileName={vendor.basicUrlImage}
                options={{
                    LABEL: 'Изменить данные',
                    NAME: {
                        LABEL: 'Именование: '
                    },
                    ADD_PHOTO: 'Загрузить',
                    REPLACE_PHOTO: 'Заменить',
                    MAIN_BUTTON: 'Сохранить изменения',
                    MAIN_BUTTON_ICON: <SaveIcon/>
                }}
            />
        </Box>
    )
}

export default UpdateVendor