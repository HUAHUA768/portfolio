import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 以后加博客时，在这里加一个 posts 集合 + src/content/posts/ 目录即可，不用改部署。
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    stack: z.array(z.string()),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    status: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
