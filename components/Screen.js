/**
 * Composant Screen
 * 
 * Page 5 du cours : UI réutilisable - Brique 1
 * 
 * Ce composant fournit un layout de base pour tous les écrans.
 * Il applique un padding et un espacement cohérents (gap) à tous les enfants.
 * 
 * Avantages :
 * - Un seul endroit pour modifier le style de tous les écrans
 * - Cohérence visuelle garantie
 * - Réduction du code répétitif
 * 
 * @param {React.ReactNode} children - Les éléments à afficher dans l'écran
 */
import { View } from "react-native";

export function Screen({ children }) {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12 }}>
      {children}
    </View>
  );
}
