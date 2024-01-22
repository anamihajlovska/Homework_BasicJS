let myBtn = document.getElementById("myBtn");
let printAstronauts = document.getElementById("printAstronauts");

myBtn.addEventListener("click", function(event){
    event.preventDefault();

    fetch("http://api.open-notify.org/astros.json")
    
    .then(function(response){
       
        response.json()
        .then(function(data){
            console.log(data);
            print(data.people);

        })
        .catch(function(error){
            console.log("An error while parsing json");
    })
    
    .catch(function(response){
        console.log("An error occurred");
        console.log(response);
    })
    })
})

function print(responseData){
    printAstronauts.innerHTML = "";
    for (let astronaut of responseData){
        printAstronauts.innerHTML += `<li>${astronaut.name}</li>`;
    }
}