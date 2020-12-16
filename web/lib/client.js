// client.js
import client from '@sanity/client'

export default client({
  projectId: 'n369b5o9', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true // `false` if you want to ensure fresh data
})
