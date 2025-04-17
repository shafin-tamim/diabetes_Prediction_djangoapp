# Diabetes Prediction Django App

A web application built with Django for predicting diabetes risk.

## Setup Instructions

1. Clone the repository
```bash
git clone <repository-url>
cd diabetes_Prediction_djangoapp
```

2. Create a virtual environment
```bash
python -m venv venv
```

3. Activate the virtual environment
- Windows:
```bash
venv\Scripts\activate
```
- Unix/MacOS:
```bash
source venv/bin/activate
```

4. Install required packages
```bash
pip install -r requirements.txt
```

5. Apply database migrations
```bash
python manage.py migrate
```

6. Run the development server
```bash
python manage.py runserver
```

7. Open your web browser and navigate to `http://127.0.0.1:8000`

## Requirements
- Python 3.8+
- Django 3.2+
- Other dependencies listed in requirements.txt
