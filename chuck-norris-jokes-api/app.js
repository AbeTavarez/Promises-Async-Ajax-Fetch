console.log(`running script...`);



const getJokesBtn = document.getElementById('get-jokes');


const getJokes = e => {
    e.preventDefault();

    const number = document.querySelector('input[type="number"]').value;
    
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}` , true);

    xhr.onload = () => {
        if (xhr.status === 200){
            const response = JSON.parse(xhr.responseText);
            //console.log(response);

            let output = '';

            if (response.type === 'success'){
                response.value.forEach(joke => {
                    output += `<li>${joke.joke}</li>`
                });
            } else {
                output += '<li>Something went wrong</li>'
            }
            document.getElementById('jokes').innerHTML = output;
        };

    }

    xhr.send();
}

getJokesBtn.addEventListener('click', getJokes);