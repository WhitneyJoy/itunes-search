$('document').ready(function(){

function getData(userInput){
  $.ajax({
    url: "https://itunes.apple.com/search?term=/"+userInput,
    type: "GET",
    dataType: 'jsonp'
  }).done(function(data){
    displayDataResults(data);
    // console.log(data);
  }).fail(function(error){
    // console.log("an error occurred!");
  });
}

function displayDataResults(data){
  for(var i = 0; i < data.results.length; i++){
  var apiResults = data.results[i];
  document.getElementById("displayArea").innerHTML += "<hr>" + "Song Name: " + apiResults.trackName + " Artist: " + apiResults.artistName + " Album: " + apiResults.collectionName;
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