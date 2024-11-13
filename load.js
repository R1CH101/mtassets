function fetchHtml() {
    fetch('https://mta.apps.lilleycloud.com/main.html')
    .then((response) => {
      return response.text();
    })
    .then((html) => {
        document.querySelector("html").innerHTML = html  
        var tag = document.createElement("script");
tag.src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js";
document.body.appendChild(tag);   
        var tag = document.createElement("script");
tag.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/js/bootstrap.bundle.min.js";
document.body.appendChild(tag);
var tag = document.createElement("script");
tag.src = "https://mta.apps.lilleycloud.com/assets/js/functions.js";
document.body.appendChild(tag);
var tag = document.createElement("script");
tag.src = "https://mta.apps.lilleycloud.com/assets/js/saavn-search.js";
document.body.appendChild(tag);
    });
  }
  fetchHtml()