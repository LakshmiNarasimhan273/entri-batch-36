// Array methods

// forEach
const companies = ['Entri', 'Zoho', 'Google'];
companies.forEach(companyName => {
    console.log(companyName);    
});

// map
const cartPrice = [500, 350, 775, 400];
const totalPrice = cartPrice.map(productPrice => {
    return productPrice * 1.50;
})
console.log(totalPrice);

// reduce
const total = totalPrice.reduce((a, b) => {
    return a + b;
});
console.log("Your final price", total);

// filter
const students = [
    {
      "id": "S001",
      "name": "Arjun Kumar",
      "rank": 1,
      "grades": {
        "math": "A+",
        "science": "A",
        "english": "A+"
      },
      "marks": {
        "math": 98,
        "science": 92,
        "english": 95
      }
    },
    {
      "id": "S002",
      "name": "Priya Sharma",
      "rank": 2,
      "grades": {
        "math": "A",
        "science": "A+",
        "english": "A"
      },
      "marks": {
        "math": 90,
        "science": 96,
        "english": 91
      }
    },
    {
      "id": "S003",
      "name": "Rohan Singh",
      "rank": 3,
      "grades": {
        "math": "B+",
        "science": "A",
        "english": "B+"
      },
      "marks": {
        "math": 85,
        "science": 90,
        "english": 88
      }
    },
    {
      "id": "S004",
      "name": "Sneha Reddy",
      "rank": 4,
      "grades": {
        "math": "A",
        "science": "B+",
        "english": "A-"
      },
      "marks": {
        "math": 92,
        "science": 87,
        "english": 89
      }
    },
    {
      "id": "S005",
      "name": "Vikram Patel",
      "rank": 5,
      "grades": {
        "math": "B",
        "science": "B",
        "english": "B+"
      },
      "marks": {
        "math": 80,
        "science": 82,
        "english": 85
      }
    }
]
// console.log(students);
const filteredStudents = students.filter(student => {
    return student.grades.science === 'A';
})
console.log(filteredStudents);

// find 
const searchStudents = students.find(searchStudent => {
    return searchStudent.name === "Arjun Kumar";
});
console.log(searchStudents);

// sort
const numbers = [234, 6, 1, 5, 3, 2, 7];
// 1, 2, 3, 5, 6, 7, 234
numbers.sort((a, b) => {
    return b - a;
});
console.log(numbers);

// push & pop | shift & unshift
const num = [1, 2, 3, 4];

num.push(5);
console.log(num);

num.unshift(0);
console.log(num);

num.pop();
console.log(num);

num.shift();
console.log(num);

document.addEventListener("DOMContentLoaded", function(){
    const button = document.getElementById("paynow");
    const message = document.getElementById("message");

    const password = document.getElementById("passwordinput");
    const toggleButton = document.getElementById("togglePin");

    toggleButton.addEventListener("change", function(){
        if(toggleButton.checked){
            password.type = "text";
        }else{
            password.type = "password";
        }
    })

    button.addEventListener("click", function(){
        message.innerText = "Payment success :)";
        password.value = "";
    })
})




