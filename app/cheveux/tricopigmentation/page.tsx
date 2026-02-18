import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

export const metadata: Metadata = {
  title: 'Tricopigmentation | Solution Micropigmentation Capillaire',
  description: 'La tricopigmentation est une technique de micropigmentation du cuir chevelu pour masquer la calvitie et densifier les cheveux. Découvrez les résultats, prix et avis.',
  keywords: ['tricopigmentation', 'micropigmentation capillaire', 'calvitie', 'perte de cheveux', 'dermopigmentation cheveux'],
  openGraph: {
    title: 'Tricopigmentation | Solution Micropigmentation Capillaire',
    description: 'La tricopigmentation crée l\'illusion d\'une chevelure dense pour masquer la calvitie de manière naturelle.',
    images: ['https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200'],
  },
}

const faqs = [
  {
    question: 'Qu\'est-ce que la tricopigmentation ?',
    answer: 'La tricopigmentation est une technique de micropigmentation du cuir chevelu qui consiste à implanter des pigments dans le derme pour créer l\'illusion de cheveux rasés de près ou pour densifier visuellement une chevelure clairsemée. Elle convient aux hommes et aux femmes confrontés à une perte de cheveux.',
  },
  {
    question: 'La tricopigmentation est-elle définitive ?',
    answer: 'Non, la tricopigmentation est semi-permanente et dure généralement entre 12 et 24 mois. Les pigments utilisés sont conçus pour s\'estomper progressivement, ce qui permet d\'adapter le résultat à l\'évolution de votre calvitie. Des retouches annuelles maintiennent le résultat.',
  },
  {
    question: 'Combien coûte une tricopigmentation ?',
    answer: 'Le prix varie entre 400€ et 3500€ selon l\'étendue de la zone à traiter. Un traitement complet crâne rasé coûte environ 1600€ par séance (2-3 séances nécessaires). Le camouflage de cicatrices se situe entre 300€ et 1000€.',
  },
  {
    question: 'Combien de séances sont nécessaires ?',
    answer: 'En général, 2 à 3 séances espacées de 2 à 4 semaines sont nécessaires pour obtenir un résultat optimal. La première séance pose les bases, les suivantes ajustent la densité et corrigent les éventuelles irrégularités.',
  },
  {
    question: 'La tricopigmentation fait-elle mal ?',
    answer: 'La douleur est généralement légère et supportable. Le cuir chevelu est moins sensible que d\'autres zones du visage. Une crème anesthésiante peut être appliquée pour les personnes plus sensibles. La sensation est comparable à de légers picotements.',
  },
  {
    question: 'Le résultat est-il vraiment naturel ?',
    answer: 'Oui, lorsqu\'elle est réalisée par un praticien expérimenté. Les pigments sont implantés en points de différentes tailles et densités pour imiter parfaitement les follicules pileux. Le résultat est indétectable à l\'œil nu.',
  },
]

const relatedArticles = [
  {
    title: 'Prix tricopigmentation',
    slug: '/cheveux/tricopigmentation/prix',
    excerpt: 'Tous les tarifs détaillés',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400',
    category: 'Prix',
  },
  {
    title: 'Dermopigmentation cheveux',
    slug: '/cheveux/dermopigmentation',
    excerpt: 'Alternative à la greffe',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400',
    category: 'Technique',
  },
  {
    title: 'Cicatrice cuir chevelu',
    slug: '/cheveux/cicatrice-cuir-chevelu',
    excerpt: 'Solutions de camouflage',
    image: 'https://images.unsplash.com/photo-1612004387350-0588e3f5f0cd?w=400',
    category: 'Correction',
  },
]

