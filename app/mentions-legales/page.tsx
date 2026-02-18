import { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Mentions Légales | Institut Beauté Femme',
  description: 'Mentions légales du site institutbeautedefemme.fr - Informations sur l\'éditeur, l\'hébergeur et les conditions d\'utilisation.',
}

export default function MentionsLegalesPage() {
  return (
    <article className="py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Mentions légales', href: '/mentions-legales' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charbon mb-8">
            Mentions Légales
          </h1>

          <div className="prose-custom rich-content">
            <p className="text-lg text-charbon/70 mb-8">
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site institutbeautedefemme.fr l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
            </p>

            <h2>Éditeur du site</h2>
            <p>
              <strong>Institut Beauté Femme</strong><br />
              SARL au capital de 15 000 €<br />
              RCS Paris B 123 456 789<br />
              SIRET : 123 456 789 00012<br />
              N° TVA Intracommunautaire : FR 12 123456789
            </p>
            <p>
              <strong>Siège social :</strong><br />
              45 Avenue des Champs-Élysées<br />
              75008 Paris, France
            </p>
            <p>
              <strong>Contact :</strong><br />
              Téléphone : 01 23 45 67 89<br />
              Email : contact@institutbeautedefemme.fr
            </p>
            <p>
              <strong>Directrice de la publication :</strong><br />
              Madame Marie Dubois, Gérante
            </p>

            <h2>Hébergeur</h2>
            <p>
              <strong>Vercel Inc.</strong><br />
              340 S Lemon Ave #4133<br />
              Walnut, CA 91789<br />
              États-Unis<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a>
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des éléments constituant ce site (textes, graphismes, logiciels, photographies, images, vidéos, sons, plans, logos, marques, créations et œuvres protégeables diverses, bases de données, etc.) ainsi que le site lui-même, relèvent des législations françaises et internationales sur le droit d&apos;auteur et la propriété intellectuelle.
            </p>
            <p>
              Ces éléments sont la propriété exclusive de l&apos;Institut Beauté Femme. Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle de ces éléments, par quelque procédé que ce soit et sur quelque support que ce soit, est interdite sans l&apos;autorisation écrite préalable de l&apos;Institut Beauté Femme.
            </p>
            <p>
              Toute exploitation non autorisée du site ou de l&apos;un quelconque de ces éléments qu&apos;il contient sera considérée comme constitutive d&apos;une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              L&apos;Institut Beauté Femme s&apos;efforce d&apos;assurer l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu. Toutefois, l&apos;Institut Beauté Femme ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
            </p>
            <p>
              En conséquence, l&apos;Institut Beauté Femme décline toute responsabilité :
            </p>
            <ul>
              <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
              <li>Pour tous dommages, directs et/ou indirects, quelles qu&apos;en soient les causes, origines, nature ou conséquences, provoqués à raison de l&apos;accès de quiconque au site ou de l&apos;impossibilité d&apos;y accéder</li>
              <li>Pour l&apos;utilisation du site et/ou du crédit accordé à une quelconque information provenant directement ou indirectement du site</li>
            </ul>

            <h2>Liens hypertextes</h2>
            <p>
              Le site peut contenir des liens hypertextes vers d&apos;autres sites internet. L&apos;Institut Beauté Femme n&apos;exerce aucun contrôle sur ces sites externes et décline toute responsabilité quant à leur contenu, leurs pratiques ou leurs politiques de confidentialité.
            </p>

            <h2>Données personnelles</h2>
            <p>
              Pour plus d&apos;informations sur le traitement de vos données personnelles, veuillez consulter notre{' '}
              <a href="/politique-confidentialite">Politique de Confidentialité</a>.
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site utilise des cookies pour améliorer l&apos;expérience utilisateur. Pour plus d&apos;informations, consultez notre{' '}
              <a href="/politique-confidentialite#cookies">politique relative aux cookies</a>.
            </p>

            <h2>Droit applicable</h2>
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>Contact</h2>
            <p>
              Pour toute question relative aux présentes mentions légales, vous pouvez nous contacter :
            </p>
            <ul>
              <li>Par email : contact@institutbeautedefemme.fr</li>
              <li>Par téléphone : 01 23 45 67 89</li>
              <li>Par courrier : Institut Beauté Femme - 45 Avenue des Champs-Élysées, 75008 Paris</li>
            </ul>

            <p className="text-sm text-charbon/60 mt-8">
              Dernière mise à jour : Février 2024
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
