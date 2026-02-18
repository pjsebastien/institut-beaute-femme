import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://institutbeautedefemme.fr'
  const lastModified = new Date()

  // Pages principales
  const mainPages = [
    '',
    '/sourcils',
    '/levres',
    '/yeux',
    '/cheveux',
    '/conditions-medicales',
    '/dermopigmentation-reparatrice',
    '/formations',
    '/boutique',
  ]

  // Pages Sourcils
  const sourcilsPages = [
    '/sourcils/microblading',
    '/sourcils/microblading/cicatrisation',
    '/sourcils/microblading/rate',
    '/sourcils/microblading/croutes',
    '/sourcils/microshading',
    '/sourcils/microshading/prix',
    '/sourcils/microblading-vs-microshading',
    '/sourcils/tatouage-rate',
    '/sourcils/detatouage',
    '/sourcils/pochoir',
  ]

  // Pages Lèvres
  const levresPages = [
    '/levres/maquillage-permanent',
    '/levres/maquillage-permanent/cicatrisation',
    '/levres/maquillage-permanent/rate',
    '/levres/candy-lips',
    '/levres/candy-lips/cicatrisation',
  ]

  // Pages Yeux
  const yeuxPages = [
    '/yeux/eye-liner-permanent',
    '/yeux/eye-liner-permanent/cicatrisation',
    '/yeux/eye-liner-permanent/rate',
  ]

  // Pages Cheveux
  const cheveuxPages = [
    '/cheveux/tricopigmentation',
    '/cheveux/tricopigmentation/prix',
    '/cheveux/tricopigmentation/ratee',
    '/cheveux/dermopigmentation',
    '/cheveux/micropigmentation-prix',
    '/cheveux/cicatrice-cuir-chevelu',
  ]

  // Pages Conditions médicales
  const conditionsPages = [
    '/conditions-medicales/trichotillomanie',
    '/conditions-medicales/pelade',
    '/conditions-medicales/pelade/sourcils',
    '/conditions-medicales/alopecie-sourcils',
    '/conditions-medicales/vitiligo',
    '/conditions-medicales/pigmentation-cicatrice-blanche',
  ]

  // Pages Dermopigmentation réparatrice
  const reparatricePages = [
    '/dermopigmentation-reparatrice/areole-mammaire',
    '/dermopigmentation-reparatrice/tatouage-grain-de-beaute',
  ]

  // Pages Formations
  const formationsPages = [
    '/formations/microblading',
    '/formations/maquillage-permanent',
    '/formations/hygiene-salubrite',
    '/formations/microshading',
    '/formations/tricopigmentation',
    '/formations/dermopigmentation',
    '/formations/financement-pole-emploi',
  ]

  const allPages = [
    ...mainPages,
    ...sourcilsPages,
    ...levresPages,
    ...yeuxPages,
    ...cheveuxPages,
    ...conditionsPages,
    ...reparatricePages,
    ...formationsPages,
  ]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.split('/').length <= 2 ? 0.8 : 0.6,
  }))
}