export default function TricopigmentationPage() {
  return (
    <article className="pb-16">
      {/* Hero */}
      <section className="bg-gradient-hero py-12 md:py-20">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Cheveux', href: '/cheveux' },
              { label: 'Tricopigmentation', href: '/cheveux/tricopigmentation' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="badge-rose mb-4">Solution capillaire</span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charbon mb-6">
                Tricopigmentation : Retrouvez l&apos;apparence d&apos;une chevelure dense
              </h1>
              <p className="text-xl text-charbon/70 mb-8">
                La tricopigmentation offre une solution efficace et non chirurgicale pour masquer
                la calvitie, densifier les cheveux clairsemés ou camoufler les cicatrices du cuir chevelu.
                Un résultat naturel et immédiat qui redonne confiance.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/cheveux/tricopigmentation/prix" className="btn-primary">
                  Voir les prix
                </Link>
                <Link href="/formations/tricopigmentation" className="btn-secondary">
                  Se former
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200"
                alt="Résultat tricopigmentation naturel"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="prose-custom rich-content">
              <h2 id="definition">Qu&apos;est-ce que la tricopigmentation ?</h2>
              <p>
                La <strong>tricopigmentation</strong>, également appelée micropigmentation capillaire
                ou SMP (Scalp Micropigmentation), est une technique de dermopigmentation spécialisée
                pour le cuir chevelu. Elle consiste à implanter des pigments dans les couches
                superficielles de la peau pour créer l&apos;illusion de follicules pileux.
              </p>
              <p>
                Cette technique innovante permet de simuler l&apos;apparence de cheveux fraîchement
                rasés ou de densifier visuellement une chevelure clairsemée. Le résultat est
                saisissant de réalisme lorsque la procédure est réalisée par un praticien expérimenté.
              </p>

              <h2 id="candidats">Pour qui est destinée la tricopigmentation ?</h2>
              <p>
                La tricopigmentation s&apos;adresse à un large public confronté à la perte de cheveux :
              </p>
              <ul>
                <li><strong>Calvitie masculine</strong> (tous stades de l&apos;échelle de Norwood)</li>
                <li><strong>Alopécie féminine</strong> (cheveux clairsemés, raie visible)</li>
                <li><strong>Alopécie areata</strong> (pelade)</li>
                <li><strong>Cicatrices du cuir chevelu</strong> (accidents, chirurgies, greffes)</li>
                <li><strong>Post-greffe de cheveux</strong> (densification, camouflage de la zone donneuse)</li>
                <li><strong>Trichotillomanie</strong> (après stabilisation)</li>
              </ul>

              <h2 id="techniques">Les différentes techniques</h2>

              <h3>Effet crâne rasé (Shaved Head Look)</h3>
              <p>
                Idéale pour les hommes avec une calvitie avancée, cette technique recrée l&apos;apparence
                d&apos;un crâne fraîchement rasé avec une densité uniforme. Le praticien travaille sur
                l&apos;ensemble du cuir chevelu pour un résultat cohérent.
              </p>

              <h3>Densification capillaire</h3>
              <p>
                Pour les personnes ayant encore des cheveux mais souhaitant camoufler des zones
                clairsemées. Les pigments sont implantés entre les cheveux existants pour créer
                une illusion de densité accrue.
              </p>

              <h3>Camouflage de cicatrices</h3>
              <p>
                Les cicatrices du cuir chevelu (accidents, greffes FUT, chirurgies) peuvent être
                efficacement camouflées en repigmentant la zone pour uniformiser l&apos;apparence.
              </p>

              <h2 id="deroulement">Comment se déroule le traitement ?</h2>
              <p>
                Le traitement de tricopigmentation se déroule généralement en plusieurs séances :
              </p>

              <h3>Première séance : Les bases</h3>
              <p>
                Après consultation, le praticien définit la ligne frontale et la zone à traiter.
                La première séance pose les bases du traitement avec une densité modérée pour
                évaluer la réaction de la peau et la prise des pigments.
              </p>

              <h3>Deuxième séance : La densification</h3>
              <p>
                Environ 2 à 4 semaines plus tard, la deuxième séance permet d&apos;augmenter
                la densité et de parfaire le résultat. Le praticien ajuste les zones qui
                ont moins bien pris les pigments.
              </p>

              <h3>Troisième séance (si nécessaire)</h3>
              <p>
                Certains patients nécessitent une troisième séance pour obtenir la densité
                optimale, particulièrement pour les traitements crâne rasé complets.
              </p>

              <h2 id="resultats">Les résultats</h2>
              <p>
                Les résultats de la tricopigmentation sont :
              </p>
              <ul>
                <li><strong>Immédiats</strong> : le changement est visible dès la première séance</li>
                <li><strong>Naturels</strong> : indétectables à distance normale</li>
                <li><strong>Durables</strong> : 12 à 24 mois avant estompage</li>
                <li><strong>Évolutifs</strong> : adaptables à l&apos;évolution de la calvitie</li>
              </ul>

              <h2 id="avantages">Avantages vs Greffe de cheveux</h2>
              <p>
                La tricopigmentation présente plusieurs avantages par rapport à la greffe :
              </p>
              <ul>
                <li><strong>Non chirurgicale</strong> : aucune incision, pas d&apos;anesthésie générale</li>
                <li><strong>Résultat immédiat</strong> : pas de période de repousse à attendre</li>
                <li><strong>Coût inférieur</strong> : 3 à 5 fois moins cher qu&apos;une greffe</li>
                <li><strong>Récupération rapide</strong> : retour aux activités sous 24-48h</li>
                <li><strong>Réversible</strong> : les pigments s&apos;estompent naturellement</li>
                <li><strong>Complémentaire</strong> : peut être combinée à une greffe</li>
              </ul>

              <blockquote>
                &ldquo;La tricopigmentation a changé ma vie. Après des années à porter des casquettes
                pour cacher ma calvitie, j&apos;ai enfin retrouvé confiance en moi. Le résultat est
                tellement naturel que personne ne remarque que ce ne sont pas mes vrais cheveux.&rdquo;
                <cite>— Thomas, 38 ans</cite>
              </blockquote>

              <h2 id="entretien">Entretien et retouches</h2>
              <p>
                Pour maintenir un résultat optimal :
              </p>
              <ul>
                <li>Protégez le cuir chevelu du soleil (crème solaire, chapeau)</li>
                <li>Évitez les exfoliants agressifs sur la zone traitée</li>
                <li>Hydratez régulièrement le cuir chevelu</li>
                <li>Prévoyez une retouche annuelle pour maintenir l&apos;intensité</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-beige-creme">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '2-3', label: 'Séances nécessaires' },
              { value: '12-24', label: 'Mois de durée' },
              { value: '95%', label: 'Satisfaction' },
              { value: '48h', label: 'Récupération' },
            ].map((stat, index) => (
              <div key={index}>
                <span className="text-4xl font-playfair font-bold text-rose-fonce">
                  {stat.value}
                </span>
                <p className="text-charbon/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur la tricopigmentation"
        description="Tout ce que vous devez savoir avant de vous lancer"
      />

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
