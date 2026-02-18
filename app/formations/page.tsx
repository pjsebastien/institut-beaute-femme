import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Hero from '@/components/sections/Hero'
import { ArticleCard } from '@/components/ui/Card'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'

export const metadata: Metadata = {
  title: 'Formations | Microblading, Maquillage Permanent et Dermopigmentation',
  description: 'Formations professionnelles en microblading, maquillage permanent et dermopigmentation. Éligibles CPF et Pôle Emploi. Devenez expert en techniques de beauté.',
  keywords: ['formation microblading', 'formation maquillage permanent', 'formation dermopigmentation', 'CPF', 'Pôle Emploi'],
}

const formations = [
  {
    title: 'Formation Microblading : Devenez expert',
    excerpt: 'Maîtrisez la technique du microblading poil à poil pour créer des sourcils naturels et parfaitement dessinés. Formation pratique sur modèles.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800',
    href: '/formations/microblading',
    category: 'Sourcils',
    badge: 'Populaire',
  },
  {
    title: 'Formation Maquillage Permanent : Programme complet',
    excerpt: 'Formation complète couvrant les techniques de dermopigmentation pour les sourcils, les lèvres et les yeux. Certification professionnelle.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800',
    href: '/formations/maquillage-permanent',
    category: 'Complet',
    badge: 'Certifiant',
  },
  {
    title: 'Formation Hygiène et Salubrité : Certification obligatoire',
    excerpt: 'Formation obligatoire pour exercer légalement les techniques de dermopigmentation. Attestation de formation reconnue par l\'ARS.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    href: '/formations/hygiene-salubrite',
    category: 'Réglementation',
    badge: 'Obligatoire',
  },
  {
    title: 'Formation Microshading : Technique avancée',
    excerpt: 'Perfectionnez vos compétences avec la technique du microshading pour des sourcils effet poudré naturels.',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800',
    href: '/formations/microshading',
    category: 'Spécialisation',
  },
  {
    title: 'Formation Tricopigmentation : Micropigmentation capillaire',
    excerpt: 'Apprenez les techniques de tricopigmentation pour traiter la calvitie et les cicatrices du cuir chevelu.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    href: '/formations/tricopigmentation',
    category: 'Spécialisation',
  },
  {
    title: 'Formation Dermopigmentation : Techniques complètes',
    excerpt: 'Formation approfondie en dermopigmentation incluant les techniques réparatrices et correctives.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    href: '/formations/dermopigmentation',
    category: 'Avancé',
  },
  {
    title: 'Financement Pôle Emploi : Aides et démarches',
    excerpt: 'Découvrez comment financer votre formation en maquillage permanent grâce à Pôle Emploi, au CPF et autres dispositifs.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800',
    href: '/formations/financement-pole-emploi',
    category: 'Financement',
    badge: 'CPF',
  },
]

const faqs = [
  {
    question: 'Quels sont les prérequis pour suivre une formation microblading ?',
    answer: 'Aucun diplôme spécifique n\'est requis pour suivre une formation microblading. Cependant, un sens artistique, de la minutie et une bonne vision sont recommandés. Certains centres demandent un entretien préalable.',
  },
  {
    question: 'La formation microblading est-elle éligible au CPF ?',
    answer: 'Oui, de nombreuses formations en microblading et maquillage permanent sont éligibles au Compte Personnel de Formation (CPF). Vérifiez l\'éligibilité auprès du centre de formation et sur moncompteformation.gouv.fr.',
  },
  {
    question: 'Combien coûte une formation microblading ?',
    answer: 'Les prix varient généralement entre 1500€ et 3000€ selon la durée, le contenu et le centre de formation. Les formations certifiantes et complètes sont plus onéreuses mais offrent de meilleures perspectives.',
  },
  {
    question: 'La formation hygiène et salubrité est-elle obligatoire ?',
    answer: 'Oui, l\'attestation de formation aux règles d\'hygiène et de salubrité est obligatoire pour exercer légalement la dermopigmentation en France. Cette formation de 21 heures minimum est délivrée par des organismes agréés par l\'ARS.',
  },
  {
    question: 'Puis-je me faire financer par Pôle Emploi ?',
    answer: 'Oui, Pôle Emploi (France Travail) peut financer votre formation via l\'AIF (Aide Individuelle à la Formation) si elle correspond à votre projet professionnel. Prenez rendez-vous avec votre conseiller pour constituer votre dossier.',
  },
]

