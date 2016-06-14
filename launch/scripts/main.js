function checkZ() {
    "use strict";
    0 > z && (z = 0), z > 2e3 && (z = 2e3)
}

function animateSections(t) {
    "use strict";
    $("#content").css({
        "-webkit-transform": "translate3d(0px, 0px, " + t + "px)",
        "-ms-transform": "translate3d(0px, 0px, " + t + "px)",
        transform: "translate3d(0px, 0px, " + t + "px)"
    })
}

function touchHandler(t) {
    "use strict";
    16 === t.gesture.direction ? z -= 50 : 8 === t.gesture.direction && (z += 50), checkZ(), animateSections(z)
}
var z = 0;
document.ontouchmove = function(t) {
    "use strict";
    t.preventDefault()
}, $(function() {
    "use strict";
    $(window).mousewheel(function(t) {
        t.deltaY < 0 ? z += 50 : z -= 50, checkZ(), animateSections(z)
    }), $("body").hammer().on("pan", touchHandler)
});