$('document').ready(function(){

function getData(userInput){
  $.ajax({
    url: "https://itunes.apple.com/search?term=/"+userInput,
    type: "GET",
    dataType: 'jsonp'
  }).done(function(data){
    displayDataResults(data);
  }).fail(function(error){
  });
}

function displayDataResults(data){
  for(var i = 0; i < data.results.length; i++){
  var apiResults = data.results[i];
  document.getElementById("displayArea").innerHTML += "<hr>" + "Song Name: " + apiResults.trackName + " Artist: " + apiResults.artistName + " Album: " + apiResults.collectionName + "<hr>" + "<img alt='album art' src=" + apiResults.artworkUrl100 + " height='150' width='150'>"  +  "<br>" + "<audio controls><source src=" + apiResults.previewUrl + " type='audio/mpeg'></audio>";
}

}


function collectData(){
  return document.getElementById("searchBar").value;
}



$("#searchArea").click(function(){
  var userInput = collectData();
  getData(userInput);
});

});