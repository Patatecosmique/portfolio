// Récupérer l'ID du projet depuis l'URL
const params = new URLSearchParams(window.location.search);
const projetId = params.get('id');

// Contenu des projets
const projets = {
    1: {
        titre: "Projet 1 - Se sensibiliser à l'hygiène informatique",
        description: "Ce projet vise à sensibiliser les utilisateurs aux bonnes pratiques en matière de sécurité informatique.",
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
        reflexion: "Ce projet était très intéressant car il m'a permis de découvrir les problèmes liés aux mots de passe trop faibles et les potentielles attaques qui peuvent en découler. J'ai beaucoup appris sur les bonnes pratiques en matière de sécurité informatique, ce qui donne une première vue essentielle sur ce domaine. Cela m'a également sensibilisé à l'importance de protéger ses données personnelles."
    },
    2: {
        titre: "Projet 2 - S'initier aux réseaux informatiques",
        description: "Ce projet consiste à découvrir les bases des réseaux informatiques, y compris la configuration et la gestion.",
        preuves: [
            {
                titre: "Preuve 1",
                description: `Création de <a href="./preuves/shema-physique_logique.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">schéma physique et logique</a> d'un réseau local.`
            },
            {
                titre: "Preuve 2",
                description: `Mise en place d'un planning détaillé à l'aide de GanttProject pour la gestion des tâches chronologiques et de 
                <a href="https://trello.com/b/24VUiNHM/sae12" target="_blank" rel="noopener noreferrer" class="custom-link">Trello</a> pour le suivi collaboratif et la répartition des responsabilités.`
            },
            {
                titre: "Preuve 3",
                description: '<a href="./preuves/config-commutateur.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">Configuration</a> du matériel réseau.'
            }
        ],
        reflexion: "Au début, ce projet était très compliqué car il introduisait beaucoup de notions que je n'avais pas encore vues. Cependant, cela m'a poussé à chercher dans la documentation et à apprendre par moi-même, ce qui m'a permis de progresser plus rapidement. J'ai perdu un peu de temps au début sur certaines tâches, mais j'ai fini par mieux m'organiser. J'ai également pris un rôle de leader en expliquant les choses aux autres, ce qui m'a permis de développer des compétences en gestion de projet."
    },
    3: {
        titre: "Projet 3 - Découvrir un dispositif de transmission",
        description: "Ce projet explore les dispositifs de transmission et leur fonctionnement.",
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
        reflexion: "Ce projet était complexe, mais grâce à l'entraide avec mes camarades et ma façon de toujours chercher à comprendre comment les choses fonctionnent, j'ai pu en apprendre beaucoup sur les dispositifs de transmission. Cela m'a permis de mieux appréhender leur rôle et leur importance dans les réseaux."
    },
    4: {
        titre: "Projet 4 - Se présenter sur Internet",
        description: "Ce projet consiste à créer un site web.",
        preuves: [
            {
                titre: "Preuve 1",
                description: `Création d'un site <a href="https://patatecosmique.github.io/PROJET-WEB/" target="_blank" rel="noopener noreferrer" class="custom-link">web personnel</a>.`
            }
        ],
        reflexion: "J'ai adoré ce projet, car il m'a permis d'apprendre à créer un beau site web. Je suis sûr que je peux encore m'améliorer, et je cherche toujours à progresser. J'ai bien géré mon temps et tout organisé, ce qui a rendu le projet fluide et agréable à réaliser."
    },
    5: {
        titre: "Projet 5 - Traiter des données",
        description: "Ce projet porte sur la collecte, le traitement et l'analyse des données pour en tirer des informations utiles via une API.",
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
        reflexion: "Même si je ne suis pas très fort en Python, j'ai tenté avec mes camarades de comprendre comment cela fonctionnait. Ils m'ont aidé, mais je pense qu'il faudrait que je pratique davantage chez moi pour progresser. Ce projet était très enrichissant et m'a permis d'apprendre beaucoup de choses sur le traitement des données."
    },
    6: {
        titre: "Projet 6 - Construire un réseau informatique",
        description: "Ce projet consiste à concevoir et mettre en place un réseau informatique pour répondre à des besoins spécifiques.",
        preuves: [
            { titre: "Preuve 1", description: "Schéma détaillé du réseau." },
            { titre: "Preuve 2", description: "Configuration des équipements réseau." },
            { titre: "Preuve 3", description: "Rapport sur les performances du réseau." },
        ],
        reflexion: "Ce projet m'a permis de développer mes compétences en conception et configuration de réseaux informatiques."
    },
    7: {
        titre: "Projet 7 - Mesurer et caractériser un signal",
        description: "Ce projet explore les techniques de mesure et de caractérisation des signaux dans un environnement technique.",
        preuves: [
            { titre: "Preuve 1", description: "Rapport sur les caractéristiques d'un signal." },
            { titre: "Preuve 2", description: "Exercice pratique sur l'utilisation d'un oscilloscope." },
            { titre: "Preuve 3", description: "Analyse des résultats de mesure." }
        ],
        reflexion: "Ce projet m'a aidé à mieux comprendre les signaux et leur importance dans les systèmes techniques."
    },
    8: {
        titre: "Projet 8 - Mettre en place une solution informatique",
        description: "Ce projet consiste à déployer une solution informatique pour résoudre un problème spécifique.",
        preuves: [
            { titre: "Preuve 1", description: "Étude des besoins pour la solution." },
            { titre: "Preuve 2", description: "Rapport sur la mise en œuvre de la solution." },
            { titre: "Preuve 3", description: "Exercice pratique sur le déploiement de la solution." }
        ],
        reflexion: "Ce projet m'a permis de développer mes compétences en résolution de problèmes et en déploiement de solutions informatiques."
    },
    9: {
        titre: "Projet 9 - Projet intégratif",
        description: "Ce projet final regroupe toutes les compétences acquises pour réaliser un projet complet et complexe.",
        preuves: [
            { titre: "Preuve 1", description: "Planification du projet." },
            { titre: "Preuve 2", description: "Rapport sur les étapes du projet." },
            { titre: "Preuve 3", description: "Présentation finale du projet." }
        ],
        reflexion: "Ce projet m'a permis de mettre en pratique toutes les compétences acquises et de travailler sur un projet d'envergure."
    }
};



