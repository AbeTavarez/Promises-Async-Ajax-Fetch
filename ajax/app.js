console.log(`Running script...`);

const btn = document.getElementById('button');

const loadData = () => {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();
    // ========== Open
    // time of request, file to read, true = async
    xhr.open('GET', 'data.txt', true);
    console.log('READYSTATE:', xhr.readyState);

    //* OPTIONAL- Used for spinners or loaders
    xhr.onprogress = () => {
        console.log('READYSTATE-ONPROGRESS:', xhr.readyState);
    }

    // using onload and arrow function
    xhr.onload = () => {
        console.log('READYSTATE-ONLOAD-ES6:', xhr.readyState);
        if (xhr.status === 200) {
            // console.log(xhr.responseText);
            document.getElementById('output').innerHTML = `
                <h1>${xhr.responseText}<h1>
            `;
            
        };
    };

    //* using the old onreadystatechange and ES5 function
    // xhr.onreadystatechange = function() {
    //     console.log('READYSTATE-ES5:', xhr.readyState);
    //     //* we need to check ready state to be at 4
    //     if (this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     };
    // };

    // on error
    xhr.onerror = () => {
        console.log(`Request error...`);
    }


    // execute request
    xhr.send()
}


btn.addEventListener('click', loadData);

//* ============ Ready State values
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready