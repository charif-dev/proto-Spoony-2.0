/* Spoony 2.0 - démonstration interne. Toutes les données de site sont fictives. */
window.SCENARIOS = [
  /* ---------- KIOSQUE 1 : THÈMES ---------- */
  {
    id: "industrie", kiosk: "theme", img: "img/theme-industrie.jpg", icon: "factory",
    title: "Industrie",
    tagline: "Moteurs, compresseurs, machines-outils, robots et convoyeurs suivis départ par départ.",
    vector: "OBL ISO 50001",
    site: "Usine de mécanique de précision", place: "Site industriel, Centre-Val de Loire",
    ipe: { label: "kWh par pièce", base: 1.84, unit: "kWh/pièce" },
    departs: [
      { n: "Compresseur d'air C1", kw: 75, t: "compresseur" },
      { n: "Compresseur d'air C2", kw: 55, t: "compresseur" },
      { n: "Centre d'usinage 5 axes", kw: 42, t: "machine" },
      { n: "Cellule robot soudure R3", kw: 28, t: "robot" },
      { n: "Convoyeur ligne A", kw: 11, t: "convoyeur" },
      { n: "CTA ventilation atelier", kw: 22, t: "cvc" }
    ],
    alerts: [
      { lvl: "warn", d: 0, txt: "Fuite d'air probable : C1 tourne 38 % du temps hors production.", reco: "Campagne de détection de fuites ciblée sur le réseau d'air de l'atelier 2." },
      { lvl: "info", d: 4, txt: "Convoyeur ligne A en marche à vide 47 min ce matin.", reco: "Asservir l'arrêt du convoyeur au signal de présence pièce." }
    ],
    entry: "Instrumenter la centrale d'air et les trois machines les plus chargées."
  },
  {
    id: "batiment", kiosk: "theme", img: "img/theme-batiment.jpg", icon: "building",
    title: "Bâtiments tertiaires",
    tagline: "Commerces, bureaux, universités : la mesure par usage que le décret tertiaire attend.",
    vector: "OBL décret tertiaire",
    site: "Immeuble de bureaux, 12 000 m²", place: "Île-de-France",
    ipe: { label: "kWh par m² et par an", base: 168, unit: "kWh/m².an" },
    departs: [
      { n: "Production froid groupe 1", kw: 120, t: "cvc" },
      { n: "CTA plateaux R+1 à R+6", kw: 45, t: "cvc" },
      { n: "Éclairage plateaux", kw: 38, t: "eclairage" },
      { n: "Ascenseurs A et B", kw: 24, t: "ascenseur" },
      { n: "Salle serveurs", kw: 30, t: "it" },
      { n: "Restaurant d'entreprise", kw: 60, t: "cuisine" }
    ],
    alerts: [
      { lvl: "warn", d: 1, txt: "La CTA des plateaux tourne le dimanche à 62 % de sa puissance nominale.", reco: "Corriger la programmation horaire de la GTB pour le week-end." },
      { lvl: "info", d: 2, txt: "Éclairage allumé à 23 h 40 sur deux plateaux vides.", reco: "Vérifier les détecteurs de présence des niveaux 4 et 5." }
    ],
    entry: "Instrumenter le TGBT et les départs CVC, éclairage et ascenseurs."
  },
  {
    id: "mobilite", kiosk: "theme", img: "img/theme-mobilite.jpg", icon: "escalator",
    title: "Transport et mobilité verticale",
    tagline: "Escalators, ascenseurs et portes d'un parc multimarque réunis dans une même donnée.",
    vector: "ROI maintenance",
    site: "Grande gare européenne", place: "Hall central, 14 escalators",
    ipe: { label: "kWh par passager", base: 0.012, unit: "kWh/passager" },
    departs: [
      { n: "Escalator E1, marque A", kw: 15, t: "escalator" },
      { n: "Escalator E2, marque A", kw: 15, t: "escalator" },
      { n: "Escalator E3, marque B", kw: 18, t: "escalator" },
      { n: "Ascenseur quai 4", kw: 12, t: "ascenseur" },
      { n: "Portes automatiques nord", kw: 3, t: "porte" },
      { n: "Sous-station éclairage quais", kw: 40, t: "eclairage" }
    ],
    alerts: [
      { lvl: "warn", d: 2, txt: "E3 consomme 23 % de plus que E1 et E2 pour un trafic comparable.", reco: "Programmer une inspection du réducteur de E3 avant la prochaine échéance calendaire." },
      { lvl: "info", d: 3, txt: "Ascenseur quai 4 : 1 240 cycles cette semaine, 2,1 fois la moyenne.", reco: "Avancer l'entretien selon l'usage réel, dans le respect des préconisations constructeur." }
    ],
    entry: "Instrumenter un panel multimarque d'escalators, d'ascenseurs et de portes."
  },
  {
    id: "photovoltaique", kiosk: "theme", img: "img/theme-photovoltaique.jpg", icon: "solar",
    title: "Production photovoltaïque",
    tagline: "Chaque onduleur mesuré, la production rapprochée de la consommation du site.",
    vector: "NOT RSE",
    site: "Ombrière photovoltaïque, 480 kWc", place: "Parking d'un centre logistique",
    ipe: { label: "Taux d'autoconsommation", base: 71, unit: "%" },
    departs: [
      { n: "Onduleur OND-1", kw: 110, t: "pv" },
      { n: "Onduleur OND-2", kw: 110, t: "pv" },
      { n: "Onduleur OND-3", kw: 110, t: "pv" },
      { n: "Onduleur OND-4", kw: 110, t: "pv" },
      { n: "Consommation entrepôt", kw: 180, t: "charge" },
      { n: "Injection réseau", kw: 90, t: "reseau" }
    ],
    alerts: [
      { lvl: "warn", d: 2, txt: "OND-3 produit 14 % de moins que ses voisins sous le même ensoleillement.", reco: "Contrôler l'encrassement et les connecteurs de la chaîne 3." },
      { lvl: "info", d: 5, txt: "Injection réseau entre 12 h et 14 h pendant que les quais sont à l'arrêt.", reco: "Décaler la charge des chariots électriques sur ce créneau." }
    ],
    entry: "Instrumenter chaque onduleur et le départ principal du site."
  },
  {
    id: "bornes", kiosk: "theme", img: "img/theme-bornes.jpg", icon: "charger",
    title: "Bornes de recharge",
    tagline: "Mesure par borne, délestage selon la puissance souscrite, protocole OCPP.",
    vector: "ROI puissance souscrite",
    site: "Parking de 24 points de charge", place: "Siège d'une entreprise de services",
    ipe: { label: "kWh par session", base: 18.6, unit: "kWh/session" },
    departs: [
      { n: "Bornes 1 à 6", kw: 66, t: "borne" },
      { n: "Bornes 7 à 12", kw: 66, t: "borne" },
      { n: "Bornes 13 à 18", kw: 66, t: "borne" },
      { n: "Bornes 19 à 24", kw: 66, t: "borne" },
      { n: "Bâtiment principal", kw: 140, t: "charge" },
      { n: "Pompe à chaleur", kw: 35, t: "cvc" }
    ],
    alerts: [
      { lvl: "warn", d: 4, txt: "Pointe à 8 h 50 : 96 % de la puissance souscrite.", reco: "Activer le délestage progressif des bornes 13 à 24 entre 8 h 30 et 9 h 30." },
      { lvl: "info", d: 2, txt: "Borne 15 : sessions interrompues trois fois cette semaine.", reco: "Contrôler le câble et le contacteur de la borne 15." }
    ],
    entry: "Instrumenter les groupes de bornes et le départ général du parking."
  },
  {
    id: "maintenance", kiosk: "theme", img: "img/theme-maintenance.jpg", icon: "gear",
    title: "Process, automatisme et maintenance",
    tagline: "La signature électrique de chaque départ sert d'indicateur de santé des machines.",
    vector: "ROI disponibilité",
    site: "Ligne d'embouteillage", place: "Site industriel, Grand Est",
    ipe: { label: "kWh par millier de bouteilles", base: 9.4, unit: "kWh/1000 bt" },
    departs: [
      { n: "Souffleuse", kw: 160, t: "machine" },
      { n: "Remplisseuse", kw: 45, t: "machine" },
      { n: "Convoyeurs aériens", kw: 18, t: "convoyeur" },
      { n: "Étiqueteuse", kw: 12, t: "machine" },
      { n: "Fardeleuse et four de rétraction", kw: 70, t: "four" },
      { n: "Groupe froid process", kw: 90, t: "cvc" }
    ],
    alerts: [
      { lvl: "crit", d: 4, txt: "Pic de courant au démarrage du four de rétraction en hausse de 9 % sur 10 jours.", reco: "Contrôler les résistances au prochain arrêt planifié." },
      { lvl: "info", d: 2, txt: "Convoyeurs aériens actifs 26 min pendant l'arrêt de la souffleuse.", reco: "Asservir les convoyeurs à l'état de marche de la souffleuse." }
    ],
    entry: "Instrumenter la machine goulot et ses auxiliaires."
  },

  /* ---------- KIOSQUE 2 : 9 SECTEURS INDUSTRIELS (fiches 01 à 09) ---------- */
  {
    id: "tri", kiosk: "secteur", num: "01", img: "img/secteur-01.jpg", pdf: "plaquettes/fiche-01-tri.pdf", icon: "recycle",
    title: "Centres de tri et recyclage",
    tagline: "Un moteur indisponible sur une ligne de tri arrête le tronçon complet.",
    fact: "164 centres de tri en France métropolitaine, selon Citeo cité par Natura Sciences en 2023.",
    site: "Centre de tri de collecte sélective", place: "Ligne de 42 moteurs",
    ipe: { label: "kWh par tonne triée", base: 31, unit: "kWh/t" },
    departs: [
      { n: "Trommel", kw: 45, t: "machine" },
      { n: "Séparateur balistique", kw: 30, t: "machine" },
      { n: "Tri optique T2", kw: 22, t: "machine" },
      { n: "Convoyeur de cabine", kw: 7.5, t: "convoyeur" },
      { n: "Presse à balles", kw: 55, t: "machine" },
      { n: "Aspiration films", kw: 37, t: "ventilateur" }
    ],
    alerts: [
      { lvl: "crit", d: 1, txt: "Déséquilibre de phase de 12 % sur le séparateur balistique.", reco: "Vérifier le serrage des bornes et l'état du moteur avant la prochaine campagne." },
      { lvl: "info", d: 3, txt: "Convoyeur de cabine en marche à vide 52 min entre deux alimentations.", reco: "Arrêt automatique après 5 min sans matière détectée." }
    ],
    measures: ["Consommation par départ, tronçon par tronçon", "Marches à vide des convoyeurs entre deux alimentations", "Répartition réelle de la charge sur les trois phases", "Pilotage et délestage des postes non critiques"],
    entry: "Instrumenter un tronçon de ligne."
  },
  {
    id: "carrieres", kiosk: "secteur", num: "02", img: "img/secteur-02.jpg", pdf: "plaquettes/fiche-02-carrieres.pdf", icon: "mountain",
    title: "Carrières et granulats",
    tagline: "Sur un concasseur, la vibration est le procédé lui-même.",
    fact: "2 995 carrières en activité en 2023, selon le SDES.",
    site: "Carrière de roche massive", place: "Installation de concassage-criblage",
    ipe: { label: "kWh par tonne produite", base: 2.7, unit: "kWh/t" },
    departs: [
      { n: "Concasseur primaire à mâchoires", kw: 160, t: "machine" },
      { n: "Concasseur secondaire à cône", kw: 200, t: "machine" },
      { n: "Crible 3 étages", kw: 30, t: "machine" },
      { n: "Convoyeur T1", kw: 45, t: "convoyeur" },
      { n: "Convoyeur T4 vers stock", kw: 30, t: "convoyeur" },
      { n: "Pompe de lavage", kw: 55, t: "pompe" }
    ],
    alerts: [
      { lvl: "warn", d: 3, txt: "T1 tourne à vide 18 % du temps de marche du primaire.", reco: "Asservir T1 au niveau de la trémie d'alimentation." },
      { lvl: "crit", d: 1, txt: "Le courant du cône dérive de 7 % à tonnage égal depuis 6 jours.", reco: "Contrôler l'usure du manteau et le réglage du serrage." }
    ],
    measures: ["Consommation par poste, du primaire au criblage", "kWh rapporté au tonnage, par campagne", "Marches à vide des convoyeurs", "Délestage des auxiliaires non critiques"],
    entry: "Instrumenter le concassage primaire et un convoyeur critique."
  },
  {
    id: "ciment", kiosk: "secteur", num: "03", img: "img/secteur-03.jpg", pdf: "plaquettes/fiche-03-ciment.pdf", icon: "kiln",
    title: "Cimenteries",
    tagline: "Un audit ISO 50001 ne se satisfait plus d'une répartition énergétique au prorata.",
    fact: "29 cimenteries en France, selon le SFIC cité par MineralInfo en 2025.",
    site: "Cimenterie à voie sèche", place: "Four rotatif et deux broyeurs",
    ipe: { label: "kWh par tonne de clinker", base: 96, unit: "kWh/t clinker" },
    departs: [
      { n: "Broyeur cru", kw: 2200, t: "broyeur" },
      { n: "Ventilateur de tirage four", kw: 1600, t: "ventilateur" },
      { n: "Broyeur ciment BK2", kw: 3200, t: "broyeur" },
      { n: "Refroidisseur clinker", kw: 800, t: "ventilateur" },
      { n: "Dépoussiéreur filtre à manches", kw: 400, t: "ventilateur" },
      { n: "Compresseurs d'utilités", kw: 300, t: "compresseur" }
    ],
    alerts: [
      { lvl: "crit", d: 2, txt: "BK2 : courant absorbé en hausse de 5,8 % à débit constant.", reco: "Contrôler le blindage et la charge de boulets au prochain arrêt." },
      { lvl: "warn", d: 4, txt: "Le dépoussiéreur fonctionne à pleine vitesse four à l'arrêt.", reco: "Réduire la consigne de vitesse en phase d'arrêt four." }
    ],
    measures: ["Sous-comptage par atelier, du cru à la cuisson et au broyage", "kWh par tonne de clinker, mesuré et non réparti", "Suivi à la seconde des ventilateurs et dépoussiéreurs", "Restitution vers la supervision par MQTT(S)"],
    entry: "Instrumenter un broyeur et ses auxiliaires critiques."
  },
  {
    id: "papier", kiosk: "secteur", num: "04", img: "img/secteur-04.jpg", pdf: "plaquettes/fiche-04-papier.pdf", icon: "paper",
    title: "Papeteries et cartonneries",
    tagline: "L'ambiance chaude et humide d'une machine à papier use l'instrumentation de surface.",
    fact: "73 usines papetières recensées par la Copacel.",
    site: "Cartonnerie, machine à papier PM2", place: "Marche continue 7 jours sur 7",
    ipe: { label: "kWh par tonne produite", base: 540, unit: "kWh/t" },
    departs: [
      { n: "Pulpeur", kw: 400, t: "machine" },
      { n: "Raffineur R2", kw: 630, t: "machine" },
      { n: "Pompe de mélange", kw: 250, t: "pompe" },
      { n: "Pompes à vide", kw: 450, t: "pompe" },
      { n: "Ventilation sécherie", kw: 315, t: "ventilateur" },
      { n: "Enrouleuse", kw: 160, t: "machine" }
    ],
    alerts: [
      { lvl: "warn", d: 3, txt: "Pompes à vide : puissance en hausse de 6 % à grammage constant.", reco: "Contrôler l'étanchéité des caisses aspirantes." },
      { lvl: "info", d: 1, txt: "Raffineur R2 à 12 % au-dessus de sa référence sur la sorte en cours.", reco: "Revoir la consigne d'énergie spécifique de raffinage." }
    ],
    measures: ["Sous-comptage par section, de la pâte à la sécherie", "kWh par tonne, section par section", "Suivi des pompes, raffineurs et ventilateurs", "Dérives de consommation des utilités"],
    entry: "Instrumenter une section de machine et ses utilités."
  },
  {
    id: "siderurgie", kiosk: "secteur", num: "05", img: "img/secteur-05.jpg", pdf: "plaquettes/fiche-05-siderurgie.pdf", icon: "steel",
    title: "Sidérurgie et laminage",
    tagline: "Sur un laminoir, le moteur reste inaccessible en exploitation pour raison de température.",
    fact: "Peu de sites, des dizaines de points de mesure par site équipé.",
    site: "Laminoir à chaud", place: "Four de réchauffage et 6 cages",
    ipe: { label: "kWh par tonne laminée", base: 118, unit: "kWh/t" },
    departs: [
      { n: "Cage dégrossisseuse", kw: 2500, t: "machine" },
      { n: "Cage finisseuse F3", kw: 1800, t: "machine" },
      { n: "Ventilateur d'air de combustion", kw: 450, t: "ventilateur" },
      { n: "Groupe hydraulique", kw: 250, t: "pompe" },
      { n: "Dépoussiérage four", kw: 315, t: "ventilateur" },
      { n: "Pompes de refroidissement", kw: 400, t: "pompe" }
    ],
    alerts: [
      { lvl: "crit", d: 3, txt: "Groupe hydraulique : 14 démarrages par heure contre 6 en référence.", reco: "Contrôler l'accumulateur et les fuites internes." },
      { lvl: "warn", d: 4, txt: "Dépoussiérage à plein régime pendant le changement de cylindres.", reco: "Programmer un régime réduit pendant les changements d'outils." }
    ],
    measures: ["Sous-comptage par four et par cage", "Consommation rapportée au tonnage laminé", "Suivi à la seconde des ventilateurs et groupes hydrauliques", "Comptabilité carbone fiabilisée"],
    entry: "Instrumenter un four ou une ligne et ses auxiliaires critiques."
  },
  {
    id: "eau", kiosk: "secteur", num: "06", img: "img/secteur-06.jpg", pdf: "plaquettes/fiche-06-eau.pdf", icon: "water",
    title: "Eau et assainissement",
    tagline: "Une pompe immergée ne recevra jamais de capteur vibratoire.",
    fact: "4 048 stations de 2 000 équivalents-habitants et plus en 2024, selon le portail assainissement du ministère.",
    site: "Station d'épuration, 80 000 EH", place: "Relevage, aération, déshydratation",
    ipe: { label: "kWh par m³ traité", base: 0.42, unit: "kWh/m³" },
    departs: [
      { n: "Pompe de relevage P1", kw: 90, t: "pompe" },
      { n: "Pompe de relevage P2", kw: 90, t: "pompe" },
      { n: "Surpresseur d'aération S1", kw: 160, t: "compresseur" },
      { n: "Surpresseur d'aération S2", kw: 160, t: "compresseur" },
      { n: "Centrifugeuse de déshydratation", kw: 75, t: "machine" },
      { n: "Pompe de recirculation", kw: 30, t: "pompe" }
    ],
    alerts: [
      { lvl: "crit", d: 1, txt: "P2 absorbe 11 % de plus que P1 pour le même débit.", reco: "Inspecter la roue de P2 : colmatage ou usure probable." },
      { lvl: "warn", d: 2, txt: "Les surpresseurs tournent à fond la nuit malgré la baisse de charge.", reco: "Réviser la consigne d'oxygène dissous en heures creuses." }
    ],
    measures: ["Sous-comptage par ouvrage, du relevage à la déshydratation", "kWh par m³ traité, ouvrage par ouvrage", "Dérives de pompes par la puissance absorbée", "Preuve avant et après action pour les contrats de performance"],
    entry: "Instrumenter le relevage et l'aération d'une station."
  },
  {
    id: "agro", kiosk: "secteur", num: "07", img: "img/secteur-07.jpg", pdf: "plaquettes/fiche-07-agro.pdf", icon: "food",
    title: "Agroalimentaire de procédé continu",
    tagline: "Le lavage haute pression interdit toute instrumentation posée sur la machine.",
    fact: "Sucreries, laiteries, amidonneries : l'arrêt est interdit en campagne.",
    site: "Sucrerie en campagne", place: "Râperie, diffusion, évaporation",
    ipe: { label: "kWh par tonne de betteraves", base: 31, unit: "kWh/t betteraves" },
    departs: [
      { n: "Coupe-racines", kw: 250, t: "machine" },
      { n: "Pompes de jus", kw: 110, t: "pompe" },
      { n: "Centrifugeuses", kw: 400, t: "machine" },
      { n: "Compresseurs frigorifiques", kw: 300, t: "compresseur" },
      { n: "Air comprimé", kw: 132, t: "compresseur" },
      { n: "Station de lavage", kw: 90, t: "pompe" }
    ],
    alerts: [
      { lvl: "warn", d: 1, txt: "Pompes de jus : profil de puissance instable depuis 30 heures.", reco: "Vérifier la cavitation et le niveau du bac amont." },
      { lvl: "info", d: 4, txt: "Air comprimé : charge de nuit à 41 % sans production associée.", reco: "Rechercher les fuites sur le réseau de l'atelier conditionnement." }
    ],
    measures: ["Sous-comptage par atelier, croisé avec la production", "kWh par volume produit, campagne par campagne", "Utilités : froid, air comprimé, vapeur", "Délestage programmé des postes non critiques"],
    entry: "Instrumenter une ligne et ses utilités sur une campagne complète."
  },
  {
    id: "rail", kiosk: "secteur", num: "08", img: "img/secteur-08.jpg", pdf: "plaquettes/fiche-08-rail.pdf", icon: "train",
    title: "Infrastructure ferroviaire et mobilité verticale",
    tagline: "Une donnée énergétique commune pour piloter un parc multimarque selon l'usage réel.",
    fact: "Déploiement en cours dans une grande gare européenne, extension à l'étude.",
    site: "Sous-station et gare voyageurs", place: "Parc multimarque, 3 générations",
    ipe: { label: "kWh par 1 000 cycles", base: 42, unit: "kWh/1000 cycles" },
    departs: [
      { n: "Escalator E5, marque C", kw: 18, t: "escalator" },
      { n: "Escalator E6, marque A", kw: 15, t: "escalator" },
      { n: "Ascenseur PMR quai 2", kw: 11, t: "ascenseur" },
      { n: "Portes palières", kw: 4, t: "porte" },
      { n: "Auxiliaires sous-station", kw: 60, t: "charge" },
      { n: "Chauffage d'aiguillages", kw: 80, t: "chauffage" }
    ],
    alerts: [
      { lvl: "warn", d: 5, txt: "Chauffage d'aiguillages actif par 9 °C extérieur.", reco: "Asservir le chauffage à la température de rail." },
      { lvl: "info", d: 0, txt: "E5 : temps de marche 21 h par jour, maintenance calendaire inadaptée.", reco: "Passer E5 en maintenance basée sur l'usage réel." }
    ],
    measures: ["Profil de puissance appareil par appareil", "Remontée harmonisée d'un parc multimarque", "Comparaison des équipements, détection des surconsommations", "Cycles et temps de marche pour la maintenance"],
    entry: "Instrumenter un panel multimarque d'escalators, d'ascenseurs et de portes."
  },
  {
    id: "verre", kiosk: "secteur", num: "09", img: "img/secteur-09.jpg", pdf: "plaquettes/fiche-09-verre.pdf", icon: "port",
    title: "Verreries, ports et manutention lourde",
    tagline: "Un arrêt de four non planifié endommage l'outil de production lui-même.",
    fact: "Chaleur, vibrations, exposition saline : la mesure reste dans l'armoire.",
    site: "Terminal portuaire conteneurs", place: "Portiques, convoyeurs et centrale d'air",
    ipe: { label: "kWh par conteneur manutentionné", base: 4.8, unit: "kWh/EVP" },
    departs: [
      { n: "Portique STS 2, levage", kw: 900, t: "machine" },
      { n: "Portique STS 2, translation", kw: 300, t: "machine" },
      { n: "Grue de parc RTG 7", kw: 400, t: "machine" },
      { n: "Convoyeur vrac", kw: 110, t: "convoyeur" },
      { n: "Centrale d'air", kw: 160, t: "compresseur" },
      { n: "Éclairage de parc", kw: 120, t: "eclairage" }
    ],
    alerts: [
      { lvl: "crit", d: 0, txt: "Levage STS 2 : pics de courant en hausse de 8 % à charge identique.", reco: "Inspecter le frein et les câbles de levage." },
      { lvl: "info", d: 5, txt: "Éclairage de parc à pleine puissance sur des travées inoccupées.", reco: "Gradation par zone selon l'occupation du parc." }
    ],
    measures: ["Sous-comptage par four, ligne de formage et compresseur", "Suivi par engin et par poste en manutention", "Consommation des compresseurs d'air", "Délestage des auxiliaires non critiques"],
    entry: "Instrumenter un four et sa centrale d'air, ou un portique et ses auxiliaires."
  }
];
