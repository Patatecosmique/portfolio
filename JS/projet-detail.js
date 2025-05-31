// Récupérer l'ID du projet depuis l'URL
const params = new URLSearchParams(window.location.search);
const projetId = params.get('id');

// Contenu des projets
const projets = {
    1: {
        titre: "Projet 1 - Se sensibiliser à l'hygiène informatique",
        description: `Dans ce projet, nous étions un groupe de quatre étudiants et nous devions réaliser notre premier mini réseau local. Nous avions à notre disposition des switches, un routeur ainsi qu’un serveur Proxmox pour la virtualisation. Nous avons appris à configurer les équipements réseau, à connecter les différentes machines et à assurer la communication entre elles.
        Ce projet nous a permis de découvrir la gestion des adresses IP, la configuration des VLANs, ainsi que l'installation et l'administration de machines virtuelles via Proxmox. Afin de garantir une bonne organisation et la réussite du projet, nous avons mis en place un planning et nous nous sommes réparti les tâches en fonction des compétences et intérêts de chacun. Cette collaboration nous a permis de travailler efficacement en équipe tout en développant nos compétences techniques.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `Réalisations du <a href="./preuves/MOOC.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">MOOC</a> de l'ANSSI sur la sécurité informatique.`
            },
            {
                titre: "Preuve 2",
                description: `Création d'une <a href="./preuves/Keepas.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">notice explicative</a> pour guider l'utilisation du gestionnaire de mots de passe KeepassXC.`
            },
            {
                titre: "Preuve 3",
                description: `
                    Sensibilisation aux risques liés aux mots de passe : démonstration de la rapidité avec laquelle un mot de passe faible peut être piraté, parfois en moins de 10 minutes, voire en quelques secondes :
                    <br>
                    <a href="./preuves/brute-force.jpg" target="_blank" rel="noopener noreferrer" class="custom-link">
                        Exemple de code brute force
                    </a>`
            }
        ],
        implication: "Pour ce projet, j'ai réalisé la vidéo expliquant comment utiliser un gestionnaire de mots de passe et j'ai également rédigé une notice explicative. J'ai contribué à la création du script pour le craquage de mots de passe et participé activement à l'élaboration du diaporama, en apportant des retours constructifs, qu'ils soient positifs ou négatifs.",
        reflexion: `Ce projet était très intéressant car il m'a permis de découvrir les problèmes liés aux mots de passe trop faibles et les potentielles attaques qui peuvent en découler. J'ai beaucoup appris sur les bonnes pratiques en matière de sécurité informatique, ce qui donne une première vue essentielle sur ce domaine. Cela m'a également sensibilisé à l'importance de protéger ses données personnelles.
        Notre oral s'est globalement bien passé, mais il a été trop long. Si c'était à refaire, il faudrait mieux cadrer notre temps de parole pour que chacun puisse s'exprimer de façon concise et que la présentation reste dynamique et respecte le temps imparti.`,
    },
    2: {
        titre: "Projet 2 - S'initier aux réseaux informatiques",
        description: `Dans ce projet, nous étions un groupe de 4 étudiants et nous devions réaliser notre premier mini réseau local. Nous avions à notre disposition des switches, un routeur et un serveur Proxmox pour la virtualisation. Nous avons appris à configurer les équipements réseau, à connecter les différentes machines et à assurer la communication entre elles. Ce projet nous a permis de découvrir la gestion des adresses IP, la configuration des VLANs, ainsi que l'installation et la gestion de machines virtuelles sur Proxmox. Nous avons aussi mis en place un planning pour organiser les tâches et assurer la réussite du projet en équipe.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `Création de <a href="./preuves/shema-physique_logique.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">schéma physique et logique</a> d'un réseau local.`
            },
            {
                titre: "Preuve 2",
                description: `Mise en place d'un planning détaillé à l'aide de GanttProject pour la gestion des tâches chronologiques et de 
                <a href="./img/trello.png" target="_blank" rel="noopener noreferrer" class="custom-link">Trello</a> pour le suivi collaboratif et la répartition des responsabilités.`
            },
            {
                titre: "Preuve 3",
                description: '<a href="./preuves/config-commutateur.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">Configuration</a> du matériel réseau.'
            }
        ],
        implication: `Sur ce projet, j'ai configuré une machine virtuelle sur le serveur Proxmox, en installant et paramétrant différents services comme Samba, Apache et d'autres outils nécessaires au bon fonctionnement de la VM. J'ai également passé beaucoup de temps à diagnostiquer et corriger des problèmes liés à la configuration réseau, notamment sur les switches. J'ai participé à la mise en place des adresses IP, à la gestion des VLANs, et à la documentation des étapes réalisées pour faciliter le travail en équipe. Enfin, j'ai contribué à la coordination du groupe et à la répartition des tâches.`,
        reflexion: `Si c'était à refaire, nous organiserions le projet différemment. Nous avons perdu beaucoup de temps au début à essayer de comprendre les attendus du projet et il nous manquait certaines compétences techniques pour réaliser certaines tâches. De plus, au sein du groupe, une personne devait s'occuper de la configuration des switches, mais a perdu trop de temps à vouloir les configurer virtuellement sur Cisco Paket Tracer, ce qui s'est révélé être une perte de temps. Pour une prochaine fois, nous prendrions plus de temps pour bien répartir les rôles, nous former sur les outils nécessaires dès le début et nous concentrer sur des méthodes de configuration adaptées au matériel réellement disponible. Cela nous permettrait d'être plus efficaces et de mieux avancer en équipe.`,
    },
    3: {
        titre: "Projet 3 - Découvrir un dispositif de transmission",
        description: `Ce projet avait pour but de montrer ce qu'il se passe lorsqu'un câble subit des contraintes physiques, par exemple s'il est cassé, déchiré ou plié. Nous étions un groupe de 4 étudiants et nous devions réaliser différentes mesures sur des câbles en conditions normales et dégradées, puis rendre deux comptes rendus détaillés de ces mesures. Ce travail nous a permis de mieux comprendre l'impact des défauts physiques sur la transmission des signaux et d'apprendre à utiliser les appareils de mesure adaptés.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `Création d'un <a href="./preuves/photometrie.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">rapport détaillé sur les mesures photométriques</a>, incluant l'analyse des résultats et leur interprétation.`
            },
            {
                titre: "Preuve 2",
                description: `Rédaction d'un <a href="./preuves/DTF.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">rapport technique</a> sur les mesures effectuées sur un câble coaxial.`
            }
        ],
        implication: `Pour ce projet, j'ai rédigé les deux notices explicatives et réalisé toutes les mesures nécessaires ainsi que les calculs associés. J'ai aussi aidé certains groupes à comprendre les manipulations à effectuer et à interpréter les résultats. Mon implication a donc été à la fois technique et pédagogique, en contribuant à la réussite de mon groupe et en apportant mon aide aux autres.`,
        reflexion: `Si c'était à refaire, je pense que j'aurais dû davantage motiver les autres membres du groupe à s'impliquer, car nous n'étions vraiment que deux à travailler sérieusement sur le projet. J'aurais pu organiser une réunion en début de projet pour bien répartir les tâches, fixer des objectifs clairs pour chacun et suivre régulièrement l'avancement. Avec plus de participation de tous, nous aurions sûrement mieux réussi à comprendre les manipulations à réaliser et à avancer plus rapidement. Cela aurait permis de mieux répartir les tâches et d'améliorer la qualité de notre travail collectif.`,
    },
    4: {
        titre: "Projet 4 - Se présenter sur Internet",
        description:`Pour ce projet, je devais créer un site web sur le thème de mon choix, le concevoir de A à Z puis le publier en ligne via GitHub Pages. J'ai appris à structurer une page web, à utiliser HTML, CSS, et à gérer la mise en ligne du site. Ce projet m'a permis de découvrir le fonctionnement de GitHub, l'importance du versionnage et les étapes nécessaires pour rendre un site accessible à tous sur Internet.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `Création d'un site <a href="https://patatecosmique.github.io/DOFUS/" target="_blank" rel="noopener noreferrer" class="custom-link">web personnel</a>.`
            },
            {
                titre: "Preuve 2",
                description: `Lien vers le projet GitHub : <a href="https://github.com/Patatecosmique/DOFUS" target="_blank" rel="noopener noreferrer" class="custom-link">voir ici</a>. Ce dépôt contient l'ensemble du code source du site, la structure des fichiers, ainsi qu'un README détaillé pour faciliter la prise en main et la compréhension du projet.`,
            }
        ],
        implication: `J'ai réalisé entièrement ce site seul, en me documentant pour comprendre et mettre en œuvre certaines parties techniques. J'ai pris soin de bien commenter mon code afin que toute personne qui le consulte puisse s'y retrouver facilement. J'ai également rédigé un fichier README sur GitHub pour expliquer le fonctionnement du site et faciliter sa prise en main. Ce projet m'a permis de développer mon autonomie, ma capacité à rechercher des solutions et à structurer un projet web de A à Z.`,
        reflexion: `Ce projet m'a beaucoup plu car il m'a permis de découvrir la création et la publication d'un site web de A à Z. Si c'était à refaire, je prendrais encore plus de temps pour approfondir certains aspects techniques, comme le responsive design ou l'accessibilité, afin d'améliorer la qualité du site. J'aurais aussi pu demander plus de retours extérieurs pour corriger d'éventuelles erreurs ou améliorer l'expérience utilisateur. Cette remise en question me pousse à toujours vouloir progresser et à ne pas hésiter à solliciter l'avis d'autres personnes pour m'améliorer.`,
    },
    5: {
        titre: "Projet 5 - Traiter des données",
        description: "Ce projet porte sur la collecte, le traitement et l'analyse des données pour en tirer des informations utiles via une API. Nous étions deux à travailler sur ce projet et nous nous sommes réparti les tâches : chacun a pris en charge une partie du code. Nous avons exploré ensemble le fonctionnement de l'API Pokémon afin de comprendre comment récupérer et exploiter les données nécessaires. Ce travail nous a permis de découvrir l'utilisation des requêtes HTTP, la gestion des réponses JSON, et la façon d'intégrer ces données dans un programme Python pour générer des statistiques ou des fiches détaillées. Nous avons aussi appris à collaborer efficacement sur un même projet de développement.",
        preuves: [
            {
                titre: "Preuve 1",
                description: `Vidéo de démonstration de la création d'une fiche Pokémon en extrayant des données depuis une <a href="https://pokeapi.co/docs/v2#google_vignette" target="_blank" rel="noopener noreferrer" class="custom-link">API</a> en utilisant Python : 
                        <br>
                        <a href="./preuves/pokefiche.mp4" target="_blank" rel="noopener noreferrer" class="custom-link">Voir la vidéo</a>`
            },
            {
                titre: "Preuve 2",
                description: `Vidéo expliquant l'analyse des habitats Pokémon et la génération de statistiques détaillées à partir des données extraites : 
                        <br>
                        <a href="./preuves/pokestats.mp4" target="_blank" rel="noopener noreferrer" class="custom-link">Voir la vidéo</a>`
            },
            {
                titre: "Preuve 3",
                description: `Rapport détaillé sur notre évolution et les difficultés rencontrées durant la création du projet, incluant les solutions apportées pour surmonter ces obstacles : 
                        <br>
                        <a href="./preuves/rapport.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">Voir le rapport</a>`
            }
        ],
        implication: `Pour ce projet, j'ai pris en charge la partie du code qui m'était attribuée, même si j'ai rencontré des difficultés en Python. Pour progresser, j'ai demandé de l'aide à mon binôme, regardé des vidéos et fait des recherches pour mieux comprendre. J'ai également documenté tout mon code avec des commentaires pour faciliter la compréhension, et j'ai participé à la rédaction de la documentation du projet. Cette expérience m'a permis de développer ma persévérance et ma capacité à apprendre de nouvelles compétences.`,
        reflexion: `Si c'était à refaire, je pense que nous avons bien su nous organiser et répartir les tâches, ce qui nous a permis de ne pas perdre de temps. Cependant, nous aurions dû nous documenter davantage sur certains points précis de l'API Pokémon, car cela nous aurait permis de mieux comprendre certaines fonctionnalités et d'aller plus loin dans l'exploitation des données. Cette expérience montre l'importance de bien approfondir la documentation technique pour gagner en efficacité et en qualité de rendu.`,
    },
    6: {
        titre: "Projet 6 - Construire un réseau info pour une petite structure",
        description: `Ce projet avait pour objectif de concevoir et de mettre en place un réseau informatique adapté aux besoins d'une petite structure. Pour cela, nous avons suivi deux formations : un cours de 3h sur Active Directory de Microsoft et une formation Cisco NetAcad "Switching and Routing" de 70h. Après avoir validé ces deux modules, nous avons réalisé un TP d'entraînement qui consistait à créer un environnement Windows Server 2019. L'objectif était de comprendre les enjeux de la sécurité, d'implémenter des stratégies de groupe (GPO), des unités d'organisation (OU), des utilisateurs et des groupes. Nous devions également créer un domaine Active Directory et y intégrer des machines clientes afin de simuler un environnement professionnel complet et fonctionnel.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `"Notice cours collaboratif sur Microsoft sur Active Directory. : <a href="/preuves/microsoft.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">voir-ici</a>`
            },
            {
                titre: "Preuve 2",
                description: "Cour cisco NetAcad <a href='https://www.netacad.com/fr/launch?id=e61ecaba-2256-4eff-979b-b9d5d367a66b&tab=curriculum&view=7f78de6d-7390-55d2-9d5d-1f75b5fa6ec7' target='_blank' rel='noopener noreferrer' class='custom-link'>'Switching and Routing'</a>"
            },
        ],
        implication: `Pour ce projet, j'ai réalisé entièrement le TP d'entraînement sur Windows Server 2019, étant même le seul du groupe à l'avoir mené à terme. J'ai ensuite aidé mes camarades à comprendre les différentes étapes et à avancer dans leur propre travail. Je me suis aussi beaucoup investi dans la formation Cisco NetAcad "Switching and Routing", ce qui m'a permis de bien progresser sur la partie réseau. En revanche, j'ai moins suivi les cours sur Active Directory de Microsoft, ce qui est un point à améliorer.`,
        reflexion: `Ce projet m'a permis de développer de solides compétences en configuration de réseaux et en administration de serveurs. J'ai été fier d'avoir mené à bien tout le TP d'entraînement, ce qui m'a permis d'aider mes camarades et de renforcer ma compréhension. Le fait de m'être avancé dans le cours Cisco NetAcad m'a permis de me concentrer davantage sur le reste du projet, ce qui a été très bénéfique. Si c'était à refaire, je prendrais le temps de mieux équilibrer mon investissement entre la partie réseau (Cisco NetAcad) et la partie Active Directory de Microsoft, car une meilleure maîtrise des deux aspects m'aurait permis d'être encore plus efficace et polyvalent. Cette expérience m'a montré l'importance de la curiosité, de l'entraide et d'une approche équilibrée dans l'apprentissage.`,
    },
    7: {
        titre: "Projet 7 - Mesurer et caractériser un signal ou un système",
        description: `Pour ce projet, nous étions un groupe de six et il avait pour but de découvrir les dispositifs de transmission liés à la radiophonie et à la stéréophonie. Pour nous préparer, nous avons réalisé deux TP qui nous ont introduit aux notions essentielles et permis de passer la certification Matlab. Durant le projet, nous avons dû rendre deux notices : une en groupe et une en binôme. Dans le groupe, nous nous sommes réparti les tâches, par exemple une personne s'occupait de la mise en page de la notice. Ce projet nous a permis de découvrir toutes les fréquences radio présentes autour de nous et que nous pouvions capter grâce à une antenne.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `<a href='./preuves/CR1.pdf' target='_blank' rel='noopener noreferrer' class='custom-link'>Compte rendu de Groupe</a> sur l'étude approfondie de la monophonie et de la stéréophonie des radios captées autour du Campus 3, avec analyse des différentes fréquences reçues et des dispositifs de transmission utilisés.`,
            },
            {
                titre: "Preuve 2",
                description: `<a href='./preuves/CR2.pdf' target='_blank' rel='noopener noreferrer' class='custom-link'>Compte rendu Binome</a> sur l'étude approfondie de la téléphonie mobile autour du Campus 3, avec analyse des technologies utilisées, des fréquences captées et des dispositifs de transmission observés.`,            
            },
        ],
        implication: `Pour ce projet, j'ai beaucoup contribué à la compréhension globale du groupe, car nous n'étions vraiment que deux à travailler sérieusement. Nous nous sommes documentés et avons regardé des vidéos pour mieux comprendre les notions abordées et les résultats obtenus avec les graphiques générés via MATLAB. J'ai également rédigé les notices demandées et aidé à expliquer les manipulations et les résultats aux autres membres du groupe.`,
        reflexion: `Ce projet m'a permis de progresser sur la compréhension des dispositifs de transmission et l'analyse de signaux. Si c'était à refaire, j'encouragerais une implication plus active de tous les membres du groupe dès le début, afin de mieux répartir les tâches et d'aller plus loin dans l'analyse des résultats. Cette expérience m'a montré l'importance de la collaboration, de la curiosité et de la recherche de ressources complémentaires pour bien comprendre les sujets techniques.`,
    },
    8: {
        titre: "Projet 8 - Mettre en place une solution info pour l'entreprise",
        description: `Ce projet avait pour objectif de réaliser la version 2 d'une application météo en utilisant une API météo. Nous avons travaillé avec Java pour la partie back-end, et HTML/CSS pour l'interface utilisateur. Il fallait intégrer les données de l'API, améliorer l'affichage et l'expérience utilisateur, et rédiger un README complet sur GitHub pour expliquer le fonctionnement du projet et faciliter sa prise en main.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: "Site Web de l'application météo V2 : <a href='' target='_blank' rel='noopener noreferrer' class='custom-link'>voir ici</a>.",
            },
            {
                titre: "Preuve 2",
                description: "Lien ver le projet GitHub : <a href='https://github.com/Patatecosmique/SAE23-meteoV2-Pitois-Bastian' target='_blank' rel='noopener noreferrer' class='custom-link'>voir ici</a>. Ce dépôt contient l'ensemble du code source de l'application, la structure des fichiers, ainsi qu'un README détaillé.",
            },
            
        ],
        implication: `Pour ce projet, j'ai participé à l'intégration de l'API météo dans l'application, à l'amélioration de l'interface en HTML/CSS et à la rédaction du README sur GitHub. J'ai aussi contribué à la correction de bugs et à la documentation du code pour faciliter la compréhension.`,
        reflexion: `Ce projet m'a permis de renforcer mes compétences en développement web, en intégration d'API et en travail collaboratif. J'ai pu mettre en pratique mes connaissances en Java, HTML et CSS, tout en découvrant l'importance de la documentation technique avec la rédaction d'un README sur GitHub. Si c'était à refaire, je prendrais plus de temps pour tester différentes API météo afin de comparer leurs fonctionnalités et leur facilité d'intégration. J'approfondirais aussi la gestion des erreurs côté Java pour rendre l'application plus robuste. Enfin, une meilleure organisation de la répartition des tâches aurait permis d'optimiser mon travail et d'améliorer la qualité du rendu final.`,
    },
    9: {
        titre: "Projet 9 - Projet intégratif",
        description: "Ce projet final regroupe toutes les compétences acquises pour réaliser un projet complet et complexe.",
        preuves: [
            {
                titre: "Preuve 1",
                description: "Planification du projet."
            },
            {
                titre: "Preuve 2",
                description: "Rapport sur les étapes du projet."
            },
            {
                titre: "Preuve 3",
                description: "Présentation finale du projet."
            },
        ],
        implication: "",
        reflexion: "Ce projet m'a permis de mettre en pratique toutes les compétences acquises et de travailler sur un projet d'envergure."
    }
};



