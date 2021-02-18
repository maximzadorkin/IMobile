import {Route, Switch} from 'react-router-dom'
import LogIn from './LogIn/LogIn'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import {connect} from 'react-redux'
import Actions from '../../store/actions'
import pagesPathnames from '../../utils/pagesPathnames'
import Vendors from './Vendors/Vendors'
import {Box, IconButton} from '@material-ui/core'
import styles from './index.module.sass'
import {useState} from 'react'
import CloseIcon from '@material-ui/icons/Close'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

const AdminPanel = (props) => {
    const [viewNavbar, setViewNavbar] = useState(false)
    const contentStyles = [
        styles.wrapper,
        styles.container,
        !viewNavbar && styles.close
    ].join(' ')
    const navbarStyles = [
        styles.wrapper,
        styles.navbar,
        !viewNavbar && styles.close
    ].join(' ')

    return (
        <>
            {
                props.haveToken && (
                    <>
                        <Box
                            mt={1}
                            ml={1}
                            position='absolute'
                            zIndex={10001}
                        >
                            <IconButton
                                size='small'
                                onClick={() => setViewNavbar(!viewNavbar)}
                            >
                                {
                                    viewNavbar
                                        ? <CloseIcon color='secondary'/>
                                        : <MenuOpenIcon color='primary'/>
                                }
                            </IconButton>
                        </Box>
                        <Box className={navbarStyles}>
                            <AdminNavbar/>
                        </Box>
                    </>
                )
            }
            <Box className={contentStyles}>
                <Switch>
                    {
                        props.haveToken ? null :
                            <Route
                                path='/admin'
                                component={LogIn}
                            />
                    }
                    <Route
                        path={pagesPathnames.VENDORS}
                        component={Vendors}
                        exact
                    />
                    <Route
                        path={pagesPathnames.ADMIN}
                        component={() => <div>admin page</div>}
                    />
                </Switch>
            </Box>
        </>
    )
}

const mapStateToProps = state => ({
    haveToken: Boolean(Actions.getJWT())
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel)