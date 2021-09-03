console.log(`running script...`);

//* =============== VARIABLES

const btnOne = document.getElementById('button1');
const btnTwo = document.getElementById('button2');



//* ============ FUNCTIONS
const loadCustomer = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = () => {
        if (xhr.status === 200){
            // parse JSON to an object
            const customer = JSON.parse(xhr.responseText)

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output
            
            // console.log(xhr.responseText);
        }
    }

    xhr.send()
};


//* ==================== Event Listeners

btnOne.addEventListener('click', loadCustomer);

