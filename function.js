$(document).ready(function(){

    var section1Height = $('#sectOne').height();
    var testhalfHeight = parseInt(($('#honeycomb-info').height())/2);
    var myselfhalfHeight =parseInt(($('.myself').height())/2);



    $(window).scroll(function(){


        var wScroll=$(this).scrollTop();
        
        /** var wTest= parseInt($('#honeycomb-info').offset().top);
        var wMyself= parseInt($('.myself').offset().top);

        $('#block-stick').css({
            'transform':'translate(0px, '+ wScroll/6 +'%)'

        })
        */

        if(wScroll <= section1Height){
            $('#hello-letter').css({
                'transform':'translate(0px, '+wScroll/3+'%)'
            })
        }

        //scroll notification disappear 
        if(wScroll > (section1Height/2)){

            $('#scroll').addClass("is-hiding");

        }else{

            $('#scroll').removeClass("is-hiding");

        };

        /** 
        if(Math.abs(wMyself+myselfhalfHeight-wTest-testhalfHeight)> 2)
        {
            $('.myself').css({
                'transform':'translate(0px, '- wScroll/18 +'%)'
            });

            $('#honeycomb-info').css({
                'transform':'translate(0px, '+ wScroll/18 +'%)'
            });


        };
        */
      
    

    


        /**scrollspy effect for about

        if((wScroll > $('#sectThree').offset().top) &
            (wScroll < $('#sectFour').offset().top)){

            $('.nav-top #nav-about').addClass("active");

        } else{

            $('.nav-top #nav-about').removeClass("active");

        };

        if((wScroll > $('#sectOne').offset().top) &
            (wScroll < $('#sectTwo').offset().top)){

            $('.nav-top #nav-home').addClass("active");

        } else{

            $('.nav-top #nav-home').removeClass("active");

        };

        if((wScroll > $('#sectThree').offset().top) &
            (wScroll < $('.footer').offset().top)){

            $('.nav-top #nav-project').addClass("active");

        } else{

            $('.nav-top #nav-project').removeClass("active");

        };
        
        **/


    });

})