function showDelete(id){
	$("#confirm").popup("open");
}


function deleteAlle(id) {
	var alle = '#alle' + id;
	$(alle).hide();
}


//
//$( document ).on( "pageinit", "#Allergies", function() {
//    // Swipe to remove list item
//    $( document ).on( "swipeleft swiperight", "#list li.ui-li", function( event ) {
//        var listitem = $( this ),
//            // These are the classnames used for the CSS transition
//            dir = event.type === "swipeleft" ? "left" : "right",
//            // Check if the browser supports the transform (3D) CSS transition
//            transition = $.support.cssTransform3d ? dir : false;
//            confirmAndDelete( listitem, transition );
//    });
//    // If it's not a touch device...
//    if ( ! $.mobile.support.touch ) {
//        // Remove the class that is used to hide the delete button on touch devices
//        $( "#list" ).removeClass( "touch" );
//        // Click delete split-button to remove list item
//        $( ".delete" ).on( "click", function() {
//            var listitem = $( this ).parent( "li.ui-li" );
//            confirmAndDelete( listitem );
//        });
//    }
//    function confirmAndDelete( listitem, transition ) {
//        // Highlight the list item that will be removed
//        listitem.addClass( "ui-btn-down-d" );
//        // Inject topic in confirmation popup after removing any previous injected topics
//        $( "#confirm .topic" ).remove();
//        listitem.find( ".topic" ).clone().insertAfter( "#question" );
//        // Show the confirmation popup
//        $( "#confirm" ).popup( "open" );
//        // Proceed when the user confirms
//        $( "#confirm #yes" ).on( "click", function() {
//            // Remove with a transition
//            if ( transition ) {
//                listitem
//                    // Remove the highlight
//                    .removeClass( "ui-btn-down-d" )
//                    // Add the class for the transition direction
//                    .addClass( transition )
//                    // When the transition is done...
//                    .on( "webkitTransitionEnd transitionend otransitionend", function() {
//                        // ...the list item will be removed
//                        listitem.remove();
//                        // ...the list will be refreshed and the temporary class for border styling removed
//                        $( "#list" ).listview( "refresh" ).find( ".ui-li.border" ).removeClass( "border" );
//                    })
//                    // During the transition the previous list item should get bottom border
//                    .prev( "li.ui-li" ).addClass( "border" );
//            }
//            // If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
//            else {
//                listitem.remove();
//                $( "#list" ).listview( "refresh" );
//            }
//        });
//        // Remove active state and unbind when the cancel button is clicked
//        $( "#confirm #cancel" ).on( "click", function() {
//            listitem.removeClass( "ui-btn-down-d" );
//            $( "#confirm #yes" ).off();
//        });
//    }
//});
// 
//$(document).delegate('#simplestring', 'click', function() {
//  $(this).simpledialog({
//    'mode' : 'string',
//    'prompt' : 'What do you say?',
//    'buttons' : {
//      'OK': {
//        click: function () {
//          $('#dialogoutput').text($('#medDialog').attr('data-string'));
//        }
//      },
//      'Cancel': {
//        click: function () { },
//        icon: "delete",
//        theme: "c"
//      }
//    }
//  })
//})