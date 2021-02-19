import {Box, Container, List, Paper, Typography,} from '@material-ui/core'
import AddVendor from './AddVendor'
import VendorItem from './VendorItem'
import Loading from '../Loading/Loading'
import uniqid from 'uniqid'

const TEXTS = {
    NOT_HAVE_VENDORS: 'Вы не добавили ни одного производителя'
}

const Vendors = ({
                     vendors,
                     deleteVendor,
                     addVendor,
                     uploadingNewVendor,
                     fetchVendorsLoading,
                     errorAddingAVendor,
                     deleteErrorAddingAVendor,
                     loadingUpdateVendor,
                     updateVendor
                 }) => {

    return (
        <Box pt={5}>
            <Container>
                <Box position='relative'>
                    {uploadingNewVendor && <Loading/>}
                    <AddVendor
                        vendors={vendors}
                        addVendor={addVendor}
                        uploadingNewVendor={uploadingNewVendor}
                        errorAddingAVendor={errorAddingAVendor}
                        deleteErrorAddingAVendor={deleteErrorAddingAVendor}
                    />
                </Box>
                <Box mt={3}/>
                <Box position='relative' minHeight='50px'>
                    {fetchVendorsLoading && <Loading/>}
                    <Paper variant='outlined'>
                        <List>
                            {
                                vendors.length > 0
                                    ?
                                    vendors.map(v => (
                                        <VendorItem
                                            vendor={v}
                                            fetchVendorsLoading={fetchVendorsLoading}
                                            deleteVendor={deleteVendor}
                                            loadingUpdateVendors={loadingUpdateVendor}
                                            updateVendor={updateVendor}
                                            key={`vendor-item-${uniqid()}`}
                                        />
                                    ))
                                    :
                                    <Box p={1}>
                                        <Typography variant='h6' color='textSecondary'>
                                            {TEXTS.NOT_HAVE_VENDORS}
                                        </Typography>
                                    </Box>
                            }
                        </List>
                    </Paper>
                </Box>
            </Container>
        </Box>
    )
}

export default Vendors