// Ajouter les apprentissages critiques pour chaque projet

const apprentissagesCritiques = {
    1: [
        { apprentissage: "AC11.02 Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "Acquis" },
        { apprentissage: "AC11.04 Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’interagir avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "Acquis" },
        { apprentissage: "AC11.05 Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "Acquis" },
    ],
    2: [
        { apprentissage: "AC11.01 Maîtriser les lois fondamentales de l’électricité afin d’intervenir sur des équipements de réseaux et télécommunications", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC11.02 Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "Acquis" },
        { apprentissage: "AC11.03 Configurer les fonctions de base du réseau local", commentaire: "Acquis" },
        { apprentissage: "AC11.04 Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’interagir avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC11.05 Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "Acquis" },
        { apprentissage: "AC11.06 Installer un poste client, expliquer la procédure mise en place", commentaire: "Acquis" },
    ],
    3: [
        { apprentissage: "AC12.01 Mesurer et analyser les signaux", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC12.03 Déployer des supports de transmission", commentaire: "En cours d'acquisition " },
        { apprentissage: "AC12.05 Communiquer avec un tiers (client, collaborateur…) et adapter son discours et sa langue à son interlocuteur", commentaire: "Acquis" },
    ],
    4: [
        { apprentissage: "AC13.01 Utiliser un système informatique et ses outils", commentaire: "Acquis" },
        { apprentissage: "AC13.04 Connaître l'architecture et les technologies d'un site web", commentaire: "Acquis" },
    ],
    5: [
        { apprentissage: "AC13.01 Utiliser un système informatique et ses outils", commentaire: "Acquis" },
        { apprentissage: "AC13.02 Lire, exécuter, corriger et modifier un programme", commentaire: "À améliorer" },
        { apprentissage: "AC13.03 Traduire un algorithme, dans un langage et pour un environnement donné", commentaire: "À améliorer" },
        { apprentissage: "AC13.04 Connaître l'architecture et les technologies d'un site web", commentaire: "Acquis" },
        { apprentissage: "AC13.05 Choisir les mécanismes de gestion de données adaptés au développement d’outils et argumenter ses choix", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC13.06 S'intégrer dans un environnement propice au développement et au travail collaboratif", commentaire: "Acquis" },
    ],
    6: [
        { apprentissage: "AC11.02 Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "Acquis" },
        { apprentissage: "AC11.03 Configurer les fonctions de base du réseau local", commentaire: "Acquis" },
        { apprentissage: "AC11.04 Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’interagir avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "Acquis" },
        { apprentissage: "AC11.05 Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC11.06 Installer un poste client, expliquer la procédure mise en place", commentaire: "Acquis" },
    ],
    7: [
        { apprentissage: "AC12.01 Mesurer et analyser les signaux", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC12.02 Caractériser des systèmes de transmission élémentaire et découvrir la modulation mathématique de leur fonctionnement", commentaire: "En cours d'acquisition" },
        { apprentissage: "AC12.03 Déployer des supports de transmission", commentaire: " En cours d'acquisition" },
        { apprentissage: "AC12.05 Communiquer avec un tiers (client, collaborateur…) et adapter son discours et sa langue à son interlocuteur", commentaire: "Acquis" },
    ],
    8: [
        { apprentissage: "AC13.01 Utiliser un système informatique et ses outils", commentaire: "Acquis" },
        { apprentissage: "AC13.02 Lire, exécuter, corriger et modifier un programme", commentaire: "Acquis" },
        { apprentissage: "AC13.03 Traduire un algorithme, dans un langage et pour un environnement donné", commentaire: "Acquis" },
        { apprentissage: "AC13.04 Connaître l'architecture et les technologies d'un site web", commentaire: "Acquis" },
        { apprentissage: "AC13.05 Choisir les mécanismes de gestion de données adaptés au développement d’outils et argumenter ses choix", commentaire: "Acquis" },
        { apprentissage: "AC13.06 S'intégrer dans un environnement propice au développement et au travail collaboratif", commentaire: "Acquis" },
    ],
    9: [
        { apprentissage: "Prend en compte tous les AC du semestre 2", commentaire: "" },
    ]
};

// Charger les détails du projet
if (projets[projetId]) {
    const projet = projets[projetId];

    // Mettre à jour le titre et la description
    document.getElementById("projet-titre").textContent = projet.titre;
    document.getElementById("projet-description").textContent = projet.description;

    // Ajouter les preuves dynamiquement
    const preuvesContainer = document.getElementById("projet-preuves");
    if (projet.preuves && preuvesContainer) {
        projet.preuves.forEach(preuve => {
            const preuveElement = document.createElement("div");
            preuveElement.classList.add("preuve");
            preuveElement.innerHTML = `
                <h4>${preuve.titre}</h4>
                <p>${preuve.description}</p>
            `;
            preuvesContainer.appendChild(preuveElement);
        });
    }

    // Ajouter une réflexion sur l'implication
    if (projet.implication) {
        document.getElementById("projet-implication-texte").textContent = projet.implication;
    } else {
        document.getElementById("projet-implication-texte").textContent = "Aucune réflexion sur l'implication disponible pour ce projet.";
    }


    // Mettre à jour la réflexion
    document.getElementById("projet-reflexion-texte").textContent = projet.reflexion;
} else {
    // Si l'ID du projet est invalide
    document.getElementById("projet-titre").textContent = "Projet non trouvé";
    document.getElementById("projet-description").textContent = "Aucun détail disponible pour ce projet.";
    document.getElementById("projet-preuves").innerHTML = "";
    document.getElementById("projet-reflexion-texte").textContent = "";
}

// Charger les apprentissages critiques dans le tableau
if (apprentissagesCritiques[projetId]) {
    console.log("On remplit le tableau !", apprentissagesCritiques[projetId]);
    const tableBody = document.getElementById("apprentissages-table");

    if (tableBody) {
        tableBody.innerHTML = ""; // Vide le tableau avant d'ajouter les lignes
        apprentissagesCritiques[projetId].forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.apprentissage}</td>
                <td>${item.commentaire}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}