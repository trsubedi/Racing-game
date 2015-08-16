
//To move car1//
$(document).ready(function () {
  
  $(document).keydown(function (){
    if(event.which ===65){
    	var left = $("#player1").css("left");
    	// console.log(parseInt(left).toString());  // "10px"
    	$("#player1").css("left", (parseInt(left) + 5).toString() + "px" ) ;  // 2 + 5  px

       }
  });

});

//To move car2//

$(document).ready(function () {
  
  $(document).keydown(function (){
    if(event.which ===76){
    	var left = $("#player2").css("left");
    	// console.log(parseInt(left).toString());  // "10px"
    	$("#player2").css("left", (parseInt(left) + 5).toString() + "px" ) ;  // 2 + 5  px

       }
  });

});


	
function reset() {
	$("#player1").css("left", "2px");
	$("#player2").css("left", "2px");
}	


$(document).ready(function(){
$(".button").on("click", function(){
	reset();
	});
});


 



