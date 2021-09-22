

const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/category/electronics`)
    .then(res => {
        if(!res.ok){
            throw new Error(`Something went wrong ${res.status}`);
        }

        res.json().then(data => {
            console.log(data);


        })
    })
    
}