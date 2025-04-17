document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = 'Processing...';
    
    try {
        const response = await fetch('/predict/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': formData.get('csrfmiddlewaretoken')
            }
        });
        
        const data = await response.json();
        
        if (data.status === 'success') {
            resultDiv.textContent = data.message;
            resultDiv.className = data.prediction === 1 ? 'positive' : 'negative';
        } else {
            resultDiv.textContent = data.message;
            resultDiv.className = 'error';
        }
    } catch (error) {
        resultDiv.textContent = 'Error making prediction. Please try again.';
        resultDiv.className = 'error';
    }
});
