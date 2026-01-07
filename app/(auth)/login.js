/**
 * Écran de connexion
 * 
 * Page 8 du cours : Navigation avancée - Groupes de routes (auth)
 * 
 * Cet écran fait partie du groupe (auth) qui n'apparaît pas dans l'URL.
 * 
 * Groupes de routes :
 * - (auth) : login / register
 * - (tabs) : app principale
 * 
 * À retenir :
 * - (auth) et (tabs) n'apparaissent pas dans l'URL
 * - Ils servent à ranger les routes
 * 
 * Cet écran démontre :
 * - L'utilisation des composants réutilisables (Screen, Title, AppText, AppInput, AppButton)
 * - La navigation vers register
 * 
 * Note : Pour l'instant, cet écran est juste une démonstration.
 * Dans une vraie app, il faudrait gérer l'authentification.
 */
import { useState } from "react";
import { Link } from "expo-router";
import { Screen } from "../../components/Screen";
import { Title } from "../../components/Title";
import { AppText } from "../../components/AppText";
import { AppInput } from "../../components/AppInput";
import { AppButton } from "../../components/AppButton";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO : Implémenter la logique d'authentification
    console.log("Login:", email, password);
  };

  return (
    <Screen>
      <Title>Connexion</Title>
      <AppText>Connectez-vous à votre compte.</AppText>

      <AppInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <AppInput
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <AppButton title="Se connecter" onPress={handleLogin} />

      <Link href="/(auth)/register" style={{ marginTop: 16, color: "#1e90ff" }}>
        Pas encore de compte ? S'inscrire
      </Link>
    </Screen>
  );
}
