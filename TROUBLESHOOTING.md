# Guide de dépannage - Erreur Android

## Erreur: `java.io.IOException: failed to download remote update`

### Solution 1: Mode Tunnel (RECOMMANDÉ)

```bash
npm run start:tunnel
```

**Important:** 
- Le mode tunnel peut prendre 30-60 secondes pour se connecter
- Vous verrez une URL `exp://` ou `https://` dans le terminal
- Scannez le QR code avec Expo Go une fois que le tunnel est prêt

### Solution 2: Vérifier Expo Go

1. **Mettre à jour Expo Go** sur le Play Store
2. **Vider le cache:**
   - Paramètres → Apps → Expo Go → Stockage → Vider le cache
3. **Forcer l'arrêt:**
   - Paramètres → Apps → Expo Go → Forcer l'arrêt
4. **Redémarrer Expo Go**

### Solution 3: Vérifier la connexion

1. **Même réseau WiFi (pour mode LAN):**
   ```bash
   npm run start:lan
   ```
   - Vérifiez que votre téléphone et ordinateur sont sur le même WiFi
   - Désactivez temporairement le VPN si vous en avez un

2. **Mode tunnel (fonctionne sur n'importe quel réseau):**
   ```bash
   npm run start:tunnel
   ```

### Solution 4: Vérifier le firewall Windows

1. Ouvrez "Pare-feu Windows Defender"
2. Cliquez sur "Autoriser une application"
3. Vérifiez que Node.js est autorisé
4. Si nécessaire, ajoutez une exception pour le port utilisé par Expo

### Solution 5: Réinitialiser le cache Expo

```bash
# Arrêter Expo (Ctrl+C)
npx expo start --clear
```

### Solution 6: Vérifier les permissions Android

Sur votre téléphone Android:
1. Paramètres → Apps → Expo Go → Permissions
2. Vérifiez que **Internet** est activé
3. Vérifiez que **Stockage** est activé (si nécessaire)

### Solution 7: Essayer avec l'URL manuelle

1. Dans le terminal Expo, vous verrez une URL comme:
   - `exp://192.168.x.x:8081` (LAN)
   - `exp://xxx.xxx.xxx.xxx:8081` (Tunnel)

2. Dans Expo Go:
   - Appuyez sur "Enter URL manually"
   - Entrez l'URL complète du terminal

### Solution 8: Vérifier la version d'Expo Go

- Allez sur le Play Store
- Vérifiez que vous avez la dernière version d'Expo Go
- Si nécessaire, mettez à jour

### Solution 9: Alternative - Utiliser Expo Dev Client

Si rien ne fonctionne, vous pouvez créer un build de développement:

```bash
npx expo install expo-dev-client
npx expo run:android
```

(Cela nécessite Android Studio et un émulateur ou un téléphone connecté en USB)

## Ordre recommandé de dépannage

1. ✅ Utiliser `npm run start:tunnel` (attendre 30-60 secondes)
2. ✅ Vider le cache d'Expo Go
3. ✅ Vérifier que Expo Go est à jour
4. ✅ Vérifier les permissions Internet
5. ✅ Essayer l'URL manuelle
6. ✅ Vérifier le firewall Windows
