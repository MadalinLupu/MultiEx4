/**
 * Composant AppInput
 * 
 * Page 5 du cours : UI réutilisable - Brique 5
 * 
 * Champ de saisie standardisé pour toute l'application.
 * 
 * Pourquoi autoCorrect={false} et autoCapitalize="none" ?
 * - Utile pour email / login / mots de passe
 * - Évite des saisies surprises (corrections automatiques)
 * - Meilleure expérience utilisateur pour les champs techniques
 * 
 * @param {string} value - La valeur du champ
 * @param {Function} onChangeText - Fonction appelée lors du changement de texte
 * @param {string} placeholder - Texte d'aide affiché quand le champ est vide
 */
import { TextInput } from "react-native";

export function AppInput({ value, onChangeText, placeholder }) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCorrect={false}
      autoCapitalize="none"
      style={{
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 12,
        borderRadius: 10
      }}
    />
  );
}
