/**
 * Écran Liste des Items
 * 
 * Page 7 du cours : Exemple complet - Liste
 * 
 * Cet écran affiche la liste des items en utilisant FlatList.
 * 
 * Fonctionnalités :
 * - Affiche tous les items depuis items.data.js
 * - Utilise ItemRow pour chaque item
 * - Navigation vers les détails via router.push()
 * 
 * Schéma de navigation :
 * - Home → Liste (via Link)
 * - Liste → Détails (via push avec id)
 * 
 * Pourquoi router.push() au lieu de Link ?
 * - push() = navigation via une action (tap sur une ligne)
 * - Link = navigation "lien" déclarative
 */
import { FlatList } from "react-native";
import { useRouter } from "expo-router";

import { Screen } from "../../../components/Screen";
import { Title } from "../../../components/Title";
import { AppText } from "../../../components/AppText";

import { ITEMS } from "../../../features/items/items.data";
import { ItemRow } from "../../../features/items/items.ui";

export default function ItemsList() {
  const router = useRouter();
  
  // Fonction pour ouvrir les détails d'un item
  // Option A : string (simple, un seul paramètre)
  const open = (id) => router.push(`/(tabs)/items/${id}`);
  
  // Option B : objet (recommandé pour plusieurs paramètres)
  // const open = (id) => router.push({
  //   pathname: "/(tabs)/items/[id]",
  //   params: { id, from: "list" },
  // });

  return (
    <Screen>
      <Title>Liste</Title>

      <FlatList
        data={ITEMS}
        keyExtractor={(x) => x.id}
        ListEmptyComponent={<AppText>Aucun item.</AppText>}
        renderItem={({ item }) => <ItemRow item={item} onOpen={open} />}
      />
    </Screen>
  );
}
