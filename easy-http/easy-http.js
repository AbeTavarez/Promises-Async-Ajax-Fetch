
//* =================== ES5

//* Constructor function
function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

//* ***** Make a HTTP GET Request
EasyHTTP.prototype.get = function(url, callback){
    this.http.open('GET', url, true);

    let self = this; // capture 'this' on this scope

    this.http.onload = function() {
        if (self.http.status === 200){
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

//* ***** Make a HTTP POST Request
EasyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this; // capture 'this' on this scope

    this.http.onload = function() {
        callback(null, self.http.responseText);
    }

    this.send(JSON.stringify(data));
}





//* Make a HTTP PUT Request
//* Make a HTTP DELETE Request
//* Make a HTTP GET Request