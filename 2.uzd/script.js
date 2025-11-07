 const radiusInput = document.getElementById("text");
        const saveButton = document.getElementById("saveButton");
        const sarakstsList = document.getElementById("saraksts");


        function addToHistory() {
            const text = String(radiusInput.value);

            const historyItem = document.createElement("li");
            historyItem.textContent = `${text}  `;
            sarakstsList.appendChild(historyItem);
        }


        saveButton.addEventListener("click", addToHistory);
