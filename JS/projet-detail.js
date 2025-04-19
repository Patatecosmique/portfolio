// Récupérer l'ID du projet depuis l'URL
const params = new URLSearchParams(window.location.search);
const projetId = params.get('id');

// Contenu des projets
const projets = {
    1: {
        titre: "Projet 1 - Se sensibiliser à l'hygiène informatique",
        description: "Ce projet vise à sensibiliser les utilisateurs aux bonnes pratiques en matière de sécurité informatique.",
        preuves: [
            { titre: "Preuve 1", description: "Présentation sur les bonnes pratiques de sécurité." },
            { titre: "Preuve 2", description: "Rapport d'analyse des risques informatiques." },
            { titre: "Preuve 3", description: "Exercice pratique sur la gestion des mots de passe." }
        ],
        reflexion: "Ce projet m'a permis de mieux comprendre les enjeux de la sécurité informatique et d'identifier mes points faibles dans la gestion des risques."
    },
    2: {
        titre: "Projet 2 - S'initier aux réseaux informatiques",
        description: "Ce projet consiste à découvrir les bases des réseaux informatiques, y compris la configuration et la gestion.",
        preuves: [
            { titre: "Preuve 1", description: "Schéma d'un réseau local." },
            { titre: "Preuve 2", description: "Configuration d'un routeur." },
            { titre: "Preuve 3", description: "Rapport sur les protocoles réseau." }
        ],
        reflexion: "Grâce à ce projet, j'ai acquis une meilleure compréhension des réseaux et de leur fonctionnement."
    },
    3: {
        titre: "Projet 3 - Découvrir un dispositif de transmission",
        description: "Ce projet explore les dispositifs de transmission et leur fonctionnement dans un réseau.",
        preuves: [
            { titre: "Preuve 1", description: "Étude d'un dispositif de transmission." },
            { titre: "Preuve 2", description: "Rapport sur les technologies de transmission." },
            { titre: "Preuve 3", description: "Exercice pratique sur la configuration d'un dispositif." }
        ],
        reflexion: "Ce projet m'a permis de mieux comprendre les technologies de transmission et leur rôle dans les réseaux."
    },
    4: {
        titre: "Projet 4 - Se présenter sur Internet",
        description: "Ce projet consiste à créer une présence en ligne professionnelle à travers un portfolio ou un site web.",
        preuves: [
            { titre: "Preuve 1", description: "Création d'un portfolio en ligne." },
            { titre: "Preuve 2", description: "Rapport sur les bonnes pratiques de présentation en ligne." },
            { titre: "Preuve 3", description: "Exercice pratique sur la personnalisation d'un site web." }
        ],
        reflexion: "Ce projet m'a aidé à développer ma présence en ligne et à mieux comprendre l'importance d'une présentation professionnelle."
    },
    5: {
        titre: "Projet 5 - Traiter des données",
        description: "Ce projet porte sur la collecte, le traitement et l'analyse des données pour en tirer des informations utiles.",
        preuves: [
            { titre: "Preuve 1", description: "Analyse de données avec un outil dédié." },
            { titre: "Preuve 2", description: "Rapport sur les résultats de l'analyse." },
            { titre: "Preuve 3", description: "Exercice pratique sur la visualisation des données." }
        ],
        reflexion: "Ce projet m'a permis de mieux comprendre les techniques de traitement des données et leur importance dans la prise de décision."
    },
    6: {
        titre: "Projet 6 - Construire un réseau informatique",
        description: "Ce projet consiste à concevoir et mettre en place un réseau informatique pour répondre à des besoins spécifiques.",
        preuves: [
            { titre: "Preuve 1", description: "Schéma détaillé du réseau." },
            { titre: "Preuve 2", description: "Configuration des équipements réseau." },
            { titre: "Preuve 3", description: "Rapport sur les performances du réseau." }
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

// Charger les détails du projet
if (projets[projetId]) {
    const projet = projets[projetId];

    // Mettre à jour le titre et la description
    document.getElementById("projet-titre").textContent = projet.titre;
    document.getElementById("projet-description").textContent = projet.description;

    // Ajouter les preuves dynamiquement
    const preuvesContainer = document.getElementById("projet-preuves");
    projet.preuves.forEach(preuve => {
        const preuveElement = document.createElement("div");
        preuveElement.classList.add("preuve");
        preuveElement.innerHTML = `
            <h4>${preuve.titre}</h4>
            <p>${preuve.description}</p>
        `;
        preuvesContainer.appendChild(preuveElement);
    });

    // Mettre à jour la réflexion
    document.getElementById("projet-reflexion-texte").textContent = projet.reflexion;
} else {
    // Si l'ID du projet est invalide
    document.getElementById("projet-titre").textContent = "Projet non trouvé";
    document.getElementById("projet-description").textContent = "Aucun détail disponible pour ce projet.";
    document.getElementById("projet-preuves").innerHTML = "";
    document.getElementById("projet-reflexion-texte").textContent = "";
}