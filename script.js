// script.js

// Function to initialize the app
function init() {
    console.log("Welcome to Achraf's Portfolio!");

    // Initialize scroll animations
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Smooth scrolling to the target section
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile navigation toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Dynamic project loading (Example)
const projects = [
    {
        title: "The Maze Project",
        image: "images/feature1-screenshot.jpg",
        description: "This project is a 3D maze game created using ray casting techniques."
    },
    {
        title: "Project 2",
        image: "images/feature2-screenshot.jpg",
        description: "Description of project 2..."
    },
    {
        title: "Project 3",
        image: "images/feature3-screenshot.jpg",
        description: "Description of project 3..."
    }
];

function loadProjects() {
    const projectContainer = document.getElementById("projects");

    projects.forEach(project => {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("project");
        
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <img src="${project.image}" alt="${project.title} Screenshot">
            <p>${project.description}</p>
        `;
        
        projectContainer.appendChild(projectDiv);
    });
}

// Add event listener to run the init function when the document is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    init();
    loadProjects();
});
