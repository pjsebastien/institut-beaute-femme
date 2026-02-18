import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'
import FAQ from '@/components/sections/FAQ'
import { BeforeAfterGallery } from '@/components/sections/BeforeAfter'
import RelatedArticles from '@/components/content/RelatedArticles'
import AuthorBox from '@/components/content/AuthorBox'

export const metadata: Metadata = {
  title: 'Candy Lips | Maquillage Permanent Lèvres Effet Naturel',
  description: 'Le candy lips est une technique de maquillage permanent des lèvres qui crée un effet naturel et lumineux. Découvrez les résultats avant/après, la cicatrisation et les prix.',
  keywords: ['candy lips', 'candy lips avant après', 'maquillage permanent lèvres', 'dermopigmentation lèvres'],
  openGraph: {
    title: 'Candy Lips | Maquillage Permanent Lèvres Effet Naturel',
    description: 'Le candy lips crée un effet lèvres mordues naturel et lumineux grâce à un dégradé subtil de couleurs.',
    images: ['https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200'],
  },
}

const faqs = [
  {
    question: 'Qu\'est-ce que le candy lips exactement ?',
    answer: 'Le candy lips est une technique de maquillage permanent des lèvres qui crée un effet dégradé naturel, avec un centre plus clair et des contours plus soutenus. Cette méthode donne l\'illusion de lèvres légèrement mordues, pulpeuses et lumineuses, comme si vous portiez un gloss léger en permanence.',
  },
  {
    question: 'Combien de temps dure un candy lips ?',
    answer: 'Le candy lips dure généralement entre 1 et 3 ans selon votre type de peau, votre mode de vie, votre alimentation et l\'exposition au soleil. Une retouche annuelle est recommandée pour maintenir l\'intensité et la fraîcheur des couleurs.',
  },
  {
    question: 'Le candy lips fait-il mal ?',
    answer: 'Les lèvres sont une zone sensible, mais une crème anesthésiante est appliquée avant le traitement pour minimiser l\'inconfort. La plupart des clientes décrivent la sensation comme un picotement supportable. La douleur varie selon la sensibilité individuelle.',
  },
  {
    question: 'Quelle est la différence entre candy lips et full lips ?',
    answer: 'Le candy lips crée un effet dégradé naturel avec un centre plus clair, tandis que le full lips colore l\'ensemble de la lèvre de manière uniforme et plus intense. Le candy lips offre un résultat plus naturel, le full lips un effet plus maquillé.',
  },
  {
    question: 'Peut-on choisir sa couleur de candy lips ?',
    answer: 'Absolument. La couleur est personnalisée en fonction de votre carnation naturelle, de la couleur de vos lèvres et de vos préférences. Le praticien peut mélanger plusieurs teintes pour créer la nuance parfaite, du nude rosé au rose plus soutenu.',
  },
  {
    question: 'Comment se passe la cicatrisation ?',
    answer: 'Les lèvres gonflent légèrement les premiers jours et la couleur apparaît très intense. Des croûtes fines se forment puis tombent naturellement en 5 à 10 jours. La couleur définitive apparaît après 4 à 6 semaines. Une retouche est prévue à ce moment.',
  },
]

const beforeAfterImages = [
  {
    before: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600',
    after: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=600',
    description: 'Ravivage de la couleur et définition du contour',
  },
  {
    before: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=600',
    after: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=600',
    description: 'Effet lèvres mordues naturel et lumineux',
  },
]

const relatedArticles = [
  {
    title: 'Cicatrisation candy lips',
    slug: '/levres/candy-lips/cicatrisation',
    excerpt: 'Le processus jour par jour',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400',
    category: 'Post-soin',
  },
  {
    title: 'Maquillage permanent lèvres',
    slug: '/levres/maquillage-permanent',
    excerpt: 'Toutes les techniques',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=400',
    category: 'Technique',
  },
  {
    title: 'Maquillage permanent raté',
    slug: '/levres/maquillage-permanent/rate',
    excerpt: 'Solutions et corrections',
    image: 'https://images.unsplash.com/photo-1594359123637-32fcb7aab042?w=400',
    category: 'Correction',
  },
]

