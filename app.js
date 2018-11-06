var personOriginal = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

function deepCopy(obj) {  // a deepCopy function
    var copy = {};
    for (var key in obj) {
        if (typeof obj[key] == 'object') {
            copy[key] = deepCopy(obj[key]);
        }
        else
            copy[key] = obj[key];
    }
    return copy;
} 

var personCopy = deepCopy(personOriginal);

personOriginal.address.geo.lat = "-47.3159";
console.log(personCopy.address.geo.lat); // "-37.3159"
input.value = value;