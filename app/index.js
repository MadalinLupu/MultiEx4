/**
 * Écran d'accueil (route racine)
 * 
 * Page 7 du cours : Exemple complet - Home
 * 
 * Écran simple qui démontre l'utilisation des composants réutilisables.
 * 
 * Règle : un écran reste court
 * - Assemble l'UI (Screen/Title/AppText)
 * - Branche la donnée (mock/state/fetch)
 * - Gère la navigation (Link/push)
 * 
 * On évite :
 * - Styles répétés
 * - Logique copiée-collée
 * - 1 fichier énorme pour tout
 */
import { Link } from "expo-router";
import { Screen } from "../components/Screen";
import { Title } from "../components/Title";
import { AppText } from "../components/AppText";

export default function Home() {
  return (
    <Screen>
      <Title>Home</Title>
      <AppText>Démo : structure + navigation.</AppText>

      <Link href="/(tabs)/home" style={{ marginTop: 8, color: "#1e90ff" }}>
        Ouvrir l'application principale
      </Link>

      <AppText style={{ marginTop: 24, fontWeight: "700" }}>
        Écrans d'authentification :
      </AppText>
      
      <Link href="/(auth)/login" style={{ marginTop: 8, color: "#1e90ff" }}>
        Page de connexion
      </Link>
      
      <Link href="/(auth)/register" style={{ marginTop: 8, color: "#1e90ff" }}>
        Page d'inscription
      </Link>
    </Screen>
  );
}
