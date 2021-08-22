var aboutBox = document.getElementById("about-box");
var contactBox = document.getElementById("contact-box");
var projectsBox = document.getElementById("projects-box");
var aboutButton = document.getElementById("about-button");
var contactButton = document.getElementById("contact-button");
var projectsButton = document.getElementById("projects-button");

aboutButton.addEventListener("click", showAbout);
projectsButton.addEventListener("click", showProjects);
contactButton.addEventListener("click", showContact);



function showAbout(){
    aboutBox.classList.remove("hidden");
    projectsBox.classList.add("hidden");
    contactBox.classList.add("hidden")
};

function showProjects(){
    aboutBox.classList.add("hidden");
    projectsBox.classList.remove("hidden");
    contactBox.classList.add("hidden")
};

function showContact(){
    aboutBox.classList.add("hidden")
    projectsBox.classList.add("hidden");
    contactBox.classList.remove("hidden");
};
