import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

/** @typedef {{
 *   slug: string,
 *   title: string,
 *   description: string,
 *   date: string,
 *   emirate?: string,
 *   tags: string[],
 *   content: string,
 * }} BlogPost */

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/** @returns {BlogPost[]} */
export function getAllPosts() {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/** @param {string} slug @returns {BlogPost | null} */
export function getPostBySlug(slug) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    emirate: data.emirate,
    tags: data.tags ?? [],
    content,
  };
}
