import {IconButton} from '@material-ui/core'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import CloseIcon from '@material-ui/icons/Close'
import {useState} from 'react'

const OpenBtn = ({handler}) => {
    const [viewOpen, setOpenView] = useState(true)
    const btnHandler = () => {
        setOpenView(!viewOpen)
        handler()
    }

    return (
        <IconButton size="small" onClick={btnHandler}>
            {
                viewOpen
                    ? <CloseIcon color='secondary'/>
                    : <MenuOpenIcon color='primary'/>
            }
        </IconButton>
    )
}
export default OpenBtn