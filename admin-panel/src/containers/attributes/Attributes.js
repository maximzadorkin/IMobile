import {Box, CircularProgress} from '@material-ui/core'
import {useQuery} from '@apollo/client'
import {getAttributes} from './queries'
import AttributesList from '../../components/AttributesList/AttributesList'

const Attributes = props => {
    const {loading, error, data} = useQuery(getAttributes)
    const attributes = data?.Attributes.attributes.map(attr => attr.name)

    console.log(loading)
    console.log(attributes)
    if (loading)
        return <CircularProgress />
    console.log(loading)
    return (
        <Box>
            {
                <AttributesList
                    attributes={attributes}
                />
            }
        </Box>
    )
}

export default Attributes