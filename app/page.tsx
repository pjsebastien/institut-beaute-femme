import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Testimonials from '@/components/sections/Testimonials'
import FAQ from '@/components/sections/FAQ'
import { Testimonial, FAQItem } from '@/types'

const categories = [
  {
    title: 'Sourcils',
    description: 'Microblading, microshading et techniques de dermopigmentation pour des sourcils parfaits',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600',
    href: '/sourcils',
    articles: ['Microblading', 'Microshading', 'Détatouage'],
  },
  {
    title: 'Lèvres',
    description: 'Candy lips et maquillage permanent pour des lèvres sublimées naturellement',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600',
    href: '/levres',
    articles: ['Candy Lips', 'Maquillage permanent', 'Cicatrisation'],
  },
  {
    title: 'Yeux',
    description: 'Eye-liner permanent et techniques de dermopigmentation du regard',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600',
    href: '/yeux',
    articles: ['Eye-liner permanent', 'Cicatrisation', 'Retouches'],
  },
  {
    title: 'Cheveux',
    description: 'Tricopigmentation et solutions capillaires pour hommes et femmes',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600',
    href: '/cheveux',
    articles: ['Tricopigmentation', 'Dermopigmentation', 'Cicatrices'],
  },
  {
    title: 'Conditions médicales',
    description: 'Solutions esthétiques pour alopécie, pelade, vitiligo et cicatrices',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600',
    href: '/conditions-medicales',
    articles: ['Alopécie', 'Pelade', 'Vitiligo'],
  },
  {
    title: 'Formations',
    description: 'Devenez expert en maquillage permanent et dermopigmentation',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    href: '/formations',
    articles: ['Microblading', 'Maquillage permanent', 'Financement'],
  },
]

const featuredArticles = [
  {
    title: 'Microblading : Tout savoir sur cette technique révolutionnaire',
    excerpt: 'Découvrez le microblading, la technique de dermopigmentation qui permet d\'obtenir des sourcils naturels et parfaitement dessinés.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
    href: '/sourcils/microblading',
    category: 'Sourcils',
  },
  {
    title: 'Candy Lips : Des lèvres sublimées au naturel',
    excerpt: 'Le candy lips est une technique de maquillage permanent qui redonne couleur et éclat à vos lèvres de manière naturelle.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800',
    href: '/levres/candy-lips',
    category: 'Lèvres',
  },
  {
    title: 'Tricopigmentation : La solution aux problèmes capillaires',
    excerpt: 'La tricopigmentation offre une alternative efficace pour camoufler la calvitie et redonner confiance en soi.',
    image: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800',
    href: '/cheveux/tricopigmentation',
    category: 'Cheveux',
  },
]

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie L.',
    location: 'Paris',
    rating: 5,
    text: 'Après des années à dessiner mes sourcils chaque matin, le microblading a changé ma vie. Le résultat est incroyablement naturel et je gagne un temps précieux chaque jour.',
    treatment: 'Microblading',
  },
  {
    id: '2',
    name: 'Sophie D.',
    location: 'Lyon',
    rating: 5,
    text: 'Le candy lips m\'a permis de retrouver confiance en moi. Mes lèvres sont sublimes et le résultat est exactement ce que j\'espérais : naturel et lumineux.',
    treatment: 'Candy Lips',
  },
  {
    id: '3',
    name: 'Thomas M.',
    location: 'Bordeaux',
    rating: 5,
    text: 'La tricopigmentation a transformé mon quotidien. Personne ne remarque que ce n\'est pas mes vrais cheveux. Un vrai miracle pour retrouver confiance en soi.',
    treatment: 'Tricopigmentation',
  },
]

