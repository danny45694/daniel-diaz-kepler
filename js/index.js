

document.addEventListener('DOMContentLoaded', function() {
    let body = document.body;
    let footerElement = document.createElement("footer");
    body.appendChild(footerElement);

    let today = new Date();
    let thisYear = today.getFullYear();
    let footer = document.querySelector("footer");

    let copyright = document.createElement("p");
    copyright.innerHTML = `Daniel Diaz ${thisYear} &copy`;
    footer.appendChild(copyright)
    body.appendChild(footer);


    let skills = ["Javascript", "HTML", "CSS", "Adobe Photoshop", "GitHub"]
    let skillsSection = document.getElementById("skills");
    let skillsList = skillsSection.querySelector("ul");

    for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
    }

    const messageForm = document.querySelector('#leaveMessage');

    messageForm.addEventListener("submit", function (event) {
    console.log(event);
    let usersName = document.querySelector('input[name="usersName"]');
    let usersEmail = document.querySelector('input[name="usersEmail"]');
    let usersMessage = document.querySelector('textarea[name="usersMessage"]');
    console.log(usersName)
    console.log(usersEmail)
    console.log(usersMessage)
    event.preventDefault();

    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    newMessage.innerHTML = <a href="mailto:`${usersEmail}`">`${usersName}`</a> + 
    <span>`${usersMessage}`</span>;
    const removeButton = document.createElement("button");
    removeButton.innerText = "remove"
    removeButton.type = "button";
    removeButton.addEventListener("click", function() {
     // const entry = 
    })


    messageForm.reset();
    })

  });


