import { z } from 'zod'
// this is schema for the images on the website
const BasicImageSchema = z.object({
    page: z.number(),
    per_page: z.number(), //might have to change this, because we don't need pagination immediately, maybe later for custom pagination
    prev_page: z.string().optional(),
    next_page: z.string().optional(),
    total_results: z.number(),
})

const PhotoSchema = z.object({
    id: z.number(),
    width: z.number(),
    height: z.number(),
    url: z.string(),
    src: z.object({
        large: z.string()
    }),
    alt: z.string(),
    blurredDataUrl: z.string().optional(),
})

export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
    photos: z.array(PhotoSchema)
})

export type Photo = z.infer<typeof PhotoSchema>

export type ImagesResults = z.infer<typeof ImagesSchemaWithPhotos>
    
  