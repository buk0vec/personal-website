import { z, defineCollection } from 'astro:content'

const portfolioSchema = z.object({
  title: z.string(),
  status: z.enum(['Complete', 'WIP']),
  description: z.string(),
  image: z.string().optional(),
  lastUpdated: z.date(),
  github: z.string().optional(),
  deployment: z.string().optional()
})

const portfolioCollection = defineCollection({
  schema: portfolioSchema
})

export const collections = {
  'portfolio': portfolioCollection
}
