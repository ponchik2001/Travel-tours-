$(document).click(function(){
            if ($('.navbar_item').css('display') == 'flex'){
                 $('#menu_btn').click(function(){
                    var $speech = $('div.navbar_item');
                    $speech.css('display','none');
                })
            }
            else{
               
                
                
                $('#menu_btn').click(function(){
                    var $speech = $('div.navbar_item');
                    $speech.css('display','flex');
                })
            }
        })