import {
    Avatar, Box,
    Collapse,
    IconButton,
    ListItem,
    ListItemAvatar,
    ListItemSecondaryAction,
    ListItemText
} from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import uniqid from 'uniqid'
import UpdateVendor from './UpdateVendor'
import {useState} from 'react'
import Loading from '../Loading/Loading'

const VendorItem = ({vendor, deleteVendor, fetchVendorsLoading, loadingUpdateVendor, updateVendor}) => {
    const [viewUpdater, setViewUpdater] = useState(false)
    return (
        <>
            <ListItem divider key={uniqid()}>
                <ListItemAvatar>
                    <Avatar
                        alt={vendor.name}
                        src={vendor.image}
                    />
                </ListItemAvatar>
                <ListItemText primary={vendor.name}/>
                <ListItemSecondaryAction>
                    <IconButton
                        size='small'
                        disabled={fetchVendorsLoading}
                        onClick={() => setViewUpdater(!viewUpdater)}
                    >
                        <EditIcon/>
                    </IconButton>
                    <IconButton
                        size='small'
                        onClick={() => deleteVendor(vendor)}
                        disabled={fetchVendorsLoading}
                    >
                        <DeleteIcon color='secondary'/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
            <Collapse in={viewUpdater}>
                <Box position='relative'>
                    {loadingUpdateVendor && <Loading />}
                    <UpdateVendor
                        vendor={vendor}
                        loadingUpdateVendor={loadingUpdateVendor}
                        updateVendor={updateVendor}
                    />
                </Box>
            </Collapse>
        </>
    )
}

export default VendorItem