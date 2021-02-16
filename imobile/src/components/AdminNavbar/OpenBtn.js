import {IconButton, Slide} from '@material-ui/core'
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
        <>
            <Slide
                direction='right'
                in={viewOpen}
                timeout={300}
            >
                <IconButton size="small" onClick={btnHandler}>
                    <CloseIcon color='secondary'/>
                </IconButton>
            </Slide>
            <Slide
                direction='right'
                in={!viewOpen}
                timeout={300}
            >
                <IconButton size="small" onClick={btnHandler}>
                    <MenuOpenIcon color='primary'/>
                </IconButton>
            </Slide>
        </>
    )
}
export default OpenBtn