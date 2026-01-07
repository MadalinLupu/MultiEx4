/**
 * Feature Items - UI
 * 
 * Page 6 du cours : Feature items - UI (ItemRow)
 * 
 * Composants UI spécifiques à la feature "items".
 * 
 * Pourquoi séparer l'UI de la feature ?
 * - Réutilisabilité : ItemRow peut être utilisé dans plusieurs écrans
 * - Maintenabilité : modification centralisée de l'affichage des items
 * - Cohérence : tous les items s'affichent de la même manière
 * 
 * @param {Object} item - L'item à afficher (doit avoir id et title)
 * @param {Function} onOpen - Fonction appelée lors du clic, reçoit l'id de l'item
 */
import { Pressable } from "react-native";
import { AppText } from "../../components/AppText";

export function ItemRow({ item, onOpen }) {
  return (
    <Pressable
      onPress={() => onOpen(item.id)}
      style={{ padding: 12, borderBottomWidth: 1, borderColor: "#eee" }}
    >
      <AppText style={{ fontWeight: "700" }}>{item.title}</AppText>
      <AppText style={{ color: "#666" }}>id: {item.id}</AppText>
    </Pressable>
  );
}
