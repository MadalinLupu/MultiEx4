/**
 * Composant AppText
 * 
 * Page 5 du cours : UI réutilisable - Brique 2
 * 
 * Composant de texte standardisé pour toute l'application.
 * Permet de personnaliser le style tout en gardant une base cohérente.
 * 
 * Utilisation du tableau de styles :
 * - Le premier style (baseStyle) définit les valeurs par défaut
 * - Le deuxième style (style) permet la personnalisation locale
 * - React Native fusionne les styles, le dernier prend priorité
 * 
 * @param {React.ReactNode} children - Le texte à afficher
 * @param {Object} style - Style additionnel à appliquer
 */
import { Text } from "react-native";

export function AppText({ children, style }) {
  return (
    <Text style={[{ fontSize: 16, color: "#111" }, style]}>
      {children}
    </Text>
  );
}
