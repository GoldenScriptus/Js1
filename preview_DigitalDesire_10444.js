window.onload = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://xpreviews.akbar1.xyz/XXFe//66043_previews/DigitalDesire_10444.jpg', true); 
    xhr.responseType = 'blob'; //important
    xhr.onload = function(e) {
        if (this.status == 200) {
            console.log("loaded");
            var blob = this.response;
            var image = document.getElementById('previewpic1');
            image.onload = function() {
                URL.revokeObjectURL(this.src);
            };
            image.src = URL.createObjectURL(blob);
            image.load();
        }
    };
    xhr.send();
}

