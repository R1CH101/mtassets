
let cdn = "https://mtadev.apps.lilleycloud.com/";

function loadApp() {
    fetch(cdn + 'app.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
        document.querySelector("html").innerHTML = html  
        var tag = document.createElement("script");
tag.src = "https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp,container-queries";
document.body.appendChild(tag);   
    });
  }

function loadPage(pageName) {
    fetch(cdn + pageName + '.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
        document.querySelector("body").innerHTML = html  
    });
  }

loadApp();
loadPage("search");