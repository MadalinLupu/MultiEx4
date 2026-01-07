/**
 * Composant Title
 * 
 * Page 5 du cours : UI réutilisable - Brique 3
 * 
 * Composant pour les titres principaux des écrans.
 * Utilise AppText en interne pour garantir la cohérence.
 * 
 * Avantages :
 * - Tous les titres ont la même apparence
 * - Modification centralisée (taille, poids, couleur)
 * - Réutilisabilité
 * 
 * @param {React.ReactNode} children - Le texte du titre
 */
import { AppText } from "./AppText";

export function Title({ children }) {
  return (
    <AppText style={{ fontSize: 20, fontWeight: "700" }}>
      {children}
    </AppText>
  );
}
