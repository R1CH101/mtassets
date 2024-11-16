
let cdn = "https://mtadev.apps.lilleycloud.com/";


function loadScript(url, callback) {
    var script = document.createElement('script');
    script.src = url;
    script.onload = function() {
        console.log('Script loaded successfully.');
        if (callback) callback();
    };
    script.onerror = function() {
        console.error('Error loading script.');
    };
    document.head.appendChild(script);
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

function loadApp() {
    fetch(cdn + 'app.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
       document.documentElement.setAttribute("data-theme","dark");
document.querySelector("html").innerHTML = html  

loadScript('https://unpkg.com/feather-icons', function() {
    // Code to execute after the script is fully loaded
    console.log('icons Script is fully loaded, now loading page.');
loadPage("search");
});


    });
  }



loadApp();