export default function FormationsHubPage() {
  return (
    <>
      <Hero
        title="Formations"
        subtitle="Devenez expert en maquillage permanent"
        description="Formations professionnelles certifiantes en microblading, dermopigmentation et techniques avancées. Éligibles CPF et financement Pôle Emploi."
        image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200"
        imageAlt="Formation professionnelle maquillage permanent"
        size="md"
      />

      <div className="container-custom py-8">
        <Breadcrumb
          items={[
            { label: 'Formations', href: '/formations' },
          ]}
        />
      </div>

      {/* Quick Links */}
      <section className="container-custom pb-12">
        <div className="flex flex-wrap gap-3">
          {['Microblading', 'Maquillage permanent', 'Hygiène', 'Tricopigmentation', 'CPF'].map((tag) => (
            <Link
              key={tag}
              href={`/formations/${tag.toLowerCase().replace(' ', '-')}`}
              className="badge-rose hover:bg-rose-fonce hover:text-white transition-colors"
            >
              {tag}
            </Link>
          ))}
        </div>
      </section>

      {/* Financing Banner */}
      <section className="container-custom pb-12">
        <div className="bg-gradient-rose rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-playfair font-semibold mb-4">
                Financez votre formation
              </h2>
              <p className="text-white/90 mb-6">
                Nos formations sont éligibles à différents dispositifs de financement :
                CPF, Pôle Emploi, OPCO, FAFCEA et plus encore.
              </p>
              <Link
                href="/formations/financement-pole-emploi"
                className="btn bg-white text-rose-fonce hover:bg-beige-creme"
              >
                Découvrir les financements
              </Link>
            </div>
            <div className="flex justify-center gap-6">
              <div className="text-center">
                <span className="block text-4xl font-playfair font-bold">CPF</span>
                <span className="text-sm text-white/80">Éligible</span>
              </div>
              <div className="w-px bg-white/20" />
              <div className="text-center">
                <span className="block text-4xl font-playfair font-bold">100%</span>
                <span className="text-sm text-white/80">Finançable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-semibold text-charbon mb-8">
            Toutes nos formations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {formations.map((formation) => (
              <ArticleCard key={formation.href} {...formation} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-charbon mb-4">
              Pourquoi se former au maquillage permanent ?
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Un métier passionnant avec de réelles perspectives d&apos;emploi et d&apos;entrepreneuriat
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: 'Revenus attractifs',
                description: 'Les tarifs pratiqués permettent une rémunération attractive dès le démarrage de l\'activité',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Flexibilité',
                description: 'Exercez en institut, à domicile ou créez votre propre structure selon vos envies',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
                title: 'Demande croissante',
                description: 'Le marché du maquillage permanent est en pleine expansion avec une clientèle grandissante',
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                ),
                title: 'Métier passion',
                description: 'Contribuez au bien-être et à la confiance en soi de vos clientes au quotidien',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-rose-pale flex items-center justify-center mx-auto mb-4 text-rose-fonce">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-charbon mb-2">{item.title}</h3>
                <p className="text-sm text-charbon/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur les formations"
        description="Les réponses aux questions les plus posées sur nos formations en maquillage permanent"
      />

      {/* CTA */}
      <section className="section-padding bg-gradient-rose">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-playfair font-semibold text-white mb-4">
            Prêt à vous lancer ?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez nos formations et trouvez celle qui correspond à vos objectifs professionnels.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/microblading" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Formation Microblading
            </Link>
            <Link href="/formations/financement-pole-emploi" className="btn bg-white/20 text-white border-2 border-white/30 hover:bg-white hover:text-rose-fonce">
              Options de financement
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
