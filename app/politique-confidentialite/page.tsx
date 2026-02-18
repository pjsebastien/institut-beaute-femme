import { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Politique de Confidentialité | Institut Beauté Femme',
  description: 'Politique de confidentialité et protection des données personnelles du site institutbeautedefemme.fr',
}

export default function PolitiqueConfidentialitePage() {
  return (
    <article className="py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charbon mb-8">
            Politique de Confidentialité
          </h1>

          <div className="prose-custom rich-content">
            <p className="text-lg text-charbon/70 mb-8">
              L&apos;Institut Beauté Femme accorde une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons et protégeons vos informations.
            </p>

            <h2>1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données est :<br />
              <strong>Institut Beauté Femme</strong><br />
              45 Avenue des Champs-Élysées<br />
              75008 Paris, France<br />
              Email : dpo@institutbeautedefemme.fr
            </p>

            <h2>2. Données collectées</h2>
            <p>Nous pouvons collecter les données suivantes :</p>
            <ul>
              <li><strong>Données d&apos;identification :</strong> nom, prénom, adresse email, numéro de téléphone</li>
              <li><strong>Données de livraison :</strong> adresse postale</li>
              <li><strong>Données de navigation :</strong> adresse IP, type de navigateur, pages visitées</li>
              <li><strong>Données de commande :</strong> historique d&apos;achats, préférences</li>
            </ul>

            <h2>3. Finalités du traitement</h2>
            <p>Vos données sont collectées pour :</p>
            <ul>
              <li>Traiter vos commandes et assurer leur livraison</li>
              <li>Gérer votre compte client</li>
              <li>Vous envoyer des informations sur nos produits et services (avec votre consentement)</li>
              <li>Améliorer notre site et nos services</li>
              <li>Répondre à vos demandes de contact</li>
              <li>Respecter nos obligations légales</li>
            </ul>

            <h2>4. Base légale du traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul>
              <li><strong>L&apos;exécution du contrat :</strong> pour traiter vos commandes</li>
              <li><strong>Votre consentement :</strong> pour l&apos;envoi de newsletters et communications marketing</li>
              <li><strong>L&apos;intérêt légitime :</strong> pour améliorer nos services</li>
              <li><strong>L&apos;obligation légale :</strong> pour conserver les factures</li>
            </ul>

            <h2>5. Destinataires des données</h2>
            <p>Vos données peuvent être partagées avec :</p>
            <ul>
              <li>Nos équipes internes (service client, logistique)</li>
              <li>Nos prestataires de paiement sécurisé (Stripe)</li>
              <li>Nos transporteurs pour la livraison (Colissimo, Chronopost)</li>
              <li>Notre hébergeur web (Vercel)</li>
            </ul>
            <p>
              Nous ne vendons jamais vos données à des tiers. Nos partenaires sont contractuellement tenus de protéger vos données.
            </p>

            <h2>6. Durée de conservation</h2>
            <ul>
              <li><strong>Données clients :</strong> 3 ans après le dernier achat</li>
              <li><strong>Données prospects :</strong> 3 ans après le dernier contact</li>
              <li><strong>Données de facturation :</strong> 10 ans (obligation légale)</li>
              <li><strong>Cookies :</strong> 13 mois maximum</li>
            </ul>

            <h2 id="cookies">7. Cookies</h2>
            <p>Notre site utilise des cookies pour :</p>
            <ul>
              <li><strong>Cookies essentiels :</strong> nécessaires au fonctionnement du site (panier, session)</li>
              <li><strong>Cookies de performance :</strong> analyser l&apos;utilisation du site (Google Analytics)</li>
              <li><strong>Cookies de préférences :</strong> mémoriser vos choix</li>
            </ul>
            <p>
              Vous pouvez gérer vos préférences de cookies via la bannière de consentement ou les paramètres de votre navigateur.
            </p>

            <h2>8. Vos droits</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul>
              <li><strong>Droit d&apos;accès :</strong> obtenir une copie de vos données</li>
              <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
              <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
              <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
              <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
              <li><strong>Droit de retirer votre consentement :</strong> à tout moment</li>
            </ul>
            <p>
              Pour exercer vos droits, contactez-nous à : dpo@institutbeautedefemme.fr
            </p>

            <h2>9. Sécurité</h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données :
            </p>
            <ul>
              <li>Chiffrement SSL/TLS des transmissions</li>
              <li>Stockage sécurisé des données</li>
              <li>Accès limité aux données (besoin d&apos;en connaître)</li>
              <li>Formation du personnel à la protection des données</li>
            </ul>

            <h2>10. Transferts internationaux</h2>
            <p>
              Certains de nos prestataires peuvent être situés hors de l&apos;Union Européenne. Dans ce cas, nous nous assurons que des garanties appropriées sont en place (clauses contractuelles types, certifications).
            </p>

            <h2>11. Modifications</h2>
            <p>
              Nous pouvons modifier cette politique de confidentialité à tout moment. La version en vigueur est celle publiée sur ce site avec sa date de mise à jour.
            </p>

            <h2>12. Réclamation</h2>
            <p>
              Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL :
            </p>
            <p>
              Commission Nationale de l&apos;Informatique et des Libertés (CNIL)<br />
              3 Place de Fontenoy - TSA 80715<br />
              75334 Paris Cedex 07<br />
              Site : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>
            </p>

            <h2>13. Contact</h2>
            <p>
              Pour toute question relative à cette politique, contactez notre Délégué à la Protection des Données :
            </p>
            <ul>
              <li>Email : dpo@institutbeautedefemme.fr</li>
              <li>Courrier : Institut Beauté Femme - DPO - 45 Avenue des Champs-Élysées, 75008 Paris</li>
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
