// on page load...
moveProgressBar();
// on browser resize...
$(window).resize(function() {
    moveProgressBar();
});

function moveProgressBar() {
    console.log("moveProgressBar");
    var getPercent = ($('.progress-wrap').data('progress-percent') / 100);
    var getProgressWrapWidth = $('.progress-wrap').width();
    var progressTotal = getPercent * getProgressWrapWidth;
    var animationLength = 2500;

    // on page load, animate percentage bar to data percentage length
    // .stop() used to prevent animation queueing
    $('.progress-bar').stop().animate({
        left: progressTotal
    }, animationLength);
}
// $('#myModal').on('shown.bs.modal', function() {
//         $('#myInput').trigger('focus')
//     }) 
$(".sidenav").hide()
$(".burger").click(function() {
    $(".sidenav").show("slow")
})
$(".closeSideNav").click(function() {
    $(".sidenav").hide("slow")
})
$(".showCount div").click(function() {
    $(".showCount div").each(function() {
        hewllo = $(this).attr("class");
        if (hewllo == "active") {
            $(this).removeClass("active")
        }
        return;
    })
    $(this).addClass("active")
})

$(".likeHeart i").click(function() {
    liked = $(this).attr("class")
    if (liked == "far fa-heart active") {
        $(this).removeClass("active")
    } else {
        $(this).addClass(" active")
    }
})

// SIGNATURE PROGRESS