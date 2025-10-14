import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} - Laith Altarabishi`,
    description: post.description,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#fafafa] font-mono">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="space-y-8">
          {/* Back link */}
          <Link href="/blog" className="text-base text-black underline hover:text-gray-600 transition-colors">
            ← Back to blog
          </Link>

          {/* Blog post content */}
          <article className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-normal text-black">{post.title}</h1>
              <p className="text-sm text-gray-600">{post.date}</p>
            </div>

            <div className="prose prose-sm max-w-none text-base leading-relaxed text-black">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => (
                    <h1 className="text-2xl font-semibold text-black mt-8 mb-4 first:mt-0">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-xl font-semibold text-black mt-6 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-lg font-semibold text-black mt-5 mb-2">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-base font-semibold text-black mt-4 mb-2">
                      {children}
                    </h4>
                  ),
                  p: ({ children }) => (
                    <p className="mb-4 text-black leading-relaxed">
                      {children}
                    </p>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-inside mb-4 space-y-2">
                      {children}
                    </ul>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside mb-4 space-y-2">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => (
                    <li className="text-black">{children}</li>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4 text-gray-700">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children, className }) => {
                    const isInline = !className
                    return isInline ? (
                      <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">
                        {children}
                      </code>
                    ) : (
                      <code className="block bg-gray-100 p-4 rounded my-4 overflow-x-auto font-mono text-sm">
                        {children}
                      </code>
                    )
                  },
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="text-black underline hover:text-gray-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {children}
                    </a>
                  ),
                  strong: ({ children }) => (
                    <strong className="font-semibold">{children}</strong>
                  ),
                  em: ({ children }) => (
                    <em className="italic">{children}</em>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </main>
  )
}
