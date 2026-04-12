import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    draft: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    relatedProjects: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
  }),
});

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    year: z.string(),
    type: z.string(),
    status: z.string().optional(),
    featured: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    relatedPosts: z.array(z.string()).default([]),
    seoTitle: z.string().optional(),
  }),
});

export const collections = { blog, projects };
