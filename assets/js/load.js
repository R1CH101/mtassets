var xhr= new XMLHttpRequest();
xhr.open('GET', 'https://raw.githubusercontent.com/R1CH101/mtassets/refs/heads/main/main.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.querySelector("html").innerHTML= this.responseText;
};
xhr.send();
var tag = document.createElement("script");
tag.src = "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.1/js/bootstrap.bundle.min.js";
document.getElementsByTagName("head")[0].appendChild(tag);
var tag = document.createElement("script");
tag.src = "assets/js/functions.js";
document.getElementsByTagName("head")[0].appendChild(tag);
var tag = document.createElement("script");
tag.src = "assets/js/saavn-search.js";
document.getElementsByTagName("head")[0].appendChild(tag);
