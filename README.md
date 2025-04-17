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

5. Initialize and apply database migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

6. Run the development server
```bash
python manage.py runserver
```

7. Open your web browser and navigate to `http://127.0.0.1:8000`

## Requirements
// ...existing code...

## Troubleshooting

If you see the message "You have X unapplied migration(s)", run:
```bash
python manage.py migrate
```

This will apply all pending database migrations and resolve the warning message.
