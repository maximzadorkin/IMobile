import {Button, Divider, IconButton, List, ListItem, ListItemText} from '@material-ui/core'
import uniqid from 'uniqid'
import styles from './Navbar.module.sass'
import {CSSTransition} from 'react-transition-group'
import FormatAlignJustifyOutlinedIcon from '@material-ui/icons/FormatAlignJustifyOutlined'
import {NavLink} from 'react-router-dom'

const Navbar = ({tabs, showNavbar, setTab, setNavbarShowState}) => {
    const navigationLinks = (
        <div className={styles.nav}>
            <nav className={styles.links}>
                <List>
                    {
                        tabs.map(tab =>
                            <NavLink
                                to={tab.url}
                                style={{
                                    textDecoration: 'none',
                                    color: '#333',
                                    fontFamily: 'sans-serif'
                                }}
                                key={`navbar-${uniqid()}`}
                            >
                                <ListItem
                                    button
                                    onClick={() => setTab(tab)}
                                    selected={tab.selected}
                                >
                                    <ListItemText primary={tab.text}/>
                                </ListItem>
                            </NavLink>
                        )
                    }
                </List>
                <Button
                    onClick={() => setNavbarShowState(false)}
                    color='secondary'
                >
                    X
                </Button>
            </nav>
            <Divider orientation="vertical" flexItem/>
        </div>
    )


    return (
        <>
            <CSSTransition
                in={!showNavbar}
                timeout={500}
                classNames={{
                    enter: styles.openBtnEnter,
                    enterActive: styles.openBtnEnterActive,
                    exit: styles.openBtnExit,
                    exitActive: styles.openBtnExitActive,
                }}
                unmountOnExit
            >
                <div className={styles.openBtn}>
                    <IconButton
                        color="primary"
                        onClick={() => setNavbarShowState(true)}
                        className={styles.links}
                    >
                        <FormatAlignJustifyOutlinedIcon />
                    </IconButton>
                </div>
            </CSSTransition>
            <CSSTransition
                in={showNavbar}
                timeout={500}
                classNames={{
                    enter: styles.linksEnter,
                    enterActive: styles.linksEnterActive,
                    exit: styles.linksExit,
                    exitActive: styles.linksExitActive,
                }}
                unmountOnExit
            >
                {navigationLinks}
            </CSSTransition>
        </>
    )
}

export default Navbar