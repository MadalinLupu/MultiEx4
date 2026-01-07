/**
 * Composant AppButton
 * 
 * Page 5 du cours : UI réutilisable - Brique 4
 * 
 * Bouton standardisé pour toute l'application.
 * Gère automatiquement l'état désactivé (disabled).
 * 
 * Pourquoi gérer disabled ici ?
 * - On ne recopie pas la logique/couleur à chaque écran
 * - Cohérence visuelle : tous les boutons désactivés ont la même apparence
 * - Facilite la maintenance
 * 
 * @param {string} title - Le texte du bouton
 * @param {Function} onPress - Fonction appelée lors du clic
 * @param {boolean} disabled - Si true, le bouton est désactivé
 */
import { Pressable, Text } from "react-native";

export function AppButton({ title, onPress, disabled }) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={{
        padding: 12,
        borderRadius: 10,
        alignItems: "center",
        backgroundColor: disabled ? "#ccc" : "#1e90ff",
      }}
    >
      <Text style={{ color: "white", fontWeight: "700" }}>
        {title}
      </Text>
    </Pressable>
  );
}
