feather.replace();

function toggleIsLoading(id) {
  if(id == "searchControl"){
document.getElementById("searchIcon").classList.toggle("is-hidden");
document.getElementById("searchBar").disabled = !document.getElementById("searchBar").disabled;
    
  }
document.getElementById(id).classList.toggle("is-loading");
 
}



var results_container = document.querySelector("#resultstable")
var results_objects = {};
const searchUrl = "https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=";

function songSearch() {
event.preventDefault(); // stop page changing to #, which will reload the page
var query = document.querySelector("#searchBar").value.trim()
query = encodeURIComponent(query);

if(query==lastSearch) {doSongSearch(query)}
    window.location.hash = lastSearch; 
if(query.length > 0) { 
    window.location.hash = query 
}

}
var page_index = 1;


function nextPage() {
toggleIsLoading('loadmorebtn');
    var query = document.querySelector("#searchBar").value.trim();
    if (!query) {query = lastSearch;}
    query = encodeURIComponent(query);
    doSongSearch(query,0,true)
toggleIsLoading('loadmorebtn');
}

async function doSongSearch(query,NotScroll,page) {
    window.location.hash = query;
    document.querySelector("#searchBar").value = decodeURIComponent(query);
    if(!query) {return 0;}
toggleIsLoading('searchControl');
    query=query+"&limit=40";
    if(page) {
        ;page_index=page_index+1;query=query+"&page="+page_index;
    } else {query=query+"&page=1";page_index=1;}
    
// try catch
try {
var response = await fetch(searchUrl + query);
} catch(error) {
results_container.innerHTML = `<span class="error">Error: Please try again later.</span>`;
}
var json = await response.json();
/* If response code isn't 200, display error*/
if (response.status !== 200) {
    results_container.innerHTML = `<span class="error">Error: Please try again</span>`;
    console.log(response)
    return 0;
}
var json = json.data.results;
var results = [];
if(!json) {results_container.innerHTML = "<p> No result found. </p>";return;}
lastSearch = decodeURI(window.location.hash.substring(1));
for(let track of json) {


song_name = track.name;
album_name = track.album.name;
if (track.album.name == track.name) {
    album_name = ""
}
var measuredTime = new Date(null);
measuredTime.setSeconds(track.duration); // specify value of SECONDS
var play_time = measuredTime.toISOString().substr(11, 8);
if (play_time.startsWith("00:0")) {
    play_time = play_time.slice(4);
}
if (play_time.startsWith("00:")) {
    play_time = play_time.slice(3);
}
var song_id = track.id;
var year = track.year;
var song_image = track.image[1].link;
var song_artist = track.primaryArtists;
var bitrate_i = 2;
if(track.downloadUrl) {
var download_url = track.downloadUrl[bitrate_i]['link'];
var quality = "";
if (bitrate_i == 4) {quality = 320} else {quality = 160;}
    // push object to results array
    results_objects[song_id] = {
        track: track
    };
      results.push(`

<div class="my-2 songresult is-flex">
    <div class="overlay">
    <img class="songimg" src="` + song_image + `" />
</div>
    <div class="innersongtext pl-2 is-flex is-align-items-center is-justify-content-space-between is-flex-grow-5">
    <div>
      <p class="songtext is-size-7"><strong>` + song_name +`</strong></p>
      <p class="songtext is-size-7"><i>`+ play_time +` • `+song_artist+`</i></p>
    </div>
    <div>
    <button id="sbtnp-`+song_id+`" onclick="toggleIsLoading('sbtnp-1')" class="button iconbtns is-small">
    <span class="icon is-large">
      <i data-feather="play"></i>
    </span>
    </button>
    <button id="sbtn-`+song_id+`" onclick="AddDownload('`+song_id+`')" class="button iconbtns is-small">
    <span class="icon is-large">
      <i data-feather="download"></i>
    </span>
    </button>
    </div>
    </div>
  </div>



      
`
); }
    }
    
    results_container.innerHTML = results.join(' ');
    if(!NotScroll){
    document.getElementById("resultstable").scrollIntoView();
feather.replace();
toggleIsLoading('searchControl');
    }


}
function TextAbstract(text, length) {
    return text;
}
if(window.location.hash) {
   doSongSearch(window.location.hash.substring(1));
} else {doSongSearch('LDS Hymns',1);}

addEventListener('hashchange', event => { });
onhashchange = event => {doSongSearch(window.location.hash.substring(1))};



function searchSong(search_term) {
    
document.getElementById('search-box').value=search_term;
var goButton = document.getElementById("search-trigger");
            goButton.click();
    
}


async function downloadSong(url, filename, buttonid) {
    try {
        toggleIsLoading('sbtn-'+ buttonid);
      // Fetch the PDF data as a Blob
      const response = await fetch(url);
      const blob = await response.blob();
  
      // Create a download link and set its attributes
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = decodeURI(filename.replace("###$###","'"));
  
      // Append the link to the document, click it, and remove it
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      
      toggleIsLoading('sbtn-' + buttonid);
    } catch (error) {
        console.log("Error Downloading Song");
    }
  }
  



  
var DOWNLOAD_API = "https://openmp3compiler.astudy.org"

function AddDownload(id) {
    var bitrate_i = 2;
    // MP3 server API
    var MP3DL = DOWNLOAD_API+"/add?id="+id;
    // make api call, if 200, add to download list
    fetch(MP3DL)
    .then(response => response.json())
    .then(data => { console.log(data);
        if (data.status == "success") {
            
            var STATUS_URL = DOWNLOAD_API+"/status?id="+id;
            
            // check status every 5 seconds
            var interval = setInterval(function() {
                fetch(STATUS_URL)
                .then(response => response.json())
                .then(data => {
                    if (data.status) {
                        // update status
                        
                    
                        if (data.status == "Done") {
                            // download complete, add download button
                           
var newfilename = results_objects[id].track.name + " - " + results_objects[id].track.primaryArtists + ".mp3";
console.log(newfilename)
newfilename = encodeURI(newfilename);
console.log(newfilename)
newfilename = newfilename.replace("'","###$###")
console.log(newfilename)
downloadPDF(DOWNLOAD_API + data.url', 'newfilename','id');
                            // clear interval
                            clearInterval(interval);
                            return;
                  }}
              });}, 3000); // end interval
        } });}







