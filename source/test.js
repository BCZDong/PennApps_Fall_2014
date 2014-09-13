(function() {

    checkbox = function(){
        onThis = $(this);
        checkingbox = onThis.prev('.checkbox').prop('checked');
        theBox = onThis.prev('.checkbox');
        if(checkingbox){
            theBox.attr('value',0);
            onThis.attr('value',0);
        }else{
            theBox.attr('value',1);
            onThis.attr('value',1);
        }
    }
    
     addName = function(){
         onThis = $(this);
         nameFull = function(){
             var num = 1;
             onThis.closest('.addpeople').find('.person').each(function(index){
              num = index+1;   
             });
             return "full["+num+"]";
         }
            onThis.parent().clone().find('.person').attr('name',nameFull).appendTo($(this).closest('.addpeople')).after("<br />"); 
    }
     
    $('span.rsvp').each(function(index){
    $(this).click(addName); 
    });
    
    $('.slider-v2').each(function(index){
    $(this).click(checkbox); 
    });
    
}());