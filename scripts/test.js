var myImage = document.querySelector("img"); // store reference to img element
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

myImage.onclick = function() { // when user clicks on img element
    var mySrc = myImage.getAttribute("src"); //retrieve src attribute of img element
    if (mySrc === "images/doggo.jpg"){ // if the src att references doggo.jpg
        myImage.setAttribute("src", "images/food.jpg"); // switch reference to food.jpg
    } else { //else set it to doggo.jpg
        myImage.setAttribute("src", "images/doggo.jpg");
    }
}

function setUserName() {
    var myName = prompt("Enter Name");//asks user for info
    localStorage.setItem('name', myName); //call on API localStorage. allows us to store data in browser and retrieve it.
    //use .setItem func to create + store data item called 'name' set its value to myName. 
    myHeading.textContent = myName + " is the greatest cook"; //set textContent of heading to myName + string
}

if (!localStorage.getItem('name')) {//if name data doesnt exist, setUserName() runs to create it
    setUserName();
} else {//else retrieve store name w/ .getItemm(). set textContent of heading to string + user name
    var storedName = localStorage.getItem('name');
    myHeading.textContent = storedName + " is the greatest cook"
}

myButton.onclick = function() { // when button click, run setUserName()
    setUserName();
}