import { getBlogPost } from "@/services/blog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

async function BlogDetail({ id }: { id: string }) {
  const post = await getBlogPost(parseInt(id));

  return (
    <Card>
      <CardHeader>
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div 
          className="text-muted-foreground prose prose-sm max-w-none" 
          dangerouslySetInnerHTML={{ __html: post.field_body || "" }}
        />
        <p className="text-sm text-muted-foreground mt-4">
          {post.created === post.changed ? (
            <>作成日: {new Date(post.created).toLocaleDateString("ja-JP")}</>
          ) : (
            <>更新日: {new Date(post.changed).toLocaleDateString("ja-JP")}</>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

function BlogDetailSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-3/4" />
      </CardHeader>
      <CardContent>
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3" />
      </CardContent>
    </Card>
  );
}

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <Button variant="ghost" asChild className="gap-2">
          <Link href="/test">
            <ArrowLeft className="h-4 w-4" />
            一覧に戻る
          </Link>
        </Button>
      </div>
      <Suspense fallback={<BlogDetailSkeleton />}>
        <BlogDetail id={id} />
      </Suspense>
    </div>
  );
} 