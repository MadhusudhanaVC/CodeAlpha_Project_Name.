document.getElementById('age-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the input values
    const day = parseInt(document.getElementById('dob-day').value);
    const month = parseInt(document.getElementById('dob-month').value) - 1; // Months are zero-based in JS
    const year = parseInt(document.getElementById('dob-year').value);

    // Create a new Date object from the input values
    const dob = new Date(year, month, day);
    const age = calculateAge(dob);

    // Display the result
    document.getElementById('age-result').innerText = `You are ${age} years old.`;
});

function calculateAge(dob) {
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    // Adjust age if the birth date hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}
