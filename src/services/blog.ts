import { BlogPost } from "@/types/blog";

const API_URL = "http://portfolio-backend.ddev.site/api/blog";

export async function getBlogPosts(): Promise<BlogPost[]> {
  const response = await fetch(API_URL, {
    next: {
      revalidate: 60, // 1分間キャッシュ
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch blog posts");
  }

  return response.json();
} 