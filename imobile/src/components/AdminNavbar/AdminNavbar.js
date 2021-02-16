import {Box, Divider, List, ListItem, Slide} from '@material-ui/core'
import {NavLink} from 'react-router-dom'
import {useState} from 'react'
import OpenBtn from './OpenBtn'
import uniqid from 'uniqid'

const AdminNavbar = ({links, pathHandler}) => {
    const cancelNavlinkStyle = {
        textDecoration: 'none',
        color: '#333',
        fontFamily: 'Helvetica'
    }

    const [viewFull, setViewFullState] = useState(true)

    return (
        <Box
            position='absolute'
            width='100%'
            maxWidth='320px'
            height='100%'
            display='flex'
            justifyContent='space-between'
        >
            <Box width='100%'>
                <Box width='100%' textAlign='left' mt={1} ml={1}>
                    <OpenBtn handler={() => setViewFullState(!viewFull)}/>
                </Box>
                <Slide
                    direction='right'
                    in={viewFull}
                    timeout={300}
                >
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
                </Slide>
            </Box>
            <Slide
                direction='right'
                in={viewFull}
                timeout={300}
                mountOnEnter unmountOnExit
            >
                <Divider height='100%' width='100%' orientation='vertical'/>
            </Slide>
        </Box>
    )
}

export default AdminNavbar