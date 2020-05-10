import { GraphQLClient } from 'graphql-request'

export default ({ app }, inject) => {
  inject('apiRequest', ({ query, variables, preview }) => {
    const endpoint = preview
      ? 'https://graphql.datocms.com/preview'
      : 'https://graphql.datocms.com/'

    const client = new GraphQLClient(endpoint, {
      headers: {
        authorization: 'Bearer 645b10170e9f9df563d1f181360e74'
      }
    })

    console.log('API TOKEN')
    console.log(process.env.DATOCMS_API_TOKEN)

    return client.request(query, variables)
  })
}
