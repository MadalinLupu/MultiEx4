/**
 * Layout des Tabs
 * 
 * Page 8 du cours : Navigation avancée - Tabs + Stack
 * 
 * Les Tabs permettent de naviguer entre les grandes sections de l'application.
 * 
 * Pourquoi headerShown: false ?
 * - Sinon tu peux avoir 2 headers (Tabs + Stack)
 * - Le header du Stack items sera affiché pour Liste/Détails
 * 
 * Structure :
 * - Tabs = menu principal (Home, Items, etc.)
 * - Stack = pile de pages dans un onglet (liste → détails)
 * 
 * Le "name" correspond au dossier dans app/(tabs)/
 * 
 * Icônes : On utilise @expo/vector-icons (inclus dans Expo)
 * pour afficher des icônes dans les onglets.
 */
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1e90ff",
        tabBarInactiveTintColor: "#666",
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="items"
        options={{
          title: "Items",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
