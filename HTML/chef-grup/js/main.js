/* Change site language */
var changeToEnglish = document.getElementById('english');
changeToEnglish.addEventListener('click', function() {
    document.body.className = 'en';
});

var changeToTurkish = document.getElementById('turkish');
changeToTurkish.addEventListener('click', function() {
    document.body.className = 'tr';
});

/* Register Service Worker */
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('service_worker.js')
        .then(function(registration) { 
            console.log("Service Worker Registered", registration);
        })
        .catch(function(err) {
            console.log(err);
        });
}