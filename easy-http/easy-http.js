
//* ========= ES5

function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

//* Make a HTTP GET Request
EasyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this; // capture 'this' on this scope

    this.http.onload = function() {
        if (self.http.status === 200){
            callback(self.http.responseText);
        }
    }

    this.http.send();
}

//* Make a HTTP GET Request
//* Make a HTTP GET Request
//* Make a HTTP GET Request
//* Make a HTTP GET Request