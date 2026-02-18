'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

const navigationItems: NavItem[] = [
  {
    label: 'Sourcils',
    href: '/sourcils',
    children: [
      { label: 'Microblading', href: '/sourcils/microblading' },
      { label: 'Microshading', href: '/sourcils/microshading' },
      { label: 'Microblading vs Microshading', href: '/sourcils/microblading-vs-microshading' },
      { label: 'Cicatrisation', href: '/sourcils/microblading/cicatrisation' },
      { label: 'Microblading raté', href: '/sourcils/microblading/rate' },
      { label: 'Détatouage sourcils', href: '/sourcils/detatouage' },
      { label: 'Pochoir sourcil', href: '/sourcils/pochoir' },
    ],
  },
  {
    label: 'Lèvres',
    href: '/levres',
    children: [
      { label: 'Maquillage permanent lèvres', href: '/levres/maquillage-permanent' },
      { label: 'Candy Lips', href: '/levres/candy-lips' },
      { label: 'Cicatrisation', href: '/levres/maquillage-permanent/cicatrisation' },
      { label: 'Maquillage raté', href: '/levres/maquillage-permanent/rate' },
    ],
  },
  {
    label: 'Yeux',
    href: '/yeux',
    children: [
      { label: 'Eye-liner permanent', href: '/yeux/eye-liner-permanent' },
      { label: 'Cicatrisation', href: '/yeux/eye-liner-permanent/cicatrisation' },
      { label: 'Eye-liner raté', href: '/yeux/eye-liner-permanent/rate' },
    ],
  },
  {
    label: 'Cheveux',
    href: '/cheveux',
    children: [
      { label: 'Tricopigmentation', href: '/cheveux/tricopigmentation' },
      { label: 'Dermopigmentation cheveux', href: '/cheveux/dermopigmentation' },
      { label: 'Prix tricopigmentation', href: '/cheveux/tricopigmentation/prix' },
      { label: 'Cicatrice cuir chevelu', href: '/cheveux/cicatrice-cuir-chevelu' },
    ],
  },
  {
    label: 'Conditions',
    href: '/conditions-medicales',
    children: [
      { label: 'Trichotillomanie', href: '/conditions-medicales/trichotillomanie' },
      { label: 'Pelade', href: '/conditions-medicales/pelade' },
      { label: 'Alopécie sourcils', href: '/conditions-medicales/alopecie-sourcils' },
      { label: 'Vitiligo', href: '/conditions-medicales/vitiligo' },
      { label: 'Dermopigmentation réparatrice', href: '/dermopigmentation-reparatrice' },
    ],
  },
  {
    label: 'Formations',
    href: '/formations',
    children: [
      { label: 'Formation microblading', href: '/formations/microblading' },
      { label: 'Formation maquillage permanent', href: '/formations/maquillage-permanent' },
      { label: 'Hygiène et salubrité', href: '/formations/hygiene-salubrite' },
      { label: 'Financement Pôle Emploi', href: '/formations/financement-pole-emploi' },
    ],
  },
]

export default function Navigation() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <nav className="hidden lg:flex items-center gap-1">
      {navigationItems.map((item) => (
        <div key={item.href} className="nav-item relative group">
          <Link
            href={item.href}
            className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
              isActive(item.href)
                ? 'text-rose-fonce bg-rose-pale/50'
                : 'text-charbon hover:text-rose-fonce hover:bg-rose-pale/30'
            }`}
          >
            {item.label}
            {item.children && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-3 h-3 ml-1 inline-block"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </Link>

          {/* Dropdown */}
          {item.children && (
            <div className="nav-dropdown">
              {item.children.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={`block px-4 py-2 text-sm transition-colors ${
                    pathname === child.href
                      ? 'text-rose-fonce bg-rose-pale/50'
                      : 'text-charbon hover:text-rose-fonce hover:bg-rose-pale/30'
                  }`}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

export { navigationItems }
