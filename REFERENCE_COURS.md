# Référence du Cours - Séance 4 : Structure

Ce document fait le lien entre les pages du cours LaTeX et les fichiers de l'application.

## Structure du projet

### Pages 3-4 : Architecture et responsabilités

**Concept :** Organisation en trois couches
- **Écrans** (app/) : routes et pages
- **Features** (features/) : logique métier et données
- **UI** (components/) : composants réutilisables

**Fichiers concernés :**
- Structure des dossiers : `app/`, `components/`, `features/`

---

## Page 5 : UI réutilisable

### Brique 1 : Screen
**Fichier :** `components/Screen.js`
- Layout de base pour tous les écrans
- Padding et espacement cohérents

### Brique 2 : AppText
**Fichier :** `components/AppText.js`
- Texte standardisé
- Style de base + personnalisation

### Brique 3 : Title
**Fichier :** `components/Title.js`
- Titres principaux des écrans
- Utilise AppText en interne

### Brique 4 : AppButton
**Fichier :** `components/AppButton.js`
- Bouton standardisé
- Gère l'état désactivé automatiquement

### Brique 5 : AppInput
**Fichier :** `components/AppInput.js`
- Champ de saisie standardisé
- Configuration pour email/login

**Exemples d'utilisation :**
- `app/(tabs)/home/index.js` : Utilise Screen, Title, AppText, Link
- `app/(auth)/login.js` : Utilise tous les composants UI

---

## Page 6 : Feature items

### Données
**Fichier :** `features/items/items.data.js`
- Liste ITEMS (mock)
- Fonction findById()

### UI
**Fichier :** `features/items/items.ui.js`
- Composant ItemRow
- Affichage d'un item avec clic

**Exemples d'utilisation :**
- `app/(tabs)/items/index.js` : Utilise ITEMS et ItemRow
- `app/(tabs)/items/[id].js` : Utilise findById()

---

## Page 7 : Navigation globale et exemple complet

### Navigation globale (Stack)
**Fichier :** `app/(tabs)/items/_layout.js`
- Configuration Stack pour la section Items
- Titres par écran

### Exemple complet : Home → Liste → Détails

#### Home
**Fichier :** `app/(tabs)/home/index.js`
- Écran simple avec lien vers la liste
- Utilise les composants réutilisables

#### Liste
**Fichier :** `app/(tabs)/items/index.js`
- Affiche la liste avec FlatList
- Navigation vers détails via router.push()

#### Détails
**Fichier :** `app/(tabs)/items/[id].js`
- Récupère l'id depuis l'URL
- Affiche les détails de l'item
- Titre dynamique dans le header

**Schéma de navigation :**
```
Home → Liste (Link)
Liste → Détails (router.push avec id)
```

---

## Page 8 : Navigation avancée

### Groupes de routes
**Fichiers :**
- `app/(auth)/login.js` : Écran de connexion
- `app/(auth)/register.js` : Écran d'inscription
- `app/(tabs)/_layout.js` : Layout des Tabs

**Concept :** Les groupes `(auth)` et `(tabs)` n'apparaissent pas dans l'URL mais organisent le code.

### Tabs + Stack imbriqués
**Fichiers :**
- `app/(tabs)/_layout.js` : Configuration Tabs (menu principal)
- `app/(tabs)/items/_layout.js` : Configuration Stack (navigation interne)

**Concept :**
- Tabs = grandes sections (Home, Items)
- Stack = navigation interne (liste → détails)

### Paramètres
**Fichier :** `app/(tabs)/items/index.js`
- Exemple avec string : `router.push("/(tabs)/items/2")`
- Commentaire avec objet : `router.push({ pathname, params })`

**Fichier :** `app/(tabs)/items/[id].js`
- Récupération : `useLocalSearchParams()`
- Conversion : `String(id)`

### Titre dynamique
**Fichier :** `app/(tabs)/items/[id].js`
- Utilise `<Stack.Screen options={{ title: ... }} />`
- Le titre dépend de la donnée (item.title)

### Not Found
**Fichier :** `app/+not-found.js`
- Page affichée pour les routes inconnues
- Message clair + lien de retour

### Guard
**Fichier :** `app/_layout.js`
- Redirection selon l'état d'authentification
- Utilise `useSegments()` pour détecter la zone actuelle
- Utilise `router.replace()` pour éviter l'historique

---

## Exercices

Voir `EXERCICES.md` pour les détails de chaque exercice.

### Exercice 1 — UI réutilisable
**Page 5 du cours**
- Créer les composants dans `components/`
- Remplacer les composants natifs

### Exercice 2 — Feature items
**Page 6 du cours**
- Créer `features/items/items.data.js`
- Créer `features/items/items.ui.js`
- Brancher avec les écrans

### Exercice 3 — Tabs + Stack
**Page 8 du cours**
- Créer les layouts Tabs et Stack
- Vérifier la navigation

### Exercice 4 — not-found + guard
**Page 8 du cours**
- Créer `app/+not-found.js`
- Implémenter le guard dans `app/_layout.js`

---

## Structure complète des fichiers

```
app/
  _layout.js              # Layout racine avec guard
  index.js                # Écran d'accueil (route racine)
  (auth)/
    login.js              # Écran de connexion
    register.js           # Écran d'inscription
  (tabs)/
    _layout.js            # Layout Tabs
    home/
      index.js            # Écran Home
    items/
      _layout.js         # Layout Stack pour Items
      index.js            # Liste des items
      [id].js             # Détails d'un item
  +not-found.js           # Page 404

components/
  Screen.js               # Layout de base
  AppText.js              # Texte standardisé
  Title.js                # Titre principal
  AppButton.js            # Bouton standardisé
  AppInput.js             # Champ de saisie

features/
  items/
    items.data.js         # Données (ITEMS + findById)
    items.ui.js           # UI (ItemRow)
```

---

## Concepts clés

### Pourquoi structurer ?
- Réduire le copier-coller
- Faciliter la maintenance
- Évolutivité (mock → fetch)

### Règle : un écran reste court
- Assemble l'UI (Screen/Title/AppText)
- Branche la donnée (mock/state/fetch)
- Gère la navigation (Link/push)

### Séparation des responsabilités
- Écrans : routes et assemblage
- Features : logique métier
- UI : composants réutilisables

---

## Ressources

- Expo Router : https://docs.expo.dev/router/introduction/
- Tabs : https://docs.expo.dev/router/reference/tabs/
- Stack : https://docs.expo.dev/router/reference/stack/
