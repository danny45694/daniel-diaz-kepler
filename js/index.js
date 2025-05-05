

const body = document.body;
const footerElement = document.createElement("footer");
body.appendChild(footerElement);

let today = new Date();
let thisYear = today.getFullYear();
const footer = document.querySelector("footer");

let copyright = document.createElement("p");
copyright.innerHTML = `Daniel Diaz ${thisYear} &copy`;
footer.appendChild(copyright)
body.appendChild(footer);


let skills = ["Javascript", "HTML", "CSS", "Adobe Photoshop", "GitHub"]
let skillsSection = document.getElementById("skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < 2; i++) {
    let skill = document.createElement("li");
    skill.innerText = "bob";
    skillsList.appendChild(skill);
    console.log(i)
}