// Add your code here

//submitData function

function submitData(userName, userEmail) {
    return fetch ("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        }),
    })
    .then(function (response){
        return response.json();
    })
    .then(function (data){
        console.log(data);
        //append ID to DOM
        document.body.innerHTML = data["name"] + "'s ID is: " + data["id"];
       
    })
    .catch(function (error) {
        alert("Unauthorized Access");
        //append error message to DOM
        document.body.innerHTML = error["message"];
        
    });
    
    
};

/*
function renderId(userId) {
    const body = document.querySelector("body");
    
    const h1 = document.createElement("h1");
    h1.innerHTML = idName.id;
    body.appendChild(h1);
    
}

*/





/*
//EXAMPLE FROM LAB
const configurationObect = {
    method: "POST",
    headers: {
        "Content-Type": "application/json", //what format the data being sent is
        "Accept": "application/json", //what data we accept in return
    },
    //data being sent in fetch is stored in the "body"
    //JSON.stringify() is a method that converts object to strings
    body: JSON.stringify({
        dogName: "Byron",
        dogBreed: "Poodle",
    }),

};

//Sending a POST requires fetch to have 2 arguments("URL", javascript object)
fetch("http://localhost:3000/dogs", configurationObect)
    .then(function (response) {
        return response.json();
    })
    .then(function (object) {
        console.log(object);
    })
    //Write catch() to "handle error" and provide an alert message
    .catch(function (error) {
        alert("Bad things! Ragnarok!");
        console.log(error.message);
    });
*/