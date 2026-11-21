# Spoony 2.0 · démonstration interne

Landing page de démonstration destinée à la direction de DotVision. Usage interne, ne pas diffuser.

## Contenu
- Messages porteurs : OBL ISO 50001, NOT RSE, sécurité CRA et NIS2, ROI à partir du coût d'arrêt du client.
- Kiosque 1 : six thèmes couverts par Spoony (industrie, bâtiments tertiaires, transport et mobilité verticale, photovoltaïque, bornes de recharge, process et maintenance).
- Kiosque 2 : les neuf fiches sectorielles industrielles (01 à 09).
- Chaque carte ouvre une application Spoony 2.0 simulée : temps réel par départ, alertes de l'agent, ISO 50001, qualité réseau, coût d'arrêt, sécurité.

Toutes les données de site sont fictives. Les simulations (dérive, micro-coupure, marche à vide, erreur de câblage) se déclenchent depuis l'onglet Temps réel.

## Ouvrir la démo
Site statique sans dépendance : ouvrir `index.html` dans un navigateur, ou servir le dossier (`python3 -m http.server`).

## Animation du bandeau
Le prompt de génération est dans `PROMPT-ANIMATION.md`. La vidéo obtenue se dépose sous `img/hero.mp4`.

## Fichiers
- `index.html` : page et coquille de l'application
- `style.css` : charte (marine 13294B, bleu ciel 68AEDF, cobalt 2459B8, or F2B632, texte 1A1C1B)
- `data.js` : les quinze scénarios
- `app.js` : moteur de simulation et rendu
- `img/` : visuels Spoony 2.0, logo DotVision, photos des fiches
- `plaquettes/` : les neuf fiches sectorielles, mention et logo du distributeur retirés
