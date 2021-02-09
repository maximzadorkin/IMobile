import {gql} from '@apollo/client'

export const getAttributes = gql`
    query getAttributes {
        Attributes {
            attributes {
                name
            }
            totalAttributes
        }
    }
`