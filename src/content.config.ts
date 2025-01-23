import { z, defineCollection } from 'astro:content'
import type { z as z2 }from 'astro/zod'
import { glob } from 'astro/loaders';


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
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/portfolio" }),
  schema: portfolioSchema
})

export const collections = {
  'portfolio': portfolioCollection
}

export type portfolioData = z2.infer<typeof portfolioSchema>