const homeFAQs: FAQItem[] = [
  {
    question: 'Qu\'est-ce que le maquillage permanent ?',
    answer: 'Le maquillage permanent, aussi appelé dermopigmentation, est une technique qui consiste à implanter des pigments dans le derme pour créer un effet de maquillage durable. Cette technique permet de sublimer les sourcils, les lèvres et le contour des yeux de manière naturelle et longue durée.',
  },
  {
    question: 'Combien de temps dure un microblading ?',
    answer: 'Le microblading dure généralement entre 12 et 18 mois, selon votre type de peau, votre mode de vie et les soins apportés. Une retouche est recommandée après 4 à 6 semaines, puis une fois par an pour maintenir un résultat optimal.',
  },
  {
    question: 'Le maquillage permanent est-il douloureux ?',
    answer: 'La plupart des clientes décrivent la sensation comme un léger grattement ou picotement. Une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. La douleur varie selon la zone traitée et la sensibilité de chacune.',
  },
  {
    question: 'Peut-on corriger un microblading raté ?',
    answer: 'Oui, un microblading raté peut être corrigé de plusieurs manières : retouche par un professionnel qualifié, dermopigmentation corrective avec des couleurs adaptées, ou détatouage au laser. La solution dépend du type de problème rencontré.',
  },
  {
    question: 'Comment choisir sa formation en maquillage permanent ?',
    answer: 'Pour choisir une formation de qualité, vérifiez que le centre est certifié, que la formation inclut la pratique sur modèles, et qu\'elle couvre les aspects hygiène et salubrité. Les formations éligibles CPF ou Pôle Emploi offrent des garanties supplémentaires.',
  },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Sublimez votre beauté naturelle"
        subtitle="Maquillage permanent & Dermopigmentation"
        description="Découvrez les techniques professionnelles de microblading, candy lips et tricopigmentation pour révéler votre beauté authentique. Conseils d'experts, soins de qualité et résultats naturels."
        primaryCTA={{ label: 'Découvrir nos soins', href: '/sourcils' }}
        secondaryCTA={{ label: 'Nos formations', href: '/formations' }}
        image="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=1200"
        imageAlt="Institut de beauté spécialisé en maquillage permanent"
        badge="Expert en dermopigmentation"
        size="lg"
      />

      {/* Categories Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-4">
              Nos expertises
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Des techniques de pointe pour sublimer chaque partie de votre visage et retrouver confiance en vous
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="group card-hover overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charbon/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-playfair text-2xl font-semibold text-white mb-1">
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {category.articles.map((article) => (
                        <span
                          key={article}
                          className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm"
                        >
                          {article}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-charbon/70 text-sm line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-rose-fonce font-medium text-sm mt-4 group-hover:gap-3 transition-all">
                    Découvrir
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-4">
                Articles populaires
              </h2>
              <p className="text-lg text-charbon/70">
                Les sujets les plus recherchés par nos lectrices
              </p>
            </div>
            <Link href="/sourcils" className="btn-outline">
              Voir tous les articles
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-rose mb-4">Pourquoi nous faire confiance</span>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-6">
                Une expertise reconnue en dermopigmentation
              </h2>
              <p className="text-lg text-charbon/70 mb-8">
                Notre équipe de professionnels certifiés vous accompagne dans votre parcours beauté avec des conseils personnalisés, des techniques innovantes et un suivi attentionné.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                      </svg>
                    ),
                    title: 'Expertise certifiée',
                    description: 'Nos conseils sont rédigés par des professionnels formés aux dernières techniques',
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    ),
                    title: 'Conseils personnalisés',
                    description: 'Des recommandations adaptées à votre type de peau et vos besoins spécifiques',
                  },
                  {
                    icon: (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    ),
                    title: 'Accompagnement bienveillant',
                    description: 'Un suivi attentionné avant, pendant et après vos traitements',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-rose-pale flex items-center justify-center flex-shrink-0 text-rose-fonce">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-charbon mb-1">{item.title}</h3>
                      <p className="text-sm text-charbon/70">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hover">
                <Image
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800"
                  alt="Expertise en dermopigmentation"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-hover p-6">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <span className="block text-3xl font-playfair font-bold text-rose-fonce">42+</span>
                    <span className="text-xs text-charbon/60">Articles experts</span>
                  </div>
                  <div className="w-px h-12 bg-nude-rose" />
                  <div className="text-center">
                    <span className="block text-3xl font-playfair font-bold text-rose-fonce">12</span>
                    <span className="text-xs text-charbon/60">Produits sélectionnés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials
        testimonials={testimonials}
        title="Elles nous font confiance"
        description="Découvrez les témoignages de nos clientes satisfaites"
      />

      {/* FAQ */}
      <FAQ
        items={homeFAQs}
        title="Questions fréquentes"
        description="Les réponses aux questions les plus posées sur le maquillage permanent"
      />

      {/* CTA Section */}
      <section className="section-padding bg-gradient-rose">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-white mb-4">
            Prête à sublimer votre beauté ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez nos produits de soins post-traitement et accessoires professionnels pour prendre soin de votre peau au quotidien.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Découvrir la boutique
            </Link>
            <Link href="/formations" className="btn bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-rose-fonce">
              Nos formations
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
