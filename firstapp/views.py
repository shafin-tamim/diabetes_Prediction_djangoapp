from django.shortcuts import render
from django.http import JsonResponse
import numpy as np
import os
import joblib
from sklearn.linear_model import LogisticRegression

def index(request):
    return render(request, 'firstapp/index.html')

def predict(request):
    if request.method == 'POST':
        try:
            # Load the existing model
            model_path = 'F:/Django/app/diabetes_Prediction/ML/diabetes_model.pkl'
            if os.path.exists(model_path):
                model = joblib.load(model_path)
                if not isinstance(model, LogisticRegression):
                    return JsonResponse({'error': 'Invalid model format'})
            else:
                return JsonResponse({'error': 'Model file not found'})

            # Get form data
            features = [
                float(request.POST.get('pregnancies')),
                float(request.POST.get('glucose')),
                float(request.POST.get('bloodpressure')), 
                float(request.POST.get('skinthickness')),
                float(request.POST.get('insulin')),
                float(request.POST.get('bmi')),
                float(request.POST.get('dpf')),
                float(request.POST.get('age'))
            ]

            # Make prediction
            features_array = np.array(features).reshape(1, -1)
            prediction = model.predict(features_array)[0]
            result = "The result is positive - You may have diabetes" if prediction == 1 else "The result is negative - You are healthy"
            
            return JsonResponse({'result': result})

        except Exception as e:
            return JsonResponse({'error': f'Prediction error: {str(e)}'})
    
    return JsonResponse({'error': 'Invalid request method'})
