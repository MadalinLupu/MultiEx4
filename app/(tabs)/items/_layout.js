/**
 * Layout Stack pour la section Items
 * 
 * Page 8 du cours : Navigation avancée - Stack dans un tab
 * 
 * Ce Stack gère la navigation interne à la section Items :
 * - Liste (index) → Détails ([id])
 * 
 * Pourquoi un Stack dans un tab ?
 * - Un onglet (Items) contient plusieurs écrans
 * - Le Stack gère : header + back + titres par écran
 * 
 * Le Stack fournit automatiquement :
 * - Un header avec le titre
 * - Un bouton "back" pour revenir en arrière
 */
import { Stack } from "expo-router";

export default function ItemsLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Liste" }} />
      <Stack.Screen name="[id]" options={{ title: "Détails" }} />
    </Stack>
  );
}
