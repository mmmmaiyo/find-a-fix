import { gql,request } from "graphql-request"

//API key is sensitive information. It is held safe location and referenced in the middle of the string
const MASTER_URL = 'https://api-ca-central-1.hygraph.com/v2/'+process.env.NEXT_PUBLIC_MASTER_KEY+'/master'

//Creating GraphQL query by using Hygraph API call
const getCategory = async()=>{
    const query = gql`
    query getCategory {
    categories {
            bgColour {
                hex
            }
            id
            name
            icon {
                url
            }
        }
    }
    `
    const result = await request (MASTER_URL,query)
    return result
}

export default{
    getCategory
}