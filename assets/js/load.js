var xhr= new XMLHttpRequest();
xhr.open('GET', 'main.html', true);
xhr.onreadystatechange= function() {
    if (this.readyState!==4) return;
    if (this.status!==200) return; // or whatever error handling you want
    document.documentElement.outerHTML= this.responseText;
};
xhr.send();