// if you're reading this and you;re not me... sorry for all of the comments... i'm only doing it to help myself learn atm haha...

// Variables to store the date parts
let userMonth;
let userDay;
let userYear;

// LESS VERBOSE WAY TO WRITE IT: 
// let userMonth, userDay, userYear; ... you can also write it like this to save space




// Assign year display ... also called 'initialize' ... 'initialize year display'
let yearDisplay = document.getElementById("yearDisplay");
yearDisplay.innerText = "(Drag ball L or R)";

// LESS VERBOSE WAY TO WRITE IT:
// document.getElementById('yearDisplay').textContent = '(Drag ball L or R)';



// Month listener ... use DOM event 'change'
let month = document.getElementById("month");
month.addEventListener('change', function() {
    userMonth = this.value;
});

// LESS VERBOSE WAY TO WRITE IT:
// document.getElementById('month').addEventListener('change', function() {
//     userMonth = this.value;
// });



// Day listener  
let day = document.getElementById("day");
day.addEventListener('change', function() {
    userDay = this.value;
});

// LESS VERBOSE WAY TO WRITE IT:
// document.getElementById('day').addEventListener('change', function() {
//     userDay = this.value;
// });



// Year listener with display update from up top ... use DOM event 'input'
let yearRange = document.getElementById("yearRange");
yearRange.addEventListener('input', function(){
    userYear = this.value;
    yearDisplay.innerText = this.value;
});

// LESS VERBOSE WAY TO WRITE IT
// document.getElementById('yearRange').addEventListener('input', function() {
//     userYear = this.value;
//     document.getElementById('yearDisplay').textContent = this.value;
// });



// Calculate age when 'click' icon is clicked ... use DOM event 'click' ... also using javascipt Date object... maybe ask mike if he has insights to make it click a little better.
let questionmark = document.querySelector(".questionMark");
questionmark.addEventListener('click', function(){
    if (userMonth && userDay && userYear) {
        const birthDate = new Date(userYear, userMonth - 1, userDay);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        
        if (today.getMonth() < birthDate.getMonth() || 
            (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        // alert(`You are ${age} years old!`);
        const ageDisplay = document.getElementById('ageDisplay');
        ageDisplay.textContent = `You are ${age} years old!`;
    } else {
        alert('Please select month, day, and year');
    }
});

// LESS VERBOSE WAY OF WRITING IT
// document.querySelector('.questionMark').addEventListener('click', function() {
//     if (userMonth && userDay && userYear) {
//         const birthDate = new Date(userYear, userMonth - 1, userDay);
//         const today = new Date();
//         let age = today.getFullYear() - birthDate.getFullYear();
        
//         if (today.getMonth() < birthDate.getMonth() || 
//             (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())) {
//             age--;
//         }
        
//         // alert(`You are ${age} years old!`);
//         const ageDisplay = document.getElementById('ageDisplay');
//         ageDisplay.textContent = `You are ${age} years old!`;
//     } else {
//         alert('Please select month, day, and year');
//     }
// });