var app = {
    initialize: function() {
        this.bindEvents();
        console.log("Javascript works");
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        $('.take-photo').click(function() {
            app.takePhoto();
        });
    },

    takePhoto: function() {
        navigator.camera.getPicture(this.onSuccess, this.onFail, { quality: 50,
            destinationType: Camera.DestinationType.DATA_URL
        });
    },

    onSuccess: function(imageData) {
        var image = $('.the-photo').attr('src', "data:image/jpeg;base64," + imageData);

    },

    onFail: function() {
        console.log('Something went wrong!');
    },
}
