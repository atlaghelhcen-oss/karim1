import { SITE } from './site';
export const legal: Record<string, { title: string; desc: string; body: string[] }> = {
  'mentions-legales': { title: 'Mentions légales', desc: `Mentions légales de ${SITE.name}.`, body: [
    `<h2>Éditeur du site</h2><p>${SITE.name}, service d’abonnements IPTV. Contact : ${SITE.email}.</p>`,
    `<h2>Hébergement</h2><p>Le site est hébergé par un prestataire professionnel dont les coordonnées sont disponibles sur demande par e-mail.</p>`,
    `<h2>Propriété intellectuelle</h2><p>Les textes, visuels et éléments graphiques du site sont la propriété de ${SITE.name}. Toute reproduction sans accord écrit est interdite.</p>`,
    `<h2>Marques</h2><p>IPTV Smarters Pro est le nom d’une application tierce. Les marques citées appartiennent à leurs propriétaires respectifs.</p>` ] },
  'politique-de-confidentialite': { title: 'Politique de confidentialité', desc: 'Comment nous traitons vos données personnelles.', body: [
    `<h2>Données collectées</h2><p>Nous collectons uniquement votre adresse e-mail et les informations nécessaires à la livraison de votre code IPTV et au suivi de votre commande.</p>`,
    `<h2>Utilisation</h2><p>Vos données servent à livrer votre commande, répondre à vos demandes et assurer le support. Elles ne sont jamais vendues.</p>`,
    `<h2>Conservation et droits</h2><p>Conformément au RGPD, vous pouvez demander l’accès, la rectification ou la suppression de vos données en écrivant à ${SITE.email}.</p>`,
    `<h2>Cookies</h2><p>Le site n’utilise que des cookies techniques nécessaires à son fonctionnement.</p>` ] },
  'conditions-generales-de-vente': { title: 'Conditions générales de vente', desc: 'Conditions générales de vente des abonnements.', body: [
    `<h2>Offres et prix</h2><p>Abonnements de 3 mois (29 €), 6 mois (39 €), 12 mois (49 €) et 24 mois (89 €), prix TTC, paiement unique sans renouvellement automatique.</p>`,
    `<h2>Livraison</h2><p>Le code IPTV est envoyé par e-mail dès la confirmation du paiement. Pensez à vérifier vos courriers indésirables.</p>`,
    `<h2>Garantie</h2><p>Satisfait ou remboursé pendant 30 jours : voir la <a href="/politique-de-remboursement">politique de remboursement</a>.</p>`,
    `<h2>Support</h2><p>Notre équipe française répond 24h/24 et 7j/7 à ${SITE.email}.</p>` ] },
  'politique-de-remboursement': { title: 'Politique de remboursement', desc: 'Garantie satisfait ou remboursé de 30 jours.', body: [
    `<h2>Satisfait ou remboursé 30 jours</h2><p>Si votre abonnement ne vous convient pas, demandez le remboursement dans les 30 jours suivant votre achat.</p>`,
    `<h2>Comment faire</h2><p>Écrivez à ${SITE.email} en indiquant l’adresse e-mail de commande. Nous traitons la demande rapidement et vous confirmons le remboursement par e-mail.</p>` ] },
};
