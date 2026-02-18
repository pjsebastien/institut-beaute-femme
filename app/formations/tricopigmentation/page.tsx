'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const programme = [
  { module: 'Anatomie cuir chevelu', duree: '4h', contenu: 'Structure, types de calvitie, analyse' },
  { module: 'Techniques de pigmentation', duree: '8h', contenu: 'Points, densité, ligne frontale' },
  { module: 'Colorimétrie capillaire', duree: '4h', contenu: 'Choix des pigments selon phototype' },
  { module: 'Pratique intensive', duree: '16h', contenu: 'Travail sur peaux synthétiques et modèles' },
  { module: 'Cas spéciaux', duree: '4h', contenu: 'Cicatrices, alopécie féminine, corrections' },
]

const tarifs = [
  { type: 'Formation initiale', duree: '4-5 jours', prix: '3 000€ - 5 000€' },
  { type: 'Formation avancée', duree: '2-3 jours', prix: '2 000€ - 3 500€' },
  { type: 'Masterclass', duree: '1-2 jours', prix: '1 500€ - 2 500€' },
]

const faqs = [
  {
    question: 'La formation tricopigmentation est-elle différente du maquillage permanent ?',
    answer: 'Oui, la tricopigmentation est une spécialisation distincte. Elle utilise des pigments et techniques spécifiques au cuir chevelu. Vous pouvez vous former directement à la tricopigmentation sans passer par le maquillage permanent classique.',
  },
  {
    question: 'Quel est le marché de la tricopigmentation ?',
    answer: 'Le marché est en forte croissance, notamment chez les hommes (calvitie). Moins de praticiens formés que pour les sourcils, donc moins de concurrence. Les tarifs de prestation sont élevés (2 000€ - 5 000€).',
  },
  {
    question: 'Faut-il la formation hygiène pour la tricopigmentation ?',
    answer: 'Oui, la formation hygiène et salubrité de 21h est obligatoire, comme pour tout acte de dermopigmentation. Elle doit être suivie avant ou en même temps que la formation technique.',
  },
]

const relatedArticles = [
  { title: 'Tricopigmentation', slug: '/cheveux/tricopigmentation', excerpt: 'La technique', image: '/placeholder-hair.svg', category: 'Technique' },
  { title: 'Formation dermopigmentation', slug: '/formations/dermopigmentation', excerpt: 'Vue complète', image: '/placeholder-formation.svg', category: 'Formation' },
  { title: 'Prix tricopigmentation', slug: '/cheveux/tricopigmentation/prix', excerpt: 'Tarifs', image: '/placeholder-price.svg', category: 'Prix' },
]

export default function FormationTricopigmentationPage() {
  return (
    <article className="pb-16">
      <section className="relative bg-gradient-to-br from-slate-800 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-slate-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-slate-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: 'Formations', href: '/formations' }, { label: 'Tricopigmentation', href: '/formations/tricopigmentation' }]} variant="dark" />
          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              Spécialisation Capillaire
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">Formation <span className="text-slate-300">Tricopigmentation</span></h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">Devenez expert en micropigmentation du cuir chevelu. Un marché en pleine expansion avec des revenus attractifs.</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-slate-300">4-5</span><p className="text-white/70 text-sm">jours</p></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-slate-300">3 000€</span><p className="text-white/70 text-sm">à partir de</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Programme complet</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {programme.map((mod, i) => (
              <div key={i} className="bg-slate-50 rounded-2xl p-6">
                <div className="flex justify-between mb-2"><h3 className="font-semibold text-charbon">{mod.module}</h3><span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-xs">{mod.duree}</span></div>
                <p className="text-charbon/70 text-sm">{mod.contenu}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Tarifs indicatifs</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {tarifs.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-card text-center">
                <h3 className="font-semibold text-charbon mb-2">{t.type}</h3>
                <span className="text-sm text-charbon/60">{t.duree}</span>
                <p className="text-2xl font-bold text-slate-700 mt-4">{t.prix}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-slate-800 to-slate-700">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">Un marché en croissance</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">La tricopigmentation est moins concurrentielle que les sourcils. Positionnez-vous sur ce créneau porteur.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cheveux/tricopigmentation" className="btn bg-white text-slate-800 hover:bg-slate-100">Découvrir la technique</Link>
            <Link href="/formations/hygiene-salubrite" className="btn bg-white/20 text-white hover:bg-white/30">Formation hygiène</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Questions fréquentes" description="Tout sur la formation tricopigmentation" />

      <section className="section-padding bg-beige-creme">
        <div className="container-custom"><div className="max-w-4xl mx-auto"><AuthorBox /><RelatedArticles articles={relatedArticles} /></div></div>
      </section>
    </article>
  )
}
