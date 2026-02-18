'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const specialisations = [
  { nom: 'Dermopigmentation esthétique', zones: ['Sourcils', 'Lèvres', 'Eye-liner'], duree: '10-15 jours', niveau: 'Base + Intermédiaire' },
  { nom: 'Dermopigmentation médicale', zones: ['Aréoles mammaires', 'Cicatrices', 'Vitiligo'], duree: '5-7 jours', niveau: 'Avancé' },
  { nom: 'Tricopigmentation', zones: ['Cuir chevelu', 'Cicatrices greffe'], duree: '4-5 jours', niveau: 'Spécialisation' },
  { nom: 'Corrections', zones: ['Neutralisation', 'Camouflage', 'Ratés'], duree: '2-3 jours', niveau: 'Expert' },
]

const parcours = [
  { type: 'Parcours esthétique', duree: '2-3 semaines', prix: '5 000€ - 8 000€', debouches: 'Instituts, domicile' },
  { type: 'Parcours médico-esthétique', duree: '1-2 mois', prix: '8 000€ - 15 000€', debouches: '+ Cliniques, hôpitaux' },
  { type: 'Parcours expert complet', duree: '3-4 mois', prix: '15 000€ - 25 000€', debouches: 'Tous débouchés + Formation' },
]

const faqs = [
  {
    question: 'Quelle différence entre dermopigmentation et maquillage permanent ?',
    answer: 'La dermopigmentation est le terme médical englobant toutes les techniques. Le maquillage permanent désigne généralement la dermopigmentation esthétique (sourcils, lèvres, yeux). La dermopigmentation inclut aussi l\'aspect réparateur (aréoles, cicatrices).',
  },
  {
    question: 'Peut-on exercer en milieu médical avec ces formations ?',
    answer: 'Oui, avec une formation spécifique en dermopigmentation médicale/réparatrice. Vous pouvez travailler avec des chirurgiens plasticiens, oncologues, ou en cliniques spécialisées. Une convention ou partenariat est généralement établi.',
  },
  {
    question: 'Comment se différencier dans ce métier ?',
    answer: 'Spécialisez-vous : tricopigmentation (moins de concurrence), dermopigmentation médicale (plus valorisant), corrections (expertise rare). Formez-vous continuellement et développez votre personal branding.',
  },
]

const relatedArticles = [
  { title: 'Formation maquillage permanent', slug: '/formations/maquillage-permanent', excerpt: 'Esthétique', image: '/placeholder-formation.svg', category: 'Formation' },
  { title: 'Dermopigmentation réparatrice', slug: '/dermopigmentation-reparatrice', excerpt: 'Médicale', image: '/placeholder-medical.svg', category: 'Technique' },
  { title: 'Financement Pôle Emploi', slug: '/formations/financement-pole-emploi', excerpt: 'Aides', image: '/placeholder-finance.svg', category: 'Financement' },
]

export default function FormationDermopigmentationPage() {
  return (
    <article className="pb-16">
      <section className="relative bg-gradient-to-br from-indigo-900 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-indigo-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: 'Formations', href: '/formations' }, { label: 'Dermopigmentation', href: '/formations/dermopigmentation' }]} variant="dark" />
          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Cursus Expert
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">Formation <span className="text-indigo-300">Dermopigmentation</span></h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">La formation la plus complète : esthétique et réparatrice. Devenez expert(e) en pigmentation cutanée.</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-indigo-300">4</span><p className="text-white/70 text-sm">spécialisations</p></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-indigo-300">1-4</span><p className="text-white/70 text-sm">mois</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Les spécialisations</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {specialisations.map((spec, i) => (
              <div key={i} className="bg-indigo-50 rounded-2xl p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-semibold text-charbon text-lg">{spec.nom}</h3>
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">{spec.niveau}</span>
                </div>
                <p className="text-sm text-indigo-600 mb-3">{spec.duree}</p>
                <div className="flex flex-wrap gap-2">
                  {spec.zones.map((z, j) => (
                    <span key={j} className="bg-white text-charbon/70 px-2 py-1 rounded-full text-xs">{z}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Parcours de formation</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {parcours.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card">
                <h3 className="font-semibold text-charbon text-lg mb-2">{p.type}</h3>
                <span className="text-sm text-charbon/60">{p.duree}</span>
                <p className="text-2xl font-bold text-indigo-600 my-4">{p.prix}</p>
                <p className="text-sm text-charbon/70">Débouchés : {p.debouches}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-indigo-800 to-indigo-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">Devenez expert(e) en dermopigmentation</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/maquillage-permanent" className="btn bg-white text-indigo-800 hover:bg-indigo-50">Formation esthétique</Link>
            <Link href="/formations/financement-pole-emploi" className="btn bg-white/20 text-white hover:bg-white/30">Financement</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Questions fréquentes" description="Tout sur la formation dermopigmentation" />

      <section className="section-padding bg-beige-creme">
        <div className="container-custom"><div className="max-w-4xl mx-auto"><AuthorBox /><RelatedArticles articles={relatedArticles} /></div></div>
      </section>
    </article>
  )
}
