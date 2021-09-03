console.log(`running script...`);

//* =============== VARIABLES

const btnOne = document.getElementById('button1');
const btnTwo = document.getElementById('button2');



//* ============ FUNCTIONS

// Load single Customer
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

            document.getElementById('customer').innerHTML = output;
            
            // console.log(xhr.responseText);
        }
    }

    xhr.send()
};

// Load all customers
const loadCustomers = () => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customers.json', true);

    xhr.onload = () => {
        if (xhr.status === 200){
            // parse JSON to an object
            const customers = JSON.parse(xhr.responseText);
            // create empty string variable
            let output = ''; // HTML needs to be strings to add it to innerHTML
            // loop over the customers array
            customers.forEach(customer => {
                // foreach customer create these elements and append it to output
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            //console.log(output);
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    xhr.send();
}



//* ==================== Event Listeners

btnOne.addEventListener('click', loadCustomer);

btnTwo.addEventListener('click', loadCustomers);

