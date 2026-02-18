import { Product, ProductCategory } from '@/types'

export const products: Product[] = [
  // Soins post-traitement
  {
    id: 'soin-001',
    slug: 'creme-cicatrisante-sourcils',
    name: 'Crème Cicatrisante Sourcils',
    description: 'Soin réparateur après microblading et dermopigmentation des sourcils.',
    longDescription: `Notre crème cicatrisante spécialement formulée pour les sourcils après une séance de microblading ou de dermopigmentation. Enrichie en panthénol, aloe vera et vitamine E, elle accélère la cicatrisation tout en préservant l'intensité des pigments. Sa texture légère pénètre rapidement sans laisser de film gras. Idéale pour les 7 à 14 jours suivant votre traitement, elle apaise les sensations d'inconfort et prévient la formation excessive de croûtes. Formule hypoallergénique testée dermatologiquement.`,
    price: 24.90,
    originalPrice: 29.90,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600',
    images: [
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=600',
      'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600',
    ],
    category: 'soins-post-traitement',
    tags: ['microblading', 'cicatrisation', 'sourcils', 'soin'],
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    features: [
      'Accélère la cicatrisation',
      'Préserve les pigments',
      'Formule hypoallergénique',
      'Texture non grasse',
      'Contenance 15ml',
    ],
  },
  {
    id: 'soin-002',
    slug: 'baume-reparateur-levres',
    name: 'Baume Réparateur Lèvres Post-Pigmentation',
    description: 'Soin intense pour lèvres après candy lips ou maquillage permanent.',
    longDescription: `Ce baume réparateur haute performance a été développé spécifiquement pour les lèvres après une séance de candy lips ou de maquillage permanent. Sa formule concentrée en beurre de karité, cire d'abeille et huile de rose musquée nourrit intensément les lèvres fragilisées. Il forme un film protecteur qui isole les lèvres des agressions extérieures tout en laissant la peau respirer. Son action apaisante soulage immédiatement les sensations de tiraillement. À appliquer généreusement pendant les 10 jours suivant le traitement.`,
    price: 19.90,
    image: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600',
    images: [
      'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600',
      'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=600',
    ],
    category: 'soins-post-traitement',
    tags: ['candy lips', 'lèvres', 'cicatrisation', 'baume'],
    inStock: true,
    rating: 4.9,
    reviewCount: 89,
    features: [
      'Nutrition intense',
      'Film protecteur',
      'Apaisement immédiat',
      'Ingrédients naturels',
      'Contenance 10ml',
    ],
  },
  {
    id: 'soin-003',
    slug: 'serum-apaisant-yeux',
    name: 'Sérum Apaisant Contour des Yeux',
    description: 'Soin décongestionnant après eye-liner permanent ou dermopigmentation.',
    longDescription: `Sérum ultra-doux conçu pour le contour des yeux sensibilisé après un eye-liner permanent ou une dermopigmentation. Sa formule à base d'eau de bleuet, de caféine et d'acide hyaluronique décongestionne la zone fragile du contour de l'œil. Le complexe apaisant réduit les rougeurs et les gonflements post-traitement. Son application fraîche procure un soulagement instantané. Testé ophtalmologiquement, il convient aux yeux sensibles et aux porteuses de lentilles. Flacon pompe airless pour une hygiène optimale.`,
    price: 29.90,
    image: 'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600',
    images: [
      'https://images.unsplash.com/photo-1570194065650-d99fb4b38b15?w=600',
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600',
    ],
    category: 'soins-post-traitement',
    tags: ['eye-liner', 'contour yeux', 'sérum', 'apaisant'],
    inStock: true,
    rating: 4.7,
    reviewCount: 64,
    features: [
      'Décongestionne',
      'Réduit les rougeurs',
      'Testé ophtalmologiquement',
      'Flacon airless',
      'Contenance 15ml',
    ],
  },
  {
    id: 'soin-004',
    slug: 'huile-regenerante-cuir-chevelu',
    name: 'Huile Régénérante Cuir Chevelu',
    description: 'Soin nourrissant après tricopigmentation ou micropigmentation capillaire.',
    longDescription: `Huile de soin premium formulée pour le cuir chevelu après une séance de tricopigmentation ou de micropigmentation capillaire. Enrichie en huile d'argan, jojoba et vitamine E, elle nourrit le cuir chevelu tout en favorisant une cicatrisation optimale. Sa texture sèche ne laisse pas de résidu gras et ne perturbe pas le rendu visuel de la pigmentation. Elle aide à maintenir l'hydratation du cuir chevelu et prévient les sensations de tiraillement. Parfum subtil et masculin adapté à tous.`,
    price: 34.90,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600',
      'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600',
    ],
    category: 'soins-post-traitement',
    tags: ['tricopigmentation', 'cuir chevelu', 'huile', 'soin'],
    inStock: true,
    rating: 4.6,
    reviewCount: 42,
    features: [
      'Huile sèche non grasse',
      'Favorise la cicatrisation',
      'Hydratation longue durée',
      'Convient aux hommes et femmes',
      'Contenance 30ml',
    ],
  },

  // Accessoires professionnels
  {
    id: 'acc-001',
    slug: 'pochoirs-sourcils-professionnels',
    name: 'Pochoirs Sourcils Professionnels (Lot de 12)',
    description: 'Kit de pochoirs réutilisables pour tracer des sourcils parfaitement symétriques.',
    longDescription: `Set professionnel de 12 pochoirs sourcils aux formes variées pour s'adapter à tous les visages. Fabriqués en plastique souple de qualité supérieure, ces pochoirs sont réutilisables et faciles à nettoyer. Du sourcil arqué au sourcil droit, en passant par les formes douces et naturelles, ce kit offre toutes les options pour créer le regard idéal. Chaque pochoir est numéroté pour un repérage facile. Idéal pour les particulières souhaitant dessiner leurs sourcils à la maison ou pour les professionnelles en formation.`,
    price: 14.90,
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
    images: [
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
      'https://images.unsplash.com/photo-1597225244660-1cd128c64284?w=600',
    ],
    category: 'accessoires-professionnels',
    tags: ['pochoir', 'sourcils', 'accessoire', 'professionnel'],
    inStock: true,
    rating: 4.5,
    reviewCount: 203,
    features: [
      '12 formes différentes',
      'Plastique souple réutilisable',
      'Numérotés pour repérage',
      'Faciles à nettoyer',
      'Étui de rangement inclus',
    ],
  },
  {
    id: 'acc-002',
    slug: 'kit-retouche-sourcils-maison',
    name: 'Kit Retouche Sourcils Maison',
    description: 'Ensemble complet pour entretenir vos sourcils entre deux séances.',
    longDescription: `Kit tout-en-un pour l'entretien quotidien de vos sourcils entre deux séances de microblading ou de retouche. Ce coffret contient : une pince à épiler de précision, une brosse double embout (peigne et goupillon), un crayon sourcils universel en teinte taupe, un gel fixateur transparent et une paire de ciseaux à sourcils. Tous les outils sont présentés dans une pochette de voyage élégante en simili-cuir rose poudré. Le guide d'utilisation inclus vous accompagne pas à pas.`,
    price: 39.90,
    originalPrice: 49.90,
    image: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600',
    images: [
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600',
      'https://images.unsplash.com/photo-1522338242042-2d1c40e10d12?w=600',
    ],
    category: 'accessoires-professionnels',
    tags: ['kit', 'sourcils', 'retouche', 'accessoire'],
    inStock: true,
    rating: 4.7,
    reviewCount: 156,
    features: [
      '5 outils essentiels',
      'Pochette de voyage incluse',
      'Guide d\'utilisation',
      'Qualité professionnelle',
      'Idéal entre deux séances',
    ],
  },
  {
    id: 'acc-003',
    slug: 'pince-epiler-professionnelle',
    name: 'Pince à Épiler Professionnelle',
    description: 'Pince de précision en acier inoxydable pour une épilation parfaite.',
    longDescription: `Pince à épiler haut de gamme en acier inoxydable chirurgical, conçue pour une précision maximale. Son embout biseauté permet de saisir même les poils les plus fins et les plus courts. Le ressort calibré offre une prise ferme sans effort. Fabriquée selon les standards professionnels des instituts de beauté, elle garantit une épilation nette et sans douleur. Sa finition mate antidérapante assure une bonne prise en main. Livrée avec un étui protecteur pour préserver son affûtage.`,
    price: 12.90,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    images: [
      'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600',
    ],
    category: 'accessoires-professionnels',
    tags: ['pince', 'épilation', 'accessoire', 'professionnel'],
    inStock: true,
    rating: 4.8,
    reviewCount: 312,
    features: [
      'Acier inoxydable chirurgical',
      'Embout biseauté de précision',
      'Finition antidérapante',
      'Étui protecteur inclus',
      'Garantie à vie',
    ],
  },
  {
    id: 'acc-004',
    slug: 'brosse-sourcils-double-embout',
    name: 'Brosse à Sourcils Double Embout',
    description: 'Goupillon et peigne pour discipliner et structurer vos sourcils.',
    longDescription: `Brosse à sourcils professionnelle double embout indispensable pour un regard impeccable. D'un côté, le goupillon en spirale permet de brosser et discipliner les poils pour un effet naturel et soigné. De l'autre, le peigne à dents fines démêle et structure la forme du sourcil. Manche ergonomique en bambou éco-responsable avec finition rose gold. Parfaite pour appliquer uniformément votre gel fixateur ou pour fondre les traits de crayon. Format compact idéal pour le sac à main.`,
    price: 8.90,
    image: 'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600',
    images: [
      'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=600',
    ],
    category: 'accessoires-professionnels',
    tags: ['brosse', 'sourcils', 'accessoire', 'goupillon'],
    inStock: true,
    rating: 4.6,
    reviewCount: 178,
    features: [
      'Double embout polyvalent',
      'Manche en bambou éco-responsable',
      'Finition rose gold',
      'Format voyage',
      'Multi-usages',
    ],
  },

  // Maquillage correcteur
  {
    id: 'maq-001',
    slug: 'crayon-sourcils-waterproof',
    name: 'Crayon Sourcils Waterproof Longue Tenue',
    description: 'Crayon précis à micro-pointe pour des traits réalistes effet poil à poil.',
    longDescription: `Crayon à sourcils révolutionnaire avec sa micro-pointe ultra-fine de 1,5mm pour des traits d'une précision inégalée. Sa formule waterproof résiste à l'eau, à la transpiration et au sébum pendant 24h. Créez un effet poil à poil naturel ou comblez les zones clairsemées en toute facilité. La texture crémeuse glisse sans accrocher ni tirer sur la peau. Disponible en 4 teintes universelles : Blonde, Taupe, Châtain et Brunette. Embout brosse intégré pour estomper et fondre les traits. Idéal pour parfaire votre microblading ou camoufler les zones en cours de cicatrisation.`,
    price: 16.90,
    image: 'https://images.unsplash.com/photo-1631214500115-598fc2cb8d7a?w=600',
    images: [
      'https://images.unsplash.com/photo-1631214500115-598fc2cb8d7a?w=600',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600',
    ],
    category: 'maquillage-correcteur',
    tags: ['crayon', 'sourcils', 'waterproof', 'maquillage'],
    inStock: true,
    rating: 4.9,
    reviewCount: 445,
    features: [
      'Micro-pointe 1,5mm',
      'Tenue 24h waterproof',
      '4 teintes disponibles',
      'Embout brosse intégré',
      'Effet poil à poil naturel',
    ],
  },
  {
    id: 'maq-002',
    slug: 'gel-fixateur-sourcils-transparent',
    name: 'Gel Fixateur Sourcils Transparent',
    description: 'Gel sculptant invisible pour maintenir vos sourcils en place toute la journée.',
    longDescription: `Gel fixateur sourcils à la tenue impeccable qui discipline et structure vos sourcils du matin au soir. Sa formule transparente ne laisse aucun résidu blanc et s'adapte à toutes les carnations. Enrichi en panthénol et kératine, il nourrit les poils tout en les fixant. Le film flexible maintient la forme souhaitée sans effet cartonné ni rigidité. Applicateur goupillon précis pour une application ciblée poil par poil. Résiste à l'humidité et ne s'effrite pas. Parfait en finition après votre routine sourcils ou seul pour un effet "brow lamination" naturel.`,
    price: 11.90,
    image: 'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600',
    images: [
      'https://images.unsplash.com/photo-1583241800698-e8ab01830a07?w=600',
    ],
    category: 'maquillage-correcteur',
    tags: ['gel', 'fixateur', 'sourcils', 'transparent'],
    inStock: true,
    rating: 4.7,
    reviewCount: 267,
    features: [
      'Formule transparente',
      'Tenue longue durée',
      'Enrichi en panthénol',
      'Finition naturelle non rigide',
      'Effet brow lamination',
    ],
  },
  {
    id: 'maq-003',
    slug: 'palette-ombrage-sourcils',
    name: 'Palette Ombrage Sourcils 4 Teintes',
    description: 'Palette poudre professionnelle pour un ombrage dégradé parfait.',
    longDescription: `Palette professionnelle de 4 poudres sourcils finement broyées pour un rendu ultra-naturel. Les teintes soigneusement sélectionnées permettent de créer des dégradés subtils et de s'adapter à toute couleur de sourcils naturelle ou pigmentée. Texture soyeuse hautement pigmentée qui se fond parfaitement dans les poils. Inclut une teinte claire pour illuminer l'arcade, deux teintes moyennes pour le corps du sourcil et une teinte foncée pour l'extrémité. Miroir et pinceau duo (biseauté et estompeur) intégrés. Packaging compact rechargeable.`,
    price: 22.90,
    image: 'https://images.unsplash.com/photo-1512207576469-7d9be7e9eeef?w=600',
    images: [
      'https://images.unsplash.com/photo-1512207576469-7d9be7e9eeef?w=600',
      'https://images.unsplash.com/photo-1596704017254-9b121068fb31?w=600',
    ],
    category: 'maquillage-correcteur',
    tags: ['palette', 'ombrage', 'sourcils', 'poudre'],
    inStock: true,
    rating: 4.8,
    reviewCount: 189,
    features: [
      '4 teintes complémentaires',
      'Texture ultra-fine',
      'Miroir intégré',
      'Pinceau duo inclus',
      'Packaging rechargeable',
    ],
  },
  {
    id: 'maq-004',
    slug: 'mascara-sourcils-teinte',
    name: 'Mascara Sourcils Teinté',
    description: 'Mascara colorant longue tenue pour intensifier vos sourcils instantanément.',
    longDescription: `Mascara sourcils teinté qui colore, épaissit et fixe en un seul geste. Sa formule enrobante gaine chaque poil pour un effet volumateur immédiat. Les micro-fibres intégrées comblent visuellement les zones clairsemées et allongent les poils courts. Disponible en 3 teintes : Blonde, Brune et Châtain Chaud. Application rapide grâce à sa brosse courbe épousant la forme naturelle du sourcil. Tenue 12h sans transfert. Se démaquille facilement à l'eau tiède. Idéal pour un maquillage express ou pour intensifier un microblading qui s'estompe.`,
    price: 13.90,
    image: 'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?w=600',
    images: [
      'https://images.unsplash.com/photo-1590156546946-ce55a12a6a5d?w=600',
    ],
    category: 'maquillage-correcteur',
    tags: ['mascara', 'sourcils', 'teinté', 'maquillage'],
    inStock: true,
    rating: 4.5,
    reviewCount: 134,
    features: [
      '3 teintes disponibles',
      'Effet volumateur',
      'Micro-fibres comblantes',
      'Tenue 12h',
      'Démaquillage à l\'eau',
    ],
  },
]

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category)
}

export function getAllCategories(): { slug: ProductCategory; name: string; count: number }[] {
  const categories: { slug: ProductCategory; name: string }[] = [
    { slug: 'soins-post-traitement', name: 'Soins Post-Traitement' },
    { slug: 'accessoires-professionnels', name: 'Accessoires Professionnels' },
    { slug: 'maquillage-correcteur', name: 'Maquillage Correcteur' },
  ]

  return categories.map((cat) => ({
    ...cat,
    count: products.filter((p) => p.category === cat.slug).length,
  }))
}

export function getRelatedProducts(currentSlug: string, limit = 4): Product[] {
  const current = getProductBySlug(currentSlug)
  if (!current) return products.slice(0, limit)

  return products
    .filter((p) => p.slug !== currentSlug && p.category === current.category)
    .slice(0, limit)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery) ||
      p.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  )
}
