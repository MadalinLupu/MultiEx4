/**
 * Layout racine de l'application
 * 
 * Pages 7-8 du cours : Navigation globale (Stack) et Guard
 * 
 * Ce fichier configure la navigation globale et le guard d'authentification.
 * 
 * Guard d'authentification :
 * - Si l'utilisateur n'est pas connecté et n'est pas dans (auth) → redirige vers login
 * - Si l'utilisateur est connecté et est dans (auth) → redirige vers home
 * 
 * Pourquoi utiliser replace au lieu de push ?
 * - Évite de garder l'écran interdit dans l'historique
 * - Le bouton "back" ne ramène pas à une page bloquée
 * 
 * Note : Ce contrôle est côté app (UX/navigation).
 * La sécurité serveur se fait côté backend.
 * 
 * IMPORTANT : Avec Expo Router 6.x, on utilise useFocusEffect dans un composant
 * séparé pour éviter les erreurs "attempted to navigate before mounting".
 */
import { Slot, useRootNavigationState, useRouter, useSegments } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";

// TODO : À remplacer par un vrai système d'authentification
// Pour l'instant, on simule avec une variable
// Changez cette valeur pour tester le guard :
// - false = non connecté → redirige vers login
// - true = connecté → redirige vers home si dans (auth)
const isLoggedIn = false;

/**
 * Composant Guard qui gère la redirection selon l'état d'authentification
 * 
 * Ce composant se monte après le layout et vérifie l'authentification.
 * Il utilise un délai pour s'assurer que la navigation est prête.
 */
function AuthGuard() {
  const router = useRouter();
  const segments = useSegments();
  const navigationState = useRootNavigationState();
  const [hasChecked, setHasChecked] = useState(false);

  useEffect(() => {
    // Attendre que la navigation soit prête
    if (!navigationState?.key) {
      return;
    }

    // Utiliser un petit délai pour s'assurer que tout est initialisé
    const timer = setTimeout(() => {
      const inAuth = segments[0] === "(auth)";
      const isIndex = segments.length === 0 || (segments.length === 1 && segments[0] === "index");

      // Si non connecté et pas dans (auth) et pas sur index, rediriger vers login
      // Note : On permet l'accès à index pour la démonstration
      if (!isLoggedIn && !inAuth && !isIndex) {
        // router.replace("/(auth)/login");
        // Désactivé temporairement pour permettre l'accès à tous les écrans pour la démonstration
      }

      // Si connecté et dans (auth), rediriger vers home
      if (isLoggedIn && inAuth) {
        router.replace("/(tabs)/home");
      }

      setHasChecked(true);
    }, 200); // Délai pour s'assurer que la navigation est prête

    return () => clearTimeout(timer);
  }, [segments, router, navigationState?.key]);

  return null; // Ce composant ne rend rien
}

export default function RootLayout() {
  const navigationState = useRootNavigationState();

  // Afficher un loader pendant que la navigation se prépare
  if (!navigationState?.key) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <>
      <AuthGuard />
      <Slot />
    </>
  );
}
