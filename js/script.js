  $(document).ready(function () {

        $(".user_examples").click(username
            //function () {
             //   username();
            //}            
        );
    });

function username() {
   var id = $(this).text();
   // Changes the Button name to reflect
   $("#selected_user").replaceWith("<div id='selected_user'>"+id+"</div>");
   
   // Arrays for one user
   // [[curent content], [model_1 content],[model_2 content]]
   var user_1 = [["a","b","c", "d","e"],["A"],["b"]];
   //var user_2
   //var user_3
   //var user_4
   //var user_5

   
   //For each current link the user engages with 
    jQuery.each(user_1[0], function(i, val){
        console.log(val);
        $( ".current_links." + (i+1) ).attr("href", "http://www.reddit.com/"+val );
        //console.log(link);
    });
}
// current_links [1,5], rec_1 [1,5]



var arr = [ "one", "two", "three", "four", "five" ];
var obj = { one: 1, two: 2, three: 3, four: 4, five: 5 };
 
jQuery.each( arr, function( i, val ) {
  $( "#" + val ).text( "Mine is " + val + "." );
 
  // Will stop running after "three"
  return ( val !== "three" );
});
 
jQuery.each( obj, function( i, val ) {
  $( "#" + i ).append( document.createTextNode( " - " + val ) );
});