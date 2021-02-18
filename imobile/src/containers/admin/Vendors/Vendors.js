import {connect} from 'react-redux'
import Vendors from '../../../components/Vendors/Vendors'
import Actions from '../../../store/actions'
import {Component} from 'react'

class VendorsContainer extends Component {
    componentDidMount() {
        this.props.fetchVendors()
    }

    render() {
        return (
            <Vendors
                vendors={this.props.vendors}
                deleteVendor={this.props.deleteVendor}
                addVendor={this.props.addVendor}
                uploadingNewVendor={this.props.uploadingNewVendor}
                fetchVendorsLoading={this.props.fetchVendorsLoading}
                errorAddingAVendor={this.props.errorAddingAVendor}
                deleteErrorAddingAVendor={this.props.deleteErrorAddingAVendor}
            />
        )
    }
}

const mapStateToProps = state => ({
    vendors: state.vendors.vendors,
    uploadingNewVendor: state.vendors.uploadingNewVendor,
    fetchVendorsLoading: state.vendors.fetchVendorsLoading,
    errorAddingAVendor: state.vendors.errorAddingAVendor
})

const mapDispatchToProps = dispatch => ({
    fetchVendors: () => dispatch(Actions.fetchVendors()),
    deleteVendor: vendor => dispatch(Actions.deleteVendor(vendor)),
    addVendor: (vendor, vendors) => dispatch(Actions.addVendor(vendor, vendors)),
    deleteErrorAddingAVendor: () => dispatch(Actions.errorAddingAVendor(false, ''))
})

export default connect(mapStateToProps, mapDispatchToProps)(VendorsContainer)