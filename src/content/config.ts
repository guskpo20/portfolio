import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title_es: z.string(),
        title_en: z.string(),
        description_es: z.string(),
        description_en: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

const portfolio = defineCollection({
    type: 'content',
    schema: z.object({
        title_es: z.string(),
        title_en: z.string(),
        description_es: z.string(),
        description_en: z.string(),
        category: z.enum(['Email', 'Web', 'Game', 'Software']),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string(), // Required for preview
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog, portfolio };
