(function() {
    // Set the configuration for your app
    var config = {
        apiKey: "AIzaSyDAwA56cN8GTyCob1apGwWhcOJBI2lRIWg",
        authDomain: "integrasi-sensor.firebaseapp.com",
        databaseURL: "https://integrasi-sensor-default-rtdb.firebaseio.com",
        projectId: "integrasi-sensor",
        storageBucket: "integrasi-sensor.appspot.com",
        messagingSenderId: "51772622735",
        appId: "1:51772622735:web:29650573a510e325f4edfa"
        };

        // Initialize Firebase
        firebase.initializeApp(config);


    // Get a reference to the database service
    var database = firebase.database();

    // Get element from the DOM (sensor)
    const gasElement = document.getElementById('gas');
    const lampuElement = document.getElementById('lampu');
    const tempElement = document.getElementById('dht');

    // get element from DOM (switch 1-8)
    const switchElement = document.getElementById('Switch');
    const switch2Element = document.getElementById('Switch2');
    const switch3Element = document.getElementById('Switch3');
    const switch4Element = document.getElementById('Switch4');
    const switch5Element = document.getElementById('Switch5');
    const switch6Element = document.getElementById('Switch6');
    const switch7Element = document.getElementById('Switch7');
    const switch8Element = document.getElementById('Switch8');

    // Create gas database reference
    const gasRef = database.ref('sensor').child('gas');

    // Create LDR sensor database reference
    const lampuRef = database.ref('sensor').child('lampu');

    // Create DHT database reference
    const tempRef = database.ref('sensor').child('dht');

    // Create switch 1 database reference
    const switchRef = database.ref('sensor').child('Switch');

    // Create switch 2 database reference
    const switch2Ref = database.ref('sensor').child('Switch2');

    // Create whitch 3 database reference
    const switch3Ref = database.ref('sensor').child('Switch3');

    // Create switch 4 database reference
    const switch4Ref = database.ref('sensor').child('Switch4');

    // Create switch 5 database reference
    const switch5Ref = database.ref('sensor').child('Switch5');

    // Create switch 6 database reference
    const switch6Ref = database.ref('sensor').child('Switch6');

    // Create switch 7 database reference
    const switch7Ref = database.ref('sensor').child('Switch7');

    // Create switch 8 database reference
    const switch8Ref = database.ref('sensor').child('Switch8');

// Sync perubahan objects bagian sensor

    // sensor GAS
    gasRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("gas: " + childData);
            gasElement.innerText = childData;
        });
    });

    // sensor LDR / LAMPU
    lampuRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("lampu: " + childData);
            lampuElement.innerText = childData;
        });
    });

    // sensor DHT / SUHU
    tempRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("dht: " + childData);
            tempElement.innerText = childData;
        });
    });

// AKHIR

// Sync perubahan objects bagian switch 1-8

    // switch 1
    switchRef.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch: " + childData);
            switchElement.innerText = childData;
        });
    });

    // switch 2
    switch2Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 2: " + childData);
            switch2Element.innerText = childData;
        });
    });

    // switch 3
    switch3Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 3: " + childData);
            switch3Element.innerText = childData;
        });
    });

    // switch 4
    switch4Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 4: " + childData);
            switch4Element.innerText = childData;
        });
    });

    // switch 5
    switch5Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 5: " + childData);
            switch5Element.innerText = childData;
        });
    });

    // switch 6
    switch6Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 6: " + childData);
            switch6Element.innerText = childData;
        });
    });

    // switch 7
    switch7Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 7: " + childData);
            switch7Element.innerText = childData;
        });
    });

    // switch 8
    switch8Ref.limitToLast(1).on('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
            var childData = childSnapshot.val();
            console.log("Switch 8: " + childData);
            switch8Element.innerText = childData;
        });
    });

// batas switch



}());
