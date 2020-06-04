console.log("Hello from console!");

async function getAllPets(){
   let response = await fetch("/rest/pets");

   response = await response.json();

   console.log(response);
}

async function getAllOwners(){
    let response = await fetch("/rest/owners");

    response = await response.json();

    console.log(response);
}

async function getOneOwner(id){
    let owner = await fetch("/rest/owners/" + id);

    owner = await owner.json();

    console.log(owner);
}

async function createNewPet(pet){
    let petFromServer = await fetch("/rest/pets", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(pet)
    })
    petFromServer = await petFromServer.json();

    console.log(petFromServer);
}

const pet = {
        name: "Kalle",
        species: "Lamb",
        owner: 1
}

/* ***CRUD***
Alla olika metoder fungerar med fetch
C: POST
R: GET (default)
U: PUT
D: DELETE


//createNewPet(pet);

getOneOwner(1);
getAllOwners();
getAllPets();