'use client'

import { useState } from 'react'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

const techniques = [
  {
    id: 'candy-lips',
    nom: 'Candy Lips',
    description: 'Effet lèvres mordues naturel avec dégradé du centre vers les contours',
    effet: 'Naturel et lumineux',
    ideal: 'Quotidien, tous les âges',
    duree: '1 à 3 ans',
    icon: '🍬',
  },
  {
    id: 'full-lips',
    nom: 'Full Lips',
    description: 'Coloration uniforme et intense de toute la lèvre',
    effet: 'Maquillé, sophistiqué',
    ideal: 'Look glamour',
    duree: '2 à 4 ans',
    icon: '💋',
  },
  {
    id: 'contour',
    nom: 'Contour seul',
    description: 'Redéfinition du contour sans remplissage',
    effet: 'Subtil, restructurant',
    ideal: 'Contours flous ou asymétriques',
    duree: '1 à 2 ans',
    icon: '✏️',
  },
  {
    id: 'aquarelle',
    nom: 'Lèvres Aquarelle',
    description: 'Effet très léger et transparent, couleur voilée',
    effet: 'Ultra naturel',
    ideal: 'Peaux sensibles, premier maquillage permanent',
    duree: '1 à 2 ans',
    icon: '🎨',
  },
]

const avantages = [
  { titre: 'Gain de temps', description: 'Plus besoin de retoucher son rouge à lèvres', icon: '⏱️' },
  { titre: 'Tenue parfaite', description: 'Résiste aux repas, baisers et activités', icon: '💪' },
  { titre: 'Couleur naturelle', description: 'Ravive les lèvres pâles ou ternes', icon: '🌸' },
  { titre: 'Symétrie', description: 'Corrige les asymétries et contours flous', icon: '⚖️' },
  { titre: 'Effet repulpant', description: 'L\'illusion d\'optique donne du volume', icon: '✨' },
  { titre: 'Longue durée', description: '1 à 4 ans selon la technique', icon: '📅' },
]

const processus = [
  { etape: 1, titre: 'Consultation', description: 'Discussion des attentes, choix de la technique et des couleurs', duree: '30 min' },
  { etape: 2, titre: 'Dessin', description: 'Tracé de la forme au crayon, validation avec la cliente', duree: '15 min' },
  { etape: 3, titre: 'Anesthésie', description: 'Application de la crème anesthésiante', duree: '20 min' },
  { etape: 4, titre: 'Pigmentation', description: 'Implantation des pigments avec le dermographe', duree: '60-90 min' },
  { etape: 5, titre: 'Finitions', description: 'Application du soin post-traitement', duree: '10 min' },
]

const faqs = [
  {
    question: 'Le maquillage permanent des lèvres fait-il mal ?',
    answer: 'Les lèvres sont une zone sensible, mais une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. La plupart des clientes décrivent une sensation de picotement ou de vibration supportable. La douleur varie selon la sensibilité individuelle.',
  },
  {
    question: 'Combien de temps dure le maquillage permanent des lèvres ?',
    answer: 'La durée varie selon la technique : le contour seul dure 1-2 ans, le candy lips 1-3 ans, et le full lips 2-4 ans. La durée dépend aussi de votre type de peau, votre alimentation, votre exposition au soleil et vos soins. Des retouches sont recommandées pour maintenir l\'intensité.',
  },
  {
    question: 'Peut-on manger et boire après la séance ?',
    answer: 'Oui, mais avec précautions pendant la cicatrisation (7-10 jours) : utilisez une paille pour boire, évitez les aliments chauds, épicés et acides, ne léchez pas vos lèvres, et appliquez la crème cicatrisante après chaque repas.',
  },
  {
    question: 'Quelle technique choisir pour un résultat naturel ?',
    answer: 'Le candy lips est la technique la plus naturelle car elle crée un effet dégradé qui imite parfaitement des lèvres naturellement colorées. Les lèvres aquarelle sont encore plus discrètes. Le full lips donne un effet plus maquillé.',
  },
  {
    question: 'Y a-t-il des contre-indications ?',
    answer: 'Les principales contre-indications sont : grossesse et allaitement, herpès actif (traitement préventif possible), diabète non stabilisé, maladies auto-immunes, traitement anticoagulant, et allergies aux pigments. Une consultation préalable permet de vérifier votre éligibilité.',
  },
  {
    question: 'Quel est le prix du maquillage permanent des lèvres ?',
    answer: 'Les prix varient selon la technique et le praticien : contour seul 200€-350€, candy lips 300€-500€, full lips 350€-600€. Ces prix incluent généralement la retouche de perfectionnement à 4-6 semaines.',
  },
]

