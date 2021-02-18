import {Box, Container, Fade, List, Paper, Typography,} from '@material-ui/core'
import AddVendor from './AddVendor/AddVendor'
import VendorItem from './VendorItem/VendorItem'
import Loading from '../Loading/Loading'
import {TEXTS} from './TEXTS'


const Vendors = ({
                     vendors,
                     deleteVendor,
                     addVendor,
                     uploadingNewVendor,
                     fetchVendorsLoading,
                     errorAddingAVendor,
                     deleteErrorAddingAVendor
                 }) => {
    return (
        <Fade in={true}>
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
                                                deleteVendor={deleteVendor}
                                                fetchVendorsLoading={fetchVendorsLoading}
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
        </Fade>
    )
}

export default Vendors