export default function CandyLipsPage() {
  return (
    <article className="pb-16">
      {/* Hero */}
      <section className="bg-gradient-hero py-12 md:py-20">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Lèvres', href: '/levres' },
              { label: 'Candy Lips', href: '/levres/candy-lips' },
            ]}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center mt-8">
            <div>
              <span className="badge-rose mb-4">Tendance</span>
              <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charbon mb-6">
                Candy Lips : Des lèvres sublimes au naturel
              </h1>
              <p className="text-xl text-charbon/70 mb-8">
                Le candy lips révolutionne le maquillage permanent des lèvres avec son effet
                naturellement lumineux et son dégradé subtil. Découvrez cette technique plébiscitée
                qui redonne éclat et définition à vos lèvres.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/boutique" className="btn-primary">
                  Soins post-traitement
                </Link>
                <Link href="/levres/candy-lips/cicatrisation" className="btn-secondary">
                  La cicatrisation
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-hover">
              <Image
                src="https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200"
                alt="Résultat candy lips naturel et lumineux"
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
              <h2 id="definition">Le candy lips, qu&apos;est-ce que c&apos;est ?</h2>
              <p>
                Le <strong>candy lips</strong> est une technique de maquillage permanent des lèvres
                qui a conquis le monde de la beauté par son rendu naturel et lumineux. Contrairement
                aux techniques traditionnelles qui colorent uniformément la lèvre, le candy lips
                crée un <strong>effet dégradé</strong> sophistiqué : le centre de la lèvre reste
                plus clair tandis que les contours sont légèrement plus soutenus.
              </p>
              <p>
                Cette technique, développée par Maud Ravier, utilise généralement 2 à 3 teintes
                de pigments pour créer un effet de profondeur et de volume. Le résultat ? Des lèvres
                qui semblent naturellement colorées, comme si vous veniez de les mordiller légèrement.
              </p>

              <h2 id="avantages">Les avantages du candy lips</h2>
              <p>
                Le candy lips offre de nombreux bénéfices qui expliquent son immense popularité :
              </p>
              <ul>
                <li><strong>Effet naturel</strong> : le dégradé crée un rendu subtil et non artificiel</li>
                <li><strong>Ravive la couleur</strong> : redonne vie aux lèvres pâles ou ternes</li>
                <li><strong>Définit le contour</strong> : restructure une bouche aux contours flous</li>
                <li><strong>Effet repulpant</strong> : l&apos;illusion d&apos;optique donne du volume</li>
                <li><strong>Gain de temps</strong> : plus besoin de rouge à lèvres quotidien</li>
                <li><strong>Longue tenue</strong> : résiste à l&apos;eau, aux repas et aux baisers</li>
                <li><strong>Corrige les asymétries</strong> : harmonise la forme des lèvres</li>
              </ul>

              <h2 id="candidats">Pour qui est le candy lips ?</h2>
              <p>
                Le candy lips convient à la grande majorité des personnes souhaitant sublimer leurs lèvres :
              </p>
              <ul>
                <li>Les lèvres naturellement pâles manquant de couleur</li>
                <li>Les lèvres ayant perdu leur définition avec l&apos;âge</li>
                <li>Les contours de lèvres flous ou asymétriques</li>
                <li>Les lèvres présentant des taches ou une pigmentation irrégulière</li>
                <li>Les femmes souhaitant simplifier leur routine maquillage</li>
                <li>Les personnes allergiques aux rouges à lèvres traditionnels</li>
              </ul>
              <p>
                Certaines contre-indications existent : grossesse, allaitement, herpès actif,
                traitement anticoagulant, maladies auto-immunes non stabilisées. Une consultation
                préalable permet de vérifier votre éligibilité.
              </p>

              <h2 id="deroulement">Comment se déroule une séance ?</h2>
              <p>
                Une séance de candy lips dure environ 2 à 3 heures et se déroule en plusieurs étapes :
              </p>

              <h3>1. La consultation et le choix des couleurs</h3>
              <p>
                Le praticien étudie la forme de vos lèvres, votre carnation et vos souhaits.
                Ensemble, vous définissez les teintes qui composeront votre candy lips :
                généralement une teinte claire pour le centre et une ou deux teintes plus
                soutenues pour les contours.
              </p>

              <h3>2. Le dessin préparatoire</h3>
              <p>
                La forme des lèvres est dessinée au crayon pour visualiser le résultat.
                Cette étape est cruciale pour valider les proportions et la symétrie.
                N&apos;hésitez pas à demander des ajustements jusqu&apos;à obtenir le dessin idéal.
              </p>

              <h3>3. L&apos;application de l&apos;anesthésiant</h3>
              <p>
                Une crème anesthésiante est appliquée et laissée agir 20 à 30 minutes.
                Des retouches d&apos;anesthésiant peuvent être faites pendant la séance si nécessaire.
              </p>

              <h3>4. La pigmentation</h3>
              <p>
                Le praticien procède à l&apos;implantation des pigments en commençant par le contour
                puis en travaillant vers l&apos;intérieur pour créer le dégradé caractéristique.
                Plusieurs passages sont nécessaires pour obtenir l&apos;intensité souhaitée.
              </p>

              <h2 id="cicatrisation">La cicatrisation du candy lips</h2>
              <p>
                La cicatrisation est une étape importante qui se déroule sur plusieurs semaines :
              </p>
              <ul>
                <li><strong>Jours 1-3</strong> : gonflement modéré, couleur très intense</li>
                <li><strong>Jours 4-7</strong> : formation de croûtes fines, sensation de tiraillement</li>
                <li><strong>Jours 7-14</strong> : les croûtes tombent, la couleur semble disparaître</li>
                <li><strong>Semaines 3-6</strong> : la couleur remonte progressivement</li>
              </ul>
              <p>
                Une retouche est programmée 4 à 6 semaines après la première séance pour
                parfaire le résultat et ajuster l&apos;intensité si nécessaire.
              </p>

              <h2 id="soins">Les soins post-candy lips</h2>
              <p>
                Pour optimiser la cicatrisation et la tenue des pigments :
              </p>
              <ul>
                <li>Appliquer le baume cicatrisant fourni régulièrement</li>
                <li>Éviter de mouiller les lèvres pendant 5 jours</li>
                <li>Ne pas manger d&apos;aliments chauds, épicés ou acides</li>
                <li>Utiliser une paille pour boire</li>
                <li>Ne pas arracher les croûtes</li>
                <li>Éviter le maquillage sur les lèvres pendant 2 semaines</li>
                <li>Protéger du soleil</li>
              </ul>

              <h2 id="prix">Quel est le prix d&apos;un candy lips ?</h2>
              <p>
                Les tarifs du candy lips varient selon le praticien et la région :
              </p>
              <ul>
                <li><strong>Séance complète</strong> (avec retouche) : 300€ à 600€</li>
                <li><strong>Retouche annuelle</strong> : 150€ à 250€</li>
              </ul>

              <blockquote>
                &ldquo;Le candy lips a transformé mon quotidien. Je me réveille chaque matin
                avec des lèvres parfaitement colorées et définies. Plus besoin de retoucher
                mon rouge à lèvres après chaque repas !&rdquo;
                <cite>— Camille, 41 ans</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <BeforeAfterGallery
        items={beforeAfterImages}
        title="Résultats avant/après candy lips"
        description="Découvrez les transformations obtenues grâce au candy lips"
      />

      {/* Products CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-rose rounded-3xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-playfair font-semibold mb-4">
              Prenez soin de vos lèvres
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Notre baume réparateur post-pigmentation nourrit intensément vos lèvres
              et optimise la cicatrisation pour un résultat parfait.
            </p>
            <Link href="/boutique" className="btn bg-white text-rose-fonce hover:bg-beige-creme">
              Découvrir nos soins
            </Link>
          </div>
        </div>
      </section>

      <FAQ
        items={faqs}
        title="Questions fréquentes sur le candy lips"
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
