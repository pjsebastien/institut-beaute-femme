'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const programme = [
  { module: 'Théorie colorimétrie', duree: '4h', contenu: 'Théorie des couleurs, choix des pigments' },
  { module: 'Morphologie sourcils', duree: '4h', contenu: 'Design et symétrie des sourcils' },
  { module: 'Technique ombré', duree: '8h', contenu: 'Maîtrise du dégradé et de l\'effet poudré' },
  { module: 'Pratique modèles', duree: '8h', contenu: 'Application sur modèles réels' },
]

const tarifs = [
  { type: 'Formation microshading seul', duree: '3 jours', prix: '1 200€ - 2 000€' },
  { type: 'Combo microblading + microshading', duree: '5-6 jours', prix: '2 500€ - 3 500€' },
  { type: 'Perfectionnement', duree: '1-2 jours', prix: '800€ - 1 500€' },
]

const faqs = [
  {
    question: 'Quelle différence entre formation microblading et microshading ?',
    answer: 'Le microblading utilise des lames pour créer des traits imitant les poils. Le microshading utilise un dermographe pour créer un effet ombré/poudré. Beaucoup de formations proposent les deux techniques combinées.',
  },
  {
    question: 'Le microshading est-il plus facile que le microblading ?',
    answer: 'Techniquement, le microshading est souvent considéré comme plus accessible car il ne nécessite pas la même précision de trait. Cependant, maîtriser le dégradé parfait demande aussi de l\'entraînement.',
  },
  {
    question: 'Faut-il connaître le microblading avant le microshading ?',
    answer: 'Non, ce n\'est pas obligatoire. Vous pouvez commencer directement par le microshading. Cependant, maîtriser les deux techniques vous rendra plus polyvalent(e) et attractif(ve) pour les clients.',
  },
]

const relatedArticles = [
  { title: 'Formation microblading', slug: '/formations/microblading', excerpt: 'Technique poil à poil', image: '/placeholder-formation.svg', category: 'Formation' },
  { title: 'Microshading', slug: '/sourcils/microshading', excerpt: 'La technique', image: '/placeholder-microshading.svg', category: 'Technique' },
  { title: 'Formation hygiène', slug: '/formations/hygiene-salubrite', excerpt: 'Obligatoire', image: '/placeholder-hygiene.svg', category: 'Formation' },
]

export default function FormationMicroshadingPage() {
  return (
    <article className="pb-16">
      <section className="relative bg-gradient-to-br from-purple-800 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-64 h-64 bg-purple-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: 'Formations', href: '/formations' }, { label: 'Microshading', href: '/formations/microshading' }]} variant="dark" />
          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Spécialisation
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">Formation <span className="text-purple-300">Microshading</span></h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">Maîtrisez la technique powder brows / ombré shading pour des sourcils effet maquillé naturel.</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-purple-300">3</span><p className="text-white/70 text-sm">jours</p></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-purple-300">1 200€</span><p className="text-white/70 text-sm">à partir de</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Programme</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {programme.map((mod, i) => (
              <div key={i} className="bg-purple-50 rounded-2xl p-6">
                <div className="flex justify-between mb-2"><h3 className="font-semibold text-charbon">{mod.module}</h3><span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">{mod.duree}</span></div>
                <p className="text-charbon/70 text-sm">{mod.contenu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Tarifs</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tarifs.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <h3 className="font-semibold text-charbon mb-2">{t.type}</h3>
                <span className="text-sm text-charbon/60">{t.duree}</span>
                <p className="text-2xl font-bold text-purple-600 mt-4">{t.prix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-purple-700 to-purple-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">Complétez vos compétences</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/microblading" className="btn bg-white text-purple-700 hover:bg-purple-50">Formation microblading</Link>
            <Link href="/sourcils/microshading" className="btn bg-white/20 text-white hover:bg-white/30">Voir la technique</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Questions fréquentes" description="Tout sur la formation microshading" />

      <section className="section-padding bg-beige-creme">
        <div className="container-custom"><div className="max-w-4xl mx-auto"><AuthorBox /><RelatedArticles articles={relatedArticles} /></div></div>
      </section>
    </article>
  )
}
