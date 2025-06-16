// Menu burger pour mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle navigation
    navLinks.classList.toggle('active');
    
    // Animation des lignes du burger
    burger.classList.toggle('toggle');
    
    // Désactiver le défilement de la page lorsque le menu est ouvert
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Fermer le menu lorsqu'un lien est cliqué (pour mobile)
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        document.body.style.overflow = 'auto';
    });
});

// Animation au défilement
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 10 ? '0 2px 10px rgba(0, 0, 0, 0.1)' : 'none';
});

// Chargement des projets (pour la page projets.html)
document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.projects-grid')) {
        fetchProjects();
    }
});
function fetchProjects() {
    const projects = [
        {
            id: "school-management",
            title: "Application de gestion d'école",
            description: "Application de gestion d'etablissement scolaire moderne utilisant une API de fullcalendar pour la gestions des evements et emplois du temps.",
            tags: ["#HTML","#Boostrap","#javascript", "#api", "#ajax","#laravel", "#SQL"],
            demoLink: "https://insetgroup.tn/",
            detailLink: "projet_inset.html" 
        },
        {
            
            title: "HomeFit Shop",
            description: "Application de vente en ligne d'équipement de sport (fitness)",
            tags: ["#html", "#Boostrap", "#js",'php','sql'],
            demoLink: "#",
            detailLink: "projet_homefit.html" 
        },
        {
            id: "weather-app",
            title: "Application météo",
            description: "Application utilisant une API météo pour afficher la météo de toutes les villes du monde.",
            tags: ["#HTML","#Css","#javascript", "#api", "#async"],
            demoLink: "#",
            detailLink: "projet_meteo.html" 
        }
    ];

    const projectsGrid = document.querySelector('.projects-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.detailLink}" class="btn">Détails du projet</a>
                ${project.demoLink !== '#' ? `<a href="${project.demoLink}" target="_blank" class="btn btn-secondary">Voir la démo</a>` : ''}
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Gestion des liens actifs
function setActiveLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href').split('/').pop();
        
        // Retirer la classe active de tous les liens
        link.classList.remove('active');
        
        // Ajouter la classe active au lien correspondant à la page actuelle
        if (linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

// Appeler la fonction au chargement et lors des changements de page
document.addEventListener('DOMContentLoaded', setActiveLink);
window.addEventListener('popstate', setActiveLink);

