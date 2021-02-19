import {Box, CircularProgress, Fade} from '@material-ui/core'

const Loading = ({fullSize}) => {
    return (
        <Box
            position='absolute'
            top={fullSize && 0}
            bottom={fullSize && 0}
            left={fullSize && 0}
            right={fullSize && 0}
            height={!fullSize && '100%'}
            width={!fullSize && '100%'}
            zIndex={120}
        >
            <Fade in={true} timeout={1000}>
                <Box
                    height='100%'
                    width='100%'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                    bgcolor='rgba(11, 11, 11, 0.3)'
                >
                    <CircularProgress color='primary'/>
                </Box>
            </Fade>
        </Box>
    )
}

export default Loading