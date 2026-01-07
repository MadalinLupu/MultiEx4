/**
 * Écran Détails d'un Item
 * 
 * Page 7 du cours : Exemple complet - Détails
 * Page 8 du cours : Navigation avancée - Titre dynamique
 * 
 * Cet écran affiche les détails d'un item spécifique.
 * 
 * Fonctionnalités :
 * - Récupère l'id depuis l'URL via useLocalSearchParams()
 * - Trouve l'item correspondant avec findById()
 * - Affiche le titre de l'item dans le header (titre dynamique)
 * 
 * Schéma : URL → id → donnée → UI
 * - URL : /items/2
 * - id : "2" (via useLocalSearchParams)
 * - findById("2") → item
 * - UI affiche item.title
 * 
 * Titre dynamique :
 * - Le header affiche le titre de l'item au lieu de "Détails"
 * - Utilise Stack.Screen avec options dynamique
 */
import { Stack, useLocalSearchParams, Link } from "expo-router";

import { Screen } from "../../../components/Screen";
import { Title } from "../../../components/Title";
import { AppText } from "../../../components/AppText";

import { findById } from "../../../features/items/items.data";

export default function ItemDetails() {
  // Récupère l'id depuis l'URL
  // Note : useLocalSearchParams() renvoie souvent des strings
  // Si vous utilisez router.push() avec un objet et plusieurs params :
  // const { id, from } = useLocalSearchParams();
  // Vous pouvez alors utiliser 'from' pour savoir d'où vient la navigation
  const { id } = useLocalSearchParams();
  const item = findById(String(id));

  return (
    <>
      {/* Configuration du titre dynamique dans le header */}
      <Stack.Screen 
        options={{ 
          title: item ? item.title : "Détails" 
        }} 
      />
      
      <Screen>
        <Title>Détails</Title>
        <AppText>id: {String(id)}</AppText>

        <AppText style={{ marginTop: 8 }}>
          {item ? item.title : "Item introuvable"}
        </AppText>

        <Link 
          href="/(tabs)/items" 
          style={{ marginTop: 16, color: "#1e90ff" }}
        >
          Retour à la liste
        </Link>
      </Screen>
    </>
  );
}
