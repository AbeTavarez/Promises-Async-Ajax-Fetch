console.log(`running script...`);

//* =============== VARIABLES

const btnOne = document.getElementById('button1');




//* ============ FUNCTIONS
const loadCustomer = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = () => {
        if (xhr.status === 200){
            console.log(xhr.responseText);
        }
    }

    xhr.send()
};




btnOne.addEventListener('click', loadCustomer);