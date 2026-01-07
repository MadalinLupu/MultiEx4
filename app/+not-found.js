/**
 * Page Not Found (404)
 * 
 * Page 8 du cours : Navigation avancée - Not Found
 * 
 * Cette page s'affiche quand une route inconnue est accédée.
 * 
 * Quand arrive-t-on ici ?
 * - URL mal tapée
 * - Lien cassé
 * - Écran supprimé/renommé
 * 
 * But :
 * - Message clair pour l'utilisateur
 * - Lien de retour vers une page valide
 * 
 * C'est l'équivalent d'une page 404 dans une application web.
 */
import { Link } from "expo-router";
import { View, Text } from "react-native";

export default function NotFound() {
  return (
    <View style={{ flex: 1, padding: 16, gap: 12, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "700", marginBottom: 8 }}>
        Page introuvable
      </Text>
      <Text style={{ fontSize: 16, color: "#666", textAlign: "center", marginBottom: 16 }}>
        La page que vous recherchez n'existe pas ou a été déplacée.
      </Text>
      <Link href="/(tabs)/home" style={{ color: "#1e90ff", fontSize: 16 }}>
        Retour à Home
      </Link>
    </View>
  );
}
