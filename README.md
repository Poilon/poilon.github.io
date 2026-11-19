# Poilon Software

Site statique du portfolio, hébergé sur GitHub Pages avec le domaine défini dans `CNAME`. Aucun build n’est nécessaire.

## Prévisualisation locale

Depuis la racine du dépôt :

```sh
python3 -m http.server 4173
```

Ouvrir <http://localhost:4173>.

## Fichiers

- `index.html` : contenu français, navigation et projets. Les projets principaux sont présentés dans l’ordre ComptaCrypto, Carabin, Poum, Carbono.
- `assets/css/site.css` : styles communs et adaptations mobile.
- `assets/js/translations.js` : textes français et anglais. Pour modifier un texte, mettre à jour la traduction et le contenu français correspondant dans le HTML (affiché sans JavaScript).
- `assets/js/site.js` : choix de langue et menu mobile.
- `tdsa/index.html` et `deck-carabin/index.html` : anciennes adresses, conservées pour les liens existants.
- `assets/js/redirect.js` : redirections avec conservation de la query string et de l’ancre.

Les autres produits sont affichés après les quatre projets principaux. Les petits outils sont regroupés par usage dans la section dépliable « Le labo ».

## Vérification avant publication

Vérifier le rendu sur ordinateur et mobile, les deux langues, les liens des projets, le menu au clavier et l’ouverture du labo. Le site reste consultable sans JavaScript ; les pages de redirection disposent également d’un lien direct et d’un repli HTML.
