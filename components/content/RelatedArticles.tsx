import Link from 'next/link'
import Image from 'next/image'
import { RelatedArticle } from '@/types'

interface RelatedArticlesProps {
  articles: RelatedArticle[]
  title?: string
}

export default function RelatedArticles({
  articles,
  title = 'Articles similaires',
}: RelatedArticlesProps) {
  if (articles.length === 0) return null

  return (
    <section className="mt-16 pt-12 border-t border-nude-rose/30">
      <h2 className="font-playfair text-2xl font-semibold text-charbon mb-8">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={article.slug}
            className="group flex gap-4 p-4 rounded-xl hover:bg-rose-pale/30 transition-colors"
          >
            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-medium text-rose-fonce uppercase tracking-wide">
                {article.category}
              </span>
              <h3 className="font-medium text-charbon text-sm mt-1 line-clamp-2 group-hover:text-rose-fonce transition-colors">
                {article.title}
              </h3>
              <p className="text-xs text-charbon/60 mt-1 line-clamp-1">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
