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