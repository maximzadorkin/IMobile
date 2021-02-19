import {connect} from 'react-redux'
import Vendors from '../../../components/Vendors/Vendors'
import Actions from '../../../store/actions'
import {Component} from 'react'

class VendorsContainer extends Component {
    constructor(props) {
        super(props)
        this.props.fetchVendors()
    }

    render() {
        return (
            <Vendors
                vendors={this.props.vendors}
                fetchVendorsLoading={this.props.fetchVendorsLoading}

                addVendor={this.props.addVendor}
                uploadingNewVendor={this.props.uploadingNewVendor}
                errorAddingAVendor={this.props.errorAddingAVendor}

                deleteVendor={this.props.deleteVendor}
                deleteErrorAddingAVendor={this.props.deleteErrorAddingAVendor}

                loadingUpdateVendor={this.props.loadingUpdateVendor}
                updateVendor={this.props.updateVendor}
            />
        )
    }
}

const mapStateToProps = state => ({
    vendors: state.vendors.vendors,
    uploadingNewVendor: state.vendors.uploadingNewVendor,
    fetchVendorsLoading: state.vendors.fetchVendorsLoading,
    errorAddingAVendor: state.vendors.errorAddingAVendor,
    loadingUpdateVendor: state.vendors.loadingUpdateVendor
})

const mapDispatchToProps = dispatch => ({
    fetchVendors: () => dispatch(Actions.fetchVendors()),
    deleteVendor: vendor => dispatch(Actions.deleteVendor(vendor)),
    addVendor: (vendor, vendors) => dispatch(Actions.addVendor(vendor, vendors)),
    deleteErrorAddingAVendor: () => dispatch(Actions.errorAddingAVendor(false, '')),
    updateVendor: (vendorID, vendorFormData) => dispatch(Actions.updateVendor(vendorID, vendorFormData))
})

export default connect(mapStateToProps, mapDispatchToProps)(VendorsContainer)