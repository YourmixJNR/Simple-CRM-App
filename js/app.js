document.addEventListener('DOMContentLoaded', () => {
    // Open Database
    const request = indexedDB.open('customermanager', 1);

    // Declare Variable
    let db;

    request.onupgradeneeded = function(event) {
        db = event.target.result;

        if(!db.objectStoreNames.contain(customers)){
            const objectStore = db.createObjectStore('customers', {keyPath: "id", autoIncrement: true});

            // Create Index for Name
            objectStore.createIndex('name', 'name', {unique: false});
        }
    };

    // Success
    request.onsuccess = function(event){
        db = event.target.result;
        console.log('Success: Opened Database');
    };

    // Error
    request.onerror = function(event){
		console.log('Error', event.target.error.name);
    }
    
});

// Add Cus