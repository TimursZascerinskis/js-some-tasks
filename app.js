document.getElementById('calculateButton').addEventListener('click', function() {

    let radius = document.getElementById('radius').value;
    radius = parseFloat(radius);


    const circumference = 2 * Math.PI * radius;


    document.getElementById('result').innerHTML = `
        <p>Riņķa līnijas garums: ${circumference.toFixed(2)} cm</p>
    `;
});
