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
        reflexion: `Ce projet a été particulièrement enrichissant, car il m’a permis de mieux comprendre les enjeux liés aux mots de passe faibles et les risques concrets que cela représente, notamment les attaques par force brute ou dictionnaire. J’ai ainsi pris conscience de l’importance d’adopter de bonnes pratiques en cybersécurité, comme l’utilisation de mots de passe complexes, l’authentification à deux facteurs ou encore la gestion sécurisée des identifiants. Cela m’a donné une première approche très concrète d’un domaine que je connaissais peu, et qui est pourtant fondamental dans notre quotidien numérique.

Notre présentation orale s’est globalement bien déroulée, mais elle a été trop longue. Si c’était à refaire, je proposerais une méthode de préparation plus rigoureuse, avec un véritable découpage du temps de parole pour chaque intervenant. Par exemple, nous aurions pu utiliser un chronomètre lors des répétitions pour vérifier que chacun respecte un temps défini (2-3 minutes maximum par partie). J’aurais aussi recommandé de concevoir une structure plus dynamique, avec des transitions claires entre les parties, pour maintenir l’attention du jury et éviter les redondances.

De plus, je pense qu’un support visuel plus synthétique aurait permis de mieux rythmer notre présentation. Trop de texte peut ralentir le discours et noyer les informations importantes. À l’avenir, j’opterais pour des slides contenant des mots-clés, schémas ou exemples concrets afin de faciliter la compréhension tout en servant de repère lors de la prise de parole.

En résumé, cette expérience m’a non seulement appris des notions techniques importantes, mais elle m’a également permis de mieux comprendre comment transmettre efficacement un message technique dans un cadre professionnel. C’est une compétence précieuse que je compte continuer à développer.`,
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
        implication: `Sur ce projet, j'ai pris en charge la configuration complète d'une machine virtuelle sous Proxmox, en installant et paramétrant des services essentiels comme Samba pour le partage de fichiers et Apache pour l'hébergement web. J'ai configuré les interfaces réseau de la VM pour assurer la connectivité avec le reste du réseau local, en attribuant des adresses IP fixes et en testant la communication entre les différentes machines.

J'ai également participé à la configuration des switches, notamment la création et l'affectation de VLANs pour segmenter le réseau et améliorer la sécurité. J'ai vérifié la bonne propagation des VLANs sur les ports des switches et assuré la connectivité inter-VLAN si nécessaire. J'ai aussi contribué à la configuration du routage sur le routeur pour permettre la communication entre les différents sous-réseaux.

En cas de problème de connectivité, j'ai utilisé des commandes comme \`ping\`, \`tracert\` et \`ipconfig\` pour diagnostiquer et corriger les erreurs de configuration. J'ai documenté chaque étape technique réalisée afin de faciliter la compréhension pour le reste du groupe et pour garder une trace des choix techniques effectués. Enfin, j'ai participé à la coordination du groupe, en aidant à la répartition des tâches et en assurant un suivi régulier de l'avancement du projet.`,
        reflexion: `Si c’était à refaire, j’organiserais le projet très différemment. Au début, j’ai perdu beaucoup de temps à essayer de comprendre les attendus, sans vraiment avoir de vision claire de ce qu’on attendait de nous. Avec du recul, je pense qu’il aurait été utile de demander dès le départ un échange avec l’enseignant pour cadrer le travail, clarifier les objectifs et mieux planifier les étapes.

J’ai aussi réalisé que certaines compétences techniques me manquaient au moment d’aborder des tâches plus complexes. Par exemple, je n’étais pas suffisamment à l’aise avec certains outils ou notions de configuration réseau. Si c’était à refaire, je prendrais le temps de me former en amont sur les outils clés (comme les commandes de configuration sur switches réels), même via des tutoriels ou des tests sur du matériel d'entraînement, pour ne pas bloquer ensuite en pleine réalisation.

Un autre point que j’ai mal anticipé : j’ai voulu configurer les switches via Cisco Packet Tracer, pensant gagner du temps et simuler proprement le réseau. Mais je me suis vite rendu compte que cette méthode ne correspondait pas au matériel réel dont on disposait. J’ai donc perdu un temps précieux à faire quelque chose de peu utile. Si c’était à refaire, je m'assurerais dès le début que les méthodes choisies sont compatibles avec les ressources disponibles, en faisant un inventaire et en échangeant plus avec le groupe pour aligner les approches.

Enfin, je pense que j’aurais dû mieux cadrer la répartition des rôles dans l’équipe. Même si chaque membre avait une tâche définie, on n’a pas toujours vérifié que chacun avait ce qu’il fallait pour avancer. À l’avenir, je proposerais qu’on mette en place un suivi plus régulier, avec de petits points de coordination hebdomadaires pour ajuster si besoin.

Ce projet m’a permis de comprendre qu’au-delà des compétences techniques, la planification, l’adaptabilité et la communication sont essentielles pour qu’un projet de groupe avance correctement. C’est une leçon que je retiens clairement pour la suite.`,
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
        reflexion: `Si c’était à refaire, je pense que j’aurais dû jouer un rôle plus actif dans la dynamique de groupe, notamment en motivant davantage les autres membres à s’impliquer. Au final, nous n’étions vraiment que deux à travailler de manière régulière et sérieuse sur le projet, ce qui a clairement limité notre progression et notre efficacité collective.

Avec du recul, j’aurais pu organiser une réunion dès le début pour poser un cadre clair : répartir les tâches équitablement, fixer des objectifs précis pour chaque membre et convenir de points d’étapes réguliers pour faire le suivi. Cela aurait permis de responsabiliser chacun et de créer un véritable engagement autour du projet. Une telle organisation aurait aussi évité que certaines personnes se retrouvent surchargées tandis que d’autres restent en retrait.

Je suis convaincu qu’avec une participation plus équilibrée, nous aurions mieux compris les manipulations à réaliser, progressé plus rapidement et évité certaines erreurs liées au manque de coordination. Cela aurait également permis d’élever la qualité globale de notre travail, à la fois sur le fond (configurations, documentation) et sur la forme (présentation, structure du rendu final).

Cette expérience m’a montré que la réussite d’un projet ne repose pas uniquement sur les compétences techniques, mais aussi sur la capacité à fédérer une équipe, à gérer le temps et à instaurer une dynamique collective. C’est un aspect que je prendrai en compte bien plus sérieusement dans mes futurs travaux en groupe.

`,
    },
    4: {
        titre: "Projet 4 - Création d'un site web",
        description: `Pour ce projet, je devais créer un site web sur le thème de mon choix, le concevoir de A à Z puis le publier en ligne via GitHub Pages. J'ai appris à structurer une page web, à utiliser HTML, CSS, et à gérer la mise en ligne du site. Ce projet m'a permis de découvrir le fonctionnement de GitHub, l'importance du versionnage et les étapes nécessaires pour rendre un site accessible à tous sur Internet.`,
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
        reflexion: `Ce projet m’a beaucoup plu, car il m’a permis de découvrir toutes les étapes de création et de publication d’un site web, de la conception à la mise en ligne. C’était la première fois que je réalisais un projet web aussi complet, et j’ai trouvé cela très enrichissant, autant sur le plan technique que créatif.

Si c’était à refaire, je choisirais de consacrer davantage de temps à certains aspects plus spécifiques comme le responsive design, pour que le site s’adapte parfaitement à tous les formats d’écran (ordinateur, tablette, mobile), mais aussi à l’accessibilité, afin de le rendre plus inclusif pour tous les utilisateurs, y compris ceux en situation de handicap. Ce sont des critères souvent sous-estimés mais essentiels pour garantir un site web de qualité professionnelle.

J’ai également compris l’importance des retours extérieurs. J’aurais pu demander à d’autres personnes — élèves, enseignants ou même des proches — de tester le site pour m’apporter un regard neuf. Cela m’aurait permis d’identifier plus tôt certaines erreurs ou points d’amélioration, notamment en termes d’ergonomie ou de navigation.

Cette expérience m’a vraiment poussé à me remettre en question et à viser plus haut. Elle m’a montré qu’il ne faut pas hésiter à sortir de sa zone de confort, à approfondir les aspects techniques, mais aussi à solliciter des avis extérieurs pour progresser. C’est une démarche que je compte désormais adopter systématiquement dans mes projets futurs, quel que soit le domaine.`,
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
        reflexion: `Si c’était à refaire, je pense que nous conserverions la manière dont nous nous sommes organisés. La répartition des tâches était claire et équilibrée, ce qui nous a permis de travailler efficacement sans perdre de temps inutilement. Cette bonne organisation a été un vrai point fort du projet.

En revanche, avec le recul, je me rends compte que nous aurions gagné à nous documenter plus en profondeur sur certains aspects de l’API Pokémon. Nous nous sommes parfois contentés des fonctions de base, sans explorer tout le potentiel que l’API pouvait offrir. Une meilleure compréhension de sa structure et de ses possibilités nous aurait permis d’exploiter davantage les données disponibles, de proposer des fonctionnalités plus avancées, et d'enrichir l'expérience utilisateur de notre application.

Cette expérience m’a vraiment fait prendre conscience de l’importance de consulter et approfondir la documentation technique, surtout lorsqu’on travaille avec des outils ou services externes. Mieux s’informer au départ permet de gagner du temps ensuite, d’éviter des erreurs et surtout, d’atteindre un niveau de qualité supérieur dans le rendu final.

C’est une leçon que je retiens pour mes prochains projets : prendre le temps de bien explorer la documentation, même si cela semble long au début, est un investissement qui paie toujours par la suite.`,
    },
    6: {
        titre: "Projet 6 - Construire un réseau info pour une petite structure",
        description: `Ce projet avait pour objectif de concevoir et de mettre en place un réseau informatique adapté aux besoins d'une petite structure. Pour cela, nous avons suivi deux formations : un cours de 3h sur Active Directory de Microsoft et une formation Cisco NetAcad "Switching and Routing" de 70h. Après avoir validé ces deux modules, nous avons réalisé un TP d'entraînement qui consistait à créer un environnement Windows Server 2019. L'objectif était de comprendre les enjeux de la sécurité, d'implémenter des stratégies de groupe (GPO), des unités d'organisation (OU), des utilisateurs et des groupes. Nous devions également créer un domaine Active Directory et y intégrer des machines clientes afin de simuler un environnement professionnel complet et fonctionnel.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: `Notice cours collaboratif de Microsoft sur Active Directory (Windows Server) : <a href="/preuves/microsoft.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">voir-ici</a>`
            },
            {
                titre: "Preuve 2",
                description: "Cour cisco NetAcad <a href='https://www.netacad.com/fr/courses/ccna-switching-routing-wireless-essentials?courseLang=en-US' target='_blank' rel='noopener noreferrer' class='custom-link'>'Switching and Routing'</a>"
            },
        ],
        implication: `Pour ce projet, j'ai réalisé entièrement le TP d'entraînement sur Windows Server 2019, étant même le seul du groupe à l'avoir mené à terme. J'ai ensuite aidé mes camarades à comprendre les différentes étapes et à avancer dans leur propre travail. Je me suis aussi beaucoup investi dans la formation Cisco NetAcad "Switching and Routing", ce qui m'a permis de bien progresser sur la partie réseau. En revanche, j'ai moins suivi les cours sur Active Directory de Microsoft, ce qui est un point à améliorer.`,
        reflexion: `Ce projet m’a permis de développer de solides compétences en configuration de réseaux et en administration de serveurs (Windows Server 2019), deux domaines techniques que je trouvais particulièrement stimulants. J’ai été fier d’avoir réussi à mener à bien l’ensemble du TP d’entraînement, ce qui m’a non seulement permis de consolider ma propre compréhension, mais aussi d’aider mes camarades lorsqu’ils rencontraient des difficultés. Cette posture active m’a beaucoup appris, car expliquer à d’autres permet de mieux assimiler les notions soi-même.

Le fait de m’être avancé sur le cours Cisco NetAcad dès le début du projet a été un véritable atout. Cela m’a permis de libérer du temps pour me concentrer plus sereinement sur le reste du projet, et de contribuer plus efficacement à l’avancement global de notre groupe.

Cependant, si c’était à refaire, je chercherais à mieux équilibrer mon investissement entre la partie réseau (Cisco) et la partie Active Directory (Microsoft). J’ai consacré beaucoup d’énergie à la première, au détriment de la seconde. Or, une meilleure maîtrise des deux volets m’aurait permis d’être plus polyvalent et d’intervenir plus largement dans les différentes tâches du projet. Cela aurait aussi facilité la compréhension globale de l'infrastructure que nous devions mettre en place.

Cette expérience m’a montré à quel point la curiosité, la proactivité, mais aussi l’équilibre dans l’apprentissage sont essentiels pour progresser efficacement. Elle m’a également conforté dans l’idée que l’entraide entre camarades joue un rôle clé, tant pour la réussite individuelle que pour celle du groupe.`,
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
        reflexion: `Ce projet m’a permis de progresser dans la compréhension des dispositifs de transmission et de l’analyse de signaux. Manipuler concrètement ces concepts m’a aidé à mieux les assimiler et à faire le lien avec les notions vues en cours.

Si c’était à refaire, je chercherais à impliquer davantage tous les membres du groupe dès le départ. Une mobilisation collective plus forte aurait permis de mieux répartir les tâches et de prendre le temps d’approfondir l’analyse des résultats. À certains moments, j’ai senti qu’on aurait pu aller plus loin si chacun avait été plus engagé dès le début.

Cette expérience m’a montré que la collaboration active, la curiosité personnelle et la recherche de ressources complémentaires sont essentielles pour vraiment comprendre des sujets techniques. Aller au-delà du strict minimum, poser des questions, chercher par soi-même : ce sont ces démarches qui font réellement progresser.`,
    },
    8: {
        titre: "Projet 8 - Création d'un site web dynamique avec API",
        description: `Ce projet avait pour objectif de réaliser la version 2 d'une application météo en utilisant une API météo. Nous avons travaillé avec Java pour la partie back-end, et HTML/CSS pour l'interface utilisateur. Il fallait intégrer les données de l'API, améliorer l'affichage et l'expérience utilisateur, et rédiger un README complet sur GitHub pour expliquer le fonctionnement du projet et faciliter sa prise en main.`,
        preuves: [
            {
                titre: "Preuve 1",
                description: "Site Web de l'application météo V2 : <a href='https://patatecosmique.github.io/SAE23-meteoV2-Pitois-Bastian/' target='_blank' rel='noopener noreferrer' class='custom-link'>voir ici</a>.",
            },
            {
                titre: "Preuve 2",
                description: "Lien ver le projet GitHub : <a href='https://github.com/Patatecosmique/SAE23-meteoV2-Pitois-Bastian' target='_blank' rel='noopener noreferrer' class='custom-link'>voir ici</a>. Ce dépôt contient l'ensemble du code source de l'application, la structure des fichiers, ainsi qu'un README détaillé.",
            },

        ],
        implication: `J'ai réalisé ce projet entièrement seul, de la conception à la mise en ligne. J'ai intégré l'API météo dans le back-end Java, conçu et amélioré l'interface utilisateur en HTML/CSS, et géré la totalité du code. J'ai également pris en charge la gestion des appels API, le traitement des erreurs, la correction des bugs, ainsi que la rédaction d'une documentation complète sur GitHub pour faciliter la prise en main du projet. Cette expérience m'a permis de développer mon autonomie, ma rigueur et mes compétences en développement web.`,
        reflexion: `Ce projet m’a permis de renforcer significativement mes compétences en développement web, en particulier en intégration d’API, ainsi qu’en travail collaboratif. J’ai pu mettre en pratique mes connaissances en Java, HTML et CSS dans un contexte concret, ce qui m’a aidé à mieux maîtriser ces langages. Par ailleurs, la rédaction d’un README sur GitHub m’a fait prendre conscience de l’importance de la documentation technique, non seulement pour faciliter la compréhension du projet par d’autres développeurs, mais aussi pour structurer clairement les différentes étapes de notre travail.

J’ai veillé à bien m’organiser personnellement dès le début du projet, en planifiant mon temps de travail et en priorisant les tâches importantes. Cette discipline m’a permis d’avancer de manière efficace et régulière, sans accumuler de retard, et de répondre aux différentes exigences du projet dans les délais impartis. Cette autonomie dans la gestion de mon travail a été un point fort, surtout dans un contexte de travail en équipe où chaque membre doit pouvoir compter sur la contribution des autres.

Si c’était à refaire, je prendrais encore plus de temps pour tester plusieurs API météo afin de mieux comparer leurs fonctionnalités, leur fiabilité et leur facilité d’intégration. Cela m’aurait permis de choisir la solution la plus adaptée aux besoins du projet, tout en anticipant mieux les éventuelles contraintes techniques. Par ailleurs, j’approfondirais la gestion des erreurs côté Java afin de rendre l’application plus robuste et capable de gérer des cas inattendus, ce qui est essentiel pour garantir une expérience utilisateur fluide et sans bug.

Cette expérience m’a donc non seulement permis de développer des compétences techniques solides, mais aussi d’améliorer ma capacité à travailler de manière autonome et méthodique. Elle m’a également sensibilisé à l’importance de la rigueur dans le développement et à la valeur ajoutée qu’apporte une documentation claire et complète.`,
    },
    9: {
        titre: "Projet 9 - Projet intégratif",
        description: `Le projet final rassemble toutes les compétences acquises pour réaliser un projet complet et complexe. Il comprend plusieurs parties :

Une présentation, avec une section en anglais où nous avons utilisé un vocabulaire technique lié aux différents sujets.

Une partie mathématique, où nous avons analysé de la documentation pour appliquer des méthodes comme la méthode de Sturm et répondre aux questions de l’examen final.

Un TP en télécommunications sur les technologies 3G, 4G et les communications radio.

La partie principale sur les réseaux, où nous avons configuré un réseau LAN connecté à un serveur GNS3, intégrant également un réseau WAN`,
        preuves: [
            {
                titre: "Preuve 1",
                description: "Planification du projet grace à un <a href='./preuves/gantt.pdf' target='_blank' rel='noopener noreferrer' class='custom-link'>diagramme de Gantt</a>, permettant de visualiser les différentes étapes et leur avancement. Et un <a href='./preuves/tableau-récapitulatif.pdf' target='_blank' rel='noopener noreferrer' class='custom-link'>tableau recapitulatif</a> des tâches réalisées par chaque membre du groupe.",
            },
            {
                titre: "Preuve 2",
                description: "Réalisation des schémas <a href='./preuves/physique.pdf' target='_blank' rel='noopener noreferrer' class='custom-link'>physique</a> et <a href='./preuves/SAE24shema-logique-planIP.pdf' target='_blank' rel='noopener noreferrer' class='custom-link'>logique</a> du réseau, incluant les connexions entre les différents équipements, les adresses IP attribuées, les VLANs, afin de bien comprendre et documenter l'architecture du réseau mis en place",
            },
            {
                titre: "Preuve 3",
                description: `Téléchargement de toutes les configurations réseau (<a href="./preuves/configs-reseau.zip" target="_blank" rel="noopener noreferrer" class="custom-link">archive ZIP</a>) : switches, routeurs, etc.`
            },
        ],
        implication: `Pour ce projet, j'ai pris en charge la configuration complète du réseau WAN sous GNS3, notamment la mise en place du protocole OSPF, la création et la propagation des routes par défaut sur l'ensemble des routeurs. J'ai également configuré le serveur Windows Server, en automatisant la création de 500 utilisateurs via un script, puis en mettant en place un partage réseau spécifique pour une unité d'organisation (OU) dans le domaine. J'ai intégré une machine cliente au domaine et assuré la connexion du switch L2/L3 à deux autres switches avec des liens agrégés, afin d'optimiser la redondance et la performance du réseau. De plus j'ai réalisé les shéma Logique et Physiqe.`,
        reflexion: `Ce projet m’a offert une occasion précieuse de mettre en pratique l’ensemble des compétences que j’avais acquises au fil du temps, tout en m’impliquant dans un projet d’envergure, exigeant et intense. J’ai été constamment sollicité par plusieurs camarades qui avaient besoin d’aide, ce qui a ajouté une pression supplémentaire. Cette situation m’a appris à gérer efficacement cette charge de travail et à rester concentré, même dans un contexte stressant. J’ai dû faire preuve de réactivité et de patience, tout en veillant à ne pas sacrifier la qualité de mon propre travail.

J’ai également dû prendre en charge des tâches qui, initialement, ne m’étaient pas destinées, comme la configuration complète de la partie WAN sur GNS3. Cela a augmenté ma charge de travail, mais m’a permis de développer de nouvelles compétences et de renforcer ma capacité à m’adapter aux imprévus et à assumer des responsabilités supplémentaires pour garantir la réussite du projet.

Sur le plan technique, particulièrement pour la partie réseau, j’ai constaté une nette amélioration de mon organisation par rapport au deuxième projet réseau du semestre 1. Cette fois-ci, j’ai su mieux anticiper les étapes clés, planifier mon travail de manière plus méthodique, et gérer les imprévus avec plus de sérénité. Cette meilleure organisation m’a permis non seulement d’avancer plus efficacement, mais aussi de mieux gérer la pression liée aux délais et aux attentes. En structurant mon travail et en priorisant mes tâches, j’ai réussi à maintenir un bon équilibre entre l’aide apportée aux autres et mes propres responsabilités.

Cette expérience m’a donc non seulement permis de renforcer mes compétences techniques, mais aussi de développer des qualités essentielles telles que la gestion du stress, la communication et la solidarité au sein d’un groupe. Elle m’a également montré l’importance de l’organisation personnelle pour mener à bien un projet complexe, surtout lorsque l’on est sollicité sur plusieurs fronts.`
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
    const reflexionElement = document.getElementById("projet-reflexion-texte");
    if (projet.reflexion && reflexionElement) {
        // Appliquer le formatage seulement pour les projets 1 à 5
        if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(projetId)) {
            reflexionElement.innerHTML = formatReflexion(projet.reflexion);
        } else {
            reflexionElement.textContent = projet.reflexion;
        }
    }
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

// Pour améliorer la lisibilité des réflexions, on formate le texte avec des retours à la ligne et du gras sur les points importants.
function formatReflexion(reflexion) {
    if (!reflexion) return "";
    // Mettez en gras les mots clés importants (exemples, à adapter selon vos besoins)
    let formatted = reflexion
        .replace(/(Si c’était à refaire|En résumé|En conclusion|En revanche|De plus|Enfin|Notre présentation orale|Ce projet m’a permis|Ce projet a été particulièrement enrichissant|En résumé, cette expérience|Cette expérience m’a montré|Cette expérience m’a vraiment poussé|Cette bonne organisation a été un vrai point fort du projet)/g, "<b>$1</b>")
        .replace(/(\bcybersécurité\b|\bmots de passe\b|\bplanification\b|\bcommunication\b|\borganisation\b|\bcompétences techniques\b|\bcollaboration\b|\bautonomie\b|\bdocumentation\b|\bAPI\b|\bproblèmes\b|\bsolutions\b)/gi, "<b>$1</b>")
        // Ajoute des retours à la ligne pour chaque paragraphe
        .replace(/\n\s*\n/g, "<br><br>");
    return formatted;
}

