$(document).ready(function() { 

    function checkPosition() {
        if (window.matchMedia('(max-width: 280px)').matches) {
            $('#slideComputerimg').removeAttr("width").attr("width", 260);
            $('#slideComputerimg').removeAttr("height").attr("height", 150);
        } else if (window.matchMedia('(max-width: 320px)').matches) {
            $("#slideComputerimg").removeAttr("width").attr("width", 280);
            $("#slideComputerimg").removeAttr("height").attr("height", 180);
        } else if (window.matchMedia('(max-width: 376px)').matches) {
            $("#slideComputerimg").removeAttr("width").attr("width", 350);
            $("#slideComputerimg").removeAttr("height").attr("height", 210);
        } else if (window.matchMedia('(max-width: 425px)').matches) {
            $('#slideComputerimg').removeAttr("width").attr("width", 400);
            $('#slideComputerimg').removeAttr("height").attr("heght", 210);
        } else if (window.matchMedia('(max-width: 541px)').matches) {
            $("#slideComputerimg").removeAttr("width").attr("width", 250);
            $("#slideComputerimg").removeAttr("height").attr("height", 180);
        } else if (window.matchMedia('(max-width: 768px)').matches) {
            $("#slideComputerimg").removeAttr("width").attr("width", 327);
            $("#slideComputerimg").removeAttr("height").attr("height", 260);
        } else if (window.matchMedia('(max-width: 1026px)').matches) {
            $("#slideComputerimg").removeAttr("width").attr("width", 427);
            $("#slideComputerimg").removeAttr("height").attr("height", 260);
        } else if (window.matchMedia('(max-width: 1600px)').matches) {
            $("#startSlideS").removeAttr("style").attr("style", "background-image:url('boyukekrann.PNG');height:800px;");
        }
        return;
    }
    checkPosition();

    // single product slide 
    $(".simgleSlideSmallImg img").click(function(){  
        newImg=$(this).attr("src");
        $(".singleStartSlideMainImg img").removeAttr("src").attr("src", newImg);
    })

    $(document).ready(function() {
        $(document).ready(function() {
            $(".instagram").owlCarousel({
                center:true,
                items: 12,
                loop: true,
                autoplay: true, 
                dots:true,
                responsive: {
                    0: {
                        items: 2
                    },
                    576: {
                        items: 2
                    },
                    768: {
                        items: 2
                    },
                    992: {
                        items: 2
                    }
                }
            });
        });
    
        $(document).ready(function() {
            $(".say").owlCarousel({
                items: 1, 
                loop: true,
                autoplay: true
            });
        });
    
    })

})