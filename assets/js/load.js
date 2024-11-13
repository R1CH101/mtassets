function fetchHtml() {
    fetch('https://raw.githubusercontent.com/R1CH101/mtassets/refs/heads/main/main.html')
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
tag.src = "https://raw.githubusercontent.com/R1CH101/mtassets/refs/heads/main/assets/js/functions.js";
document.body.appendChild(tag);
var tag = document.createElement("script");
tag.src = "https://raw.githubusercontent.com/R1CH101/mtassets/refs/heads/main/assets/js/saavn-search.js";
document.body.appendChild(tag);
    });
  }
  fetchHtml()