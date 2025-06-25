// DOM

// 1) getElementById - select individual element
function changeTitle(){
    // getElementById - it will take the id name and search the html tag element 
    // with same having id, then it will select the tag and assign it to this js variable
    // document - is our html file
    const heading = document.getElementById("title");
    // innerText overrides the existing text and update this new text value
    heading.innerText = "Welcome to Fullstack web development";
    heading.style.color = "red";
}

// 2) getElementsByClassName - selecting a group of elements 
function changeColor(){
    const paragraphs = document.getElementsByClassName('text');

    // Selecting all paragraph tags from our html, we need to create a looping process
    for(let i = 0; i < paragraphs.length; i++){
        paragraphs[i].style.color = "green";
        paragraphs[i].style.fontWeight = "bold";
    }
}

// 3) querySelector it accepts both id and class
function createBox(){
    const box = document.querySelector(".box")
    box.style.backgroundColor = "lightgreen";
    box.style.border = "2px solid yellow"
}