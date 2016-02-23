function initSlides() {
    var slidesToRemove;
    if (navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia) {
        slidesToRemove = document.querySelectorAll(".no-webrtc");
    } else {
        slidesToRemove = document.querySelectorAll(".webrtc");
    }

    for (var i = 0; i < slidesToRemove.length; i++) {
        var slideToRemove = slidesToRemove[i];
        slideToRemove.parentElement.removeChild(slideToRemove);
    }
}


function initWebRTC() {
    var viewer = PHONE({
        number: "VIEWER-" + new Date,
        publish_key   : 'pub-c-f9b642ff-c435-4519-b121-78d72a7b4c5e',
        subscribe_key : 'sub-c-3e8402ec-d9a1-11e5-8758-02ee2ddab7fe',
        ssl: true
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Join a Broadcast as a Viewer
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    viewer.ready(function () {
        var broadcaster = phone.dial("BROADCASTER");
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Show Broadcast's Video Stream
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    viewer.receive(function (broadcaster) {
        broadcaster.connected(function (broadcaster) {
            document.body.appendChild(broadcaster.video);
        });
        broadcaster.ended(function (broadcaster) { /* broadcast ended */ });
    });
}

