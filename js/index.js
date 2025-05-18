

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

    const messageForm = document.querySelector('form[name="leave_message"]');


    messageForm.addEventListener("submit", function (event) {
    let usersName = document.getElementById("usersName");
    let usersEmail = document.getElementById("usersEmail");
    let usersMessage = document.getElementById("usersMessage");

    console.log(usersName.value)
    console.log(usersEmail.value)
    console.log(usersMessage.value)
    event.preventDefault();

    const messageSection = document.querySelector("#messages")
    const messageList = messageSection.querySelector("ul");
    let newMessage = document.createElement("li");
    
    const removeButton = document.createElement("button");
    newMessage.innerHTML = `<a href="mailto:${usersEmail.value}">${usersName.value}</a> &nbsp; <span>${usersMessage.value}</span>`
    removeButton.innerText = "remove"
    removeButton.type = "button";
    removeButton.style.marginLeft = "10px"; // Css spacing
    
    removeButton.addEventListener("click", function() {
      const entry = removeButton.parentNode;
      entry.remove();
      
    })
    messageForm.reset();
    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);
    


    // repush to git


    fetch('https://api.github.com/users/danny45694/repos')
      .then(response =>  response.json())
      .then(repositories => {console.log(repositories);
        for(let i = 0; i < repositories.length; i++) {
          let project = document.createElement("li");
          project.innertext = repositories[i];
          projectList.appendChild(project);
        }

        
      })
      .catch(error => console.error(error));

      let projectSection = document.querySelector("#projects");
      let projectList = document.querySelector(projectSection);

  });

});