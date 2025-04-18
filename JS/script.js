document.addEventListener('DOMContentLoaded', () => {
    // Animations de scroll reveal
    const reveals = document.querySelectorAll('.reveal');     
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1
    });     
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });     

    // Gestion des projets avec navigation vers une nouvelle page
    const projets = document.querySelectorAll('.projet');

    // Données de projets (à personnaliser)
    const detailsProjets = {
        1: {
            titre: 'Projet 1 - Configuration Réseau',
            couleurFond: '#2980b9',
            details: `
                <div class="projet-details">
                    <h1>Configuration Réseau Avancée</h1>
                    <div class="section-projet">
                        <h2>Contexte</h2>
                        <p>Projet de configuration d'infrastructure réseau complexe implementant des solutions modernes de connectivité.</p>
                    </div>
                    <div class="section-projet">
                        <h2>Technologies Utilisées</h2>
                        <ul>
                            <li>Cisco Networking</li>
                            <li>VLAN Configuration</li>
                            <li>Routage Avancé</li>
                        </ul>
                    </div>
                    <div class="section-projet">
                        <h2>Défis et Solutions</h2>
                        <p>Résolution de problèmes de segmentation réseau et optimisation des performances.</p>
                    </div>
                </div>
            `
        },
        2: {
            titre: 'Projet 2 - Infrastructure Cloud',
            couleurFond: '#27ae60',
            details: `
                <div class="projet-details">
                    <h1>Infrastructure Cloud Dynamique</h1>
                    <div class="section-projet">
                        <h2>Objectif</h2>
                        <p>Déploiement d'une infrastructure cloud scalable et sécurisée.</p>
                    </div>
                    <div class="section-projet">
                        <h2>Technologies Clés</h2>
                        <ul>
                            <li>AWS Cloud Services</li>
                            <li>Kubernetes</li>
                            <li>Conteneurisation Docker</li>
                        </ul>
                    </div>
                    <div class="section-projet">
                        <h2>Impact</h2>
                        <p>Amélioration de la flexibilité et de la résilience de l'infrastructure informatique.</p>
                    </div>
                </div>
            `
        },
        3: {
            titre: 'Projet 3 - Sécurité Réseau',
            couleurFond: '#e74c3c',
            details: `
                <div class="projet-details">
                    <h1>Stratégie de Sécurité Réseau Complète</h1>
                    <div class="section-projet">
                        <h2>Mission</h2>
                        <p>Conception et implémentation d'un framework de sécurité réseau robuste.</p>
                    </div>
                    <div class="section-projet">
                        <h2>Méthodes de Sécurité</h2>
                        <ul>
                            <li>Pare-feu Avancé</li>
                            <li>Détection d'Intrusion</li>
                            <li>Cryptographie</li>
                        </ul>
                    </div>
                    <div class="section-projet">
                        <h2>Résultats</h2>
                        <p>Réduction significative des vulnérabilités et amélioration de la protection des données.</p>
                    </div>
                </div>
            `
        }
    };

    projets.forEach(projet => {
        projet.addEventListener('click', () => {
            const projetId = projet.getAttribute('data-projet');
            const projetInfo = detailsProjets[projetId];

            // Stocker les informations du projet dans le localStorage
            localStorage.setItem('projetActuel', JSON.stringify(projetInfo));

            // Rediriger vers la page de détails
            window.location.href = `projet-details.html`;
        });
    });
});