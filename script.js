document.getElementById('sentiment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const textInput = document.getElementById('text-input').value;
    const resultDiv = document.getElementById('result');

    fetch('http://127.0.0.1:8000/sentiment/', { // Actualiza la URL de la API
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: textInput })
    })
    .then(response => response.json())
    .then(data => {
        resultDiv.textContent = `Sentimiento: ${data.sentiment}`;
    })
    .catch(error => {
        resultDiv.textContent = 'Error al analizar el sentimiento';
    });
});

