import weaviate, { WeaviateClient } from "weaviate-client"
import { z } from 'zod'
import { TrackSearcher } from "~/types"

const responseSchema = z.object({
  query: z.string(),
})

export default defineEventHandler<{query: { query: string } }>(async (event) => {
  const config = useRuntimeConfig(event)

  const client: WeaviateClient = await weaviate.connectToWeaviateCloud(
    config.weaviateURL,
    {
      authCredentials: new weaviate.ApiKey(config.weaviateToken),
      headers: {
        'X-OpenAI-Api-Key': config.openai,
        'X-Cohere-Api-Key': config.cohere, 
      }
    }
  )

  const result = await getValidatedQuery(event, body => responseSchema.safeParse(body))
  if (!result.success)
    throw result.error.issues

    

  // User object is validated and typed!
  const searchTerm = result.data.query
  // add search

  const myCollection = client.collections.get<TrackSearcher>('CalvinHarris')

  const response = await myCollection.generate.nearText(searchTerm,{
    groupedTask: `what is your favourite song from this list?`
  }, {
    limit: 5
  })

  return response
  
})