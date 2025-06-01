import { getBlogPosts } from "@/services/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

async function BlogList() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-4">
      {posts.map((post, key) => (
        <Card key={key}>
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: post.field_body }}></div>
            <p className="text-sm text-muted-foreground mt-2">
              {new Date(post.created).toLocaleDateString("ja-JP")}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function BlogListSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
        <Card key={i}>
          <CardHeader>
            <Skeleton className="h-6 w-3/4" />
          </CardHeader>
          <CardContent>
            <Skeleton className="h-4 w-full mb-2" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function TestPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">ブログ記事一覧</h1>
      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList />
      </Suspense>
    </div>
  );
} 