// Ajouter les apprentissages critiques pour chaque projet
const apprentissagesCritiques = {
    1: [
        { apprentissage: "Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "Acquis" },
        { apprentissage: "Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’interagir avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "Acquis" },
        { apprentissage: "Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "Acquis" },
    ],
    2: [
        { apprentissage: "Maîtriser les lois fondamentales de l’électricité afin d’intervenir sur des équipements de réseaux et télécommunications", commentaire: "En cours d'acquisition" },
        { apprentissage: "Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "Acquis" },
        { apprentissage: "Configurer les fonctions de base du réseau local", commentaire: "Acquis" },
        { apprentissage: "Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’interagir avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "En cours d'acquisition" },
        { apprentissage: "Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "Acquis" },
        { apprentissage: "Installer un poste client, expliquer la procédure mise en place", commentaire: "Acquis" },
    ],
    3: [
        { apprentissage: "Mesurer et analyser les signaux", commentaire: "En cours d'acquisition" },
        { apprentissage: "Déployer des supports de transmission", commentaire: "En cours d'acquisition " },
        { apprentissage: "Communiquer avec un tiers (client, collaborateur…) et adapter son discours et sa langue à son interlocuteur", commentaire: "Acquis" },
    ],
    4: [
        { apprentissage: "Utiliser un système informatique et ses outils", commentaire: "Acquis" },
        { apprentissage: "Connaître l'architecture et les technologies d'un site web", commentaire: "Acquis" },
    ],
    5: [
        { apprentissage: "Utiliser un système informatique et ses outils", commentaire: "Acquis" },
        { apprentissage: "Lire, exécuter, corriger et modifier un programme", commentaire: "À améliorer" },
        { apprentissage: "Traduire un algorithme, dans un langage et pour un environnement donné", commentaire: "À améliorer" },
        { apprentissage: "Connaître l'architecture et les technologies d'un site web", commentaire: "Acquis" },
        { apprentissage: "Choisir les mécanismes de gestion de données adaptés au développement d’outils et argumenter ses choix", commentaire: "En cours d'acquisition" },
        { apprentissage: "S'intégrer dans un environnement propice au développement et au travail collaboratif", commentaire: "Acquis" },
    ],
    6: [
        { apprentissage: "Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "" },
        { apprentissage: "Configurer les fonctions de base du réseau local", commentaire: "" },
        { apprentissage: "Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’intégrer avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "" },
        { apprentissage: "Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "" },
        { apprentissage: "Installer un poste client, expliquer la procédure mise en place", commentaire: "" },
    ],
    7: [
        { apprentissage: "Mesurer et analyser les signaux", commentaire: "" },
        { apprentissage: "Caractériser des systèmes de transmission élémentaire et découvrir la modulation mathématique de leur fonctionnement", commentaire: "" },
        { apprentissage: "Déployer des supports de transmission", commentaire: "" },
        { apprentissage: "Communiquer avec un tiers (client, collaborateur…) et adapter son discours et sa langue à son interlocuteur", commentaire: "" },
    ],
    8: [
        { apprentissage: "Utiliser un système informatique et ses outils", commentaire: "" },
        { apprentissage: "Lire, exécuter, corriger et modifier un programme", commentaire: "" },
        { apprentissage: "Traduire un algorithme, dans un langage et pour un environnement donné", commentaire: "" },
        { apprentissage: "Connaître l'architecture et les technologies d'un site web", commentaire: "" },
        { apprentissage: "Choisir les mécanismes de gestion de données adaptés au développement d’outils et argumenter ses choix", commentaire: "" },
        { apprentissage: "S'intégrer dans un environnement propice au dévloppement et au travail collaboratif", commentaire: "" },
    ],
    9: [
        { apprentissage: "Prend en compte tout les AC du semestre 2", commentaire: "" },
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
    const tableBody = document.getElementById("apprentissages-table");

    if (tableBody) {
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