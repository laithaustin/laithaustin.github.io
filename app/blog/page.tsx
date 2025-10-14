import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog-posts"

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <main className="min-h-screen bg-[#fafafa] font-mono">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="space-y-8">
          {/* Back link */}
          <Link href="/" className="text-base text-black underline hover:text-gray-600 transition-colors">
            ← Back to home
          </Link>

          {/* Blog posts list */}
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.slug} className="space-y-1">
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-base text-black underline hover:text-gray-600 transition-colors"
                >
                  {post.title}
                </Link>
                <p className="text-sm text-gray-600">{post.date}</p>
                <p className="text-base text-black leading-relaxed">{post.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
