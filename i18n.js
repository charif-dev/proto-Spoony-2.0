/* Spoony 2.0 - démonstration interne. Langues FR / EN.
   Le français est le texte de la page. Le dictionnaire UI_EN associe chaque texte français à son équivalent anglais. */
(function () {
  "use strict";

  const UI_EN = {
    /* titre et bandeau */
    "Spoony 2.0 · Démonstration interne · DotVision": "Spoony 2.0 · Internal demo · DotVision",
    "Démonstration interne réservée à la direction de DotVision · Données de site fictives · Ne pas diffuser": "Internal demo for DotVision management only · Fictional site data · Do not distribute",
    "Messages": "Messages", "Thèmes": "Themes", "9 secteurs": "9 sectors", "Domaines": "Domains", "Architecture": "Architecture", "Gamme": "Range", "Projets": "Projects", "Contact": "Contact",

    /* hero */
    "Spoony 2.0 · Kick-off 2027": "Spoony 2.0 · Kick-off 2027",
    "L'intelligence descend": "Intelligence moves down",
    "dans l'armoire.": "into the cabinet.",
    "Spoony 2.0 mesure chaque départ électrique, repère les dérives et les micro-coupures, et rend la donnée à l'exploitant. Aucun capteur sur la machine.": "Spoony 2.0 measures every electrical feeder, spots drifts and micro-outages, and hands the data back to the operator. No sensor on the machine.",
    "Voir les animations": "Watch the animations",
    "Les messages porteurs": "The key messages",
    "15 animations": "15 animations",
    "6 thèmes, 9 secteurs": "6 themes, 9 sectors",
    "Un boîtier modulaire": "A modular unit",
    "base, mesure, LTE, UPS": "base, measurement, LTE, UPS",
    "Rien ne sort du site": "Nothing leaves the site",
    "données à l'exploitant": "data stays with the operator",
    "Boîtier Spoony 2.0 et ses modules": "Spoony 2.0 unit and its modules",
    "Départ broyeur BK2": "Mill feeder BK2",
    "2,71 MW · mesuré": "2.71 MW · measured",
    "Agent Spoony": "Spoony agent",
    "Dérive +5,8 %": "Drift +5.8%",

    /* messages */
    "Messages porteurs": "Key messages",
    "Quatre raisons d'acheter, une par décideur.": "Four reasons to buy, one per decision maker.",
    "L'obligation ouvre le compte quand elle est datée et que le client n'y satisfait pas encore. Ailleurs, le problème d'exploitation chiffré par le client passe en premier.": "The obligation opens the account when it is dated and the client does not yet comply. Elsewhere, the operating problem quantified by the client comes first.",
    "NOT · RSE": "NOT · CSR",
    "SÉCURITÉ · CRA, NIS2": "SECURITY · CRA, NIS2",
    "ROI · chiffre du client": "ROI · client's figure",
    "23,6 GWh par an : certification obligatoire": "23.6 GWh a year: certification mandatory",
    "La norme exige un plan de collecte des données sur les usages énergétiques significatifs. Spoony fournit cette mesure depuis les armoires existantes.": "The standard requires a data collection plan on significant energy uses. Spoony supplies that measurement from the existing cabinets.",
    "Échéance : 11-10-2027": "Deadline: 11 Oct 2027",
    "Loi n° 2025-391 du 30-04-2025, ecologie.gouv.fr": "Law no. 2025-391 of 30 Apr 2025, ecologie.gouv.fr",
    "Une donnée énergie traçable à la source": "Energy data traceable to the source",
    "Les donneurs d'ordre restés dans la CSRD publient leur consommation dans un rapport audité. Une machine qui mesure la sienne leur fournit la preuve.": "Customers still within the CSRD publish their consumption in an audited report. A machine that measures its own gives them the proof.",
    "Transposition Omnibus I : 19-03-2027": "Omnibus I transposition: 19 Mar 2027",
    "Directive (UE) 2026/470 : plus de 1 000 salariés et 450 M€": "Directive (EU) 2026/470: over 1,000 employees and EUR 450 M",
    "Un objet connecté qui ne commande rien": "A connected device that commands nothing",
    "L'IA observe et recommande, l'automate commande. Mise à jour à distance du parc installé et signalement des failles exploitées.": "The AI observes and recommends, the PLC commands. Remote update of the installed base and reporting of exploited vulnerabilities.",
    "CRA : 11-12-2027 · NIS2 votée le 17-11-2026": "CRA: 11 Dec 2027 · NIS2 voted on 17 Nov 2026",
    "Règlement (UE) 2024/2847 · loi Résilience, 1re lecture": "Regulation (EU) 2024/2847 · French Resilience bill, 1st reading",
    "Combien vous coûte une heure d'arrêt ?": "What does one hour of downtime cost you?",
    "Spoony horodate les micro-coupures et les dérives de chaque équipement. Le calcul part du coût d'arrêt du client, sans pourcentage promis.": "Spoony timestamps the micro-outages and drifts of each piece of equipment. The calculation starts from the client's downtime cost, with no promised percentage.",
    "Méthode dans chaque application": "Method built into every application",
    "Onglet « Coût d'arrêt »": "Tab « Downtime cost »",
    "La conformité ouvre le budget, la mesure le rembourse.": "Compliance opens the budget, measurement pays it back.",
    "Ligne directrice proposée, à trancher en séance": "Proposed guideline, to be settled in session",

    /* kiosques */
    "Kiosque 1 · Thèmes couverts": "Kiosk 1 · Themes covered",
    "Une même mesure, de l'usine à la gare.": "One measurement, from the plant to the station.",
    "Chaque thème ouvre son animation : l'application Spoony 2.0 sur un site type, avec ses départs, ses alertes et ses indicateurs.": "Each theme opens its animation: the Spoony 2.0 application on a typical site, with its feeders, alerts and indicators.",
    "Kiosque 2 · 9 cas d'usage industriels": "Kiosk 2 · 9 industrial use cases",
    "Là où le capteur sur machine atteint ses limites.": "Where machine-mounted sensors reach their limits.",
    "Poussière, chaleur, lavage haute pression, pompes immergées : la mesure reste dans l'armoire. Chaque fiche ouvre son animation et sa plaquette.": "Dust, heat, high-pressure washdown, submersible pumps: the measurement stays in the cabinet. Each sheet opens its animation and its brochure.",

    /* domaines */
    "Domaines · repris du site dotvision.com": "Domains · taken from dotvision.com",
    "Quatre domaines, une même chaîne de mesure.": "Four domains, one measurement chain.",
    "Le site présente DotVision par domaine d'application. La démonstration reprend les trois domaines où Spoony mesure, et signale celui où la gamme répond par d'autres produits.": "The website presents DotVision by application domain. The demo keeps the three domains where Spoony measures, and flags the one where the range answers with other products.",
    "Industrie 5.0": "Industry 5.0",
    "Rendre chaque équipement communicant": "Make every piece of equipment communicate",
    "Un sous-compteur posé en quelques dizaines de minutes, des données à la seconde pour suivre les moyens de production, et des protocoles standards pour s'intégrer à l'existant.": "A sub-meter fitted in a few tens of minutes, data to the second to follow production assets, and standard protocols to plug into what is already there.",
    "Spoony · Aloha": "Spoony · Aloha",
    "Voir les 9 secteurs": "See the 9 sectors",
    "Bâtiment intelligent": "Smart building",
    "Mesurer l'énergie par usage": "Measure energy by use",
    "L'efficacité énergétique des bâtiments, des villes et des transports passe par de nouveaux moyens de suivi, de pilotage et d'optimisation, jusqu'aux réseaux d'énergie intelligents.": "Energy efficiency in buildings, cities and transport calls for new means of monitoring, control and optimization, up to smart energy grids.",
    "Spoony": "Spoony",
    "Voir les thèmes": "See the themes",
    "Transport et mobilité": "Transport and mobility",
    "Du matériel roulant à la borne de recharge": "From rolling stock to the charging station",
    "Énergie des trains et des infrastructures, température et humidité en wagon, détection d'arcs sur ligne aérienne, géolocalisation du matériel, supervision de la recharge électrique.": "Energy of trains and infrastructure, temperature and humidity in wagons, arc detection on overhead lines, rolling stock geolocation, supervision of electric charging.",
    "Spoony · Aloha · Holi": "Spoony · Aloha · Holi",
    "Sécurité et défense": "Security and defense",
    "Surveillance et protection sur mesure": "Tailored surveillance and protection",
    "Solutions dédiées aux forces de l'ordre et d'intervention, et à la sécurisation de grands sites sensibles. Ce domaine ne repose pas sur Spoony.": "Solutions for law enforcement and intervention forces, and for securing large sensitive sites. This domain does not rely on Spoony.",
    "Pumba · Blue Forest · Blue Panda · Blue Leaf": "Pumba · Blue Forest · Blue Panda · Blue Leaf",
    "Hors périmètre de la démo": "Outside the demo's scope",
    "Source : rubrique Solutions de dotvision.com, consultée le 22-11-2026.": "Source: Solutions section of dotvision.com, viewed on 22 Nov 2026.",

    /* architecture */
    "Du départ électrique à la décision.": "From the electrical feeder to the decision.",
    "Le différenciateur tient au coût de déploiement et à la densité de mesure. L'analyse de signature électrique existe depuis les années 1990 : Spoony la rend posable partout.": "The differentiator is deployment cost and measurement density. Electrical signature analysis has existed since the 1990s: Spoony makes it fit anywhere.",
    "01 · MESURE": "01 · MEASURE",
    "Au départ, dans l'armoire": "At the feeder, in the cabinet",
    "Rail DIN 3/2, monophasé ou triphasé. Les compteurs existants remontent par Modbus ou LoRa, sans remplacement.": "DIN 3/2 rail, single or three-phase. Existing meters report through Modbus or LoRa, with no replacement.",
    "02 · ANALYSE": "02 · ANALYSIS",
    "Dans le boîtier": "Inside the unit",
    "Alarmes, tâches et scripts programmables. Dérives, marches à vide et micro-coupures repérées sur place.": "Programmable alarms, tasks and scripts. Drifts, idle running and micro-outages spotted on site.",
    "03 · RESTITUTION": "03 · DELIVERY",
    "Vers les outils du site": "To the site's tools",
    "EMS, SCADA ou MES par Modbus, MQTT(S), FTP(S), HTTP(S). Ethernet, WiFi, LTE ou LoRa.": "EMS, SCADA or MES through Modbus, MQTT(S), FTP(S), HTTP(S). Ethernet, WiFi, LTE or LoRa.",
    "04 · DÉCISION": "04 · DECISION",
    "Par l'exploitant": "By the operator",
    "L'IA recommande, l'automate commande, l'opérateur valide. La consigne ne quitte jamais la régulation.": "The AI recommends, the PLC commands, the operator approves. The setpoint never leaves the control loop.",
    "Cohabitation avec la 1.5": "Coexistence with the 1.5",
    "La 2.0 lit les mesures déjà en place, sans dépose.": "The 2.0 reads the measurements already in place, with no removal.",
    "Le coût posé décide": "The installed cost decides",
    "Le seuil de délégation d'achat se franchit sur l'installation.": "The purchasing delegation threshold is crossed on installation.",
    "Les données restent la propriété de l'exploitant.": "The data remains the operator's property.",
    "Capacités annoncées sur le site pour Spoony 2.0": "Capabilities announced on the website for Spoony 2.0",
    "Plus puissant": "More powerful",
    "IA embarquée": "Embedded AI",
    "Analyse harmonique": "Harmonic analysis",
    "Jusqu'à 10 mesures triphasées": "Up to 10 three-phase measurements",
    "Entrées impulsionnelles": "Pulse inputs",
    "Extensible": "Expandable",
    "API REST HTTP": "HTTP REST API",
    "Source : page Spoony 2.0 de dotvision.com, consultée le 22-11-2026. Le site qualifie son image de non contractuelle.": "Source: Spoony 2.0 page of dotvision.com, viewed on 22 Nov 2026. The site describes its image as non-contractual.",

    /* gamme */
    "Gamme · du capteur au cloud": "Range · from sensor to cloud",
    "Le boîtier, le système, la plateforme.": "The unit, the system, the platform.",
    "Spoony s'appuie sur trois briques logicielles de DotVision, de l'intelligence embarquée à la plateforme de gestion de parc.": "Spoony relies on three DotVision software building blocks, from embedded intelligence to the fleet management platform.",
    "EDGE": "EDGE",
    "Blue Leaf · IA embarquée": "Blue Leaf · Edge AI",
    "Décentraliser l'intelligence vers les objets pour ne remonter que la donnée utile.": "Push intelligence out to the devices so that only the useful data is sent up.",
    "OBJET": "DEVICE",
    "Blue Panda · système temps réel": "Blue Panda · real-time OS",
    "Système d'exploitation temps réel pour objets connectés, programmable en JavaScript, C ou C++.": "Real-time operating system for connected devices, programmable in JavaScript, C or C++.",
    "CLOUD": "CLOUD",
    "Blue Forest · plateforme": "Blue Forest · platform",
    "Gestion de parc et dialogue bidirectionnel avec le cloud, en nuage ou sur site : courtier MQTT et HTTPS, séries temporelles, alarmes.": "Fleet management and two-way dialogue with the cloud, hosted or on-premise: MQTT and HTTPS broker, time series, alarms.",
    "Sous-comptage énergétique": "Energy sub-metering",
    "Mono ou triphasé, pinces ouvrantes, passerelle Modbus, format rail DIN 3/2.": "Single or three-phase, split-core clamps, Modbus gateway, DIN 3/2 rail format.",
    "Sous-comptage modulaire": "Modular sub-metering",
    "Boîtier modulaire : base, mesure, LTE, UPS. Objet de cette démonstration.": "Modular unit: base, measurement, LTE, UPS. Subject of this demo.",
    "Passerelle multi-signaux": "Multi-signal gateway",
    "Acquisition de signaux variés, commande par IA ou à distance. 110 x 91 x 45 mm, pensée pour le matériel roulant.": "Acquisition of varied signals, control by AI or remotely. 110 x 91 x 45 mm, designed for rolling stock.",
    "Détection d'arcs électriques": "Electric arc detection",
    "Passerelle pour matériel roulant et installations électriques. 156 x 122 x 91 mm.": "Gateway for rolling stock and electrical installations. 156 x 122 x 91 mm.",
    "Nez intelligent": "Intelligent nose",
    "Détecteur portable de composés organiques volatils, destiné aux forces de l'ordre.": "Portable detector of volatile organic compounds, intended for law enforcement.",
    "Sources : pages produits de dotvision.com, consultées le 22-11-2026. Les dimensions sont celles publiées par le site.": "Sources: product pages of dotvision.com, viewed on 22 Nov 2026. Dimensions are those published by the site.",

    /* services */
    "Services": "Services",
    "De la preuve de concept à l'industrialisation.": "From proof of concept to industrialization.",
    "Deux offres complètent le produit : un laboratoire pour concevoir, une usine pour assembler.": "Two offers complete the product: a lab to design, a factory to assemble.",
    "IoT Lab": "IoT Lab",
    "Accompagnement sur mesure": "Tailored support",
    "Une équipe qui réunit matériel et logiciel conçoit des objets connectés, de la preuve de concept au produit industriel, sur des briques ouvertes et des protocoles standards.": "A team combining hardware and software designs connected devices, from proof of concept to industrial product, on open building blocks and standard protocols.",
    "Europrod": "Europrod",
    "Usine IoT dans l'Aube": "IoT factory in the Aube",
    "DotVision détient une participation dans Europrod Technologies, usine d'assemblage de petites et moyennes séries. Le site annonce une production relocalisée en France depuis 2022.": "DotVision holds a stake in Europrod Technologies, a factory for small and medium series assembly. The website states that production was relocated to France in 2022.",
    "Sources : pages IoT Lab, Europrod et Industrie 5.0 de dotvision.com, consultées le 22-11-2026. Statut de filiale ou de participation et périmètre de fabrication : à confirmer.": "Sources: IoT Lab, Europrod and Industry 5.0 pages of dotvision.com, viewed on 22 Nov 2026. Subsidiary or shareholding status and manufacturing scope: to be confirmed.",

    /* projets */
    "Projets collaboratifs": "Collaborative projects",
    "Des programmes de recherche avec des industriels et des laboratoires.": "Research programmes with manufacturers and laboratories.",
    "Le site recense dix projets. La démonstration en retient huit : énergie, ferroviaire et cybersécurité.": "The website lists ten projects. The demo keeps eight: energy, rail and cybersecurity.",
    "Ferroviaire": "Rail",
    "Bases d'un réseau ferroviaire européen résilient et à forte capacité, avec énergie, maintenance et information intégrées.": "Foundations of a resilient, high-capacity European rail network, with energy, maintenance and information integrated.",
    "Ferroviaire · énergie": "Rail · energy",
    "Solutions numériques pour suivre et exploiter les données d'énergie et d'actifs de tout le système ferroviaire.": "Digital solutions to monitor and use energy and asset data across the whole rail system.",
    "Bâtiment · mobilité": "Building · mobility",
    "Démonstrateurs de gestion énergétique de bâtiments et de mobilité électrique, organisés en micro-réseau à l'échelle d'un écoquartier.": "Demonstrators of building energy management and electric mobility, organized as a microgrid at eco-district scale.",
    "Énergie": "Energy",
    "Système d'information ouvert pour piloter les services d'énergie et le bilan carbone d'un écoquartier.": "Open information system to run the energy services and carbon footprint of an eco-district.",
    "Énergie urbaine": "Urban energy",
    "Lauréat du défi 1, villes et systèmes urbains, des défis numériques des Investissements d'avenir : outil d'aide à la décision sur le potentiel de flexibilité.": "Winner of challenge 1, cities and urban systems, in the Future Investments digital challenges: a decision-support tool on flexibility potential.",
    "Ville durable": "Sustainable city",
    "Capteurs et services pour la ville durable, dans le cadre d'un pôle de compétitivité.": "Sensors and services for the sustainable city, within a competitiveness cluster.",
    "Cybersécurité": "Cybersecurity",
    "Outils pour suivre, traiter et partager l'information de cybersécurité sur les infrastructures de télécommunications.": "Tools to monitor, handle and share cybersecurity information across telecom infrastructures.",
    "Vers des réseaux 5G sûrs et fiables.": "Towards secure and reliable 5G networks.",
    "Source : page Projets de dotvision.com, consultée le 22-11-2026. Le site déclare l'appartenance au pôle Systematic, à la French Tech et à la French Fab : à confirmer.": "Source: Projects page of dotvision.com, viewed on 22 Nov 2026. The site states membership of the Systematic cluster, French Tech and French Fab: to be confirmed.",

    /* presse */
    "Dans la presse": "In the press",
    "Ce que la presse a publié sur DotVision.": "What the press has published on DotVision.",
    "Le Nouvel Économiste": "Le Nouvel Économiste",
    "Entretien avec Guillaume Pelletier": "Interview with Guillaume Pelletier",
    "Des capteurs intelligents à Bar-sur-Aube": "Intelligent sensors in Bar-sur-Aube",
    "Le Journal du Parlement": "Le Journal du Parlement",
    "Innovation technologique : renforcer la sécurité du territoire national": "Technological innovation: strengthening the security of the national territory",
    "Ministère de l'Industrie": "Ministry of Industry",
    "Discours du ministre de l'Industrie": "Speech by the Minister for Industry",
    "Alstom conclut un partenariat avec DotVision": "Alstom concludes a partnership with DotVision",
    "Source : page Presse de dotvision.com, consultée le 22-11-2026.": "Source: Press page of dotvision.com, viewed on 22 Nov 2026.",
    "Voir la page Presse": "See the Press page",

    /* contact */
    "Demander un devis.": "Request a quote.",
    "Même parcours que sur le site. Dans cette démonstration, rien n'est envoyé.": "Same path as on the website. In this demo, nothing is sent.",
    "Nom": "Last name", "Prénom": "First name", "E-mail": "E-mail", "Mobile": "Mobile",
    "Société, facultatif": "Company, optional",
    "Votre demande": "Your request",
    "Demander un devis": "Request a quote",
    "Sites": "Sites",
    "Moissy-Cramayel": "Moissy-Cramayel",
    "Saint-Pierre-du-Perray": "Saint-Pierre-du-Perray",
    "Newark, Delaware, États-Unis": "Newark, Delaware, United States",
    "Presse": "Press",
    "Source : pages Contact et Presse de dotvision.com, consultées le 22-11-2026.": "Source: Contact and Press pages of dotvision.com, viewed on 22 Nov 2026.",

    /* pied de page */
    "DotVision · Spoony 2.0 · Démonstration interne, novembre 2026": "DotVision · Spoony 2.0 · Internal demo, November 2026",
    "Toutes les données de site sont fictives.": "All site data is fictional.",

    /* application */
    "Langue": "Language",
    "Précédent": "Previous",
    "Suivant": "Next",
    "Site": "Site",
    "EN DIRECT": "LIVE",
    "Données fictives": "Fictional data",
    "Fermer": "Close",
    "Temps réel": "Real time",
    "ISO 50001": "ISO 50001",
    "Qualité réseau": "Power quality",
    "Coût d'arrêt": "Downtime cost",
    "Sécurité": "Security",
    "Puissance appelée": "Power demand",
    "Énergie du jour": "Energy today",
    "IPÉ": "EnPI",
    "Micro-coupures sur 24 h": "Micro-outages over 24 h",
    "Marches à vide repérées": "Idle running spotted",
    "Alertes de l'agent": "Agent alerts",
    "Puissance ·": "Power ·",
    "90 dernières secondes": "Last 90 seconds",
    "Puissance mesurée": "Measured power",
    "Référence des 7 derniers jours": "7-day baseline",
    "Micro-coupure": "Micro-outage",
    "Courant L1": "Current L1", "Courant L2": "Current L2", "Courant L3": "Current L3",
    "Simuler une dérive": "Simulate a drift",
    "Simuler une micro-coupure": "Simulate a micro-outage",
    "Simuler une marche à vide": "Simulate idle running",
    "Simuler une erreur de câblage": "Simulate a wiring error",
    "Agent Spoony · alertes": "Spoony agent · alerts",
    "dans l'armoire": "in the cabinet",
    "L'agent observe et recommande. Il ne commande jamais : consignes, reprise sur incident et marche dégradée restent à l'automate.": "The agent observes and recommends. It never commands: setpoints, fault recovery and degraded mode stay with the PLC.",
    "Usages énergétiques significatifs": "Significant energy uses",
    "en or : 80 % de la consommation": "in gold: 80% of consumption",
    "Consommation mesurée départ par départ, sans répartition au prorata.": "Consumption measured feeder by feeder, with no pro-rata split.",
    "Plan de collecte des données": "Data collection plan",
    "jours avant le 11-10-2027": "days before 11 Oct 2027",
    "Usages énergétiques significatifs identifiés": "Significant energy uses identified",
    "Indicateur de performance énergétique mesuré, non réparti": "Energy performance indicator measured, not allocated",
    "Situation énergétique de référence sur 12 mois": "Energy baseline over 12 months",
    "Variables pertinentes : production à raccorder au MES": "Relevant variables: production to be connected to the MES",
    "Couverture à porter à 100 % des usages significatifs": "Coverage to be raised to 100% of significant uses",
    "Générer le rapport pour l'auditeur": "Generate the auditor report",
    "Harmoniques de courant ·": "Current harmonics ·",
    "version Pro": "Pro version",
    "THDi": "THDi",
    "Facteur de puissance": "Power factor",
    "Résolution": "Resolution",
    "Journal des micro-coupures": "Micro-outage log",
    "horodatage à la milliseconde": "millisecond timestamp",
    "Coût des arrêts non planifiés": "Cost of unplanned stops",
    "chiffres du client": "client's figures",
    "Coût d'une heure d'arrêt de la ligne (€)": "Cost of one hour of line downtime (€)",
    "Arrêts non planifiés par an": "Unplanned stops per year",
    "Durée moyenne d'un arrêt (h)": "Average duration of a stop (h)",
    "Part des arrêts précédés d'une dérive électrique, selon le client (%)": "Share of stops preceded by an electrical drift, according to the client (%)",
    "Coût annuel exposé": "Annual exposed cost",
    "dont anticipable selon l'hypothèse du client": "of which anticipable under the client's assumption",
    "Énergie consommée sans production": "Energy consumed without production",
    "marches à vide": "idle running",
    "kWh à vide mesurés sur 12 mois": "Idle kWh measured over 12 months",
    "Prix de l'électricité du site (€/MWh)": "Site electricity price (€/MWh)",
    "Valeur de l'énergie consommée à vide": "Value of the energy consumed idle",
    "Méthode de calcul, pas promesse : chaque montant part d'une valeur saisie par le client. Aucun pourcentage d'économie n'est annoncé.": "A calculation method, not a promise: every amount starts from a value entered by the client. No savings percentage is announced.",
    "Données": "Data",
    "La donnée reste dans le réseau de l'exploitant et alimente ses propres outils. L'accès distant est un service activé à la demande.": "The data stays in the operator's network and feeds its own tools. Remote access is a service enabled on request.",
    "Flux": "Flows",
    "Protocoles chiffrés": "Encrypted protocols",
    "MQTTS, HTTPS et FTPS vers la supervision. Modbus maître et esclave sur le réseau local.": "MQTTS, HTTPS and FTPS to the supervision. Modbus master and slave on the local network.",
    "Parc": "Fleet",
    "Mise à jour à distance": "Remote update",
    "Correctifs déployés sur le parc installé, condition pour signaler et corriger une faille exploitée au titre du CRA.": "Patches deployed across the installed base, a condition for reporting and fixing an exploited vulnerability under the CRA.",
    "Journal de sécurité": "Security log",
    "extrait": "excerpt",
    "Horodatage": "Timestamp",
    "Événement": "Event",
    "Statut": "Status",
    "Connexion de la supervision du site, certificat valide": "Site supervision connection, valid certificate",
    "Autorisé": "Allowed",
    "Tentative d'accès depuis une adresse hors liste": "Access attempt from an address outside the allow list",
    "Bloqué": "Blocked",
    "Mise à jour logicielle déployée sur 6 boîtiers": "Software update deployed on 6 units",
    "Appliquée": "Applied",
    "Hier": "Yesterday",
    "Accès distant de maintenance ouvert 45 min sur demande du site": "Remote maintenance access opened for 45 min at the site's request",
    "Clôturé": "Closed",
    "Principe d'architecture : l'IA observe et recommande, l'automate commande. Un agent non déterministe ne reçoit jamais la main sur le procédé.": "Architecture principle: the AI observes and recommends, the PLC commands. A non-deterministic agent is never given control of the process.",
    "Principe d'architecture :": "Architecture principle:"
  };

  /* ---------- Textes dynamiques ---------- */
  const JS = {
    fr: {
      theme: "THÈME", fiche: "FICHE SECTEUR", by: "Spoony 2.0 par DotVision", band: "Sous-comptage et pilotage énergétique",
      play: "Voir l'animation", kak: "Kakémono", pdf: "Plaquette PDF", entry: "Point d'entrée :",
      tree: "TGBT · Armoire A1 · {n} départs mesurés", treefoot: "+ 4 compteurs existants remontés par passerelle Modbus, sans remplacement.",
      vsref: "+{x} % vs référence", inref: "dans la référence", now: "maintenant",
      lvl_crit: "Priorité haute", lvl_warn: "À traiter", lvl_info: "Optimisation",
      reco: "Recommandation :", ok: "Valider", later: "Plus tard",
      done_ok: "Validé par l'opérateur · ordre de travail créé dans la GMAO", done_later: "Reporté au prochain point d'équipe",
      drift_txt: "Dérive de +{pct} % sur {n} par rapport à la référence des 7 derniers jours, à production égale.",
      drift_reco: "Contrôle mécanique au prochain arrêt planifié. L'automate garde la commande de l'équipement.",
      drift_toast: "Dérive injectée sur {n}. Spoony la repère en quelques secondes.",
      cut_txt: "Micro-coupure de {ms} ms horodatée à {t}, {k} départs touchés.",
      cut_reco: "Croiser avec le journal du distributeur et chiffrer l'arrêt induit dans l'onglet Coût d'arrêt.",
      cut_ev: "Micro-coupure, redémarrage de la ligne requis", all: "Tous départs",
      idle_txt: "{n} tourne à vide : 18 % de sa puissance nominale, aucune charge détectée.",
      idle_reco: "Arrêt automatique après 5 minutes sans charge, à paramétrer dans l'automate.",
      phase_txt: "Inversion des phases L2 et L3 détectée à la pose sur {n}.",
      phase_reco: "Correction appliquée par le boîtier, sans retour de l'électricien sur site.",
      phase_toast: "Erreur de câblage corrigée par le boîtier : la pose reste valide.",
      iso_toast: "Rapport des usages énergétiques significatifs généré (simulation).",
      ev1: "Creux de tension réseau amont", ev2: "Micro-coupure sans arrêt machine",
      rank: "Rang {r}", measured: "mesuré",
      c_ts: "Horodatage", c_dur: "Durée", c_dep: "Départs", c_st: "Statut",
      quote_toast: "Démonstration : aucun message n'a été envoyé."
    },
    en: {
      theme: "THEME", fiche: "SECTOR SHEET", by: "Spoony 2.0 by DotVision", band: "Energy sub-metering and control",
      play: "Watch the animation", kak: "Roll-up banner", pdf: "PDF brochure (French)", entry: "Entry point:",
      tree: "Main LV switchboard · Cabinet A1 · {n} feeders measured", treefoot: "+ 4 existing meters read through a Modbus gateway, no replacement.",
      vsref: "+{x}% vs baseline", inref: "within baseline", now: "now",
      lvl_crit: "High priority", lvl_warn: "To handle", lvl_info: "Optimization",
      reco: "Recommendation:", ok: "Approve", later: "Later",
      done_ok: "Approved by the operator · work order created in the CMMS", done_later: "Postponed to the next team meeting",
      drift_txt: "Drift of +{pct}% on {n} against the 7-day baseline, at equal production.",
      drift_reco: "Mechanical check at the next planned stop. The PLC keeps command of the equipment.",
      drift_toast: "Drift injected on {n}. Spoony spots it within seconds.",
      cut_txt: "Micro-outage of {ms} ms timestamped at {t}, {k} feeders affected.",
      cut_reco: "Cross-check with the grid operator's log and cost the resulting stop in the Downtime cost tab.",
      cut_ev: "Micro-outage, line restart required", all: "All feeders",
      idle_txt: "{n} is running idle: 18% of its rated power, no load detected.",
      idle_reco: "Automatic stop after 5 minutes with no load, to be set in the PLC.",
      phase_txt: "Phases L2 and L3 found swapped at commissioning on {n}.",
      phase_reco: "Correction applied by the unit, with no return visit from the electrician.",
      phase_toast: "Wiring error corrected by the unit: the installation stays valid.",
      iso_toast: "Significant energy uses report generated (simulation).",
      ev1: "Upstream grid voltage dip", ev2: "Micro-outage with no machine stop",
      rank: "Order {r}", measured: "measured",
      c_ts: "Timestamp", c_dur: "Duration", c_dep: "Feeders", c_st: "Status",
      quote_toast: "Demo: no message has been sent."
    }
  };

  /* ---------- Moteur ---------- */
  let LANG = "fr";
  const T = (l, k, v) => {
    let s = (JS[l] && JS[l][k]) || JS.fr[k] || k;
    if (v) Object.keys(v).forEach((x) => (s = s.split("{" + x + "}").join(v[x])));
    return s;
  };
  window.T = T;
  window.t = (k, v) => T(LANG, k, v);
  window.getLang = () => LANG;
  window.locale = () => (LANG === "en" ? "en-GB" : "fr-FR");

  /* nœuds de texte et attributs traduisibles, collectés une fois au chargement */
  let nodes = [], attrs = [];
  const SKIP = { SCRIPT: 1, STYLE: 1, CANVAS: 1, TEXTAREA: 1 };
  function collect() {
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      if (SKIP[n.parentNode.nodeName]) continue;
      const key = n.nodeValue.trim();
      if (!/[A-Za-zÀ-ÿ]/.test(key)) continue;
      nodes.push({ n, fr: n.nodeValue, key });
    }
    document.querySelectorAll("[alt],[aria-label]").forEach((el) => {
      ["alt", "aria-label"].forEach((a) => { const v = el.getAttribute(a); if (v && UI_EN[v]) attrs.push({ el, a, fr: v }); });
    });
  }
  function applyStatic(lang) {
    nodes.forEach((o) => {
      if (lang === "en" && UI_EN[o.key]) {
        const lead = o.fr.match(/^\s*/)[0], trail = o.fr.match(/\s*$/)[0];
        o.n.nodeValue = lead + UI_EN[o.key] + trail;
      } else o.n.nodeValue = o.fr;
    });
    attrs.forEach((o) => o.el.setAttribute(o.a, lang === "en" ? UI_EN[o.fr] : o.fr));
    document.title = lang === "en" ? UI_EN["Spoony 2.0 · Démonstration interne · DotVision"] : "Spoony 2.0 · Démonstration interne · DotVision";
    document.documentElement.lang = lang;
  }

  window.setLang = function (lang) {
    if (lang !== "fr" && lang !== "en") lang = "fr";
    LANG = lang;
    applyStatic(lang);
    document.querySelectorAll(".lang button").forEach((b) => b.classList.toggle("on", b.dataset.lang === lang));
    const dur = document.getElementById("c-duree");
    if (dur && /^3[.,]5$/.test(dur.value)) dur.value = lang === "en" ? "3.5" : "3,5";
    try { localStorage.setItem("spoony-demo-lang", lang); } catch (e) {}
    if (typeof window.onLang === "function") window.onLang(lang);
  };

  window.initLang = function () {
    collect();
    let l = "fr";
    try {
      const q = new URLSearchParams(location.search).get("lang");
      l = q || localStorage.getItem("spoony-demo-lang") || ((navigator.language || "").toLowerCase().startsWith("en") ? "en" : "fr");
    } catch (e) {}
    document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => window.setLang(b.dataset.lang)));
    window.setLang(l);
  };
  window.__UI_EN = UI_EN;
})();
