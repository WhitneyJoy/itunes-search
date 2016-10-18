function getData(userInput){
	$.ajax({
    url: "https://itunes.apple.com/search?term="+ userInput,
    type: "GET",
    dataType: 'jsonp'
  }).done(function(data){
    console.log(data);

  }).fail(function(error){
    console.log("an error occurred!");
  });
}
$("#navigation").click(function(){
  getData(userInput);
});

function displayDataResults() {

}

// window.print();

// $(function() {

// 	$('cssSelector').method();
// 	$
//jquery codes goes in here

// });
// }