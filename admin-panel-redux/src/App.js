import Navbar from './components/AdminNavbar/Navbar'
import {setActiveNavTab, setNavbarShowState} from './store/actions/navigation'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import Auth from './containers/AdminPanel/Auth/Auth'
import styles from './App.module.sass'
import {BASIC_URL, protocol, urls} from './utils/api'
import Attributes from './containers/AdminPanel/Attributes/Attributes'
import {domain} from './utils/api'

function App(props) {
    const isAuthPage = window.location.href === `${protocol}${domain}${urls.AUTH}`

    return (
        <div className={styles.appWrapper}>
            <div className={`${styles.navbar} ${styles.wrapper}`}>
                {
                    !isAuthPage
                        ? (
                            <Navbar
                                tabs={props.tabs}
                                setTab={props.setTab}
                                showNavbar={props.showNavbar}
                                setNavbarShowState={props.setNavbarShowState}
                            />
                        )
                        : null
                }
            </div>
            <div className={`${styles.pagePanel} ${!props.showNavbar && styles.fullScreen}`}>

            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    tabs: state.navigation.tabs,
    showNavbar: state.navigation.navbar.show
})

const mapDispatchToProps = dispatch => ({
    setTab: tab => dispatch(setActiveNavTab(tab)),
    setNavbarShowState: state => dispatch(setNavbarShowState(state))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)