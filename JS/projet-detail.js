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
    // Ajoutez d'autres projets ici...
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