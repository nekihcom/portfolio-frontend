import { getBlogPost } from '@/services/blog'
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
 
export async function GET(request: Request) {
  // Parse query string parameters
  const { searchParams } = new URL(request.url)
  const secret = searchParams.get('secret')
  const id = searchParams.get('id')
 
  // Check the secret and next parameters
  // This secret should only be known to this Route Handler and the CMS
  if (secret !== 'DRUPAL_CLIENT_SECRET' || !id) {
    return new Response('Invalid token', { status: 401 })
  }
 
  // Fetch the headless CMS to check if the provided `id` exists
  // getPostByid would implement the required fetching logic to the headless CMS
  const post = await getBlogPost(parseInt(id))
 
  // If the slug doesn't exist prevent draft mode from being enabled
  if (!post) {
    return new Response('Invalid slug', { status: 401 })
  }
 
  // Enable Draft Mode by setting the cookie
  const draft = await draftMode()
  draft.enable()
 
  // Redirect to the path from the fetched post
  // We don't redirect to searchParams.slug as that might lead to open redirect vulnerabilities
  redirect(post.view_node)
}