import {Box, Divider, List, ListItem} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import uniqid from 'uniqid'

const AdminNavbar = ({links, pathHandler}) => {
    const cancelNavlinkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontFamily: 'Helvetica'
    }

    return (
        <>
            <Box width='100%' mt={5}>
                <List>
                    {
                        links.map(link => (
                            <NavLink
                                to={link.path}
                                style={cancelNavlinkStyle}
                                key={`nav-${uniqid()}`}
                                onClick={() => pathHandler(links, link)}
                            >
                                <ListItem button selected={link.selected}>
                                    {link.text}
                                </ListItem>
                            </NavLink>
                        ))
                    }
                </List>
            </Box>
            <Divider height='100%' width='100%' orientation='vertical'/>
        </>
    )
}

export default AdminNavbar