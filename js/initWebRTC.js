var viewer,
    broadcaster;
function initWebRTC() {
    viewer = PHONE({
        number: "VIEWER-" + new Date,
        publish_key   : 'pub-c-f9b642ff-c435-4519-b121-78d72a7b4c5e',
        subscribe_key : 'sub-c-3e8402ec-d9a1-11e5-8758-02ee2ddab7fe',
        ssl: true,
        media: {video: true}
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Join a Broadcast as a Viewer
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    viewer.ready(function () {
        broadcaster = viewer.dial("BROADCASTER");
        broadcaster.send("Lol");
    });

    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    // Show Broadcast's Video Stream
    // =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
    viewer.receive(function (broadcaster) {
        broadcaster.connected(function (broadcaster) {
            document.getElementById("broadcaster").src = broadcaster.video.src;
        });
        broadcaster.ended(function (broadcaster) { /* broadcast ended */ });

    });
}