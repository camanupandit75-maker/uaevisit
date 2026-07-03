import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import JsonLd from '@/components/seo/JsonLd';
import BlogPostView from '@/components/uae/BlogPostView';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
} from '@/lib/schema';
import { getSiteUrl } from '@/lib/site';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} — Discover the Emirates`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

/** @param {{ params: Promise<{ slug: string }> }} props */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { content } = await compileMDX({
    source: post.content,
    options: { parseFrontmatter: false },
  });

  const base = getSiteUrl();
  const articleSchema = buildArticleSchema(post);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: base },
    { name: 'Blog', url: `${base}/blog` },
    { name: post.title, url: `${base}/blog/${post.slug}` },
  ]);

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd data={breadcrumbSchema} />
      <BlogPostView post={post}>{content}</BlogPostView>
    </>
  );
}
