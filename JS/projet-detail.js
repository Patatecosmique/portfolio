// Récupérer l'ID du projet depuis l'URL
const params = new URLSearchParams(window.location.search);
const projetId = params.get('id');

// Contenu des projets
const projets = {
    1: {
        titre: "Projet 1 - Se sensibiliser à l'hygiène informatique",
        description: "Ce projet vise à sensibiliser les utilisateurs aux bonnes pratiques en matière de sécurité informatique.",
        preuves: [
            { titre: "Preuve 1", description: "Présentation sur les bonnes pratiques de sécurité à un public." },
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
        reflexion: "Ce projet m'a permis de mieux comprendre les enjeux de la sécurité informatique et d'identifier mes points faibles dans la gestion des risques."
    },
    2: {
        titre: "Projet 2 - S'initier aux réseaux informatiques",
        description: "Ce projet consiste à découvrir les bases des réseaux informatiques, y compris la configuration et la gestion.",
        preuves: [
            { 
                titre: "Preuve 1", 
                description: `Création de <a href="./preuves/shema-physique_logique.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">shéma physique et logique</a> d"un réseau local.`
            },
            {
                titre: "Preuve 2", 
                description: `Mise en place d'un planning détaillé à l'aide de GanttProject pour la gestion des tâches chronologiques et de 
                <a href="https://trello.com/b/24VUiNHM/sae12" target="_blank" rel="noopener noreferrer" class="custom-link">Trello</a> pour le suivi collaboratif et la répartition des responsabilités.`
            },
            { titre: "Preuve 3", 
                description: '<a href="./preuves/config-commutateur.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">Configuration</a> du matériel réseaux.' 

            },
        ],
        reflexion: "Grâce à ce projet, j'ai acquis une meilleure compréhension des réseaux et de leur fonctionnement."
    },
    3: {
        titre: "Projet 3 - Découvrir un dispositif de transmission",
        description: "Ce projet explore les dispositifs de transmission et leur fonctionnement dans un réseau.",
        preuves: [
            { 
                titre: "Preuve 1", 
                description: `Création d'un <a href="./preuves/photometrie.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">rapport détaillé sur les mesures photométriques</a>
                , incluant l'analyse des résultats et leur interprétation.`
            },
            { 
                titre: "Preuve 2", 
                description: `Rédaction d'un <a href="./preuves/DTF.pdf" target="_blank" rel="noopener noreferrer" class="custom-link">rapport technique</a> sur les mesures effectuées sur un câble coaxial.` 
            },
        ],
        reflexion: "Ce projet m'a permis de mieux comprendre les technologies de transmission et leur rôle dans les réseaux."
    },
    4: {
        titre: "Projet 4 - Se présenter sur Internet",
        description: "Ce projet consiste à créer site web.",
        preuves: [
            { 
                titre: "Preuve 1",
                description: `Création d'un site <a href="https://patatecosmique.github.io/PROJET-WEB/" target="_blank" rel="noopener noreferrer" class="custom-link">web personnel</a>`
            },
        ],
        reflexion: "Ce projet m'a aidé à développer ma présence en ligne et à mieux comprendre l'importance d'une présentation professionnelle."
    },
    5: {
        titre: "Projet 5 - Traiter des données",
        description: "Ce projet porte sur la collecte, le traitement et l'analyse des données pour en tirer des informations utiles.",
        preuves: [
            { 
                titre: "Preuve 1", 
                description: `Extraction de données depuis une <a href="https://pokeapi.co/docs/v2#google_vignette" target="_blank" rel="noopener noreferrer" class="custom-link">API</a> en utilisant Python pour récupérer des informations pertinentes sur un pokemon.`
            },
            { 
                titre: "Preuve 2", 
                description: "Analyse des données extraites et génération d'un rapport détaillé sur les informations obtenues." 
            },
            { 
                titre: "Preuve 3", 
                description: "Création d'une page HTML dynamique en Python pour afficher les résultats de manière structurée et visuelle." 
            },
        ],
        reflexion: "Ce projet m'a permis de mieux comprendre les techniques de traitement des données et leur importance dans la prise de décision."
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
        { apprentissage: "Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "" },
        { apprentissage: "Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’intégrer avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "" },
        { apprentissage: "Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "" },
    ],
    2: [
        { apprentissage: "Maîtriser les lois fondamentales de l’électricité afin d’intervenir sur des équipements de réseaux et télécommunications", commentaire: "" },
        { apprentissage: "Comprendre l’architecture et les fondements des systèmes numériques et les principes du code de l’information, des réseaux et de l’Internet", commentaire: "" },
        { apprentissage: "Configurer les fonctions de base du réseau local", commentaire: "" },
        { apprentissage: "Maîtriser les rôles et principes fondamentaux des systèmes d’exploitation afin d’intégrer avec ceux-ci pour la configuration et l’administration des réseaux et services fournis", commentaire: "" },
        { apprentissage: "Identifier les dysfonctionnements du réseau local et savoir les signaler", commentaire: "" },
        { apprentissage: "Installer un poste client, expliquer la procédure mise en place", commentaire: "" },
    ],
    3: [
        { apprentissage: "Mesurer et analyser les signaux", commentaire: "" },
        { apprentissage: "Déployer des supports de transmission", commentaire: "" },
        { apprentissage: "Communiquer avec un tiers (client, collaborateur…) et adapter son discours et sa langue à son interlocuteur", commentaire: "" },
    ],
    4: [
        { apprentissage: "Utiliser un système informatique et ses outils", commentaire: "" },
        { apprentissage: "Connaître l'architecture et les technologies d'un site web", commentaire: "" },
    ],
    5: [
        { apprentissage: "Utiliser un système informatique et ses outils", commentaire: "" },
        { apprentissage: "Lire, exécuter, corriger et modifier un programme", commentaire: "" },
        { apprentissage: "Traduire un algorithme, dans un langage et pour un environnement donné", commentaire: "" },
        { apprentissage: "Connaître l'architecture et les technologies d'un site web", commentaire: "" },
        { apprentissage: "Choisir les mécanismes de gestion de données adaptés au développement d’outils et argumenter ses choix", commentaire: "" },
        { apprentissage: "S'intégrer dans un environnement propice au dévloppement et au travail collaboratif", commentaire: "" },
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