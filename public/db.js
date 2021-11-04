let db;
let budgetVersion;

const request = indexedDB.open("BudgetDB", budgetVersion || 1);

request.onupgradeneeded = function(e) {
    const db = e.target.result
    db.createObjectStore("pending", {autoIncrement: true})
};

request.onerror = function (e) {
    console.log(`Something failed ${e.target.errorCode}`)
};

request.onsuccess = function (e) {
    db= e.target.result;
    if(navigator.onLine) {
        checkDatabase();
    }
}