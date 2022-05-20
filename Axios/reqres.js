'use strict';



//SELECTOR
let mainDiv = document.querySelector("#results");
let firstBtn = document.querySelector("#get");





// HTTP REQUESTS - REQUEST/RESPONSE


// GET - READ
let getReq = () => {
axios.get("https://reqres.in/api/users")
    .then((response) => {
        
        results(response.data.data);
    } )
    .catch((error) => {
        console.error();
    });
}

    //THEN - SUCCESS
    //IF PROMISE IS FULFILLED    

    //CATCH - IF PROMISE FAILS
    //FAILURE

// POST - CREATE

// PUT/PATCH - UPDATE

// DELETE - DELETE



let results = (data) => {
    for (let entry of data) {
        const p = document.createElement("p");
        const text = document.createTextNode(`${entry.first_name} ${entry.last_name} ${entry.email}`);
        const img = document.createElement("img");
        img.setAttribute("src", entry.avatar);
        p.appendChild(text);
        mainDiv.appendChild(img);
        mainDiv.appendChild(p);
    }

}

firstBtn.addEventListener("click", getReq)