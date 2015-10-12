$(document).on({
    "pageinit": function () {
       
        //$("#popupBasic").popup('open'); will throw error here because the page is not ready yet
        //simulate ajax call here
        //data recieved from ajax - might be an array, anything
       
        var sosMsg = "SOS Sent";
        
        //use this to transfer data betwene events
        $(this).data("fromAjax", sosMsg);
    },
    //open popup here
    "pageshow": function () {
//        setTimeout(function() { $( "popupBasic" ).popup( "open" ) }, 100 );
        
       
        //using stored data in popup
        $("#popupBasic p").html($(this).data("fromAjax"));
        //open popup
        $("#popupBasic").popup('open', 3000);
        
    }
}, "#sosPage");