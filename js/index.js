const body = document.body;
const footerElement = document.createElement("footer");
body.appendChild("footerElement");

let today = new Date();

let thisYear = today.getFullYear();

const footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = `Daniel Diaz ${thisYear} '&copy'`;
footer.appendChild("copyright")

body.appendChild("footer");

let skills = ["Javascript", "HTML", "CSS", "GitHub"]
let skillsSection = document.querySelector("skills");
let skillsList = document.querySelector("skillsSection");

for(i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild("skill");
}