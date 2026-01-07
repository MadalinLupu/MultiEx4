/**
 * Écran Home (dans les Tabs)
 * 
 * Page 7 du cours : Exemple complet - Home
 * 
 * Écran principal de l'application, accessible via l'onglet "Home".
 * 
 * Cet écran démontre :
 * - L'utilisation des composants réutilisables (Screen, Title, AppText)
 * - La navigation avec Link vers d'autres écrans
 */
import { Link } from "expo-router";
import { Screen } from "../../../components/Screen";
import { Title } from "../../../components/Title";
import { AppText } from "../../../components/AppText";

export default function HomeScreen() {
  return (
    <Screen>
      <Title>Home</Title>
      <AppText>Bienvenue dans l'application de démonstration.</AppText>
      <AppText>Cette app couvre tous les thèmes de la séance 4.</AppText>

      <Link href="/(tabs)/items" style={{ marginTop: 16, color: "#1e90ff" }}>
        Ouvrir la liste des items
      </Link>

      <AppText style={{ marginTop: 24, fontWeight: "700" }}>
        Navigation avancée :
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
