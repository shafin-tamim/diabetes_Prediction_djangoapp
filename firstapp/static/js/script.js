document.getElementById('predictionForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const resultDiv = document.getElementById('result');
    
    try {
        const response = await fetch('/predict/', {
            method: 'POST',
            body: formData,
            headers: {
                'X-CSRFToken': formData.get('csrfmiddlewaretoken')
            }
        });
        
        const data = await response.json();
        resultDiv.textContent = data.result;
        resultDiv.className = data.result.includes('positive') ? 'positive' : 'negative';
    } catch (error) {
        resultDiv.textContent = 'Error making prediction';
        resultDiv.className = '';
    }
});
