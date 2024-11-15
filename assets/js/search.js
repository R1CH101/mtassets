feather.replace();
function toggleIsLoading(id) {
  if(id == "searchControl"){
document.getElementById("searchIcon").classList.toggle("is-hidden");
document.getElementById("searchBar").disabled = !document.getElementById("searchBar").disabled;
    
  }
document.getElementById(id).classList.toggle("is-loading");
 
}

