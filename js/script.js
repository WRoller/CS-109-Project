  $(document).ready(function () {

        $(".user_examples").click(username       
        );
    });

function username() {
   var id = $(this).text();
   var id_n = $(this).attr("class");
   var index = id_n[id_n.length - 1] - 1;

   // Changes the Button name to reflect
    $("#selected_user").text(id);

   // [[curent content], [model_1 content],[model_2 content]]
   var user_1 = [["1l884o","1bysh9","1l88zu", "1l7z8f","1a493w"],["1l7z8f","1o3fng","1l88oe","1pujrd","1l884o"],["1gcd09","1r50k9","xq555","1iix2v","1bk1s0"]];
   var user_2 = [["1erzth","15qmx6","145h3h", "13kcc2","1fccoc"],["15qmx6","1erzth","13kcc2","145h3h","1fcint"],["1ir6k8","uz266","yit64","17km0d","ovn0w"]];
   var user_3 = [["1kqxq1","1l7h63","1ddu5z", "1a4i4y","1quuv8"],["svemv","1iy9ku","1ruax9","18f5sn","vahzo"],["zi63o","6oiqu","1dd6tj","1qfhyf","190sir"]];
   var user_4 = [["1kr9v1","1ko4bq","1gismf", "lwdi5","e04d3"],["1gismf","1ko4bq","e04d3","1kr9v1","lwdi5"],["aouv5","uny8e","1kak7i","1i7xvc","s9ipk"]];
   var user_5 = [["1ggkce","1qhehw","1g9i7c", "1hfb04","1h3w8f"],["13vbtc","svemv","1iy9ku","1ruax9","18f5sn"],["1nbf8s","1ftub2","16ccau","11z8lc","1fddok"]];

   var main_array=[user_1,user_2,user_3,user_4,user_5];
   

   //For each current link the user engages with 
    jQuery.each(main_array[index][0], function(i, val){
        
        $( ".current_links." + (i+1) ).attr("href", "http://www.reddit.com/"+val );
        $( ".current_links." + (i+1) ).text("Content");
    });

    //For model 1 recommendations 
    jQuery.each(main_array[index][1], function(i, val){

        $( ".rec_1." + (i+1) ).attr("href", "http://www.reddit.com/"+val );
    });

    //For model 2 recommendations 
    jQuery.each(main_array[index][2], function(i, val){

        $( ".rec_2." + (i+1) ).attr("href", "http://www.reddit.com/"+val );
    });
}
// current_links [1,5], rec_1 [1,5]