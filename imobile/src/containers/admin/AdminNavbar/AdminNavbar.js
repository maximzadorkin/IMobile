import AdminNavbar from '../../../components/AdminNavbar/AdminNavbar'
import {connect} from 'react-redux'
import Actions from '../../../store/actions'

const AdminNavbarContainer = props => {
    return (
        <AdminNavbar
            links={props.links}
            pathHandler={props.pathHandler}
        />
    )
}

const mapStateToProps = state => ({
    links: state.navigation.pages
})

const mapDispatchToProps = dispatch => ({
    pathHandler: (links, toLink) => dispatch(Actions.changePath(links, toLink))
})

export default connect(mapStateToProps, mapDispatchToProps)(AdminNavbarContainer)