import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Yeux | Eye-liner Permanent et Dermopigmentation',
  description: 'Découvrez l\'eye-liner permanent et les techniques de dermopigmentation du regard. Conseils experts sur la cicatrisation et les corrections possibles.',
  keywords: ['eye liner permanent', 'maquillage permanent yeux', 'dermopigmentation yeux', 'eye liner'],
}

const articles = [
  {
    title: 'Eye-liner permanent : Sublimez votre regard',
    excerpt: 'L\'eye-liner permanent redéfinit et intensifie le regard sans effort quotidien. Découvrez cette technique de dermopigmentation du contour des yeux.',
    image: 'https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=800',
    href: '/yeux/eye-liner-permanent',
    category: 'Technique',
    badge: 'Populaire',
  },
  {
    title: 'Cicatrisation eye-liner permanent : Les étapes',
    excerpt: 'Suivez le processus de cicatrisation de votre eye-liner permanent et découvrez les soins essentiels pour un résultat optimal.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800',
    href: '/yeux/eye-liner-permanent/cicatrisation',
    category: 'Post-soin',
  },
  {
    title: 'Eye-liner permanent raté : Solutions et corrections',
    excerpt: 'Face à un eye-liner permanent insatisfaisant, plusieurs solutions existent. Découvrez les options de correction et de détatouage.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
    href: '/yeux/eye-liner-permanent/rate',
    category: 'Correction',
  },
]

const faqs = [
  {
    question: 'L\'eye-liner permanent fait-il mal ?',
    answer: 'La zone du contour des yeux est sensible, mais une crème anesthésiante est appliquée avant le traitement. La plupart des clientes décrivent une sensation de picotement ou de légère pression, qui reste supportable.',
  },
  {
    question: 'Combien de temps dure un eye-liner permanent ?',
    answer: 'Un eye-liner permanent dure généralement entre 2 et 5 ans selon votre type de peau, la technique utilisée et votre mode de vie. Des retouches peuvent être nécessaires pour maintenir l\'intensité.',
  },
  {
    question: 'Peut-on porter des lentilles après un eye-liner permanent ?',
    answer: 'Il est recommandé d\'éviter les lentilles de contact pendant 24 à 48 heures après la séance. Apportez vos lunettes le jour du rendez-vous et suivez les conseils de votre praticien.',
  },
  {
    question: 'Quels sont les différents styles d\'eye-liner permanent ?',
    answer: 'Plusieurs styles sont possibles : le trait fin discret, le trait plus épais pour un effet intense, le trait avec dégradé, ou encore le rehaussement de cils (trait dans les cils) pour un effet naturel.',
  },
  {
    question: 'Comment corriger un eye-liner permanent raté ?',
    answer: 'Un eye-liner raté peut être corrigé par retouche (ajustement de l\'épaisseur ou de la forme), par dermopigmentation corrective, ou par détatouage au laser dans les cas plus complexes.',
  },
]

export default function YeuxHubPage() {
  return (
    <>
      <Hero
        title="Yeux"
        subtitle="Eye-liner permanent et dermopigmentation"
        description="Intensifiez votre regard avec l'eye-liner permanent. Découvrez les techniques, la cicatrisation et les solutions pour un regard sublimé au quotidien."
        image="https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=1200"
        imageAlt="Eye-liner permanent et maquillage des yeux"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Yeux', href: '/yeux' },
          ]}
        />
      </div>

      {/* Quick Links */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap gap-3">
          {['Eye-liner permanent', 'Cicatrisation', 'Raté', 'Styles'].map((tag) => (
            <Link
              key={tag}
              href={`/yeux/eye-liner-permanent${tag === 'Eye-liner permanent' ? '' : '/' + tag.toLowerCase()}`}
              className="badge-rose hover:bg-rose-fonce hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-8">
            Nos articles sur le maquillage permanent des yeux
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <ArticleCard key={article.href} {...article} />
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-6">
                L&apos;eye-liner permanent : un regard intense sans effort
              </h2>
              <div className="prose-custom">
                <p>
                  L&apos;eye-liner permanent est la solution idéale pour celles qui souhaitent un regard défini
                  et maquillé dès le réveil. Cette technique de dermopigmentation permet de tracer un trait
                  précis et durable le long des cils.
                </p>
                <h3>Les différents types d&apos;eye-liner permanent</h3>
                <ul>
                  <li><strong>Rehaussement de cils</strong> : trait discret dans la ligne des cils</li>
                  <li><strong>Eye-liner fin</strong> : trait élégant qui allonge l&apos;œil</li>
                  <li><strong>Eye-liner épais</strong> : regard intense et dramatique</li>
                  <li><strong>Cat eye</strong> : trait étiré vers l&apos;extérieur</li>
                </ul>
                <p>
                  Contrairement au maquillage traditionnel, l&apos;eye-liner permanent ne coule pas, ne s&apos;estompe pas
                  et reste parfait en toutes circonstances : sport, piscine, vacances ou simplement au quotidien.
                </p>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800"
                alt="Résultat eye-liner permanent naturel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur l'eye-liner permanent"
        description="Les réponses aux questions les plus posées sur la dermopigmentation des yeux"
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-rose">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Sublimez votre regard
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre sérum apaisant contour des yeux, spécialement formulé pour la cicatrisation après eye-liner permanent.
          </p>
          <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
            Voir nos produits
          </Link>
        </div>
      </section>
    </>
  )
}
