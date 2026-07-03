import BlogHub from '@/components/uae/BlogHub';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog — Discover the Emirates',
  description:
    'Travel guides and planning notes for the UAE — seasons, road trips, and choosing between Dubai and Abu Dhabi.',
};

export default function BlogPage() {
  const posts = getAllPosts();
  return <BlogHub posts={posts} />;
}
