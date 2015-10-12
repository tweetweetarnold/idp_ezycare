$(document).bind('pageinit', function() {
        setTimeout(function(){
          $("#popSosSent").popup();
          $("#popSosSent").popup("open");
        }, 100);
        setTimeout(function(){
          $("#popSosSent").popup("close");
        }, 3000);
        setTimeout(function(){
          $("#popSosRequest").popup();
          $("#popSosRequest").popup("open");
        }, 3100);
        setTimeout(function(){
          $("#popSosRequest").popup("close");
        }, 3000);
         setTimeout(function(){
          $("#popSosResponse").popup();
          $("#popSosResponse").popup("open");
        }, 100);
});