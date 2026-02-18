'use client'

import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const dispositifs = [
  {
    nom: 'CPF (Compte Personnel de Formation)',
    description: 'Utilisez vos droits à la formation acquis pendant votre activité',
    montant: 'Jusqu\'à 5 000€ (ou plus avec abondements)',
    conditions: ['Formation certifiante RNCP', 'Organisme Qualiopi', 'Droits disponibles sur votre compte'],
    demarches: 'Connexion sur moncompteformation.gouv.fr',
  },
  {
    nom: 'Aide Individuelle à la Formation (AIF)',
    description: 'Pôle Emploi finance tout ou partie de votre formation',
    montant: 'Variable selon le projet (3 000€ - 8 000€ en moyenne)',
    conditions: ['Être inscrit à Pôle Emploi', 'Formation validée par conseiller', 'Projet professionnel cohérent'],
    demarches: 'Demande via votre conseiller Pôle Emploi',
  },
  {
    nom: 'OPCO (pour les salariés)',
    description: 'Financement par votre employeur via l\'OPCO',
    montant: 'Selon les accords de branche',
    conditions: ['Être salarié(e)', 'Accord de l\'employeur', 'Formation en lien avec le poste ou reconversion'],
    demarches: 'Demande RH puis montage du dossier',
  },
  {
    nom: 'Aides régionales',
    description: 'Certaines régions proposent des aides spécifiques',
    montant: 'Variable selon la région',
    conditions: ['Résider dans la région', 'Critères spécifiques selon région'],
    demarches: 'Contacter le Conseil Régional',
  },
]

const etapesPoleEmploi = [
  { etape: 1, titre: 'Définir votre projet', description: 'Clarifiez votre projet de reconversion avec votre conseiller' },
  { etape: 2, titre: 'Trouver une formation', description: 'Identifiez un organisme éligible (Qualiopi recommandé)' },
  { etape: 3, titre: 'Obtenir un devis', description: 'Demandez un devis détaillé à l\'organisme' },
  { etape: 4, titre: 'Faire la demande AIF', description: 'Soumettez la demande via Pôle Emploi' },
  { etape: 5, titre: 'Attendre la validation', description: 'Délai moyen : 2-4 semaines' },
  { etape: 6, titre: 'Démarrer la formation', description: 'Une fois accepté, démarrez votre formation' },
]

const faqs = [
  {
    question: 'Puis-je utiliser mon CPF pour une formation microblading ?',
    answer: 'Oui, si la formation est éligible CPF (inscrite au RNCP et dispensée par un organisme Qualiopi). Vérifiez sur moncompteformation.gouv.fr. Attention, toutes les formations ne sont pas éligibles.',
  },
  {
    question: 'Pôle Emploi finance-t-il les formations en maquillage permanent ?',
    answer: 'Oui, via l\'AIF (Aide Individuelle à la Formation). Le financement dépend de votre projet professionnel, de sa cohérence et des fonds disponibles. Présentez un projet solide à votre conseiller.',
  },
  {
    question: 'Puis-je cumuler plusieurs aides ?',
    answer: 'Parfois oui. Par exemple, CPF + AIF (Pôle Emploi complète le reste à charge). Ou CPF + aide régionale. Renseignez-vous sur les possibilités de cumul auprès de chaque organisme.',
  },
  {
    question: 'Suis-je rémunéré(e) pendant la formation ?',
    answer: 'Si vous êtes demandeur d\'emploi, vous pouvez continuer à percevoir vos allocations pendant une formation conventionnée. Pour les formations AIF, vérifiez avec votre conseiller.',
  },
  {
    question: 'Que faire si ma demande est refusée ?',
    answer: 'Vous pouvez : demander les raisons du refus, améliorer votre dossier et redemander, explorer d\'autres financements (CPF, région), ou envisager un financement personnel avec facilités de paiement.',
  },
]

const relatedArticles = [
  { title: 'Formation microblading', slug: '/formations/microblading', excerpt: 'Sourcils', image: '/placeholder-formation.svg', category: 'Formation' },
  { title: 'Formation maquillage permanent', slug: '/formations/maquillage-permanent', excerpt: 'Complète', image: '/placeholder-formation.svg', category: 'Formation' },
  { title: 'Formation hygiène', slug: '/formations/hygiene-salubrite', excerpt: 'Obligatoire', image: '/placeholder-hygiene.svg', category: 'Formation' },
]

export default function FinancementPoleEmploiPage() {
  return (
    <article className="pb-16">
      <section className="relative bg-gradient-to-br from-blue-800 via-charbon to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-400 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />
        <div className="container-custom relative z-10">
          <Breadcrumb items={[{ label: 'Formations', href: '/formations' }, { label: 'Financement Pôle Emploi', href: '/formations/financement-pole-emploi' }]} variant="dark" />
          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              Financement
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">Financement <span className="text-blue-300">Pôle Emploi & CPF</span></h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">Découvrez toutes les aides pour financer votre formation en maquillage permanent. Ne payez pas (ou moins) de votre poche !</p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-blue-300">5 000€</span><p className="text-white/70 text-sm">CPF max</p></div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center"><span className="text-2xl font-bold text-blue-300">100%</span><p className="text-white/70 text-sm">possible</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Les dispositifs de financement</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {dispositifs.map((d, i) => (
              <div key={i} className="bg-blue-50 rounded-2xl p-6">
                <h3 className="font-semibold text-charbon text-lg mb-2">{d.nom}</h3>
                <p className="text-charbon/70 text-sm mb-4">{d.description}</p>
                <div className="bg-white rounded-lg p-3 mb-4">
                  <span className="text-xs text-charbon/60 uppercase">Montant</span>
                  <p className="font-semibold text-blue-600">{d.montant}</p>
                </div>
                <div className="mb-4">
                  <span className="text-xs text-charbon/60 uppercase">Conditions</span>
                  <ul className="mt-1 space-y-1">
                    {d.conditions.map((c, j) => (
                      <li key={j} className="text-sm text-charbon/70 flex items-start gap-2">
                        <span className="w-1 h-1 bg-blue-500 rounded-full mt-2"></span>{c}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs text-blue-600 bg-blue-100 rounded-lg p-2">Démarches : {d.demarches}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <h2 className="text-3xl font-playfair font-bold text-charbon mb-8 text-center">Étapes pour l'AIF Pôle Emploi</h2>
          <div className="max-w-3xl mx-auto">
            {etapesPoleEmploi.map((e, i) => (
              <div key={i} className="flex gap-4 mb-4 last:mb-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold flex-shrink-0">{e.etape}</div>
                <div className="bg-white rounded-xl p-4 flex-grow shadow-sm">
                  <h3 className="font-semibold text-charbon">{e.titre}</h3>
                  <p className="text-charbon/70 text-sm">{e.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-blue-700 to-blue-600">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">Ne laissez pas le coût vous arrêter</h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">Des solutions de financement existent. Renseignez-vous et lancez-vous !</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/formations/microblading" className="btn bg-white text-blue-700 hover:bg-blue-50">Formation microblading</Link>
            <Link href="/formations/maquillage-permanent" className="btn bg-white/20 text-white hover:bg-white/30">Formation complète</Link>
          </div>
        </div>
      </section>

      <FAQ items={faqs} title="Questions fréquentes" description="Tout sur le financement" />

      <section className="section-padding bg-beige-creme">
        <div className="container-custom"><div className="max-w-4xl mx-auto"><AuthorBox /><RelatedArticles articles={relatedArticles} /></div></div>
      </section>
    </article>
  )
}
