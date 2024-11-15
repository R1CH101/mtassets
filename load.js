
let cdn = "https://mtadev.apps.lilleycloud.com/";

function loadApp() {
    fetch(cdn + 'app.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
       document.documentElement.setAttribute("data-theme","dark");
document.querySelector("html").innerHTML = html  

        var tag = document.createElement("script");
tag.src = "https://unpkg.com/feather-icons";
document.head.appendChild(tag);   
    });
  }

function loadPage(pageName) {
    fetch(cdn + pageName + '.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
        document.querySelector("body").innerHTML = html  

var tag = document.createElement("script");
tag.src = cdn + "assets/js/"+pageName+".js";
document.body.appendChild(tag); 
    });
  }

loadApp();
loadPage("search");