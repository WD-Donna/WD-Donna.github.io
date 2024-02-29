const inputs = document.querySelectorAll('input[type="number"]');
const totalGradesInput = document.getElementById('totalGrades');
const averageInput = document.getElementById('average');

function calculateTotalAndAverage() {
    let total = 0;
    inputs.forEach(input => {
        total += parseFloat(input.value) || 0;
    });
    const average = total / inputs.length;
    
    totalGradesInput.value = total;
    averageInput.value = average.toFixed(2);
}

inputs.forEach(input => {
    input.addEventListener('change', calculateTotalAndAverage);
});