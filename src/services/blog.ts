import { BlogPost } from "@/types/blog";

const API_URL = "http://portfolio-backend.ddev.site/api/blog";

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await fetch(`${API_URL}s`, {
      headers: {
        'Accept': 'application/json',
      },
      next: {
        revalidate: 60, // 1分間キャッシュ
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
}

export async function getBlogPost(id: number): Promise<BlogPost> {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      headers: {
        'Accept': 'application/json',
      },
      next: {
        revalidate: 60, // 1分間キャッシュ
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post`);
    }

    const data = await response.json();
    return Array.isArray(data) ? data[0] : data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
} 