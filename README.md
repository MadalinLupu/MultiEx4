# Cours 4 : Structure - Application React Native

Cette application démontre l'organisation d'un projet React Native avec Expo Router, couvrant tous les thèmes de la séance 4.

##  Documentation

- **[REFERENCE_COURS.md](REFERENCE_COURS.md)** : Lien entre les pages du cours et les fichiers de l'application

##  Structure du projet

```
app/                    # Écrans et routes (Expo Router)
  _layout.js            # Layout racine avec guard
  index.js              # Écran d'accueil
  (auth)/               # Groupe auth (login, register)
  (tabs)/               # Groupe tabs (home, items)
  +not-found.js         # Page 404

components/             # Composants UI réutilisables
  Screen.js             # Layout de base
  AppText.js            # Texte standardisé
  Title.js              # Titre principal
  AppButton.js          # Bouton standardisé
  AppInput.js           # Champ de saisie
  index.js              # Point d'entrée (exports)

features/               # Logique métier et données
  items/
    items.data.js       # Données (ITEMS + findById)
    items.ui.js         # UI (ItemRow)
```

##  Installation

```bash
npm install
```

##  Lancement

```bash
npm start
```

Puis choisissez votre plateforme :
- Appuyez sur `a` pour Android
- Appuyez sur `i` pour iOS
- Appuyez sur `w` pour Web

##  Thèmes couverts

### 1. Structure de projet (Pages 3-4)
- Organisation en trois couches (Écrans, Features, UI)
- Responsabilités séparées
- Arborescence cible

### 2. UI réutilisable (Page 5)
- Composants de base : Screen, AppText, Title, AppButton, AppInput
- Réduction du copier-coller
- Cohérence visuelle

### 3. Navigation globale (Page 7)
- Configuration Stack
- Navigation Home → Liste → Détails
- Exemple complet

### 4. Navigation avancée (Page 8)
- Groupes de routes (auth, tabs)
- Tabs + Stack imbriqués
- Paramètres (string et objet)
- Titre dynamique
- Guard d'authentification
- Page not-found

### 5. Features (Page 6)
- Séparation données/UI
- Feature items complète

##  Exercices

1. **Exercice 1** : UI réutilisable
2. **Exercice 2** : Feature items
3. **Exercice 3** : Tabs + Stack
4. **Exercice 4** : not-found + guard

##  Concepts clés

### Pourquoi structurer ?
- Réduire le copier-coller
- Faciliter la maintenance
- Évolutivité (mock → fetch)

### Règle : un écran reste court
- Assemble l'UI (Screen/Title/AppText)
- Branche la donnée (mock/state/fetch)
- Gère la navigation (Link/push)

### Séparation des responsabilités
- **Écrans** : routes et assemblage
- **Features** : logique métier
- **UI** : composants réutilisables

##  Notes

- Tous les fichiers contiennent une documentation complète en français
- Chaque concept est expliqué avec des références aux pages du cours
- Les exemples sont commentés pour faciliter la compréhension
- Perspective d'enseignement : chaque fichier explique le "pourquoi" en plus du "comment"
