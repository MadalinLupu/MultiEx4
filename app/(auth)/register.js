/**
 * Écran d'inscription
 * 
 * Page 8 du cours : Navigation avancée - Groupes de routes (auth)
 * 
 * Cet écran fait partie du groupe (auth) qui n'apparaît pas dans l'URL.
 * 
 * Cet écran démontre :
 * - L'utilisation des composants réutilisables
 * - La navigation vers login
 * 
 * Note : Pour l'instant, cet écran est juste une démonstration.
 * Dans une vraie app, il faudrait gérer l'inscription.
 */
import { useState } from "react";
import { Link } from "expo-router";
import { Screen } from "../../components/Screen";
import { Title } from "../../components/Title";
import { AppText } from "../../components/AppText";
import { AppInput } from "../../components/AppInput";
import { AppButton } from "../../components/AppButton";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = () => {
    // TODO : Implémenter la logique d'inscription
    console.log("Register:", email, password);
  };

  const passwordsMatch = password === confirmPassword && password.length > 0;

  return (
    <Screen>
      <Title>Inscription</Title>
      <AppText>Créez un nouveau compte.</AppText>

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

      <AppInput
        placeholder="Confirmer le mot de passe"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {!passwordsMatch && confirmPassword.length > 0 && (
        <AppText style={{ color: "red" }}>
          Les mots de passe ne correspondent pas
        </AppText>
      )}

      <AppButton 
        title="S'inscrire" 
        onPress={handleRegister}
        disabled={!passwordsMatch}
      />

      <Link href="/(auth)/login" style={{ marginTop: 16, color: "#1e90ff" }}>
        Déjà un compte ? Se connecter
      </Link>
    </Screen>
  );
}
