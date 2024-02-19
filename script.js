let discountApplied = false;

document.addEventListener('DOMContentLoaded', (event) => {

    let userName = prompt("Come ti chiami?");
    if (userName) {
        document.getElementById("welcomeMessage").innerText = `Benvenuto, ${userName}!`;
    }
    alert("Usa il codice 'Weekend20' per ottenere un 20% di sconto!");
    document.getElementById('applyDiscount').addEventListener('click', function() {
        const enteredCode = document.getElementById('discountCode').value;
        const messageElement = document.getElementById('discountMessage');

        if (enteredCode.trim().toUpperCase() === "WEEKEND20") {
            discountApplied = true;
            messageElement.innerText = "Sconto del 20% applicato!";
            document.getElementById('discountCode').value = ''; // Pulisce il campo
        } else {
            messageElement.innerText = "Codice errato. Riprova!";
            document.getElementById('discountCode').value = ''; // Pulisce il campo
            document.getElementById('discountCode').focus(); // Focus sul campo di input
        }
    });

    document.getElementById('calculatePrice').addEventListener('click', calculateAndDisplayTotal);
});

function calculateAndDisplayTotal() {
    let total = 0;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        total += parseFloat(checkbox.value);
    });
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerText = `Prezzo totale: €${total.toFixed(2)}`;

    if (discountApplied) {
        const discountFactor = 0.8; // 20% di sconto
        const discountedTotal = total * discountFactor;
        document.getElementById('discountedPrice').innerText = `Prezzo con sconto: €${discountedTotal.toFixed(2)}`;
    } else {
        document.getElementById('discountedPrice').innerText = '';
    }
}
