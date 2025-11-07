 const radiusInput = document.getElementById("radius");
        const calculateButton = document.getElementById("calculateButton");
        const circleLengthElement = document.getElementById("circleLength");
        const circleAreaElement = document.getElementById("circleArea");
        const historyList = document.getElementById("history");

        function calculateCircle() {
            const radius = parseFloat(radiusInput.value);

            const circleLength = 2 * Math.PI * radius;
            const circleArea = Math.PI * Math.pow(radius, 2);


            circleLengthElement.innerText = `Rīņķa garums: ${circleLength.toFixed(2)} cm`;
            circleAreaElement.innerText = `Rīņķa laukums: ${circleArea.toFixed(2)} cm²`;

            addToHistory(radius, circleLength, circleArea);
        }

        function addToHistory(radius, length, area) {
            const historyItem = document.createElement("li");
            historyItem.textContent = `Rādiuss: ${radius} cm - Garums: ${length.toFixed(2)} cm, Laukums: ${area.toFixed(2)} cm²`;
            historyList.appendChild(historyItem);
        }

        calculateButton.addEventListener("click", calculateCircle);
