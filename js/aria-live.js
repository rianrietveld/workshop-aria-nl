(function() {

    var saveButton = document.querySelector('#submit');
    var alert = document.querySelector("#notice");

    saveButton.addEventListener('click', saveSettings);

    function saveSettings() {
        alert.textContent = String.fromCharCode(10004) + " Uw bericht is succesvol verstuurd, dank u wel.";
    }

})()
