

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

    fetch('https://api.github.com/users/danny45694/repos')
      .then(function(response) {
        return response.json()
      })
      .then(function(response) {
        const repositories = JSON.parse(this.response)
      })
      .catch(function(err) {
        //Error Code
      });
    
  });

});