const relatedArticles = [
  {
    title: 'Candy Lips',
    slug: '/levres/candy-lips',
    excerpt: 'L\'effet lèvres mordues naturel',
    image: '/placeholder-lips.svg',
    category: 'Technique',
  },
  {
    title: 'Cicatrisation lèvres',
    slug: '/levres/maquillage-permanent/cicatrisation',
    excerpt: 'Le processus jour par jour',
    image: '/placeholder-healing.svg',
    category: 'Post-soin',
  },
  {
    title: 'Maquillage raté',
    slug: '/levres/maquillage-permanent/rate',
    excerpt: 'Solutions de correction',
    image: '/placeholder-fix.svg',
    category: 'Correction',
  },
]

export default function MaquillagePermanentLevresPage() {
  const [activeTechnique, setActiveTechnique] = useState('candy-lips')
  const techniqueActive = techniques.find(t => t.id === activeTechnique)

  return (
    <article className="pb-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-charbon via-rose-fonce/40 to-charbon py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-rose-poudre rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-or-rose rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 hero-overlay" />

        <div className="container-custom relative z-10">
          <Breadcrumb
            items={[
              { label: 'Lèvres', href: '/levres' },
              { label: 'Maquillage permanent', href: '/levres/maquillage-permanent' },
            ]}
            variant="dark"
          />

          <div className="max-w-4xl mt-8">
            <span className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-white/20">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Guide Complet
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-hero">
              Maquillage Permanent <span className="text-rose-poudre">Lèvres</span>
            </h1>
            <p className="text-xl text-white mb-8 leading-relaxed text-shadow-sm">
              Des lèvres parfaitement colorées et définies, 24h/24. Découvrez les techniques
              de dermopigmentation des lèvres pour un résultat naturel ou sophistiqué.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/levres/candy-lips" className="btn-primary">
                Découvrir le Candy Lips
              </Link>
              <Link href="#techniques" className="btn bg-white/10 text-white hover:bg-white/20">
                Les techniques
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Pourquoi choisir le maquillage permanent des lèvres ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-gradient-to-br from-rose-pale/30 to-white rounded-2xl p-6 text-center">
                <span className="text-4xl mb-4 block">{avantage.icon}</span>
                <h3 className="font-semibold text-charbon mb-2">{avantage.titre}</h3>
                <p className="text-charbon/70 text-sm">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques */}
      <section id="techniques" className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Les techniques de maquillage permanent
            </h2>
            <p className="text-lg text-charbon/70 max-w-2xl mx-auto">
              Choisissez la technique adaptée à vos attentes
            </p>
          </div>

          {/* Technique Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {techniques.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTechnique(tech.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition-all ${
                  activeTechnique === tech.id
                    ? 'bg-rose-fonce text-white shadow-lg'
                    : 'bg-white text-charbon hover:bg-rose-pale shadow-card'
                }`}
              >
                <span className="text-xl">{tech.icon}</span>
                {tech.nom}
              </button>
            ))}
          </div>

          {/* Active Technique */}
          {techniqueActive && (
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl">{techniqueActive.icon}</span>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-charbon">{techniqueActive.nom}</h3>
                  <p className="text-charbon/70">{techniqueActive.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-rose-pale/30 rounded-xl p-4 text-center">
                  <span className="text-charbon/60 text-sm">Effet</span>
                  <p className="font-medium text-charbon">{techniqueActive.effet}</p>
                </div>
                <div className="bg-rose-pale/30 rounded-xl p-4 text-center">
                  <span className="text-charbon/60 text-sm">Idéal pour</span>
                  <p className="font-medium text-charbon">{techniqueActive.ideal}</p>
                </div>
                <div className="bg-rose-pale/30 rounded-xl p-4 text-center">
                  <span className="text-charbon/60 text-sm">Durée</span>
                  <p className="font-medium text-rose-fonce">{techniqueActive.duree}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-charbon mb-4">
              Comment se déroule une séance ?
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-rose-poudre transform md:-translate-x-0.5" />

              <div className="space-y-8">
                {processus.map((etape, index) => (
                  <div key={index} className={`relative flex items-center gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="w-12 h-12 bg-rose-fonce rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0 z-10">
                      {etape.etape}
                    </div>
                    <div className={`flex-1 bg-beige-creme rounded-2xl p-6 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-charbon text-lg">{etape.titre}</h3>
                        <span className="text-sm text-charbon/50">{etape.duree}</span>
                      </div>
                      <p className="text-charbon/70">{etape.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-rose-fonce to-or-rose">
        <div className="container-custom text-center text-white">
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Prête pour des lèvres parfaites ?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Découvrez notre technique phare, le Candy Lips, pour un effet naturel et lumineux.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/levres/candy-lips" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Candy Lips
            </Link>
            <Link href="/boutique" className="btn bg-white/20 text-white hover:bg-white/30">
              Soins post-traitement
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={faqs}
        title="Questions fréquentes"
        description="Tout ce que vous devez savoir"
      />

      {/* Author & Related */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <AuthorBox />
            <RelatedArticles articles={relatedArticles} />
          </div>
        </div>
      </section>
    </article>
  )
}
