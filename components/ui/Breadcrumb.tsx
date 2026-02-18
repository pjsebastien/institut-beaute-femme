import Link from 'next/link'
import { BreadcrumbItem } from '@/types'
import { generateBreadcrumbSchema } from '@/lib/seo'

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  variant?: 'light' | 'dark'
}

export default function Breadcrumb({ items, variant = 'light' }: BreadcrumbProps) {
  const schema = generateBreadcrumbSchema(items)

  const isDark = variant === 'dark'

  const linkClass = isDark
    ? 'text-white/70 hover:text-white transition-colors'
    : 'breadcrumb-link'

  const separatorClass = isDark
    ? 'text-white/40'
    : 'breadcrumb-separator'

  const currentClass = isDark
    ? 'text-white font-medium'
    : 'breadcrumb-current'

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <nav
        className={`mb-6 ${isDark ? 'bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full inline-flex' : 'breadcrumb'}`}
        aria-label="Fil d'Ariane"
      >
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          <li>
            <Link href="/" className={linkClass}>
              Accueil
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <span className={separatorClass} aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-3 h-3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </span>
              {index === items.length - 1 ? (
                <span className={currentClass} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
