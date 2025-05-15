

// Variables to store the date parts
let userMonth, userDay, userYear;

// Initialize year display
document.getElementById('yearDisplay').textContent = '(Drag ball LEFT or RIGHT)';

// Month listener
document.getElementById('month').addEventListener('change', function() {
    userMonth = this.value;
});

// Day listener  
document.getElementById('day').addEventListener('change', function() {
    userDay = this.value;
});

// Year listener with display update
document.getElementById('yearRange').addEventListener('input', function() {
    userYear = this.value;
    document.getElementById('yearDisplay').textContent = this.value;
});

// Calculate age when question mark is clicked
document.querySelector('.questionMark').addEventListener('click', () => {
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