$(document).ready (function(){
    $("#pE1").hide();
    $("#backcolor").on("click", function(){
        $("body").css ("background-color", "blue");
        $("h1").css ("background-color", "blue");

    });

    $("#reset").on("click", function(){
        $("body").css ("background-color", "rgb(112, 112, 119)");
        $("h1").css ("background-color", "rgb(112, 112, 119)");


    });

    $("#picture").hover( function(){
        $("#pE1").show();
     },
        function(){
        $("#pE1").hide();

     });  
     
     $("#command").click(function(){
        $("#collapser").toggle();
      }); 

     $("#alert").on("click", function(){
        window.alert("This is an alert");
      }) 
                        
    

})