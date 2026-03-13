# Naji Youssef — Portfolio React

Portfolio personnel interactif construit avec **React 18** + **Vite 5**.  
Aucune dépendance UI externe — CSS-in-JS pur via des styles inline React.

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:5173

# 3. Build de production
npm run build

# 4. Prévisualiser le build
npm run preview
```

---

## 📁 Structure du projet

```
naji-portfolio/
├── index.html                  # Point d'entrée HTML
├── vite.config.js              # Configuration Vite
├── package.json
│
└── src/
    ├── main.jsx                # Bootstrap React
    ├── App.jsx                 # Assemblage des sections
    │
    ├── data/
    │   └── portfolio.js        # ✏️  TOUTES vos données (éditer ici)
    │
    ├── constants/
    │   └── nav.js              # Items de navigation
    │
    ├── hooks/
    │   └── useAnimations.js    # Hooks réutilisables (fadeIn, counter, typewriter…)
    │
    ├── styles/
    │   └── globals.css         # Variables CSS + keyframes globaux
    │
    └── components/
        ├── UI.jsx              # Primitives : FadeIn, Pill, Btn, HoverCard…
        ├── Navbar.jsx          # Barre de navigation sticky + active tracking
        ├── Hero.jsx            # Section d'accueil (photo, typewriter, stats)
        ├── Formation.jsx       # Timeline académique accordion
        ├── Skills.jsx          # Onglets de compétences + langues
        ├── Projects.jsx        # Grille de projets expand/collapse
        ├── Contact.jsx         # Liens de contact + activités
        └── Footer.jsx          # Pied de page
```

---

## ✏️ Personnaliser le contenu

Tout le contenu est centralisé dans **`src/data/portfolio.js`** :

| Export         | Description                              |
|----------------|------------------------------------------|
| `PHOTO`        | Photo de profil (base64 ou URL externe)  |
| `profile`      | Nom, rôle, email, téléphone, GitHub…    |
| `formation`    | Diplômes et formations                   |
| `skills`       | Compétences par catégorie                |
| `skillColors`  | Couleur de pill par catégorie            |
| `projects`     | Projets avec description et tags         |
| `languages`    | Langues et niveaux                       |
| `activities`   | Activités et distinctions                |

### Remplacer la photo

Remplacez la valeur de `PHOTO` par une URL :

```js
export const PHOTO = "https://example.com/ma-photo.jpg";
// ou gardez le base64 actuel
```

---

## 🎨 Modifier les couleurs

Éditez les variables CSS dans `src/styles/globals.css` :

```css
:root {
  --accent:  #38bdf8;   /* bleu principal */
  --green:   #34d399;   /* vert (badge disponible) */
  --accent2: #818cf8;   /* violet (tags projets) */
  --bg:      #0a0f1e;   /* fond */
}
```

---

## 🌐 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Glissez le dossier dist/ sur netlify.com/drop
```

### GitHub Pages
```bash
npm run build
# Publiez le dossier dist/ sur votre branche gh-pages
```
