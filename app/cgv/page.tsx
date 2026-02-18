import { Metadata } from 'next'
import Breadcrumb from '@/components/ui/Breadcrumb'

export const metadata: Metadata = {
  title: 'Conditions Générales de Vente | Institut Beauté Femme',
  description: 'Conditions générales de vente de la boutique institutbeautedefemme.fr - Commandes, livraison, retours et garanties.',
}

export default function CGVPage() {
  return (
    <article className="py-12">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Conditions générales de vente', href: '/cgv' },
          ]}
        />

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-charbon mb-8">
            Conditions Générales de Vente
          </h1>

          <div className="prose-custom rich-content">
            <p className="text-lg text-charbon/70 mb-8">
              Les présentes conditions générales de vente régissent les relations contractuelles entre l&apos;Institut Beauté Femme et ses clients dans le cadre de la vente de produits sur le site institutbeautedefemme.fr.
            </p>

            <h2>Article 1 - Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) ont pour objet de définir les droits et obligations des parties dans le cadre de la vente en ligne de produits cosmétiques et accessoires de beauté proposés par l&apos;Institut Beauté Femme.
            </p>

            <h2>Article 2 - Vendeur</h2>
            <p>
              <strong>Institut Beauté Femme</strong><br />
              SARL au capital de 15 000 €<br />
              RCS Paris B 123 456 789<br />
              SIRET : 123 456 789 00012<br />
              Siège social : 45 Avenue des Champs-Élysées, 75008 Paris<br />
              Email : contact@institutbeautedefemme.fr<br />
              Téléphone : 01 23 45 67 89
            </p>

            <h2>Article 3 - Produits</h2>
            <p>
              Les produits proposés à la vente sont ceux qui figurent sur le site au jour de la consultation. Les photographies sont les plus fidèles possibles mais ne peuvent assurer une similitude parfaite avec le produit offert.
            </p>
            <p>
              L&apos;Institut Beauté Femme se réserve le droit de modifier la composition de son assortiment de produits. Nos produits sont conformes à la législation française en vigueur et aux normes européennes applicables.
            </p>

            <h2>Article 4 - Prix</h2>
            <p>
              Les prix de nos produits sont indiqués en euros toutes taxes comprises (TTC), hors frais de livraison. Le montant des frais de livraison est indiqué avant validation de la commande.
            </p>
            <p>
              L&apos;Institut Beauté Femme se réserve le droit de modifier ses prix à tout moment. Les produits seront facturés sur la base des tarifs en vigueur au moment de la validation de la commande.
            </p>

            <h2>Article 5 - Commande</h2>
            <p>
              Pour commander, l&apos;acheteur doit suivre le processus suivant :
            </p>
            <ol>
              <li>Sélection des produits et ajout au panier</li>
              <li>Validation du panier</li>
              <li>Identification ou création de compte</li>
              <li>Choix du mode de livraison</li>
              <li>Choix du mode de paiement</li>
              <li>Validation définitive de la commande</li>
            </ol>
            <p>
              La validation de la commande vaut acceptation des présentes CGV. Un email de confirmation récapitulant la commande est envoyé à l&apos;adresse indiquée.
            </p>

            <h2>Article 6 - Paiement</h2>
            <p>
              Le règlement des achats s&apos;effectue par :
            </p>
            <ul>
              <li>Carte bancaire (Visa, Mastercard, CB)</li>
              <li>PayPal</li>
              <li>Virement bancaire (pour les commandes professionnelles)</li>
            </ul>
            <p>
              Le paiement est sécurisé par notre prestataire Stripe. Vos données bancaires sont cryptées et ne transitent pas par nos serveurs.
            </p>

            <h2>Article 7 - Livraison</h2>
            <p>
              <strong>Zones de livraison :</strong> France métropolitaine, DOM-TOM, Union Européenne
            </p>
            <p>
              <strong>Délais de livraison indicatifs :</strong>
            </p>
            <ul>
              <li>France métropolitaine : 2 à 5 jours ouvrés</li>
              <li>DOM-TOM : 7 à 14 jours ouvrés</li>
              <li>Union Européenne : 5 à 10 jours ouvrés</li>
            </ul>
            <p>
              <strong>Frais de port :</strong>
            </p>
            <ul>
              <li>Gratuits à partir de 50€ d&apos;achat (France métropolitaine)</li>
              <li>4,90€ en dessous de 50€ d&apos;achat</li>
              <li>Tarifs spécifiques pour DOM-TOM et international</li>
            </ul>
            <p>
              En cas de retard de livraison supérieur à 7 jours ouvrés, l&apos;acheteur peut annuler sa commande et être remboursé.
            </p>

            <h2>Article 8 - Droit de rétractation</h2>
            <p>
              Conformément à l&apos;article L221-18 du Code de la Consommation, vous disposez d&apos;un délai de 14 jours calendaires à compter de la réception de votre commande pour exercer votre droit de rétractation, sans avoir à motiver votre décision.
            </p>
            <p>
              <strong>Exceptions au droit de rétractation :</strong>
            </p>
            <ul>
              <li>Produits descellés après livraison ne pouvant être renvoyés pour des raisons d&apos;hygiène</li>
              <li>Produits personnalisés ou confectionnés selon vos spécifications</li>
            </ul>
            <p>
              Pour exercer votre droit de rétractation, envoyez un email à : retours@institutbeautedefemme.fr
            </p>

            <h2>Article 9 - Retours et remboursements</h2>
            <p>
              Les produits doivent être retournés dans leur emballage d&apos;origine, non utilisés et en parfait état de revente. Les frais de retour sont à la charge du client.
            </p>
            <p>
              Le remboursement sera effectué dans un délai de 14 jours suivant la réception des produits retournés, par le même moyen de paiement que celui utilisé lors de la commande.
            </p>

            <h2>Article 10 - Garantie</h2>
            <p>
              Tous nos produits bénéficient de la garantie légale de conformité (articles L217-4 à L217-14 du Code de la Consommation) et de la garantie contre les vices cachés (articles 1641 à 1649 du Code Civil).
            </p>
            <p>
              En cas de produit défectueux ou non conforme, contactez notre service client dans les plus brefs délais.
            </p>

            <h2>Article 11 - Responsabilité</h2>
            <p>
              L&apos;Institut Beauté Femme ne saurait être tenue responsable de l&apos;inexécution du contrat en cas de force majeure, de perturbation ou grève des transports, ou de rupture de stock non prévisible chez nos fournisseurs.
            </p>

            <h2>Article 12 - Protection des données</h2>
            <p>
              Les données personnelles collectées sont traitées conformément à notre{' '}
              <a href="/politique-confidentialite">Politique de Confidentialité</a>.
            </p>

            <h2>Article 13 - Propriété intellectuelle</h2>
            <p>
              Tous les éléments du site (textes, images, logos, vidéos) sont protégés par le droit de la propriété intellectuelle. Toute reproduction est interdite sans autorisation préalable.
            </p>

            <h2>Article 14 - Médiation</h2>
            <p>
              En cas de litige, le client peut recourir gratuitement à un médiateur de la consommation. Nous adhérons au service de médiation MEDICYS :
            </p>
            <p>
              MEDICYS<br />
              73 Boulevard de Clichy<br />
              75009 Paris<br />
              Site : <a href="https://www.medicys.fr" target="_blank" rel="noopener noreferrer">www.medicys.fr</a>
            </p>

            <h2>Article 15 - Droit applicable</h2>
            <p>
              Les présentes CGV sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>

            <h2>Article 16 - Service client</h2>
            <p>
              Pour toute question ou réclamation :
            </p>
            <ul>
              <li>Email : contact@institutbeautedefemme.fr</li>
              <li>Téléphone : 01 23 45 67 89 (lun-ven, 9h-18h)</li>
              <li>Courrier : Institut Beauté Femme - Service Client - 45 Avenue des Champs-Élysées, 75008 Paris</li>
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
